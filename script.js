const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function createPage(title, text, nextPage = null, skipLabel = "Zur nächsten Nachricht") {
  return {
    title,
    steps: text
      .trim()
      .split(/\r?\n/)
      .map(line => line.trim())
      .filter(Boolean),
    nextPage,
    skipLabel
  };
}

// Vorlage für die nächste Seite:
// Kopiere die folgende Zeile und füge deinen Text zwischen die Backticks ein.
// createPage("Seite 3", `
// Dein erster Satz.
// Dein zweiter Satz.
// Dein dritter Satz.
// `, null),

const pages = [
  createPage("Seite 1", `
Eigentlich wollte ich dir etwas schreiben.
Jetzt sitze ich hier und kann dir nicht einmal sagen, warum ich es nicht schaffe.
Ich gehe nicht davon aus, dass du das hier jemals lesen wirst.
Ehrlich gesagt weiß ich auch nicht so genau, warum ich das hier schreibe.
Ich würde lügen, wenn ich sagen würde, dass ich es für mich tue, aber ich glaube, einfach mal ein paar Gedanken aufzuschreiben hilft irgendwie.
Fast wie ein Tagebuch.
Ein digitales Tagebuch. Veröffentlicht von meinem öffentlichen Konto.
Vielleicht hätte ich doch ein anderes Konto wählen sollen, aber irgendwie ist es mir auch ziemlich egal.
Ich weiß gar nicht wo ich anfangen soll.
Ich habe irgendwie das Gefühl, so viel erzählen zu wollen, aber da ist niemand der es sich anhören würde.
Ich glaube, genau das ist der Grund warum ich das hier schreibe.
Irgendwie fühlt sich das hier gerade gut an, obwohl ich überhaupt noch nichts gesagt habe. Vielleicht ist es nur der Vollmond, der durch mein Fenster auf meine Tastatur scheint.
Vielleicht sieht er mir zu. Er würde es sich bestimmt anhören.
Was rede ich? Ich weiß es auch nicht.
Ich erinnere mich oft daran, dass du mir sagtest, ich solle ein Buch schreiben.
Mir wird gerade bewusst, dass ich es liebe zu schreiben, aber ich glaube ich könnte kein gutes Buch schreiben, welches dann auch eine richtige Handlung aufweisen würde. Ich bekomme es gerade einmal hin diese zusammhangslosen Gedanken zu formulieren.
Selbst wenn ich hier einfach mal so für mich schreibe, merke ich, dass ich es nicht schaffe das zu sagen, was ich wirklich sagen möchte.
Es ist unfassbar schwer etwas zu vergessen, was man jeden Tag erlebt und eigentlich auch überhaupt nicht vergessen will.
Es sind die kleinen Dinge, die mich jeden Tag zerreißen.
Ob es die Farbe Rosa ist, die ab sofort mehr sein sollte als nur eine Farbe, oder einfach Lilien, die irgendwie unausweichlich geworden sind.
In den vergangenen Tagen habe ich in meiner Galerie auf dem Handy ein Bild gefunden.
Es war ein Bild einer Duftkerze.
Darunter eine Nachricht: "Gefallen: Ja/Nein ?"
Ich musste kurz schmunzeln.
Heute hätte ich die Frage beantworten können.
Erinnerst du dich an den Text, der hier war, bevor ich mich dazu entschieden habe meine Gedanken aufzuschreiben?
Vermutlich nicht.
Er steht noch immer hier, aber ist nur im Code sichtbar.
Ich habe ihn bestimmt 5mal gelesen und konnte ihn nicht löschen.
Eins hat sich nicht geändert. Ich finde meine Handschrift immer noch furchtbar, auch wenn du sagtest, dass sie es nicht sei.
Ich glaube der QR-Code zu dieser Seite lag in dem Buch. Hast du es noch gelesen?
Mit wem rede ich? Vieleicht sollte ich mir einen Therapeuten suchen.
Manchmal erinnere ich mich daran, wie du mir erzählt hast, dass du für, ich glaube es war Hugo, auf die Schnelle nichts zum Geburtstag gefunden hast und dann ein Buch aus deinem Schrank verschenkt hast.
Ich kann es nicht beeinflussen, aber ich hoffe, dass du dieses Buch nicht verschenkst.
Ich schweife schon wieder ab. Als ich gerade erneut zum Mond blickte, stohl ein Feuerwerkskörper meine Aufmerksamkeit.
Da heute Abend an vielen Orten der Tanz in den Mai gefeiert wird erscheint es mir nur logisch dies mit Feuerwerk zu begleiten.
Darum geht es mir aber überhaupt nicht. Ich musste, wie so oft, an Silvester denken.
Eigentlich war Silvester nie etwas wirklich besonderes für mich. Es war nur ein schlechter Grund um sich mit Freunden oder in meinem Fall eher mit Bekannten zu betrinken und unverantwortlich mit Feuer zu spielen.
Die nächsten Jahresumbrüche werden vermutlich auch genau wie beschrieben, vielleicht auch alleine. Mal sehen.
Aber letztes Silvester war anders.
Ich führe das an dieser Stelle nicht weiter aus. Ich möchte mich einfach nur für diese Zeit bedanken.
Ich hab heute Erfahren, dass wir zur Hausbesichtigung von Manuela und Danny in eurem ehemaligen Haus eingeladen wurden.
Lustiger Zufall, nicht?
Manchmal weiß ich nicht, ob ich lachen oder weinen soll.
Wir hatten mal über Vergänglichkeit gesprochen. Vielleicht erinnerst du dich noch daran.
Manchmal frage ich mich, ob nur gute Dinge von dieser Vergänglichkeit betroffen sind, oder eher warum Schmerz davon nicht betroffen ist und wenn er es doch ist, warum es dann so ewig dauert.
Irgendwie ist dieser Schmerz auch sehr hilfreich. Man fängt an mehr nachzudenken und sein eigenes Verhalten aus jedem Winkel zu reflektieren.
Man wird unsicher, aber wird sich immerhin niemals mehr überschätzen. Man findet zu sich.
Ist aber auch egal.
Falls es doch passieren sollte, dass du zufällig hier landest, muss ich mich dringend noch einmal ausführlich bei dir bedanken und auch entschuldigen.
Die Zeit mit dir war mehr als nur besonders. Du hast mich akzeptiert. Du hast mir zugehört. Du hast mir das Gefühl gegeben nicht komplett überflüssig zu sein.
Du warst der erste Mensch, der mich wertgeschätzt hat. Die Familie ist durch soziale und gesellschaftliche Normen ja irgendwie dazu gezwungen, aber du warst es nicht.
Du konntest frei entscheiden und hast dich für mich entschieden. Ich konnte/kann es nicht ganz nachvollziehen, aber ich bin dir unendlich dankbar, dass ich es erleben konnte.
Ich wollte mich auch entschuldigen. Als wir das erste Mal über unsere unterschiedlichen Situationen gesprochen haben und ich dir von Hamburg erzählt habe, war mir sofort klar, dass es doch ein Problem sein würde.
Ich habe weggeschaut und dieses Problem ignoriert. Ich hatte in dir etwas, was wohl niemand freiwillig weggeben würde.
Im Nachhinein war dieses Verhalten ziemlich egoistisch und unfair.
Deine letzte Nachricht hat mit "Ich hoffe du hasst mich nicht" geendet. Warum sollte ich dich hassen?
Du hast nur das ausgesprochen, was wir beide nicht sehen wollten.
Du hast in deiner Nachricht auch geschrieben, dass alles was du sagst sich "feige" und "unfair" anfühlt und das es an dir liegt.
Zu schreiben, was wir beide ignoriert haben ist in meinen Augen überhaupt nicht feige und unfair. Ich denke auch nicht, dass es an dir liegt. Für unsere Situationen kannst du überhaupt nichts.
Bitte gib dir keine Schuld.
Eigentlich ist da noch so viel, was ich sagen will, aber ich weiß nicht so ganz wie ich mich ausdrücken soll.
Komische Art seine Gedanken zu formulieren. Ganz ohne roten Faden, aber ist jetzt auch egal.
Eine Sache noch. Meine kleine Schwester schaut aktuell eine Serie und die Haupfigur heißt "Elena".
Ein schöner Name. Ich hoffe ich erinnere mich korrekt.
Ich hoffe es geht dir gut und natürlich auch allen anderen die das lesen.
Ist wohl eher zu einem Selbstgespräch geworden, aber es hat sich irgendwie befreiend angefühlt.
`, 2, "Zur nächsten Nachricht"),
  createPage("Finale", `
Neuer Tag neue Seite?
Eigentlich ist es ja die gleiche Seite, aber spielt keine Rolle.
Ich sitze also schon wieder hier. Vor einem Programm, welches ich täglich benutze.
Aber was tue ich? Normalerweise schreibe ich hier Sachen, die einen tatsächlichen Zweck haben, einer strengen Syntax folgen und einfach Sinn ergeben.
Wieso also zweckentfremde ich meinen Arbeitsplatz?
Vielleicht ist es die Gewohnheit, oder das Gefühl nicht eingeschränkt zu werden.
Hier erfahre ich nicht die Restriktionen, wie ich sie bei Word auf einem A4 hätte. Kein Seitenrand, Animationen oder sogar Musik.
Schade nur, dass ich nicht kreativ genug bin, um einem Leser ein tatsächliches Gefühl zu vermitteln. Aber alleine die Möglichkeit es zu können gefällt mir.
Vielleicht nehme ich mir später doch etwas Zeit um ein paar Details einzubauen.
Ich schreibe schon wieder nur Quatsch und bin kurz davor zu vergessen, was ich eigentlich sagen wollte.
Beim Lesen ist mir aufgefallen, dass es gestern eher ein offener Dialog war. Als würde man mit dem Leser sprechen.
Ich frage mich wie das aus der Perspektive eines Lesers wirkt.
Ich hätte nie gedacht, dass ich so was einmal machen würde. Ich könnte gerade einfach Alles machen, aber ich sitze hier und schreibe.
Die Dinge die ich normalerweise machen würde, sind gerade irgendwie langweilig. Aber warum?
Ich bin auch in letzter Zeit ziemlich müde. Nicht die Art von Müdigkeit, die nach einem Mittagsschlaf wieder weg ist. Eine seltsame Art von Lustlosigkeit.
Ich bin mir sicher, dass jeder dieses Gefühl kennt.
Ist aber auch egal.
Ich war die Tage einkaufen. Ich wollte einen Anzug kaufen. Gut, dass es dafür einfach einen ganzen Laden gibt.
Die Beratung war bemüht, aber doch spürbar überfragt, da die normalen Größen zu klein waren, aber die Langgrößen auch nicht so richtig passten.
Er schickte mich in einen anderen Laden mit den Worten: "Andere Mütter haben auch schöne Töchter.".
Seltsame Redewendung, wenn man bedenkt, dass es um Klamotten geht.
Lange nach dem Kauf eines Anzugs und auch noch jetzt beschäftigen mich seine finalen Worte.
Warum genau hatte er das gesagt? War das Zufall? Sagt er das immer?
Vielleicht sah er es mir an, oder ich habe es verraten, als er mich nach der Farbe der Fliege fragte und ich ihm sagte, dass es egal sei.
Jedoch behielt er recht. Ich habe einen schöneren Anzug gekauft, aber ist die Wirkung nach außen alles was zählt?
Er mag schön sein, aber wie trägt er sich? Ist das Material angenehm? Fühlt man sich wohl darin?
Er sollte also seine Redewendung überdenken. Er könnte es mit positiven Eigenschaften erweitern, die nicht nur oberflächlich sind.
Ein Anzug kann noch so schön sein, aber was wenn er einfach nicht passt?
Ich glaube mein Punkt ist klar.
Davon abgesehen war ich sehr fasziniert von der Art, wie er mir versuchte zu helfen und genauer zu erklären worauf ich beim Kauf achten soll.
Es gibt nichts schöneres als Menschen, die sich in ihrem Beruf voll entfalten können.
Ich frage mich auf wie viel Prozent der Menschen das zutrifft. Vielleicht sind es so 5%.
Ich vermute, dass ein Großteil dieser 5% im sozialen Sektor tätig ist.
Irgendwie fand ich die Dialogvariante auf der ersten "Seite" besser. Das wirkt hier irgendwie super langweilig.
Aber warum ist ein Dialog ohne Antwort nicht langweilig? Vielleicht ist es einfach das Gefühl direkt mit jemandem zu kommunizieren.
Irgendwie armselig. Aber es hilft um etwas Zeit zu überbrücken.
Das ist so verrückt. Wenn ich keine Zeit habe verschiebe ich immer alles auf die Momente in denen die Zeit da ist. Und jetzt? Jetzt wo ich Zeit habe mache ich so einen Quatsch hier.
Eigentlich ist es total unsinnig, dass ich manche Dinge so formuliere als würde das jemals jemand außer vielleicht dir lesen.
Ist das der Grund warum ich das tue? Möchte ich mit dir reden?
Ich glaube schon.
Aber ich wüsste überhaupt nicht, was ich sagen sollte. Zudem kann ich mir nur schwer vorstellen, dass du es hören möchtest.
Seit dem letzten Satz sind nun bestimmt 15 Minuten vergangen. Ich weiß es wirklich nicht.
Ich könnte dir sagen, wie schön deine Augen sind, oder das die geflochtenen Strähnen in deinem Haar so wunderbar aussehen, aber würde ich diese Gelegenheit so nutzen?
Ich will nicht behaupten, dass ich die Gelegenheit so verschwenden würde, aber ich glaube, dass da etwas mehr ist. Aber was?
Das wäre vermutlich das einzige Problem, mit welchem ich mich gerne auseinandersetzen würde.
Ich weiche schon wieder ab, aber das ist schon okay. Es heißt ja, dass man viele Dinge erst dann schätzt, wenn sie fort sind.
Angesichts dessen frage ich mich immer öfter, ob ich dich und alles was du mir geschenkt hast, genug geschätzt habe.
Ich erwarte keine Antwort, aber es mal richtig zu formulieren war irgendwie notwendig.
Du hast mir eigentlich nie einen Grund gegeben unsicher zu sein. Woher kommt sie aber?
Mir ist gerade eingefallen, dass ich vorhin geschrieben habe, dass ich das Erlebnis für den Leser optimieren wollte, aber angesichts der Uhrzeit und meiner Antriebslosigkeit bleibt vorerst alles so wie es ist.
Ich habe so viele Fragen. Auch wenn ich keine Antwort bekomme, ist es mir wichtig, sie gestellt zu haben.
Wie geht es dir?
Ist Olli wieder etwas größer geworden?
Wie ist euer neues Haus, vor allem da es ja jetzt schon etwas eingerichtet ist?
Ist es immer noch so stressig auf deiner Arbeit, oder hat sich die Situation mit den wenigen Kollegen verbessert?
Ich hätte noch so viele Fragen, aber ich glaube, dass es erstmal reicht.
Verschwende ich meine Zeit, oder hilft es mir?
Fühlt sich eher nach Verschwendung an.
Ich glaube das reicht erstmal für heute.
Vielleicht führe ich das bald fort.
Eine Sache noch.
Ich vermisse dich sehr.
`, 3),
  createPage("Seite 3", `
Dein erster Satz.
Dein zweiter Satz.
Dein dritter Satz.
`, null)
];

