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
Mir wird gerade bewusst, dass ich es liebe zu schreiben, aber ich glaube ich könnte kein gutes Buch schreiben, welches dann auch eine richtige Handlung aufweisen würde. Ich bekomme es gerade einmal hin diese zusammenhangslosen Gedanken zu formulieren.
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
Mit wem rede ich? Vielleicht sollte ich mir einen Therapeuten suchen.
Manchmal erinnere ich mich daran, wie du mir erzählt hast, dass du für, ich glaube es war Hugo, auf die Schnelle nichts zum Geburtstag gefunden hast und dann ein Buch aus deinem Schrank verschenkt hast.
Ich kann es nicht beeinflussen, aber ich hoffe, dass du dieses Buch nicht verschenkst.
Ich schweife schon wieder ab. Als ich gerade erneut zum Mond blickte, stahl ein Feuerwerkskörper meine Aufmerksamkeit.
Da heute Abend an vielen Orten der Tanz in den Mai gefeiert wird erscheint es mir nur logisch dies mit Feuerwerk zu begleiten.
Darum geht es mir aber überhaupt nicht. Ich musste, wie so oft, an Silvester denken.
Eigentlich war Silvester nie etwas wirklich besonderes für mich. Es war nur ein schlechter Grund um sich mit Freunden oder in meinem Fall eher mit Bekannten zu betrinken und unverantwortlich mit Feuer zu spielen.
Die nächsten Jahresumbrüche werden vermutlich auch genau wie beschrieben, vielleicht auch alleine. Mal sehen.
Aber letztes Silvester war anders.
Ich führe das an dieser Stelle nicht weiter aus. Ich möchte mich einfach nur für diese Zeit bedanken.
Ich hab heute erfahren, dass wir zur Hausbesichtigung von Manuela und Danny in eurem ehemaligen Haus eingeladen wurden.
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
Du hast in deiner Nachricht auch geschrieben, dass alles was du sagst sich "feige" und "unfair" anfühlt und dass es an dir liegt.
Zu schreiben, was wir beide ignoriert haben ist in meinen Augen überhaupt nicht feige und unfair. Ich denke auch nicht, dass es an dir liegt. Für unsere Situationen kannst du überhaupt nichts.
Bitte gib dir keine Schuld.
Eigentlich ist da noch so viel, was ich sagen will, aber ich weiß nicht so ganz wie ich mich ausdrücken soll.
Komische Art seine Gedanken zu formulieren. Ganz ohne roten Faden, aber ist jetzt auch egal.
Eine Sache noch. Meine kleine Schwester schaut aktuell eine Serie und die Hauptfigur heißt "Elena".
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
Ich hätte nie gedacht, dass ich so was einmal machen würde. Ich könnte gerade einfach alles machen, aber ich sitze hier und schreibe.
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
Jedoch behielt er recht. Ich habe einen schöneren Anzug gekauft, aber ist die Wirkung nach außen alles, was zählt?
Er mag schön sein, aber wie trägt er sich? Ist das Material angenehm? Fühlt man sich wohl darin?
Er sollte also seine Redewendung überdenken. Er könnte es mit positiven Eigenschaften erweitern, die nicht nur oberflächlich sind.
Ein Anzug kann noch so schön sein, aber was wenn er einfach nicht passt?
Ich glaube mein Punkt ist klar.
Davon abgesehen war ich sehr fasziniert von der Art, wie er mir versuchte zu helfen und genauer zu erklären worauf ich beim Kauf achten soll.
Es gibt nichts Schöneres als Menschen, die sich in ihrem Beruf voll entfalten können.
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
Neuer Tag, gleiche Seite. Oder zumindest fühlt es sich so an.
Heute war es erstaunlich warm. So ein Tag, bei dem man eigentlich gute Laune haben müsste. Blauer Himmel, Sonne, alles wirkt irgendwie lebendiger. Ich glaube, viele würden sagen, dass es perfektes Wetter war. Für mich war es ein kleines bisschen zu viel davon. Zu warm, zu hell, zu… präsent. Schwer zu beschreiben. Vielleicht passt man sich einfach nicht immer dem an, was als „schön“ gilt.
Ich war trotzdem draußen. Ein bisschen zumindest. Man will sich ja nicht komplett dagegen sträuben. Und irgendwo hat es sich auch gut angefühlt. Diese Ruhe, die gleichzeitig gar keine ist, weil überall irgendetwas passiert. Menschen, Stimmen, Bewegung. Und ich mittendrin, aber irgendwie auch nicht so richtig.
Ich habe heute öfter aufs Handy geschaut als ich zugeben will. Eigentlich ohne Grund. Oder zumindest ohne einen guten Grund. Es ist eher so ein Automatismus geworden. Man entsperrt es, schaut kurz, macht es wieder aus und weiß im selben Moment schon, dass sich nichts verändert hat.
Naja. Nicht ganz nichts.
Ich bin vorhin über deinen Snap gestolpert. Ich weiß nicht warum genau ich ihn nochmal geöffnet habe. Vielleicht aus Gewohnheit, vielleicht aus Neugier, vielleicht auch einfach, weil ich es wollte. Wahrscheinlich letzteres.
Und ja… ich habe ihn mehr als einmal angesehen.
Irgendwie dumm, oder? So ein kurzer Moment, ein Bild, und man bleibt trotzdem hängen. Als hätte man Angst, irgendetwas zu übersehen, obwohl man ganz genau weiß, dass da nichts Neues dazukommt, egal wie oft man es anschaut.
Aber manche Dinge schaut man sich eben nicht an, um etwas Neues zu sehen.
Sondern einfach, weil sie… schön sind.
Und vielleicht auch, weil man sich für einen kurzen Moment wieder daran erinnert, wie sich etwas angefühlt hat, ohne dass sich eigentlich etwas verändert hat.
Ich merke gerade, wie ich versuche das irgendwie anders zu formulieren, damit es nicht so direkt klingt. Hat noch nie wirklich funktioniert.
Ist aber auch egal.
Ich schweife schon wieder ab.
Eigentlich wollte ich nur sagen, dass das Wetter schön war, auch wenn es mir persönlich ein bisschen zu warm war. Klingt banal, oder? Aber irgendwie fühlt sich selbst so ein einfacher Satz heute komplizierter an, als er sein sollte.
Vielleicht liegt es daran, dass solche Tage früher anders waren. Oder sich zumindest anders angefühlt haben.
Ich habe mich heute dabei erwischt, wie ich einfach irgendwo saß und nichts gemacht habe. Kein Handy, keine Musik, nichts. Einfach nur da. Früher hätte mich das verrückt gemacht. Heute fühlt es sich eher… notwendig an. Auch wenn ich nicht genau sagen kann, wofür.
Vielleicht um Gedanken zu sortieren. Oder um zu merken, dass sie sich sowieso nicht wirklich sortieren lassen.
Ich glaube, genau das ist es. Dieses Gefühl, dass man denkt, man müsste nur lange genug über etwas nachdenken, dann ergibt es irgendwann Sinn. Tut es aber nicht. Es wird nur… ruhiger vielleicht. Oder man gewöhnt sich einfach daran, dass nicht alles eine klare Antwort hat.
Komisch eigentlich.
Ich frage mich, ob du heute auch draußen warst. Ob du die Sonne genauso wahrgenommen hast oder ob sie für dich einfach nur da war. Ob du dich darüber gefreut hast oder ob es dir vielleicht auch ein kleines bisschen zu warm war.
Ich merke, dass ich wieder anfange Fragen zu stellen, auf die ich keine Antwort bekomme.
Hat sich wohl auch nicht geändert.
Der Tag war eigentlich unspektakulär. Und trotzdem fühlt er sich nicht ganz leer an. Vielleicht sind es genau diese kleinen Dinge, die einen Tag irgendwie füllen, ohne dass man sie wirklich greifen kann.
Oder ich rede mir das nur ein.
Ich glaube, ich lasse es für heute dabei. Nicht, weil ich nichts mehr zu sagen hätte, sondern eher, weil ich nicht weiß, wie ich es sagen soll.
Aber das kennst du ja schon.
Irgendwie ist der Text heute ziemlich kurz geworden, wobei doch so viel passiert ist.

