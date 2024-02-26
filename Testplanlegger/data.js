const headerArray = [
  {
    id: "gf",
    header: "Flytende intelligens (Gf)",
    description:
      "Defineres som bruken av viljestyrte og kontrollerte prosedyrer (som ofte krever bruk av fokusert oppmerksomhet) til å løse nye, situasjonsspesifikke problemer som ikke kan løses basert på tidligere lærte vaner, skjemaer eller skript.",
    phrases: "frase1",
    recommendations:
      "Induksjon (I) er antakelig kjerneaspektet ved det brede domenet Flytende resonnering (Gf). Ikke noe mål av domenet Flytende resonnering (Gf) er komplett uten et mål på Induksjon(I), som f.eks. WISC-V Matriser. Hvis man gir to tester, bør den andre testen være et mål på Deduksjon (RG), f.eks. WISC-V Figurvekter. Flytende resonneringsindeks fra WISC-V er i de aller fleste tilfeller et tilstrekkelig mål på Flytende resonnering (Gf).",
    references: "referanse1",
  },
  {
    id: "gc",
    header: "Krystallisert intelligens (Gc)",
    description:
      "Evnen til å forstå og kommunisere kulturelt verdsatt kunnskap. Krystallisert intelligens (Gc) omfatter dybden og bredden i både deklarativ og prosedural kunnskap, og ferdigheter som blant annet språk, ord og generell kunnskap utviklet gjennom erfaring, læring og akkulturering.",
    phrases:
      "Evnen til å forstå og kommunisere kulturelt verdsatt kunnskap, samt generell kunnskap utviklet gjennom erfæring og læring.",
    recommendations:
      "Adekvat utredning av Krystallisert intelligens (Gc) bør inkludere et mål på Allmennkunnskap (K0) og et mål på enten Språkutvikling (LD) eller Leksikalsk kunnskap (VL). Hvis man kan gi tre tester er en test for Lytteevne (LS) et godt valg. Hos førskolebarn er det særlig viktig å gjennomføre tester for Leksikalsk kunnskap (VL) (vokabular), fordi det har vist seg som et spesielt godt mål for intervensjon. Det innebærer at WISC-V VFI er underrepresentert for Gc og må suppleres med VECI for et fullverdig mål.",
    references: "referanse2",
  },
  {
    id: "gv",
    header: "Visuell resonnering (Gv)",
    description:
      "Defineres som evnen til å benytte seg av simulerte mentale bilder for å løse problemer - oppfatte, diskriminere, manipulere og gjenkalle ikke-språklige bilder for det 'indre øye'.",
    phrases: "test3",
    recommendations:
      "Spesielt nedsatt bl.a. hos barn med cerebral parese og turners syndrom. Jenter med turners syndrom har også vansker med å se sammenhenger, knytte sammen informasjon etc. Tilfredsstillende utredning av det brede domenet Visuell resonnering (Gv) omfatter alltid Visualisering (Vz), og i de fleste tilfeller er dette nok. Det er viktig med et mål som kan kontrastere finmotorikk. Tester med finmotorikk har bedre prediktiv verdi (fordi de representerer bredere), men tester uten finmotorikk gjør det mulig å isolere den visuelle fra den motoriske komponenten, f.eks. for barn med cerebral parese.",
    references: "",
  },
  {
    id: "gwm",
    header: "Arbeidsminnekapasitet (Gwm)",
    description:
      "Defineres som evnen til å opprettholde og manipulere informasjon som oppbevares i aktiv oppmerksomhet.",
    phrases: "",
    recommendations:
      "I CHC-modellen sitter arbeidshukommelsen i krysningen mellom oppmerksomhet, læring, språk og resonnering, og arbeidshukommelsen beskrives som et mentalt arbeidsrom (workspace) hvor sinnet kan kombinere og rekonfigurere konsepter og sanseinntrykk. For å forstå akademiske vansker er arbeidsminneprøver som krever simultan lagring og prosessering viktigst. Det anbefales tester for to typer verbal korttidshukommelse: De som minimerer potensialet for strategibruk, og tester med høy økologisk validitet. Visuospatialt korttidsminne er mindre relevant for de fleste kliniske og akademiske spørsmål.",
    references: "",
  },
  {
    id: "gs",
    header: "Prosesseringshastighet (Gs)",
    description:
      "Defineres som evnen til å kontrollere oppmerksomhet for å automatisk, raskt og med flyt utføre relativt enkle, repeterende kognitive oppgaver. Kan også beskrives som oppmerksomhetsflyt eller oppmerksomhetstempo.",
    phrases: "",
    recommendations:
      "Evnen er sekundær sammenlignet med Flytende resonnering (Gf) og Krystallisert intelligens (Gc) når det kommer til å predikere prestasjon i innlæringsfasen av en ferdighet, men blir en viktig prediktor for prestasjon når oppgaven er kjent.",
    references: "",
  },
];

