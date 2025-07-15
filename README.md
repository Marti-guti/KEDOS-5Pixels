# Documentazione Tecnica del Progetto KEDOS-5Pixels

**Data:** 15 Luglio 2025

## 1. Introduzione

Questo documento fornisce una documentazione tecnica dettagliata del progetto KEDOS-5Pixels, un progetto frontend sviluppato per la presentazione e la vendita di soluzioni blockchain, in particolare il servizio KeCert. L'obiettivo di questa documentazione è descrivere l'architettura del progetto, le tecnologie utilizzate, le funzionalità implementate e la struttura del codice sorgente, fornendo una panoramica completa per sviluppatori, manutentori e stakeholder.

## 2. Panoramica del Progetto KEDOS-5Pixels

KEDOS-5Pixels è un'applicazione web frontend che funge da interfaccia per il servizio KeCert, una soluzione innovativa che sfrutta la tecnologia blockchain per la digitalizzazione e la verifica dei certificati di formazione. Il progetto mira a semplificare il processo di emissione e gestione dei certificati digitali, garantendone l'autenticità e la sicurezza attraverso l'immutabilità della blockchain.

### 2.1. Il Servizio KeCert

KeCert è un servizio di digitalizzazione dei certificati sviluppato da Kedos Srl. Utilizza la tecnologia blockchain, in particolare la blockchain di Ethereum [1], per registrare i certificati di formazione. Questo approccio garantisce che i certificati siano sicuri, autentici e facilmente verificabili, prevenendo frodi e falsificazioni. KeCert si rivolge principalmente agli istituti di formazione, offrendo loro un modo trasparente e moderno per rilasciare e gestire i diplomi e le certificazioni.

**Vantaggi di KeCert:**

- **Sicurezza:** I certificati sono registrati su una blockchain, rendendoli immutabili e resistenti alle manomissioni.

- **Autenticità:** La verifica dei certificati è semplificata e garantita dalla natura decentralizzata della blockchain.

- **Trasparenza:** Tutte le transazioni e le emissioni di certificati sono registrate in modo trasparente.

- **Efficienza:** Automatizza il processo di emissione e verifica, riducendo la necessità di intermediari.

## 3. Repository GitHub

Il progetto KEDOS-5Pixels è ospitato su GitHub all'indirizzo [https://github.com/Marti-guti/KEDOS-5Pixels](https://github.com/Marti-guti/KEDOS-5Pixels)