`, 4),
  createPage("Seite 4", `
Ich hasse Sonntage.
Oder zumindest habe ich sie bisher immer gehasst. Es ist wie die Ruhe vor dem Sturm. Wie soll man Ruhe finden, wenn man den nächsten Tag schon vor Augen hat?
Seitdem die Schule vorbei ist sind alle Tage irgendwie gleich, nur Sonntag nicht. Ich wusste heute früh überhaupt nicht, dass Sonntag ist, aber ein Blick aufs Handy hat es mir dann verraten.
Es ist so ein komisches Gefühl, wenn die Routine der letzten 12 Jahre einfach auseinanderfällt.
Dieser Sonntag war irgendwie seltsam. Er war nicht gut, aber auch nicht schlecht.
Ich habe den ganzen Tag heute damit verbracht, mich zu hinterfragen.
Alle sagen immer "Wo ein Wille ist, ist auch ein Weg", aber was ist, wenn der Wille da ist, aber kein Weg? Oder habe nur ich den Weg nicht gefunden?
Nein, auch ich habe einen Weg gesehen. Bin ich ein schlechter Mensch, weil ich diesen Weg nicht gegangen bin? 
Man sollte natürlich seine Ziele nicht aus den Augen verlieren, und sich selbst an erste Stelle stellen, aber ich fühle mich furchtbar egoistisch und feige. 
Es war wohl wieder der Weg mit dem geringsten Widerstand und ich habe mich dafür sogar bewusst gegen meinen eigenen Willen entschieden. 
Normalerweise würde ich nun sagen "Es tut mir leid", aber wie kann ich mich so selbstverständlich für mein eigenes bewusstes Versagen entschuldigen? 
Ich habe das Gefühl, dass ich mich selbst nicht mehr verstehen kann. Es ist, als würde ich mich in einem Spiegel betrachten, aber das Spiegelbild ist verzerrt und bewegt sich nicht so, wie ich es tue. Es ist frustrierend und beängstigend zugleich.
Man wächst mit seinen Aufgaben, aber wie soll man wachsen wenn man vor jeder Aufgabe zurückschreckt? Dafür hasse ich mich ein bisschen mehr.
Keiner ist perfekt, aber das hier ist nicht mal mehr akzeptabel. Es ist einfach nur enttäuschend.
Was hat mich aber überhaupt davon abgehalten den Weg zu gehen, den ich eigentlich gehen wollte?
Ist es die Angst vor dem Unbekannten? Die Angst vor dem Scheitern? Nein, es ist der Gedanke: "Was sollen nur die anderen denken?".
Darüber hatten wir auch schon gesprochen. Vielleicht erinnerst du dich noch daran.
Man will seinen eigenen Weg gehen, aber gleichzeitig wartet man irgendwie auf Zustimmung von Menschen, die mit diesem Weg überhaupt nichts zu tun haben.
Ich habe heute lange darüber nachgedacht, ob ich mir das nur einrede, um mein eigenes Verhalten zu rechtfertigen.
Wäre zumindest einfacher.
Dann hätte ich eine Ausrede.
Aber ich glaube nicht, dass es so einfach ist.
Es ist eher so ein Mix aus allem. Ein bisschen Angst, ein bisschen Unsicherheit und ein bisschen… Bequemlichkeit vielleicht.
Klingt hart, aber wahrscheinlich trifft es das ganz gut.
Ich frage mich, ob du das nachvollziehen kannst oder ob das für dich immer klarer war als für mich.
Du wirkst zumindest wie jemand, der weiß, was er will und es dann auch durchzieht.
Vielleicht täusche ich mich da auch.
Ich habe heute auch wieder gemerkt, wie schnell man sich selbst verurteilt.
Viel schneller, als man es bei anderen tun würde.
Bei anderen findet man immer Gründe, Verständnis, Ausnahmen.
Bei sich selbst irgendwie nicht.
Ich glaube, ich habe mich heute selbst genug zerlegt.
Bringt am Ende wahrscheinlich auch nichts.
Aber es fühlt sich so an, als müsste man da einmal durch.
Ich hoffe, dein Sonntag war… besser als meiner.
Oder zumindest weniger anstrengend im Kopf.
Bis irgendwann.
`, 5),
  createPage("Seite 5", `
