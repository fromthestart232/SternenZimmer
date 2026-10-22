// SternenZimmer – Leseansicht, Sternenhimmel, Musik und Antworten.
// Die Texte der Seiten stehen in pages.js.
/* global pages, replyPages */

(() => {
  "use strict";

  const SUPABASE_URL = "https://yaecvybfldlcdgzyokep.supabase.co";
  // Öffentlicher anon-Schlüssel. Was er darf, regeln die RLS-Policies der Tabelle in Supabase.
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhZWN2eWJmbGRsY2Rnenlva2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NDIzMDIsImV4cCI6MjA5NTAxODMwMn0.vZlI_xmaht7farHYkJbt-8LyMELFAwIYF7iXrIJWbRI";
  const REPLY_MAX_LENGTH = 500;
  const REPLY_TIMEOUT_MS = 15000;
  const MUSIC_VOLUME = 0.35;
  const MUSIC_FADE_MS = 2000;
  const STAR_COLORS = { rose: "#F7CAC9", blue: "#5DADE2" };

  // Klicks auf diese Elemente decken keine Zeile auf.
  const CLICK_TARGETS = "a, button, input, textarea, select, label, form";
  // Wenn eines dieser Elemente den Fokus hat, gehören Leertaste und Enter ihm.
  const KEY_TARGETS = "a, button, input, textarea, select, summary, [contenteditable]";
  const ADVANCE_KEYS = [" ", "Enter", "ArrowRight"];

  const $ = id => document.getElementById(id);

  const els = {
    reader: $("reader"),
    topbar: document.querySelector(".topbar"),
    title: $("page-title"),
    body: $("letter-body"),
    end: $("letter-end"),
    endActions: document.querySelector(".end-actions"),
    pageNumber: $("page-number"),
    progress: $("progress-bar"),
    pagenav: $("pagenav"),
    skip: $("skip"),
    prev: $("prev"),
    endNext: $("end-next"),
    endNextLabel: $("end-next-label"),
    endToc: $("end-toc"),
    resume: $("resume"),
    resumeLabel: $("resume-label"),
    nextLine: $("next-line"),
    sound: $("sound-toggle"),
    music: $("music"),
    stars: $("stars"),
    toc: $("toc"),
    tocOpen: $("toc-open"),
    tocClose: $("toc-close"),
    tocList: $("toc-list"),
    stepwise: $("pref-stepwise"),
    replyForm: $("reply-box"),
    replyField: $("reply"),
    replyCount: $("reply-count"),
    replyStatus: $("reply-status"),
    replySend: $("send-btn")
  };

  if (typeof pages === "undefined" || !Array.isArray(pages) || pages.length === 0) {
    els.title.textContent = "Die Seiten konnten nicht geladen werden.";
    return;
  }

  const pageCount = pages.length;
  const replyPageList = typeof replyPages === "undefined" ? [] : replyPages;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const compactLayout = window.matchMedia("(max-width: 640px)");
  const scrollBehavior = () => (reducedMotion.matches ? "auto" : "smooth");

  /* ---------- Speicher ---------- */

  // localStorage kann gesperrt sein (z. B. im privaten Modus) – dann wird einfach nichts gemerkt.
  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(`sternenzimmer:${key}`);
        return raw === null ? fallback : JSON.parse(raw);
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(`sternenzimmer:${key}`, JSON.stringify(value));
      } catch {
        // Ohne Speicher geht nur die Erinnerung verloren, nicht die Funktion.
      }
    }
  };

  /* ---------- Hilfsfunktionen ---------- */

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function icon(name) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    svg.setAttribute("class", "icon");
    svg.setAttribute("aria-hidden", "true");
    use.setAttribute("href", `#i-${name}`);
    svg.append(use);
    return svg;
  }

  /* ---------- Sternenhimmel ---------- */

  function createSky(canvas) {
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let stars = [];
    let particles = [];
    let frame = 0;
    let resizeFrame = 0;
    let lastTime = 0;

    const makeStar = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.4,
      speed: (Math.random() * 0.35 + 0.15) * 60,
      color: Math.random() < 0.25 ? STAR_COLORS.rose : STAR_COLORS.blue,
      phase: Math.random() * Math.PI * 2,
      twinkle: 0.5 + Math.random() * 1.5
    });

    function resize() {
      const nextWidth = window.innerWidth;
      const nextHeight = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      if (width && height) {
        stars.forEach(star => {
          star.x *= nextWidth / width;
          star.y *= nextHeight / height;
        });
      }
      width = nextWidth;
      height = nextHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.round(Math.min(220, Math.max(120, (width * height) / 9000)));
      while (stars.length < count) stars.push(makeStar());
      stars.length = count;
      draw(performance.now());
    }

    function update(dt) {
      stars.forEach(star => {
        star.y += star.speed * dt;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      });

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.alpha -= 0.48 * dt;
        if (p.alpha <= 0) particles.splice(i, 1);
      }
    }

    function draw(time) {
      const t = time / 1000;
      const twinkle = !reducedMotion.matches;
      ctx.clearRect(0, 0, width, height);

      stars.forEach(star => {
        ctx.globalAlpha = twinkle ? 0.75 + 0.25 * Math.sin(t * star.twinkle + star.phase) : 1;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });

      particles.forEach(p => {
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    function loop(time) {
      // Nach einem Tab-Wechsel nicht alles auf einmal nachholen.
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      update(dt);
      draw(time);
      frame = requestAnimationFrame(loop);
    }

    function play() {
      cancelAnimationFrame(frame);
      if (reducedMotion.matches) {
        particles = [];
        draw(0);
        return;
      }
      lastTime = performance.now();
      frame = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(resize);
    });
    reducedMotion.addEventListener("change", play);

    resize();
    play();

    return {
      burst(x, y) {
        if (reducedMotion.matches) return;
        for (let i = 0; i < 10; i++) {
          particles.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 90,
            vy: -(Math.random() * 1.8 + 0.5) * 60,
            r: Math.random() * 4 + 2,
            color: Math.random() < 0.5 ? STAR_COLORS.rose : STAR_COLORS.blue,
            alpha: 1
          });
        }
      }
    };
  }

  /* ---------- Musik ---------- */

  function createMusic(audio, button) {
    let enabled = store.get("music", true) !== false;
    let unavailable = false;
    let fadeFrame = 0;

    function render() {
      button.setAttribute("aria-pressed", String(enabled && !unavailable));
      button.title = unavailable
        ? "Musik konnte nicht geladen werden"
        : enabled ? "Musik ausschalten" : "Musik einschalten";
    }

    function fadeIn() {
      cancelAnimationFrame(fadeFrame);
      const startTime = performance.now();
      const tick = now => {
        // Der Frame-Zeitstempel kann minimal vor startTime liegen.
        const progress = Math.min(Math.max((now - startTime) / MUSIC_FADE_MS, 0), 1);
        audio.volume = MUSIC_VOLUME * progress;
        if (progress < 1 && !audio.paused) fadeFrame = requestAnimationFrame(tick);
      };
      fadeFrame = requestAnimationFrame(tick);
    }

    function play() {
      if (unavailable || !audio.paused) return;
      button.classList.add("is-loading");
      audio.volume = 0;
      const attempt = audio.play();
      if (attempt) attempt.catch(() => button.classList.remove("is-loading"));
    }

    audio.addEventListener("playing", () => {
      button.classList.remove("is-loading");
      fadeIn();
    });

    audio.addEventListener("error", () => {
      unavailable = true;
      button.classList.remove("is-loading");
      button.disabled = true;
      render();
    });

    button.addEventListener("click", () => {
      enabled = !enabled;
      store.set("music", enabled);
      render();
      if (enabled) {
        play();
      } else {
        cancelAnimationFrame(fadeFrame);
        audio.pause();
        button.classList.remove("is-loading");
      }
    });

    render();

    return {
      // Wird bei jedem Tippen aufgerufen: startet die Musik, falls sie gewünscht ist und noch nicht läuft.
      resume() {
        if (enabled) play();
      }
    };
  }

  /* ---------- Lesen ---------- */

  const state = {
    index: 1,
    revealed: 0,
    phase: "intro" // intro → reading → done
  };
  let stepwise = store.get("stepwise", true) !== false;
  let resumeTarget = null;

  const currentPage = () => pages[state.index - 1];
  const hasDraft = () => !els.replyForm.hidden && els.replyField.value.trim() !== "";

  function readPageFromUrl() {
    const raw = parseInt(new URLSearchParams(window.location.search).get("page"), 10);
    return Number.isInteger(raw) && raw >= 1 && raw <= pageCount ? raw : 1;
  }

  function setPhase(phase) {
    state.phase = phase;
    els.reader.dataset.phase = phase;
  }

  function updateProgress() {
    const total = currentPage().steps.length;
    els.progress.style.setProperty("--progress", String(total ? state.revealed / total : 0));
  }

  function renderPage(index) {
    const page = pages[index - 1];
    const nextLabel = page.skipLabel || "Zur nächsten Seite";
    state.index = index;
    state.revealed = 0;

    els.title.textContent = `Seite ${index}`;
    els.pageNumber.textContent = `${index} / ${pageCount}`;
    els.body.replaceChildren();
    els.body.setAttribute("aria-live", stepwise ? "polite" : "off");
    els.end.hidden = true;
    els.replyForm.hidden = !replyPageList.includes(index);

    els.skip.textContent = nextLabel;
    els.endNextLabel.textContent = nextLabel;
    els.skip.hidden = !page.nextPage;
    els.endNext.hidden = !page.nextPage;
    // „Zur letzten Seite“ springt zur neuesten Seite.
    els.prev.hidden = index === pageCount;
    els.prev.title = `Seite ${pageCount}`;
    els.pagenav.hidden = els.skip.hidden && els.prev.hidden;
    document.body.classList.toggle("has-pagenav", !els.pagenav.hidden);
    document.body.classList.toggle("has-next", Boolean(page.nextPage));

    els.resume.hidden = !resumeTarget || resumeTarget === index;
    if (resumeTarget) els.resumeLabel.textContent = `Weiterlesen auf Seite ${resumeTarget}`;

    setPhase("intro");
    updateProgress();
    window.scrollTo(0, 0);
  }

  function createLine(text) {
    return element("p", "line", text);
  }

  // Hält das zuletzt aufgedeckte Element im angenehmen Lesebereich, ohne seinen Anfang unter die Kopfzeile zu schieben.
  function keepInView(target) {
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const top = els.topbar.offsetHeight;
    const bottom = window.innerHeight - (compactLayout.matches && !els.pagenav.hidden ? els.pagenav.offsetHeight : 0);
    const visible = bottom - top;
    if (rect.top >= top && rect.bottom <= top + visible * 0.72) return;

    const delta = Math.min(rect.bottom - (top + visible * 0.62), rect.top - top - 16);
    if (Math.abs(delta) > 1) window.scrollBy({ top: delta, behavior: scrollBehavior() });
  }

  function markRead(index) {
    const read = new Set(store.get("read", []));
    if (read.has(index)) return;
    read.add(index);
    store.set("read", [...read].sort((a, b) => a - b));
  }

  const readObserver = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
        if (state.phase === "done" && entries.some(entry => entry.isIntersecting)) markRead(state.index);
      })
    : null;
  if (readObserver) readObserver.observe(els.end);

  function finishPage() {
    setPhase("done");
    els.end.hidden = false;
    if (!readObserver) markRead(state.index);
  }

  function revealNext(origin) {
    const steps = currentPage().steps;
    if (state.revealed >= steps.length) return;

    const line = createLine(steps[state.revealed]);
    els.body.lastElementChild?.classList.remove("is-current");
    line.classList.add("is-current");
    els.body.append(line);
    state.revealed += 1;
    updateProgress();

    const rect = line.getBoundingClientRect();
    sky.burst(origin ? origin.x : rect.left + Math.min(rect.width, 48), origin ? origin.y : rect.top + rect.height / 2);

    if (state.revealed === steps.length) {
      finishPage();
      keepInView(els.replyForm.hidden ? els.endActions : els.replyForm);
    } else {
      keepInView(line);
    }
  }

  function revealAll() {
    const steps = currentPage().steps;
    const fragment = document.createDocumentFragment();
    steps.slice(state.revealed).forEach((text, i) => {
      const line = createLine(text);
      line.style.setProperty("--delay", `${Math.min(i * 40, 1200)}ms`);
      fragment.append(line);
    });
    els.body.setAttribute("aria-live", "off");
    els.body.lastElementChild?.classList.remove("is-current");
    els.body.append(fragment);
    state.revealed = steps.length;
    updateProgress();
    finishPage();
  }

  function start(origin) {
    store.set("lastPage", state.index);
    setPhase("reading");
    // Eine Seite ohne Zeilen ist sofort zu Ende.
    if (stepwise && currentPage().steps.length > 0) {
      revealNext(origin);
    } else {
      revealAll();
      if (origin) sky.burst(origin.x, origin.y);
    }
  }

  function canAdvance() {
    if (state.phase !== "done") return true;
    return stepwise && Boolean(currentPage().nextPage) && !hasDraft();
  }

  function advance(origin) {
    if (!canAdvance()) return;
    music.resume();
    if (state.phase === "intro") start(origin);
    else if (state.phase === "reading") revealNext(origin);
    else goToPage(currentPage().nextPage);
  }

  /* ---------- Navigation ---------- */

  function goToPage(index) {
    const target = Math.max(1, Math.min(pageCount, index));
    if (els.toc.open) els.toc.close();
    resumeTarget = null;
    if (target === state.index) return;

    history.pushState({ page: target }, "", `${window.location.pathname}?page=${target}`);
    renderPage(target);
    els.title.focus({ preventScroll: true });
  }

  window.addEventListener("popstate", () => {
    if (els.toc.open) els.toc.close();
    resumeTarget = null;
    renderPage(readPageFromUrl());
  });

  /* ---------- Übersicht ---------- */

  function buildToc() {
    const fragment = document.createDocumentFragment();
    pages.forEach((page, i) => {
      const number = i + 1;
      const link = element("a", "toc-link");
      link.href = `?page=${number}`;
      link.dataset.page = String(number);

      const num = element("span", "toc-num", String(number));
      num.setAttribute("aria-hidden", "true");
      const text = element("span", "toc-text");
      text.append(element("span", "toc-title", `Seite ${number}`), element("span", "toc-first", page.steps[0] || ""));

      link.append(num, text, element("span", "toc-state"));
      const item = element("li");
      item.append(link);
      fragment.append(item);
    });
    els.tocList.append(fragment);
  }

  function syncToc() {
    const read = new Set(store.get("read", []));
    els.tocList.querySelectorAll(".toc-link").forEach(link => {
      const number = Number(link.dataset.page);
      const status = link.querySelector(".toc-state");
      const isCurrent = number === state.index;
      const isRead = read.has(number);

      link.classList.toggle("is-read", isRead);
      if (isCurrent) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");

      status.replaceChildren();
      if (isCurrent) {
        status.textContent = "Aktuell";
      } else if (isRead) {
        status.append(icon("check"), element("span", "sr-only", "Gelesen"));
      }
    });
  }

  function openToc() {
    syncToc();
    els.toc.showModal();
    const current = els.tocList.querySelector('[aria-current="page"]');
    if (current) {
      els.tocList.scrollTop = current.offsetTop - els.tocList.offsetTop - (els.tocList.clientHeight - current.offsetHeight) / 2;
      current.focus({ preventScroll: true });
    }
  }

  els.tocOpen.addEventListener("click", openToc);
  els.endToc.addEventListener("click", openToc);
  els.tocClose.addEventListener("click", () => els.toc.close());

  // Klick auf den abgedunkelten Hintergrund schließt die Übersicht.
  els.toc.addEventListener("click", event => {
    if (event.target === els.toc) els.toc.close();
  });

  els.tocList.addEventListener("click", event => {
    const link = event.target.closest(".toc-link");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    goToPage(Number(link.dataset.page));
  });

  els.stepwise.checked = stepwise;
  els.stepwise.addEventListener("change", () => {
    stepwise = els.stepwise.checked;
    store.set("stepwise", stepwise);
    els.body.setAttribute("aria-live", stepwise ? "polite" : "off");
    if (!stepwise && state.phase === "reading") revealAll();
  });

  /* ---------- Antworten ---------- */

  async function sendReply(text) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REPLY_TIMEOUT_MS);
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/replies`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal"
        },
        body: JSON.stringify([{ text }]),
        signal: controller.signal
      });
      if (!response.ok) throw new Error(`Supabase antwortete mit ${response.status}`);
    } finally {
      clearTimeout(timer);
    }
  }

  function setupReply() {
    const { replyForm: form, replyField: field, replyCount: count, replyStatus: status, replySend: button } = els;
    let sending = false;

    const setStatus = (message, tone) => {
      status.textContent = message;
      if (tone) status.dataset.tone = tone;
      else delete status.dataset.tone;
    };

    const sync = () => {
      const length = field.value.length;
      count.textContent = `${length} / ${REPLY_MAX_LENGTH}`;
      count.classList.toggle("is-near", length >= REPLY_MAX_LENGTH * 0.9);
      button.disabled = sending || field.value.trim() === "";
    };

    field.addEventListener("input", () => {
      if (!sending) setStatus("");
      sync();
    });

    field.addEventListener("keydown", event => {
      if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        if (form.requestSubmit) form.requestSubmit();
        else button.click();
      }
    });

    form.addEventListener("submit", async event => {
      event.preventDefault();
      const text = field.value.trim();
      if (sending || !text) return;
      if (text.length > REPLY_MAX_LENGTH) {
        setStatus("Maximal 500 Zeichen.", "error");
        return;
      }

      sending = true;
      field.readOnly = true;
      button.setAttribute("aria-busy", "true");
      setStatus("Wird gesendet …");
      sync();

      try {
        await sendReply(text);
        field.value = "";
        setStatus("Gesendet", "success");
      } catch (error) {
        console.error(error);
        setStatus("Fehler beim Senden. Bitte versuche es gleich noch einmal.", "error");
      } finally {
        sending = false;
        field.readOnly = false;
        button.removeAttribute("aria-busy");
        sync();
      }
    });

    sync();
  }

  /* ---------- Eingaben ---------- */

  els.reader.addEventListener("click", event => {
    if (event.target.closest(CLICK_TARGETS)) return;
    // Wer am Ende Text markiert, will nicht weiterblättern.
    if (state.phase === "done" && !window.getSelection().isCollapsed) return;
    advance({ x: event.clientX, y: event.clientY });
  });

  document.addEventListener("keydown", event => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (!ADVANCE_KEYS.includes(event.key) || els.toc.open) return;
    if (event.target instanceof Element && event.target.closest(KEY_TARGETS)) return;
    if (!canAdvance()) return;
    event.preventDefault();
    if (!event.repeat) advance(null);
  });

  els.nextLine.addEventListener("click", () => advance(null));
  els.skip.addEventListener("click", () => goToPage(currentPage().nextPage));
  els.endNext.addEventListener("click", () => goToPage(currentPage().nextPage));
  els.prev.addEventListener("click", () => goToPage(pageCount));
  els.resume.addEventListener("click", () => goToPage(resumeTarget));

  /* ---------- Start ---------- */

  const sky = createSky(els.stars);
  const music = createMusic(els.music, els.sound);

  // Wer ohne ?page= wiederkommt, kann dort weiterlesen, wo er aufgehört hat.
  function findResumeTarget() {
    if (new URLSearchParams(window.location.search).has("page")) return null;
    const lastPage = store.get("lastPage", null);
    if (!Number.isInteger(lastPage) || lastPage < 1 || lastPage > pageCount) return null;
    const next = pages[lastPage - 1].nextPage;
    const target = new Set(store.get("read", [])).has(lastPage) && next ? next : lastPage;
    return target > 1 ? target : null;
  }

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  resumeTarget = findResumeTarget();
  buildToc();
  setupReply();
  renderPage(readPageFromUrl());
})();
