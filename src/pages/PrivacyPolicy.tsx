import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Política de Privadesa</h1>
          <p className="text-sm text-muted-foreground mb-10">Última actualització: 11 de març de 2025</p>

          <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
            <p>
              Amb aquesta Política de Privadesa, BDR Informàtica (en endavant, BDR o nosaltres) t'informa de les dades personals que recollim mitjançant els serveis que oferim i queden reflectits a través d'aquest lloc web, com els tractem i els drets que en relació amb les teves dades personals i els nostres tractaments et confereix la normativa de Protecció de Dades Personals que ens és d'aplicació.
            </p>

            <section>
              <h2 className="text-xl font-bold mb-3">Normativa aplicable</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>La Llei 29/2021, de 28 d'octubre, Qualificada de Protecció de Dades Personals del Principat d'Andorra (en endavant, la LQPD).</li>
                <li>La Llei Orgànica 3/2018, de 5 de desembre, de Protecció de Dades Personals i garantia dels drets digitals (en endavant LOPDPGDD).</li>
                <li>El Decret 391/2022, de 28-9-2022 d'aprovació del Reglament d'aplicació de la LQPD.</li>
                <li>El Reglament (UE) 679/2016 del Parlament Europeu i del Consell, de 27 d'abril de 2016, relatiu a la protecció de les persones físiques respecte al tractament de dades personals i a la lliure circulació d'aquestes (en endavant, "RGPD").</li>
              </ol>
            </section>

            {/* Índex */}
            <section>
              <h2 className="text-xl font-bold mb-3">Índex</h2>
              <ol className="list-decimal pl-6 space-y-1">
                <li><a href="#apartat-1" className="text-primary hover:underline">A qui aplica aquesta Política de Privadesa?</a></li>
                <li><a href="#apartat-2" className="text-primary hover:underline">Qui és el responsable del tractament de les teves dades personals?</a></li>
                <li><a href="#apartat-3" className="text-primary hover:underline">Com obtenim les teves dades personals?</a></li>
                <li><a href="#apartat-4" className="text-primary hover:underline">Per a què utilitzem les teves dades i amb quina base legal ho fem?</a></li>
                <li><a href="#apartat-5" className="text-primary hover:underline">Amb qui podem compartir les teves dades personals?</a></li>
                <li><a href="#apartat-6" className="text-primary hover:underline">Quant de temps conservem les teves dades personals?</a></li>
                <li><a href="#apartat-7" className="text-primary hover:underline">Quins drets tens?</a></li>
                <li><a href="#apartat-8" className="text-primary hover:underline">Quines responsabilitats tens?</a></li>
                <li><a href="#apartat-9" className="text-primary hover:underline">Com protegim les teves dades personals?</a></li>
                <li><a href="#apartat-10" className="text-primary hover:underline">Modificacions d'aquesta Política de Privadesa</a></li>
              </ol>
            </section>

            {/* 1 */}
            <section id="apartat-1">
              <h2 className="text-xl font-bold mb-3">1. A qui aplica aquesta Política de Privadesa?</h2>
              <p>
                Aquesta Política s'aplica a les persones que es relacionen amb BDR a través d'aquest lloc web, als usuaris dels serveis que BDR ofereix amb les finalitats descrites en l'apartat 4 d'aquesta política (els Serveis), i a totes les persones les dades personals de les quals (per exemple, les seves imatges) puguin aparèixer a la nostra Web o en el context dels Serveis.
              </p>
            </section>

            {/* 2 */}
            <section id="apartat-2">
              <h2 className="text-xl font-bold mb-3">2. Qui és el responsable del tractament de les teves dades personals?</h2>
              <p>L'únic responsable del tractament de les teves dades personals d'acord amb el que s'indica en aquesta política és:</p>
              <p className="my-4 p-4 bg-muted rounded-lg">
                <strong>BDR Informàtica</strong><br />
                c/ Baixada del Molí, 20 1-1<br />
                AD500 Andorra la Vella (Andorra)<br />
                NRT L-707599-R<br />
                Registre de Comerç número 920400X<br />
                Correu electrònic: <a href="mailto:info@bdrinformatica.com" className="text-primary hover:underline">info@bdrinformatica.com</a>
              </p>
              <p>
                Comptem amb un Delegat de Protecció de Dades extern — Win2win, SLU, empresa andorrana especialitzada en privacitat i protecció de dades personals — a qui podràs dirigir-te en tot moment mitjançant el correu <a href="mailto:DPDextern@win2win.ad" className="text-primary hover:underline">DPDextern@win2win.ad</a>.
              </p>
              <p className="mt-4">
                Addicionalment, si et trobes a la Unió Europea t'interessa saber que el nostre representant a efectes de protecció de dades és la societat COMPLIANCE GAP MITIGATION, domiciliada al carrer Ferraz 28, 2º Esq. 28008 Madrid (Espanya), amb qui pots contactar mitjançant els telèfons (+34) 917589441 i (+34) 915482701.
              </p>
              <p className="mt-4">
                BDR no és responsable de les activitats que desenvolupin altres llocs web, fins i tot si s'accedeix als mateixos mitjançant enllaços que hi hagi a la nostra Web. Per això et recomanem encaridament que llegeixis amb atenció la informació que et proporcionin aquests altres responsables abans de donar-los les teves dades personals.
              </p>
            </section>

            {/* 3 */}
            <section id="apartat-3">
              <h2 className="text-xl font-bold mb-3">3. Com obtenim les teves dades personals?</h2>
              <p>En general, ets tu qui, directament, ens proporciones les teves dades personals — per exemple, mitjançant els formularis que existeixen en aquesta Web. Les úniques excepcions a aquesta norma són:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Les dades que ens proporcionin tercers que adquireixen els nostres serveis en el teu nom.</li>
                <li>Les dades de contacte que ens proporcionin els nostres proveïdors de serveis i productes quan els representis.</li>
                <li>Les dades de les persones la imatge o altres dades personals de les quals es publiquin a la nostra Web.</li>
                <li>Les dades personals que sobre tu puguin aparèixer en els correus electrònics que rebem.</li>
                <li>Les cookies d'aquest lloc web, sobre les quals trobaràs més informació a la nostra política de cookies.</li>
              </ul>
            </section>

            {/* 4 */}
            <section id="apartat-4">
              <h2 className="text-xl font-bold mb-3">4. Per a què utilitzem les teves dades i amb quina base legal ho fem?</h2>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per iniciar i mantenir la relació amb els nostres proveïdors</h3>
              <p>Si representes a un proveïdor de productes o serveis, recollim les teves dades de contacte i la teva signatura per gestionar les nostres relacions amb el proveïdor que representes, gestionar la fitxa de la nostra llista de proveïdors autoritzats, i gestionar els pressupostos i factures del proveïdor que representes.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per iniciar i mantenir la relació amb els nostres clients</h3>
              <p>Recollim les teves dades que rebem oralment o per escrit directament de tu o d'un tercer al que representes o del qual ets beneficiari, quan ens contractis un servei amb la finalitat de gestionar aquest contracte. Els tractaments d'aquestes dades estan legitimats per ser necessaris per a l'execució del contracte de servei en el qual ets part interessada.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per seleccionar i contractar el nostre personal</h3>
              <p>Tractem les dades del CV que voluntàriament ens fas arribar per gestionar la relació amb tu quant a la teva candidatura per ocupar un lloc de treball a BDR, incloent el procés de cerca, filtratge i emmagatzematge del CV com a potencial candidat, el procés de selecció de personal i el procés de contractació.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per pressupostar i oferir els nostres serveis</h3>
              <p>Recollim les dades que ens facilites a les nostres oficines, per telèfon o mitjançant correu electrònic per oferir-te un pressupost del servei que ens sol·licitis, i si l'acceptes, per donar-te el corresponent servei.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per atendre les teves sol·licituds, consultes o reclamacions</h3>
              <p>Recollim les dades personals que ens proporciones en els teus correus electrònics, per telèfon, o mitjançant el formulari de la pàgina de contacte, o mitjançant les sol·licituds d'exercici de drets, per atendre les teves sol·licituds, consultes o reclamacions en relació als nostres serveis o als drets que tens sobre les teves dades personals.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per gestionar eventuals futures reclamacions</h3>
              <p>Conservem les dades que poden ser necessàries per gestionar les teves possibles reclamacions, o les nostres, en base al nostre interès legítim en defensar-nos per salvaguardar els nostres drets.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per garantir el funcionament del nostre lloc web (cookies funcionals)</h3>
              <p>Utilitzem cookies funcionals per recollir, emmagatzemar, consultar i processar informació personal, des del navegador del teu dispositiu, amb la finalitat de garantir el correcte funcionament del nostre lloc web.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per extreure estadístiques agregades de l'ús del nostre lloc web (cookies analítiques)</h3>
              <p>Utilitzem cookies analítiques o estadístiques per identificar les pàgines més i menys visitades, analitzar quins continguts tenen més interès per als nostres visitants, i mesurar l'èxit de les nostres campanyes informatives, tot això amb l'objectiu de millorar els serveis que t'oferim a través de la Web.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per millorar l'interès de la publicitat que reps (cookies de publicitat)</h3>
              <p>Descarreguem cookies de publicitat de tercers. Aquests fitxers ens ajuden a inferir els teus interessos en funció de les pàgines que visites, el contingut en què fas clic i altres accions que realitzes en línia.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per poder utilitzar els serveis de Google</h3>
              <p>Com a obligació que Google LLC imposa a les entitats que utilitzen les eines Google Analytics i Google Ads, t'informem que aquests dos serveis són operats per Google Inc., domiciliat a 1600 Amphitheatre Parkway, Mountain View, CA 94043, EUA. T'informem que hem activat la funció d'anonymització d'IP per afegir salvaguardes addicionals.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per comunicar-te brèxes de seguretat</h3>
              <p>Si determinem que les teves dades han estat malversades, s'han vist exposades per una brèxa de seguretat o han estat adquirides de forma incorrecta per un tercer, t'informarem immediatament sobre aquesta brèxa de seguretat i sobre les mesures que hem pres i les que et recomanem prendre.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per preservar la seguretat mitjançant videovigilància</h3>
              <p>Recollim la teva imatge a través dels nostres sistemes de videovigilància amb la finalitat de preservar la seguretat de les persones, els béns i les pròpies instal·lacions, així com disposar de gravacions de vídeo com a prova.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Per altres finalitats que no siguin incompatibles amb les anteriors</h3>
              <p>Podem utilitzar les teves dades personals per altres finalitats que no siguin incompatibles amb les anteriorment senyalades (com finalitats d'arxiu per raó d'interès públic, finalitats de recerca científica o històrica, o finalitats estadístiques) sempre que estigui permès per la normativa vigent.</p>
            </section>

            {/* 5 */}
            <section id="apartat-5">
              <h2 className="text-xl font-bold mb-3">5. Amb qui podem compartir les teves dades personals?</h2>
              <p>No cedim a ningú les teves dades personals, excepte que:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Siguis tu mateix qui ens ho sol·licitis.</li>
                <li>Tinguem l'obligació legal de fer-ho.</li>
                <li>Actuem com a intermediaris, per exemple, quan hem de contractar un servei final en el teu nom.</li>
                <li>Siguem corresponsables de la recollida de dades, perquè, sempre amb el teu consentiment, altres entitats les tractin en nom propi. Aquest és el cas de Google Ireland Ltd., a qui hem encarregat el tractament de dades de les cookies necessàries per utilitzar els seus serveis d'Analytics.</li>
                <li>Necessitem que les tractin els nostres proveïdors de serveis, en el nostre nom.</li>
                <li>Poden tenir accés ocasional encara que no necessitin tractar dades personals en el nostre nom.</li>
              </ul>
              <p className="mt-4">Qualsevol transferència internacional que eventualment necessitem realitzar complirà amb el que estableixin les normatives en vigor que en cada moment ens apliquin.</p>
            </section>

            {/* 6 */}
            <section id="apartat-6">
              <h2 className="text-xl font-bold mb-3">6. Quant de temps conservem les teves dades personals?</h2>
              <p>BDR conserva les teves dades personals exclusivament durant el temps que durin els tractaments que les requereixen i, després, durant tot el temps que triguin a prescriure les responsabilitats legals que ens apliquin en cada moment.</p>
              <p className="mt-3">Quan no tinguem una finalitat legítima per tractar algunes de les teves dades personals, les eliminarem o les anonimitzarem, i si això no fos possible, les emmagatzemarem de forma segura i les bloquejarem per aïllar-les de qualsevol processament posterior fins que sigui possible la seva eliminació.</p>
            </section>

            {/* 7 */}
            <section id="apartat-7">
              <h2 className="text-xl font-bold mb-3">7. Quins drets tens?</h2>
              <p>Tens dret a obtenir confirmació sobre si disposem o no d'alguna dada personal teva.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">Els teus drets</h3>
              <p>Pots sol·licitar-nos l'execució dels següents drets:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Accés a les teves dades personals.</li>
                <li>Rectificació d'alguna de les teves dades personals, especificant la raó.</li>
                <li>Supressió d'alguna o totes les teves dades personals.</li>
                <li>Limitació del tractament de les teves dades, especificant la raó de la limitació.</li>
                <li>Oposició al tractament de les teves dades personals.</li>
                <li>Portabilitat de les teves dades quan la base de legitimació de la recollida hagi estat el consentiment o un contracte.</li>
                <li>Dret a no ser objecte de decisions individuals automatitzades.</li>
              </ul>
              <p className="mt-4">El consentiment prestat, tant per al tractament com per a la cessió de les dades dels interessats, serà revocable en qualsevol moment. Aquesta revocació en cap cas tindrà caràcter retroactiu.</p>

              <h3 className="text-lg font-semibold mt-6 mb-2">On i com pots exercir els teus drets</h3>
              <p>Pots exercir els teus drets:</p>
              <ol className="list-decimal pl-6 space-y-2 mt-3">
                <li>Mitjançant l'enviament d'una sol·licitud escrita a BDR, dirigida a la nostra adreça postal indicada en l'apartat 2 d'aquesta política.</li>
                <li>Mitjançant l'enviament del formulari associat al dret que vulguis exercir a l'adreça de correu electrònic <a href="mailto:DPDextern@win2win.ad" className="text-primary hover:underline">DPDextern@win2win.ad</a>, indicant a l'assumpte "Exercici de Drets de Protecció de Dades Personals".</li>
              </ol>
              <p className="mt-4">Així mateix, t'informem que podràs presentar una reclamació davant de l'autoritat nacional de control del teu país, o dirigir-te a tal efecte a l'Agència Andorrana de Protecció de Dades (APDA).</p>
            </section>

            {/* 8 */}
            <section id="apartat-8">
              <h2 className="text-xl font-bold mb-3">8. Quines responsabilitats tens?</h2>
              <p>En facilitar-nos les teves dades, ens garanteixes que aquestes són exactes i completes. Igualment, ens confirmes que respons de la veracitat de les dades personals que ens has comunicat i que les mantindràs convenientment actualitzades.</p>
              <p className="mt-3">No pots facilitar-nos dades personals d'altres persones a menys que estigui justificat en relació amb els serveis que ens sol·licites.</p>
              <p className="mt-3">En els casos en què hagis de facilitar-nos dades personals d'un menor de 16 anys o d'una persona que tingui els seus drets limitats, en fer-ho t'obligues a comptar amb l'autorització dels titulars de la seva pàtria potestat o tutela.</p>
            </section>

            {/* 9 */}
            <section id="apartat-9">
              <h2 className="text-xl font-bold mb-3">9. Com protegim les teves dades personals?</h2>
              <p>Estem completament compromesos amb la protecció de la teva privacitat i les teves dades personals. Hem elaborat el registre de totes les activitats de tractament de dades personals que duem a terme, hem analitzat el risc que pot suposar-te cadascuna d'aquestes activitats, i hem implementat les salvaguardes legals, tècniques i organitzatives adequades.</p>
              <p className="mt-3">Restringim l'accés a les dades personals a aquells empleats que realment les necessiten conèixer per realitzar algun dels tractaments referits en aquesta política.</p>
              <p className="mt-3">Si determinem que les teves dades han estat malversades, s'han vist exposades per una brèxa de seguretat o han estat adquirides de forma incorrecta per un tercer, t'informarem immediatament sobre aquesta brèxa de seguretat i sobre les mesures que hem pres.</p>
            </section>

            {/* 10 */}
            <section id="apartat-10">
              <h2 className="text-xl font-bold mb-3">10. Modificacions d'aquesta Política de Privadesa</h2>
              <p>Actualitzarem aquesta política quan sigui necessari per reflectir els eventuals canvis que es produeixin en la normativa o en els nostres tractaments. Si els canvis fossin substancials, t'ho notificarem abans que estiguin vigents.</p>
              <p className="mt-3">Si tens qualsevol pregunta sobre aquesta política, no dubtis a fer-nos-ho saber enviant-nos un correu a <a href="mailto:DPDextern@win2win.ad" className="text-primary hover:underline">DPDextern@win2win.ad</a>.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