const dataArray = [
  {
    id: "i",
    header: "Induksjon (I)",
    description:
      "Induksjonsresonnering er evnen til å observere et fenomen og oppdage de underliggende prinsippene eller reglene som styrer dets atferd.",
    tests: [
      "WPPSI-IV/WISC-V Matriser",
      "WPPSI-IV/WISC-V Likheter",
      "NEPSY-II Dyresortering",
      "Raven",
    ],
    phrases: "placeholder",
    recommendations:
      "Personer som har høy evne til induksjonsresonnering kan oppfatte regelmessigheter og mønstre i ting som for andre fremstår uforutsigbart eller tilfeldig. Evnen utvikles i Piagets konkretoperasjonelle stadium, mellom 7 og 11 år, og forutgår utviklingen av evnen til deduktiv resonnering (Gf-RG), som utvikles i formelt operasjonelt stadium (>12 år). De vil f.eks. forstå at A=B og at B=C, men streve med å forstå at det innbærer at A=C. Del av Induktiv/deduktiv resonnering (Gr-ID).",
    references: "placeholder",
  },
  {
    id: "rg",
    header: "Deduksjon (RG)",
    description:
      "Evnen til å resonnere logisk basert på kjente premisser og prinsipper.",
    tests: ["WISC-V Figurvekter"],
    phrases: "placeholder",
    recommendations:
      "Denne evnen kalles også deduktiv resonnering eller regelforståelse. Evnen utvikles senere enn Induksjonsresonnering (I), og etableres i Piagets konkretoperasjonelle stadium (>12 år). For eksempel: Hvis du vet at det ikke finnes isbjørner i Antarktis, og du ser et bilde av en isbjørn sammen med et isfjell, kan du bruke generell sekvensiell resonneringsevne, dvs. deduktiv resonnering, til å fastslå at bildet må være tatt i arktiske strøk. Del av Induktiv/deduktiv resonnering (Gr-ID).",
    references: "placeholder",
  },
  {
    id: "rq",
    header: "Mengderesonnering (RQ)",
    description:
      "Evnen til å resonnere ved bruk av mengder, matematiske relasjoner og operatorer. Tester som måler mengderesonnering forutsetter ikke avanserte matematiske kunnskaper, og utregningene som behøves er vanligvis enkle. Det som gjør dem vanskelige er kompleksiteten i resonneringen ikke utregningen. Del av Kontekstuell resonnering (Gr-CR).",
    tests: ["WISC-V Regning", "WISC-V Figurvekter?"],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "k0",
    header: "Allmennkunnskap (K0)",
    description:
      "er bredden og dybden i kunnskap som vurderes som essensiell, praktisk eller verdifull for alle i en kultur å kjenne til. Allmennkunnskap omfatter informasjon de fleste voksne vil ha vært eksponert for, men ikke nødvendigvis husker, som f.eks. hvor Tokyo er eller hva som er forskjellen på et demokrati og et monarki. I motsetning til Allmenkunnskap (K0) står Domenespesifikk kunnskap (Gkn), som er verdifull for personer i et spesielt yrke eller entusiaster med egne hobbier eller interesser. Dette er antakelig ikke separate nevrologiske systemer, men disse systemene skilles av i hvilken grad man kan anta at de fleste voksne har vært eksponert for kunnskapen. Eneste del av Allmennkunnskap (Gc-K).",
    tests: [
      "WPPSI-IV/WISC-V Informasjon",
      "WPPSI-IV/WISC-V Resonnering",
      "WPPSI-IV Bildekategorier",
      "NEPSY-II Benevning av kroppsdeler",
      "NEPSY-II Klokker",
      "Ordtak (1, 2)",
    ],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "ld",
    header: "Språkutvikling (LD)",
    description:
      "evnen til å  forstå språk og bruke det til å kommunisere. Det er den generelle forståelsen av talespråk på ord-, idiom- og setningsnivå. Språkutvikling (LD) er det generelle begrepet for hvordan mange snevre språkevner jobber systematisk sammen. Favner både impressive og ekspressive evner, men ikke skriftspråk. Faktoranalyser viser tydelig at det er en separat faktor. Alle normalutrustede mennesker lærer å snakke. Lesing og skriving er derimot noe som kun læres gjennom eksplisitt instruksjon, vanligvis i formell utdanning. Del av Språkevne (Gc-VA).",
    tests: [
      "WPPSI-IV/WISC-V Likheter",
      "WPPSI-IV/WISC-V Ordforståelse",
      "D-KEFS Tjue spm.",
      "Word Context",
    ],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "vl",
    header: "Leksikalsk kunnskap (VL)",
    description:
      "er ordforrådet vårt: Kunnskapen om ords definisjoner og konseptene som ligger til grunn for dem. Leksikalsk kunnskap er en nødvendig forutsetning for å lære å lese og skrive. Del av Språkevne (Gc-VA).",
    tests: [
      "WPPSI-IV/WISC-V Likheter",
      "WPPSI-IV/WISC-V Ordforståelse",
      "WPPSI-IV Bildebenevning",
      "WPPSI-IV Ordgjenkjenning",
      "CELF-IV Likheter Ekspressiv",
      "CELF-IV Likheter Impressiv",
      "CELF-IV Ekspressivt ordforråd",
    ],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "ls",
    header: "Lytteevne (LS)",
    description: "Del av Språkevne (Gc-VA)",
    tests: [
      "NEPSY-II Forståelse av instruksjoner",
      "NEPSY-II Mentalisering",
      "CELF-IV Forståelse av instruksjoner",
      "CELF-IV Narrativ forståelse",
    ],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "vz",
    header: "Visualisering (Vz)",
    description:
      "Evnen til å oppfatte komplekse mønstre og mentalt simulere hvordan de ville sett ut ved transformasjon (f.eks. rotert, bøyd, invertert, forminsket, delvis tildekket). På samme måte som Induksjonsresonnering (I) er sentralt for flytende resonnering (Gf) og Språkutvikling (LD) er sentralt for Krystallisert intelligens (Gc), er Visualisering (Vz) kjerneevnen i Visuelle evner (Gv). Det er denne faktoren som tilfører Gv prediktiv validitet i utfallsmål. Del av Rom- og retningssans (Gv-SP).",
    tests: [
      "WPPSI-IV/WISC-V Terningmønster",
      "WPPSI-IV Puslespill/WISC-V Visuelle Puslespill",
      "Beery VMI",
      "NEPSY-II Piler",
      "NEPSY-II Blokkonstruksjon",
      "NEPSY-II Figurkopiering",
      "D-KEFS Tårn",
    ],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "sr",
    header: "Hurtig rotering (SR)",
    description: "Del av Rom- og retningssans (Gv-SP).",
    tests: [],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "im",
    header: "Forestillingsevne (IM)",
    description: "Del av Rom- og retningssans (Gv-SP)?",
    tests: [],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "cf",
    header: "Flexibility of closure (CF)",
    description: "Del av Bildeprosessering (Gv-PP)",
    tests: [
      //Eller bare WPPSI-IV puslespill?
      "WPPSI-IV Puslespill/WISC-V Visuelle Puslespill",
      "NEPSY-II Geometriske puslespill",
      "NEPSY-II Bildepuslespill",
      "NEPSY-II Kartlesing",
    ],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "wa",
    header: "Auditivt korttidsminne (WA)",
    description:
      "Evnen til å kode inn og opprettholde verbal informasjon i primærminnet. Denne evnen måles vanligvis med minnespennprøver, f.eks. Tallhukommelse forlengs på WISC-V, bokstavspenn, ordspenn eller setningsspenn. Felles for prøvene er at de tester umiddelbar muntlig repetisjon av korte lister med informasjon. Del av Minnespenn (Gcm-MS).",
    tests: [
      "WISC-V Tallhukommelse forlengs",
      "Andre minnespennprøver som bokstav-, ord- eller setningsspenn",
    ],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "wv",
    header: "Visuospatialt korttidsminne (Wv)",
    description:
      "Evnen til å kode inn og opprettholde visuell informasjon i primærminnet. Del av Minnespenn (Gcm-MS). ",
    tests: ["WMS Visuelt minnespenn"],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "ac",
    header: "Oppmerksomhetskontroll (AC)",
    description:
      "Evnen til å manipulere oppmerksomhetsfokuset fleksibelt for å fokusere på oppgaverelevant stimuli og ignorere oppgaveirrelevant stimuli. Man kan måle oppmerksomhetskontroll uten hukommelsesbelastning, som f.eks. ved Stroop og andre testparadigmer. Mange tester for Prosesseringshastighet (Gs) krever også oppmerksomhetskontroll. Utviklingen av denne evnen er særlig sensitiv for variasjoner i sosioøkonomisk status. Del av Arbeidsminne (Gcm-WM).",
    tests: ["Stroop", "Mange tester for Prosesseringshastighet (Gs)"],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "wc",
    header: "Arbeidsminnekapasitet (Wc)",
    description:
      "Denne CHC-faktoren heter av en eller annen grunn det samme som den generelle evnen, men så er den heller ikke en snever evne i vanlig forstand. Schneider & McGrew (2018) beskriver den som Wc=Wv/Wa+AC. Bør måles med tester som belaster både Oppmerksomhetskontroll (Gwm-AC) og Auditivt korttidsminne (Gwm-Wa) eller Visuospatialt korttidsminne (Gwm-Wv). Flytende resonnering (Gf) er ikke synonymt med denne evnen, men hviler tungt på den. Del av Arbeidsminne (Gcm-WM).",
    tests: ["Wc=Wv/Wa+AC. Bør måles med tester som måler AC og Wa eller Wv."],
    phrases: "",
    recommendations: "",
    references: "",
  },
  {
    id: "p",
    header: "Persepsjonshastighet (P)",
    description:
      "Definert som tempoet og flyten hvorved likheter eller ulikheter i visuelle stimuli (f.eks. bokstaver, tall, mønstre etc.) kan søkes gjennom og sammenlignes i det utvidede synsfeltet",
    tests: [],
    phrases: "",
    recommendations: "",
    references: "",
  },
];

const puMode = {
  pri1domains: [
    "Induksjon (I)",
    "Allmennkunnskap (K0)",
    "Visualisering (Vz)",
    "Persepsjonshastighet (P)",
  ],
  pri2domains: [
    "Deduksjon (RG)",
    "Språkutvikling (LD)",
    "Leksikalsk kunnskap (VL)",
  ],
  tests: [
    "WPPSI-IV/WISC-V Matriser",
    "WPPSI-IV/WISC-V Likheter",
    "WISC-V Figurvekter",
    "WPPSI-IV/WICV-V Informasjon",
    "WPPSI-IV/WISC-V Resonnering",
    "WPPSI-IV/WISC-V Ordforståelse",
    "WPPSI-IV/WISC-V Terningmønster",
    "WPPSI-IV Puslespill/WISC-V Visuelle Puslespill",
    "Beery VMI",
  ],
};

/* 
- Enkelte snevre evner er mer sentrale for sine respektive brede faktorer enn andre.
- CHC-modellen er tungt inspirert av Baddeley’s modell.
*/
