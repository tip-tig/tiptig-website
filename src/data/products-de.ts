import type { Product, Category } from './products';

export const categories: Category[] = [
  {
    slug: 'wire-feed-systems',
    name: 'Drahtvorschub-Systeme',
    description: 'Das Herzstück jeder TIP TIG Anlage. Unsere Drahtvorschub-Systeme kombinieren Heißdrahttechnologie mit einem dynamischer Drahtoszillation für präzise, hochwertige Schweißnähte.',
  },
  {
    slug: 'automated-welding',
    name: 'Automatisiertes Schweißen',
    description: 'Von kollaborativen Robotern bis zu mechanisierten Fahrwerken — Automatisierungslösungen, die sich nahtlos in die TIP TIG Drahtvorschubtechnologie integrieren.',
  },
  {
    slug: 'specialty-systems',
    name: 'Spezialsysteme',
    description: 'Speziell entwickelte Anlagen für Auftragschweißen, Orbitalschweißen und fortschrittliche Keyhole-WIG-Anwendungen.',
  },
  {
    slug: 'pipeline-equipment',
    name: 'Pipeline-Ausrüstung',
    description: 'Bewährte Werkzeuge für den Pipelinebau — vom Orbitalschneiden bis zur präzisen Innenausrichtung.',
  },
];

