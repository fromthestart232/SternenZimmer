const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
const supabaseUrl = 'https://yaecvybfldlcdgzyokep.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhZWN2eWJmbGRsY2Rnenlva2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NDIzMDIsImV4cCI6MjA5NTAxODMwMn0.vZlI_xmaht7farHYkJbt-8LyMELFAwIYF7iXrIJWbRI'

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function createPage(title, text, nextPage = null, skipLabel = "Zur nächsten Seite") {
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
`, 2, "Zur nächsten Seite"),
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
`, 7),
  createPage("Seite 7", `
Na du.
Wie geht es dir?
Ich frage mich, ob man sich irgendwann daran gewöhnt, Fragen zu stellen, auf die man vermutlich keine Antwort bekommt. Wahrscheinlich nicht. Aber irgendwie fühlt es sich trotzdem richtig an, sie zu stellen.
Wenn ich ehrlich bin, weiß ich selbst gerade nicht so genau, wie es mir geht.
Es war kein schlechter Tag, aber auch keiner, den ich als besonders gut bezeichnen würde. Eher einer dieser Tage, die einfach vorbeiziehen und trotzdem mehr Gedanken hinterlassen, als sie eigentlich sollten.
Vielleicht ist genau das das Anstrengende.
Nicht zu wissen, was eigentlich los ist, aber trotzdem zu merken, dass irgendetwas in einem arbeitet.
Heute war ich in der Stadt.
Eigentlich nur, um ein paar Dinge zu erledigen.
Zwischendurch bin ich im Buchladen gelandet.
Das passiert mir erstaunlich oft, obwohl ich selten mit einem konkreten Ziel hineingehe.
Und dort lag ein Buch, bei dem ich sofort an dich denken musste.
Ich kann gar nicht genau sagen, woran es lag. Vielleicht am Titel, vielleicht am Cover oder einfach an diesem Gefühl, dass es dir gefallen hätte.
Ich hatte es für einen Moment in der Hand und musste kurz schmunzeln.
Schon komisch, wie manche Gedanken ganz automatisch auftauchen.
Das Buch steht jetzt vermutlich immer noch dort im Regal.
Und trotzdem hat es mich den restlichen Tag begleitet.
Ich schweife schon wieder ab.
Da heute Muttertag ist, wünsche ich dir natürlich auch einen schönen Katzen/Kater-Muttertag.
Olli sieht das vermutlich genauso.
Auch wenn du das hier wahrscheinlich nicht lesen wirst, wollte ich es trotzdem gesagt haben.
Vielleicht ist es seltsam, wie viel Bedeutung manche Kleinigkeiten bekommen können.
Ein Buch in einem Regal.
Ein kurzer Gedanke.
Ein Bild, das plötzlich wieder auftaucht.
Und schon reicht ein einziger Moment aus, um einen ganz gewöhnlichen Tag ein kleines bisschen anders wirken zu lassen.
Ich frage mich manchmal, ob dir solche Dinge auch passieren.
Ob du auch manchmal über etwas stolperst, das dich für einen kurzen Augenblick erinnert.
Nicht auf eine traurige Art.
Eher so, dass man kurz innehält und unweigerlich lächeln muss.
Ich hoffe, dass es dir gut geht.
Und dass du heute einen schönen Tag hattest.
Vielleicht mit etwas Sonne, einem entspannten Nachmittag und natürlich mit Olli, der dir hoffentlich morgen einen würdigen Katzen-Muttertag bereitet.
Ich glaube, mehr wollte ich heute gar nicht sagen.
Bis morgen vielleicht.
`, 8),
  createPage("Seite 8", `
Ich weiß nicht so recht, wie ich den Einstieg heute gestalten soll.
Vielleicht ist das auch der Grund, warum ich die letzten beiden Tage nichts geschrieben habe.
Es ist als müsste ich den eigentlichen Inhalt in irgendwelchen anderen Gedanken verstecken, damit es mir leichter fällt, ihn zu formulieren.
Dieses Verstecken fühlt sich nicht nur unfassbar falsch an, sondern macht es auch nicht wirklich einfacher.
Vielleicht ist es auch einfach die Angst davor, dass es zu direkt klingt, obwohl es das eigentlich gar nicht ist.
Aber vielleicht ist genau das der Grund, warum ich es so formulieren möchte.
Möchte? 
Möchte ich das wirklich? Oder ist es wieder der einfachste Weg? 
Ich denke nicht, dass es einfach ist, aber ... 
Heute habe ich ausnahmsweise mal keine Ausrede.
Ich möchte dir einfach nur sagen, dass ich dich vermisse.
Und da stelle ich mir nichtmal die Frage nach dem warum.
Es gibt so viele Gründe, dass ich es vermutlich nicht schaffen würde, sie alle aufzuzählen. 
Danke für den Snap von Olli. Es war sehr schön ihn mal wieder zu sehen. 
Am liebsten hätte ich wieder einen Kommentar über seine Größe gemacht, aber er ist vermutlich schon ausgewachsen, oder wächst nur noch ziemlich langsam.
Seit den letzten Zeilen sind bestimmt 50 Minuten vergangen. Vielleicht liegt es an meiner Einfallslosigkeit oder daran, dass ich gerade mit ein paar Klassenkameraden über Discord für die kommende Physik-Prüfung lerne.
Einfach um irgendwas aufzuschreiben habe ich gerade einen von ihnen nach seinem Lieblingswort gefragt. Ich hätte es mir denken können.
Er überlegte nicht lange und sagte mit einem leichten Lächeln: "Pfefferminzlikör". 
Ich musste kurz daran denken, dass du auf dem Geburtstag meintest, dass du Berliner Luft nicht magst. 
Wie kann man das nicht mögen? 
Alle sagen immer, dass es nach Zahnpasta schmeckt, aber ist das etwas Schlechtes?
Als kleines Kind habe ich auch gerne mal etwas Zahnpasta genascht. Finden Leute, die Berliner Luft nicht mögen, Zähneputzen auch so eklig? 
Komisches Thema, wieder mal.
Ich glaube, dass ich diese Frage öfter stelle, wenn mir nichts einfällt. 
Ich erinnere mich daran, dir diese Frage auch gestellt zu haben. Deine Antwort war "Sehnsucht". 
Das beschreibt es eigentlich ganz gut.
Gute Nacht, guten Morgen oder was auch immer gerade für dich zutrifft. 
`, 9),
  createPage("Seite 9", `
Eigentlich wollte ich heute gar nichts schreiben, aber da ich schon die letzten beiden Tage nichts geschrieben habe, muss ich es jetzt doch tun.
Die Schule ist nun fast vorbei und ich habe mehr Zeit als jemals zuvor, aber irgendwie fühlt es sich seltsam an. Die Dinge, die ich sonst mit großer Freude gemacht habe, sind plötzlich langweilig.
Es ist sogar so schlimm, dass ich freiwillig die Hausarbeit mache, die ich sonst so sehr hasse, nur um nicht herumzusitzen und mich und meine Gedanken zu ertragen.
Als würde ich mich vor mir selbst verstecken wollen.
Klappt nicht so gut. Was habe ich auch erwartet?
Aber das hier ist irgendwie auch keine gute Lösung.
Wie bekommt man es hin, dass die Stimmen im eigenen Kopf verstummen?
Ich weiß es nicht.
Wobei.
Nein, ich weiß es nicht.
Vielleicht würde ich mich mit ihnen auseinandersetzen, wenn nicht alle irgendwie so negativ wären. Aber keiner dieser Gedanken ist grundlegend falsch.
Vielleicht ist genau das das Problem.
Nicht, dass diese Gedanken da sind.
Sondern, dass man ihnen nichts entgegensetzen kann.
Man versucht sich abzulenken, beschäftigt sich mit irgendwelchen Dingen, die eigentlich längst erledigt sind, nur damit für einen kurzen Moment Ruhe einkehrt.
Aber sobald es still wird, sind sie wieder da.
Geduldiger als man selbst.
Ich frage mich manchmal, ob das überhaupt aufhört.
Oder ob man einfach irgendwann lernt, mit dieser Art von Hintergrundrauschen zu leben.
Vielleicht ist es wie mit einem Geräusch, das anfangs unerträglich wirkt, bis man irgendwann gar nicht mehr bewusst wahrnimmt, dass es überhaupt noch da ist.
Ganz verschwunden ist es deshalb trotzdem nicht.
Es fällt nur weniger auf.
Ich glaube, genau das wünsche ich mir gerade.
Nicht, dass plötzlich alles wieder gut ist.
Nicht einmal, dass ich sofort Antworten auf all diese Fragen finde.
Einfach nur ein bisschen Ruhe.
Ein paar Minuten, in denen man nicht ständig versucht zu verstehen, was man hätte anders machen können.
Oder warum manche Dinge so gekommen sind, wie sie gekommen sind.
Vielleicht ist das zu viel verlangt.
Vielleicht auch nicht.
Bis dahin bleibt mir wohl nichts anderes übrig, als weiter zu schreiben.
Auch wenn ich nicht weiß, ob es wirklich hilft.
Aber zumindest fühlt es sich für einen kurzen Moment so an, als würden die Gedanken etwas leiser werden.
Und manchmal reicht das schon aus.
`, 10),
  createPage("Seite 10", `
Sonst schreibe ich in der Regel spät abends oder sogar nachts, aber heute muss ich es etwas früher tun, da ich sonst noch vergessen könnte, was ich eigentlich sagen wollte.
Es ist jetzt 20:15 und ich weiß schon wieder nicht so recht, wo ich anfangen soll.
Heute war eigentlich ein relativ ereignisreicher Tag und ich könnte ewig erzählen, aber ich begrenze es mal auf ein paar Dinge, die mir gerade so durch den Kopf gehen.
Ich wäre heute fast im Krankenhaus gelandet, aber das ließ sich zum Glück vermeiden. Eine mindestens 80 Jahre alte Dame hat mir die Vorfahrt genommen und ich wäre ihr fast ins Auto gefahren.
Glücklicherweise sind die Bremsen am Motorrad ziemlich stark und ich konnte knapp vor ihrem Auto anhalten. Ich stand quer auf der Straße und habe eine bestimmt 20m lange Bremsspur hinterlassen.
Die alte Dame war sich keiner Schuld bewusst und hat mich angesehen, als wäre ich schuld daran gewesen. 
Ich denke, es wäre eine gute Idee, wenn ältere Menschen, bei denen alle Sinne nachlassen, regelmäßig überprüfen lassen müssen, ob sie überhaupt noch in der Lage sind, ein Fahrzeug zu führen.
Naja egal. 
Am Samstag war ich in der Stadt und eigentlich war dieser Aufenthalt nicht wirklich besonders, aber als ich wieder los wollte, ist etwas Komisches passiert.
Ich habe mir den Helm aufgesetzt und plötzlich kam ein Mann auf mich zu. Er trug einen Anzug und ich dachte, er würde für die Stadt arbeiten und mir erklären, warum ich mein Moped nicht neben die Fahrradständer stellen darf, aber da lag ich komplett falsch.
Er stellte sich kurz vor und sagte, dass er Straßenfotograf sei und ob er ein Foto von mir machen dürfte. Hätte ich den Helm nicht aufgehabt, hätte er vermutlich nicht gefragt, oder doch? Im nächsten Atemzug zeigte er mir auf einer Kamera Bilder, die er bereits von anderen Leuten gemacht hatte.
Bevor ich ihn auf seine Motivwahl ansprechen konnte, erklärte er, dass er, und jetzt gut aufgepasst, Füße fotografiert. 
Er sagte selbst, dass die Frage etwas komisch sei, aber da es mir ziemlich egal war, habe ich einfach zugestimmt. Er hat dann ein paar Fotos von meinem Fuß auf der Fußraste des Motorrads gemacht, hat sich bedankt und ist wieder gegangen.
Vielleicht verkauft er die an irgendwelche Fetischisten, oder vielleicht ist es einfach nur sein Stil, aber ich fand es irgendwie interessant, dass er einfach so auf mich zugekommen ist und gefragt hat.
Eigentlich müsste ich das meinem Chirurg erzählen, der mir nach der Operation am Zeh gesagt hat, dass ich kein Fuß-Model werden könnte.
Ich wollte eigentlich was ganz anderes erzählen, aber dieser Moment hat sich einfach dazwischen gedrängt, weil er so unerwartet und seltsam war.
Ich habe vorhin etwas auf TikTok gescrollt und bin dann auf deine Story gestoßen und möchte dir zu deiner neuen Wohnung gratulieren.
Ich hoffe, sie ist genauso schön, wie du es dir vorgestellt hast, und dass du dich dort schnell wohlfühlst. Es ist bestimmt eine aufregende Zeit, aber ich bin mir sicher, dass du das super meistern wirst.
Olli freut sich sicher auch schon sehr, auch wenn er vermutlich nicht so genau weiß, was da gerade passiert.
Ich kann mir auch gut vorstellen, dass es eine große Umstellung ist, wenn man nach ein paar Jahren wieder in der "Nähe" seiner Familie wohnt. Der Satz klingt etwas seltsam, aber du weißt sicherlich, was ich meine. 
Eine Sache noch. 
Ich war neulich mit meiner Familie unterwegs und wir sind zufällig an eurem neuen Haus vorbeigefahren. Lustigerweise waren Michael und du gerade draußen oder auf dem Weg zum Haus. Ich glaube, Michael hat es sogar mitbekommen und gegrüßt. 
Eigentlich wollte ich dir nur sagen, dass dir deine Brille ausgezeichnet steht. 
Das war's auch schon für heute. 
Es ist jetzt 20:37.
Falls du das liest, hoffe ich, dass es dir gut geht und dass du einen schönen Tag hattest.
Bis bald vielleicht.
`, 11),
  createPage("Seite 11", `
Ich habe Heimweh, aber sitze hier an meinem gewohnten Platz.
Ein seltsamer Satz, wenn man ihn einfach so stehen lässt.
Heute ist einer dieser Tage, an denen alles irgendwie vertraut ist und sich trotzdem nicht richtig passend anfühlt. Als würde man in einem Raum sitzen, den man eigentlich gut kennt, aber irgendetwas darin hat sich minimal verschoben, ohne dass man sagen kann was.
Vielleicht ist es kein Vermissen von irgendwoanders.
Vielleicht eher von etwas in mir selbst.
Ich habe heute viel Zeit damit verbracht, einfach nichts wirklich zu tun. Nicht aus Faulheit, sondern eher, weil alles, was ich angefangen habe, sich nach kurzer Zeit wieder falsch angefühlt hat. Als würde mir für jede Richtung der Antrieb fehlen, bevor ich überhaupt losgehen kann.
Irgendwie anstrengend, ohne dass wirklich etwas passiert.
Ich musste heute für einen Friseurtermin anrufen.
Eigentlich nichts Besonderes, aber ich merke immer wieder, dass ich genau solche Dinge hasse. Dieses Telefonieren, dieses kurze Planen von etwas, das eigentlich banal ist, aber sich im Moment größer anfühlt als es sollte.
Am anderen Ende hieß es erst, dass es vor Pfingsten schwierig wird.
Ich habe kurz überlegt, es einfach dabei zu belassen.
Stattdessen habe ich noch einmal nachgefragt und irgendwann hat sich dann doch noch ein Termin ergeben.
Nicht spektakulär, aber ich habe danach kurz darüber nachgedacht, wie viel Umstand so etwas Kleines eigentlich machen kann.
Ich war danach kurz draußen, einfach um den Kopf etwas freizubekommen. Es war nicht wirklich hilfreich im klassischen Sinne, aber zumindest für ein paar Minuten etwas ruhiger.
Danach war alles wieder da.
Dieses diffuse Gefühl, dass man eigentlich etwas tun sollte, aber keinen klaren Ansatz hat, was genau das sein soll. Und egal, was man denkt, es bleibt irgendwie ungreifbar.
Es ist seltsam, wie der Kopf Dinge immer wieder neu sortiert, auch wenn man selbst längst aufgehört hat, sie bewusst zu betrachten.
Diesen Satz habe ich schon so oft benutzt, aber ich glaube, genau deshalb schreibe ich das hier. 
Nicht, weil es eine Lösung ist.
Sondern weil es für einen kurzen Moment Ordnung in etwas bringt, das sonst nur im Hintergrund läuft.
Vielleicht ist das der einzige Grund, warum ich überhaupt noch anfange.
Ich hoffe, dein Tag war etwas klarer als meiner.
Oder zumindest weniger schwer im Kopf.
Die Statistik hat erneut gezeigt, dass jemand hier war, ich weiß nicht, wer, aber ich würde mich freuen, wenn du es bist.
Ich hoffe, du hattest einen guten Start in die Woche und dass es dir gut geht.
Gute Nacht. 
`, 12),
  createPage("Seite 12", `
Na du.
Ich habe heute mal etwas geschafft.
Klingt seltsam, wenn man es so direkt schreibt.
Als wäre das etwas Besonderes.
Vielleicht ist es das gerade auch.
Am Ende dieser Texte kann man jetzt anonym auf Fragen antworten. Ich weiß selbst noch nicht so genau, ob das eine gute Idee war, aber irgendwie wollte ich es ausprobieren.
War selbst für mich eine ziemliche Herausforderung.
Nicht, weil ich nicht wusste, wie es theoretisch funktionieren müsste, sondern weil Theorie und Praxis ja bekanntlich zwei verschiedene Dinge sind.
Vor allem dann, wenn man eigentlich nur eine kleine Idee hat und sie plötzlich aus mehreren kleinen Problemen besteht, die alle nacheinander gelöst werden wollen.
Ich habe vermutlich länger daran gesessen, als ich zugeben würde.
Aber jetzt funktioniert es.
Zumindest glaube ich das.
Und irgendwie fühlt sich das gut an.
Nicht auf diese übertriebene Art, bei der plötzlich alles besser ist.
Eher so, als hätte ich für einen kurzen Moment wieder etwas in die richtige Richtung geschoben.
Vielleicht reicht das ja manchmal.
Ich glaube, heute kann ich mit einem guten Gefühl fragen, wie es dir geht.
Nicht, weil ich eine Antwort erwarte.
Aber weil es sich heute weniger schwer anfühlt, diese Frage zu stellen.
Also.
Wie geht es dir?
Ich hoffe wirklich, dass es dir gut geht.
Und falls du das hier irgendwann lesen solltest, kannst du theoretisch sogar antworten.
Anonym.
Was irgendwie lustig ist, weil ich wahrscheinlich trotzdem bei jeder Antwort überlegen würde, ob sie von dir sein könnte.
Ist vielleicht nicht besonders sinnvoll.
Aber vieles hier ist das ja nicht.
Ich glaube, ich wollte heute einfach nur festhalten, dass ich mal etwas geschafft habe.
Auch wenn es nur eine kleine Funktion am Ende einer Seite ist.
Für heute reicht das.
Tschau
.
`, 13),
  createPage("Seite 13", `
Manche Fragen verstecken sich ziemlich gut.
Heute zum Beispiel in einem Hemd.
Genauer gesagt in der Frage, ob ich die oberen Knöpfe offen lasse oder schließe.
Ich habe mich deswegen ein bisschen mit meiner Mutter gestritten.
Wobei gestritten vielleicht schon zu groß klingt.
Es ging ja eigentlich um nichts.
Zumindest dachte ich das.
Ich war natürlich dafür, sie zu schließen.
Keine Ahnung warum „natürlich“.
Vielleicht, weil es sich sicherer anfühlt.
Kontrollierter.
Als würde man weniger Angriffsfläche bieten, wenn alles irgendwie ordentlich und geschlossen ist.
Meine Mutter sah das anders.
Und dann stand ich da und habe beides ausprobiert.
Obere Knöpfe offen.
Obere Knöpfe geschlossen.
Eigentlich ist es fast lächerlich, wie unterschiedlich ein und dasselbe Hemd dadurch wirken kann.
Es ist ja nicht nur Stoff.
Nicht nur ein Kragen.
Nicht nur ein paar Knöpfe.
Es verändert irgendwie die gesamte Wirkung.
Nach außen, aber auch nach innen.
Offen wirkt lockerer.
Vielleicht selbstbewusster.
Vielleicht auch so, als würde man sich weniger verstecken.
Geschlossen wirkt ordentlicher.
Vielleicht ernster.
Vielleicht auch ein bisschen so, als würde man sich an etwas festhalten.
Ich weiß nicht, welche Version besser war.
Und viel schlimmer.
Ich weiß nicht, welche Version mehr nach mir aussah.
Komischer Gedanke, oder?
Dass ein Hemd plötzlich die Frage stellt, die man sich selbst nicht so gerne stellt.
Wer bin ich eigentlich?
Oder vielleicht eher.
Wer will ich sein?
Ich habe keine Ahnung. Oder habe ich es vergessen?
Früher hätte ich vermutlich einfach irgendetwas angezogen und nicht weiter darüber nachgedacht.
Heute stehe ich vor einem Spiegel und frage mich, ob zwei offene Knöpfe schon zu viel über einen Menschen aussagen können.
Vermutlich tun sie das nicht.
Aber es fühlt sich trotzdem so an.
Vielleicht, weil es gar nicht wirklich um das Hemd ging.
Sondern um dieses ständige Gefühl, sich entscheiden zu müssen.
Locker oder kontrolliert.
Offen oder geschlossen.
So sein, wie man ist.
Oder so wirken, wie man gerne wäre.
Und dann merkt man, dass man gar nicht genau weiß, wo da der Unterschied liegt.
Ich glaube, ich suche gerade nach einer Version von mir, die sich richtig anfühlt.
Nicht unbedingt besser.
Nicht perfekter.
Einfach richtiger.
Aber wenn man nicht weiß, wonach man sucht, sieht irgendwie alles kurz passend aus und dann doch wieder falsch.
Ich schweife schon wieder ab.
Eigentlich ging es nur um ein Hemd.
Ein paar Knöpfe.
Eine kleine Diskussion mit meiner Mutter.
Und trotzdem sitze ich jetzt hier und denke darüber nach, warum mir diese Entscheidung so schwer gefallen ist.
Vielleicht ist das albern.
Vielleicht auch nicht.
Ich glaube, manche Fragen suchen sich einfach sehr kleine Dinge, um groß zu werden.
Heute waren es eben Knöpfe.
Ich weiß immer noch nicht, ob ich sie offen lassen oder schließen sollte.
Aber vielleicht ist genau das gerade der ehrlichste Teil daran.
Ich weiß es nicht.
Ich weiß gerade ziemlich vieles nicht.
Wobei.
Eine Sache weiß ich.
Alte Leute und Politik sind eine wirklich gefährliche Kombination.
Ich wollte mich heute eigentlich noch darüber aufregen, aber irgendwie passt es ja sogar zu diesem ganzen „Wer will ich sein?“-Gedanken.
Weil ich mich ernsthaft frage, wie man sein ganzes Leben hinter sich haben kann, so viele Dinge gesehen, erlebt und überstanden hat, und am Ende trotzdem bei so einer verbitterten Weltansicht landet.
Warum sind so viele Rentner so?
Natürlich nicht alle.
Aber zu viele.
Es ist immer dieses gleiche Gerede.
Alles war früher besser.
Heute darf man ja nichts mehr sagen.
Die Ausländer sind schuld.
Die da oben sowieso.
Und dann sitzt man daneben und fragt sich, ob die Person eigentlich einmal hört, was sie da sagt.
Als wäre Politik nur noch ein Ventil für Unzufriedenheit.
Nicht mehr die Frage, was wirklich besser werden könnte.
Nicht mehr die Frage, wer welche Probleme löst.
Nur noch die Hoffnung, dass irgendjemand kommt und die Welt wieder so macht, wie sie in der Erinnerung angeblich mal war.
Was auch immer das bedeuten soll.
Als hätte die AfD irgendeinen magischen Vorteil für Rentner.
Als würde plötzlich alles besser werden, nur weil man lange genug auf die falschen Menschen zeigt.
Aber Hauptsache alle Ausländer sind weg.
Und dann?
Keine Ahnung.
Wie es danach weitergeht, weiß keiner so genau.
Aber immerhin sind die Ausländer weg.
Ich hasse es so sehr.
Nicht nur, weil es politisch dumm ist.
Sondern weil es so unfassbar kalt ist.
So wenig menschlich.
Als würde man irgendwann aufhören, einzelne Menschen zu sehen und stattdessen nur noch Gruppen, Feindbilder und Schlagwörter.
Vielleicht macht mich genau das so wütend.
Dass Menschen, die selbst wissen müssten, wie es ist, nicht ernst genommen zu werden, irgendwann anfangen, anderen jedes Mitgefühl abzusprechen.
Ich weiß nicht, ob das naiv ist.
Vielleicht ist es das.
Vielleicht erwarte ich zu viel von Menschen.
Aber ich verstehe einfach nicht, wie man am Ende eines langen Lebens nicht weicher wird, sondern härter.
Wie man nicht mehr Verständnis entwickelt, sondern weniger.
Wie man nicht denkt: „Ich hatte es schwer, also sollen es andere leichter haben.“
Sondern: „Ich hatte es schwer, also sollen andere es gefälligst auch schwer haben.“
Was ist das für eine Logik?
Vielleicht ist das genau der Punkt, der mich so stört.
Diese Mischung aus Angst, Trotz und Gleichgültigkeit.
Und dann merke ich, dass ich selbst gerade ziemlich hart über andere urteile.
Auch nicht wirklich besser.
Nagut, das war es eigentlich schon für heute.
Etwas mehr als sonst, aber heute war es irgendwie auch notwendig.
Gute Nacht.
`, 14),
  createPage("Seite 14", `
Ich wurde heute einfach angesprochen.
Also nicht so angesprochen, wie man eben manchmal angesprochen wird.
Nicht wegen der Uhrzeit.
Nicht, weil jemand den Weg wissen wollte.
Nicht, weil ich irgendwo im Weg stand.
Sondern wirklich angesprochen.
Von einem Mädchen, das ich noch nie gesehen habe.
Sie hat sich nicht vorgestellt. Sie kam einfach auf mich zu und fragte, ob ich ihr meine Nummer geben kann.
Ich war im ersten Moment ein bisschen überfordert.
Nicht sichtbar, hoffe ich zumindest.
Aber innerlich schon.
Ich glaube, so etwas ist mir noch nie passiert.
Zumindest nicht so direkt.
Sie wirkte ziemlich selbstbewusst. Nicht unangenehm, eher klar und sicher. Als hätte sie sich kurz entschieden, dass sie es jetzt einfach fragt, und es dann auch gemacht.
Vielleicht hat genau das es mir leichter gemacht, abzulehnen.
Ich habe mich bedankt.
Und nein gesagt.
Oder zumindest irgendwie in dieser Richtung.
Ich weiß ehrlich gesagt nicht einmal mehr genau, wie ich es formuliert habe.
Solche Momente sind seltsam.
Sie dauern nur ein paar Sekunden, aber im Kopf werden sie danach viel länger.
Ich habe später darüber nachgedacht, wie es gewesen wäre, wenn sie nervös gewesen wäre.
Oder unsicher.
Oder wenn man ihr angesehen hätte, dass sie gerade all ihren Mut zusammennimmt.
Dann hätte ich mich wahrscheinlich furchtbar gefühlt.
Nicht, weil ich anders entschieden hätte.
Sondern weil sich dieselbe Entscheidung plötzlich viel grausamer angefühlt hätte.
Schon komisch eigentlich.
Der Inhalt bleibt gleich.
Aber die Art, wie jemand etwas fragt, verändert, wie schwer sich eine Antwort anfühlt.
Ich glaube, ich hätte mich selbst nie getraut, jemanden einfach so anzusprechen.
Jemanden, den ich noch nie gesehen habe.
Ohne irgendetwas über die Person zu wissen.
Nur aufgrund eines kurzen Eindrucks.
Vielleicht ist genau das der Punkt, der mich daran so beschäftigt.
Es ist irgendwie mutig.
Aber auch unfassbar oberflächlich.
Nicht böse gemeint.
Wahrscheinlich geht es in so einer Situation gar nicht anders.
Man hat ja nichts außer das, was man sieht.
Ein Gesicht.
Eine Haltung.
Vielleicht Kleidung.
Vielleicht irgendeine Ausstrahlung, die man sich in dem Moment selbst zusammenreimt.
Und auf Basis davon entscheidet man dann, ob man Interesse hat oder nicht.
Das fühlt sich unfair an.
Für beide Seiten irgendwie.
Für die Person, die fragt, weil sie innerhalb weniger Sekunden auf etwas reduziert wird, das gar nicht annähernd ausreicht, um sie wirklich einzuschätzen.
Und für die Person, die antworten muss, weil sie eine Entscheidung treffen soll, ohne überhaupt den Menschen dahinter zu kennen.
Eigentlich müsste ich mich entschuldigen.
Nicht dafür, dass ich nein gesagt habe.
Sondern dafür, dass ich ihr keine Chance gegeben habe, mehr zu sein als dieser kurze Moment.
Aber was hätte ich sagen sollen?
„Tut mir leid, ich möchte dich nicht kennenlernen“?
Das klingt ehrlich, aber auch irgendwie unnötig hart.
„Ich habe kein Interesse“?
Wahrscheinlich richtig.
Aber fühlt sich trotzdem seltsam an.
„Danke, aber nein“?
Vielleicht ist das die beste Version.
Kurz.
Freundlich.
Ohne Erklärung, die am Ende nur noch mehr verletzen könnte.
Ich frage mich trotzdem, wie man in so einer Situation agiert, damit sich niemand schlecht fühlt.
Vielleicht geht das gar nicht.
Vielleicht ist Ablehnung immer ein bisschen unangenehm.
Auch dann, wenn sie freundlich ist.
Und vielleicht ist genau das der Preis dafür, ehrlich zu sein.
Man kann nicht jede Situation so verlassen, dass niemand etwas spürt.
Man kann nur versuchen, nicht unnötig weh zu tun.
Ich hoffe, das habe ich geschafft.
Irgendwie beschäftigt mich das mehr, als es sollte.
Vielleicht, weil ich normalerweise auf der anderen Seite dieser Unsicherheit stehe.
Nicht bei so etwas.
Aber grundsätzlich.
Dieses Gefühl, etwas sagen zu wollen und gleichzeitig Angst davor zu haben, was danach passiert.
Vielleicht war es genau deshalb so beeindruckend, dass sie einfach gefragt hat.
Ich weiß nicht, ob ich das könnte.
Wahrscheinlich nicht.
Und vielleicht verdient allein das schon Respekt.
Auch wenn meine Antwort trotzdem nein war.
Vielleicht ist genau das der Teil, der sich so widersprüchlich anfühlt.
Man kann den Mut eines Menschen respektieren und ihn trotzdem ablehnen.
Man kann freundlich sein und trotzdem der Grund dafür sein, dass sich jemand für einen Moment schlecht fühlt.
Man kann alles richtig machen und sich trotzdem irgendwie falsch fühlen.
Ich glaube, daran hänge ich gerade.
Dass es manchmal keine perfekte Reaktion gibt.
Keine Formulierung, die alles leicht macht.
Keine Antwort, bei der man danach sicher sein kann, dass niemand verletzt wurde.
Vielleicht ist das bei Begegnungen mit anderen Menschen einfach so.
Man betritt kurz die Welt eines anderen, sagt etwas, fragt etwas, entscheidet etwas, und danach gehen beide wieder weiter.
Mit einem etwas anderen Gefühl als vorher.
Ich frage mich, ob sie sich später noch darüber Gedanken gemacht hat.
Oder ob sie es einfach abgehakt hat.
Vielleicht war es für sie nur eine kurze Situation.
Ein Versuch.
Ein „warum nicht“.
Und ich mache daraus jetzt wieder etwas viel Größeres, als es eigentlich war.
Wäre nicht das erste Mal.
Trotzdem finde ich es bemerkenswert.
Nicht unbedingt, dass sie mich angesprochen hat.
Sondern dass sie es überhaupt getan hat.
Dass sie diesen kurzen unangenehmen Moment riskiert hat, ohne zu wissen, was passiert.
Vielleicht ist genau das eine Eigenschaft, die ich mir selbst manchmal wünschen würde.
Einfach fragen.
Einfach etwas versuchen.
Nicht vorher jede mögliche Reaktion im Kopf durchspielen, bis man am Ende gar nichts mehr macht.
Vielleicht war das heute also nicht nur eine seltsame Situation.
Vielleicht war es auch eine kleine Erinnerung daran, dass manche Menschen mutiger sind, als sie selbst wirken.
Und dass ich vielleicht öfter etwas riskieren müsste.
Nicht unbedingt Telefonnummern.
Aber Worte.
Entscheidungen.
Schritte.
Dinge, die man nicht ewig im Kopf behalten kann, nur weil man Angst vor der Antwort hat.
Ich glaube, das nehme ich aus heute mit.
Dass ein Nein nicht immer etwas Schlechtes ist.
Manchmal ist es einfach nur eine ehrliche Grenze.
Und Mut ist trotzdem Mut, auch wenn er nicht belohnt wird.
`, 15),
  createPage("Seite 15", `
Gestern habe ich überlegt, ob es morgen um Ablehnung gehen könnte.
Jetzt ist morgen.
Komischer Satz.
Aber irgendwie passt er ganz gut.
Ich habe heute länger darüber nachgedacht, warum Ablehnung eigentlich so schwer auszuhalten ist. Nicht nur, wenn man sie bekommt, sondern schon lange davor. Meistens passiert ja noch gar nichts. Niemand hat nein gesagt. Niemand hat einen komisch angesehen. Niemand hat irgendetwas entschieden.
Und trotzdem fühlt es sich schon vorher so an, als wäre es passiert.
Vielleicht ist genau das das Problem.
Man erlebt die Ablehnung im Kopf, bevor sie überhaupt existiert.
Man stellt sich vor, wie jemand reagiert. Wie sich der Blick verändert. Wie ein Satz kommt, der eigentlich gar nicht schlimm gemeint ist, aber trotzdem irgendwo hängen bleibt.
Und dann entscheidet man sich lieber dafür, nichts zu sagen.
Nicht, weil man nichts sagen möchte.
Sondern weil die Möglichkeit eines Neins schwerer wiegt als die Hoffnung auf ein Ja.
Ich glaube, ich kenne dieses Gefühl ziemlich gut.
Vielleicht sogar zu gut.
Es ist seltsam, wie viel Macht ein Wort haben kann, das noch gar nicht ausgesprochen wurde.
Ein mögliches Nein kann lauter sein als jedes echte.
Vielleicht, weil man gegen etwas Reales wenigstens irgendwie reagieren kann.
Man kann es hören.
Verarbeiten.
Irgendwann einordnen.
Aber gegen ein Nein, das nur im Kopf existiert, kann man nichts machen. Es verändert ständig seine Form und findet immer neue Gründe, warum man es besser gar nicht erst versuchen sollte.
Ich frage mich, wie viele Dinge ich genau deshalb nie getan habe.
Wie viele Sätze ich nicht gesagt habe.
Wie viele Fragen ich nie gestellt habe.
Wie viele Wege ich nicht gegangen bin, nur weil irgendwo in mir schon vorher entschieden wurde, dass es sowieso schlecht ausgehen könnte.
Vielleicht ist das feige.
Vielleicht ist es menschlich.
Wahrscheinlich beides.
Gestern wurde ich angesprochen und habe Nein gesagt.
Und heute denke ich darüber nach, wie oft ich selbst nicht einmal bis zu dieser Frage gekommen wäre.
Das ist irgendwie bitter.
Nicht, weil ich denke, dass jede Frage gestellt werden muss.
Manchmal ist Schweigen richtig.
Manchmal ist Abstand richtig.
Manchmal ist es besser, nichts zu erzwingen.
Aber ich glaube, es gibt einen Unterschied zwischen bewusstem Schweigen und Schweigen aus Angst.
Und genau diesen Unterschied erkenne ich bei mir nicht immer.
Vielleicht ist das der eigentliche Punkt.
Ablehnung tut weh.
Aber die Angst davor nimmt einem manchmal schon vorher die Entscheidung ab.
Und dann wirkt es, als hätte man selbst gewählt.
Dabei hat man nur vermieden.
Ich weiß nicht, ob ich das ändern kann.
Aber vielleicht ist es schon etwas, es überhaupt zu merken.
Vielleicht ist das der erste kleine Schritt.
Nicht direkt mutiger sein.
Nicht plötzlich alles aussprechen.
Nur ehrlich genug sein, um zu erkennen, wann Angst gerade für einen entscheidet.
Ich glaube, damit fange ich heute an.
`, 16),
  createPage("Seite 16", `
Heute war ein Raum ohne Tür.
Nicht verschlossen.
Nur leerer als sonst.
Ich bin durch ihn gelaufen, als würde ich etwas suchen, das ich nicht beim Namen nennen darf.
Auf dem Tisch lag kein Brief.
Im Handy kein Wunder.
Im Kopf nur ein Satz, der sich jedes Mal versteckt, wenn ich ihn ansehen will.
Vielleicht ist das so mit Dingen, die fehlen.
Sie stehen nicht vor einem.
Sie sitzen neben einem.
Still.
Unauffällig.
Wie ein zweiter Schatten.
Ich habe heute versucht, ihn abzuschütteln.
Hat nicht funktioniert.
Er kennt meine Wege zu gut.
Manche Namen sind wie Schlüssel.
Man trägt sie nicht sichtbar bei sich.
Aber jeder Raum merkt, dass man sie verloren hat.
Ich glaube, heute war so ein Tag.
Kein lauter.
Kein schwerer.
Nur einer, der an den falschen Stellen hohl klingt.
Als hätte jemand ein Lied gespielt und genau die schönste Note ausgelassen.
Und trotzdem wartet man die ganze Zeit darauf, sie zu hören.
Komisch.
Wie etwas fehlen kann, ohne verschwunden zu sein.
Wie etwas still sein kann und trotzdem alles sagt.
Vielleicht ist es auch nicht nur der Mensch, der fehlt.
Vielleicht ist es das Licht, das er auf Dinge geworfen hat.
Man hält eine Lampe oft für selbstverständlich, solange sie brennt.
Erst wenn sie ausgeht, merkt man, wie viele Ecken vorher warm waren.
Wie viele Dinge weniger hart aussahen.
Wie viel leichter es war, sich selbst zu ertragen, wenn jemand anderes einen nicht nur angesehen, sondern wirklich gesehen hat.
Es ist ein Unterschied.
Angesehen wird man oft.
In der Stadt.
Im Spiegel.
Von Menschen, die kurz prüfen, ob man im Weg steht.
Gesehen zu werden ist seltener.
Gesehen werden heißt, dass jemand nicht nur die Umrisse erkennt.
Nicht nur die Haltung.
Nicht nur das, was man gerade zeigt.
Sondern auch das, was man zu verstecken versucht.
Und trotzdem bleibt.
Vielleicht ist genau das der Teil, der so schwer in Worte passt.
Nicht nur die Stimme.
Nicht nur die Nähe.
Nicht nur diese eine Person.
Sondern dieses leise Gefühl, nicht beweisen zu müssen, dass man bleiben darf.
Als hätte jemand eine Tür geöffnet, ohne zu fragen, was man dafür mitbringt.
Ohne Eintritt.
Ohne Tausch.
Ohne Rechnung am Ende.
Einfach so.
Wie seltsam „einfach so“ klingen kann, wenn man es nicht gewohnt ist.
Zuneigung ohne Bedingung fühlt sich an wie ein Geschenk, bei dem man ständig nach dem Preisschild sucht.
Man dreht es in den Händen.
Sucht die Ecke, an der steht, was man zurückgeben muss.
Sucht den Haken.
Die Pflicht.
Die Gegenleistung.
Und wenn man nichts findet, wird man nicht ruhiger.
Man wird unsicher.
Weil etwas in einem nicht glauben will, dass man gemeint sein könnte.
Einfach nur gemeint.
Nicht nützlich.
Nicht passend.
Nicht gerade bequem.
Nur gemeint.
Vielleicht vermisse ich genau das.
Dieses Gefühl, für einen Moment nicht argumentieren zu müssen, warum ich da bin.
Nicht leiser werden zu müssen.
Nicht besser.
Nicht einfacher.
Nicht weniger.
Nur da.
Und trotzdem nicht zu viel.
Ich glaube, manche Menschen sind wie Spiegel, aber nicht die kalten aus Glas.
Eher wie Wasser bei Sonnenlicht.
Man sieht sich darin nicht perfekt.
Vielleicht sogar verzerrt.
Aber irgendwie schöner.
Sanfter.
Erträglicher.
Und irgendwann fängt man an zu glauben, dass diese Version von einem vielleicht wirklich existiert.
Nicht, weil man sich selbst belügt.
Sondern weil jemand anderes sie zuerst gesehen hat.
Das ist gefährlich.
Nicht böse gefährlich.
Eher zerbrechlich gefährlich.
Denn wenn dieses Wasser plötzlich fehlt, steht man wieder vor dem alten Spiegel.
Dem ehrlichen vielleicht.
Dem strengen.
Dem, der nichts wärmer macht.
Und dann fragt man sich, ob das Licht damals echt war.
Oder ob man nur für eine Zeit lang Glück hatte.
Ich weiß es nicht.
Vielleicht war es beides.
Vielleicht gibt es Dinge, die wahr sind, auch wenn sie nicht bleiben.
Vielleicht kann etwas echt gewesen sein, ohne ewig zu sein.
Dieser Gedanke hilft manchmal.
Heute nicht besonders.
Aber manchmal.
Ich glaube, heute vermisse ich keinen lauten Moment.
Kein großes Ereignis.
Nichts, was man auf ein Foto schreiben würde.
Ich vermisse eher das Dazwischen.
Das kaum Sichtbare.
Den Platz neben einem Satz.
Das kleine Wissen, dass irgendwo jemand ist, der einen nicht nur duldet.
Sondern mag.
Ohne dass man vorher etwas leisten muss.
Ohne vorher die richtige Version von sich auszusuchen.
Ohne die oberen Knöpfe zu schließen, nur damit alles ordentlicher wirkt.
Vielleicht ist das der Grund, warum manche Tage an den Rändern ausfransen.
Weil nicht die Welt anders ist.
Sondern der Blick, der sie einmal weicher gemacht hat.
Und vielleicht schreibe ich deshalb hier.
Weil manche Sätze nicht gelesen werden müssen, um gemeint zu sein.
Weil manche Rätsel keine Lösung brauchen.
Nur jemanden, der lange genug hinsieht.
Und vielleicht ist genau das der Teil, den ich am wenigsten verstehe.
Wie kann jemand etwas mögen, das man selbst kaum ansehen kann?
Wie kann jemand bleiben, wenn man selbst am liebsten aus sich herausgehen würde?
Es ist seltsam, von außen etwas geschenkt zu bekommen, das innen keinen Platz findet.
Als würde jemand einem einen Spiegel hinhalten, in dem man nicht sofort wegsehen muss.
Und trotzdem traut man dem Bild nicht.
Nicht wirklich.
Weil man sich selbst ja kennt.
Oder zumindest glaubt, sich zu kennen.
Die unschönen Gedanken.
Die Unsicherheit.
Die Fehler.
Die Dinge, die man lieber versteckt, weil man hofft, dass niemand lange genug hinsieht, um sie zu finden.
Und dann kommt jemand und sieht hin.
Nicht kurz.
Nicht aus Versehen.
Sondern wirklich.
Und geht trotzdem nicht.
Ich glaube, das ist der Moment, in dem man nicht weiß, ob man dankbar sein soll oder Angst bekommen muss.
Vielleicht beides.
Weil es schön ist, gemocht zu werden.
Aber auch schwer, wenn man selbst nicht versteht, warum.
`, 17),
  createPage("Seite 17", `
Heute wurde ich komplett zerstört.
Wir hatten heute Geschichtskonsultation und meine Lehrerin hielt es offenbar für eine gute Idee, eine Prüfungssimulation zu machen.
War es wahrscheinlich auch.
Für mich fühlte es sich nur nicht ganz so an.
Ich saß da und habe versucht, irgendwie einen sinnvollen Gedanken zu formulieren, während sie mit jeder Nachfrage ein weiteres kleines Loch in mein ohnehin schon sehr wackliges Konstrukt gebohrt hat.
Es ist beeindruckend, wie schnell man sich wieder wie ein Schüler fühlen kann.
Also nicht wie jemand, der kurz vor dem Ende der Schulzeit steht und eigentlich schon vieles hinter sich hat.
Sondern wie jemand, der plötzlich merkt, dass er vielleicht doch nicht so vorbereitet ist, wie er gerne wäre.
Ich glaube, sie wollte mir helfen.
Und wahrscheinlich hat sie das auch.
Aber in dem Moment fühlte es sich eher so an, als würde sie mich vorführen, ohne es böse zu meinen.
Vielleicht ist das die effektivste Art der Vorbereitung.
Einmal vorher auseinandernehmen, damit es später weniger weh tut.
Trotzdem saß ich danach kurz da und musste überlegen, ob ich Geschichte überhaupt jemals verstanden habe.
Wahrscheinlich übertreibe ich.
Tue ich ja selten.
Danach war ich unterwegs und musste beim Gehen ständig die Seite wechseln, weil ich meinen Gesprächspartner verstehen wollte, aber gleichzeitig einen Kopfhörer im Ohr hatte.
Eigentlich keine besonders spannende Situation.
Aber dabei ist mir eingefallen, dass du lieber auf der rechten Seite gegangen bist.
Keine Ahnung, warum mir das wieder eingefallen ist.
Ich glaube, ich musste kurz schmunzeln, weil es so eine unnötig spezifische Erinnerung ist.
So etwas merkt man sich ja eigentlich nicht bewusst.
Es bleibt einfach irgendwo hängen.
Vielleicht hattest du dafür einen Grund.
Vielleicht auch nicht.
Vielleicht war es einfach Zufall und ich mache daraus schon wieder mehr als nötig.
Wie immer.
Einfach nur ein Gedanke, der kurz vorbeikam.
Und dann war er auch schon wieder weg.
Naja.
Fast.
`, 18),
  createPage("Seite 18", `
Ich habe ziemlich lange nicht geschrieben.
Ich weiß nicht warum.
Eigentlich weiß ich auch nicht so recht, warum ich jetzt schreibe.
Vielleicht, weil es sich komisch anfühlt, einfach aufzuhören.
Nicht bewusst.
Nicht mit einer Entscheidung.
Eher so, als wäre man kurz aus dem Raum gegangen und hätte vergessen, wiederzukommen.
Und jetzt steht man plötzlich wieder in der Tür und weiß nicht genau, ob man noch dazugehört.
Komischer Gedanke.
Ich glaube, genau so fühlt es sich gerade an.
Diese Seite war für eine Zeit irgendwie selbstverständlich.
Nicht unbedingt angenehm.
Auch nicht immer hilfreich.
Aber sie war da.
Ein Ort, an dem ich Gedanken ablegen konnte, ohne sie jemandem wirklich geben zu müssen.
Dann habe ich es ein paar Tage nicht gemacht.
Und die Welt ist natürlich nicht untergegangen.
Nichts ist passiert.
Keine besondere Erkenntnis.
Kein Moment, in dem plötzlich alles leichter wurde.
Es war einfach stiller hier.
Vielleicht war das gut.
Vielleicht auch nicht.
Ich weiß es ehrlich gesagt nicht
Manchmal frage ich mich, ob Schreiben hilft oder ob es manche Dinge nur länger am Leben hält.
Ob man Gedanken wirklich loswird, wenn man sie aufschreibt.
Oder ob man ihnen damit nur ein Zuhause gibt.
Und genau da weiß ich nicht, was besser ist.
Tut es mir gut, diesen Gedanken und Gefühlen einen Raum zu bieten?
Oder halte ich sie dadurch nur künstlich am Leben?
Vielleicht ist es beides.
Vielleicht ist dieser Ort nicht unbedingt eine Lösung, sondern eher ein Zimmer, in dem ich kurz ehrlich sein darf.
Ohne irgendetwas erklären zu müssen.
Ohne so zu tun, als wäre alles in Ordnung.
Ohne zu behaupten, dass es mir gut geht, nur weil das die einfachere Antwort wäre.
Ich glaube, genau das ist der Unterschied.
Im Alltag kann man vieles überspielen.
Man kann funktionieren.
Reden.
Lächeln.
Sagen, dass alles passt.
Und meistens reicht das auch, weil die Frage sowieso nicht wirklich eine Einladung ist, ehrlich zu antworten.
Hier ist das anders.
Hier muss ich nichts schöner machen, als es ist.
Ich muss nicht sortiert klingen.
Nicht vernünftig.
Nicht weiter sein, als ich gerade bin.
Vielleicht hilft es genau deshalb.
Nicht, weil es etwas heilt.
Sondern weil es für einen Moment aufhört, so tun zu müssen, als gäbe es nichts zu heilen.
Und vielleicht ist das schon mehr, als ich dachte.
`, 19),
createPage("Seite 19", `
Heute war eigentlich nichts los.
Zumindest nichts, was von außen betrachtet besonders erwähnenswert wäre.
Ich wollte für Geschichte lernen, weil die Prüfung langsam unangenehm nah kommt.
Hat mittelmäßig funktioniert.
Nicht, weil Geschichte plötzlich uninteressant wäre, sondern weil mein Kopf sich heute mal wieder für alles zuständig gefühlt hat, nur nicht für das, was eigentlich wichtig gewesen wäre.
Irgendwann bin ich dann über einen Artikel in deinem WhatsApp-Status gestolpert.
Am Wochenende war dieses Frühlingsfest, das du ein paar Tage vorher in deinem Status beworben hattest.
Natürlich habe ich den Artikel gelesen.
Was hätte ich auch sonst tun sollen?
Er war wirklich schön geschrieben.
Nicht übertrieben, nicht künstlich emotional, sondern einfach so, dass man verstanden hat, worum es eigentlich ging.
Der Zweck wurde gut in Szene gesetzt.
Und dann schrieb der Autor über eine junge Pflegerin und ihren wundervollen Umgang mit den Bewohnern.
Wer sollte es sonst sein, wenn nicht du?
Ich musste kurz lächeln.
Nicht überrascht.
Eher bestätigt.
Es ist wirklich schön, wenn sogar Außenstehenden auffällt, wie sehr du deinen Job liebst.
Und wie gut du darin bist.
Ich glaube, manche Menschen machen ihren Beruf einfach nicht nur, weil es ihr Beruf ist.
Sie füllen ihn aus.
Nicht laut.
Nicht, um gesehen zu werden.
Sondern so selbstverständlich, dass es wahrscheinlich gerade deshalb auffällt.
Bei dir wirkt das immer so.
Als würdest du Menschen nicht nur versorgen, sondern wirklich wahrnehmen.
Vielleicht ist genau das der Unterschied.
Und vielleicht ist genau das auch der Grund, warum mich dieser Artikel so getroffen hat.
Nicht negativ.
Zumindest nicht nur.
Es war schön, das zu lesen.
Wirklich.
Aber gleichzeitig wurde ich wieder daran erinnert, was ich alles verloren habe.
Nicht nur irgendeine Person.
Sondern einen Menschen, bei dem sogar fremde Leute nach kurzer Zeit merken, dass da etwas Besonderes ist.
Und irgendwie bin ich ja selbst schuld, wenn ich mir so etwas durchlese.
Niemand zwingt mich dazu.
Ich hätte einfach weiterscrollen können.
Habe ich aber nicht.
Natürlich nicht.
Stattdessen sitze ich dann da, lese diesen Artikel und merke, wie sich etwas in mir gleichzeitig freut und zusammenzieht.
Ein ziemlich dummes Gefühl.
Aber vielleicht ist genau das gerade mein Problem.
Dass ich mich über schöne Dinge für dich freuen kann und sie mir trotzdem wehtun.
Weil sie mir zeigen, dass dein Leben weitergeht.
Nicht böse.
Nicht gegen mich.
Einfach weiter.
Und ich sitze hier und sollte eigentlich Geschichte lernen.
Stattdessen lese ich einen Artikel über dich und frage mich, warum ich mir selbst immer wieder solche kleinen Schnitte zufüge.
Vielleicht, weil ich noch nicht gelernt habe, wegzusehen.
Oder weil ein Teil von mir das gar nicht will.
Ich weiß es nicht.
Ich weiß nur, dass ich heute wieder daran erinnert wurde, wie viel Gutes in dir steckt.
Und wie sehr ich hoffe, dass du das selbst auch siehst.
Vielleicht sogar so klar, wie es ein fremder Autor in ein paar Zeilen gesehen hat.
Ich glaube, das reicht für heute.
Geschichte läuft mir nicht weg.
Leider.
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
  ctx.beginPath();
  ctx.fillStyle = p.color;
  ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
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
const prevBtn = document.getElementById("prev");
const music = document.getElementById("music");
const replyBox = document.getElementById("reply-box");
const replyBlur = document.getElementById("reply-blur");

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

replyBox.classList.add("hidden");
replyBox.style.display = "none";
replyBlur.classList.add("hidden");

if (currentPageIndex === 12) {
  tap.style.display = "block";
  envelope.classList.add("hidden");
}
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

if (prevBtn) {
  prevBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    const lastIndex = pages.length;
    goToPage(lastIndex);
  });
}

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
  createParticles(e.clientX, e.clientY);

  if (
    currentPageIndex === 12 &&
    currentStep === stepNodes.length - 1
  ) {
    replyBox.classList.remove("hidden");
    replyBox.style.display = "block";
    replyBox.style.opacity = "1";
    replyBox.style.pointerEvents = "auto";
    replyBlur.classList.remove("hidden");
  }

}else {
    const page = pages[currentPageIndex - 1];
    if (page.nextPage) {
      goToNextPage();
    }
  }
});

function createParticles(x, y) {
  const count = 10;
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 4 + 2;
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

// Hide the "prev" button when on the last page
if (prevBtn) {
  if (typeof pages !== "undefined" && currentPageIndex === pages.length) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }
}

const supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

replyBox.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.getElementById("send-btn").addEventListener("click", async (event) => {
  event.stopPropagation();

  const text = document.getElementById("reply").value.trim();

  if (!text) return;

  if (text.length > 500) {
    alert("Maximal 500 Zeichen.");
    return;
  }

  const { error } = await supabaseClient
    .from("replies")
    .insert([{ text }]);

  if (error) {
    console.error(error);
    alert("Fehler beim Senden.");
    return;
  }

  document.getElementById("reply").value = "";
  alert("Gesendet");
});