Perfektion.
Ein Zustand, den jeder anstrebt, aber niemand wirklich erreicht. 
Wie als würde man versuchen den Horizont zu erreichen.
Manche sehen Perfektion genau in den Dingen, die nicht perfekt sind. 
Ist das der einfache Weg? Man hält absolute Perfektion für unerreichbar und nennt das absolute Gegenstück Perfektion?
Das ist wohl der einzige Weg, wenn man Perfektion für unmöglich hält.
Aber was wenn Perfektion doch möglich ist? 
Wenn man den Begriff googelt, findet man schnell das Wort "fehlerlos".
Jeder macht Fehler, oder? 
Was wenn alle Fehler nur Folgen eines Ereignisses sind, an welchem man keine Schuld trägt?
Ist Jemand ein schlechter Fahrer, wenn er in einen Unfall gerät, weil andere Verkehrsteilnehmer Fehler machen? Nein, er ist einfach nur zur falschen Zeit am falschen Ort.
Der Fahrer wird nach diesem Unfall sehr viel vorsichtiger fahren, oder sogar eine Zeit lang das Auto meiden, aber etwas in ihm verändert sich, auch wenn ihn keine Schuld trifft. 
Das Beispiel ist vielleicht etwas holprig, aber ich glaube, dass es meinen Punkt ganz gut verdeutlicht.
Wird einem, wenn es sie gab, diese Perfektion genommen, durch Szenarien wie diese? Nein, aber sie ist nicht mehr so offensichtlich.
Wie eine Geode die von außen unscheinbar aussieht, aber innen voller funkelnder Kristalle ist.
Das ist natürlich nur meine persönliche Sichtweise.
Aber diese Sichtweise ist eigentlich viel zu optimistisch für mich.
Wieso also denke ich so? 
Vielleicht, weil es einfacher ist, an so etwas zu glauben, als das Gegenteil zu akzeptieren.
Die Vorstellung, dass etwas in einem kaputt ist und auch kaputt bleibt, ist schwerer zu ertragen, als zu sagen, dass es nur verdeckt ist. Dass es noch da ist, nur nicht mehr sichtbar.
Vielleicht rede ich mir das auch nur ein.
Aber wenn ich ehrlich bin, fühlt es sich richtiger an.
Es würde bedeuten, dass Fehler einen nicht definieren. Dass sie nur… passieren. Wie in dem Beispiel. Zur falschen Zeit am falschen Ort. Und trotzdem nimmt man etwas davon mit, ob man will oder nicht.
Man verändert sich.
Nicht unbedingt zum Schlechteren, aber auch nicht so, dass man es direkt als Verbesserung erkennen würde.
Eher subtil.
So, dass man es selbst kaum merkt, aber irgendwann feststellt, dass man nicht mehr ganz der Mensch ist, der man mal war.
Und genau da wird es schwierig mit der Perfektion.
Weil man anfängt, sich an dieser veränderten Version zu messen, ohne genau zu wissen, was eigentlich der Maßstab ist.
Vielleicht war man nie perfekt.
Vielleicht kommt man diesem Zustand nur in einzelnen Momenten nah, ohne es zu realisieren.
Und im Nachhinein wirken genau diese Momente dann… perfekt.
Obwohl sie es wahrscheinlich gar nicht waren.
Ich glaube, Perfektion ist nichts Festes.
Kein Zustand, den man erreicht und dann behält.
Eher etwas, das man für einen kurzen Augenblick spürt.
Und erst viel später versteht.
Vielleicht ist genau das der Grund, warum ich an diese Geode denken musste.
Weil sie von außen nicht zeigt, was in ihr steckt.
Und vielleicht ist das bei Menschen genauso.
Nicht alles, was nicht perfekt aussieht, ist es auch nicht.
Und nicht alles, was perfekt wirkt, ist es wirklich.
Ich weiß nicht, ob das Sinn ergibt.
Aber es fühlt sich zumindest so an.
Und vielleicht… geht es bei Perfektion auch gar nicht darum, sie festzuhalten oder zu definieren.
Sondern einfach darum, sie zu erkennen, wenn man ihr begegnet.
Ich glaube, ich durfte Perfektion erleben.
Danke.
`, 6),
  createPage("Seite 6", `