export const products: Product[] = [
  // ── Drahtvorschub-Systeme ──
  {
    slug: 'allinone',
    name: 'TIP TIG AllinOne',
    category: 'Drahtvorschub-Systeme',
    categorySlug: 'wire-feed-systems',
    tagline: 'Das Flaggschiff der TIP TIG Drahtvorschub-Systeme — entwickelt für Präzision und anspruchsvolle Werkstatt- und Baustellenbedingungen.',
    description: 'Das TIP TIG AllinOne vereint Heißdrahttechnologie mit einem dynamischer Drahtoszillation und einem Vier-Rollen-Antrieb in einer kompakten Einheit. Es lässt sich an jede handelsübliche WIG-Stromquelle anschließen — keine herstellergebundene Ausrüstung erforderlich — und liefert durchgehend höhere Abschmelzleistungen, geringeren Wärmeeintrag und nahezu porositätsfreie Schweißnähte im Vergleich zum konventionellen WIG-Schweißen.',
    image: '/images/products/allinone.jpg',
    features: [
      { title: 'Heißdrahttechnologie', text: 'Der Zusatzdraht wird elektrisch vorgewärmt — das steigert die Abschmelzleistung und reduziert den Wärmeeintrag ins Grundmaterial. Weniger Verzug und ein breiteres Prozessfenster.' },
      { title: 'Vier-Rollen-Antrieb', text: 'Ein robuster Vier-Rollen-Antriebsmechanismus sorgt für konstanten Vorschubdruck über alle Drahtdurchmesser — kein Schlupf, gleichbleibende Ergebnisse.' },
      { title: 'Dynamische Drahtoszillation', text: 'Die kontrollierte Drahtbewegung rührt das Schmelzbad auf — für saubere Flankenanbindung, besseren Einbrand und keine Poren, auch bei kritischen Anwendungen.' },
      { title: 'Universelle Kompatibilität', text: 'Direkter Anschluss an jede wassergekühlte WIG-Stromquelle am Markt. Keine herstellergebundene Anlage, keine Bindung — TIP TIG in Ihre bestehende Ausstattung integrieren.' },
    ],
    specs: [
      { label: 'Heißdrahtstrom', value: '80 – 100 A' },
      { label: 'Einschaltdauer', value: '100 A / 100 %' },
      { label: 'Versorgungsspannung', value: '100 – 240 V' },
      { label: 'Netzfrequenz', value: '50 Hz / 60 Hz' },
      { label: 'Schutzklasse', value: 'IP 23' },
      { label: 'Abmessungen (H × B × T)', value: '525 × 352 × 600 mm', imperial: '20.66 × 13.85 × 23.62 in' },
      { label: 'Gewicht', value: '34 kg', imperial: '74 lbs' },
      { label: 'Normen', value: 'IEC 60974-1, -5, -10 CL.A' },
    ],
  },
  {
    slug: 'portable-allinone',
    name: 'TIP TIG Portable AllinOne',
    category: 'Drahtvorschub-Systeme',
    categorySlug: 'wire-feed-systems',
    tagline: 'Volle TIP TIG Leistung im robusten Kofferformat — entwickelt für Montage und Vor-Ort-Schweißungen.',
    description: 'Das Portable AllinOne bietet dieselbe Heißdrahttechnologie, dynamische Drahtoszillation und den Vier-Rollen-Antrieb wie das Standard-AllinOne — untergebracht in einem robusten, leichten Koffer. Mit nur 31 kg ist es gezielt für Montage, Wartungsstillstände und alle Einsätze konzipiert, bei denen Mobilität entscheidend ist, ohne Kompromisse bei der Schweißqualität oder Schweißleistung.',
    image: '/images/products/portable-allinone.jpg',
    features: [
      { title: 'Kofferbauweise', text: 'Ein kompaktes, schlagfestes Gehäuse mit integriertem Tragegriff ermöglicht mühelosen Transport — von der Werkstatt auf Bühnen, in enge Räume und zu abgelegenen Baustellen.' },
      { title: 'Vollständiger Funktionsumfang', text: 'Identische Heißdraht-, Oszillations- und Drahtvorschubfunktionen wie das Standard-AllinOne. Gleiche Leistung wie das große Modell — nur kompakter.' },
      { title: 'Schnelle Inbetriebnahme', text: 'Anschluss an jede wassergekühlte WIG-Stromquelle in wenigen Minuten. Konzipiert für den schnellen Einsatz bei geplanten Stillständen, Revisionen und Notfallreparaturen.' },
      { title: 'Robuste Konstruktion', text: 'Verstärktes Gehäuse und versiegelte Steckverbinder schützen die Elektronik in rauen Industrieumgebungen — Staub, Feuchtigkeit und Vibrationen.' },
    ],
    specs: [
      { label: 'Heißdrahtstrom', value: '80 – 100 A' },
      { label: 'Einschaltdauer', value: '100 A / 100 %' },
      { label: 'Versorgungsspannung', value: '100 – 240 V' },
      { label: 'Netzfrequenz', value: '50 Hz / 60 Hz' },
      { label: 'Schutzklasse', value: 'IP 23' },
      { label: 'Abmessungen (H × B × T)', value: '500 × 366 × 625 mm', imperial: '19.7 × 14.4 × 24.6 in' },
      { label: 'Gewicht', value: '31 kg', imperial: '68 lbs' },
      { label: 'Normen', value: 'IEC 60974-1, -5, -10 CL.A' },
    ],
  },
  {
    slug: 'wire-feeder-small',
    name: 'Portable Wire Feeder Small',
    category: 'Drahtvorschub-Systeme',
    categorySlug: 'wire-feed-systems',
    tagline: 'Ultrakompakter, mannlochgängiger Drahtvorschub mit nur 17,5 kg — entwickelt für enge Räume, Schiffbau und Behälterinnenmontage.',
    description: 'Der Portable Wire Feeder Small ist speziell für Anwendungen mit stark eingeschränktem Zugang konstruiert. Kompakt genug, um durch Standard-Mannlöcher zu passen, erreicht er Stellen, die herkömmliche Drahtvorschübe nicht erreichen — in Druckbehältern, zwischen Strukturrahmen und durch enge Zugänge. Mit nur 17,5 kg und 213 × 330 × 457 mm liefert er dieselbe Heißdraht- und Oszillationsleistung wie das AllinOne in Standardgröße.',
    image: '/images/products/wire-feeder-small.jpg',
    images: ['/images/products/wire-feeder-small.jpg', '/images/products/wire-feeder-small-pcb.jpg'],
    features: [
      { title: 'Mannlochgängiges Design', text: 'Der kleinste TIP TIG Drahtvorschub mit nur 213 × 330 × 457 mm — kompakt genug für Standard-Mannlöcher, Druckbehälter, Tanks und enge Strukturbaugruppen, wo kein anderer Drahtvorschub passt.' },
      { title: 'Schiffbau & Behälterinnenmontage', text: 'Speziell für die Anforderungen der Werftfertigung konzipiert — enge Tanksektionen, Doppelböden und Rohrdurchführungen, wo Platz und Gewicht entscheidend sind.' },
      { title: 'Nur 17,5 kg', text: 'Leicht genug, um von Hand auf erhöhte Arbeitspositionen, Gerüste und abgelegene Schweißstellen getragen zu werden — ohne Hebezeuge.' },
      { title: 'Volle TIP TIG Leistung', text: 'Heißdrahttechnologie und dynamische Drahtoszillation — identische Prozessfähigkeit wie das Standard-AllinOne, unabhängig vom kompakten Gehäuse.' },
    ],
    specs: [
      { label: 'Heißdrahtstrom', value: '80 – 100 A' },
      { label: 'Einschaltdauer', value: '100 A / 100 %' },
      { label: 'Versorgungsspannung', value: '100 – 240 V' },
      { label: 'Netzfrequenz', value: '50 Hz / 60 Hz' },
      { label: 'Schutzklasse', value: 'IP 66' },
      { label: 'Abmessungen (H × B × T)', value: '213 × 330 × 457 mm', imperial: '8.4 × 13 × 18 in' },
      { label: 'Gewicht', value: '17,5 kg', imperial: '38.5 lbs' },
      { label: 'Normen', value: 'IEC 60974-1, -5, -10 CL.A' },
    ],
  },
  {
    slug: 'wire-feeder-large',
    name: 'Portable Wire Feeder Large',
    category: 'Drahtvorschub-Systeme',
    categorySlug: 'wire-feed-systems',
    tagline: 'Portabler Drahtvorschub mit erweiterter Kapazität bei 20 kg — gebaut für lange Schweißstrecken im Schiffbau und Schwerstahl.',
    description: 'Der Portable Wire Feeder Large nimmt größere Drahtspulen auf und reduziert so Stillstandszeiten durch Spulenwechsel bei langen Nähten und Mehrlagenschweißungen erheblich. Mit 20 kg und IP 66-Schutz ist er für den Dauereinsatz in anspruchsvollen Werft- und Stahlbauumgebungen ausgelegt und bleibt dabei portabel genug für den Baustelleneinsatz.',
    image: '/images/products/wire-feeder-large.jpg',
    images: ['/images/products/wire-feeder-large.jpg', '/images/products/wire-feeder-large-complete.jpg'],
    features: [
      { title: 'Erweiterte Spulenkapazität', text: 'Aufnahme größerer Drahtspulen für längere ununterbrochene Schweißstrecken — weniger Spulenwechsel bedeuten weniger Stillstandszeit und gleichmäßigere Nahtqualität bei langen Nähten.' },
      { title: 'Robuste Ausführung', text: 'Verstärktes Gehäuse mit IP 66-Schutz, konstruiert für den Dauerbetrieb in rauen Industrieumgebungen — Werften, Offshore-Plattformen und schwerer Stahlbau.' },
      { title: 'Portabel mit 20 kg', text: 'Trotz erweiterter Kapazität bleibt der Large Feeder baustellentauglich. Das Gerät zum Werkstück bringen — statt das Werkstück in die Werkstatt.' },
      { title: 'Volle TIP TIG Leistung', text: 'Heißdrahttechnologie und dynamische Drahtoszillation — identische Prozessfähigkeit wie das Standard-AllinOne, mit dem zusätzlichen Vorteil längerer Schweißzeiten.' },
    ],
    specs: [
      { label: 'Heißdrahtstrom', value: '80 – 100 A' },
      { label: 'Einschaltdauer', value: '100 A / 100 %' },
      { label: 'Versorgungsspannung', value: '100 – 240 V' },
      { label: 'Netzfrequenz', value: '50 Hz / 60 Hz' },
      { label: 'Schutzklasse', value: 'IP 66' },
      { label: 'Abmessungen (H × B × T)', value: '203 × 432 × 559 mm', imperial: '8 × 17 × 22 in' },
      { label: 'Gewicht', value: '20 kg', imperial: '44 lbs' },
      { label: 'Normen', value: 'IEC 60974-1, -5, -10 CL.A' },
    ],
  },

  // ── Automatisiertes Schweißen ──
  {
    slug: 'cobo-tiptig',
    name: 'COBO-TIPTIG',
    category: 'Automatisiertes Schweißen',
    categorySlug: 'automated-welding',
    tagline: 'Kollaborative Schweißautomatisierung mit TIP TIG Qualität — ohne Schutzzäune, ohne aufwändige Programmierung.',
    description: 'Der COBO-TIPTIG bringt die Vorteile der TIP TIG Drahtvorschubtechnologie in die kollaborative Roboterschweißung. Jedes System wird individuell auf die jeweilige Anwendung konfiguriert — von der Einzelteilfertigung bis zur Kleinserie. Der Cobot arbeitet sicher neben dem Bediener, erlernt neue Schweißbahnen über intuitives Teach-In und liefert dieselbe Heißdraht- und oszillationsgetriebene Schweißqualität, die den TIP TIG Prozess auszeichnet.',
    image: '/images/products/cobo-tiptig.jpg',
    features: [
      { title: 'Sichere Mensch-Roboter-Kollaboration', text: 'Kraftbegrenzte Cobot-Technologie ermöglicht dem Bediener die direkte Arbeit neben dem Roboter — keine Schutzzäune, keine Lichtvorhänge. Der Roboter stoppt bei Kontakt sofort und lässt sich nahtlos in bestehende Werkstattlayouts integrieren.' },
      { title: 'Intuitives Teach-In', text: 'Der Bediener führt den Roboterarm manuell entlang der gewünschten Schweißbahn. Kein G-Code, keine Offline-Programmierung — neue Bauteile können in Minuten angelernt werden, was das System auch für Einzelteil- und Kleinserienfertigung wirtschaftlich macht.' },
      { title: 'Volle TIP TIG Prozessqualität', text: 'Heißdrahtvorwärmung und dynamische Drahtoszillation liefern dieselbe überlegene Schweißqualität wie manuelles TIP TIG — höhere Abschmelzleistung, geringerer Wärmeeintrag und nahezu porositätsfreie Ergebnisse, jetzt mit robotergestützter Reproduzierbarkeit.' },
      { title: 'Individuell konfigurierte Systeme', text: 'Jeder COBO-TIPTIG wird auf die Anwendung zugeschnitten. Roboterreichweite, Positionierer, Brenneraufnahme und Prozessparameter werden passend zu Ihren Werkstücken und Fertigungsanforderungen konfiguriert.' },
    ],
  },
  {
    slug: 'welding-carriage',
    name: 'Welding Carriage – Flexible Track',
    category: 'Automatisiertes Schweißen',
    categorySlug: 'automated-welding',
    tagline: 'Mechanisiertes TIP TIG Schweißen an gekrümmten und geraden Nähten — bis zu 300 % schneller als konventionelles WIG, mit perfekter Wiederholgenauigkeit.',
    description: 'Das Welding Carriage mit Flexible Track macht TIP TIG zu einem vollmechanisierten Prozess. Eine flexible Magnetschiene passt sich der Werkstückgeometrie an, während ein motorisiertes Fahrwerk eine präzise, konstante Schweißgeschwindigkeit entlang der Naht sicherstellt. Kombiniert mit dynamischem Drahtvorschub, Heißdrahttechnologie und AVC (Lichtbogenspannungsregelung) erreicht das System bis zu 300 % höhere Schweißgeschwindigkeiten und bis zu 400 % höhere Abschmelzleistungen gegenüber konventionellem WIG — bei bis zu 80 % reduzierter Aufmischung. Alle Komponenten sind vorinstalliert, geprüft und schweißtechnisch erprobt.',
    image: '/images/products/welding-carriage.jpg',
    features: [
      { title: 'Dynamischer Drahtvorschub & Heißdraht', text: 'Die oszillierende Drahtbewegung sorgt für ein beherrschbares Schmelzbad — auch in Zwangslagen. Heißdrahtvorwärmung steigert die Abschmelzleistung und reduziert das Risiko von Schweißfehlern — perfekte Nahtoptik ohne Spritzer.' },
      { title: 'Bis zu 300 % schneller', text: 'Mechanisierte Geschwindigkeitsregelung kombiniert mit TIP TIG Drahtvorschubtechnologie liefert bis zu 300 % höhere Schweißgeschwindigkeiten und bis zu 400 % mehr Abschmelzleistung gegenüber konventionellem WIG-Schweißen.' },
      { title: 'Schlüsselfertiges System mit intelligenter Steuerung', text: 'Alle Komponenten vorinstalliert und schweißtechnisch erprobt. AVC (Lichtbogenspannungsregelung), umfassende Datenerfassung, Echtzeit-Rückmeldung der Istwerte, Ferndiagnose über Netzwerk und halbautomatische Kalibrierung — sofort produktionsbereit.' },
      { title: 'Flexible Schiene, alle Positionen', text: 'Die Magnetschiene passt sich an gekrümmte und ebene Oberflächen in horizontaler, vertikaler und Überkopfposition an. Manueller Override auf allen Schweißparametern stellt sicher, dass der Bediener bei Bedarf die volle Kontrolle behält.' },
    ],
    video: '/videos/welding-carriage.mp4',
  },

  // ── Spezialsysteme ──
  {
    slug: 'cladding-cell',
    name: 'Compact Cladding Cell',
    category: 'Spezialsysteme',
    categorySlug: 'specialty-systems',
    tagline: 'SPS-gesteuerte, schlüsselfertige Plattieranlage mit TIP TIG Heißdraht — für Ringnuten, T-Stöße und Auftragschweißen bis 1200 mm Durchmesser.',
    description: 'Die Compact Cladding Cell ist eine vollautomatisierte Auftragschweißanlage auf Basis der TIP TIG Heißdrahttechnologie. Die SPS-Steuerung mit AVC, schrittmotorgesteuerten X/Z/OSC-Achsen und einem 3500-kg-Drehtisch sorgt für präzise, wiederholbare Ergebnisse. Optional mit Laserverfolgung. Geeignet für Rohre, Behälter, Flansche und Ventilgehäuse bis 1200 mm Durchmesser und 2000 mm Höhe. Alle Parameter lassen sich während des Schweißens über ein Handbediengerät anpassen. Echtzeit-Positionsmessung, Streckenergieberechnung und Ferndiagnose sind integriert.',
    image: '/images/products/cladding-cell.jpg',
    features: [
      { title: 'SPS-Steuerung mit AVC', text: 'Vollautomatisches Schweißen mit Lichtbogenspannungsregelung, konstanter Oberflächengeschwindigkeit und Override von Strom, Drahtvorschubgeschwindigkeit und Tischgeschwindigkeit während des Schweißens. 50 interne Programme, 2 GB CompactFlash-Speicher und mehrsprachige Bedienoberfläche mit Umschaltung metrisch/imperial.' },
      { title: 'Schrittmotorgesteuerte 3-Achsen-Bewegung', text: 'X-Achse (1300 mm Verfahrweg), Z-Achse (1300 mm Verfahrweg) und Pendelachse (100 mm Verfahrweg) — alle schrittmotorgesteuert für präzise, wiederholbare Brennerpositionierung. Echtzeit-Positionsmessung gewährleistet Genauigkeit bei jedem Durchgang.' },
      { title: '3500-kg-Drehtisch', text: '1200-mm-Tisch mit 3500 kg Tragfähigkeit, Bohrungsbrenner-Zugang bei 110 mm und konstanter Oberflächengeschwindigkeitsregelung. Für Bauteile bis 1200 mm Durchmesser und 2000 mm Höhe. Optional mit Schleifring für Vorwärmung.' },
      { title: 'Ringnuten & Laserverfolgung', text: 'Konzipiert für Ringnutschweißungen, T-Stöße, X-Nähte sowie obere und untere Stutzenbohrungen. Optionale Laserverfolgung ermöglicht einfache Nahtverfolgung ohne Programmierung.' },
    ],
    specs: [
      { label: 'Steuerung', value: 'SPS mit AVC' },
      { label: 'Schweißverfahren', value: 'TIP TIG Heißdraht' },
      { label: 'X-Achsen-Verfahrweg', value: '1300 mm', imperial: '51.2 in' },
      { label: 'Z-Achsen-Verfahrweg', value: '1300 mm', imperial: '51.2 in' },
      { label: 'Pendelweg', value: '100 mm', imperial: '3.9 in' },
      { label: 'Drehtisch-Tragfähigkeit', value: '3500 kg', imperial: '7716 lbs' },
      { label: 'Tischgröße', value: '1200 mm', imperial: '47.2 in' },
      { label: 'Max. Bauteildurchmesser', value: '1200 mm', imperial: '47.2 in' },
      { label: 'Max. Bauteilhöhe', value: '2000 mm', imperial: '78.7 in' },
      { label: 'Bohrungsbrenner', value: '110 mm', imperial: '4.3 in' },
      { label: 'Schaltschrankgehäuse', value: 'IP 52' },
      { label: 'Programme', value: '50 (intern) + 2 GB CF' },
      { label: 'Datenverbindung', value: 'Ethernet' },
      { label: 'Sprachen', value: 'EN, DE, NO, IT' },
    ],
  },
  {
    slug: 'orbital',
    name: 'TIP TIG Orbital',
    category: 'Spezialsysteme',
    categorySlug: 'specialty-systems',
    tagline: 'Das kompakteste Orbitalschweißsystem mit TIP TIG Heißdraht — für Rohre von 4" bis 60", bis zu 300 % schneller als konventionelles WIG.',
    description: 'TIP TIG Orbital vereint dynamischen Drahtvorschub und Heißdrahttechnologie mit Orbital-Rohrschweißung im kompaktesten verfügbaren System. Für Rohrdurchmesser von 4" bis 60" (101,6 – 1524 mm) liefert es bis zu 300 % höhere Schweißgeschwindigkeiten und bis zu 400 % mehr Abschmelzleistung gegenüber konventionellem Orbital-WIG — bei bis zu 80 % reduzierter Aufmischung. Alle Komponenten sind vorinstalliert und schweißtechnisch erprobt, mit AVC, umfassender Datenerfassung, Ferndiagnose und halbautomatischer Kalibrierung.',
    image: '/images/products/orbital.jpg',
    features: [
      { title: 'Dynamischer Drahtvorschub & Heißdraht', text: 'Die oszillierende Drahtbewegung sorgt für ein beherrschbares Schmelzbad — auch in Zwangslagen rund um den Rohrumfang. Heißdrahtvorwärmung steigert die Abschmelzleistung — perfekte Nahtoptik ohne Spritzer, auch bei hohen Schweißgeschwindigkeiten.' },
      { title: 'Kompaktestes Orbitalsystem', text: 'Mehr Schweißkapazität als jedes andere Orbitalschweißsystem in einem kompakten, vorinstallierten Paket. Alle Komponenten geprüft und schweißtechnisch erprobt — schnelle Inbetriebnahme vor Ort mit sofortiger Produktionsfähigkeit.' },
      { title: 'Intelligente Steuerung & Fernzugriff', text: 'AVC (Lichtbogenspannungsregelung), manueller Override auf allen Schweißparametern, umfassende Datenerfassung mit Echtzeit-Rückmeldung, Ferndiagnose über Netzwerk, mehrsprachige Bedienoberfläche mit Umschaltung metrisch/imperial und halbautomatische Kalibrierung.' },
      { title: 'Rohrdurchmesser 4" bis 60"', text: 'Hochpräzise Schweißköpfe für kleine und große Durchmesser. Konfigurierbar für Rohr-an-Rohr-, Rohr-an-Rohrboden- und geradlinige Schweißungen mit der flexiblen Schienenoption.' },
    ],
    specs: [
      { label: 'Rohrdurchmesser-Bereich', value: '101,6 – 1524 mm', imperial: '4" – 60"' },
      { label: 'Zusatzdraht-Durchmesser', value: '0,8 / 0,9 / 1,0 / 1,2 mm', imperial: '.030", .035", .040", .045"' },
      { label: 'Schweißverfahren', value: 'TIP TIG Heißdraht' },
    ],
    video: '/videos/orbital.mp4',
  },

  // ── Pipeline-Ausrüstung ──
  {
    slug: 'supercut',
    name: 'TIP TIG SuperCut',
    category: 'Pipeline-Ausrüstung',
    categorySlug: 'pipeline-equipment',
    tagline: 'Portable Orbital-Rohrtrennmaschine für 6" – 48" Rohre — gebaut für raue Einsatzbedingungen an Land und Offshore.',
    description: 'Die TIP TIG SuperCut ist eine portable Rohr- und Pipelinetrennmaschine für Rohrdurchmesser von 6" bis 48" (DN 150 – 1200). Konstruiert mit hochwertigen Aluminiumkomponenten, Korrosionsschutz-Beschichtung und einem abgedichteten, wartungsarmen Antriebssystem ist sie für die Belastungen der Pipeline-Wartung und des Pipelinebaus ausgelegt — Schmutz, Sand, Wasser und extreme Witterung. Von Offshore-Bohrplattformen bis zur Hafen- und Flusskonstruktion liefert die SuperCut präzise, wiederholbare Schnitte dort, wo es darauf ankommt.',
    image: '/images/products/supercut.jpg',
    images: ['/images/products/supercut.jpg', '/images/products/supercut-system.jpg', '/images/products/supercut-field.jpg'],
    features: [
      { title: 'Breiter Rohrdurchmesserbereich', text: '6" bis 48" (DN 150 – 1200) inklusive — deckt die Mehrheit der Onshore- und Offshore-Pipelinedurchmesser mit einer einzigen Maschine ab.' },
      { title: 'Konstruktion für raue Umgebungen', text: 'Abgedichtetes, wartungsarmes Antriebssystem mit hochwertiger Aluminiumkonstruktion und Korrosionsschutzpaket. Zuverlässiger Betrieb bei Schmutz, Sand, Wasser und Salzsprühnebel.' },
      { title: 'Baustellenportabel', text: 'Leichtes, kompaktes Design für den schnellen Einsatz auf Offshore-Bohrplattformen, Pipeline-Trassen und Baustellen in Flüssen und Häfen — keine Werkstatt erforderlich.' },
      { title: 'Präzise Orbitalschnitte', text: 'Gleichmäßige, saubere Schnitte über den gesamten Rohrumfang mit integrierter Fasenvorbereitung — schweißfertige Stoßstellen, die die Schwankungen manuellen Schneidens eliminieren.' },
    ],
    specs: [
      { label: 'Rohrdurchmesser-Bereich', value: 'DN 150 – 1200', imperial: '6" – 48"' },
      { label: 'Antriebssystem', value: 'Abgedichtet, wartungsarm' },
      { label: 'Konstruktion', value: 'Hochwertiges Aluminium mit Korrosionsschutzpaket' },
    ],
  },
  {
    slug: 'iluc',
    name: 'Internal Line Up Clamp (ILUC)',
    category: 'Pipeline-Ausrüstung',
    categorySlug: 'pipeline-equipment',
    tagline: 'Pneumatische Innenspann- und Spülvorrichtung für 4" bis 60" — präzise Ausrichtung für einwandfreie Wurzellagen.',
    description: 'Die TIP TIG Internal Line Up Clamp (ILUC) arbeitet im Rohrinneren und richtet zwei Rohrstöße gleichzeitig aus und spült sie für das externe Schweißen. Pneumatisch betrieben sorgt sie für exakte Ausrichtung, gleichmäßigen Spalt und saubere Schutzgasabdeckung — die Grundlage für fehlerfreie Wurzellagen an Pipeline-Verbindungen. Verfügbar für Rohrdurchmesser von 4" bis 60" (101,6 mm bis 1524 mm).',
    image: '/images/products/iluc.jpg',
    features: [
      { title: 'Ausrichten & Spülen in einem', text: 'Kombiniert Rohrausrichtung und Schutzgasspülung in einem Werkzeug — Stoß spannen und Schutzatmosphäre gleichzeitig herstellen, ohne separaten Spülaufbau.' },
      { title: 'Pneumatischer Betrieb', text: 'Druckluftbetätigte Spannung liefert gleichmäßige, kontrollierbare Kraft über den gesamten Rohrdurchmesserbereich. Keine Hydraulikflüssigkeiten, kein Kontaminationsrisiko in der Nähe der Schweißzone.' },
      { title: 'Rohrdurchmesser 4" bis 60"', text: 'Abdeckung von 101,6 mm bis 1524 mm (4" bis 60") — von Prozessrohrleitungen bis zu großen Fernleitungen, an Land und Offshore.' },
      { title: 'Uneingeschränkter Außenzugang', text: 'Innenspannung lässt den gesamten Rohrumfang frei für das Schweißen — keine Außenklemmen, Stege oder Heftnähte, die die Wurzellage behindern.' },
    ],
    specs: [
      { label: 'Rohrdurchmesser-Bereich', value: '101,6 – 1524 mm', imperial: '4" – 60"' },
      { label: 'Betrieb', value: 'Pneumatisch' },
      { label: 'Funktion', value: 'Ausrichtung + Formierung' },
    ],
    video: '/videos/iluc.mp4',
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