let particleList = [];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.y += star.s;
    if (star.y > canvas.height) star.y = 0;
    ctx.fillStyle = star.color;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
  });

  for (let i = particleList.length - 1; i >= 0; i--) {
    const p = particleList[i];
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 0.008;
    if (p.alpha < 0) p.alpha = 0;
    drawParticle(p);
    if (p.alpha === 0) particleList.splice(i, 1);
  }

  requestAnimationFrame(draw);
}

function drawParticle(p) {
  ctx.save();
  ctx.globalAlpha = p.alpha;
  ctx.translate(p.x, p.y);
  ctx.fillStyle = p.color;

  const topCurveHeight = p.r * 0.3;
  ctx.beginPath();
  ctx.moveTo(0, topCurveHeight);
  ctx.bezierCurveTo(0, topCurveHeight - p.r / 2, -p.r, topCurveHeight - p.r / 2, -p.r, topCurveHeight);
  ctx.bezierCurveTo(-p.r, topCurveHeight + p.r / 2, 0, topCurveHeight + p.r, 0, topCurveHeight + p.r);
  ctx.bezierCurveTo(0, topCurveHeight + p.r, p.r, topCurveHeight + p.r / 2, p.r, topCurveHeight);
  ctx.bezierCurveTo(p.r, topCurveHeight - p.r / 2, 0, topCurveHeight - p.r / 2, 0, topCurveHeight);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

const stars = Array.from({ length: 120 }, () => {
  const isRose = Math.random() < 0.25;
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.4,
    s: Math.random() * 0.35 + 0.15,
    color: isRose ? "#F7CAC9" : "#5DADE2"
  };
});