[i](https://github.com/Marti-guti/KEDOS-5Pixels)l repository presenta le seguenti caratteristiche:

Il progetto ha visto il contributo di diversi sviluppatori:

- @ViTz1

- @den-ITS

- @Marti-guti

- @Alessandro-Scattaglia

- @gualty160104

### 3.1. Struttura del Progetto

La struttura delle directory del repository è organizzata come segue:

```
KEDOS-5Pixels/
├── Appunti per presentazione finale/  # Contiene appunti o materiali per la presentazione finale del progetto
└── Progetto_KEDOS_5Pixels/
    ├── public/                     # Contiene risorse pubbliche come CSS, immagini e script JavaScript
    │   ├── css/
    │   │   ├── style.css         # Foglio di stile principale
    │   │   └── styleSetUp.css    # Foglio di stile specifico per il configuratore
    │   ├── img/                  # Immagini utilizzate nel sito (es. loghi, illustrazioni, icone)
    │   │   └── (numerose immagini come 1-set-up.svg, kedos-homepage.PNG, blockchain.svg, ecc.)
    │   └── scripts/              # Script JavaScript
    │       ├── FinalConfigurator.js # Logica JavaScript per il configuratore
    │       ├── configurator.js      # Probabilmente una versione precedente o alternativa del configuratore
    │       └── main.js              # Script principale per la navigazione e altre funzionalità
    └── src/                        # Contiene i file sorgente HTML delle pagine
        └── pages/
            ├── FinalConfigurator.html # Pagina HTML del configuratore
            ├── HomePageEng.html       # Pagina Home in inglese
            ├── HomePageEs.html        # Pagina Home in spagnolo
            ├── HomePageIta.html       # Pagina Home in italiano
            └── README.md              # File README specifico per questa sottocartella
```

## 4. Analisi del Codice Sorgente

Il progetto è un'applicazione web frontend che utilizza HTML, CSS e JavaScript. Le pagine sono progettate per essere responsive e multilingua, offrendo un'esperienza utente fluida e personalizzabile.

### 4.1. HomePageIta.html

`HomePageIta.html` è la pagina principale del sito web in lingua italiana. È una pagina statica che presenta il servizio KeCert e le sue funzionalità. Le tecnologie e le caratteristiche principali includono:

- **Meta Dati e SEO:** Utilizza meta tag standard per la descrizione, Open Graph e Twitter Card per la condivisione sui social media. Implementa `hreflang` per il supporto multilingua e JSON-LD per i dati strutturati (Schema.org), migliorando la visibilità sui motori di ricerca.

- **Fogli di Stile (CSS):** Si avvale di Bootstrap 5.3.0 per il layout responsivo e di fogli di stile personalizzati (`style.css`) per l'estetica. Vengono utilizzati anche Google Fonts (`DM Sans`, `Inter`, `Roboto`) e Bootstrap Icons per un design moderno.

- **Struttura della Pagina:** La pagina è suddivisa in sezioni chiare:
  - **Navbar:** Barra di navigazione fissa con logo, link di navigazione (Home, Chi siamo, Kedos) e un selettore di lingua.
  - **Hero Section:** Sezione introduttiva con un titolo accattivante ("Certificazioni BLOCKCHAIN"), una descrizione del servizio e un pulsante "CONFIGURA ORA" che reindirizza al configuratore.
  - **Chi Siamo Section:** Descrive l'azienda Kedos Srl, evidenziando i valori di trasparenza, sicurezza e innovazione. Include "flip-card" interattive che illustrano i benefici del servizio (Sicuro, Semplice, Garantito, Efficiente, Solido, Rapido).
  - **La Blockchain Section:** Spiega in modo conciso la tecnologia blockchain e il suo ruolo in KeCert, con un'immagine illustrativa e un altro pulsante "Configura ora".
  - **Footer:** Contiene informazioni di contatto, link di navigazione e icone social, oltre alle informazioni sul copyright.

- **Script (JavaScript):** Carica `main.js` per la gestione della navigazione e `bootstrap.bundle.min.js` per le funzionalità di Bootstrap.

- **Funzionalità Notabili:** Supporto multilingua con reindirizzamento a `HomePageEng.html` e `HomePageEs.html`. I pulsanti "CONFIGURA ORA" sono collegati al configuratore, presumibilmente gestito da `FinalConfigurator.js`.

### 4.2. FinalConfigurator.html

`FinalConfigurator.html` è la pagina dedicata al configuratore interattivo, che guida l'utente nella scelta dei servizi KeCert. La pagina è progettata per essere intuitiva e multilingua.

- **Meta Dati:** Include meta tag standard e un titolo specifico per il configuratore.

- **Fogli di Stile (CSS):** Utilizza Bootstrap 5.3.7 e un foglio di stile personalizzato (`styleSetUp.css`) per il layout e lo stile delle schede e degli elementi del configuratore.

- **Struttura della Pagina:**
  - **Selettore Lingua:** Un dropdown permette di selezionare la lingua (inglese, italiano, spagnolo).
  - **Breadcrumbs/Progress Bar:** Una serie di pulsanti con icone (`gear-fill`, `calendar2-date-fill`, `file-earmark-text-fill`, `file-earmark-check-fill`) visualizza lo stato di avanzamento del configuratore attraverso le fasi: Setup, Durata, Numero Classi e Form finale.
    - **Pagine Multilingua:** Il contenuto del configuratore è replicato per ogni lingua (`en-page`, `es-page`, `it-page`), con la visibilità gestita dinamicamente. Ogni sezione presenta:
      - **Scelta del Set-Up:** Opzioni per la registrazione manuale o automatizzata (tramite API) dei certificati.
      - **Scelta della Durata:** Opzioni per certificati con o senza data di scadenza (validità 10 o 100 anni).
      - **Scelta del Pacchetto:** Diverse opzioni di pacchetto basate sul numero di studenti/classi (es. 1000 studenti, pacchetti da 10 o 50 classi con 1 o 30 studenti per emissione).
      - **Riepilogo e Form:** Una sezione finale che riassume le scelte dell'utente e un modulo di contatto per raccogliere nome, email e una descrizione delle necessità.
  - **Pulsante "Next":** Per avanzare tra le fasi del configuratore.

- **Script (JavaScript):** Carica `bootstrap.bundle.min.js` e `FinalConfigurator.js` per la logica interattiva.

- **Funzionalità Notabili:** Interfaccia basata su schede (`.card`) con navigazione a carousel. La logica di salto permette agli utenti di passare direttamente al modulo di contatto se nessuna opzione predefinita soddisfa le loro esigenze. La dinamicità dell'interfaccia è gestita da JavaScript, che abilita/disabilita i pulsanti di progresso e aggiorna la visualizzazione in base alle selezioni.

### 4.3. main.js

`main.js` è uno script JavaScript semplice ma fondamentale per la navigazione del sito. Il suo ruolo principale è quello di reindirizzare l'utente alla pagina del configuratore (`FinalConfigurator.html`) quando vengono cliccati elementi specifici.

- **Funzionalità:** Il script seleziona tutti gli elementi con la classe `goToConfigurator`. Per ciascuno di questi elementi, aggiunge un event listener per il click. Quando un elemento viene cliccato, il script recupera l'ID dell'elemento (che rappresenta la lingua, es. "it") e lo utilizza per costruire un URL che include il parametro `lang`. L'utente viene quindi reindirizzato a `FinalConfigurator.html?lang=<id_lingua>`.

- **Scopo:** Questo meccanismo consente di pre-selezionare la lingua nel configuratore in base alla pagina da cui l'utente proviene, migliorando l'esperienza utente e la coerenza multilingua.

### 4.4. FinalConfigurator.js

`FinalConfigurator.js` è lo script JavaScript più complesso del progetto, responsabile di tutta la logica interattiva del configuratore. Gestisce lo stato del configuratore, le interazioni dell'utente, il calcolo del prezzo e l'aggiornamento dinamico dell'interfaccia utente.

- **Variabili e Costanti Globali:** Definisce variabili per la lingua corrente (`currentLang`), la pagina corrente (`currentPage`), le scelte dell'utente (`currentSession`) e il prezzo finale (`finalPrice`). Utilizza costanti per riferimenti agli elementi HTML (barra di progresso, pulsante Next, pagine per lingua, ecc.).

- **Gestione della Lingua:**
  - `showFlag()`: Aggiorna l'immagine della bandiera e il selettore della lingua in base a `currentLang`.
  - `updateNextButtonText()`: Modifica il testo del pulsante "Next" in base alla lingua selezionata.
  - `removeOtherLangPages()`: Nasconde le sezioni HTML delle lingue non attive.
  - `removeOtherPages()`: Nasconde le pagine del configuratore non attive all'interno della lingua selezionata e resetta lo stato visivo delle schede.

- **Navigazione del Configuratore:**
  - `next()`: Funzione centrale che gestisce l'avanzamento tra le fasi (Setup, Durata, Numero Classi, Form). Abilita il nodo successivo nella barra di progresso e disabilita il pulsante "Next" fino a una nuova selezione. Chiama `renderSummary()` quando si raggiunge la fase del form.

- **Interazione con le Schede:**
  - `initializeCards()`: Aggiunge event listener alle schede (`.card` e `.class-card`) per gestire la selezione dell'utente. Quando una scheda viene selezionata, viene evidenziata e la scelta viene memorizzata in `currentSession`. Il pulsante "Next" viene abilitato.

- **Calcolo del Prezzo e Riepilogo:**
  - `renderSummary()`: Questa funzione calcola il `finalPrice` basandosi sulle scelte memorizzate in `currentSession`. La logica di calcolo è condizionale e complessa, considerando il tipo di setup (base/avanzato), la durata dei certificati (con/senza scadenza) e il pacchetto scelto (singolo, 10 classi, 50 classi, con diverse opzioni per il numero di studenti per emissione). Il riepilogo delle scelte e il prezzo finale vengono poi visualizzati in una lista HTML.

- **Responsività (Mobile View):**
  - `mobileView(container)`: Trasforma la visualizzazione delle schede in un carousel per schermi più piccoli (larghezza inferiore a 1400px). Gestisce la navigazione tra le schede tramite pulsanti "Previous" e "Next" e indicatori di pagina (dots).

- **Gestione Eventi:**
  - `DOMContentLoaded`: Inizializza il configuratore all'apertura della pagina, impostando la lingua, la visualizzazione delle pagine e delle schede.
  - `languageSelect.addEventListener('change')`: Gestisce il cambio di lingua da parte dell'utente, aggiornando l'intera interfaccia.
  - `progressBarNodes.forEach(node => { ... })`: Permette la navigazione tra le fasi cliccando sui nodi della barra di progresso.
  - `nextBtn.addEventListener('click')`: Fa avanzare il configuratore alla fase successiva.
  - `document.addEventListener('click', (e) => { ... })`: Gestisce i click sui pulsanti "skip" (salta), reindirizzando l'utente direttamente al modulo di contatto finale e disabilitando le fasi intermedie.

## 5. Tecnologie Utilizzate

Il progetto KEDOS-5Pixels si basa su un set di tecnologie web standard e librerie popolari per garantire un'interfaccia utente moderna, responsiva e funzionale.

- **HTML5:** Utilizzato per la struttura semantica delle pagine web.

- **CSS3:** Per lo styling e la presentazione visiva. In particolare, il progetto fa ampio uso di:
  - **Bootstrap (v5.3.0 e v5.3.7):** Un framework CSS per lo sviluppo di interfacce utente responsive e mobile-first. Fornisce componenti pre-stilizzati e un sistema a griglia per il layout.
  - **Fogli di Stile Personalizzati:** `style.css` e `styleSetUp.css` contengono stili specifici del progetto per personalizzare l'aspetto e il comportamento degli elementi.
  - **Google Fonts:** Per una tipografia accattivante e coerente (`DM Sans`, `Inter`, `Roboto`).
  - **Bootstrap Icons:** Per icone vettoriali facilmente scalabili e personalizzabili.

- **JavaScript:** Per la logica interattiva e dinamica del frontend. Le librerie e le funzionalità JavaScript includono:
  - **Vanilla JavaScript:** Per la manipolazione del DOM, la gestione degli eventi e la logica del configuratore.
  - **Bootstrap Bundle JS:** Include il JavaScript di Bootstrap per le funzionalità interattive dei componenti (es. navbar, dropdown).

- **Blockchain (KeCert):** Sebbene il frontend non interagisca direttamente con la blockchain, il progetto è strettamente legato al servizio KeCert, che utilizza la blockchain di Ethereum per la digitalizzazione e la verifica dei certificati.

## 6. Architettura e Design

L'architettura del progetto KEDOS-5Pixels è quella di una **Single Page Application (SPA)** o, più precisamente, di un'applicazione multi-pagina con un forte componente interattivo (il configuratore) che simula un'esperienza SPA. Il design è orientato alla **responsività** e alla **multilingua**.

### 6.1. Design Responsivo

L'uso di Bootstrap e l'implementazione di `mobileView` in `FinalConfigurator.js` dimostrano un forte impegno verso un design responsivo. Le pagine si adattano dinamicamente a diverse dimensioni di schermo, garantendo un'esperienza utente ottimale su desktop, tablet e smartphone. La trasformazione delle schede del configuratore in un carousel su dispositivi mobili è un esempio chiave di questa adattabilità.

### 6.2. Supporto Multilingua

Il progetto è progettato per supportare più lingue (italiano, inglese, spagnolo) a livello di interfaccia utente e contenuto. Questo è gestito attraverso:

- **Pagine HTML dedicate:** `HomePageIta.html`, `HomePageEng.html`, `HomePageEs.html` forniscono contenuti specifici per ogni lingua.

- **Parametri URL:** L'uso del parametro `lang` nell'URL (`FinalConfigurator.html?lang=it`) permette di pre-selezionare la lingua nel configuratore.

- **Logica JavaScript:** `FinalConfigurator.js` gestisce la visualizzazione dinamica delle sezioni di lingua e l'aggiornamento dei testi in base alla lingua selezionata, inclusi i riepiloghi delle scelte e i testi dei pulsanti.

### 6.3. Interazione Utente (Configuratore)

Il configuratore è il cuore interattivo del progetto. La sua architettura si basa su un flusso guidato, dove l'utente progredisce attraverso diverse fasi di selezione. L'uso di schede visivamente accattivanti e una barra di progresso intuitiva migliora l'usabilità. La logica di calcolo del prezzo in tempo reale e la possibilità di saltare direttamente al modulo di contatto sono funzionalità chiave che migliorano l'esperienza utente.

## 7. Istruzioni per lo Sviluppo e la Manutenzione

### 7.1. Requisiti

Per lavorare sul progetto, è necessario un ambiente di sviluppo web standard, che includa:

- Un editor di testo o IDE (es. VS Code).

- Un browser web moderno (es. Chrome, Firefox, Edge).

- Git per la gestione del controllo versione.

### 7.2. Setup dell'Ambiente

1. **Clonare il Repository:**

1. **Navigare nella Directory del Progetto:**

1. **Aprire i File HTML:** Le pagine HTML possono essere aperte direttamente nel browser per la visualizzazione e il test, poiché il progetto è puramente frontend e non richiede un server backend per la sua esecuzione di base.

### 7.3. Modifiche al Codice

- **HTML:** Le modifiche alla struttura delle pagine devono essere apportate nei rispettivi file `.html` nella directory `src/pages/`.

- **CSS:** Gli stili globali si trovano in `public/css/style.css`, mentre gli stili specifici del configuratore sono in `public/css/styleSetUp.css`.

- **JavaScript:** La logica principale del sito è in `public/scripts/main.js`, mentre la logica complessa del configuratore è in `public/scripts/FinalConfigurator.js`.

### 7.4. Considerazioni per la Manutenzione

- **Aggiornamenti Bootstrap:** Se si aggiorna la versione di Bootstrap, è importante verificare la compatibilità con gli stili e gli script personalizzati, poiché potrebbero esserci cambiamenti che richiedono adattamenti.

- **Logica del Configuratore:** La funzione `renderSummary()` in `FinalConfigurator.js` contiene una logica di calcolo del prezzo complessa. Qualsiasi modifica ai prezzi o alle opzioni del configuratore richiederà un'attenta revisione e test di questa funzione.

- **Supporto Multilingua:** L'aggiunta di nuove lingue richiederà la creazione di nuove pagine HTML (`HomePage<NuovaLingua>.html`) e l'aggiornamento delle sezioni pertinenti in `FinalConfigurator.html` e `FinalConfigurator.js` per includere i nuovi testi e le opzioni di traduzione.

- **Immagini e Risorse:** Le immagini sono gestite nella directory `public/img/`. Assicurarsi che i percorsi delle immagini siano corretti e che le immagini siano ottimizzate per il web.

## 8. Conclusioni

Il progetto KEDOS-5Pixels è un'applicazione frontend ben strutturata e funzionale che serve come interfaccia efficace per il servizio KeCert. L'attenzione alla responsività, al supporto multilingua e all'esperienza utente attraverso il configuratore interattivo lo rende un esempio solido di sviluppo web moderno. La documentazione fornita dovrebbe servire come guida completa per la comprensione, lo sviluppo e la manutenzione del progetto.[](https://www.factordev.it/en/it-solutions/kecert-digital-training-certificates-on-blockchain/)