Warum? 
Das ist aktuell die Frage, die ich mir am häufigsten stelle, aber warum?
Vielleicht, weil man immer einen Grund für alles finden möchte. Eine Erklärung, damit Dinge irgendwie mehr Sinn ergeben.
Aber was, wenn es manchmal einfach keinen guten Grund gibt?
Oder schlimmer noch: Wenn man den Grund kennt, ihn nachvollziehen kann, aber trotzdem nichts dagegen tun kann. Oder so ähnlich.
Ich glaube genau das beschäftigt mich in letzter Zeit so sehr.
Dieses Gefühl, dass man seine eigenen Gedanken zwar hört, aber trotzdem nicht wirklich versteht. Als würde jemand anderes sie denken und man selbst sitzt nur daneben und hört zu.
Eigentlich verrückt.
Man verbringt sein ganzes Leben mit sich selbst und versteht sich am Ende trotzdem nicht vollständig.
Vielleicht ist genau das der Grund, warum Menschen so viel nachdenken.
In der Hoffnung, irgendwann auf eine Antwort zu stoßen, die endlich Ruhe gibt.
Bisher hat das bei mir eher mäßig funktioniert.
Aber eine meiner Fragen hat sich heute beantwortet, oder besser gesagt hast du sie beantwortet.
Du hast einen Snap geschickt, in welchem die Katze zu sehen war. Danke. 
Nur so nebenbei, aber du sahst heute wieder umwerfend aus. Manchmal würde ich es gerne einfach schreiben, aber dann fällt mir wieder ein, dass das nicht geht.
Vielleicht ist genau das das Komische daran.
Nicht, dass man etwas denkt.
Sondern, dass man plötzlich darüber nachdenken muss, ob man es überhaupt sagen darf.
Früher hätte ich vermutlich einfach geschrieben, dass du wunderschön aussiehst, ohne auch nur eine Sekunde darüber nachzudenken.
Heute fühlt sich selbst so ein einfacher Satz falsch an.
Oder zumindest fehl am Platz.
Nicht, weil er unwahr wäre.
Eher, weil manche Dinge plötzlich komplizierter werden, obwohl sie sich eigentlich überhaupt nicht verändert haben.
Ich frage mich manchmal, ab wann genau Worte anfangen vorsichtig zu werden.
Ab wann man beginnt Sätze im Kopf umzubauen, bevor sie überhaupt ausgesprochen werden.
Vielleicht genau dann, wenn man Angst davor hat, dass sie anders ankommen könnten als sie gemeint sind.
Oder wenn man merkt, dass man kein Recht mehr darauf hat, Dinge einfach auszusprechen.
Keine Ahnung.
Ich weiß nur, dass ich kurz lächeln musste, als ich die Katze gesehen habe.
Schon verrückt eigentlich, dass so eine kleine Sache plötzlich Bedeutung bekommt.
Aber vielleicht ist genau das Erinnerung.
Nicht die großen Ereignisse.
Sondern diese kleinen, unscheinbaren Dinge, die plötzlich irgendwo auftauchen und für einen kurzen Moment alles wieder sehr nah wirken lassen.
Und irgendwie war das heute schön.
Achso, eine Sache noch. Der Graf, welcher mir die Nutzung dieser Seite anzeigt hat verraten, dass es vor ein paar Tagen einen Besucher gab, welcher den ganzen Quatsch hier eventuell gelesen hat.
Blöd nur, dass nur neue Besucher angezeigt werden und man somit die aktuelle Nutzung nicht wirklich sieht. 
Ist aber nicht so wichtig.
Das war es eigentlich schon für heute. 
Viel Text mit wenig Inhalt. Wie immer.
Gute Nacht. 
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

  const pageNumberEl = document.getElementById("page-number");
  pageNumberEl.textContent = `${currentPageIndex} / ${pages.length}`;

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