const envelope = document.querySelector(".envelope");
const tap = document.querySelector(".tap");
const skipBtn = document.getElementById("skip");
const music = document.getElementById("music");

let currentStep = -1;
let started = false;
let stepNodes = [];
let currentPageIndex = 1;

function getPageIndex() {
  const query = new URLSearchParams(window.location.search);
  const raw = parseInt(query.get("page"), 10);
  if (Number.isInteger(raw) && raw >= 1 && raw <= pages.length) {
    return raw;
  }
  return 1;
}

function renderPage(index) {
  currentPageIndex = index;
  const page = pages[currentPageIndex - 1];
  envelope.innerHTML = "";

  page.steps.forEach(text => {
    const p = document.createElement("p");
    p.className = "step";
    p.textContent = text;
    envelope.appendChild(p);
  });

  if (page.nextPage) {
    skipBtn.textContent = page.skipLabel || "Zur nächsten Seite";
    skipBtn.classList.remove("hidden");
  } else {
    skipBtn.classList.add("hidden");
  }

  currentStep = -1;
  stepNodes = document.querySelectorAll(".step");
  envelope.classList.add("hidden");
  envelope.classList.remove("fly-in");
  tap.style.display = "block";
}

function goToPage(index) {
  const next = Math.max(1, Math.min(pages.length, index));
  window.location.search = `?page=${next}`;
}

function goToNextPage() {
  const page = pages[currentPageIndex - 1];
  if (page.nextPage) {
    goToPage(page.nextPage);
  }
}

skipBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  goToNextPage();
});

document.body.addEventListener("click", (e) => {
  if (!started) {
    started = true;
    tap.style.display = "none";
    envelope.classList.remove("hidden");
    envelope.classList.add("fly-in");
    music.volume = 0.35;
    music.play();
    return;
  }

  if (currentStep < stepNodes.length - 1) {
    currentStep += 1;
    stepNodes[currentStep].classList.add("show");
    createHeartParticles(e.clientX, e.clientY);
  } else {
    const page = pages[currentPageIndex - 1];
    if (page.nextPage) {
      goToNextPage();
    }
  }
});

function createHeartParticles(x, y) {
  const count = 8;
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 6 + 4;
    const color = Math.random() < 0.5 ? "#F7CAC9" : "#5DADE2";
    particleList.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -Math.random() * 1.8 - 0.5,
      r: size,
      color,
      alpha: 1
    });
  }
}

currentPageIndex = getPageIndex();
renderPage(currentPageIndex);
draw();
