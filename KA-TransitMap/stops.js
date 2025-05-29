const haltepunkte = [
  {
    name: "Wörth (Rhein) Alte Bahnmeisterei",
    lat: 49.04873645,
    lon: 8.2662164,
    type: "stadtbahn"
  },
  {
    name: "Maximiliansau Eisenbahnstraße",
    lat: 49.0373071,
    lon: 8.29789998,
    type: ["stadtbahn", "bahn"]
  },
  {
    name: "Maximiliansau West",
    lat: 49.03886178,
    lon: 8.29202499,
    type: ["stadtbahn", "bahn"]
  },
  {
    name: "Wörth (Rhein)",
    lat: 49.04563942,
    lon: 8.27316037,
    type: ["bahn", "stadtbahn"]
  },
  {
    name: "Wörth Bahnhof",
    lat: 49.04614579,
    lon: 8.27268427,
    type: "bus"
  },
  {
    name: "Wörth (Rhein) Bienwaldhalle",
    lat: 49.04994342,
    lon: 8.26036836,
    type: "stadtbahn"
  },
  {
    name: "Wörth (Rhein) Bürgerpark",
    lat: 49.05087953,
    lon: 8.25412507,
    type: "stadtbahn"
  },
  {
    name: "Wörth (Rhein) Rathaus",
    lat: 49.05234549,
    lon: 8.24980418,
    type: "stadtbahn"
  },
  {
    name: "Wörth (Rhein) Badepark",
    lat: 49.05848554,
    lon: 8.24411784,
    type: "stadtbahn"
  },
  {
    name: "Wörth (Rhein) Badallee",
    lat: 49.05597781,
    lon: 8.24992096,
    type: "stadtbahn"
  },
  {
    name: "Wörth (Rhein) Zügelstraße",
    lat: 49.05315793,
    lon: 8.26212008,
    type: ["bahn", "stadtbahn"]
  },
  {
    name: "Rheinzabern Alte Römerstraße",
    lat: 49.10990741,
    lon: 8.27307054,
    type: "bus"
  },
  {
    name: "Rheinzabern Alte Römerstr. (Ersatz)",
    lat: 49.10859017,
    lon: 8.27395987,
    type: "bus"
  },
  {
    name: "Rheinzabern Rappengasse",
    lat: 49.11487027,
    lon: 8.27334902,
    type: "bus"
  },
  {
    name: "Rheinzabern Rappengasse (Ersatzhalt)",
    lat: 49.11451748,
    lon: 8.27199256,
    type: "bus"
  },
  {
    name: "Rülzheim Freizeitzentrum",
    lat: 49.15268696,
    lon: 8.27955638,
    type: "bus"
  },
  {
    name: "Rülzheim Freizeitzentrum (Ersatzhalt)",
    lat: 49.15141198,
    lon: 8.27907129,
    type: "bus"
  },
  {
    name: "Bellheim Am Mühlbuckel",
    lat: 49.19214798,
    lon: 8.29654352,
    type: "bus"
  },
  {
    name: "Bellheim Am Mühlbuckel (Ersatzhalt)",
    lat: 49.19299335,
    lon: 8.29760353,
    type: "bus"
  },
  {
    name: "Germersheim Süd/Nolte",
    lat: 49.20842478,
    lon: 8.37429271,
    type: "bus"
  },
  {
    name: "Germersheim Mitte/Rhein",
    lat: 49.22094129,
    lon: 8.378937,
    type: "bus"
  },
  {
    name: "Germersheim Mitte",
    lat: 49.21987344,
    lon: 8.37687986,
    type: "bus"
  },
  {
    name: "Wörth Ottstraße",
    lat: 49.05198636,
    lon: 8.26824659,
    type: "bus"
  },
  {
    name: "Wörth Wasserturm",
    lat: 49.04856571,
    lon: 8.25756562,
    type: "bus"
  },
  {
    name: "Wörth Silcherstraße",
    lat: 49.05611909,
    lon: 8.24535752,
    type: "bus"
  },
  {
    name: "Wörth Richard-Wagner-Str.",
    lat: 49.05325801,
    lon: 8.24165646,
    type: "bus"
  },
  {
    name: "Wörth Dorschbergstraße",
    lat: 49.05021425,
    lon: 8.25156487,
    type: "bus"
  },
  {
    name: "Wörth Berufsschule",
    lat: 49.05135053,
    lon: 8.24737872,
    type: "bus"
  },
  {
    name: "Rülzheim Bf.",
    lat: 49.16106456,
    lon: 8.29097397,
    type: "bus"
  },
  {
    name: "Rülzheim Bahnhof",
    lat: 49.16082958,
    lon: 8.29057871,
    type: "bus"
  },
  {
    name: "Sondernheim Scherer",
    lat: 49.19787159,
    lon: 8.36000949,
    type: "bus"
  },
  {
    name: "Germersheim Wasserturm",
    lat: 49.21229802,
    lon: 8.3657677,
    type: "bus"
  },
  {
    name: "Germersheim Bahnhof",
    lat: 49.22502476,
    lon: 8.36510294,
    type: "bus"
  },
  {
    name: "Germersheim",
    lat: 49.22569357,
    lon: 8.3649143,
    type: "bus"
  },
  {
    name: "Bellheim Bf.",
    lat: 49.18796199,
    lon: 8.29444146,
    type: "bus"
  },
  {
    name: "Bellheim Bahnhof",
    lat: 49.18937693,
    lon: 8.29430672,
    type: "bus"
  },
  {
    name: "Sondernheim",
    lat: 49.19553526,
    lon: 8.36036882,
    type: "bus"
  },
  {
    name: "Rheinzabern Bf.",
    lat: 49.1203265,
    lon: 8.274427,
    type: "bus"
  },
  {
    name: "Rheinzabern",
    lat: 49.11913888,
    lon: 8.27422039,
    type: "bus"
  },
  {
    name: "Jockgrim Bf.",
    lat: 49.09318644,
    lon: 8.27235189,
    type: ["bahn", "stadtbahn"]
  },
  {
    name: "Jockgrim Bahnhof (Ersatzhalt)",
    lat: 49.09233936,
    lon: 8.2727741,
    type: "bus"
  },
  {
    name: "Bondorf (b. Herrenberg)",
    lat: 48.52347798,
    lon: 8.82789701,
    type: "bus"
  },
  {
    name: "Bondorf Bahnhof",
    lat: 48.52346013,
    lon: 8.82823837,
    type: "bus"
  },
  {
    name: "Herrenberg ZOB",
    lat: 48.59400368,
    lon: 8.86443149,
    type: "bus"
  },
  {
    name: "Nebringen Postamt",
    lat: 48.56225491,
    lon: 8.84806419,
    type: "bus"
  },
  {
    name: "Heilbronn Hbf/Busbahnhof",
    lat: 49.14184568,
    lon: 9.20696809,
    type: "bus"
  },
  {
    name: "Heilbronn Hbf Busbahnhof",
    lat: 49.14168701,
    lon: 9.20598893,
    type: "bus"
  },
  {
    name: "Heilbronn Hbf/Willy-Brandt-Platz",
    lat: 49.14258613,
    lon: 9.20827065,
    type: "bus"
  },
  {
    name: "Heilbronn Harmonie",
    lat: 49.14162236,
    lon: 9.22305692,
    type: "bus"
  },
  {
    name: "Heilbronn Neckar-Turm",
    lat: 49.14271542,
    lon: 9.2134719,
    type: "bus"
  },
  {
    name: "Heilbronn Pfühlpark",
    lat: 49.13988871,
    lon: 9.24166103,
    type: "bus"
  },
  {
    name: "Heilbronn Pfühlpark (Ersatzhalt)",
    lat: 49.13981231,
    lon: 9.24164306,
    type: "bus"
  },
  {
    name: "Böckingen Berufsschulzentrum",
    lat: 49.14032947,
    lon: 9.1808361,
    type: "bus"
  },
  {
    name: "Böckingen West",
    lat: 49.1393539,
    lon: 9.16480117,
    type: "bus"
  },
  {
    name: "Böckingen West (Ersatzhalt)",
    lat: 49.14004738,
    lon: 9.16453168,
    type: "bus"
  },
  {
    name: "Heilbronn Harmonie/Kunsthalle",
    lat: 49.14283883,
    lon: 9.22273353,
    type: "bus"
  },
  {
    name: "HN Harmonie/Hafenmarktpass.",
    lat: 49.14218065,
    lon: 9.22225742,
    type: "bus"
  },
  {
    name: "Heilbronn Hbf",
    lat: 49.14296811,
    lon: 9.20740827,
    type: "bus"
  },
  {
    name: "Heilbronn Friedensplatz",
    lat: 49.14125801,
    lon: 9.22937208,
    type: "bus"
  },
  {
    name: "Heilbronn Finanzamt",
    lat: 49.1404235,
    lon: 9.23507638,
    type: "bus"
  },
  {
    name: "Heilbronn Techn. Schulzentrum",
    lat: 49.14916748,
    lon: 9.22161962,
    type: "bus"
  },
  {
    name: "Heilbronn Theater",
    lat: 49.1463235,
    lon: 9.22189809,
    type: "bus"
  },
  {
    name: "Heilbronn Industrieplatz",
    lat: 49.15510169,
    lon: 9.21782873,
    type: "bus"
  },
  {
    name: "Heilbronn Hans-Rießer-Straße",
    lat: 49.16267999,
    lon: 9.21966129,
    type: "bus"
  },
  {
    name: "Heilbronn Kaufland",
    lat: 49.17038635,
    lon: 9.22454812,
    type: "bus"
  },
  {
    name: "Heilbronn Rathaus",
    lat: 49.14203373,
    lon: 9.21835873,
    type: "bus"
  },
  {
    name: "Böckingen Sandhof",
    lat: 49.14067033,
    lon: 9.18213866,
    type: "bus"
  },
  {
    name: "Heilbronn Sülmertor",
    lat: 49.15137085,
    lon: 9.22047876,
    type: "bus"
  },
  {
    name: "Böckingen Sonnenbrunnen (Ersatz)",
    lat: 49.14106995,
    lon: 9.19162487,
    type: "bus"
  },
  {
    name: "Böckingen Sonnenbrunnen",
    lat: 49.14031184,
    lon: 9.19295438,
    type: "bus"
  },
  {
    name: "Heilbronn Trappensee",
    lat: 49.140829,
    lon: 9.25395897,
    type: "bus"
  },
  {
    name: "Heilbronn Pfühlpark West",
    lat: 49.14107583,
    lon: 9.24481412,
    type: "bus"
  },
  {
    name: "Weinsberg Weidachstraße",
    lat: 49.15333912,
    lon: 9.27413513,
    type: "bus"
  },
  {
    name: "Eschenau (b. Heilbronn)",
    lat: 49.14416103,
    lon: 9.40405847,
    type: "bus"
  },
  {
    name: "Eppingen West",
    lat: 49.13240096,
    lon: 8.90462212,
    type: "bus"
  },
  {
    name: "Bad Friedrichshall-Kochendorf",
    lat: 49.21835375,
    lon: 9.21158543,
    type: "bus"
  },
  {
    name: "Wieslensdorf",
    lat: 49.1497433,
    lon: 9.42214155,
    type: "bus"
  },
  {
    name: "Wieslensdorf (Ersatzhalt)",
    lat: 49.14494847,
    lon: 9.42838485,
    type: "bus"
  },
  {
    name: "Weinsberg/Ellhofen Gewerbegeb.",
    lat: 49.14879142,
    lon: 9.3060343,
    type: "bus"
  },
  {
    name: "Weinsberg/Ellhofen Gewerbegebiet",
    lat: 49.14847412,
    lon: 9.30738178,
    type: "bus"
  },
  {
    name: "Neckarsulm",
    lat: 49.18887789,
    lon: 9.21886179,
    type: "bus"
  },
  {
    name: "Bad Rappenau Kurpark",
    lat: 49.24038754,
    lon: 9.11358822,
    type: "bus"
  },
  {
    name: "Stetten am Heuchelberg",
    lat: 49.13699131,
    lon: 9.01524965,
    type: "bus"
  },
  {
    name: "Schwaigern West",
    lat: 49.13904242,
    lon: 9.04197453,
    type: "bus"
  },
  {
    name: "Schwaigern West (Ersatzhalt)",
    lat: 49.13867805,
    lon: 9.04892749,
    type: "bus"
  },
  {
    name: "Schwaigern Heilbronner Str. (Ersatz)",
    lat: 49.13881322,
    lon: 9.0667321,
    type: "bus"
  },
  {
    name: "Leingarten Allmandstraße (Ersatzhalt)",
    lat: 49.14344998,
    lon: 9.13021604,
    type: "bus"
  },
  {
    name: "Weinsberg West",
    lat: 49.15126509,
    lon: 9.27459327,
    type: "bus"
  },
  {
    name: "Bad Wimpfen",
    lat: 49.22955373,
    lon: 9.16790036,
    type: "bus"
  },
  {
    name: "Ellhofen",
    lat: 49.1499137,
    lon: 9.31557441,
    type: "bus"
  },
  {
    name: "Sülzbach",
    lat: 49.14824496,
    lon: 9.34131114,
    type: "bus"
  },
  {
    name: "Sülzbach (Ersatzhalt)",
    lat: 49.14695812,
    lon: 9.34040385,
    type: "bus"
  },
  {
    name: "Sülzbach Schule",
    lat: 49.14468991,
    lon: 9.35190228,
    type: "bus"
  },
  {
    name: "Sülzbach M.-Beheim-Schule",
    lat: 49.14331482,
    lon: 9.35197415,
    type: "bus"
  },
  {
    name: "Willsbach",
    lat: 49.14286233,
    lon: 9.35731014,
    type: "bus"
  },
  {
    name: "Willsbach Bahnhof",
    lat: 49.14225704,
    lon: 9.35811862,
    type: "bus"
  },
  {
    name: "Affaltrach (Ersatzhalt)",
    lat: 49.13615085,
    lon: 9.38134007,
    type: "bus"
  },
  {
    name: "Affaltrach",
    lat: 49.13793166,
    lon: 9.37948056,
    type: "bus"
  },
  {
    name: "Neckarsulm Süd",
    lat: 49.18039342,
    lon: 9.22062249,
    type: "bus"
  },
  {
    name: "Neckarsulm Mitte",
    lat: 49.19346887,
    lon: 9.22301201,
    type: "bus"
  },
  {
    name: "Neckarsulm Nord",
    lat: 49.20215066,
    lon: 9.22875224,
    type: "bus"
  },
  {
    name: "Elsenz Freudenhälde",
    lat: 49.17157274,
    lon: 8.84305159,
    type: "bus"
  },
  {
    name: "Gemmingen Bahnhof",
    lat: 49.15154124,
    lon: 8.98467998,
    type: "bus"
  },
  {
    name: "Gemmingen",
    lat: 49.15166463,
    lon: 8.98353912,
    type: "bus"
  },
  {
    name: "Weinsberg",
    lat: 49.14848588,
    lon: 9.28552577,
    type: "bus"
  },
  {
    name: "Weinsberg Bahnhof",
    lat: 49.14797467,
    lon: 9.28791528,
    type: "bus"
  },
  {
    name: "Schwaigern Ost",
    lat: 49.14052928,
    lon: 9.0691306,
    type: "bus"
  },
  {
    name: "Leingarten Kirche",
    lat: 49.14838011,
    lon: 9.10255691,
    type: "bus"
  },
  {
    name: "Gemmingen West",
    lat: 49.15475505,
    lon: 8.9769904,
    type: "bus"
  },
  {
    name: "Gemmingen West (Ersatzhalt)",
    lat: 49.15302186,
    lon: 8.97883194,
    type: "bus"
  },
  {
    name: "Offenau (Ersatzhalt)",
    lat: 49.24617594,
    lon: 9.16509762,
    type: "bus"
  },
  {
    name: "Offenau",
    lat: 49.24755403,
    lon: 9.16500779,
    type: "bus"
  },
  {
    name: "Gundelsheim (Neckar)",
    lat: 49.28284934,
    lon: 9.1583872,
    type: "bus"
  },
  {
    name: "Gundelsheim-Böttingen",
    lat: 49.29046081,
    lon: 9.14550536,
    type: "bus"
  },
  {
    name: "Bad Wimpfen Im Tal",
    lat: 49.22977665,
    lon: 9.18694465,
    type: "bus"
  },
  {
    name: "Bad Rappenau",
    lat: 49.23748429,
    lon: 9.10093994,
    type: "bus"
  },
  {
    name: "Neckarsulm AUDI Tor 6",
    lat: 49.20216827,
    lon: 9.22701849,
    type: "bus"
  },
  {
    name: "Bad Friedrichshall Hbf",
    lat: 49.23225214,
    lon: 9.19990734,
    type: "bus"
  },
  {
    name: "Eppingen",
    lat: 49.1360862,
    lon: 8.91446765,
    type: "bus"
  },
  {
    name: "Eppingen Bahnhof",
    lat: 49.13599216,
    lon: 8.91365917,
    type: "bus"
  },
  {
    name: "Eschenau Schloss",
    lat: 49.13713824,
    lon: 9.40445373,
    type: "bus"
  },
  {
    name: "Bad Wimpfen-Hohenstadt",
    lat: 49.24277453,
    lon: 9.1392441,
    type: "bus"
  },
  {
    name: "Neckarsulm AUDI Forum",
    lat: 49.19281137,
    lon: 9.22131419,
    type: "bus"
  },
  {
    name: "Babstadt",
    lat: 49.2403934,
    lon: 9.06037202,
    type: "bus"
  },
  {
    name: "Elsenz Rathaus",
    lat: 49.17530792,
    lon: 8.83549676,
    type: "bus"
  },
  {
    name: "Elsenz Siedlung",
    lat: 49.18230182,
    lon: 8.83500268,
    type: "bus"
  },
  {
    name: "Schwaigern Bahnhof",
    lat: 49.13868392,
    lon: 9.05755131,
    type: "bus"
  },
  {
    name: "Schwaigern (Württ.)",
    lat: 49.13836069,
    lon: 9.05597926,
    type: "bus"
  },
  {
    name: "Stetten Kirche",
    lat: 49.12997925,
    lon: 9.00901534,
    type: "bus"
  },
  {
    name: "Leingarten",
    lat: 49.14501898,
    lon: 9.12240968,
    type: "bus"
  },
  {
    name: "Leingarten Bahnhof",
    lat: 49.14492496,
    lon: 9.12078373,
    type: "bus"
  },
  {
    name: "Leingarten Mitte",
    lat: 49.14588279,
    lon: 9.11144125,
    type: "bus"
  },
  {
    name: "Leingarten West",
    lat: 49.14595918,
    lon: 9.10551237,
    type: "bus"
  },
  {
    name: "Leingarten Kiesberg",
    lat: 49.14823909,
    lon: 9.11028242,
    type: "bus"
  },
  {
    name: "Leingarten Ost",
    lat: 49.14466053,
    lon: 9.12957823,
    type: "bus"
  },
  {
    name: "Kochendorf Bergstraße",
    lat: 49.21970915,
    lon: 9.21518768,
    type: "bus"
  },
  {
    name: "Grombach",
    lat: 49.22585784,
    lon: 8.99557654,
    type: "bus"
  },
  {
    name: "Ellhofen Bahnhofstraße",
    lat: 49.14981969,
    lon: 9.31794596,
    type: "bus"
  },
  {
    name: "Bretzfeld Bahnhof",
    lat: 49.17264751,
    lon: 9.44014379,
    type: "bus"
  },
  {
    name: "Bretzfeld",
    lat: 49.17235973,
    lon: 9.44020667,
    type: "bus"
  },
  {
    name: "Bitzfeld Schumm",
    lat: 49.18977616,
    lon: 9.44482402,
    type: "bus"
  },
  {
    name: "Scheppach Mitte",
    lat: 49.16326741,
    lon: 9.43970362,
    type: "bus"
  },
  {
    name: "Öhringen Hbf",
    lat: 49.20284912,
    lon: 9.50320553,
    type: "bus"
  },
  {
    name: "Scheppach",
    lat: 49.16202207,
    lon: 9.43447542,
    type: "bus"
  },
  {
    name: "Bitzfeld",
    lat: 49.18747467,
    lon: 9.45361852,
    type: "bus"
  },
  {
    name: "Öhringen Cappel S-Bahn",
    lat: 49.20208609,
    lon: 9.52508849,
    type: "bus"
  },
  {
    name: "Öhringen-Cappel",
    lat: 49.20200979,
    lon: 9.52728936,
    type: "bus"
  },
  {
    name: "Öhringen West",
    lat: 49.20036629,
    lon: 9.48622737,
    type: "bus"
  },
  {
    name: "Öhringen Westbahnhof",
    lat: 49.20038977,
    lon: 9.48520329,
    type: "bus"
  },
  {
    name: "Baden-Baden Bahnhof",
    lat: 48.789659,
    lon: 8.19082978,
    type: "bus"
  },
  {
    name: "Baden-Baden",
    lat: 48.79010879,
    lon: 8.19088368,
    type: "bus"
  },
  {
    name: "Steinbach Alte Ziegelei",
    lat: 48.7321295,
    lon: 8.16709629,
    type: "bus"
  },
  {
    name: "Baden-Baden Wörthstraße",
    lat: 48.78370481,
    lon: 8.20294805,
    type: "bus"
  },
  {
    name: "Ebersteinburg Wolfsschlucht",
    lat: 48.77439923,
    lon: 8.27665482,
    type: "bus"
  },
  {
    name: "Baden-Baden Wilhelm-Drapp-Str",
    lat: 48.79564208,
    lon: 8.19803427,
    type: "bus"
  },
  {
    name: "Baden-Baden Werderstraße",
    lat: 48.75901639,
    lon: 8.23084972,
    type: "bus"
  },
  {
    name: "Baden-Baden Waldseestr./Verfassungsplatz",
    lat: 48.76994118,
    lon: 8.22934954,
    type: "bus"
  },
  {
    name: "Ebersteinburg Waldkapelle",
    lat: 48.77640612,
    lon: 8.28705731,
    type: "bus"
  },
  {
    name: "Baden-Baden Waldcafé",
    lat: 48.76236217,
    lon: 8.26046718,
    type: "bus"
  },
  {
    name: "Baden-Baden Voglergasse",
    lat: 48.74705856,
    lon: 8.24447717,
    type: "bus"
  },
  {
    name: "Varnhalt Kirche",
    lat: 48.73533489,
    lon: 8.17925948,
    type: "bus"
  },
  {
    name: "Baden-Baden U.Prinz-Weimar-Str",
    lat: 48.76370042,
    lon: 8.25058571,
    type: "bus"
  },
  {
    name: "Steinbach Umweger Str.",
    lat: 48.72864542,
    lon: 8.17659148,
    type: "bus"
  },
  {
    name: "Steinbach Satzweg (Ersatzhalt)",
    lat: 48.72670774,
    lon: 8.17565723,
    type: "bus"
  },
  {
    name: "Baden-Baden Tiergarten / cts-Klinik",
    lat: 48.74903693,
    lon: 8.21832721,
    type: "bus"
  },
  {
    name: "Lichtental Steinackergasse",
    lat: 48.74215379,
    lon: 8.26801303,
    type: "bus"
  },
  {
    name: "Balg Klinikum Mittelbaden",
    lat: 48.78642749,
    lon: 8.21818348,
    type: "bus"
  },
  {
    name: "Baden-Baden Hauptfriedhof",
    lat: 48.75868476,
    lon: 8.25060368,
    type: "bus"
  },
  {
    name: "Baden-Baden Stadelhoferstraße",
    lat: 48.75323624,
    lon: 8.23031972,
    type: "bus"
  },
  {
    name: "Baden-Baden Solmsstraße",
    lat: 48.76014154,
    lon: 8.2345418,
    type: "bus"
  },
  {
    name: "Baden-Baden Sinzheimer Str.",
    lat: 48.78710222,
    lon: 8.19440507,
    type: "bus"
  },
  {
    name: "Baden-Baden Schirmhofweg",
    lat: 48.75030446,
    lon: 8.22172284,
    type: "bus"
  },
  {
    name: "Lichtental Sauersbosch",
    lat: 48.73986118,
    lon: 8.27644821,
    type: "bus"
  },
  {
    name: "Sandweier Südring",
    lat: 48.80505021,
    lon: 8.18827856,
    type: "bus"
  },
  {
    name: "Sandweier Nord",
    lat: 48.81345687,
    lon: 8.19551,
    type: "bus"
  },
  {
    name: "Sandweier Mühlstraße",
    lat: 48.81229742,
    lon: 8.19845647,
    type: "bus"
  },
  {
    name: "Sandweier Mitte",
    lat: 48.80810896,
    lon: 8.19544712,
    type: "bus"
  },
  {
    name: "Sandweier Autobahnkirche",
    lat: 48.80930401,
    lon: 8.1748757,
    type: "bus"
  },
  {
    name: "Baden-Baden Rheumazentrum",
    lat: 48.76339843,
    lon: 8.24711821,
    type: "bus"
  },
  {
    name: "Baden-Baden Quettigstaffeln",
    lat: 48.75276835,
    lon: 8.23549401,
    type: "bus"
  },
  {
    name: "Baden-Baden Obere Schußbach",
    lat: 48.78703712,
    lon: 8.21460818,
    type: "bus"
  },
  {
    name: "Baden-Baden Ob.Prinz-Weimar-S",
    lat: 48.76070411,
    lon: 8.24979519,
    type: "bus"
  },
  {
    name: "Baden-Baden Obere Breite",
    lat: 48.781201,
    lon: 8.18853009,
    type: "bus"
  },
  {
    name: "Baden-Baden Kaiser-Wilhelm-S.",
    lat: 48.75581844,
    lon: 8.23232296,
    type: "bus"
  },
  {
    name: "Oberbeuern",
    lat: 48.73777582,
    lon: 8.2857817,
    type: "bus"
  },
  {
    name: "Baden-Baden Neues Schloss",
    lat: 48.76479587,
    lon: 8.24133306,
    type: "bus"
  },
  {
    name: "BAD Moltkestr./Rosengarten",
    lat: 48.75771354,
    lon: 8.23030175,
    type: "bus"
  },
  {
    name: "Baden-Baden Merkurwald",
    lat: 48.76285366,
    lon: 8.26454553,
    type: "bus"
  },
  {
    name: "Baden-Baden Maximilianstraße",
    lat: 48.75192732,
    lon: 8.24873518,
    type: "bus"
  },
  {
    name: "BAD Maximilianstr./Falkenstr.",
    lat: 48.75177333,
    lon: 8.2487262,
    type: "bus"
  },
  {
    name: "Baden-Baden Marktplatz/Rath.",
    lat: 48.7629484,
    lon: 8.24056051,
    type: "bus"
  },
  {
    name: "Baden-Baden Markgrafenplatz",
    lat: 48.7589394,
    lon: 8.24704635,
    type: "bus"
  },
  {
    name: "Baden-Baden Mariahalden",
    lat: 48.749262,
    lon: 8.23377823,
    type: "bus"
  },
  {
    name: "Malschbach",
    lat: 48.72238768,
    lon: 8.24228528,
    type: "bus"
  },
  {
    name: "BAD Lilienmattstr./Kl. Annaberg",
    lat: 48.7650268,
    lon: 8.2527776,
    type: "bus"
  },
  {
    name: "BAD Lichtentaler All./Museen",
    lat: 48.75474056,
    lon: 8.23868303,
    type: "bus"
  },
  {
    name: "Lichtental",
    lat: 48.74259216,
    lon: 8.26408739,
    type: "bus"
  },
  {
    name: "Lichtental Lerchenbergweg",
    lat: 48.7391325,
    lon: 8.28125419,
    type: "bus"
  },
  {
    name: "Baden-Baden Leopoldstraße",
    lat: 48.76587945,
    lon: 8.24339919,
    type: "bus"
  },
  {
    name: "Baden-Baden Kurfürstenstraße",
    lat: 48.76158052,
    lon: 8.24810636,
    type: "bus"
  },
  {
    name: "Baden-Baden Kuppenheimer Str.",
    lat: 48.79194934,
    lon: 8.19452185,
    type: "bus"
  },
  {
    name: "Baden-Baden Kronprinzenstr.",
    lat: 48.75890979,
    lon: 8.23583537,
    type: "bus"
  },
  {
    name: "Lichtental Klosterplatz",
    lat: 48.74635368,
    lon: 8.25598459,
    type: "bus"
  },
  {
    name: "BAD Klostergut Fremersberg",
    lat: 48.74449369,
    lon: 8.19742341,
    type: "bus"
  },
  {
    name: "Baden-Baden Klinik Dr. Dengler",
    lat: 48.76374187,
    lon: 8.23509875,
    type: "bus"
  },
  {
    name: "Baden-Baden Kettenbrücke",
    lat: 48.75039922,
    lon: 8.24473768,
    type: "bus"
  },
  {
    name: "Lichtental Höllhäuserweg",
    lat: 48.73916212,
    lon: 8.25788901,
    type: "bus"
  },
  {
    name: "Baden-Baden Hubertusstraße",
    lat: 48.78048476,
    lon: 8.20376552,
    type: "bus"
  },
  {
    name: "Baden-Baden Otto-Flake-Str.",
    lat: 48.76615182,
    lon: 8.23082277,
    type: "bus"
  },
  {
    name: "Steinbach Hohlgasse",
    lat: 48.73042304,
    lon: 8.17115667,
    type: "bus"
  },
  {
    name: "Baden-Baden Hochstraße",
    lat: 48.76443467,
    lon: 8.23191872,
    type: "bus"
  },
  {
    name: "Baden-Baden Charles-de-Gaulle-Platz",
    lat: 48.78507801,
    lon: 8.19224912,
    type: "bus"
  },
  {
    name: "Geroldsau Heschmattweg",
    lat: 48.72958757,
    lon: 8.25385558,
    type: "bus"
  },
  {
    name: "Baden-Baden Herrengut",
    lat: 48.76679129,
    lon: 8.24237511,
    type: "bus"
  },
  {
    name: "Baden-Baden Robert-Koch-Straße",
    lat: 48.75297564,
    lon: 8.24395614,
    type: "bus"
  },
  {
    name: "Baden-Baden Herchenbachstraße",
    lat: 48.74974177,
    lon: 8.23766794,
    type: "bus"
  },
  {
    name: "Haueneberstein Siemensstraße",
    lat: 48.81096046,
    lon: 8.2180667,
    type: "bus"
  },
  {
    name: "Haueneberstein Industriegebiet",
    lat: 48.81207854,
    lon: 8.21114069,
    type: "bus"
  },
  {
    name: "Baden-Baden Hans-Thoma-Str.",
    lat: 48.748954,
    lon: 8.24080306,
    type: "bus"
  },
  {
    name: "Baden-Baden H.-Bredow-Str/SWR",
    lat: 48.75226492,
    lon: 8.22560356,
    type: "bus"
  },
  {
    name: "Baden-Baden Große Dollenstr.",
    lat: 48.77390194,
    lon: 8.22179471,
    type: "bus"
  },
  {
    name: "Baden-Baden Golfplatz",
    lat: 48.74692233,
    lon: 8.21167069,
    type: "bus"
  },
  {
    name: "Balg Gaßeck",
    lat: 48.7897537,
    lon: 8.22750799,
    type: "bus"
  },
  {
    name: "Baden-Baden Gausplatz",
    lat: 48.75482348,
    lon: 8.24224036,
    type: "bus"
  },
  {
    name: "Varnhalt Gallenbach",
    lat: 48.74034696,
    lon: 8.18037339,
    type: "bus"
  },
  {
    name: "Baden-Baden Friedrichshöhe",
    lat: 48.76118377,
    lon: 8.25302913,
    type: "bus"
  },
  {
    name: "Baden-Baden Falkenstraße",
    lat: 48.75304079,
    lon: 8.24651634,
    type: "bus"
  },
  {
    name: "Baden-Baden Entenstallhütte",
    lat: 48.74634776,
    lon: 8.20674792,
    type: "bus"
  },
  {
    name: "Baden-Baden Engel/Höhenblick",
    lat: 48.76730642,
    lon: 8.23841354,
    type: "bus"
  },
  {
    name: "Lichtental Eckerlestraße",
    lat: 48.74891254,
    lon: 8.25369388,
    type: "bus"
  },
  {
    name: "Baden-Baden Ebertplatz",
    lat: 48.77213177,
    lon: 8.22552271,
    type: "bus"
  },
  {
    name: "Ebersteinburg Klinik",
    lat: 48.77473668,
    lon: 8.27334004,
    type: "bus"
  },
  {
    name: "Ebersteinburg Kapelle",
    lat: 48.77792751,
    lon: 8.271229,
    type: "bus"
  },
  {
    name: "Baden-Baden Dreieichenkapelle",
    lat: 48.77805182,
    lon: 8.21778822,
    type: "bus"
  },
  {
    name: "Baden-Baden Bäderviertel",
    lat: 48.76237994,
    lon: 8.24242002,
    type: "bus"
  },
  {
    name: "Neuweier Buchgasse",
    lat: 48.72554627,
    lon: 8.17329466,
    type: "bus"
  },
  {
    name: "Baden-Baden Oskar-Schlemmer-Platz",
    lat: 48.7537752,
    lon: 8.23413756,
    type: "bus"
  },
  {
    name: "Baden-Baden Birkenbuckel",
    lat: 48.75168449,
    lon: 8.23594317,
    type: "bus"
  },
  {
    name: "Lichtental Bildeiche",
    lat: 48.74159101,
    lon: 8.27113916,
    type: "bus"
  },
  {
    name: "Baden-Baden Bertholdplatz",
    lat: 48.75522028,
    lon: 8.24359682,
    type: "bus"
  },
  {
    name: "Balg Baumackerstraße",
    lat: 48.78750469,
    lon: 8.22176776,
    type: "bus"
  },
  {
    name: "Baden-Baden Bauernfeldstraße",
    lat: 48.78157392,
    lon: 8.19986683,
    type: "bus"
  },
  {
    name: "Balg Kirche",
    lat: 48.78864696,
    lon: 8.22572933,
    type: "bus"
  },
  {
    name: "Balg Friedhof",
    lat: 48.79052899,
    lon: 8.23093955,
    type: "bus"
  },
  {
    name: "Lichtental Aubrücke",
    lat: 48.75023338,
    lon: 8.25140318,
    type: "bus"
  },
  {
    name: "Varnhalt Am Kirchberg",
    lat: 48.73749737,
    lon: 8.17787607,
    type: "bus"
  },
  {
    name: "Geroldsau Geroldsauer Mühle",
    lat: 48.73501495,
    lon: 8.25546356,
    type: "bus"
  },
  {
    name: "BAD Hindenburgplatz/Stadtbib.",
    lat: 48.76421558,
    lon: 8.23703013,
    type: "bus"
  },
  {
    name: "BAD Hindenburgplatz (Kaiserallee)",
    lat: 48.76393728,
    lon: 8.23631148,
    type: "bus"
  },
  {
    name: "Steinbach Vimbucher Str.",
    lat: 48.73102742,
    lon: 8.15105238,
    type: "bus"
  },
  {
    name: "Steinbach Schule",
    lat: 48.73004975,
    lon: 8.16318862,
    type: "bus"
  },
  {
    name: "Steinbach Steinbacher Str./Postplatz",
    lat: 48.72785732,
    lon: 8.15900247,
    type: "bus"
  },
  {
    name: "Steinbach Yburgstraße/Postplatz",
    lat: 48.7281773,
    lon: 8.15992773,
    type: "bus"
  },
  {
    name: "Steinbach Alte Landstr.",
    lat: 48.73281681,
    lon: 8.16493135,
    type: "bus"
  },
  {
    name: "Neuweier Winzergenossenschaft",
    lat: 48.72369736,
    lon: 8.17816353,
    type: "bus"
  },
  {
    name: "Neuweier Schneckenbach",
    lat: 48.71751013,
    lon: 8.18072373,
    type: "bus"
  },
  {
    name: "Steinbach Poststraße/Postplatz",
    lat: 48.72883503,
    lon: 8.15796042,
    type: "bus"
  },
  {
    name: "Neuweier Kirche",
    lat: 48.72149281,
    lon: 8.18599684,
    type: "bus"
  },
  {
    name: "Steinbach Grabenstraße/Postplatz",
    lat: 48.72868097,
    lon: 8.15957739,
    type: "bus"
  },
  {
    name: "Steinbach Yburgstr./Häfnergasse",
    lat: 48.72810619,
    lon: 8.16308082,
    type: "bus"
  },
  {
    name: "Lichtental Brahmsplatz",
    lat: 48.74432783,
    lon: 8.25943412,
    type: "bus"
  },
  {
    name: "Haueneberstein Waldstraße",
    lat: 48.80822728,
    lon: 8.22463338,
    type: "bus"
  },
  {
    name: "Haueneberstein Bahnhofstraße",
    lat: 48.80763566,
    lon: 8.22246844,
    type: "bus"
  },
  {
    name: "Geroldsau Schule",
    lat: 48.72734179,
    lon: 8.249364,
    type: "bus"
  },
  {
    name: "Geroldsau Schmiegrankweg",
    lat: 48.73213543,
    lon: 8.25733206,
    type: "bus"
  },
  {
    name: "Geroldsau Malschbacher Str.",
    lat: 48.72457442,
    lon: 8.24752246,
    type: "bus"
  },
  {
    name: "Baden-Baden Schweigrother Platz",
    lat: 48.78171006,
    lon: 8.20956863,
    type: "bus"
  },
  {
    name: "Baden-Baden Rotenbachtalstraße",
    lat: 48.76431032,
    lon: 8.24984909,
    type: "bus"
  },
  {
    name: "Baden-Baden Königsberger Str.",
    lat: 48.78152656,
    lon: 8.18721855,
    type: "bus"
  },
  {
    name: "Baden-Baden Kleine Dollenstr.",
    lat: 48.77626996,
    lon: 8.21953993,
    type: "bus"
  },
  {
    name: "Baden-Baden Caracalla Therme",
    lat: 48.76250429,
    lon: 8.24433344,
    type: "bus"
  },
  {
    name: "BAD Augustapl. / Museum Burda",
    lat: 48.75816362,
    lon: 8.24145883,
    type: "bus"
  },
  {
    name: "BAD Augustaplatz / Museum Burda",
    lat: 48.75857816,
    lon: 8.24107255,
    type: "bus"
  },
  {
    name: "Baden-Baden Festspielhaus",
    lat: 48.76763799,
    lon: 8.23277212,
    type: "bus"
  },
  {
    name: "BAD Leopoldsplatz (Luisenstraße)",
    lat: 48.76168119,
    lon: 8.23862015,
    type: "bus"
  },
  {
    name: "Baden-Baden Leopoldspl. (Sophienstr.)",
    lat: 48.76114232,
    lon: 8.24047966,
    type: "bus"
  },
  {
    name: "BAD Altenpflegeheim Schafberg",
    lat: 48.74971216,
    lon: 8.26563249,
    type: "bus"
  },
  {
    name: "Varnhalt Im Lindenbosch",
    lat: 48.73743812,
    lon: 8.177382,
    type: "bus"
  },
  {
    name: "Baden-Baden Pariser Platz Cité",
    lat: 48.77902856,
    lon: 8.20133108,
    type: "bus"
  },
  {
    name: "Baden-Baden Campus Cité / VHS",
    lat: 48.77999344,
    lon: 8.19555492,
    type: "bus"
  },
  {
    name: "Baden-Baden Shopping Cité",
    lat: 48.78357459,
    lon: 8.19237488,
    type: "bus"
  },
  {
    name: "Baden-Baden Gewerbepark Cité",
    lat: 48.78407771,
    lon: 8.19524051,
    type: "bus"
  },
  {
    name: "Baden-Baden Kino Cité / P+R",
    lat: 48.78118916,
    lon: 8.19464762,
    type: "bus"
  },
  {
    name: "Baden-Baden Bretagne",
    lat: 48.77939557,
    lon: 8.19065011,
    type: "bus"
  },
  {
    name: "Haueneberstein R.-Bosch-Straße",
    lat: 48.81222643,
    lon: 8.21510226,
    type: "bus"
  },
  {
    name: "Baden-Baden Zimmerplatz",
    lat: 48.71550089,
    lon: 8.22735528,
    type: "bus"
  },
  {
    name: "Baden-Baden Schwanenwasen",
    lat: 48.6879384,
    lon: 8.23042752,
    type: "bus"
  },
  {
    name: "Baden-Baden Dr. Fecht Waldheim",
    lat: 48.67924974,
    lon: 8.23407468,
    type: "bus"
  },
  {
    name: "Baden-Baden Ooswinkel",
    lat: 48.77724082,
    lon: 8.21264087,
    type: "bus"
  },
  {
    name: "Baden-Baden Im Metzenacker",
    lat: 48.77972707,
    lon: 8.20830201,
    type: "bus"
  },
  {
    name: "Baden-Baden Schwarzwaldstraße",
    lat: 48.78016511,
    lon: 8.20552622,
    type: "bus"
  },
  {
    name: "Baden-Baden Schußbachstraße",
    lat: 48.78648076,
    lon: 8.20848167,
    type: "bus"
  },
  {
    name: "Baden-Baden Kurhaus",
    lat: 48.75938355,
    lon: 8.23744336,
    type: "bus"
  },
  {
    name: "Baden-Baden Römerweg",
    lat: 48.7841665,
    lon: 8.20285822,
    type: "bus"
  },
  {
    name: "Baden-Baden Haueneberstein",
    lat: 48.81197797,
    lon: 8.20912846,
    type: "bus"
  },
  {
    name: "Baden-Baden Rebland",
    lat: 48.73391886,
    lon: 8.14667758,
    type: "bus"
  },
  {
    name: "Steinbach Bahnhof Rebland",
    lat: 48.73512752,
    lon: 8.14551875,
    type: "bus"
  },
  {
    name: "Durlach Untermühlstraße",
    lat: 49.00207214,
    lon: 8.4549704,
    type: ["stadtbahn", "tram"],
    lines: ["S4", "S5", "S51", "1", "2", "5"]
  },
  {
    name: "Karlsruhe Pappelallee",
    lat: 48.99509996,
    lon: 8.33513514,
    type: "bus"
  },
  {
    name: "Karlsruhe Falterweg",
    lat: 48.99703317,
    lon: 8.3364377,
    type: "bus"
  },
  {
    name: "KA Durlacher Tor/KIT-Campus Süd (U)",
    lat: 49.0090021,
    lon: 8.41669319,
    type: ["ubahn", "tram"],
     lines: ["S2", "S4", "S5", "S51", "S7", "S71", "S8", "1", "2"]
  },
  {
    name: "Karlsruhe Kronenplatz (U)",
    lat: 49.00935564,
    lon: 8.40998277,
    type: ["ubahn", "tram"],
    lines: ["S2", "S4", "S5", "S51", "S7", "S71", "S8", "1", "2"]
  },
  {
    name: "KA Marktplatz (Kaiserstraße U)",
    lat: 49.009651,
    lon: 8.402687,
    type: ["ubahn", "tram"],
    lines: ["S1", "S11", "S2", "S5", "S51", "1"]
  },
  {
    name: "KA Europaplatz (U)",
    lat: 49.01006861,
    lon: 8.39371428,
    type: ["ubahn", "tram"],
     lines: ["S1", "S11", "S2", "S5", "S51", "1"]
  },
  {
    name: "Karlsruhe Starckstraße",
    lat: 49.01640242,
    lon: 8.35288585,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "KA Marktplatz (Pyramide U)",
    lat: 49.0083009,
    lon: 8.40376643,
    type: ["ubahn", "tram"],
    lines: ["S1", "S11", "S4", "S7", "S71", "S8", "2"]
    },
  {
    name: "KA Ettlinger Tor/Staatstheater (U)",
    lat: 49.0050776,
    lon: 8.40343406,
    type: ["ubahn", "tram"],
    lines: ["S1", "S11", "S4", "S7", "S71", "S8", "2"]
  },
  {
    name: "Karlsruhe Kongresszentrum (U)",
    lat: 49.00217232,
    lon: 8.40311066,
    type: ["ubahn", "tram"],
    lines: ["S1", "S11", "S4", "S7", "S71", "S8", "2"]
  },
  {
    name: "Karlsruhe Vogesenbrücke",
    lat: 49.00910816,
    lon: 8.35556283,
    type: "bus"
  },
  {
    name: "Karlsruhe Mühlburg West",
    lat: 49.0204792,
    lon: 8.3505682,
    type: "stadtbahn"
  },
  {
    name: "Knielingen Siemens",
    lat: 49.02520949,
    lon: 8.34633714,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "Knielingen Herweghstraße",
    lat: 49.03066968,
    lon: 8.34096521,
    type: "stadtbahn"
  },
  {
    name: "Knielingen Eggensteiner Straße",
    lat: 49.03350851,
    lon: 8.33821637,
    type: "stadtbahn"
  },
  {
    name: "Knielingen Rheinbergstraße",
    lat: 49.03534011,
    lon: 8.33615922,
    type: "stadtbahn"
  },
  {
    name: "Durlach Auer Str./Dr. Schwabe",
    lat: 49.00052809,
    lon: 8.46315406,
    type: "tram",
    lines: ["1", "2"]
  },
  {
    name: "KA Moltkestr./Städt. Klinikum",
    lat: 49.01571311,
    lon: 8.37517306,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "KA Knielinger Allee/Städt. Klinikum",
    lat: 49.01884735,
    lon: 8.37540662,
    type: "stadtbahn"
  },
  {
    name: "Karlsruhe August-Bebel-Straße",
    lat: 49.02416097,
    lon: 8.37578391,
    type: "stadtbahn"
  },
  {
    name: "Karlsruhe Kurt-Schumacher-Str.",
    lat: 49.03027506,
    lon: 8.37630493,
    type: "stadtbahn"
  },
  {
    name: "Karlsruhe Haus Bethlehem",
    lat: 49.03310213,
    lon: 8.37661934,
    type: "stadtbahn"
  },
  {
    name: "Neureut Welschneureuter Straße",
    lat: 49.04481508,
    lon: 8.37470593,
    type: "stadtbahn"
  },
  {
    name: "Neureut Welschn. Straße (Ersatzhalt)",
    lat: 49.04446768,
    lon: 8.37433762,
    type: "bus"
  },
  {
    name: "Neureut Bärenweg",
    lat: 49.0470231,
    lon: 8.37856869,
    type: "stadtbahn"
  },
  {
    name: "Neureut Adolf-Ehrmann-Bad",
    lat: 49.0508501,
    lon: 8.3852791,
    type: "stadtbahn"
  },
  {
    name: "Neureut Adolf-Ehrmann-Bad (Ersatzhalt)",
    lat: 49.05055572,
    lon: 8.38505453,
    type: "bus"
  },
  {
    name: "Neureut Kirchfeld",
    lat: 49.05300486,
    lon: 8.38907898,
    type: "stadtbahn"
  },
  {
    name: "Neureut Kirchfeld (Ersatzhalt)",
    lat: 49.05267517,
    lon: 8.39026475,
    type: "bus"
  },
  {
    name: "Karlsruhe Duale Hochschule",
    lat: 49.02725345,
    lon: 8.3861864,
    type: "tram"
  },
  {
    name: "Karlsruhe Albtalbahnhof",
    lat: 48.99356158,
    lon: 8.39596007,
    type: "stadtbahn",
    lines: ["S1", "S11", "S4", "S7", "S8"]
  },
  {
    name: "Karlsruhe Albtalbahnhof (Ersatzhalt)",
    lat: 48.99319024,
    lon: 8.39710992,
    type: "bus"
  },
  {
    name: "Karlsruhe Dammerstock",
    lat: 48.98468407,
    lon: 8.40364067,
    type: "stadtbahn"
  },
  {
    name: "Karlsruhe Schloss Rüppurr",
    lat: 48.98147103,
    lon: 8.40379338,
    type: "stadtbahn"
  },
  {
    name: "Rüppurr Ostendorfplatz",
    lat: 48.97598775,
    lon: 8.40664104,
    type: "stadtbahn"
  },
  {
    name: "Rüppurr Tulpenstraße",
    lat: 48.97134124,
    lon: 8.40405389,
    type: "stadtbahn"
  },
  {
    name: "Rüppurr Battstraße",
    lat: 48.96570351,
    lon: 8.40477255,
    type: "stadtbahn"
  },
  {
    name: "Karlsruhe Erlenweg",
    lat: 48.98265605,
    lon: 8.40870717,
    type: "bus"
  },
  {
    name: "Rüppurr Heinrich-Heine-Ring",
    lat: 48.96626378,
    lon: 8.40701833,
    type: "bus"
  },
  {
    name: "Rüppurr Hegaustraße",
    lat: 48.96670608,
    lon: 8.41143804,
    type: "bus"
  },
  {
    name: "Rüppurr Prinzenweg",
    lat: 48.96868758,
    lon: 8.41446537,
    type: "bus"
  },
  {
    name: "Rüppurr Märchenring",
    lat: 48.97033876,
    lon: 8.41621708,
    type: "bus"
  },
  {
    name: "Neureut-Heide",
    lat: 49.03680063,
    lon: 8.38820761,
    type: "tram"
  },
  {
    name: "Durlach Hubstraße",
    lat: 49.00722845,
    lon: 8.47248755,
    type: "stadtbahn",
    lines: ["S5", "S51"]
  },
  {
    name: "Grötzingen",
    lat: 49.00606759,
    lon: 8.49293321,
    type: "stadtbahn",
    lines: ["S4", "S5", "S51"]
  },
  {
    name: "Grötzingen Bahnhof",
    lat: 49.00608527,
    lon: 8.4934722,
    type: "bus"
  },
  {
    name: "Grötzingen Oberausstraße",
    lat: 49.00518367,
    lon: 8.50391062,
    type: "stadtbahn",
    lines: ["S4", "S5", "S51"]
  },
  {
    name: "Grötzingen Hl.-Kreuz-Kirche",
    lat: 49.00435277,
    lon: 8.50356028,
    type: "bus"
  },
  {
    name: "Durlach Friedrichschule",
    lat: 48.9993376,
    lon: 8.46855293,
    type: "bus"
  },
  {
    name: "Grötzingen Krappmühlenweg",
    lat: 49.00586724,
    lon: 8.51269614,
    type: "stadtbahn"
  },
  {
    name: "Grötzingen Im Sonnental",
    lat: 49.00163604,
    lon: 8.50287756,
    type: "bus"
  },
  {
    name: "Durlach Schlossplatz",
    lat: 48.99911954,
    lon: 8.47355655,
    type: "tram"
  },
  {
    name: "Maxau",
    lat: 49.03598204,
    lon: 8.30783534,
    type: ["stadtbahn", "bahn"]
  },
  {
    name: "Durlach Turmberg",
    lat: 48.99987391,
    lon: 8.47851525,
    type: "tram",
    lines: ["1", "8"]
  },
  {
    name: "Durlach Karl-Weysser-Straße",
    lat: 48.99867752,
    lon: 8.47671862,
    type: "tram",
    lines: ["1", "8"]
  },
  {
    name: "Durlach Friedhof",
    lat: 49.00250234,
    lon: 8.48335717,
    type: "bus"
  },
  {
    name: "Grötzingen Augustenburg",
    lat: 49.00425848,
    lon: 8.49876327,
    type: "bus"
  },
  {
    name: "Durlach Neßlerstraße",
    lat: 49.00243752,
    lon: 8.48701331,
    type: "bus"
  },
  {
    name: "Karlsruhe Eckenerstraße",
    lat: 49.00576117,
    lon: 8.35044244,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "Grötzingen LTZ Augustenberg",
    lat: 49.00313291,
    lon: 8.49266371,
    type: "bus"
  },
  {
    name: "Karlsruhe Rheinhafenstraße",
    lat: 49.00138852,
    lon: 8.34489983,
    type: "stadtbahn"
  },
  {
    name: "Daxlanden Thomas-Mann-Straße",
    lat: 48.99922563,
    lon: 8.3415581,
    type: "stadtbahn"
  },
  {
    name: "Daxlanden Karl-Delisle-Straße",
    lat: 48.99576009,
    lon: 8.33778517,
    type: "stadtbahn"
  },
  {
    name: "Daxlanden Dornröschenweg",
    lat: 48.99251829,
    lon: 8.33506328,
    type: "stadtbahn"
  },
  {
    name: "Daxlanden Nussbaumweg",
    lat: 48.9891466,
    lon: 8.33300614,
    type: "stadtbahn"
  },
  {
    name: "KA-Grötzingen Emil-Arheit-Halle",
    lat: 49.02260582,
    lon: 8.496778,
    type: "bus"
  },
  {
    name: "Grötzingen Fröbelstraße",
    lat: 49.00769397,
    lon: 8.49115454,
    type: "bus"
  },
  {
    name: "Grötzingen Rathaus",
    lat: 49.0076645,
    lon: 8.49618511,
    type: "bus"
  },
  {
    name: "Grötzingen Karl-Leopold-Straße",
    lat: 49.01082871,
    lon: 8.49506221,
    type: "bus"
  },
  {
    name: "Grötzingen Nord",
    lat: 49.01517697,
    lon: 8.49419983,
    type: "bus"
  },
  {
    name: "Grötzingen Büchelbergstraße",
    lat: 49.00567277,
    lon: 8.4956551,
    type: "bus"
  },
  {
    name: "Grötzingen Staigstraße",
    lat: 49.00286183,
    lon: 8.49789191,
    type: "bus"
  },
  {
    name: "Grötzingen Gustav-Hofmann-Str.",
    lat: 49.00402276,
    lon: 8.50661455,
    type: "bus"
  },
  {
    name: "Karlsruhe Messe",
    lat: 48.98171275,
    lon: 8.32860439,
    type: "bus"
  },
  {
    name: "Grötzingen Ringelberghohl",
    lat: 49.00346292,
    lon: 8.50233857,
    type: "bus"
  },
  {
    name: "Grötzingen Eisenbahnstraße",
    lat: 49.00510117,
    lon: 8.50113483,
    type: "bus"
  },
  {
    name: "Grötzingen An der Pfinz",
    lat: 49.00592616,
    lon: 8.50196128,
    type: "bus"
  },
  {
    name: "Stupferich Efeustraße",
    lat: 48.95665587,
    lon: 8.5125075,
    type: "bus"
  },
  {
    name: "Neureut Rosmarinweg",
    lat: 49.03563457,
    lon: 8.38551267,
    type: "bus"
  },
  {
    name: "Durlach Dürrbachstraße",
    lat: 48.99481115,
    lon: 8.48197376,
    type: "bus"
  },
  {
    name: "Durlach Lerchenberg",
    lat: 48.99221768,
    lon: 8.48668992,
    type: "bus"
  },
  {
    name: "Durlach Eisenhafengrund",
    lat: 48.98810322,
    lon: 8.49169353,
    type: "bus"
  },
  {
    name: "Thomashof",
    lat: 48.96714839,
    lon: 8.50446758,
    type: "bus"
  },
  {
    name: "Durlach Thomashof",
    lat: 48.96776171,
    lon: 8.5042969,
    type: "bus"
  },
  {
    name: "Stupferich Gerberastraße",
    lat: 48.95637864,
    lon: 8.50734218,
    type: "bus"
  },
  {
    name: "Stupferich Karlsbader Str.",
    lat: 48.95388935,
    lon: 8.50773744,
    type: "bus"
  },
  {
    name: "Hagsfeld Süd",
    lat: 49.02421988,
    lon: 8.44912237,
    type: "stadtbahn"
  },
  {
    name: "Hagsfeld Geroldsäcker",
    lat: 49.03290777,
    lon: 8.45535668,
    type: "stadtbahn"
  },
  {
    name: "Knielingen Sudetenstraße",
    lat: 49.0305401,
    lon: 8.34512441,
    type: "tram"
  },
  {
    name: "Knielingen Pionierstraße",
    lat: 49.03348495,
    lon: 8.34808885,
    type: "tram"
  },
  {
    name: "Knielingen Egon-Eiermann-Allee",
    lat: 49.03598204,
    lon: 8.35015498,
    type: "tram"
  },
  {
    name: "Knielingen Nord",
    lat: 49.03774288,
    lon: 8.34778342,
    type: "tram"
  },
  {
    name: "Karlsruhe Rheinhafen Nord",
    lat: 49.01710351,
    lon: 8.32049261,
    type: "bus"
  },
  {
    name: "KA Durlacher Tor/KIT-Campus Süd",
    lat: 49.00893728,
    lon: 8.41777117,
    type: ["tram", "bus"],
     lines: ["4", "5"]
  },
  {
    name: "Karlsruhe Studentenhaus",
    lat: 49.01146507,
    lon: 8.41812151,
    type: "bus"
  },
  {
    name: "Karlsruhe Pastor-Felke-Straße",
    lat: 49.01548922,
    lon: 8.42224478,
    type: "bus"
  },
  {
    name: "Karlsruhe Büchiger Allee",
    lat: 49.0198135,
    lon: 8.42130155,
    type: "bus"
  },
  {
    name: "Karlsruhe Rintheimer Querallee",
    lat: 49.02554525,
    lon: 8.42465226,
    type: "bus"
  },
  {
    name: "Waldstadt Breslauer Straße",
    lat: 49.02868476,
    lon: 8.43010504,
    type: "bus"
  },
  {
    name: "Waldstadt Schneidemühler Str.",
    lat: 49.03526944,
    lon: 8.43151539,
    type: "bus"
  },
  {
    name: "Waldstadt Kolberger Straße",
    lat: 49.03857912,
    lon: 8.43536018,
    type: "bus"
  },
  {
    name: "Waldstadt Elbinger Straße West",
    lat: 49.04124083,
    lon: 8.43845039,
    type: "tram"
  },
  {
    name: "Waldstadt Europäische Schule",
    lat: 49.04479742,
    lon: 8.44679573,
    type: "tram"
  },
  {
    name: "Hagsfeld Reitschulschlag",
    lat: 49.04252453,
    lon: 8.46080047,
    type: "stadtbahn"
  },
  {
    name: "Karlsruhe Emil-Gött-Straße",
    lat: 49.01336229,
    lon: 8.42060086,
    type: "bus"
  },
  {
    name: "Waldstadt Elbinger Straße Ost",
    lat: 49.0407933,
    lon: 8.45069442,
    type: "bus"
  },
  {
    name: "Daxlanden Mauerweg",
    lat: 49.00780593,
    lon: 8.33900688,
    type: "tram"
  },
  {
    name: "Daxlanden Ankerstraße",
    lat: 49.00649187,
    lon: 8.33441649,
    type: "tram"
  },
  {
    name: "Daxlanden Kirchplatz",
    lat: 49.00541349,
    lon: 8.33177545,
    type: "tram"
  },
  {
    name: "Daxlanden Hammweg",
    lat: 49.0039049,
    lon: 8.32670895,
    type: "tram"
  },
  {
    name: "Daxlanden Waidweg",
    lat: 49.00438223,
    lon: 8.32210957,
    type: "tram"
  },
  {
    name: "Daxlanden Altrheinbrücke",
    lat: 49.00085812,
    lon: 8.31190471,
    type: "tram"
  },
  {
    name: "Daxlanden Rappenwört",
    lat: 48.99919026,
    lon: 8.29530384,
    type: "tram"
  },
  {
    name: "Karlsruhe Dunantstraße",
    lat: 49.01145918,
    lon: 8.43575544,
    type: "tram"
  },
  {
    name: "Hagsfeld Bahnhof",
    lat: 49.02722989,
    lon: 8.45373073,
    type: ["sbahn", "stadtbahn", "bahn"]
  },
  {
    name: "Hagsfeld Oberdorfstraße",
    lat: 49.02827245,
    lon: 8.45592262,
    type: "bus"
  },
  {
    name: "Hagsfeld Julius-Bender-Straße",
    lat: 49.02907939,
    lon: 8.45676703,
    type: "bus"
  },
  {
    name: "Hagsfeld Pfizer",
    lat: 49.02356012,
    lon: 8.4532636,
    type: "bus"
  },
  {
    name: "Hagsfeld An der Tagweide",
    lat: 49.02102706,
    lon: 8.45644364,
    type: "bus"
  },
  {
    name: "Hagsfeld Printzstraße",
    lat: 49.02374863,
    lon: 8.46301931,
    type: "bus"
  },
  {
    name: "Hagsfeld Neue Wiesen",
    lat: 49.02052633,
    lon: 8.46097115,
    type: "bus"
  },
  {
    name: "Hagsfeld Storrenacker Süd",
    lat: 49.01892983,
    lon: 8.46699885,
    type: "bus"
  },
  {
    name: "Hagsfeld Storrenacker Mitte",
    lat: 49.02113899,
    lon: 8.46821157,
    type: "bus"
  },
  {
    name: "Hagsfeld Storrenacker Nord",
    lat: 49.02523894,
    lon: 8.47057414,
    type: "bus"
  },
  {
    name: "Durlach Breit",
    lat: 49.02075608,
    lon: 8.47785948,
    type: "bus"
  },
  {
    name: "Durlach Ochsentorstraße",
    lat: 49.00130012,
    lon: 8.47333197,
    type: "bus"
  },
  {
    name: "Hagsfeld Nord",
    lat: 49.03462161,
    lon: 8.46013572,
    type: "bus"
  },
  {
    name: "Hagsfeld Schwetzinger Straße",
    lat: 49.03108197,
    lon: 8.45885113,
    type: "bus"
  },
  {
    name: "Hagsfeld Elfmorgenbruch",
    lat: 49.0197487,
    lon: 8.46057589,
    type: "bus"
  },
  {
    name: "Grötzingen Weidbruch",
    lat: 49.03393255,
    lon: 8.47374519,
    type: "bus"
  },
  {
    name: "Durlach An der Fayence",
    lat: 49.00174212,
    lon: 8.46972972,
    type: "bus"
  },
  {
    name: "Durlach Am Heegwald",
    lat: 49.01758071,
    lon: 8.47909915,
    type: "bus"
  },
  {
    name: "Rintheim Forststraße",
    lat: 49.01395148,
    lon: 8.44198975,
    type: "tram"
  },
  {
    name: "Rintheim",
    lat: 49.01629048,
    lon: 8.44376841,
    type: "tram"
  },
  {
    name: "Karlsruhe Stadtwerke",
    lat: 49.00711649,
    lon: 8.34399253,
    type: "tram"
  },
  {
    name: "Grötzingen Paul-Rein-Straße",
    lat: 49.00124708,
    lon: 8.5041352,
    type: "bus"
  },
  {
    name: "Hagsfeld Schäferstraße",
    lat: 49.0284845,
    lon: 8.4611598,
    type: "bus"
  },
  {
    name: "Hagsfeld Brückenstraße",
    lat: 49.02654661,
    lon: 8.46346847,
    type: "bus"
  },
  {
    name: "Grötzingen Pfinzhof",
    lat: 49.03228347,
    lon: 8.47167008,
    type: "bus"
  },
  {
    name: "Grötzingen Ohmstraße",
    lat: 49.02735947,
    lon: 8.47281993,
    type: "bus"
  },
  {
    name: "Grötzingen Greschbachstraße",
    lat: 49.02975674,
    lon: 8.47311637,
    type: "bus"
  },
  {
    name: "Grötzingen Rossweid",
    lat: 49.03533422,
    lon: 8.47204738,
    type: "bus"
  },
  {
    name: "Karlsruhe-Knielingen",
    lat: 49.02692359,
    lon: 8.34087538,
    type: "bus"
  },
  {
    name: "Karlsruhe-Mühlburg",
    lat: 49.01490006,
    lon: 8.35093651,
    type: "bahn"
  },
  {
    name: "Grötzingen Fikentscherstraße",
    lat: 49.00174801,
    lon: 8.5071715,
    type: "bus"
  },
  {
    name: "Hagsfeld Jenaer Straße",
    lat: 49.03573469,
    lon: 8.45612923,
    type: "stadtbahn"
  },
  {
    name: "Hagsfeld Hallesche Allee",
    lat: 49.03480418,
    lon: 8.45414395,
    type: "bus"
  },
  {
    name: "Grötzingen Am Schwalbenloch",
    lat: 49.00064006,
    lon: 8.50076652,
    type: "bus"
  },
  {
    name: "Grötzingen Vogelsang",
    lat: 48.9997089,
    lon: 8.49963464,
    type: "bus"
  },
  {
    name: "Karlsruhe Europaplatz",
    lat: 49.01006861,
    lon: 8.39311241,
    type: "bus"
  },
  {
    name: "Karlsruhe Kaiserplatz",
    lat: 49.01018057,
    lon: 8.38835134,
    type: "tram"
  },
  {
    name: "Karlsruhe Mühlburger Tor",
    lat: 49.010579,
    lon: 8.383198,
    type: "tram"
  },
  {
    name: "Karlsruhe Mühlburger Tor",
    lat: 49.010587,
    lon: 8.382248,
    type: "stadtbahn"
  },
  {
    name: "Karlsruhe Schillerstraße",
    lat: 49.00975632,
    lon: 8.37965565,
    type: "tram"
  },
  {
    name: "Durlach Raiherwiesenstraße",
    lat: 48.99745752,
    lon: 8.45872536,
    type: "bus"
  },
  {
    name: "Durlach Wachhausstraße",
    lat: 48.99275996,
    lon: 8.44878999,
    type: "bus"
  },
  {
    name: "Durlach Killisfeld",
    lat: 48.99308415,
    lon: 8.44496317,
    type: "bus"
  },
  {
    name: "Karlsruhe Karl-Wilhelm-Platz",
    lat: 49.01124117,
    lon: 8.42295445,
    type: "tram"
  },
  {
    name: "Karlsruhe Hauptfriedhof",
    lat: 49.01360975,
    lon: 8.4292157,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "KA Hirtenweg/Technologiepark",
    lat: 49.01709173,
    lon: 8.43866598,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "Rintheim Sinsheimer Straße",
    lat: 49.02072662,
    lon: 8.44465774,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "Waldstadt Fächerbad",
    lat: 49.02530963,
    lon: 8.44805338,
    type: "tram"
  },
  {
    name: "Waldstadt Im Eichbäumle",
    lat: 49.02957416,
    lon: 8.4478288,
    type: "tram"
  },
  {
    name: "Waldstadt Glogauer Straße",
    lat: 49.03171217,
    lon: 8.44178314,
    type: "tram"
  },
  {
    name: "Waldstadt Zentrum",
    lat: 49.03501031,
    lon: 8.44507995,
    type: "tram"
  },
  {
    name: "Waldstadt Jägerhaus",
    lat: 49.0368183,
    lon: 8.44691252,
    type: "tram"
  },
  {
    name: "Karlsruhe Yorckstraße",
    lat: 49.01095834,
    lon: 8.37535272,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "Waldstadt Osteroder Straße",
    lat: 49.04319581,
    lon: 8.44765812,
    type: "tram"
  },
  {
    name: "Karlsruhe Kapellenstraße",
    lat: 49.00695739,
    lon: 8.4135401,
    type: "bus"
  },
  {
    name: "Durlach Tiefbauamt",
    lat: 48.99672669,
    lon: 8.43236879,
    type: "bus"
  },
  {
    name: "Durlach Maybachstraße",
    lat: 48.9971039,
    lon: 8.43912412,
    type: "bus"
  },
  {
    name: "Durlach Dieselstraße",
    lat: 48.99627286,
    lon: 8.445053,
    type: "bus"
  },
  {
    name: "Durlach Ottostraße",
    lat: 48.99523552,
    lon: 8.4503351,
    type: "bus"
  },
  {
    name: "Durlach Gudrunstraße",
    lat: 48.99656756,
    lon: 8.45519498,
    type: "bus"
  },
  {
    name: "Durlach Schlesier Straße Ost",
    lat: 48.98628166,
    lon: 8.45969554,
    type: "bus"
  },
  {
    name: "Durlach Blattwiesenstraße",
    lat: 48.99287785,
    lon: 8.46493272,
    type: "bus"
  },
  {
    name: "Durlach Brühlstraße Mitte",
    lat: 48.98851586,
    lon: 8.46130353,
    type: "bus"
  },
  {
    name: "Hohenwettersbach Medersbuckel",
    lat: 48.97023261,
    lon: 8.47659285,
    type: "bus"
  },
  {
    name: "Durlach Tiefentalstraße",
    lat: 48.97351124,
    lon: 8.47300857,
    type: "bus"
  },
  {
    name: "Hohenwettersbach Mitte",
    lat: 48.96870527,
    lon: 8.47805711,
    type: "bus"
  },
  {
    name: "Hohenwettersbach Rathaus",
    lat: 48.96603377,
    lon: 8.47730252,
    type: "bus"
  },
  {
    name: "Hohenwettersbach Friedhof",
    lat: 48.96430578,
    lon: 8.47303552,
    type: "bus"
  },
  {
    name: "Hohenwettersbach Taglöhnergärten",
    lat: 48.96586275,
    lon: 8.47246959,
    type: "bus"
  },
  {
    name: "Karlsruhe Händelstraße",
    lat: 49.01124706,
    lon: 8.36904655,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "Durlach Dürrenwettersbacher Str.",
    lat: 48.97201348,
    lon: 8.47354756,
    type: "bus"
  },
  {
    name: "Bergwald Mitte",
    lat: 48.97170684,
    lon: 8.46828344,
    type: "bus"
  },
  {
    name: "Bergwald Fridtjof-Nansen-Str.",
    lat: 48.97199579,
    lon: 8.46974769,
    type: "bus"
  },
  {
    name: "Bergwald Hooverstraße",
    lat: 48.97410679,
    lon: 8.46410627,
    type: "bus"
  },
  {
    name: "Bergwald Elsa-Brändström-Str.",
    lat: 48.9723437,
    lon: 8.46187845,
    type: "bus"
  },
  {
    name: "Bergwald Bergwaldschule",
    lat: 48.97123509,
    lon: 8.46787021,
    type: "bus"
  },
  {
    name: "Durlach Zündhütle",
    lat: 48.98280343,
    lon: 8.46010877,
    type: "tram"
  },
  {
    name: "Durlach Schlesier Straße West",
    lat: 48.98875755,
    lon: 8.45221258,
    type: "tram"
  },
  {
    name: "Durlach Ostmarkstraße",
    lat: 48.99226483,
    lon: 8.45360496,
    type: "tram"
  },
  {
    name: "Durlach Ellmendinger Straße",
    lat: 48.99427478,
    lon: 8.45896791,
    type: "tram"
  },
  {
    name: "Durlach Steiermärker Straße",
    lat: 48.98591617,
    lon: 8.45579685,
    type: "tram"
  },
  {
    name: "Durlach Killisfeldstraße",
    lat: 48.99716873,
    lon: 8.46184252,
    type: "tram"
  },
  {
    name: "Durlach Gritznerstraße",
    lat: 48.99946137,
    lon: 8.46416017,
    type: "tram"
  },
  {
    name: "Karlsruhe Philippstraße",
    lat: 49.01144739,
    lon: 8.36416869,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "Wolfartsweier Nord",
    lat: 48.97915398,
    lon: 8.45884214,
    type: "tram"
  },
  {
    name: "Durlach Parkschlössle",
    lat: 48.99542413,
    lon: 8.47520046,
    type: "bus"
  },
  {
    name: "Durlach Rommelstraße",
    lat: 48.99222357,
    lon: 8.47306247,
    type: "bus"
  },
  {
    name: "Durlach Max-Liebermann-Straße",
    lat: 48.98807374,
    lon: 8.47015193,
    type: "bus"
  },
  {
    name: "Wolfartsweier Mitte",
    lat: 48.97556322,
    lon: 8.45524888,
    type: "bus"
  },
  {
    name: "Grünwettersbach Rathaus",
    lat: 48.95840773,
    lon: 8.46679223,
    type: "bus"
  },
  {
    name: "Grünwettersbach Mitte",
    lat: 48.95529328,
    lon: 8.4702238,
    type: "bus"
  },
  {
    name: "Grünwettersb. Seniorenresidenz",
    lat: 48.95178929,
    lon: 8.47152635,
    type: "bus"
  },
  {
    name: "Palmbach Kirche",
    lat: 48.94627915,
    lon: 8.48212647,
    type: "bus"
  },
  {
    name: "Palmbach Im Kloth",
    lat: 48.9473647,
    lon: 8.47818287,
    type: "bus"
  },
  {
    name: "Palmbach Auf der Römerstraße",
    lat: 48.94571866,
    lon: 8.48952859,
    type: "bus"
  },
  {
    name: "Palmbach Waldenserplatz",
    lat: 48.94571276,
    lon: 8.48483939,
    type: "bus"
  },
  {
    name: "Palmbach Rudolf-Link-Straße",
    lat: 48.94390736,
    lon: 8.48959147,
    type: "bus"
  },
  {
    name: "Durlach Lußstraße",
    lat: 48.99521194,
    lon: 8.47786846,
    type: "bus"
  },
  {
    name: "Durlach Käthe-Kollwitz-Straße",
    lat: 48.99311362,
    lon: 8.47861406,
    type: "bus"
  },
  {
    name: "Durlach Ernst-Barlach-Straße",
    lat: 48.9892645,
    lon: 8.47900932,
    type: "bus"
  },
  {
    name: "Durlach Max-Beckmann-Straße",
    lat: 48.98792048,
    lon: 8.47749117,
    type: "bus"
  },
  {
    name: "Durlach Geigersberg",
    lat: 48.98616966,
    lon: 8.47486809,
    type: "bus"
  },
  {
    name: "Durlach Erich-Heckel-Straße",
    lat: 48.98829185,
    lon: 8.47479622,
    type: "bus"
  },
  {
    name: "Durlach August-Macke-Straße",
    lat: 48.98734867,
    lon: 8.47245162,
    type: "bus"
  },
  {
    name: "Stupferich Rieslingstraße",
    lat: 48.95124656,
    lon: 8.50330875,
    type: "bus"
  },
  {
    name: "Stupferich Rebgärtenstraße",
    lat: 48.94984252,
    lon: 8.50601268,
    type: "bus"
  },
  {
    name: "Stupferich Kirche",
    lat: 48.95128785,
    lon: 8.50910288,
    type: "bus"
  },
  {
    name: "Stupferich Wiesentalstraße",
    lat: 48.95209014,
    lon: 8.51139359,
    type: "bus"
  },
  {
    name: "Stupferich Rathaus",
    lat: 48.95429637,
    lon: 8.510639,
    type: "bus"
  },
  {
    name: "Stupferich Pfefferäcker",
    lat: 48.952391,
    lon: 8.50394655,
    type: "bus"
  },
  {
    name: "Wolfartsweier Süd",
    lat: 48.97403603,
    lon: 8.45307496,
    type: "bus"
  },
  {
    name: "Wolfartsweier Brücke",
    lat: 48.97223166,
    lon: 8.45094595,
    type: "bus"
  },
  {
    name: "Karlsruhe Synagoge",
    lat: 49.01825822,
    lon: 8.38484791,
    type: "bus"
  },
  {
    name: "Karlsruhe Barbarossaplatz",
    lat: 48.99500565,
    lon: 8.38883643,
    type: "tram"
  },
  {
    name: "Karlsruhe Gebhardstraße",
    lat: 48.99298394,
    lon: 8.38945627,
    type: "bus"
  },
  {
    name: "Karlsruhe Breite Straße",
    lat: 48.99235914,
    lon: 8.38622233,
    type: "bus"
  },
  {
    name: "Karlsruhe Neue Anlage Straße",
    lat: 48.98991881,
    lon: 8.38441672,
    type: "bus"
  },
  {
    name: "Karlsruhe Grünwinkler Straße",
    lat: 48.98810322,
    lon: 8.37978141,
    type: "bus"
  },
  {
    name: "Karlsruhe Landgrabenstraße",
    lat: 48.98863375,
    lon: 8.37774224,
    type: "bus"
  },
  {
    name: "Karlsruhe Rheinhafen",
    lat: 49.01574846,
    lon: 8.34737918,
    type: "bus"
  },
  {
    name: "Oberreut R.-Breitscheid-Staße",
    lat: 48.98690654,
    lon: 8.36072815,
    type: "bus"
  },
  {
    name: "Oberreut Johanna-Kirchner-Str.",
    lat: 48.98544455,
    lon: 8.35949746,
    type: "bus"
  },
  {
    name: "Oberreut Eugen-Geck-Straße",
    lat: 48.98510263,
    lon: 8.35617369,
    type: "bus"
  },
  {
    name: "Karlsruhe Petergraben",
    lat: 48.98585132,
    lon: 8.37746376,
    type: "bus"
  },
  {
    name: "Bulach Friedhof",
    lat: 48.98296851,
    lon: 8.37414898,
    type: "bus"
  },
  {
    name: "Oberreut B.-Lichtenberg-Straße",
    lat: 48.9871895,
    lon: 8.36433039,
    type: "bus"
  },
  {
    name: "Karlsruhe Mühlburger Feld",
    lat: 49.00784717,
    lon: 8.36381835,
    type: "tram"
  },
  {
    name: "Karlsruhe Kühler Krug",
    lat: 49.00633866,
    lon: 8.36654923,
    type: "tram"
  },
  {
    name: "Karlsruhe Hübschstraße",
    lat: 49.00559028,
    lon: 8.37192116,
    type: "tram"
  },
  {
    name: "Karlsruhe Lessingstraße",
    lat: 49.0044117,
    lon: 8.3838418,
    type: "tram"
  },
  {
    name: "Karlsruhe Otto-Sachs-Straße",
    lat: 49.00339221,
    lon: 8.3895461,
    type: "tram"
  },
  {
    name: "Karlsruhe Entenfang",
    lat: 49.01054,
    lon: 8.35916508,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "Karlsruhe Konzerthaus",
    lat: 49.0034806,
    lon: 8.39955333,
    type: "bus"
  },
  {
    name: "Karlsruhe Stephanienbad",
    lat: 48.9908089,
    lon: 8.39178291,
    type: "bus"
  },
  {
    name: "Karlsruhe Neckarplatz",
    lat: 48.98732509,
    lon: 8.39406463,
    type: "bus"
  },
  {
    name: "Karlsruhe Weiherhof",
    lat: 48.98566857,
    lon: 8.39275309,
    type: "bus"
  },
  {
    name: "Karlsruhe Belchenplatz",
    lat: 48.98229642,
    lon: 8.39036357,
    type: "bus"
  },
  {
    name: "Karlsruhe Links der Alb",
    lat: 48.98390588,
    lon: 8.39594211,
    type: "bus"
  },
  {
    name: "Karlsruhe Nürnberger Straße",
    lat: 48.98437162,
    lon: 8.39869993,
    type: "bus"
  },
  {
    name: "KA Kußmaulstr./Städt. Klinikum",
    lat: 49.0169739,
    lon: 8.36911841,
    type: "tram"
  },
  {
    name: "Karlsruhe Hertzstraße",
    lat: 49.0200786,
    lon: 8.36408785,
    type: "bus"
  },
  {
    name: "Karlsruhe Feierabendweg",
    lat: 49.02199318,
    lon: 8.36055747,
    type: "tram"
  },
  {
    name: "Karlsruhe Neureuter Straße",
    lat: 49.02373095,
    lon: 8.35733252,
    type: "tram"
  },
  {
    name: "Knielingen Siemensallee",
    lat: 49.0278837,
    lon: 8.34981362,
    type: "tram"
  },
  {
    name: "Karlsruhe Südendschule",
    lat: 48.99863037,
    lon: 8.38905203,
    type: "bus"
  },
  {
    name: "KA St. Vincentius Krankenhaus",
    lat: 48.99960871,
    lon: 8.38095821,
    type: "bus"
  },
  {
    name: "Karlsruhe Holtzstraße",
    lat: 49.00163604,
    lon: 8.38107499,
    type: "bus"
  },
  {
    name: "Karlsruhe Griesbachstraße",
    lat: 49.00063417,
    lon: 8.368274,
    type: "bus"
  },
  {
    name: "Karlsruhe Junker-und-Ruh-Str.",
    lat: 48.99947905,
    lon: 8.36910943,
    type: "bus"
  },
  {
    name: "Karlsruhe Benzstraße",
    lat: 49.00059881,
    lon: 8.36601922,
    type: "bus"
  },
  {
    name: "Karlsruhe Liststraße",
    lat: 49.0044942,
    lon: 8.36397107,
    type: "bus"
  },
  {
    name: "Karlsruhe Lameyplatz",
    lat: 49.01322678,
    lon: 8.35447587,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "Karlsruhe Gottesauer Platz/BGV",
    lat: 49.00757612,
    lon: 8.42455345,
    type: ["stadtbahn", "tram"],
     lines: ["S2", "S4", "S5", "S51", "S7", "S71", "S8", "1", "2"]
  },
  {
    name: "Karlsruhe Blohnstraße",
    lat: 49.00752897,
    lon: 8.35637132,
    type: "bus"
  },
  {
    name: "Grünwinkel Friedhof",
    lat: 49.00533688,
    lon: 8.35602098,
    type: "bus"
  },
  {
    name: "Karlsruhe West",
    lat: 49.00228430,
    lon: 8.36283020,
    type: "bahn"
  },
  {
    name: "Karlsruhe Westbahnhof",
    lat: 49.00185998,
    lon: 8.3629919,
    type: "bus"
  },
  {
    name: "Karlsruhe Birkenweg",
    lat: 48.99880129,
    lon: 8.36225528,
    type: "bus"
  },
  {
    name: "Karlsruhe Hornisgrindestraße",
    lat: 48.99538287,
    lon: 8.35977593,
    type: "bus"
  },
  {
    name: "Karlsruhe Sinner",
    lat: 49.00302683,
    lon: 8.35629945,
    type: "bus"
  },
  {
    name: "Karlsruhe Wattkopfstraße",
    lat: 48.99450465,
    lon: 8.35150245,
    type: "bus"
  },
  {
    name: "Karlsruhe Edelbergstraße",
    lat: 48.99683278,
    lon: 8.35402672,
    type: "bus"
  },
  {
    name: "Karlsruhe Staufenbergweg",
    lat: 48.99100931,
    lon: 8.34697494,
    type: "bus"
  },
  {
    name: "Karlsruhe Andreas-Hofer-Straße",
    lat: 49.00290897,
    lon: 8.36072815,
    type: "bus"
  },
  {
    name: "Daxlanden Lindenallee",
    lat: 48.99706264,
    lon: 8.33982435,
    type: "bus"
  },
  {
    name: "Daxlanden Panoramaweg",
    lat: 48.99396239,
    lon: 8.33691381,
    type: "bus"
  },
  {
    name: "Karlsruhe Sophienstraße",
    lat: 49.0075113,
    lon: 8.37906276,
    type: "tram"
  },
  {
    name: "Karlsruhe Pfannkuchstraße",
    lat: 49.01109975,
    lon: 8.34759478,
    type: "bus"
  },
  {
    name: "Karlsruhe Weinbrennerplatz",
    lat: 49.00513653,
    lon: 8.37783207,
    type: "tram"
  },
  {
    name: "Karlsruhe Landesbausparkasse",
    lat: 49.00136495,
    lon: 8.37750868,
    type: "tram"
  },
  {
    name: "KA Europahalle/Europabad",
    lat: 48.99847714,
    lon: 8.37624205,
    type: "tram"
  },
  {
    name: "Karlsruhe Bannwaldallee",
    lat: 48.995153,
    lon: 8.37238828,
    type: "tram"
  },
  {
    name: "Karlsruhe Hardecksiedlung",
    lat: 48.99252419,
    lon: 8.36860637,
    type: "tram"
  },
  {
    name: "Oberreut Albert-Braun-Straße",
    lat: 48.98897565,
    lon: 8.36322546,
    type: "tram"
  },
  {
    name: "Oberreut Zentrum",
    lat: 48.98582774,
    lon: 8.36225528,
    type: "tram"
  },
  {
    name: "KA Karlstor/Bundesgerichtshof",
    lat: 49.00518367,
    lon: 8.39462158,
    type: "tram"
  },
  {
    name: "Oberreut Wilhelm-Leuschner-Str.",
    lat: 48.98333403,
    lon: 8.36520176,
    type: "tram"
  },
  {
    name: "Oberreut Badeniaplatz",
    lat: 48.98195447,
    lon: 8.36824705,
    type: "tram"
  },
  {
    name: "Oberreut Eva-Maria-Buch-Straße",
    lat: 48.98574521,
    lon: 8.36790569,
    type: "bus"
  },
  {
    name: "Karlsruhe Mathystraße",
    lat: 49.00217232,
    lon: 8.39432514,
    type: "tram"
  },
  {
    name: "Karlsruhe Durmersheimer Straße",
    lat: 49.00040433,
    lon: 8.3504065,
    type: "bus"
  },
  {
    name: "Karlsruhe St. Josef Kirche",
    lat: 48.99842999,
    lon: 8.35015498,
    type: "bus"
  },
  {
    name: "Karlsruhe TÜV",
    lat: 48.99659702,
    lon: 8.34834936,
    type: "bus"
  },
  {
    name: "Karlsruhe Eichelbergstraße",
    lat: 48.99348496,
    lon: 8.34507949,
    type: "bus"
  },
  {
    name: "Karlsruhe Bernsteinstraße",
    lat: 48.99211158,
    lon: 8.34818767,
    type: "bus"
  },
  {
    name: "Karlsruhe Philipp-Reis-Straße",
    lat: 49.00448831,
    lon: 8.41089906,
    type: "butrams"
  },
  {
    name: "Karlsruhe Schwimmschulweg",
    lat: 48.99459306,
    lon: 8.36413276,
    type: "bus"
  },
  {
    name: "Karlsruhe Windeckstraße",
    lat: 48.99129814,
    lon: 8.37095098,
    type: "bus"
  },
  {
    name: "Bulach West",
    lat: 48.9892586,
    lon: 8.37534374,
    type: "bus"
  },
  {
    name: "Beiertheim West",
    lat: 48.99462254,
    lon: 8.38268297,
    type: "bus"
  },
  {
    name: "Karlsruhe Welfenstraße",
    lat: 48.99532982,
    lon: 8.38492876,
    type: "tram"
  },
  {
    name: "Karlsruhe Ostendstraße",
    lat: 49.00513653,
    lon: 8.41601047,
    type: "tram"
  },
  {
    name: "Daxlanden A.-Dosenbach-Straße",
    lat: 49.00206625,
    lon: 8.34297744,
    type: "bus"
  },
  {
    name: "Daxlanden Agathenstraße",
    lat: 48.9997089,
    lon: 8.33434463,
    type: "bus"
  },
  {
    name: "Daxlanden Turnerstraße",
    lat: 49.00181873,
    lon: 8.33700364,
    type: "bus"
  },
  {
    name: "Daxlanden Kirschstraße",
    lat: 49.00167729,
    lon: 8.33337445,
    type: "bus"
  },
  {
    name: "Daxlanden Pfalzstraße",
    lat: 49.00460027,
    lon: 8.33579091,
    type: "bus"
  },
  {
    name: "Daxlanden Inselstraße",
    lat: 49.00645062,
    lon: 8.32898168,
    type: "bus"
  },
  {
    name: "Karlsruhe Wolfartsweierer Str.",
    lat: 49.0035631,
    lon: 8.42306224,
    type: "tram"
  },
  {
    name: "Karlsruhe Schloss Gottesaue",
    lat: 49.0036515,
    lon: 8.426925,
    type: "tram"
  },
  {
    name: "Karlsruhe Essenweinstraße",
    lat: 49.0093144,
    lon: 8.43186573,
    type: ["stadtbahn", "tram"]
  },
  {
    name: "Karlsruhe Kolpingplatz",
    lat: 48.99773453,
    lon: 8.39380412,
    type: "tram"
  },
  {
    name: "Karlsruhe Arbeitsagentur",
    lat: 49.00391669,
    lon: 8.38649183,
    type: "tram"
  },
  {
    name: "Karlsruhe ZKM",
    lat: 48.9997973,
    lon: 8.3860786,
    type: "tram"
  },
  {
    name: "KA Tullastraße/Alter Schlachthof",
    lat: 49.00629152,
    lon: 8.43165014,
    type: ["stadtbahn", "tram"],
     lines: ["S2", "S4", "S5", "S51", "S7", "S71", "S8", "1", "2", "5"]
  },
  {
    name: "Karlsruhe Kunstakademie/Hochschule",
    lat: 49.01461725,
    lon: 8.38562945,
    type: "tram"
  },
  {
    name: "Karlsruhe Heidehof",
    lat: 49.03167683,
    lon: 8.38712065,
    type: "tram"
  },
  {
    name: "Neureut Flughafenstraße",
    lat: 49.03614694,
    lon: 8.38052702,
    type: "bus"
  },
  {
    name: "KA Kaiserslauterner Straße",
    lat: 49.03682419,
    lon: 8.37402321,
    type: "bus"
  },
  {
    name: "Karlsruhe Schweigener Straße",
    lat: 49.03850845,
    lon: 8.36957655,
    type: "bus"
  },
  {
    name: "Karlsruhe Weißenburger Straße",
    lat: 49.03709509,
    lon: 8.36716907,
    type: "bus"
  },
  {
    name: "Karlsruhe Germersheimer Straße",
    lat: 49.03304323,
    lon: 8.36478853,
    type: "bus"
  },
  {
    name: "Karlsruhe Berliner Straße",
    lat: 49.03010425,
    lon: 8.36490531,
    type: "bus"
  },
  {
    name: "Karlsruhe Madenburgweg",
    lat: 49.02717688,
    lon: 8.36535447,
    type: "bus"
  },
  {
    name: "Karlsruhe Barbaraweg",
    lat: 49.02396658,
    lon: 8.36588448,
    type: "bus"
  },
  {
    name: "Neureut Blankenlocher Weg",
    lat: 49.05349349,
    lon: 8.39971503,
    type: "bus"
  },
  {
    name: "Karlsruhe Kärcherstraße",
    lat: 49.01601358,
    lon: 8.36157256,
    type: "bus"
  },
  {
    name: "Neureut Kirchfeld Fortuna",
    lat: 49.05657238,
    lon: 8.40021809,
    type: "bus"
  },
  {
    name: "Neureut Kirchfeld Nord",
    lat: 49.05861505,
    lon: 8.39984978,
    type: "bus"
  },
  {
    name: "KA Ettlinger Tor/Staatstheater",
    lat: 49.0054842,
    lon: 8.40222133,
    type: "tram",
    lines: ["4", "5"]
  },
  {
    name: "Karlsruhe Ohiostraße",
    lat: 49.02996289,
    lon: 8.39387598,
    type: "bus"
  },
  {
    name: "Neureut Waldenserkirche",
    lat: 49.04738226,
    lon: 8.37126539,
    type: "bus"
  },
  {
    name: "Neureut Bachenweg",
    lat: 49.05042031,
    lon: 8.37528984,
    type: "bus"
  },
  {
    name: "Neureut Südschule",
    lat: 49.04540979,
    lon: 8.37080724,
    type: "bus"
  },
  {
    name: "Neureut Mitteltorstraße",
    lat: 49.05211588,
    lon: 8.3781914,
    type: "bus"
  },
  {
    name: "Neureut Kirche",
    lat: 49.05385261,
    lon: 8.38039227,
    type: "bus"
  },
  {
    name: "Neureut Friedhof",
    lat: 49.05787923,
    lon: 8.38499164,
    type: "bus"
  },
  {
    name: "Neureut Am Zinken",
    lat: 49.05835015,
    lon: 8.38079651,
    type: "bus"
  },
  {
    name: "Neureut Am Bachkanal",
    lat: 49.06373019,
    lon: 8.37353812,
    type: "bus"
  },
  {
    name: "Neureut Im Kleinen Bruch",
    lat: 49.06682021,
    lon: 8.36968435,
    type: "bus"
  },
  {
    name: "Neureut Dammweg",
    lat: 49.06403626,
    lon: 8.37035809,
    type: "bus"
  },
  {
    name: "Karlsruhe Kongresszentrum",
    lat: 49.00385776,
    lon: 8.40358677,
    type: "bus"
  },
  {
    name: "Neureut Grünewaldstraße",
    lat: 49.04556876,
    lon: 8.38160499,
    type: "bus"
  },
  {
    name: "Neureut Spöcker Straße",
    lat: 49.04500351,
    lon: 8.39073188,
    type: "bus"
  },
  {
    name: "Neureut An der Trift",
    lat: 49.04592205,
    lon: 8.39423531,
    type: "bus"
  },
  {
    name: "Neureut Moldaustraße",
    lat: 49.04739404,
    lon: 8.39639126,
    type: "bus"
  },
  {
    name: "Neureut Donauschwabenstraße",
    lat: 49.05141529,
    lon: 8.39601397,
    type: "bus"
  },
  {
    name: "Neureut Forlenweg",
    lat: 49.05296365,
    lon: 8.39564566,
    type: "bus"
  },
  {
    name: "Neureut Holbeinstraße",
    lat: 49.04678758,
    lon: 8.38270094,
    type: "bus"
  },
  {
    name: "Karlsruhe Linkenheimer Tor",
    lat: 49.01464671,
    lon: 8.39831366,
    type: "bus"
  },
  {
    name: "Karlsruhe Schützenhaus",
    lat: 49.02385466,
    lon: 8.3968494,
    type: "bus"
  },
  {
    name: "Karlsruhe Am Kanalweg",
    lat: 49.03064612,
    lon: 8.3955199,
    type: "bus"
  },
  {
    name: "Karlsruhe Weißes Haus",
    lat: 49.03289599,
    lon: 8.39515159,
    type: "bus"
  },
  {
    name: "Neureut Alte Kreisstraße",
    lat: 49.0404282,
    lon: 8.39282495,
    type: "bus"
  },
  {
    name: "Neureut Am Hubengut",
    lat: 49.04221833,
    lon: 8.39051628,
    type: "bus"
  },
  {
    name: "Karlsruhe Augartenstraße",
    lat: 48.99847124,
    lon: 8.40371253,
    type: ["stadtbahn", "tram"],
    lines: ["S1", "S11", "S4", "S7", "S71", "S8", "2"]
  },
  {
    name: "Karlsruhe Stresemannstraße",
    lat: 49.02634045,
    lon: 8.37458017,
    type: "bus"
  },
  {
    name: "Karlsruhe Wilhelm-Kolb-Straße",
    lat: 49.02783658,
    lon: 8.37346626,
    type: "bus"
  },
  {
    name: "Karlsruhe Landauer Straße",
    lat: 49.03128222,
    lon: 8.37044792,
    type: "bus"
  },
  {
    name: "Karlsruhe Frankenthaler Straße",
    lat: 49.0340739,
    lon: 8.37064555,
    type: "bus"
  },
  {
    name: "Karlsruhe Trierer Straße",
    lat: 49.03535189,
    lon: 8.37272066,
    type: "bus"
  },
  {
    name: "Karlsruhe Binger Straße",
    lat: 49.03115264,
    lon: 8.36135697,
    type: "bus"
  },
  {
    name: "Knielingen Husarenlager",
    lat: 49.03289599,
    lon: 8.35531131,
    type: "bus"
  },
  {
    name: "Knielingen Landeckstraße",
    lat: 49.03666518,
    lon: 8.34282472,
    type: "bus"
  },
  {
    name: "Knielingen Reinmuthstraße",
    lat: 49.03492786,
    lon: 8.34062385,
    type: "bus"
  },
  {
    name: "Knielingen Jakob-Dörr-Straße",
    lat: 49.03670052,
    lon: 8.33685093,
    type: "bus"
  },
  {
    name: "Knielingen Elsternweg",
    lat: 49.03791367,
    lon: 8.33922248,
    type: "bus"
  },
  {
    name: "Knielingen Kolbengärten",
    lat: 49.03980988,
    lon: 8.34174675,
    type: "bus"
  },
  {
    name: "Knielingen Bruchweg",
    lat: 49.03949778,
    lon: 8.33508125,
    type: "bus"
  },
  {
    name: "Knielingen Max-Dortu-Straße",
    lat: 49.0416177,
    lon: 8.33862061,
    type: "bus"
  },
  {
    name: "Durlach Pfinztalstraße",
    lat: 48.99995053,
    lon: 8.4652651,
    type: "bus"
  },
  {
    name: "Durlach Pforzheimer Straße",
    lat: 49.00038075,
    lon: 8.4652112,
    type: "bus"
  },
  {
    name: "Karlsruhe Lilienthalstraße",
    lat: 49.0226824,
    lon: 8.3852252,
    type: "tram"
  },
  {
    name: "Karlsruhe Kronenplatz",
    lat: 49.00868391,
    lon: 8.41003667,
    type: "tram",
    lines: ["3"]
  },
  {
    name: "Karlsruhe-Durlach",
    lat: 49.00207214,
    lon: 8.4625971,
    type: "bahn"
  },
  {
    name: "Durlach Bahnhof",
    lat: 49.00270271,
    lon: 8.46282168,
    type: ["stadtbahn", "tram"],
    lines: ["S4", "S5", "S51", "5"]
  },
  {
    name: "Karlsruhe Werderstraße",
    lat: 49.00015091,
    lon: 8.41060261,
    type: "tram",
    lines: ["3"]
  },
  {
    name: "Karlsruhe Tivoli",
    lat: 48.99664418,
    lon: 8.41040498,
    type: "tram",
    lines: ["3"]
  },
  {
    name: "Karlsruhe Rüppurrer Tor",
    lat: 49.0048242,
    lon: 8.41036905,
    type: "tram",
    lines: ["3", "4", "5"]
  },
  {
    name: "Karlsruhe Hauptbahnhof Süd",
    lat: 48.9917697,
    lon: 8.4012242,
    type: "bus"
  },
  {
    name: "Karlsruhe Hbf Südausgang",
    lat: 48.99170486,
    lon: 8.40125115,
    type: "bus"
  },
  {
    name: "Karlsruhe Hauptbahnhof (Vorplatz)",
    lat: 48.994256,
    lon: 8.399580,
    type: ["stadtbahn", "tram", "bus"],
    lines: ["S1", "S11", "S4", "S7", "S71", "S8", "2", "3"]
  },
  {
    name: "Karlsruhe Weinweg",
    lat: 49.00450009,
    lon: 8.44111838,
    type: ["stadtbahn", "tram"],
    lines: ["S4", "S5", "S51", "1", "2", "5"]
  },
  {
    name: "Karlsruhe Hauptbahnhof",
    lat: 48.99331992,
    lon: 8.40139488,
    type: ["bahn", "stadtbahn", "tram", "sbahn", "bus"]
  },
  {
    name: "Durlach Turmberg Talstation",
    lat: 48.99839463,
    lon: 8.48092273,
    type: "bus"
  },
  {
    name: "KA Hotel Motel One (Ritterstr.)",
    lat: 49.00519545,
    lon: 8.39809806,
    type: "bus"
  },
  {
    name: "KA The Q Quadro City Hotel",
    lat: 49.00521313,
    lon: 8.41022532,
    type: "bus"
  },
  {
    name: "Karlsruhe Einfahrt über Gl. 21",
    lat: 49.00767629,
    lon: 8.43365338,
    type: "bus"
  },
  {
    name: "Karlsruhe Ausfahrt über Gl. 22",
    lat: 49.00781182,
    lon: 8.43312338,
    type: "bus"
  },
  {
    name: "Karlsruhe Historisches Depot 1913",
    lat: 49.00700453,
    lon: 8.43425525,
    type: "bus"
  },
  {
    name: "Karlsruhe Ausfahrt über Gl. 44",
    lat: 49.00652722,
    lon: 8.43407559,
    type: "bus"
  },
  {
    name: "Karlsruhe Ebertstraße",
    lat: 48.99458717,
    lon: 8.39467548,
    type: ["tram", "bus"],
    lines: ["2", "3"]
  },
  {
    name: "Grünwettersb. H.-Barth-Schule",
    lat: 48.95357081,
    lon: 8.47673658,
    type: "bus"
  },
  {
    name: "Oberreut Realschule",
    lat: 48.99306646,
    lon: 8.36136595,
    type: "bus"
  },
  {
    name: "Karlsruhe Poststraße",
    lat: 48.99504102,
    lon: 8.40306575,
    type: ["stadtbahn", "tram"],
    lines: ["S1", "S11", "S4", "S7", "S71", "S8", "2", "3"]
  },
  {
    name: "Karlsruhe Betriebshof West",
    lat: 49.02348944,
    lon: 8.33405717,
    type: "bus"
  },
  {
    name: "Eggenstein",
    lat: 49.07598319,
    lon: 8.39808908,
    type: "stadtbahn"
  },
  {
    name: "Eggenstein (Ersatzhalt)",
    lat: 49.07565954,
    lon: 8.3978106,
    type: "bus"
  },
  {
    name: "Eggenstein Spöcker Weg",
    lat: 49.0801963,
    lon: 8.39985876,
    type: "stadtbahn"
  },
  {
    name: "Eggenstein Spöcker Weg (Ersatzhalt)",
    lat: 49.07981973,
    lon: 8.39591516,
    type: "bus"
  },
  {
    name: "Eggenstein Schweriner Straße",
    lat: 49.08615642,
    lon: 8.40234709,
    type: "stadtbahn"
  },
  {
    name: "Eggenstein Süd",
    lat: 49.07145193,
    lon: 8.39622058,
    type: "stadtbahn"
  },
  {
    name: "Eggenstein Spargelhof (Ersatzhalt)",
    lat: 49.08553279,
    lon: 8.39614872,
    type: "bus"
  },
  {
    name: "Leopoldshafen Viermorgen",
    lat: 49.09045691,
    lon: 8.40023605,
    type: "stadtbahn"
  },
  {
    name: "Leopoldshafen Viermorgen (Ersatz)",
    lat: 49.09094518,
    lon: 8.39958028,
    type: "bus"
  },
  {
    name: "Leopoldshafen Leopoldstraße",
    lat: 49.09743926,
    lon: 8.4012781,
    type: "stadtbahn"
  },
  {
    name: "Leopoldshafen Frankfurter Straße",
    lat: 49.10117415,
    lon: 8.40421559,
    type: "bstadtbahnus"
  },
  {
    name: "KIT-Campus Nord",
    lat: 49.09704517,
    lon: 8.43030267,
    type: "bus"
  },
  {
    name: "Linkenheim Süd",
    lat: 49.11684587,
    lon: 8.41160872,
    type: "stadtbahn"
  },
  {
    name: "Linkenheim Süd (Ersatzhalt)",
    lat: 49.11715161,
    lon: 8.41171652,
    type: "bus"
  },
  {
    name: "Linkenheim Friedrichstraße",
    lat: 49.11959747,
    lon: 8.40950667,
    type: "stadtbahn"
  },
  {
    name: "Linkenheim Friedrichstraße (Ersatz)",
    lat: 49.12046172,
    lon: 8.40841971,
    type: "bus"
  },
  {
    name: "Linkenheim Rathaus",
    lat: 49.12331893,
    lon: 8.40826699,
    type: "stadtbahn"
  },
  {
    name: "Linkenheim Rathaus (Ersatzhalt)",
    lat: 49.12315432,
    lon: 8.40832987,
    type: "bus"
  },
  {
    name: "Linkenheim Schulzentrum",
    lat: 49.12764559,
    lon: 8.41368383,
    type: "stadtbahn"
  },
  {
    name: "Hochstetten Grenzstraße",
    lat: 49.1298029,
    lon: 8.41602844,
    type: "stadtbahn"
  },
  {
    name: "Hochstetten Altenheim",
    lat: 49.13284767,
    lon: 8.41783405,
    type: "stadtbahn"
  },
  {
    name: "Hochstetten",
    lat: 49.13366467,
    lon: 8.41532775,
    type: "stadtbahn"
  },
  {
    name: "Hochstetten (Ersatzhalt)",
    lat: 49.13325323,
    lon: 8.41430367,
    type: "bus"
  },
  {
    name: "Ettlingen Neuwiesenreben",
    lat: 48.95315788,
    lon: 8.40073911,
    type: "stadtbahn"
  },
  {
    name: "Ettlingen Wasen",
    lat: 48.94557116,
    lon: 8.39868197,
    type: "stadtbahn"
  },
  {
    name: "Ettlingen Erbprinz/Schloss",
    lat: 48.94124043,
    lon: 8.40361372,
    type: "stadtbahn"
  },
  {
    name: "Ettlingen Erbprinz / Schloss",
    lat: 48.94055598,
    lon: 8.40444017,
    type: "bus"
  },
  {
    name: "Ettlingen Am Lindscharren",
    lat: 48.94771868,
    lon: 8.40832089,
    type: "bus"
  },
  {
    name: "Ettlingen Stadt",
    lat: 48.93877399,
    lon: 8.40889581,
    type: "stadtbahn"
  },
  {
    name: "Ettlingen Albgaubad",
    lat: 48.93688573,
    lon: 8.41509419,
    type: "stadtbahn"
  },
  {
    name: "Ettlingen Spinnerei",
    lat: 48.93473184,
    lon: 8.44172924,
    type: "stadtbahn"
  },
  {
    name: "Ettlingen Spinnerei (Ersatzhalt)",
    lat: 48.93486166,
    lon: 8.44097465,
    type: "bus"
  },
  {
    name: "Busenbach",
    lat: 48.92915489,
    lon: 8.45064951,
    type: "stadtbahn"
  },
  {
    name: "Busenbach Bahnhof",
    lat: 48.92952081,
    lon: 8.45111663,
    type: "bus"
  },
  {
    name: "Busenbach (Ersatzhalt)",
    lat: 48.92932605,
    lon: 8.45095493,
    type: "bus"
  },
  {
    name: "Ettlingen B.v.Suttner-Schule",
    lat: 48.940851,
    lon: 8.39789145,
    type: "bus"
  },
  {
    name: "Bretten Sporgasse",
    lat: 49.03728354,
    lon: 8.70797192,
    type: "bus"
  },
  {
    name: "Bretten Alte Post",
    lat: 49.037737,
    lon: 8.69968945,
    type: "bus"
  },
  {
    name: "Diedelsheim Eichholz",
    lat: 49.03960967,
    lon: 8.68504691,
    type: "bus"
  },
  {
    name: "Diedelsheim",
    lat: 49.039221,
    lon: 8.674557,
    type: "bahn"
  },
  {
    name: "Diedelsheim Rathaus",
    lat: 49.04067553,
    lon: 8.67754598,
    type: "bus"
  },
  {
    name: "Gondelsheim Marktplatz",
    lat: 49.05973348,
    lon: 8.65754948,
    type: "bus"
  },
  {
    name: "Gondelsheim Graf-Douglas-Str.",
    lat: 49.06318868,
    lon: 8.65716321,
    type: "bus"
  },
  {
    name: "Gondelsheim In den Buchen",
    lat: 49.06603742,
    lon: 8.65723507,
    type: "bus"
  },
  {
    name: "Heidelsheim Brettener Str.",
    lat: 49.09806274,
    lon: 8.64313152,
    type: "bus"
  },
  {
    name: "Heidelsheim Marktplatz",
    lat: 49.10153881,
    lon: 8.64366153,
    type: "bus"
  },
  {
    name: "Bruchsal Campus",
    lat: 49.11746323,
    lon: 8.59052618,
    type: "bus"
  },
  {
    name: "Bruchsal Württemberger Str.",
    lat: 49.1221549,
    lon: 8.6029409,
    type: "bus"
  },
  {
    name: "Bruchsal Bürgerpark",
    lat: 49.12401263,
    lon: 8.60110833,
    type: "bus"
  },
  {
    name: "Bruchsal Pfeilerstraße",
    lat: 49.12523541,
    lon: 8.59862898,
    type: "bus"
  },
  {
    name: "Bruchsal Friedrichsplatz",
    lat: 49.12456524,
    lon: 8.5955298,
    type: "bus"
  },
  {
    name: "Bruchsal Neutorstraße",
    lat: 49.12171397,
    lon: 8.59624845,
    type: "bus"
  },
  {
    name: "Bruchsal Silberhölle",
    lat: 49.11935641,
    lon: 8.59888051,
    type: "bus"
  },
  {
    name: "Bruchsal Rendezvous",
    lat: 49.12569394,
    lon: 8.59352655,
    type: "bus"
  },
  {
    name: "Bruchsal Weiherberg",
    lat: 49.1131004,
    lon: 8.58580104,
    type: "bus"
  },
  {
    name: "Bruchsal Weiherbergstraße",
    lat: 49.11325916,
    lon: 8.59038245,
    type: "bus"
  },
  {
    name: "Bruchsal Salinenstraße",
    lat: 49.12176689,
    lon: 8.59113703,
    type: "bus"
  },
  {
    name: "Bruchsal Liebigstraße",
    lat: 49.11395888,
    lon: 8.59494589,
    type: "bus"
  },
  {
    name: "Bruchsal Bahnhof/Hildastraße",
    lat: 49.12440651,
    lon: 8.59127178,
    type: "bus"
  },
  {
    name: "Bruchsal Damianstor",
    lat: 49.12962068,
    lon: 8.59959916,
    type: "bus"
  },
  {
    name: "Bruchsal Zickstraße",
    lat: 49.13220111,
    lon: 8.59670659,
    type: "bus"
  },
  {
    name: "Bruchsal Asamstraße",
    lat: 49.13306515,
    lon: 8.59975188,
    type: "bus"
  },
  {
    name: "Bruchsal Zaisental",
    lat: 49.13006154,
    lon: 8.60509685,
    type: "bus"
  },
  {
    name: "Bruchsal Schwimmbad",
    lat: 49.13305927,
    lon: 8.58829836,
    type: "bus"
  },
  {
    name: "Bruchsal Speyerer Straße",
    lat: 49.13160745,
    lon: 8.58360915,
    type: "bus"
  },
  {
    name: "Bruchsal Schwetzinger Str.",
    lat: 49.12777492,
    lon: 8.58584596,
    type: "bus"
  },
  {
    name: "Bruchsal Weidenbusch",
    lat: 49.12839802,
    lon: 8.58259406,
    type: "bus"
  },
  {
    name: "Bruchsal Auweg",
    lat: 49.12191386,
    lon: 8.61252592,
    type: "bus"
  },
  {
    name: "Bruchsal Lortzingstraße",
    lat: 49.12800417,
    lon: 8.60609398,
    type: "bus"
  },
  {
    name: "Helmsheim Dossentalstraße",
    lat: 49.08460321,
    lon: 8.6392508,
    type: "bus"
  },
  {
    name: "Obergrombach Untere Au",
    lat: 49.07818982,
    lon: 8.57618907,
    type: "bus"
  },
  {
    name: "Büchenau Im Grün",
    lat: 49.10431477,
    lon: 8.53036601,
    type: "bus"
  },
  {
    name: "Bruchsal Dittmannswiesen",
    lat: 49.1185627,
    lon: 8.56611895,
    type: "bus"
  },
  {
    name: "Bruchsal Beethovenstraße",
    lat: 49.12835099,
    lon: 8.60401888,
    type: "bus"
  },
  {
    name: "Bruchsal Schwabenbrücke",
    lat: 49.11766901,
    lon: 8.61728699,
    type: "bus"
  },
  {
    name: "Bruchsal Durlacher Straße",
    lat: 49.12039117,
    lon: 8.59354452,
    type: "bus"
  },
  {
    name: "Bruchsal Eggerten",
    lat: 49.11676944,
    lon: 8.59914102,
    type: "bus"
  },
  {
    name: "Bruchsal Industriestraße",
    lat: 49.12365991,
    lon: 8.57459007,
    type: "bus"
  },
  {
    name: "Bruchsal Augartenstraße",
    lat: 49.12248413,
    lon: 8.60830384,
    type: "bus"
  },
  {
    name: "Bruchsal Habichtweg",
    lat: 49.12316608,
    lon: 8.61230134,
    type: "bus"
  },
  {
    name: "Bruchsal Altenzentrum",
    lat: 49.12498263,
    lon: 8.6035787,
    type: "bus"
  },
  {
    name: "Bruchsal Krankenhaus",
    lat: 49.13317682,
    lon: 8.60382125,
    type: "bus"
  },
  {
    name: "Heidelsheim Malzfabrik",
    lat: 49.10347965,
    lon: 8.6409037,
    type: "bus"
  },
  {
    name: "Heidelsheim Schwimmbad",
    lat: 49.10587325,
    lon: 8.64036471,
    type: "bus"
  },
  {
    name: "Helmsheim Schlossbergring",
    lat: 49.08427374,
    lon: 8.63291768,
    type: "bus"
  },
  {
    name: "Untergrombach Mitte",
    lat: 49.0858093,
    lon: 8.55557273,
    type: "bus"
  },
  {
    name: "Untergrombach Wendelinusstr.",
    lat: 49.09200994,
    lon: 8.54596974,
    type: "bus"
  },
  {
    name: "Untergrombach Bahnhof West",
    lat: 49.08836848,
    lon: 8.54718247,
    type: "bus"
  },
  {
    name: "Bruchsal Südstadt",
    lat: 49.11950928,
    lon: 8.56873305,
    type: "bus"
  },
  {
    name: "Heidelsheim Pfälzer Str.",
    lat: 49.09985668,
    lon: 8.64376933,
    type: "bus"
  },
  {
    name: "Etzenrot",
    lat: 48.91409699,
    lon: 8.45765637,
    type: "stadtbahn"
  },
  {
    name: "Etzenrot (Ersatzhalt)",
    lat: 48.91462241,
    lon: 8.45841993,
    type: "bus"
  },
  {
    name: "Etzenrot Bahnhof",
    lat: 48.91449253,
    lon: 8.45816841,
    type: "bus"
  },
  {
    name: "Fischweier",
    lat: 48.88823827,
    lon: 8.45131426,
    type: "stadtbahn"
  },
  {
    name: "Fischweier (Ersatzhalt)",
    lat: 48.88876397,
    lon: 8.45133223,
    type: "bus"
  },
  {
    name: "Marxzell",
    lat: 48.86364267,
    lon: 8.44740659,
    type: "stadtbahn"
  },
  {
    name: "Marxzell Bahnhof",
    lat: 48.86326445,
    lon: 8.44758625,
    type: "bus"
  },
  {
    name: "Frauenalb - Schielberg",
    lat: 48.83743857,
    lon: 8.44048956,
    type: "stadtbahn"
  },
  {
    name: "Frauenalb - Schielberg (Ersatzhalt)",
    lat: 48.83707198,
    lon: 8.44082194,
    type: "bus"
  },
  {
    name: "Neuenbürg Raiffeisenbank",
    lat: 49.15437317,
    lon: 8.72190479,
    type: "bus"
  },
  {
    name: "Oberöwisheim Friedhof",
    lat: 49.14724017,
    lon: 8.6901224,
    type: "bus"
  },
  {
    name: "Oberacker Rathaus",
    lat: 49.10689064,
    lon: 8.71197841,
    type: "bus"
  },
  {
    name: "Bahnbrücken Rathaus",
    lat: 49.11823933,
    lon: 8.78589179,
    type: "bus"
  },
  {
    name: "Bahnbrücken Gochsheimer Str.",
    lat: 49.11591688,
    lon: 8.77836391,
    type: "bus"
  },
  {
    name: "Bahnbrücken Kindergarten",
    lat: 49.11852742,
    lon: 8.78207395,
    type: "bus"
  },
  {
    name: "Landshausen Röhrbrunnen",
    lat: 49.14832723,
    lon: 8.80906832,
    type: "bus"
  },
  {
    name: "Wössingen Grundschule",
    lat: 49.01187162,
    lon: 8.60986691,
    type: "bus"
  },
  {
    name: "Wössingen Durlacher Allee",
    lat: 49.01512394,
    lon: 8.60273428,
    type: "bus"
  },
  {
    name: "Weingarten Rathaus",
    lat: 49.05268695,
    lon: 8.53120144,
    type: "bus"
  },
  {
    name: "Reichenbach Kurpark",
    lat: 48.91910302,
    lon: 8.47252348,
    type: "stadtbahn"
  },
  {
    name: "Reichenbach (b. Ettlingen)",
    lat: 48.92019507,
    lon: 8.47917102,
    type: "stadtbahn"
  },
  {
    name: "Reichenbach (Ersatzhalt)",
    lat: 48.92121627,
    lon: 8.48018611,
    type: "bus"
  },
  {
    name: "Langensteinbach",
    lat: 48.91539577,
    lon: 8.50311112,
    type: "stadtbahn"
  },
  {
    name: "Langensteinbach Bahnhof",
    lat: 48.91559058,
    lon: 8.50331773,
    type: "stadtbahn"
  },
  {
    name: "Langensteinbach St. Barbara",
    lat: 48.90982848,
    lon: 8.49993108,
    type: "stadtbahn"
  },
  {
    name: "Spielberg (Baden)",
    lat: 48.89775305,
    lon: 8.47461656,
    type: "stadtbahn"
  },
  {
    name: "Spielberg (Ersatzhalt)",
    lat: 48.89911722,
    lon: 8.47371824,
    type: "bus"
  },
  {
    name: "Ittersbach Industrie",
    lat: 48.88474139,
    lon: 8.50896814,
    type: "stadtbahn"
  },
  {
    name: "Ittersbach",
    lat: 48.86917965,
    lon: 8.51102528,
    type: "stadtbahn"
  },
  {
    name: "Ittersbach Bahnhof",
    lat: 48.86884875,
    lon: 8.51082765,
    type: "bus"
  },
  {
    name: "Ittersbach Rathaus",
    lat: 48.86605373,
    lon: 8.5104773,
    type: "stadtbahn"
  },
  {
    name: "Neibsheim Kirche",
    lat: 49.06970405,
    lon: 8.68310655,
    type: "bus"
  },
  {
    name: "Neibsheim Große Gasse",
    lat: 49.07272308,
    lon: 8.68511878,
    type: "bus"
  },
  {
    name: "Büchig Teich/Wanne",
    lat: 49.07516524,
    lon: 8.70663343,
    type: "bus"
  },
  {
    name: "Büchig Hügellandstraße",
    lat: 49.0721699,
    lon: 8.712194,
    type: "bus"
  },
  {
    name: "Bretten Im Grüner",
    lat: 49.02990988,
    lon: 8.71738626,
    type: "bus"
  },
  {
    name: "Bretten Gymnasium",
    lat: 49.0358407,
    lon: 8.71135857,
    type: "bus"
  },
  {
    name: "Büchig Rathaus",
    lat: 49.0739942,
    lon: 8.71037941,
    type: "bus"
  },
  {
    name: "Bretten Anne-Frank-Str.",
    lat: 49.04029276,
    lon: 8.71654185,
    type: "bus"
  },
  {
    name: "Bretten Rechbergklinik",
    lat: 49.03351439,
    lon: 8.69562907,
    type: "bus"
  },
  {
    name: "Langensteinbach Schießhüttenäcker",
    lat: 48.92008292,
    lon: 8.49904175,
    type: "stadtbahn"
  },
  {
    name: "Neibsheim Fürthstraße",
    lat: 49.07582431,
    lon: 8.68739152,
    type: "bus"
  },
  {
    name: "Bretten Gölshäuser Lücke",
    lat: 49.03855556,
    lon: 8.71417928,
    type: "bus"
  },
  {
    name: "Bretten Jahnhalle",
    lat: 49.03720109,
    lon: 8.71202332,
    type: "bus"
  },
  {
    name: "Bretten Bernhardushaus",
    lat: 49.03835534,
    lon: 8.70903193,
    type: "bus"
  },
  {
    name: "Bretten Wilhelmstraße",
    lat: 49.03741899,
    lon: 8.69979725,
    type: "bus"
  },
  {
    name: "Bretten Virchowstraße",
    lat: 49.0326074,
    lon: 8.69975234,
    type: "bus"
  },
  {
    name: "Bretten Brunnenstube",
    lat: 49.039433,
    lon: 8.69562009,
    type: "bus"
  },
  {
    name: "Bretten Bismarckstraße",
    lat: 49.04124672,
    lon: 8.70039014,
    type: "bus"
  },
  {
    name: "Bretten Hausertalstraße",
    lat: 49.04104651,
    lon: 8.70435171,
    type: "bus"
  },
  {
    name: "Ittersbach Descostraße",
    lat: 48.88418021,
    lon: 8.5092017,
    type: "bus"
  },
  {
    name: "Bretten Friedhof",
    lat: 49.03883823,
    lon: 8.70779226,
    type: "bus"
  },
  {
    name: "Bretten Seniorenheim",
    lat: 49.03022794,
    lon: 8.7013693,
    type: "bus"
  },
  {
    name: "Bretten St. Johann",
    lat: 49.02781302,
    lon: 8.70069557,
    type: "bus"
  },
  {
    name: "Gölshausen Kirche",
    lat: 49.04568064,
    lon: 8.72116817,
    type: "bus"
  },
  {
    name: "Bretten Edisonstraße",
    lat: 49.03228347,
    lon: 8.6996625,
    type: "bus"
  },
  {
    name: "Gölshausen Im Schreiberle",
    lat: 49.05020247,
    lon: 8.72029681,
    type: "bus"
  },
  {
    name: "Gölshausen Auf dem Bergel",
    lat: 49.04257753,
    lon: 8.71855407,
    type: "bus"
  },
  {
    name: "Langensteinbach Draisstraße",
    lat: 48.92049612,
    lon: 8.50051499,
    type: "bus"
  },
  {
    name: "Großvillars Schule",
    lat: 49.04603981,
    lon: 8.76863515,
    type: "bus"
  },
  {
    name: "Flehingen Ortsmitte",
    lat: 49.08613289,
    lon: 8.77901968,
    type: "bus"
  },
  {
    name: "Flehingen Kraichtalstraße",
    lat: 49.08698595,
    lon: 8.77329741,
    type: "bus"
  },
  {
    name: "Bauerbach Schule",
    lat: 49.07312914,
    lon: 8.74388657,
    type: "bus"
  },
  {
    name: "Oberderdingen Allmend",
    lat: 49.07208751,
    lon: 8.79578224,
    type: "bus"
  },
  {
    name: "Oberderdingen Blanco Verwalt.",
    lat: 49.06742642,
    lon: 8.80324724,
    type: "bus"
  },
  {
    name: "Oberderdingen Kelterplatz",
    lat: 49.06857408,
    lon: 8.80645422,
    type: "bus"
  },
  {
    name: "Oberderdingen Langwiesenstr.",
    lat: 49.06682609,
    lon: 8.7944168,
    type: "bus"
  },
  {
    name: "Oberderdingen Ortsmitte",
    lat: 49.06445415,
    lon: 8.79800108,
    type: "bus"
  },
  {
    name: "Großvillars Kirche",
    lat: 49.04595738,
    lon: 8.77028805,
    type: "bus"
  },
  {
    name: "Bretten Schwarzerdhof",
    lat: 49.04780619,
    lon: 8.75468431,
    type: "bus"
  },
  {
    name: "Bretten Derdinger Str.",
    lat: 49.03370286,
    lon: 8.7174222,
    type: "bus"
  },
  {
    name: "Oberderdingen Freibad",
    lat: 49.05840313,
    lon: 8.79699496,
    type: "bus"
  },
  {
    name: "Sulzfeld Schule",
    lat: 49.10018017,
    lon: 8.86025433,
    type: "bus"
  },
  {
    name: "Sulzfeld Ortsmitte",
    lat: 49.10556156,
    lon: 8.85559207,
    type: "bus"
  },
  {
    name: "Sulzfeld Amalienhof",
    lat: 49.10006842,
    lon: 8.85640954,
    type: "bus"
  },
  {
    name: "Kürnbach Hessenstraße",
    lat: 49.0727937,
    lon: 8.84803724,
    type: "bus"
  },
  {
    name: "Kürnbach Ober-Tor-Platz",
    lat: 49.07674228,
    lon: 8.84421042,
    type: "bus"
  },
  {
    name: "Kürnbach Flehinger Str.",
    lat: 49.07890181,
    lon: 8.84037461,
    type: "bus"
  },
  {
    name: "Oberderdingen Schulzentrum",
    lat: 49.06498388,
    lon: 8.80754119,
    type: "bus"
  },
  {
    name: "Oberderdingen Blanco Werk III",
    lat: 49.06843283,
    lon: 8.80015703,
    type: "bus"
  },
  {
    name: "Zaisenhausen Kelter",
    lat: 49.10590265,
    lon: 8.81161954,
    type: "bus"
  },
  {
    name: "Zaisenhausen Kirche",
    lat: 49.10734346,
    lon: 8.81713519,
    type: "bus"
  },
  {
    name: "Ruit Ortsmitte",
    lat: 49.00779414,
    lon: 8.72421346,
    type: "bus"
  },
  {
    name: "Bretten Ruiter Str.",
    lat: 49.02567484,
    lon: 8.70868159,
    type: "bus"
  },
  {
    name: "Bretten Albert-Einstein-Str.",
    lat: 49.02564538,
    lon: 8.71364927,
    type: "bus"
  },
  {
    name: "Bretten Otto-Hahn-Str.",
    lat: 49.02859052,
    lon: 8.713263,
    type: "bus"
  },
  {
    name: "Diedelsheim Schule",
    lat: 49.04319581,
    lon: 8.68339401,
    type: "bus"
  },
  {
    name: "Rinklingen Jahnstraße",
    lat: 49.0362765,
    lon: 8.67611766,
    type: "bus"
  },
  {
    name: "Rinklingen Kirche",
    lat: 49.03476296,
    lon: 8.68206451,
    type: "bus"
  },
  {
    name: "Ruit Knittlinger Str.",
    lat: 49.00775878,
    lon: 8.72641433,
    type: "bus"
  },
  {
    name: "Ruit Höhenstraße",
    lat: 49.00714595,
    lon: 8.72980996,
    type: "bus"
  },
  {
    name: "Ruit An der Steige",
    lat: 49.01248439,
    lon: 8.72633348,
    type: "bus"
  },
  {
    name: "Diedelsheim Schubertstr.",
    lat: 49.04542156,
    lon: 8.68470555,
    type: "bus"
  },
  {
    name: "Diedelsheim Friedhof",
    lat: 49.04572185,
    lon: 8.6809506,
    type: "bus"
  },
  {
    name: "Diedelsheim J. S.-Bach-Str.",
    lat: 49.04353733,
    lon: 8.67834548,
    type: "bus"
  },
  {
    name: "Dürrenbüchig Ortsmitte",
    lat: 49.02109186,
    lon: 8.6474614,
    type: "bus"
  },
  {
    name: "Dürrenbüchig Siedlung",
    lat: 49.02238197,
    lon: 8.65097382,
    type: "bus"
  },
  {
    name: "Diedelsheim Ev. Kirche",
    lat: 49.04115839,
    lon: 8.68024093,
    type: "bus"
  },
  {
    name: "Diedelsheim Diedelsh. Höhe",
    lat: 49.04010432,
    lon: 8.68872102,
    type: "bus"
  },
  {
    name: "Rinklingen Saalbachstraße",
    lat: 49.03516343,
    lon: 8.68703219,
    type: "bus"
  },
  {
    name: "Mörsch Am Hang",
    lat: 48.95688592,
    lon: 8.28528763,
    type: "stadtbahn"
  },
  {
    name: "Mörsch Bach-West",
    lat: 48.95902116,
    lon: 8.28398507,
    type: "bus"
  },
  {
    name: "Berghausen Hummelberg",
    lat: 49.00979168,
    lon: 8.52690749,
    type: "stadtbahn",
    lines: ["S4"]
  },
  {
    name: "Jöhlingen West",
    lat: 49.0311762,
    lon: 8.56901153,
    type: ["stadtbahn", "bahn"],
    lines: ["S4", "RE45"]
  },
  {
    name: "Jöhlingen",
    lat: 49.02851984,
    lon: 8.57467092,
    type: "stadtbahn",
    lines: ["S4"]
  },
  {
    name: "Jöhlingen Bahnhofstraße",
    lat: 49.02906172,
    lon: 8.57603635,
    type: "bus"
  },
  {
    name: "Wössingen",
    lat: 49.01560116,
    lon: 8.60405481,
    type: ["stadtbahn"],
    lines: ["S4"]
  },
  {
    name: "Wössingen Ost",
    lat: 49.01607249,
    lon: 8.61065743,
    type: ["stadtbahn", "bahn"],
    lines: ["S4", "RE45"]
  },
  {
    name: "Dürrenbüchig",
    lat: 49.02398425,
    lon: 8.64818005,
    type: "stadtbahn",
    lines: ["S4"]
  },
  {
    name: "Dürrenbüchig (Ersatzhalt)",
    lat: 49.02487962,
    lon: 8.64673377,
    type: "bus"
  },
  {
    name: "Bretten-Rinklingen",
    lat: 49.03666518,
    lon: 8.67345865,
    type: "stadtbahn",
    lines: ["S4"]
  },
  {
    name: "Bretten",
    lat: 49.0370892,
    lon: 8.69351803,
    type: ["bahn", "stadtbahn", "bus"],
    lines: ["S4", "RE45", "MEX17C", "RE71"]
  },
  {
    name: "Bretten Bahnhof",
    lat: 49.03723643,
    lon: 8.69255683,
    type: ["bus", "stadtbahn", "bahn"]
  },
  {
    name: "Bretten Stadtmitte",
    lat: 49.03389721,
    lon: 8.70293237,
    type: ["stadtbahn", "bahn"],
    lines: ["S4", "RE45"]
  },
  {
    name: "Bretten Stadtmitte (Ersatzhalt)",
    lat: 49.03466873,
    lon: 8.70312102,
    type: "bus"
  },
  {
    name: "Bretten Wannenweg",
    lat: 49.0304223,
    lon: 8.70939126,
    type: "stadtbahn",
    lines: ["S4"]
  },
  {
    name: "Bretten Schulzentrum",
    lat: 49.0318653,
    lon: 8.71849119,
    type: ["stadtbahn", "bahn"],
    lines: ["S4", "RE45"]
  },
  {
    name: "Bretten Kupferhälde",
    lat: 49.03710098,
    lon: 8.72369244,
    type: "stadtbahn",
    lines: ["S4"]
  },
  {
    name: "Gölshausen",
    lat: 49.04463844,
    lon: 8.72433024,
    type: ["stadtbahn", "bahn"],
    lines: ["S4", "RE45"]
  },
  {
    name: "Gölshausen Steinäcker (Ersatzhalt)",
    lat: 49.04763544,
    lon: 8.73200185,
    type: "bus"
  },
  {
    name: "Oberderdingen-Flehingen",
    lat: 49.08394426,
    lon: 8.77504014,
    type: ["stadtbahn", "bahn"],
    lines: ["S4", "RE45"]
  },
  {
    name: "Berghausen Pfinzbrücke",
    lat: 49.00649187,
    lon: 8.52086183,
    type: "stadtbahn",
    lines: ["S5", "S51"]
  },
  {
    name: "Söllingen Reetzstraße",
    lat: 48.99050238,
    lon: 8.54102002,
    type: "stadtbahn",
    lines: ["S5", "S51"]
  },
  {
    name: "Söllingen (b. Karlsruhe)",
    lat: 48.98826827,
    lon: 8.54301428,
    type: "stadtbahn",
    lines: ["S5", "S51"]
  },
  {
    name: "Kleinsteinbach",
    lat: 48.96680634,
    lon: 8.55490798,
    type: "stadtbahn"
  },
  {
    name: "Kleinsteinbach Bahnhof",
    lat: 48.96654096,
    lon: 8.55536612,
    type: "bus"
  },
  {
    name: "Söllingen Kapellenstraße",
    lat: 48.98369954,
    lon: 8.54997623,
    type: "stadtbahn"
  },
  {
    name: "Berghausen Am Stadion",
    lat: 49.00259074,
    lon: 8.53601641,
    type: "stadtbahn"
  },
  {
    name: "Forchheim (b Karlsruhe)",
    lat: 48.96445322,
    lon: 8.3380906,
    type: "stadtbahn"
  },
  {
    name: "Helmsheim Bahnhof",
    lat: 49.08602699,
    lon: 8.6515667,
    type: "bahn"
  },
  {
    name: "Gondelsheim Bahnhof",
    lat: 49.05961575,
    lon: 8.66042409,
    type: "bahn"
  },
  {
    name: "Ettlingen West",
    lat: 48.9474709,
    lon: 8.38795608,
    type: "bus"
  },
  {
    name: "Ettlingen West (Ersatzhalt)",
    lat: 48.94775998,
    lon: 8.38830643,
    type: "bus"
  },
  {
    name: "Ettlingen Westbahnhof",
    lat: 48.9475181,
    lon: 8.38845016,
    type: "bus"
  },
  {
    name: "Bruchhausen (b. Ettlingen)",
    lat: 48.92439187,
    lon: 8.37448135,
    type: "bus"
  },
  {
    name: "Weingarten (Baden)",
    lat: 49.05922724,
    lon: 8.52139184,
    type: "bus"
  },
  {
    name: "Weingarten Bahnhof",
    lat: 49.05880342,
    lon: 8.52206557,
    type: "bus"
  },
  {
    name: "Untergrombach",
    lat: 49.08767428,
    lon: 8.54839519,
    type: "bus"
  },
  {
    name: "Untergrombach Bahnhof",
    lat: 49.08748602,
    lon: 8.54791909,
    type: "bus"
  },
  {
    name: "Bruchsal Gew. Bildungszentrum",
    lat: 49.11077771,
    lon: 8.57503024,
    type: "bus"
  },
  {
    name: "Bruchsal Gew. Bildungsz. (GBZ)",
    lat: 49.11018379,
    lon: 8.57618008,
    type: "bus"
  },
  {
    name: "Bruchsal",
    lat: 49.12504141,
    lon: 8.5903555,
    type: "bus"
  },
  {
    name: "Bruchsal Bahnhof",
    lat: 49.12485329,
    lon: 8.59073279,
    type: ["stadtbahn", "bahn", "bus"]
  },
  {
    name: "Bruchsal Schlossgarten",
    lat: 49.13120187,
    lon: 8.59395774,
    type: "stadtbahn"
  },
  {
    name: "Bruchsal Schlossgarten (Ersatzhalt)",
    lat: 49.13057881,
    lon: 8.59403859,
    type: "bus"
  },
  {
    name: "Bruchsal Stegwiesen",
    lat: 49.1366563,
    lon: 8.59832356,
    type: "stadtbahn"
  },
  {
    name: "Bad Schönborn-Kronau",
    lat: 49.21934537,
    lon: 8.64717394,
    type: "bus"
  },
  {
    name: "Büchig",
    lat: 49.0475589,
    lon: 8.46106996,
    type: "stadtbahn"
  },
  {
    name: "Blankenloch Süd",
    lat: 49.05701977,
    lon: 8.46676528,
    type: "stadtbahn"
  },
  {
    name: "Blankenloch Mühlenweg",
    lat: 49.06860939,
    lon: 8.47432011,
    type: "stadtbahn"
  },
  {
    name: "Forst Buntstift",
    lat: 49.14697575,
    lon: 8.58797496,
    type: "bus"
  },
  {
    name: "Forst Weiherer Straße",
    lat: 49.15424979,
    lon: 8.59001414,
    type: "bus"
  },
  {
    name: "Berghausen Georgstraße",
    lat: 49.00444116,
    lon: 8.52016114,
    type: "bus"
  },
  {
    name: "Berghausen Kirche",
    lat: 49.00426437,
    lon: 8.52757224,
    type: "bus"
  },
  {
    name: "Berghausen (Baden)",
    lat: 49.0058967,
    lon: 8.53006058,
    type: "stadtbahn"
  },
  {
    name: "Berghausen Bahnhof",
    lat: 49.00539581,
    lon: 8.53175839,
    type: "bus"
  },
  {
    name: "Wöschbach Im Saalbrett",
    lat: 49.00537224,
    lon: 8.56407978,
    type: "bus"
  },
  {
    name: "Wöschbach Friedenstraße",
    lat: 49.00240216,
    lon: 8.56634353,
    type: "bus"
  },
  {
    name: "Wöschbach Rathaus",
    lat: 48.99947905,
    lon: 8.56748439,
    type: "bus"
  },
  {
    name: "Wöschbach Steinstraße",
    lat: 48.9971923,
    lon: 8.57071833,
    type: "bus"
  },
  {
    name: "Wöschbach Schützenhaus",
    lat: 48.99593691,
    lon: 8.5731348,
    type: "bus"
  },
  {
    name: "Forchheim Leichtsandstr./Messe KA",
    lat: 48.98187783,
    lon: 8.32296297,
    type: "stadtbahn"
  },
  {
    name: "Forchheim Hallenbad",
    lat: 48.97821062,
    lon: 8.31645019,
    type: "stadtbahn"
  },
  {
    name: "Forchheim Hauptstraße",
    lat: 48.97470824,
    lon: 8.31216522,
    type: "stadtbahn"
  },
  {
    name: "Forchheim Oberfeldstraße",
    lat: 48.96998494,
    lon: 8.30755687,
    type: "stadtbahn"
  },
  {
    name: "Mörsch Rösselsbrünnle",
    lat: 48.96746095,
    lon: 8.30488887,
    type: "stadtbahn"
  },
  {
    name: "Forchheim Messe Nord",
    lat: 48.98406506,
    lon: 8.33326665,
    type: "bus"
  },
  {
    name: "Mörsch Narzissenstraße",
    lat: 48.96566813,
    lon: 8.30177172,
    type: "stadtbahn"
  },
  {
    name: "Mörsch Römerstraße",
    lat: 48.96112681,
    lon: 8.29715437,
    type: "stadtbahn"
  },
  {
    name: "Mörsch Rheinaustraße",
    lat: 48.95824257,
    lon: 8.29414502,
    type: "stadtbahn"
  },
  {
    name: "Mörsch Merkurstraße",
    lat: 48.95283933,
    lon: 8.2907943,
    type: "stadtbahn"
  },
  {
    name: "Söllingen Rathaus",
    lat: 48.98631704,
    lon: 8.54103799,
    type: "bus"
  },
  {
    name: "Mörsch Hertzstraße",
    lat: 48.96434706,
    lon: 8.28111046,
    type: "bus"
  },
  {
    name: "Söllingen Leerdamplatz",
    lat: 48.98470175,
    lon: 8.54530499,
    type: "bus"
  },
  {
    name: "Mutschelbach Sonnenberg",
    lat: 48.94872162,
    lon: 8.53487555,
    type: "bus"
  },
  {
    name: "Mutschelbach Rathaus",
    lat: 48.94391916,
    lon: 8.53419283,
    type: "bus"
  },
  {
    name: "Mutschelbach Wiesenstraße",
    lat: 48.93997183,
    lon: 8.53164161,
    type: "bus"
  },
  {
    name: "Mutschelbach Baum",
    lat: 48.93271949,
    lon: 8.53364486,
    type: "bus"
  },
  {
    name: "Kleinsteinbach Bockstalstraße",
    lat: 48.96378088,
    lon: 8.54557448,
    type: "bus"
  },
  {
    name: "Mutschelbach Altes Schulhaus",
    lat: 48.93458431,
    lon: 8.53454317,
    type: "bus"
  },
  {
    name: "Forchheim Messering Mitte",
    lat: 48.97974946,
    lon: 8.33714737,
    type: "bus"
  },
  {
    name: "Kleinsteinbach Abzw. Bahnhof",
    lat: 48.96693018,
    lon: 8.55387492,
    type: "bus"
  },
  {
    name: "Kleinsteinbach Hammerwerk",
    lat: 48.97108178,
    lon: 8.54910486,
    type: "bus"
  },
  {
    name: "Forchheim Messering Süd",
    lat: 48.97689578,
    lon: 8.33584481,
    type: "bus"
  },
  {
    name: "Mörsch Rastatter Straße",
    lat: 48.95988231,
    lon: 8.28971632,
    type: "bus"
  },
  {
    name: "Jöhlingen Weingartener Str.",
    lat: 49.0343507,
    lon: 8.56937984,
    type: "bus"
  },
  {
    name: "Jöhlingen Hirtenbrunnen",
    lat: 49.0301337,
    lon: 8.57699755,
    type: "bus"
  },
  {
    name: "Jöhlingen B293",
    lat: 49.02774234,
    lon: 8.5770784,
    type: "bus"
  },
  {
    name: "Jöhlingen Kirchplatz",
    lat: 49.03284299,
    lon: 8.57343124,
    type: "bus"
  },
  {
    name: "KIT-Campus Nord H6 Gebäude 605",
    lat: 49.09733927,
    lon: 8.43180285,
    type: "bus"
  },
  {
    name: "KIT-Campus Nord H9 Nordtor",
    lat: 49.11025436,
    lon: 8.43676155,
    type: "bus"
  },
  {
    name: "KIT-Campus Nord H14 Stadtbahnhaltestelle",
    lat: 49.09758043,
    lon: 8.4312998,
    type: "bus"
  },
  {
    name: "KIT-Campus Nord H12 Grabener Str.",
    lat: 49.10139177,
    lon: 8.43288083,
    type: "bus"
  },
  {
    name: "KIT-Campus Nord H2 FIZ",
    lat: 49.09314526,
    lon: 8.42974571,
    type: "bus"
  },
  {
    name: "KIT-Campus Nord H7 Grabener Str.",
    lat: 49.10133884,
    lon: 8.43322219,
    type: "bus"
  },
  {
    name: "KIT-Campus Nord H8 Liedolsheimer Str.",
    lat: 49.10338555,
    lon: 8.43405762,
    type: "bus"
  },
  {
    name: "KIT-Campus Nord H10 Leop.Allee",
    lat: 49.1040266,
    lon: 8.43397678,
    type: "bus"
  },
  {
    name: "KIT-Campus Nord H5 Karlsruher Allee",
    lat: 49.09515114,
    lon: 8.43066199,
    type: "bus"
  },
  {
    name: "Weingarten Bruchsaler Str.",
    lat: 49.05470623,
    lon: 8.5317045,
    type: "bus"
  },
  {
    name: "Ubstadt Ort",
    lat: 49.15662919,
    lon: 8.62524607,
    type: "bus"
  },
  {
    name: "Stettfeld (Baden)",
    lat: 49.17911329,
    lon: 8.64417357,
    type: "bus"
  },
  {
    name: "Stettfeld Bahnhof",
    lat: 49.17884904,
    lon: 8.64316746,
    type: "bus"
  },
  {
    name: "Zeutern",
    lat: 49.17800929,
    lon: 8.67795022,
    type: "bus"
  },
  {
    name: "Odenheim West",
    lat: 49.18227246,
    lon: 8.73643953,
    type: "bus"
  },
  {
    name: "Odenheim",
    lat: 49.17912503,
    lon: 8.74594371,
    type: "bus"
  },
  {
    name: "Odenheim Bahnhof",
    lat: 49.17920137,
    lon: 8.74612337,
    type: "bus"
  },
  {
    name: "Oberöwisheim Feuerwehrhaus",
    lat: 49.1505894,
    lon: 8.69205377,
    type: "bus"
  },
  {
    name: "Oberöwisheim Schule",
    lat: 49.15061878,
    lon: 8.68913425,
    type: "bus"
  },
  {
    name: "Weingarten Rudolf-Diesel-Str.",
    lat: 49.05730822,
    lon: 8.51931673,
    type: "bus"
  },
  {
    name: "Ubstadt Rathaus",
    lat: 49.15855025,
    lon: 8.63072579,
    type: "bus"
  },
  {
    name: "Ubstadt Stettfelder Str.",
    lat: 49.16233929,
    lon: 8.63307937,
    type: "bus"
  },
  {
    name: "Zeutern Abzw. Östringen",
    lat: 49.17782725,
    lon: 8.67613563,
    type: "bus"
  },
  {
    name: "Zeutern Ost",
    lat: 49.17903108,
    lon: 8.70319288,
    type: "bus"
  },
  {
    name: "Odenheim Felsenkeller",
    lat: 49.18208456,
    lon: 8.73734683,
    type: "bus"
  },
  {
    name: "Odenheim Kirchstraße",
    lat: 49.1773046,
    lon: 8.75006697,
    type: "bus"
  },
  {
    name: "Ubstadt Salzbrunnenstraße",
    lat: 49.15501356,
    lon: 8.63333989,
    type: "bus"
  },
  {
    name: "Ubstadt Salzbrunnenstr. (Ersatzhalt)",
    lat: 49.15530731,
    lon: 8.63019578,
    type: "bus"
  },
  {
    name: "Unteröwisheim Martin-Luther-Straße",
    lat: 49.14647628,
    lon: 8.66218479,
    type: "bus"
  },
  {
    name: "Unteröwisheim",
    lat: 49.14634701,
    lon: 8.66917368,
    type: "bus"
  },
  {
    name: "Oberöwisheim",
    lat: 49.14008852,
    lon: 8.68641235,
    type: "bus"
  },
  {
    name: "Oberöwisheim Bahnhof",
    lat: 49.14006501,
    lon: 8.68696931,
    type: "bus"
  },
  {
    name: "Münzesheim",
    lat: 49.12591145,
    lon: 8.71619151,
    type: "bus"
  },
  {
    name: "Münzesheim Bahnhof",
    lat: 49.12610544,
    lon: 8.71547285,
    type: "bus"
  },
  {
    name: "Münzesheim Ost",
    lat: 49.12140826,
    lon: 8.7263784,
    type: "bus"
  },
  {
    name: "Gochsheim (Baden)",
    lat: 49.10945461,
    lon: 8.74443454,
    type: "bus"
  },
  {
    name: "Gochsheim Bahnhof",
    lat: 49.10962515,
    lon: 8.74353622,
    type: "bus"
  },
  {
    name: "Gochsheim (Ersatzhalt)",
    lat: 49.10816676,
    lon: 8.74291638,
    type: "bus"
  },
  {
    name: "Bahnbrücken",
    lat: 49.11941521,
    lon: 8.76490714,
    type: "bus"
  },
  {
    name: "Bahnbrücken Bahnhof",
    lat: 49.119133,
    lon: 8.76486223,
    type: "bus"
  },
  {
    name: "Bahnbrücken (Ersatzhalt)",
    lat: 49.1187038,
    lon: 8.76694632,
    type: "bus"
  },
  {
    name: "Menzingen (Baden)",
    lat: 49.13608032,
    lon: 8.7751659,
    type: "bus"
  },
  {
    name: "Menzingen Bahnhof",
    lat: 49.13630366,
    lon: 8.77506709,
    type: "bus"
  },
  {
    name: "Blankenloch Tolna-Platz",
    lat: 49.060069,
    lon: 8.46922667,
    type: "stadtbahn"
  },
  {
    name: "Blankenloch Kirche",
    lat: 49.06448358,
    lon: 8.47131974,
    type: "stadtbahn"
  },
  {
    name: "Blankenloch Nord",
    lat: 49.07326449,
    lon: 8.46787021,
    type: "stadtbahn"
  },
  {
    name: "Blankenloch Schloss Stutensee",
    lat: 49.08973921,
    lon: 8.4824319,
    type: "bus"
  },
  {
    name: "Staffort Weingartener Straße",
    lat: 49.09081576,
    lon: 8.51042341,
    type: "bus"
  },
  {
    name: "Staffort Zollhausstraße",
    lat: 49.09326291,
    lon: 8.51632534,
    type: "bus"
  },
  {
    name: "Staffort Blankenlocher Straße",
    lat: 49.09387468,
    lon: 8.51007306,
    type: "bus"
  },
  {
    name: "Spöck Nord",
    lat: 49.11598156,
    lon: 8.51469939,
    type: "bus"
  },
  {
    name: "Neuthard Süd",
    lat: 49.1246593,
    lon: 8.51861604,
    type: "bus"
  },
  {
    name: "Neuthard Mitte",
    lat: 49.12701073,
    lon: 8.51958622,
    type: "bus"
  },
  {
    name: "Neuthard Nord",
    lat: 49.13340017,
    lon: 8.52426644,
    type: "bus"
  },
  {
    name: "Karlsdorf Rathaus",
    lat: 49.1360862,
    lon: 8.54479295,
    type: "bus"
  },
  {
    name: "Karlsdorf Turnhalle (Ersatzhalt)",
    lat: 49.13365879,
    lon: 8.54611347,
    type: "bus"
  },
  {
    name: "Spöck Hochhaus",
    lat: 49.11148335,
    lon: 8.50020058,
    type: "stadtbahn"
  },
  {
    name: "Spöck Siedlungstraße",
    lat: 49.11725156,
    lon: 8.50788117,
    type: "bus"
  },
  {
    name: "Spöck Albert-Schweitzer-Straße",
    lat: 49.1157934,
    lon: 8.51219309,
    type: "bus"
  },
  {
    name: "Spöck Kirche",
    lat: 49.11061894,
    lon: 8.51437599,
    type: "bus"
  },
  {
    name: "Neuthard Büchenauer Str.",
    lat: 49.12236655,
    lon: 8.52256863,
    type: "bus"
  },
  {
    name: "Mörsch Leisbuckel",
    lat: 48.96189356,
    lon: 8.30273291,
    type: "bus"
  },
  {
    name: "Flehingen",
    lat: 49.08455614,
    lon: 8.78228056,
    type: "bus"
  },
  {
    name: "Flehingen Bahnhof",
    lat: 49.08490915,
    lon: 8.78354719,
    type: "bus"
  },
  {
    name: "Flehingen (Ersatzhalt)",
    lat: 49.08411488,
    lon: 8.7838077,
    type: "bus"
  },
  {
    name: "Sulzfeld (Baden)",
    lat: 49.1079433,
    lon: 8.85334628,
    type: "bus"
  },
  {
    name: "Sulzfeld Bahnhof",
    lat: 49.10807267,
    lon: 8.85270848,
    type: "bus"
  },
  {
    name: "Blankenloch Schulzentrum",
    lat: 49.06733813,
    lon: 8.47573047,
    type: "bus"
  },
  {
    name: "Blankenloch Rathaus",
    lat: 49.06686729,
    lon: 8.46972972,
    type: "bus"
  },
  {
    name: "Blankenloch Bahnhof",
    lat: 49.06631405,
    lon: 8.46513035,
    type: ["sbahn", "bahn"]
  },
  {
    name: "Karlsdorf Kirche",
    lat: 49.13630366,
    lon: 8.5374627,
    type: "bus"
  },
  {
    name: "Neudorf Amalienstraße",
    lat: 49.1699576,
    lon: 8.49376864,
    type: "bus"
  },
  {
    name: "Weingarten Walzbachhalle",
    lat: 49.04974913,
    lon: 8.52015216,
    type: "bus"
  },
  {
    name: "Weingarten Waldbrücke",
    lat: 49.06628462,
    lon: 8.5140526,
    type: "bus"
  },
  {
    name: "Weingarten Uhlandplatz",
    lat: 49.05347583,
    lon: 8.51716975,
    type: "bus"
  },
  {
    name: "Weingarten Tabakschopf",
    lat: 49.04750002,
    lon: 8.52627867,
    type: "bus"
  },
  {
    name: "Weingarten Luisenstraße",
    lat: 49.05545976,
    lon: 8.53040194,
    type: "bus"
  },
  {
    name: "Weingarten Liverdunplatz",
    lat: 49.05384084,
    lon: 8.53707642,
    type: "bus"
  },
  {
    name: "Weingarten Kirche",
    lat: 49.0508972,
    lon: 8.53189314,
    type: "bus"
  },
  {
    name: "Weingarten Jöhlinger Straße",
    lat: 49.05215709,
    lon: 8.53607031,
    type: "bus"
  },
  {
    name: "Weingarten Burgstraße",
    lat: 49.05727879,
    lon: 8.52540731,
    type: "bus"
  },
  {
    name: "Weingarten Bahnhof West",
    lat: 49.05918015,
    lon: 8.52112234,
    type: "bus"
  },
  {
    name: "Weingarten Bahnhof Ost",
    lat: 49.0577144,
    lon: 8.52167031,
    type: "bus"
  },
  {
    name: "Weiher Unterdorf",
    lat: 49.18372867,
    lon: 8.62615336,
    type: "bus"
  },
  {
    name: "Weiher Ortsmitte",
    lat: 49.17866112,
    lon: 8.62191332,
    type: "bus"
  },
  {
    name: "Weiher Oberdorf",
    lat: 49.17525507,
    lon: 8.61663122,
    type: "bus"
  },
  {
    name: "Weiher Heerstraße",
    lat: 49.18143278,
    lon: 8.61864345,
    type: "bus"
  },
  {
    name: "Ubstadt Schulzentrum",
    lat: 49.16310293,
    lon: 8.63135461,
    type: "bus"
  },
  {
    name: "Hambrücken Bastwald",
    lat: 49.19172529,
    lon: 8.54640992,
    type: "bus"
  },
  {
    name: "Hambrücken Schule",
    lat: 49.18351141,
    lon: 8.54267292,
    type: "bus"
  },
  {
    name: "Untergrombach Steigweg",
    lat: 49.08410311,
    lon: 8.56028889,
    type: "bus"
  },
  {
    name: "Untergrombach Joß-Fritz-Schule",
    lat: 49.09060986,
    lon: 8.54864672,
    type: "bus"
  },
  {
    name: "Untergrombach Im Sand",
    lat: 49.09088047,
    lon: 8.54219682,
    type: "bus"
  },
  {
    name: "Untergrombach Evang.Kirche",
    lat: 49.08950977,
    lon: 8.55599494,
    type: "bus"
  },
  {
    name: "Untergrombach Bruchsaler Str.",
    lat: 49.08699184,
    lon: 8.55354254,
    type: "bus"
  },
  {
    name: "Untergrombach Bahnhof Ost",
    lat: 49.08660943,
    lon: 8.54962589,
    type: "bus"
  },
  {
    name: "Obergrombach Kirche",
    lat: 49.07688351,
    lon: 8.58636698,
    type: "bus"
  },
  {
    name: "Obergrombach Friedhof",
    lat: 49.07831339,
    lon: 8.5886487,
    type: "bus"
  },
  {
    name: "Obergrombach Alter Kindergar.",
    lat: 49.07749548,
    lon: 8.57990809,
    type: "bus"
  },
  {
    name: "Helmsheim Verwaltungsstelle",
    lat: 49.08498563,
    lon: 8.64290694,
    type: "bus"
  },
  {
    name: "Helmsheim Kurpfalzstraße",
    lat: 49.08696242,
    lon: 8.64742547,
    type: "bus"
  },
  {
    name: "Büchenau Verwaltungsstelle",
    lat: 49.0983686,
    lon: 8.52776987,
    type: "bus"
  },
  {
    name: "Büchenau Schule",
    lat: 49.10146235,
    lon: 8.53071635,
    type: "bus"
  },
  {
    name: "Büchenau Pfarrzentrum",
    lat: 49.09743926,
    lon: 8.5291982,
    type: "bus"
  },
  {
    name: "Büchenau Mehrzweckhalle (Ersatz)",
    lat: 49.09472173,
    lon: 8.53024024,
    type: "bus"
  },
  {
    name: "Bruchsal Im Wendelrot",
    lat: 49.13663867,
    lon: 8.5697212,
    type: "bus"
  },
  {
    name: "Bruchsal Steinackerstr.",
    lat: 49.11458804,
    lon: 8.58576511,
    type: "bus"
  },
  {
    name: "Bruchsal Friedhof",
    lat: 49.11854506,
    lon: 8.6004885,
    type: "bus"
  },
  {
    name: "Bruchsal Siemens Wohnheim",
    lat: 49.11455864,
    lon: 8.57353904,
    type: "bus"
  },
  {
    name: "Spöck Richard-Hecht-Schule",
    lat: 49.11281227,
    lon: 8.50511436,
    type: "stadtbahn"
  },
  {
    name: "Bruchsal SEW",
    lat: 49.12319548,
    lon: 8.57565906,
    type: "bus"
  },
  {
    name: "Bruchsal P.-Gerhardt-Str.",
    lat: 49.11838043,
    lon: 8.57595551,
    type: "bus"
  },
  {
    name: "Bruchsal Stadtwerke",
    lat: 49.12421251,
    lon: 8.58403136,
    type: "bus"
  },
  {
    name: "Bruchsal Linkenheimer Weg",
    lat: 49.1277514,
    lon: 8.56967628,
    type: "bus"
  },
  {
    name: "Bruchsal Kändelweg",
    lat: 49.13284767,
    lon: 8.55534815,
    type: "bus"
  },
  {
    name: "Bruchsal Kübelmarkt",
    lat: 49.12268401,
    lon: 8.59840441,
    type: "bus"
  },
  {
    name: "Bruchsal Mozartweg",
    lat: 49.13244798,
    lon: 8.60658806,
    type: "bus"
  },
  {
    name: "Bruchsal Karlsruher Str.",
    lat: 49.11769841,
    lon: 8.58758869,
    type: "bus"
  },
  {
    name: "Bruchsal Kaiserstraße",
    lat: 49.12607017,
    lon: 8.59607777,
    type: "bus"
  },
  {
    name: "Bruchsal J.-Knecht-Gymnasium",
    lat: 49.12013248,
    lon: 8.58985244,
    type: "bus"
  },
  {
    name: "Bruchsal Josef-Heid-Str.",
    lat: 49.11644017,
    lon: 8.56864322,
    type: "bus"
  },
  {
    name: "Bruchsal Industriestr./L558",
    lat: 49.12487681,
    lon: 8.57396125,
    type: "bus"
  },
  {
    name: "Bruchsal Hochstraße",
    lat: 49.12022655,
    lon: 8.59663472,
    type: "bus"
  },
  {
    name: "Bruchsal Hans-Thoma-Str.",
    lat: 49.1239656,
    lon: 8.60678569,
    type: "bus"
  },
  {
    name: "Bruchsal Germersheimer Str.",
    lat: 49.1307669,
    lon: 8.58660054,
    type: "bus"
  },
  {
    name: "Bruchsal Flüsselweg",
    lat: 49.11636962,
    lon: 8.59081364,
    type: "bus"
  },
  {
    name: "Bruchsal Flugplatz",
    lat: 49.13019086,
    lon: 8.5669454,
    type: "bus"
  },
  {
    name: "Bruchsal Florian-Geyer-Str.",
    lat: 49.11481147,
    lon: 8.57114054,
    type: "bus"
  },
  {
    name: "Bruchsal Eisweiher",
    lat: 49.11641078,
    lon: 8.57556025,
    type: "bus"
  },
  {
    name: "Bruchsal Bahnstadt",
    lat: 49.12413021,
    lon: 8.58797496,
    type: "bus"
  },
  {
    name: "Bruchsal Ernst-Blickle-Str.",
    lat: 49.12023243,
    lon: 8.58000691,
    type: "bus"
  },
  {
    name: "Bruchsal Drosselweg",
    lat: 49.12584678,
    lon: 8.61328949,
    type: "bus"
  },
  {
    name: "Bruchsal Bussardweg",
    lat: 49.12421251,
    lon: 8.61271457,
    type: "bus"
  },
  {
    name: "Bruchsal Eichenweg",
    lat: 49.11353552,
    lon: 8.56852644,
    type: "bus"
  },
  {
    name: "Bruchsal Bergstraße",
    lat: 49.12036177,
    lon: 8.61241812,
    type: "bus"
  },
  {
    name: "Bruchsal Augsteiner",
    lat: 49.12763384,
    lon: 8.60990284,
    type: "bus"
  },
  {
    name: "Bruchsal Ärztehaus Südstadt",
    lat: 49.11286519,
    lon: 8.56957747,
    type: "bus"
  },
  {
    name: "Bruchsal Adolf-Bieringer-Str.",
    lat: 49.12665214,
    lon: 8.60977708,
    type: "bus"
  },
  {
    name: "Blankenloch Stutensee-Center",
    lat: 49.08048462,
    lon: 8.45996504,
    type: "bus"
  },
  {
    name: "Rheinhausen Ostenstraße",
    lat: 49.27792088,
    lon: 8.47349366,
    type: "bus"
  },
  {
    name: "Oberhausen Kirchplatz",
    lat: 49.26115694,
    lon: 8.48240495,
    type: "bus"
  },
  {
    name: "Oberhausen Schule",
    lat: 49.25558723,
    lon: 8.49255592,
    type: "bus"
  },
  {
    name: "Oberhausen Weiherweg",
    lat: 49.26618086,
    lon: 8.47882966,
    type: "bus"
  },
  {
    name: "Waghäusel Haslacher Straße",
    lat: 49.24836913,
    lon: 8.51566058,
    type: "bus"
  },
  {
    name: "Waghäusel Bahnhof",
    lat: 49.24758335,
    lon: 8.50828542,
    type: "bus"
  },
  {
    name: "Waghäusel Rathaus",
    lat: 49.24766544,
    lon: 8.51876876,
    type: "bus"
  },
  {
    name: "Waghäusel Verteilerzentrum",
    lat: 49.24683273,
    lon: 8.50247332,
    type: "bus"
  },
  {
    name: "Wiesental Einkaufszentrum",
    lat: 49.2125973,
    lon: 8.52899158,
    type: "bus"
  },
  {
    name: "Wiesental Karlsruher Straße",
    lat: 49.22364604,
    lon: 8.52182303,
    type: "bus"
  },
  {
    name: "Wiesental Marktplatz",
    lat: 49.22607491,
    lon: 8.51851723,
    type: "bus"
  },
  {
    name: "Wiesental Mannheimer Straße",
    lat: 49.23211722,
    lon: 8.51356751,
    type: "bus"
  },
  {
    name: "Wiesental Weinbrennerstraße",
    lat: 49.23885089,
    lon: 8.50857288,
    type: "bus"
  },
  {
    name: "Wiesental Friedhof",
    lat: 49.22765889,
    lon: 8.51240868,
    type: "bus"
  },
  {
    name: "Kirrlach Waldpark",
    lat: 49.24509103,
    lon: 8.53742676,
    type: "bus"
  },
  {
    name: "Kirrlach Schillerschule",
    lat: 49.23888608,
    lon: 8.54473905,
    type: "bus"
  },
  {
    name: "Kirrlach Kreuzstraße",
    lat: 49.24116171,
    lon: 8.55169201,
    type: "bus"
  },
  {
    name: "Eichelberg Brunnen",
    lat: 49.18895421,
    lon: 8.81311074,
    type: "bus"
  },
  {
    name: "Östringen Mühlhausener Straße",
    lat: 49.22430901,
    lon: 8.7203507,
    type: "bus"
  },
  {
    name: "Kirrlach Am Kreuz",
    lat: 49.24191241,
    lon: 8.54895215,
    type: "bus"
  },
  {
    name: "Wiesental Vollmerseckstraße",
    lat: 49.23580677,
    lon: 8.51051324,
    type: "bus"
  },
  {
    name: "Östringen Mitte",
    lat: 49.21883489,
    lon: 8.71129569,
    type: "bus"
  },
  {
    name: "Östringen Freibad",
    lat: 49.21434602,
    lon: 8.69317667,
    type: "bus"
  },
  {
    name: "Östringen Alte Post",
    lat: 49.21717435,
    lon: 8.7039834,
    type: "bus"
  },
  {
    name: "Östringen Oberdorf",
    lat: 49.22121706,
    lon: 8.71755694,
    type: "bus"
  },
  {
    name: "Östringen Mozartstraße",
    lat: 49.21618856,
    lon: 8.70652563,
    type: "bus"
  },
  {
    name: "Tiefenbach Ost",
    lat: 49.1762358,
    lon: 8.80212435,
    type: "bus"
  },
  {
    name: "Tiefenbach Rathaus",
    lat: 49.17556045,
    lon: 8.79519833,
    type: "bus"
  },
  {
    name: "Tiefenbach West",
    lat: 49.17627691,
    lon: 8.78692485,
    type: "bus"
  },
  {
    name: "Odenheim Eppinger Straße",
    lat: 49.17530792,
    lon: 8.7545316,
    type: "bus"
  },
  {
    name: "Kirrlach Fridolinstraße",
    lat: 49.24379498,
    lon: 8.54213394,
    type: "bus"
  },
  {
    name: "Kirrlach Heidelberger Straße",
    lat: 49.24960057,
    lon: 8.54418209,
    type: "bus"
  },
  {
    name: "Mingolsheim Bruchsaler Straße",
    lat: 49.2172741,
    lon: 8.65280638,
    type: "bus"
  },
  {
    name: "Langenbrücken Ochsen",
    lat: 49.20384105,
    lon: 8.64789259,
    type: "bus"
  },
  {
    name: "Kirrlach Kolpingstraße",
    lat: 49.24875616,
    lon: 8.53918746,
    type: "bus"
  },
  {
    name: "Oberhausen Marienkapelle",
    lat: 49.25758654,
    lon: 8.49920345,
    type: "bus"
  },
  {
    name: "Langenbrücken Südring",
    lat: 49.19977931,
    lon: 8.64606003,
    type: "bus"
  },
  {
    name: "Bruchsal Haydnstraße",
    lat: 49.13497537,
    lon: 8.60376735,
    type: "bus"
  },
  {
    name: "Bruchsal Krankenhaus/B3",
    lat: 49.13191898,
    lon: 8.60174614,
    type: "bus"
  },
  {
    name: "Bruchsal Schloss",
    lat: 49.1277514,
    lon: 8.59894339,
    type: "bus"
  },
  {
    name: "Bruchsal Schlossstraße",
    lat: 49.12571158,
    lon: 8.59418232,
    type: "bus"
  },
  {
    name: "Bruchsal K.-Kollwitz-Sch.",
    lat: 49.1284568,
    lon: 8.60057833,
    type: "bus"
  },
  {
    name: "Bruchsal Schönbornstraße",
    lat: 49.12965007,
    lon: 8.6001112,
    type: "bus"
  },
  {
    name: "Bruchsal Lebenshilfe",
    lat: 49.13407022,
    lon: 8.60076697,
    type: "bus"
  },
  {
    name: "Bruchsal Karl-Berberich-Schule",
    lat: 49.13841358,
    lon: 8.59422724,
    type: "bus"
  },
  {
    name: "Zeutern Sportplatz",
    lat: 49.17795057,
    lon: 8.67088947,
    type: "bus"
  },
  {
    name: "Waghäusel Gesundheitszentrum",
    lat: 49.25028077,
    lon: 8.50696489,
    type: "bus"
  },
  {
    name: "Weiher Hardtsee",
    lat: 49.17118511,
    lon: 8.61884108,
    type: "bus"
  },
  {
    name: "Ubstadt Stachus",
    lat: 49.15836226,
    lon: 8.62818356,
    type: "bus"
  },
  {
    name: "Stettfeld Löwenplatz",
    lat: 49.18174399,
    lon: 8.64507188,
    type: "bus"
  },
  {
    name: "Forst Bruchsaler Straße",
    lat: 49.1499372,
    lon: 8.58629511,
    type: "bus"
  },
  {
    name: "Forst Löwen",
    lat: 49.15279859,
    lon: 8.58658258,
    type: "bus"
  },
  {
    name: "Forst Kronauer Allee",
    lat: 49.15813902,
    lon: 8.58259406,
    type: "bus"
  },
  {
    name: "Forst Hambrücker Straße",
    lat: 49.15304536,
    lon: 8.57909961,
    type: "bus"
  },
  {
    name: "Forst Rasthof Ost",
    lat: 49.15588894,
    lon: 8.57043087,
    type: "bus"
  },
  {
    name: "Forst Rasthof West",
    lat: 49.16092945,
    lon: 8.56473555,
    type: "bus"
  },
  {
    name: "Hambrücken Prinz Carl",
    lat: 49.18227246,
    lon: 8.54742501,
    type: "bus"
  },
  {
    name: "Hambrücken Ortsmitte",
    lat: 49.18709304,
    lon: 8.54483786,
    type: "bus"
  },
  {
    name: "Hambrücken Hofäcker",
    lat: 49.17911329,
    lon: 8.54866469,
    type: "bus"
  },
  {
    name: "Forst Burgweg",
    lat: 49.14786303,
    lon: 8.58262999,
    type: "bus"
  },
  {
    name: "Hambrücken Kriegsstraße",
    lat: 49.18567216,
    lon: 8.53888203,
    type: "bus"
  },
  {
    name: "Rheinsheim Schule",
    lat: 49.23243398,
    lon: 8.41001871,
    type: "bus"
  },
  {
    name: "Kronau Mozartstraße",
    lat: 49.22019614,
    lon: 8.62723134,
    type: "bus"
  },
  {
    name: "Kronau Gewerbegebiet Heidig",
    lat: 49.21185789,
    lon: 8.62398842,
    type: "bus"
  },
  {
    name: "Kronau Bahnhofstraße",
    lat: 49.22102344,
    lon: 8.63794824,
    type: "bus"
  },
  {
    name: "Rheinsheim Große Rheinstraße",
    lat: 49.23590649,
    lon: 8.40899463,
    type: "bus"
  },
  {
    name: "Graben-Neudorf",
    lat: 49.1623804,
    lon: 8.48982504,
    type: ["bus", "sbahn", "bahn"]
  },
  {
    name: "Philippsburg (Baden)",
    lat: 49.23190018,
    lon: 8.45393734,
    type: "bus"
  },
  {
    name: "Bruchsal Siemens",
    lat: 49.12699309,
    lon: 8.58873853,
    type: "bus"
  },
  {
    name: "Tiefenbach Kreuzbergsee",
    lat: 49.17970051,
    lon: 8.80968816,
    type: "bus"
  },
  {
    name: "Mingolsheim Volksbank",
    lat: 49.21870581,
    lon: 8.65860051,
    type: "bus"
  },
  {
    name: "Odenheim Schindelberg",
    lat: 49.20209196,
    lon: 8.75548382,
    type: "bus"
  },
  {
    name: "Östringen Ullrichsbruch",
    lat: 49.20695756,
    lon: 8.73895481,
    type: "bus"
  },
  {
    name: "Östringen Johann-Strauß-Str.",
    lat: 49.21516167,
    lon: 8.70703767,
    type: "bus"
  },
  {
    name: "Philippsburg Alter Messplatz",
    lat: 49.23885675,
    lon: 8.46141132,
    type: "bus"
  },
  {
    name: "Ubstadt Uhlandstraße",
    lat: 49.16276223,
    lon: 8.62883933,
    type: "bus"
  },
  {
    name: "Rheinhausen Tullahalle",
    lat: 49.28001304,
    lon: 8.47497588,
    type: "bus"
  },
  {
    name: "Mörsch Sonnenstraße",
    lat: 48.9659748,
    lon: 8.28955463,
    type: "bus"
  },
  {
    name: "Flehingen Schlossgartenhalle",
    lat: 49.08798608,
    lon: 8.78772435,
    type: "bus"
  },
  {
    name: "Oberderdingen Amthof",
    lat: 49.06099904,
    lon: 8.80143264,
    type: "bus"
  },
  {
    name: "Großvillars Wilfenberg",
    lat: 49.0508972,
    lon: 8.77248892,
    type: "bus"
  },
  {
    name: "Karlsdorf Brühlstraße",
    lat: 49.14104644,
    lon: 8.54665246,
    type: "bus"
  },
  {
    name: "Karlsdorf Rathausstraße",
    lat: 49.14061156,
    lon: 8.54158596,
    type: "bus"
  },
  {
    name: "Östringen Seniorenheim",
    lat: 49.21563698,
    lon: 8.71205925,
    type: "bus"
  },
  {
    name: "Kronau Ortsmitte",
    lat: 49.2204191,
    lon: 8.63454363,
    type: "bus"
  },
  {
    name: "Bauerbach (Baden)",
    lat: 49.07320564,
    lon: 8.74879137,
    type: "bus"
  },
  {
    name: "Bauerbach (Ersatzhalt)",
    lat: 49.07627741,
    lon: 8.74318588,
    type: "bus"
  },
  {
    name: "Zaisenhausen (Baden)",
    lat: 49.10426184,
    lon: 8.81582365,
    type: "bus"
  },
  {
    name: "Rheinsheim Schanzenäcker",
    lat: 49.23312029,
    lon: 8.41754659,
    type: "bus"
  },
  {
    name: "Karlsdorf Im Brühl",
    lat: 49.14091128,
    lon: 8.55397373,
    type: "bus"
  },
  {
    name: "Hambrücken Gesundheitszentrum",
    lat: 49.18896595,
    lon: 8.53898983,
    type: "bus"
  },
  {
    name: "Hambrücken Bachweg",
    lat: 49.19059809,
    lon: 8.53982527,
    type: "bus"
  },
  {
    name: "Blankenloch Lorenzstraße",
    lat: 49.07749548,
    lon: 8.46148319,
    type: "bus"
  },
  {
    name: "Friedrichstal St-Riquier-Platz",
    lat: 49.10086832,
    lon: 8.47434706,
    type: ["sbahn", "stadtbahn", "bahn"]
  },
  {
    name: "Karlsdorf Ostendstraße",
    lat: 49.13520459,
    lon: 8.55024572,
    type: "bus"
  },
  {
    name: "KIT-Campus Nord H18 Casino",
    lat: 49.09318644,
    lon: 8.42954808,
    type: "bus"
  },
  {
    name: "Kirrlach Bruchsaler Straße",
    lat: 49.24182444,
    lon: 8.53917848,
    type: "bus"
  },
  {
    name: "Forst Kolpingstraße",
    lat: 49.15014873,
    lon: 8.58124658,
    type: "bus"
  },
  {
    name: "Forst Kinzigstraße",
    lat: 49.15437904,
    lon: 8.58020454,
    type: "bus"
  },
  {
    name: "Friedrichstal Mitte",
    lat: 49.10415598,
    lon: 8.47520945,
    type: "stadtbahn"
  },
  {
    name: "Weingarten Seniorenheim",
    lat: 49.05072646,
    lon: 8.54774841,
    type: "bus"
  },
  {
    name: "Gölshausen Industrie",
    lat: 49.05152715,
    lon: 8.73953872,
    type: "bus"
  },
  {
    name: "Gölshausen Industrie (Ersatzhalt)",
    lat: 49.04963138,
    lon: 8.7405628,
    type: "bus"
  },
  {
    name: "Bruchsal Am Mantel",
    lat: 49.13903655,
    lon: 8.56356774,
    type: "bus"
  },
  {
    name: "Friedrichstal Nord",
    lat: 49.10857253,
    lon: 8.47640421,
    type: "stadtbahn"
  },
  {
    name: "Kirrlach Hinterfeld",
    lat: 49.23973652,
    lon: 8.55679444,
    type: "bus"
  },
  {
    name: "Mingolsheim Rochus-Klinik",
    lat: 49.21965634,
    lon: 8.66606551,
    type: "bus"
  },
  {
    name: "Mingolsheim Schettler-Weil-Klinik",
    lat: 49.2167108,
    lon: 8.67238965,
    type: "bus"
  },
  {
    name: "Kirrlach Obere Bachstraße",
    lat: 49.23739631,
    lon: 8.54235851,
    type: "bus"
  },
  {
    name: "Kirrlach Taunusstraße",
    lat: 49.2382937,
    lon: 8.53732795,
    type: "bus"
  },
  {
    name: "Oberhausen Hammelsäcker",
    lat: 49.25031009,
    lon: 8.50260806,
    type: "bus"
  },
  {
    name: "Langenbrücken Polizei",
    lat: 49.20645283,
    lon: 8.64844057,
    type: "bus"
  },
  {
    name: "Bruchsal Saalbachcenter",
    lat: 49.12186095,
    lon: 8.58931345,
    type: "bus"
  },
  {
    name: "Langenbrücken Friedhof",
    lat: 49.20541987,
    lon: 8.65032703,
    type: "bus"
  },
  {
    name: "Langenbrücken Grundschule",
    lat: 49.20227979,
    lon: 8.64465866,
    type: "bus"
  },
  {
    name: "Mingolsheim M.-Ende-Schule",
    lat: 49.2118931,
    lon: 8.65579777,
    type: "bus"
  },
  {
    name: "Gochsheim Krone",
    lat: 49.10319147,
    lon: 8.75198937,
    type: "bus"
  },
  {
    name: "Gochsheim Milchhaus",
    lat: 49.10590853,
    lon: 8.74348232,
    type: "bus"
  },
  {
    name: "Gochsheim Bauerbacher Str.",
    lat: 49.10206813,
    lon: 8.74189231,
    type: "bus"
  },
  {
    name: "Mingolsheim Kurpark",
    lat: 49.21678708,
    lon: 8.66498753,
    type: "bus"
  },
  {
    name: "Oberhausen Tonwerk",
    lat: 49.26860763,
    lon: 8.47388892,
    type: "bus"
  },
  {
    name: "Oberhausen Jahnstraße",
    lat: 49.25511818,
    lon: 8.48139884,
    type: "bus"
  },
  {
    name: "Bruchsal Eschenweg",
    lat: 49.1121831,
    lon: 8.5665232,
    type: "bus"
  },
  {
    name: "Mingolsheim F.-J.-Mone-Schule (Ersatz)",
    lat: 49.21544334,
    lon: 8.66043308,
    type: "bus"
  },
  {
    name: "Ittersbach Baumgartenstraße",
    lat: 48.86871876,
    lon: 8.50912983,
    type: "bus"
  },
  {
    name: "Münzesheim Karlsruher Str.",
    lat: 49.12267813,
    lon: 8.71425114,
    type: "bus"
  },
  {
    name: "Ettlingen Adolf-Kolping-Str.",
    lat: 48.94546496,
    lon: 8.41329756,
    type: "bus"
  },
  {
    name: "Ettlingen Volkshochschule",
    lat: 48.94298103,
    lon: 8.40981209,
    type: "bus"
  },
  {
    name: "Ettlingen Rathaus",
    lat: 48.9423143,
    lon: 8.40648833,
    type: "bus"
  },
  {
    name: "Ettlingen Kaisereiche",
    lat: 48.94630864,
    lon: 8.41928034,
    type: "bus"
  },
  {
    name: "Ettlingen Schröderstraße",
    lat: 48.9500431,
    lon: 8.40635358,
    type: "bus"
  },
  {
    name: "Ettlingen Theodor-Heuss-Str.",
    lat: 48.95179518,
    lon: 8.40526662,
    type: "bus"
  },
  {
    name: "Ettlingen Breitscheidstr.",
    lat: 48.95126426,
    lon: 8.40189794,
    type: "bus"
  },
  {
    name: "Ettlingen Gabelsberger Str.",
    lat: 48.94836764,
    lon: 8.40081098,
    type: "bus"
  },
  {
    name: "Ettlingen Hebelweg",
    lat: 48.94688682,
    lon: 8.40318253,
    type: "bus"
  },
  {
    name: "Ettlingen Rudolf-Plank-Str.",
    lat: 48.939665,
    lon: 8.36877705,
    type: "bus"
  },
  {
    name: "Menzingen Rathaus",
    lat: 49.13905418,
    lon: 8.7722374,
    type: "bus"
  },
  {
    name: "Gochsheim Kirche/Schule",
    lat: 49.1037443,
    lon: 8.74762356,
    type: "bus"
  },
  {
    name: "Münzesheim Schulzentrum",
    lat: 49.12104964,
    lon: 8.7107028,
    type: "bus"
  },
  {
    name: "Oberöwisheim Neuenwegstr.",
    lat: 49.14453712,
    lon: 8.68864018,
    type: "bus"
  },
  {
    name: "Unteröwisheim Schule",
    lat: 49.13779648,
    lon: 8.6632987,
    type: "bus"
  },
  {
    name: "Unteröwisheim Bruchsaler Str.",
    lat: 49.14287996,
    lon: 8.66755672,
    type: "bus"
  },
  {
    name: "Mingolsheim Thermarium",
    lat: 49.21901679,
    lon: 8.66832927,
    type: "bus"
  },
  {
    name: "Mingolsheim Schulzentrum",
    lat: 49.2163998,
    lon: 8.65834,
    type: "bus"
  },
  {
    name: "Odenheim Schule",
    lat: 49.17671735,
    lon: 8.74654558,
    type: "bus"
  },
  {
    name: "Tiefenbach Schule",
    lat: 49.17750426,
    lon: 8.79413832,
    type: "bus"
  },
  {
    name: "Menzingen Schule",
    lat: 49.14260964,
    lon: 8.7721835,
    type: "bus"
  },
  {
    name: "Unteröwisheim Kirche (Ersatzhalt)",
    lat: 49.14336771,
    lon: 8.66795197,
    type: "bus"
  },
  {
    name: "Menzingen Heilbronner Str.",
    lat: 49.13937741,
    lon: 8.77092586,
    type: "bus"
  },
  {
    name: "Unteröwisheim Tankstelle (Ersatzhalt)",
    lat: 49.1448897,
    lon: 8.66349633,
    type: "bus"
  },
  {
    name: "Reichenbach Freibad",
    lat: 48.93294374,
    lon: 8.47937763,
    type: "bus"
  },
  {
    name: "Reichenbach Ermlisgrund",
    lat: 48.93479675,
    lon: 8.47945848,
    type: "bus"
  },
  {
    name: "Reichenbach Eistreff",
    lat: 48.93297915,
    lon: 8.47803914,
    type: "bus"
  },
  {
    name: "Ettlingen Huttenkreuzstr.",
    lat: 48.94596645,
    lon: 8.40862632,
    type: "bus"
  },
  {
    name: "Ettlingen Friedhof",
    lat: 48.94728211,
    lon: 8.41255196,
    type: "bus"
  },
  {
    name: "Ettlingen Hedwigshof",
    lat: 48.9581423,
    lon: 8.42979961,
    type: "bus"
  },
  {
    name: "Ettlingen AfB-Zentrale",
    lat: 48.93421253,
    lon: 8.37845191,
    type: "bus"
  },
  {
    name: "Ettlingen Carl-Metz-Straße",
    lat: 48.93381124,
    lon: 8.38199127,
    type: "bus"
  },
  {
    name: "Ettlingen Stadtwerke",
    lat: 48.93786528,
    lon: 8.38075159,
    type: "bus"
  },
  {
    name: "Neuburgweier Mitte",
    lat: 48.96979623,
    lon: 8.26767167,
    type: "bus"
  },
  {
    name: "Neuburgweier Breslauer Straße",
    lat: 48.96788555,
    lon: 8.26150024,
    type: "bus"
  },
  {
    name: "KIT-Campus Nord Südtor",
    lat: 49.09138049,
    lon: 8.4284162,
    type: "bus"
  },
  {
    name: "Hochstetten Waldstraße",
    lat: 49.13486957,
    lon: 8.42247834,
    type: "bus"
  },
  {
    name: "Hochstetten Mitte",
    lat: 49.1374321,
    lon: 8.41407909,
    type: "bus"
  },
  {
    name: "Hochstetten West",
    lat: 49.14082313,
    lon: 8.40881496,
    type: "bus"
  },
  {
    name: "Liedolsheim Festhalle",
    lat: 49.15917884,
    lon: 8.41521097,
    type: "bus"
  },
  {
    name: "Liedolsheim Mitte",
    lat: 49.16142289,
    lon: 8.41560623,
    type: "bus"
  },
  {
    name: "Liedolsheim Kirchfeld",
    lat: 49.165664,
    lon: 8.41584877,
    type: "bus"
  },
  {
    name: "Rußheim Liedolsheimer Straße",
    lat: 49.17834989,
    lon: 8.42526312,
    type: "bus"
  },
  {
    name: "Rußheim Mitte",
    lat: 49.1842806,
    lon: 8.42165189,
    type: "bus"
  },
  {
    name: "Rußheim Rathaus",
    lat: 49.18618885,
    lon: 8.42455345,
    type: "bus"
  },
  {
    name: "Rußheim Huttenheimer Str.",
    lat: 49.18749229,
    lon: 8.42729331,
    type: "bus"
  },
  {
    name: "Huttenheim Kirche",
    lat: 49.19711435,
    lon: 8.46600172,
    type: "bus"
  },
  {
    name: "Huttenheim Philippsburger Str.",
    lat: 49.20265543,
    lon: 8.46536391,
    type: "bus"
  },
  {
    name: "Huttenheim Hebel",
    lat: 49.21901679,
    lon: 8.46933446,
    type: "bus"
  },
  {
    name: "Philippsburg Goodyear",
    lat: 49.22605731,
    lon: 8.46619934,
    type: "bus"
  },
  {
    name: "Philippsburg Dammstraße",
    lat: 49.23202923,
    lon: 8.46237252,
    type: "bus"
  },
  {
    name: "Philippsburg Schulzentrum",
    lat: 49.23509118,
    lon: 8.46115081,
    type: "bus"
  },
  {
    name: "Philippsburg Marktplatz",
    lat: 49.23686256,
    lon: 8.45439548,
    type: "bus"
  },
  {
    name: "Karlsdorf Bahnhofstraße",
    lat: 49.14252737,
    lon: 8.54808078,
    type: "bus"
  },
  {
    name: "Graben Kath. Kirche",
    lat: 49.15486081,
    lon: 8.48090477,
    type: "bus"
  },
  {
    name: "Graben Post",
    lat: 49.15920821,
    lon: 8.48359971,
    type: "bus"
  },
  {
    name: "Neudorf Polizei",
    lat: 49.17167258,
    lon: 8.49540357,
    type: "bus"
  },
  {
    name: "Neudorf Kirche",
    lat: 49.17456208,
    lon: 8.49723614,
    type: "bus"
  },
  {
    name: "Neudorf Festplatz",
    lat: 49.17127321,
    lon: 8.50100008,
    type: "bus"
  },
  {
    name: "Graben Bismarckstraße",
    lat: 49.15788641,
    lon: 8.47362841,
    type: "bus"
  },
  {
    name: "Liedolsheim Friedrichstraße",
    lat: 49.15850913,
    lon: 8.42156206,
    type: "bus"
  },
  {
    name: "Waldprechtsweier Lange Str.",
    lat: 48.86147971,
    lon: 8.32890982,
    type: "bus"
  },
  {
    name: "Ettlingen Pestalozzischule",
    lat: 48.95179518,
    lon: 8.3856564,
    type: "bus"
  },
  {
    name: "Ettlingen Liebfrauenkirche",
    lat: 48.94853283,
    lon: 8.3840574,
    type: "bus"
  },
  {
    name: "Ettlingen Bunsenstraße",
    lat: 48.94787797,
    lon: 8.39055221,
    type: "bus"
  },
  {
    name: "Ettlingen Kiefernweg",
    lat: 48.94834994,
    lon: 8.37862259,
    type: "bus"
  },
  {
    name: "Ettlingen Lärchenweg",
    lat: 48.95144123,
    lon: 8.37718528,
    type: "bus"
  },
  {
    name: "Ettlingen Buchenweg",
    lat: 48.95351772,
    lon: 8.38012277,
    type: "bus"
  },
  {
    name: "Ettlingen Josef-Stöhrer-Weg",
    lat: 48.95354721,
    lon: 8.3845874,
    type: "bus"
  },
  {
    name: "Ettlingen Zehntwiesenstraße",
    lat: 48.94577176,
    lon: 8.39106425,
    type: "bus"
  },
  {
    name: "Ettlingen Lindenweg",
    lat: 48.94775998,
    lon: 8.38539588,
    type: "bus"
  },
  {
    name: "Ettlingen Kleiner Plom",
    lat: 48.95512811,
    lon: 8.37721223,
    type: "bus"
  },
  {
    name: "Malsch Kesselstraße",
    lat: 48.87725653,
    lon: 8.33623109,
    type: "bus"
  },
  {
    name: "Malsch Linde (Schleife)",
    lat: 48.8905123,
    lon: 8.32528063,
    type: "bus"
  },
  {
    name: "Malsch Neumalsch",
    lat: 48.90116635,
    lon: 8.30973977,
    type: "bus"
  },
  {
    name: "Waldprechtsweier",
    lat: 48.86222435,
    lon: 8.33275461,
    type: "bus"
  },
  {
    name: "Ettlingen Pappelweg (Ersatzhalt)",
    lat: 48.95072742,
    lon: 8.38251229,
    type: "bus"
  },
  {
    name: "Malsch Bahnhof (Industriegeb.)",
    lat: 48.89011066,
    lon: 8.32313365,
    type: "bus"
  },
  {
    name: "Ettlingen Goethe-/Bachstr.",
    lat: 48.94200748,
    lon: 8.39236681,
    type: "bus"
  },
  {
    name: "Malsch Linde",
    lat: 48.89005159,
    lon: 8.3264664,
    type: "bus"
  },
  {
    name: "Malsch Boschstraße",
    lat: 48.88989803,
    lon: 8.31861513,
    type: "bus"
  },
  {
    name: "Ettlingen Firma Argus",
    lat: 48.94302233,
    lon: 8.36698042,
    type: "bus"
  },
  {
    name: "Malsch Hadermark",
    lat: 48.90602606,
    lon: 8.30444869,
    type: "bus"
  },
  {
    name: "Malsch Durmersheimer Straße",
    lat: 48.90271348,
    lon: 8.30750297,
    type: "bus"
  },
  {
    name: "Malsch Murgtaler Straße",
    lat: 48.89801289,
    lon: 8.30622736,
    type: "bus"
  },
  {
    name: "Malsch Fuchseck",
    lat: 48.88766532,
    lon: 8.30019068,
    type: "bus"
  },
  {
    name: "Malsch Weite Str.",
    lat: 48.88298104,
    lon: 8.33401225,
    type: "bus"
  },
  {
    name: "Malsch Stephanstraße",
    lat: 48.890152,
    lon: 8.31280303,
    type: "bus"
  },
  {
    name: "Malsch Dieselstraße",
    lat: 48.89112656,
    lon: 8.30907502,
    type: "bus"
  },
  {
    name: "Malsch Heinrich-Hertz-Straße",
    lat: 48.88850407,
    lon: 8.30328088,
    type: "bus"
  },
  {
    name: "Schluttenbach Am Lindenbrunnen",
    lat: 48.89890462,
    lon: 8.40523967,
    type: "bus"
  },
  {
    name: "Ettlingen Schützenkreuz",
    lat: 48.93483216,
    lon: 8.41959475,
    type: "bus"
  },
  {
    name: "Ettlingen Wilhelmshöhe",
    lat: 48.93178115,
    lon: 8.42538888,
    type: "bus"
  },
  {
    name: "Spessart Rotes Haus",
    lat: 48.9131524,
    lon: 8.4260177,
    type: "bus"
  },
  {
    name: "Spessart Strauß",
    lat: 48.91373686,
    lon: 8.43312338,
    type: "bus"
  },
  {
    name: "Spessart Schottmüllerstr.",
    lat: 48.91153474,
    lon: 8.42941333,
    type: "bus"
  },
  {
    name: "Spessart Wasserwerk",
    lat: 48.90955098,
    lon: 8.42717653,
    type: "bus"
  },
  {
    name: "Schöllbronn Breuerstraße",
    lat: 48.89965461,
    lon: 8.42169681,
    type: "bus"
  },
  {
    name: "Schluttenbach Rathaus",
    lat: 48.89904045,
    lon: 8.40625477,
    type: "bus"
  },
  {
    name: "Schöllbronn Schule",
    lat: 48.89555022,
    lon: 8.41893898,
    type: "bus"
  },
  {
    name: "Schöllbronn Stefanienstraße",
    lat: 48.89290434,
    lon: 8.4204751,
    type: "bus"
  },
  {
    name: "Schöllbronn Schwimmbad",
    lat: 48.88845091,
    lon: 8.41557928,
    type: "bus"
  },
  {
    name: "Schöllbronn Rimmelsbacher Hof",
    lat: 48.88334139,
    lon: 8.40982108,
    type: "bus"
  },
  {
    name: "Völkersbach Dreschhalle",
    lat: 48.87114729,
    lon: 8.39691229,
    type: "bus"
  },
  {
    name: "Völkersbach Lamm",
    lat: 48.87137773,
    lon: 8.38983356,
    type: "bus"
  },
  {
    name: "Völkersbach Post",
    lat: 48.87050915,
    lon: 8.39280699,
    type: "bus"
  },
  {
    name: "Völkersbach Schwarzwaldstr.",
    lat: 48.86701693,
    lon: 8.39622957,
    type: "bus"
  },
  {
    name: "Schöllbronn Hinter der Kirche",
    lat: 48.9005404,
    lon: 8.42034035,
    type: "bus"
  },
  {
    name: "Ettlingen Carl-Orff-Schule",
    lat: 48.95023188,
    lon: 8.38528809,
    type: "bus"
  },
  {
    name: "Ettlingen Eichendorffgymnasium",
    lat: 48.94089231,
    lon: 8.40153861,
    type: "bus"
  },
  {
    name: "Schöllbronn Schluttenbacher Str.",
    lat: 48.89709753,
    lon: 8.41562419,
    type: "bus"
  },
  {
    name: "Spessart Brünnäckerweg",
    lat: 48.91210152,
    lon: 8.43174895,
    type: "bus"
  },
  {
    name: "Völkersbach Am Sportplatz",
    lat: 48.86478321,
    lon: 8.39298665,
    type: "bus"
  },
  {
    name: "Ettlingen Hallenbad",
    lat: 48.93866188,
    lon: 8.41583979,
    type: "bus"
  },
  {
    name: "Schöllbronn Moosbronner Straße (Ersatz)",
    lat: 48.89086668,
    lon: 8.41741184,
    type: "bus"
  },
  {
    name: "Ettlingenweier Bürgerhalle",
    lat: 48.92921981,
    lon: 8.38627623,
    type: "bus"
  },
  {
    name: "Ettlingen Horbachpark",
    lat: 48.93769415,
    lon: 8.40130505,
    type: "bus"
  },
  {
    name: "Ettlingenweier Seestraße",
    lat: 48.92620978,
    lon: 8.38062583,
    type: "bus"
  },
  {
    name: "Ettlingenweier Bf Bruchhausen",
    lat: 48.92417938,
    lon: 8.37469695,
    type: "bus"
  },
  {
    name: "Oberweier Neuwiesenstr.",
    lat: 48.91675355,
    lon: 8.37918853,
    type: "bus"
  },
  {
    name: "Oberweier Am Haberacker",
    lat: 48.91457518,
    lon: 8.37688884,
    type: "bus"
  },
  {
    name: "Sulzbach",
    lat: 48.89751683,
    lon: 8.36763619,
    type: "bus"
  },
  {
    name: "Malsch Mozartstraße",
    lat: 48.88455236,
    lon: 8.33678804,
    type: "bus"
  },
  {
    name: "Malsch Adler",
    lat: 48.88357177,
    lon: 8.33376971,
    type: "bus"
  },
  {
    name: "Malsch Kreuzstraße",
    lat: 48.88075984,
    lon: 8.33443446,
    type: "bus"
  },
  {
    name: "Malsch Rathaus",
    lat: 48.87950151,
    lon: 8.33650058,
    type: "bus"
  },
  {
    name: "Ettlingenweier Im Stöck",
    lat: 48.92189508,
    lon: 8.3745083,
    type: "bus"
  },
  {
    name: "Oberweier Zentrum",
    lat: 48.91485265,
    lon: 8.38055397,
    type: "bus"
  },
  {
    name: "Malsch Freibad",
    lat: 48.87329211,
    lon: 8.334677,
    type: "bus"
  },
  {
    name: "Malsch Süd",
    lat: 48.88742905,
    lon: 8.31521949,
    type: "bus"
  },
  {
    name: "Malsch Süd (Ersatzhalt)",
    lat: 48.8901461,
    lon: 8.31293777,
    type: "bus"
  },
  {
    name: "Bruchhausen Am Sang",
    lat: 48.92687082,
    lon: 8.37042097,
    type: "bus"
  },
  {
    name: "Bruchhausen Oberfeld",
    lat: 48.92379572,
    lon: 8.36292902,
    type: "bus"
  },
  {
    name: "Malsch Am Hänfig",
    lat: 48.88640126,
    lon: 8.32990695,
    type: "bus"
  },
  {
    name: "Malsch",
    lat: 48.88959089,
    lon: 8.32414875,
    type: "bus"
  },
  {
    name: "Malsch Bahnhof",
    lat: 48.88921287,
    lon: 8.32391519,
    type: "bus"
  },
  {
    name: "Völkersbach Brunnen",
    lat: 48.87019598,
    lon: 8.39591516,
    type: "bus"
  },
  {
    name: "Malsch Hans-Thoma-Schule",
    lat: 48.88461143,
    lon: 8.3255052,
    type: "bus"
  },
  {
    name: "Malsch Heckenäcker",
    lat: 48.87430245,
    lon: 8.34270794,
    type: "bus"
  },
  {
    name: "Malsch Am Fischweier",
    lat: 48.88637172,
    lon: 8.32176821,
    type: "bus"
  },
  {
    name: "Bruchhausen Blütenstraße",
    lat: 48.93073067,
    lon: 8.36769009,
    type: "bus"
  },
  {
    name: "Bruchhausen Westring",
    lat: 48.93090181,
    lon: 8.36578566,
    type: "bus"
  },
  {
    name: "Bruchhausen Fère-Champenoise-Str.",
    lat: 48.92713642,
    lon: 8.36147375,
    type: "bus"
  },
  {
    name: "Bruchhausen Haselweg",
    lat: 48.9239787,
    lon: 8.35985678,
    type: "bus"
  },
  {
    name: "Ettlingen Realschule",
    lat: 48.94255031,
    lon: 8.39709195,
    type: "bus"
  },
  {
    name: "Ettlingen Einsteinstraße",
    lat: 48.94128174,
    lon: 8.38019464,
    type: "bus"
  },
  {
    name: "Ettlingen Zeppelinstraße",
    lat: 48.94150005,
    lon: 8.37512814,
    type: "bus"
  },
  {
    name: "Ettlingen Hertzstraße",
    lat: 48.94570096,
    lon: 8.38262009,
    type: "bus"
  },
  {
    name: "Forchheim Akazienweg",
    lat: 48.96286082,
    lon: 8.3391596,
    type: "bus"
  },
  {
    name: "Forchheim Schwarzwaldschule",
    lat: 48.97858207,
    lon: 8.31545306,
    type: "bus"
  },
  {
    name: "Busenbach Apotheke",
    lat: 48.93173394,
    lon: 8.46230964,
    type: "bus"
  },
  {
    name: "Busenbach Oberdorf",
    lat: 48.93247163,
    lon: 8.46840022,
    type: "bus"
  },
  {
    name: "Busenbach Rathausmarkt",
    lat: 48.93019951,
    lon: 8.47156229,
    type: "bus"
  },
  {
    name: "Busenbach Albtherme",
    lat: 48.92720134,
    lon: 8.47118499,
    type: "bus"
  },
  {
    name: "Reichenbach Friedenstraße",
    lat: 48.92621568,
    lon: 8.48078798,
    type: "bus"
  },
  {
    name: "Reichenbach Kulturtreff",
    lat: 48.92492899,
    lon: 8.47681743,
    type: "bus"
  },
  {
    name: "Reichenbach Friedhof",
    lat: 48.92605632,
    lon: 8.48292598,
    type: "bus"
  },
  {
    name: "Reichenbach A.-Schweitzer-Sch.",
    lat: 48.92240271,
    lon: 8.48343801,
    type: "bus"
  },
  {
    name: "Reichenbach Nelkenstraße",
    lat: 48.9215055,
    lon: 8.48102155,
    type: "bus"
  },
  {
    name: "Reichenbach Kurh./Etzenr. Str.",
    lat: 48.92100967,
    lon: 8.47544301,
    type: "bus"
  },
  {
    name: "Etzenrot Strauß",
    lat: 48.91302842,
    lon: 8.46731326,
    type: "bus"
  },
  {
    name: "Etzenrot Feuerwehrhaus",
    lat: 48.9111746,
    lon: 8.4659029,
    type: "bus"
  },
  {
    name: "Etzenrot Esternaystraße",
    lat: 48.90946242,
    lon: 8.4692626,
    type: "bus"
  },
  {
    name: "Busenbach Ostendstraße",
    lat: 48.93312669,
    lon: 8.47227196,
    type: "bus"
  },
  {
    name: "Etzenrot Vogesenstraße",
    lat: 48.90923215,
    lon: 8.46592087,
    type: "bus"
  },
  {
    name: "Reichenbach Sportzentrum",
    lat: 48.92958573,
    lon: 8.47856016,
    type: "bus"
  },
  {
    name: "Reichenbach Monmouthplatz/Kurh.",
    lat: 48.92201314,
    lon: 8.47511063,
    type: "bus"
  },
  {
    name: "Langensteinbach Schwimmbad",
    lat: 48.90541789,
    lon: 8.49900582,
    type: "bus"
  },
  {
    name: "Langensteinbach Volksbank",
    lat: 48.91282769,
    lon: 8.50571623,
    type: "bus"
  },
  {
    name: "Langensteinbach Schulzentrum",
    lat: 48.91209561,
    lon: 8.49898785,
    type: "bus"
  },
  {
    name: "Langensteinbach Hertzstraße",
    lat: 48.92051383,
    lon: 8.50417113,
    type: "bus"
  },
  {
    name: "Langensteinbach Kirche",
    lat: 48.91789878,
    lon: 8.50550064,
    type: "bus"
  },
  {
    name: "Auerbach Hailerstraße",
    lat: 48.911027,
    lon: 8.52842564,
    type: "bus"
  },
  {
    name: "Auerbach Rathaus",
    lat: 48.91409699,
    lon: 8.53192907,
    type: "bus"
  },
  {
    name: "Langensteinbach Ittersbacher Str.",
    lat: 48.90924396,
    lon: 8.50342553,
    type: "bus"
  },
  {
    name: "Langensteinbach Aussiedlerhf.",
    lat: 48.93593567,
    lon: 8.49304101,
    type: "bus"
  },
  {
    name: "Auerbach Rosenweg",
    lat: 48.91599202,
    lon: 8.5341569,
    type: "bus"
  },
  {
    name: "Auerbach Am Neubruch",
    lat: 48.91820575,
    lon: 8.53316875,
    type: "bus"
  },
  {
    name: "Auerbach Zehntstraße",
    lat: 48.91603334,
    lon: 8.52935989,
    type: "bus"
  },
  {
    name: "Auerbach Ahornweg",
    lat: 48.9122255,
    lon: 8.52693444,
    type: "bus"
  },
  {
    name: "Langensteinbach Wilferdinger Str.",
    lat: 48.91708414,
    lon: 8.50804287,
    type: "bus"
  },
  {
    name: "Langensteinbach Eisenbahnstr. (Ersatz)",
    lat: 48.91723762,
    lon: 8.50300332,
    type: "bus"
  },
  {
    name: "Langensteinbach Klinikum",
    lat: 48.90295558,
    lon: 8.49740682,
    type: "bus"
  },
  {
    name: "Ettlingen Englerstraße",
    lat: 48.94640894,
    lon: 8.37680799,
    type: "bus"
  },
  {
    name: "Ettlingen Am Hardtwald",
    lat: 48.95705698,
    lon: 8.3780297,
    type: "bus"
  },
  {
    name: "Ettlingen Stadthalle",
    lat: 48.94139975,
    lon: 8.41067448,
    type: "bus"
  },
  {
    name: "Ettlingenweier Scheibenhardter Str.",
    lat: 48.93067165,
    lon: 8.38944729,
    type: "bus"
  },
  {
    name: "Ettlingenweier Ettlinger Str.",
    lat: 48.92523001,
    lon: 8.38818965,
    type: "bus"
  },
  {
    name: "Schluttenbach Zellmarkstraße",
    lat: 48.89887509,
    lon: 8.40080199,
    type: "bus"
  },
  {
    name: "Schluttenbach Langenacker",
    lat: 48.8971743,
    lon: 8.40077504,
    type: "bus"
  },
  {
    name: "Schöllbronn Schwester-Baptista-Str.",
    lat: 48.89766446,
    lon: 8.41552538,
    type: "bus"
  },
  {
    name: "Ettlingenweier Keltergasse",
    lat: 48.92878308,
    lon: 8.38956407,
    type: "bus"
  },
  {
    name: "Schluttenbach Schönblick",
    lat: 48.89795974,
    lon: 8.39716382,
    type: "bus"
  },
  {
    name: "Ettlingen Piazza Menfi",
    lat: 48.93711586,
    lon: 8.39542108,
    type: "bus"
  },
  {
    name: "Ettlingen Sportpark",
    lat: 48.9408274,
    lon: 8.39145053,
    type: "bus"
  },
  {
    name: "Berghausen Weiherstraße (Ersatzhalt)",
    lat: 49.00740523,
    lon: 8.53068042,
    type: "bus"
  },
  {
    name: "Ettlingen Oberes Albgrün",
    lat: 48.9388566,
    lon: 8.41144703,
    type: "bus"
  },
  {
    name: "Burbach Speiglerstraße",
    lat: 48.87056824,
    lon: 8.43871988,
    type: "bus"
  },
  {
    name: "Pfaffenrot Pforzheimer Str.",
    lat: 48.8604573,
    lon: 8.45974944,
    type: "bus"
  },
  {
    name: "Schielberg Lamm",
    lat: 48.84295481,
    lon: 8.44825999,
    type: "bus"
  },
  {
    name: "Schielberg Rathaus",
    lat: 48.84456286,
    lon: 8.45037103,
    type: "bus"
  },
  {
    name: "Pfaffenrot Im Neufeld",
    lat: 48.86166882,
    lon: 8.45497939,
    type: "bus"
  },
  {
    name: "Schielberg Wässergraben",
    lat: 48.84701621,
    lon: 8.4460142,
    type: "bus"
  },
  {
    name: "Pfaffenrot Carl-Benz-Schule",
    lat: 48.85764998,
    lon: 8.4623815,
    type: "bus"
  },
  {
    name: "Pfaffenrot Im Strietwälle",
    lat: 48.8537372,
    lon: 8.48236004,
    type: "bus"
  },
  {
    name: "Pfaffenrot Karlsruher Straße",
    lat: 48.86088872,
    lon: 8.45744975,
    type: "bus"
  },
  {
    name: "Pfaffenrot Schwarzenbusch",
    lat: 48.85391453,
    lon: 8.48421955,
    type: "bus"
  },
  {
    name: "Pfaffenrot Kirche",
    lat: 48.85932848,
    lon: 8.45982131,
    type: "bus"
  },
  {
    name: "Graben Zentrum",
    lat: 49.16230991,
    lon: 8.48651025,
    type: "bus"
  },
  {
    name: "Staffort Brühlstraße",
    lat: 49.0932982,
    lon: 8.51299259,
    type: "bus"
  },
  {
    name: "Berghausen Keplerstraße",
    lat: 49.00172444,
    lon: 8.52894667,
    type: "bus"
  },
  {
    name: "Bühlertal Geisloch",
    lat: 48.68567297,
    lon: 8.20637063,
    type: "bus"
  },
  {
    name: "Bühlertal Goldbergweg",
    lat: 48.68771898,
    lon: 8.20485248,
    type: "bus"
  },
  {
    name: "Bühlertal Obere Büchelbach",
    lat: 48.68641429,
    lon: 8.20344212,
    type: "bus"
  },
  {
    name: "Bühlertal Untere Büchelbach",
    lat: 48.68387004,
    lon: 8.19866309,
    type: "bus"
  },
  {
    name: "Bühlertal Hirschbach",
    lat: 48.68283214,
    lon: 8.19610289,
    type: "bus"
  },
  {
    name: "Bühlertal Parkdeck",
    lat: 48.68264235,
    lon: 8.19211437,
    type: "bus"
  },
  {
    name: "Bühlertal Oberer Haaberg",
    lat: 48.68177642,
    lon: 8.18125374,
    type: "bus"
  },
  {
    name: "Bühlertal Haaberg Mitte",
    lat: 48.68248814,
    lon: 8.18476615,
    type: "bus"
  },
  {
    name: "Bühlertal Sandgrube",
    lat: 48.68212635,
    lon: 8.18641007,
    type: "bus"
  },
  {
    name: "Bühlertal Breitmatt",
    lat: 48.68221532,
    lon: 8.19108131,
    type: "bus"
  },
  {
    name: "Bühlertal Eugen-Seelos-Weg",
    lat: 48.66817471,
    lon: 8.18765872,
    type: "bus"
  },
  {
    name: "Bühlertal Steckenhalt",
    lat: 48.66555241,
    lon: 8.19047045,
    type: "bus"
  },
  {
    name: "Bühlertal Boosweg",
    lat: 48.66532103,
    lon: 8.19452185,
    type: "bus"
  },
  {
    name: "Bühlertal Schwarzwasen",
    lat: 48.67136044,
    lon: 8.18360732,
    type: "bus"
  },
  {
    name: "Bühlertal Denni",
    lat: 48.66918918,
    lon: 8.19692036,
    type: "bus"
  },
  {
    name: "Bühlertal Wiedenbach",
    lat: 48.66845354,
    lon: 8.20240008,
    type: "bus"
  },
  {
    name: "Bühlertal Josef-Schofer Schule",
    lat: 48.67636702,
    lon: 8.19526745,
    type: "bus"
  },
  {
    name: "Bühlertal Franziska-H. Schule",
    lat: 48.69503649,
    lon: 8.17907083,
    type: "bus"
  },
  {
    name: "Bühlertal Boschbrücke",
    lat: 48.69408183,
    lon: 8.17681606,
    type: "bus"
  },
  {
    name: "Bühlertal Klotzberg",
    lat: 48.68809259,
    lon: 8.16734782,
    type: "bus"
  },
  {
    name: "Bühlertal Oberer Mocken",
    lat: 48.69226142,
    lon: 8.17211787,
    type: "bus"
  },
  {
    name: "Bühlertal Wintereck",
    lat: 48.70225215,
    lon: 8.19348879,
    type: "bus"
  },
  {
    name: "Bühlertal Am Rebhang",
    lat: 48.69893794,
    lon: 8.19063215,
    type: "bus"
  },
  {
    name: "Bühlertal Liehenbachkapelle",
    lat: 48.6979122,
    lon: 8.1853231,
    type: "bus"
  },
  {
    name: "Bühlertal Friedhof Untertal",
    lat: 48.69613936,
    lon: 8.18240358,
    type: "bus"
  },
  {
    name: "Bühlertal Altes Feuerwehrhaus",
    lat: 48.6823458,
    lon: 8.19000333,
    type: "bus"
  },
  {
    name: "Ottersweier Schule",
    lat: 48.66627623,
    lon: 8.11236194,
    type: "bus"
  },
  {
    name: "Breithurst Kapelle",
    lat: 48.6849435,
    lon: 8.07827087,
    type: "bus"
  },
  {
    name: "Rastatt Fohlenweide",
    lat: 48.8732862,
    lon: 8.21884823,
    type: "bus"
  },
  {
    name: "Halberstung Schiftunger Str.",
    lat: 48.75903415,
    lon: 8.14365924,
    type: "bus"
  },
  {
    name: "Durmersheim",
    lat: 48.92900735,
    lon: 8.27267528,
    type: "bus"
  },
  {
    name: "Durmersheim Bahnhof",
    lat: 48.92898374,
    lon: 8.27236087,
    type: "bus"
  },
  {
    name: "Bietigheim (Baden)",
    lat: 48.9101532,
    lon: 8.25764647,
    type: "bus"
  },
  {
    name: "Bietigheim (Ersatzhalt)",
    lat: 48.90935024,
    lon: 8.25748477,
    type: "bus"
  },
  {
    name: "Bietigheim Bahnhof",
    lat: 48.91074361,
    lon: 8.25792495,
    type: "bus"
  },
  {
    name: "Ötigheim",
    lat: 48.88827371,
    lon: 8.24025508,
    type: "bus"
  },
  {
    name: "Ötigheim (Ersatzhalt)",
    lat: 48.88816149,
    lon: 8.24254579,
    type: "bus"
  },
  {
    name: "Muggensturm",
    lat: 48.87685478,
    lon: 8.27468751,
    type: "bus"
  },
  {
    name: "Rastatt Bahnhof",
    lat: 48.86081189,
    lon: 8.21486869,
    type: "bus"
  },
  {
    name: "Rastatt",
    lat: 48.86078234,
    lon: 8.21606345,
    type: "bus"
  },
  {
    name: "Rastatt Bahnhof/Niederwaldstr.",
    lat: 48.86163337,
    lon: 8.21600955,
    type: "bus"
  },
  {
    name: "Muggensturm Badesee",
    lat: 48.88015136,
    lon: 8.28706629,
    type: "bus"
  },
  {
    name: "Leiberstung Leiboldstraße",
    lat: 48.75436153,
    lon: 8.10081859,
    type: "bus"
  },
  {
    name: "Lautenbach Festplatz",
    lat: 48.75577698,
    lon: 8.36630669,
    type: "bus"
  },
  {
    name: "Lautenbach Bürgerhaus",
    lat: 48.75757734,
    lon: 8.37025927,
    type: "bus"
  },
  {
    name: "Kuppenheim Feuerwehr",
    lat: 48.83040789,
    lon: 8.25641578,
    type: "bus"
  },
  {
    name: "Durmersheim Friedhof",
    lat: 48.93130903,
    lon: 8.27121103,
    type: "bus"
  },
  {
    name: "Halberstung Schule",
    lat: 48.76049685,
    lon: 8.14040734,
    type: "bus"
  },
  {
    name: "Bühlertal Eichwaldstraße",
    lat: 48.67680597,
    lon: 8.19543813,
    type: "bus"
  },
  {
    name: "Raumünzach Siedlung",
    lat: 48.63671595,
    lon: 8.34508848,
    type: "bus"
  },
  {
    name: "Hundsbach Am Skihang",
    lat: 48.61686684,
    lon: 8.27944858,
    type: "bus"
  },
  {
    name: "Hundsbach Kapellenstraße 34",
    lat: 48.61011411,
    lon: 8.27662787,
    type: "bus"
  },
  {
    name: "Hundsbach Biberach",
    lat: 48.60737594,
    lon: 8.2719746,
    type: "bus"
  },
  {
    name: "Hundsb. Viehläger Wendeplatz",
    lat: 48.60918754,
    lon: 8.24645346,
    type: "bus"
  },
  {
    name: "Durmersheim Südliche Hauptstr.",
    lat: 48.92790959,
    lon: 8.26640504,
    type: "bus"
  },
  {
    name: "Weitenung Kirchstraße",
    lat: 48.73846897,
    lon: 8.12633074,
    type: "bus"
  },
  {
    name: "Weitenung Wiesenweg",
    lat: 48.73820238,
    lon: 8.12867534,
    type: "bus"
  },
  {
    name: "Kartung Tiefenauer Str.",
    lat: 48.77162262,
    lon: 8.16151775,
    type: "bus"
  },
  {
    name: "Airpark Terminal (FKB)",
    lat: 48.77792751,
    lon: 8.08790081,
    type: "bus"
  },
  {
    name: "Airpark Verwaltung",
    lat: 48.78664057,
    lon: 8.10045028,
    type: "bus"
  },
  {
    name: "Kartung Am Markbach",
    lat: 48.77513333,
    lon: 8.17233347,
    type: "bus"
  },
  {
    name: "Kartung Kreuzstraße",
    lat: 48.77463604,
    lon: 8.17093209,
    type: "bus"
  },
  {
    name: "Rastatt Königsberger Str.",
    lat: 48.86458229,
    lon: 8.21424886,
    type: "bus"
  },
  {
    name: "Rastatt Westring Nord",
    lat: 48.85625513,
    lon: 8.19441406,
    type: "bus"
  },
  {
    name: "Rastatt Lessingstraße",
    lat: 48.85889113,
    lon: 8.19331811,
    type: "bus"
  },
  {
    name: "Rastatt Scheffelstraße",
    lat: 48.86130241,
    lon: 8.19429727,
    type: "bus"
  },
  {
    name: "Rastatt Schillerstraße",
    lat: 48.86253756,
    lon: 8.19594119,
    type: "bus"
  },
  {
    name: "Rastatt Im Steingerüst",
    lat: 48.86283896,
    lon: 8.23328416,
    type: "bus"
  },
  {
    name: "Rastatt Untere Wiesen",
    lat: 48.86188749,
    lon: 8.23899744,
    type: "bus"
  },
  {
    name: "Kartung Entenhof",
    lat: 48.77976258,
    lon: 8.15229205,
    type: "bus"
  },
  {
    name: "Rastatt Akazienstraße",
    lat: 48.87297896,
    lon: 8.18767669,
    type: "bus"
  },
  {
    name: "Elchesheim Hammenweg",
    lat: 48.93243032,
    lon: 8.21412309,
    type: "bus"
  },
  {
    name: "Müllhofen Sandbachbrücke",
    lat: 48.74537631,
    lon: 8.13711951,
    type: "bus"
  },
  {
    name: "Rastatt Hardbergstraße",
    lat: 48.86000814,
    lon: 8.22537898,
    type: "bus"
  },
  {
    name: "Rastatt Lochfeldstraße",
    lat: 48.85594778,
    lon: 8.22783138,
    type: "bus"
  },
  {
    name: "Rastatt Agentur für Arbeit",
    lat: 48.85442876,
    lon: 8.21063763,
    type: "bus"
  },
  {
    name: "Rastatt Josefstraße",
    lat: 48.85304564,
    lon: 8.2086254,
    type: "bus"
  },
  {
    name: "Rastatt Kaufland",
    lat: 48.85980719,
    lon: 8.23588927,
    type: "bus"
  },
  {
    name: "Eisental Gasthaus Weinberg",
    lat: 48.71271509,
    lon: 8.16564102,
    type: "bus"
  },
  {
    name: "Eisental Traube",
    lat: 48.71188525,
    lon: 8.16431151,
    type: "bus"
  },
  {
    name: "Bühl Bußmatten II",
    lat: 48.71305888,
    lon: 8.1308852,
    type: "bus"
  },
  {
    name: "Bühl Bußmatten I",
    lat: 48.71535272,
    lon: 8.12874721,
    type: "bus"
  },
  {
    name: "Kartung Abzw. Winden",
    lat: 48.77265869,
    lon: 8.17437264,
    type: "bus"
  },
  {
    name: "Selbach Unterdorf",
    lat: 48.78034861,
    lon: 8.31753715,
    type: "bus"
  },
  {
    name: "Selbach Rennfeld",
    lat: 48.78021838,
    lon: 8.30198731,
    type: "bus"
  },
  {
    name: "Selbach Oberdorf",
    lat: 48.78143777,
    lon: 8.30853603,
    type: "bus"
  },
  {
    name: "Bad Rotenfels Schulz. Dachgrub",
    lat: 48.81478785,
    lon: 8.31270421,
    type: "bus"
  },
  {
    name: "Rastatt Stadionstraße",
    lat: 48.83681773,
    lon: 8.19642628,
    type: "bus"
  },
  {
    name: "Wintersdorf Abzw. Bahnhof",
    lat: 48.84355192,
    lon: 8.13532288,
    type: "bus"
  },
  {
    name: "Rastatt Münchfeldstraße",
    lat: 48.83802984,
    lon: 8.20277737,
    type: "bus"
  },
  {
    name: "Rastatt Münchfeldsiedlung",
    lat: 48.83931877,
    lon: 8.20436739,
    type: "bus"
  },
  {
    name: "Rastatt Donaustraße",
    lat: 48.83931877,
    lon: 8.19983988,
    type: "bus"
  },
  {
    name: "Ottenau Schwimmbad",
    lat: 48.7856107,
    lon: 8.33872841,
    type: "bus"
  },
  {
    name: "Winkel",
    lat: 48.83371344,
    lon: 8.31281201,
    type: "bus"
  },
  {
    name: "Ottenau Marxstraße",
    lat: 48.789659,
    lon: 8.33581786,
    type: "bus"
  },
  {
    name: "Iffezheim Tullastraße",
    lat: 48.81942528,
    lon: 8.15027084,
    type: "bus"
  },
  {
    name: "Iffezheim Rennbahnstraße",
    lat: 48.82245949,
    lon: 8.14249143,
    type: "bus"
  },
  {
    name: "Iffezheim Karlstraße",
    lat: 48.82348268,
    lon: 8.13867359,
    type: "bus"
  },
  {
    name: "Iffezheim Industriegebiet",
    lat: 48.8156574,
    lon: 8.16022418,
    type: "bus"
  },
  {
    name: "Iffezheim Festhalle",
    lat: 48.82105183,
    lon: 8.14174583,
    type: "bus"
  },
  {
    name: "Iffezheim Bruchweg",
    lat: 48.81637905,
    lon: 8.14630029,
    type: "bus"
  },
  {
    name: "Bad Rotenfels Feuerwehr",
    lat: 48.81497122,
    lon: 8.30587702,
    type: "bus"
  },
  {
    name: "Ottenau Badener Brücke",
    lat: 48.79280746,
    lon: 8.33002373,
    type: "bus"
  },
  {
    name: "Scheuern Schafhofweg",
    lat: 48.75774315,
    lon: 8.34482797,
    type: "bus"
  },
  {
    name: "Winkel Neuberg",
    lat: 48.82954451,
    lon: 8.3092457,
    type: "bus"
  },
  {
    name: "Oberweier Freiburger Str.",
    lat: 48.84440324,
    lon: 8.30856298,
    type: "bus"
  },
  {
    name: "Weisenbach Neudorf",
    lat: 48.71938298,
    lon: 8.36501311,
    type: "bus"
  },
  {
    name: "Weisenbach Kirchplatz",
    lat: 48.72865134,
    lon: 8.35409858,
    type: "bus"
  },
  {
    name: "Weisenbach Katz-Werke (Ersatzhalt)",
    lat: 48.72396404,
    lon: 8.35810507,
    type: "bus"
  },
  {
    name: "Sinzheim Turnhalle",
    lat: 48.76060936,
    lon: 8.16871326,
    type: "bus"
  },
  {
    name: "Sinzheim Dr.-Ganther-Straße",
    lat: 48.75907561,
    lon: 8.16467982,
    type: "bus"
  },
  {
    name: "Sinzheim Katholische Kirche",
    lat: 48.76167527,
    lon: 8.16444626,
    type: "bus"
  },
  {
    name: "Sinzheim Goethestraße",
    lat: 48.75686075,
    lon: 8.17065362,
    type: "bus"
  },
  {
    name: "Sinzheim Fa. Wolman",
    lat: 48.76698669,
    lon: 8.17079735,
    type: "bus"
  },
  {
    name: "Sinzheim Matthäuskirche",
    lat: 48.7644702,
    lon: 8.16584763,
    type: "bus"
  },
  {
    name: "Müllhofen",
    lat: 48.74446999,
    lon: 8.13900597,
    type: "bus"
  },
  {
    name: "Rauental Bischweierer Str.",
    lat: 48.85629059,
    lon: 8.24831297,
    type: "bus"
  },
  {
    name: "Rastatt Rauentaler Straße",
    lat: 48.86061686,
    lon: 8.23193668,
    type: "bus"
  },
  {
    name: "Rastatt Niederbühler Tor",
    lat: 48.84993053,
    lon: 8.21094306,
    type: "bus"
  },
  {
    name: "Rastatt Lützowerstraße",
    lat: 48.85032658,
    lon: 8.20652335,
    type: "bus"
  },
  {
    name: "Rastatt Kehler Straße",
    lat: 48.85206443,
    lon: 8.2037206,
    type: "bus"
  },
  {
    name: "Rastatt Industriestraße",
    lat: 48.85620784,
    lon: 8.22081554,
    type: "bus"
  },
  {
    name: "Rastatt Gewerbepark",
    lat: 48.85319932,
    lon: 8.22957412,
    type: "bus"
  },
  {
    name: "Rastatt Friedrich-Ebert-Straße",
    lat: 48.85063396,
    lon: 8.2079337,
    type: "bus"
  },
  {
    name: "Rastatt Berliner Ring",
    lat: 48.85897387,
    lon: 8.22995141,
    type: "bus"
  },
  {
    name: "Rastatt Beinle",
    lat: 48.85204079,
    lon: 8.2252083,
    type: "bus"
  },
  {
    name: "Niederbühl Siedlung",
    lat: 48.84112795,
    lon: 8.22149826,
    type: "bus"
  },
  {
    name: "Niederbühl Murgtalstraße",
    lat: 48.84386525,
    lon: 8.21945909,
    type: "bus"
  },
  {
    name: "Förch",
    lat: 48.82687148,
    lon: 8.23212533,
    type: "bus"
  },
  {
    name: "Unzhurst Schule",
    lat: 48.6889584,
    lon: 8.06060101,
    type: "bus"
  },
  {
    name: "Reichental Rathaus",
    lat: 48.72993124,
    lon: 8.39129782,
    type: "bus"
  },
  {
    name: "Ottersweier Münchhofstraße",
    lat: 48.66665,
    lon: 8.12563005,
    type: "bus"
  },
  {
    name: "Steinmauern Silberaustraße",
    lat: 48.89754045,
    lon: 8.19031774,
    type: "bus"
  },
  {
    name: "Steinmauern Siedlung",
    lat: 48.89817234,
    lon: 8.1965251,
    type: "bus"
  },
  {
    name: "Steinmauern Rathaus",
    lat: 48.90006798,
    lon: 8.19883377,
    type: "bus"
  },
  {
    name: "Steinmauern Gartenstraße",
    lat: 48.89974319,
    lon: 8.2054274,
    type: "bus"
  },
  {
    name: "Rastatt Baldenau",
    lat: 48.87239992,
    lon: 8.2044662,
    type: "bus"
  },
  {
    name: "Rastatt Zaystraße",
    lat: 48.86904375,
    lon: 8.20379247,
    type: "bus"
  },
  {
    name: "Rastatt Richard-Wagner-Ring",
    lat: 48.86720012,
    lon: 8.20721505,
    type: "bus"
  },
  {
    name: "Rastatt Zay",
    lat: 48.86663874,
    lon: 8.20342416,
    type: "bus"
  },
  {
    name: "Rastatt Rheintorstraße",
    lat: 48.86082371,
    lon: 8.2014299,
    type: "bus"
  },
  {
    name: "Rastatt Fruchthalle",
    lat: 48.85974218,
    lon: 8.20049565,
    type: "bus"
  },
  {
    name: "Rastatt Kapellenstraße",
    lat: 48.85558724,
    lon: 8.20565198,
    type: "bus"
  },
  {
    name: "Rastatt SchlossGalerie",
    lat: 48.85814053,
    lon: 8.20803252,
    type: "bus"
  },
  {
    name: "Rastatt Anne-Frank-Schule",
    lat: 48.86348311,
    lon: 8.19413558,
    type: "bus"
  },
  {
    name: "Rastatt Bernhardusbrunnen",
    lat: 48.85577638,
    lon: 8.20458298,
    type: "bus"
  },
  {
    name: "Rastatt Schloss",
    lat: 48.85830602,
    lon: 8.20412484,
    type: "bus"
  },
  {
    name: "Rastatt Am Hasenwäldchen",
    lat: 48.86388496,
    lon: 8.20293008,
    type: "bus"
  },
  {
    name: "Rastatt Leopoldfeste",
    lat: 48.84665561,
    lon: 8.20670301,
    type: "bus"
  },
  {
    name: "Rastatt Tulla-Gymnasium",
    lat: 48.86595327,
    lon: 8.2172133,
    type: "bus"
  },
  {
    name: "Rastatt Danziger Str.",
    lat: 48.86764331,
    lon: 8.21980045,
    type: "bus"
  },
  {
    name: "Ötigheim Rastatter Str.",
    lat: 48.88786615,
    lon: 8.23413756,
    type: "bus"
  },
  {
    name: "Ötigheim Rathausstraße",
    lat: 48.89324099,
    lon: 8.23183787,
    type: "bus"
  },
  {
    name: "Ötigheim Tell",
    lat: 48.89006931,
    lon: 8.23721878,
    type: "bus"
  },
  {
    name: "Bietigheim Schneidergarten",
    lat: 48.90413656,
    lon: 8.25087317,
    type: "bus"
  },
  {
    name: "Bietigheim Badenstraße",
    lat: 48.91371325,
    lon: 8.25484372,
    type: "bus"
  },
  {
    name: "Elchesheim Hirsch",
    lat: 48.92898964,
    lon: 8.21149103,
    type: "bus"
  },
  {
    name: "Elchesheim Friedhof",
    lat: 48.93154509,
    lon: 8.21722228,
    type: "bus"
  },
  {
    name: "Au Industriegebiet",
    lat: 48.94518766,
    lon: 8.24677685,
    type: "bus"
  },
  {
    name: "Würmersheim Rathausplatz",
    lat: 48.93701555,
    lon: 8.25134029,
    type: "bus"
  },
  {
    name: "Durmersheim Würmersheimer Str",
    lat: 48.93389976,
    lon: 8.26574029,
    type: "bus"
  },
  {
    name: "Durmersheim Rastatter Str.",
    lat: 48.92514737,
    lon: 8.26607267,
    type: "bus"
  },
  {
    name: "Durmersheim Chennevieresplatz",
    lat: 48.93170443,
    lon: 8.27100442,
    type: "bus"
  },
  {
    name: "Durmersheim Speyerer Str.",
    lat: 48.93721028,
    lon: 8.27344783,
    type: "bus"
  },
  {
    name: "Durmersheim Hans-Thoma-Str.",
    lat: 48.94266242,
    lon: 8.2783706,
    type: "bus"
  },
  {
    name: "Würmersheim Kirche",
    lat: 48.93674411,
    lon: 8.2520859,
    type: "bus"
  },
  {
    name: "Bietigheim Krone",
    lat: 48.91244985,
    lon: 8.25396338,
    type: "bus"
  },
  {
    name: "Zell Kapelle",
    lat: 48.69249268,
    lon: 8.06338579,
    type: "bus"
  },
  {
    name: "Durmersheim Gymnasium",
    lat: 48.93580584,
    lon: 8.26652182,
    type: "bus"
  },
  {
    name: "Durmersheim Raiffeisenplatz",
    lat: 48.93872089,
    lon: 8.27932282,
    type: "bus"
  },
  {
    name: "Bietigheim Rheinstraße",
    lat: 48.90924396,
    lon: 8.24763025,
    type: "bus"
  },
  {
    name: "Ottersweier Maria Linden",
    lat: 48.67218502,
    lon: 8.11784166,
    type: "bus"
  },
  {
    name: "Ottersweier Kirche",
    lat: 48.66867898,
    lon: 8.11118514,
    type: "bus"
  },
  {
    name: "Ottersweier Hub",
    lat: 48.66537442,
    lon: 8.13679611,
    type: "bus"
  },
  {
    name: "Ottersweier Abzw. Hatzenweier",
    lat: 48.67990811,
    lon: 8.10641509,
    type: "bus"
  },
  {
    name: "Haft Brücke",
    lat: 48.65750075,
    lon: 8.11777878,
    type: "bus"
  },
  {
    name: "Breithurst Abzw. Breithurst",
    lat: 48.68266607,
    lon: 8.07798341,
    type: "bus"
  },
  {
    name: "Ottersweier Seebühl",
    lat: 48.67495526,
    lon: 8.10398066,
    type: "bus"
  },
  {
    name: "Muggensturm Hauptstraße",
    lat: 48.87368207,
    lon: 8.27457073,
    type: "bus"
  },
  {
    name: "Ottersweier Am Notbach",
    lat: 48.6710223,
    lon: 8.10768171,
    type: "bus"
  },
  {
    name: "Loffenau Schönblick",
    lat: 48.77242779,
    lon: 8.37878428,
    type: "bus"
  },
  {
    name: "Loffenau Obere Dorfstraße",
    lat: 48.77399666,
    lon: 8.38991441,
    type: "bus"
  },
  {
    name: "Loffenau Marktplatz",
    lat: 48.77393154,
    lon: 8.38262907,
    type: "bus"
  },
  {
    name: "Loffenau Breitenackerweg",
    lat: 48.77438147,
    lon: 8.39319326,
    type: "bus"
  },
  {
    name: "Oberndorf EKZ",
    lat: 48.82836177,
    lon: 8.27805619,
    type: "bus"
  },
  {
    name: "Oberndorf Abzw. B462",
    lat: 48.82786501,
    lon: 8.28209861,
    type: "bus"
  },
  {
    name: "Kuppenheim Wörtel",
    lat: 48.82813113,
    lon: 8.26281178,
    type: "bus"
  },
  {
    name: "Kuppenheim Rathaus",
    lat: 48.82819618,
    lon: 8.2545922,
    type: "bus"
  },
  {
    name: "Kuppenheim Friedhof",
    lat: 48.82354774,
    lon: 8.2521398,
    type: "bus"
  },
  {
    name: "Kuppenheim Cuppamare",
    lat: 48.82972192,
    lon: 8.26619843,
    type: "bus"
  },
  {
    name: "Kuppenheim Abzw. Favorite",
    lat: 48.82795963,
    lon: 8.24946282,
    type: "bus"
  },
  {
    name: "Staufenberg Sternen",
    lat: 48.76580247,
    lon: 8.29964271,
    type: "bus"
  },
  {
    name: "Staufenberg Mitte",
    lat: 48.76672616,
    lon: 8.30822162,
    type: "bus"
  },
  {
    name: "Staufenberg Erdbeerweg",
    lat: 48.76573142,
    lon: 8.31517458,
    type: "bus"
  },
  {
    name: "Scheuern Sternen",
    lat: 48.7558362,
    lon: 8.34734325,
    type: "bus"
  },
  {
    name: "Scheuern Schule",
    lat: 48.75512552,
    lon: 8.35115211,
    type: "bus"
  },
  {
    name: "Gernsbach Abzw. Scheuern",
    lat: 48.76022445,
    lon: 8.34030046,
    type: "bus"
  },
  {
    name: "Reichental Johannesplatz",
    lat: 48.72866319,
    lon: 8.38862982,
    type: "bus"
  },
  {
    name: "Obertsrot Siedlung",
    lat: 48.749185,
    lon: 8.34865479,
    type: "bus"
  },
  {
    name: "Obertsrot Brücke",
    lat: 48.74542369,
    lon: 8.34725342,
    type: "bus"
  },
  {
    name: "Kaltenbronn Infozentrum",
    lat: 48.70618861,
    lon: 8.43424627,
    type: "bus"
  },
  {
    name: "Hilpertsau Ochsen",
    lat: 48.74015146,
    lon: 8.34592391,
    type: "bus"
  },
  {
    name: "Hilpertsau Abzw. Reichental",
    lat: 48.73425657,
    lon: 8.35126889,
    type: "bus"
  },
  {
    name: "Gernsbach Weinbergstraße",
    lat: 48.76528733,
    lon: 8.32978119,
    type: "bus"
  },
  {
    name: "Rastatt Zum Rohngraben",
    lat: 48.84247593,
    lon: 8.2056969,
    type: "bus"
  },
  {
    name: "Gernsbach Rathaus",
    lat: 48.76304907,
    lon: 8.3374528,
    type: "bus"
  },
  {
    name: "Gernsbach Casimir-Katz-Str.",
    lat: 48.76483732,
    lon: 8.32602623,
    type: "bus"
  },
  {
    name: "Gernsbach",
    lat: 48.76827745,
    lon: 8.33661736,
    type: "bus"
  },
  {
    name: "Gernsbach Bahnhof",
    lat: 48.76792812,
    lon: 8.33616821,
    type: "bus"
  },
  {
    name: "Oberweier Sportplatz",
    lat: 48.84699257,
    lon: 8.3051404,
    type: "bus"
  },
  {
    name: "Oberweier Kirche",
    lat: 48.84721721,
    lon: 8.30896722,
    type: "bus"
  },
  {
    name: "Niederweier Ortsstraße",
    lat: 48.84772559,
    lon: 8.2984749,
    type: "bus"
  },
  {
    name: "Moosbronn Kirche",
    lat: 48.83828999,
    lon: 8.3872015,
    type: "bus"
  },
  {
    name: "Michelbach Wiesental",
    lat: 48.8165151,
    lon: 8.34890632,
    type: "bus"
  },
  {
    name: "Michelbach Mühlplatz",
    lat: 48.81754433,
    lon: 8.35985678,
    type: "bus"
  },
  {
    name: "Michelbach Kirche",
    lat: 48.8178874,
    lon: 8.35099041,
    type: "bus"
  },
  {
    name: "Michelbach Feldstraße",
    lat: 48.81697648,
    lon: 8.35487113,
    type: "bus"
  },
  {
    name: "Ötigheim Fichtenstraße",
    lat: 48.89384341,
    lon: 8.23937474,
    type: "bus"
  },
  {
    name: "Hörden Flößerhalle (Ersatzh.)",
    lat: 48.78270449,
    lon: 8.34370507,
    type: "bus"
  },
  {
    name: "Obertsrot",
    lat: 48.74599235,
    lon: 8.34749596,
    type: "bus"
  },
  {
    name: "Ötigheim Morgenstraße",
    lat: 48.89352448,
    lon: 8.23428129,
    type: "bus"
  },
  {
    name: "Gaggenau Waldfriedhof",
    lat: 48.80354148,
    lon: 8.33368886,
    type: "bus"
  },
  {
    name: "Gaggenau Rathaus",
    lat: 48.80257113,
    lon: 8.32164245,
    type: "bus"
  },
  {
    name: "Gaggenau Michelbacher Straße",
    lat: 48.80140551,
    lon: 8.3280115,
    type: "bus"
  },
  {
    name: "Gaggenau Mercedes-Benz Werk",
    lat: 48.79805049,
    lon: 8.32740963,
    type: "bus"
  },
  {
    name: "Gaggenau",
    lat: 48.80513304,
    lon: 8.32043871,
    type: "bus"
  },
  {
    name: "Gaggenau Bahnhof",
    lat: 48.80470114,
    lon: 8.3205465,
    type: "bus"
  },
  {
    name: "Freiolsheim Friedhof",
    lat: 48.83977994,
    lon: 8.3803204,
    type: "bus"
  },
  {
    name: "Gaggenau Baden-Badener-Str.",
    lat: 48.79562432,
    lon: 8.30869773,
    type: "bus"
  },
  {
    name: "Gaggenau Eckenerstraße",
    lat: 48.79910968,
    lon: 8.3158573,
    type: "bus"
  },
  {
    name: "Bad Rotenfels Glasersteg",
    lat: 48.80844026,
    lon: 8.31520153,
    type: "bus"
  },
  {
    name: "Langenbrand Wolfsheck",
    lat: 48.69786477,
    lon: 8.35288585,
    type: "bus"
  },
  {
    name: "Langenbrand Rathaus",
    lat: 48.70295765,
    lon: 8.36250681,
    type: "bus"
  },
  {
    name: "Hundsb. Viehläger Abz. Biberk.",
    lat: 48.60751255,
    lon: 8.25644273,
    type: "bus"
  },
  {
    name: "Hundsbach Kirche",
    lat: 48.61379051,
    lon: 8.27972706,
    type: "bus"
  },
  {
    name: "Hundsbach Brücke",
    lat: 48.61915912,
    lon: 8.27206443,
    type: "bus"
  },
  {
    name: "Hundsbach Aschenplatz",
    lat: 48.62403432,
    lon: 8.26218296,
    type: "bus"
  },
  {
    name: "Herrenwies Dorfplatz",
    lat: 48.65893674,
    lon: 8.26628826,
    type: "bus"
  },
  {
    name: "Herrenwies Jugendherberge",
    lat: 48.6594411,
    lon: 8.25855377,
    type: "bus"
  },
  {
    name: "Gausbach Rathaus",
    lat: 48.6852341,
    lon: 8.36307275,
    type: "bus"
  },
  {
    name: "Gausbach Montana",
    lat: 48.69173366,
    lon: 8.35941661,
    type: "bus"
  },
  {
    name: "Schwarzenbachtalsperre",
    lat: 48.65364357,
    lon: 8.32679878,
    type: "bus"
  },
  {
    name: "Schindelbronn",
    lat: 48.63181229,
    lon: 8.31637832,
    type: "bus"
  },
  {
    name: "Raumünzach",
    lat: 48.64465816,
    lon: 8.3513138,
    type: "bus"
  },
  {
    name: "Raumünzach Bahnhof",
    lat: 48.64444448,
    lon: 8.35126889,
    type: "bus"
  },
  {
    name: "Forbach Rathaus",
    lat: 48.67811684,
    lon: 8.35873389,
    type: "bus"
  },
  {
    name: "Pandurenbronn",
    lat: 48.62491905,
    lon: 8.29816947,
    type: "bus"
  },
  {
    name: "Kirschbaumwasen",
    lat: 48.623013,
    lon: 8.35569758,
    type: "bus"
  },
  {
    name: "Forbach Holdereck",
    lat: 48.66594992,
    lon: 8.35300264,
    type: "bus"
  },
  {
    name: "Hochries",
    lat: 48.6199608,
    lon: 8.28705731,
    type: "bus"
  },
  {
    name: "Erbersbronn",
    lat: 48.63587298,
    lon: 8.3264125,
    type: "bus"
  },
  {
    name: "Forbach (Schwarzwald)",
    lat: 48.68111807,
    lon: 8.3611773,
    type: "bus"
  },
  {
    name: "Forbach (Schwarzw) Bahnhof",
    lat: 48.6808571,
    lon: 8.36099764,
    type: "bus"
  },
  {
    name: "Raumünzach Wasserfall",
    lat: 48.63912605,
    lon: 8.33959079,
    type: "bus"
  },
  {
    name: "Bühlertal Schönbüch",
    lat: 48.676456,
    lon: 8.18785635,
    type: "bus"
  },
  {
    name: "Bühlertal Schwimmbad",
    lat: 48.68713187,
    lon: 8.18615854,
    type: "bus"
  },
  {
    name: "Bühlertal Schindelpeter",
    lat: 48.67400023,
    lon: 8.19559983,
    type: "bus"
  },
  {
    name: "Bühlertal Post",
    lat: 48.68360908,
    lon: 8.19080283,
    type: "bus"
  },
  {
    name: "Bühlertal Lochweg",
    lat: 48.67372736,
    lon: 8.18749703,
    type: "bus"
  },
  {
    name: "Bühlertal Liehenbachstr./Seniorenz.",
    lat: 48.69490011,
    lon: 8.18003203,
    type: "bus"
  },
  {
    name: "Bühlertal Geiserschmiede",
    lat: 48.68964037,
    lon: 8.18169391,
    type: "bus"
  },
  {
    name: "Bühlertal Gertelbachstraße",
    lat: 48.67045279,
    lon: 8.20059446,
    type: "bus"
  },
  {
    name: "Bühlertal Friedhof Obertal",
    lat: 48.67751776,
    lon: 8.19079384,
    type: "bus"
  },
  {
    name: "Bühlertal Eichwald",
    lat: 48.67717966,
    lon: 8.19606696,
    type: "bus"
  },
  {
    name: "Bühlertal Buchkopf",
    lat: 48.67458749,
    lon: 8.18387682,
    type: "bus"
  },
  {
    name: "Bühlertal Bosch",
    lat: 48.69408183,
    lon: 8.1758369,
    type: "bus"
  },
  {
    name: "Bühlertal Adlergasse",
    lat: 48.69550492,
    lon: 8.17492061,
    type: "bus"
  },
  {
    name: "Weitenung Tankstelle Huck",
    lat: 48.73948203,
    lon: 8.12986112,
    type: "bus"
  },
  {
    name: "Waldmatt Waldmatt",
    lat: 48.66961632,
    lon: 8.15063017,
    type: "bus"
  },
  {
    name: "Weitenung Gottesacker",
    lat: 48.74184575,
    lon: 8.13251115,
    type: "bus"
  },
  {
    name: "Hundseck",
    lat: 48.64532885,
    lon: 8.23130786,
    type: "bus"
  },
  {
    name: "Neusatz (Baden) Wörth",
    lat: 48.66003446,
    lon: 8.16653035,
    type: "bus"
  },
  {
    name: "Neusatz Rathaus (Drei-Tore)",
    lat: 48.65896047,
    lon: 8.14792624,
    type: "bus"
  },
  {
    name: "Neusatz (Baden) Löwen",
    lat: 48.66126271,
    lon: 8.14414433,
    type: "bus"
  },
  {
    name: "Neusatz (Baden) Laube",
    lat: 48.65785085,
    lon: 8.15699024,
    type: "bus"
  },
  {
    name: "Neusatz (Baden) Friedhof",
    lat: 48.66159498,
    lon: 8.14577927,
    type: "bus"
  },
  {
    name: "Neusatz (Baden) Bach",
    lat: 48.65853324,
    lon: 8.16268556,
    type: "bus"
  },
  {
    name: "Bühlertal Bühlerhöhe/Plättig",
    lat: 48.67042906,
    lon: 8.23243076,
    type: "bus"
  },
  {
    name: "Bühl Tankstelle Jäger",
    lat: 48.69054174,
    lon: 8.13270878,
    type: "bus"
  },
  {
    name: "Bühl Rathaus",
    lat: 48.69606228,
    lon: 8.13491863,
    type: "bus"
  },
  {
    name: "Bühl Klostergarten",
    lat: 48.70190236,
    lon: 8.13985937,
    type: "bus"
  },
  {
    name: "Bühl Gymnasium",
    lat: 48.69223177,
    lon: 8.12909755,
    type: "bus"
  },
  {
    name: "Bühl Erich-Burger-Heim",
    lat: 48.6941352,
    lon: 8.14203329,
    type: "bus"
  },
  {
    name: "Bühl (Baden)",
    lat: 48.69669079,
    lon: 8.12950179,
    type: "bus"
  },
  {
    name: "Bühl ZOB/Bahnhof",
    lat: 48.69753867,
    lon: 8.13039113,
    type: "bus"
  },
  {
    name: "Ottersweier Schwarzwaldstraße",
    lat: 48.66771789,
    lon: 8.12048271,
    type: "bus"
  },
  {
    name: "Altschweier Tankstelle",
    lat: 48.69910395,
    lon: 8.167249,
    type: "bus"
  },
  {
    name: "Altschweier Kirche",
    lat: 48.69827388,
    lon: 8.16152673,
    type: "bus"
  },
  {
    name: "Altschweier Grautenbach",
    lat: 48.69648326,
    lon: 8.15233697,
    type: "bus"
  },
  {
    name: "Eisental Abzw. Affental",
    lat: 48.70918817,
    lon: 8.15712499,
    type: "bus"
  },
  {
    name: "Bischweier Rathaus",
    lat: 48.83695373,
    lon: 8.2825298,
    type: "bus"
  },
  {
    name: "Bischweier Murgtalstr. Süd",
    lat: 48.83455901,
    lon: 8.28804546,
    type: "bus"
  },
  {
    name: "Bischweier Kirche",
    lat: 48.8377342,
    lon: 8.28467678,
    type: "bus"
  },
  {
    name: "Bischweier Bahnhofstraße",
    lat: 48.83483692,
    lon: 8.27988875,
    type: "bus"
  },
  {
    name: "Rastatt Oranger Platz",
    lat: 48.8614738,
    lon: 8.19891462,
    type: "bus"
  },
  {
    name: "Eisental Rebstock",
    lat: 48.71313594,
    lon: 8.14700097,
    type: "bus"
  },
  {
    name: "Weitenung Friedhof",
    lat: 48.73759808,
    lon: 8.13375981,
    type: "bus"
  },
  {
    name: "Zell Wiesenweg",
    lat: 48.69408776,
    lon: 8.06403258,
    type: "bus"
  },
  {
    name: "Rastatt Handelslehranstalt",
    lat: 48.86889602,
    lon: 8.20910151,
    type: "bus"
  },
  {
    name: "Bietigheim Ötigheimer Weg",
    lat: 48.90612644,
    lon: 8.24763924,
    type: "bus"
  },
  {
    name: "Michelbach Moosbronner Str.",
    lat: 48.82121152,
    lon: 8.35069397,
    type: "bus"
  },
  {
    name: "Rastatt Realschule",
    lat: 48.848299,
    lon: 8.20876913,
    type: "bus"
  },
  {
    name: "Bühl Rheintalschule",
    lat: 48.69679751,
    lon: 8.11761708,
    type: "bus"
  },
  {
    name: "Bad Rotenfels Eichelbergstraße",
    lat: 48.8205964,
    lon: 8.30774551,
    type: "bus"
  },
  {
    name: "Bad Rotenfels Schloss",
    lat: 48.81927149,
    lon: 8.29806167,
    type: "bus"
  },
  {
    name: "Bad Rotenfels Schloss (Ersatzhalt)",
    lat: 48.82001084,
    lon: 8.29747777,
    type: "bus"
  },
  {
    name: "Bad Rotenfels Weinbrennerstraße",
    lat: 48.81152838,
    lon: 8.31205743,
    type: "bus"
  },
  {
    name: "Bad Rotenfels Weinbrenner (Ersatzh.)",
    lat: 48.812327,
    lon: 8.31415948,
    type: "bus"
  },
  {
    name: "Ottenau",
    lat: 48.79294357,
    lon: 8.33813552,
    type: "bus"
  },
  {
    name: "Ottenau (Ersatzhalt)",
    lat: 48.7912806,
    lon: 8.33812653,
    type: "bus"
  },
  {
    name: "Hörden",
    lat: 48.78161535,
    lon: 8.34515136,
    type: "bus"
  },
  {
    name: "Gernsbach Mitte",
    lat: 48.76273523,
    lon: 8.33913265,
    type: "bus"
  },
  {
    name: "Au im Murgtal",
    lat: 48.71881402,
    lon: 8.36237206,
    type: "bus"
  },
  {
    name: "Bischweier Winkelberg",
    lat: 48.83481918,
    lon: 8.29196211,
    type: "bus"
  },
  {
    name: "Gausbach",
    lat: 48.68665151,
    lon: 8.36238105,
    type: "bus"
  },
  {
    name: "Iffezheim Einkaufszentrum",
    lat: 48.81913545,
    lon: 8.15109729,
    type: "bus"
  },
  {
    name: "Sinzheim Hans-Thoma-Straße",
    lat: 48.75914667,
    lon: 8.16001756,
    type: "bus"
  },
  {
    name: "Bühl Fridolin-Stiegler-Str.",
    lat: 48.70637831,
    lon: 8.12933111,
    type: "bus"
  },
  {
    name: "Neusatz (Baden) Rathaus",
    lat: 48.65883586,
    lon: 8.14825862,
    type: "bus"
  },
  {
    name: "Rastatt Stadtfriedhof",
    lat: 48.86320536,
    lon: 8.21175154,
    type: "bus"
  },
  {
    name: "Rastatt Lyzeumstraße",
    lat: 48.86076461,
    lon: 8.20761031,
    type: "bus"
  },
  {
    name: "Rastatt Krankenhaus",
    lat: 48.86121377,
    lon: 8.20487943,
    type: "bus"
  },
  {
    name: "Rastatt Marktplatz",
    lat: 48.85744312,
    lon: 8.20258872,
    type: "bus"
  },
  {
    name: "Rastatt Bahnhofstraße",
    lat: 48.85907434,
    lon: 8.21056576,
    type: "bus"
  },
  {
    name: "Mehliskopf",
    lat: 48.6569489,
    lon: 8.24111747,
    type: "bus"
  },
  {
    name: "Kirschbaumwasen Kaltenbach",
    lat: 48.63367051,
    lon: 8.3564342,
    type: "bus"
  },
  {
    name: "Ottersweier Hard",
    lat: 48.66669746,
    lon: 8.13732612,
    type: "bus"
  },
  {
    name: "Rastatt Dreherstraße",
    lat: 48.8574313,
    lon: 8.20080108,
    type: "bus"
  },
  {
    name: "Unzhurst Hornisgrindestraße",
    lat: 48.68613555,
    lon: 8.05801386,
    type: "bus"
  },
  {
    name: "Steinmauern Kirche",
    lat: 48.90046954,
    lon: 8.20032497,
    type: "bus"
  },
  {
    name: "Steinmauern Elchesheimer Str.",
    lat: 48.90295558,
    lon: 8.19628255,
    type: "bus"
  },
  {
    name: "Würmersheim Badener Straße",
    lat: 48.93473774,
    lon: 8.25940717,
    type: "bus"
  },
  {
    name: "Sand Kapelle",
    lat: 48.65712692,
    lon: 8.23728166,
    type: "bus"
  },
  {
    name: "Leiberstung Weitenunger Str.",
    lat: 48.75033999,
    lon: 8.09612938,
    type: "bus"
  },
  {
    name: "Steinmauern Karl-Späth-Str.",
    lat: 48.89974319,
    lon: 8.19301268,
    type: "bus"
  },
  {
    name: "Schwarzach (Bd) Leislingstraße",
    lat: 48.74792929,
    lon: 8.03990383,
    type: "bus"
  },
  {
    name: "Bühl Krankenhaus",
    lat: 48.68622451,
    lon: 8.13982344,
    type: "bus"
  },
  {
    name: "Rittersbach Haus Roth",
    lat: 48.67735167,
    lon: 8.14353348,
    type: "bus"
  },
  {
    name: "Waldmatt Wolfhagweg",
    lat: 48.67191807,
    lon: 8.14863591,
    type: "bus"
  },
  {
    name: "Waldmatt Panoramastraße",
    lat: 48.66925444,
    lon: 8.14753098,
    type: "bus"
  },
  {
    name: "Neusatz (Baden) Im Heizler",
    lat: 48.65684802,
    lon: 8.14622842,
    type: "bus"
  },
  {
    name: "Neusatz (Baden) Dreiröhrenbrunnen",
    lat: 48.65512714,
    lon: 8.15315443,
    type: "bus"
  },
  {
    name: "Neusatz (Baden) Tannenweg",
    lat: 48.65561967,
    lon: 8.15716092,
    type: "bus"
  },
  {
    name: "Neusatz (Baden) Kirchbühlstraße",
    lat: 48.6572634,
    lon: 8.15817602,
    type: "bus"
  },
  {
    name: "Neusatzeck Kloster",
    lat: 48.6635055,
    lon: 8.1720999,
    type: "bus"
  },
  {
    name: "Immenstein",
    lat: 48.66647794,
    lon: 8.182179,
    type: "bus"
  },
  {
    name: "Ottersdorf Schule",
    lat: 48.85915117,
    lon: 8.15054034,
    type: "bus"
  },
  {
    name: "Ottersdorf Friedrichstraße",
    lat: 48.85850697,
    lon: 8.16119436,
    type: "bus"
  },
  {
    name: "Ottersdorf Kirche",
    lat: 48.86075279,
    lon: 8.15367546,
    type: "bus"
  },
  {
    name: "Rastatt Leopoldring",
    lat: 48.85330572,
    lon: 8.20098074,
    type: "bus"
  },
  {
    name: "Rastatt Mercedes-Benz Tor 6",
    lat: 48.855008,
    lon: 8.17826235,
    type: "bus"
  },
  {
    name: "Rastatt Ottersdorfer Str.",
    lat: 48.85530944,
    lon: 8.19630052,
    type: "bus"
  },
  {
    name: "Wintersdorf Bannwaldstraße",
    lat: 48.84630091,
    lon: 8.13605949,
    type: "bus"
  },
  {
    name: "Wintersdorf Schule",
    lat: 48.84573339,
    lon: 8.14011988,
    type: "bus"
  },
  {
    name: "Wintersdorf Kirche",
    lat: 48.84712262,
    lon: 8.13889817,
    type: "bus"
  },
  {
    name: "Rauental Kirche",
    lat: 48.85768544,
    lon: 8.24816924,
    type: "bus"
  },
  {
    name: "Rastatt Im Wöhr",
    lat: 48.86283305,
    lon: 8.22892733,
    type: "bus"
  },
  {
    name: "Rastatt Carl-Benz-Straße",
    lat: 48.86508459,
    lon: 8.18967993,
    type: "bus"
  },
  {
    name: "Plittersdorf Bühlstraße",
    lat: 48.88734045,
    lon: 8.1555709,
    type: "bus"
  },
  {
    name: "Plittersdorf Freizeitparadies",
    lat: 48.87359344,
    lon: 8.15063915,
    type: "bus"
  },
  {
    name: "Rastatt Gärtnerei Klingmann",
    lat: 48.87855036,
    lon: 8.17313297,
    type: "bus"
  },
  {
    name: "Rastatt Mercedes-Benz Tor 1",
    lat: 48.87060369,
    lon: 8.18486496,
    type: "bus"
  },
  {
    name: "Plittersdorf Rödereckring",
    lat: 48.88285108,
    lon: 8.15801432,
    type: "bus"
  },
  {
    name: "Plittersdorf Blumenstraße",
    lat: 48.8852494,
    lon: 8.15764601,
    type: "bus"
  },
  {
    name: "Rastatt Stadtpark",
    lat: 48.84753643,
    lon: 8.20171736,
    type: "bus"
  },
  {
    name: "Greffern Mittelstraße",
    lat: 48.75202801,
    lon: 8.00407901,
    type: "bus"
  },
  {
    name: "Grauelsbaum Salmen",
    lat: 48.73585034,
    lon: 7.98279792,
    type: "bus"
  },
  {
    name: "Greffern Volksbank",
    lat: 48.75273874,
    lon: 8.00855262,
    type: "bus"
  },
  {
    name: "Hügelsheim Grüner Baum",
    lat: 48.79689068,
    lon: 8.10997242,
    type: "bus"
  },
  {
    name: "Hügelsheim Nord",
    lat: 48.79850612,
    lon: 8.11395196,
    type: "bus"
  },
  {
    name: "Lichtenau Hirsch",
    lat: 48.72478776,
    lon: 8.00321663,
    type: "bus"
  },
  {
    name: "Lichtenau Schwanen",
    lat: 48.7275077,
    lon: 8.00898381,
    type: "bus"
  },
  {
    name: "Lichtenau Sommerfeldstraße",
    lat: 48.72329439,
    lon: 8.0022734,
    type: "bus"
  },
  {
    name: "Muckenschopf",
    lat: 48.69448504,
    lon: 7.9872895,
    type: "bus"
  },
  {
    name: "Rastatt Merzeau",
    lat: 48.8425587,
    lon: 8.19447694,
    type: "bus"
  },
  {
    name: "Schwarzach (Bd) Bahnhof",
    lat: 48.74448184,
    lon: 8.04661424,
    type: "bus"
  },
  {
    name: "Scherzheim Blume",
    lat: 48.71080644,
    lon: 7.99434128,
    type: "bus"
  },
  {
    name: "Schwarzach (Bd) Hauptstraße",
    lat: 48.7471178,
    lon: 8.04472778,
    type: "bus"
  },
  {
    name: "Stollhofen Krone",
    lat: 48.76397281,
    lon: 8.04799765,
    type: "bus"
  },
  {
    name: "Söllingen Kirche",
    lat: 48.7784958,
    lon: 8.0605022,
    type: "bus"
  },
  {
    name: "Rastatt Am Köpfel",
    lat: 48.86954601,
    lon: 8.19571661,
    type: "bus"
  },
  {
    name: "Rastatt Josef-Kilmarx-Str.",
    lat: 48.87237629,
    lon: 8.19016502,
    type: "bus"
  },
  {
    name: "Rastatt Lindenstraße",
    lat: 48.86943374,
    lon: 8.19119809,
    type: "bus"
  },
  {
    name: "Rastatt Oberwaldstraße",
    lat: 48.86763149,
    lon: 8.19356964,
    type: "bus"
  },
  {
    name: "Rastatt Röttererbergstraße",
    lat: 48.86843512,
    lon: 8.21297325,
    type: "bus"
  },
  {
    name: "Rastatt Rheinauer Gärtle",
    lat: 48.87658301,
    lon: 8.19579746,
    type: "bus"
  },
  {
    name: "Rastatt Rheinauer Ring",
    lat: 48.87512961,
    lon: 8.18941942,
    type: "bus"
  },
  {
    name: "Rastatt Rheinauer Kirchweg",
    lat: 48.87136001,
    lon: 8.19394693,
    type: "bus"
  },
  {
    name: "RA Gustav-Heinemann-Schule",
    lat: 48.87354026,
    lon: 8.19802528,
    type: "bus"
  },
  {
    name: "Rastatt Richard-Strauss-Str.",
    lat: 48.87163181,
    lon: 8.21574006,
    type: "bus"
  },
  {
    name: "Rastatt Waldfriedhof",
    lat: 48.87003054,
    lon: 8.22281878,
    type: "bus"
  },
  {
    name: "Rastatt Dr.-Schleyer-Str.",
    lat: 48.8669283,
    lon: 8.18951824,
    type: "bus"
  },
  {
    name: "Bühl Krankenhaus (R.Koch)",
    lat: 48.68666337,
    lon: 8.14030853,
    type: "bus"
  },
  {
    name: "Neusatzeck Sommerseite",
    lat: 48.66466246,
    lon: 8.17610639,
    type: "bus"
  },
  {
    name: "Rastatt Forum",
    lat: 48.86656783,
    lon: 8.22410338,
    type: "bus"
  },
  {
    name: "Rastatt Karlsruher Straße",
    lat: 48.8649014,
    lon: 8.22029452,
    type: "bus"
  },
  {
    name: "Rastatt Mercedes-Benz Rohbau",
    lat: 48.86422181,
    lon: 8.18600582,
    type: "bus"
  },
  {
    name: "Rastatt Mercedes-Benz Oberfläche",
    lat: 48.86200568,
    lon: 8.18431699,
    type: "bus"
  },
  {
    name: "Rastatt Mercedes-Benz Montage 4.0",
    lat: 48.85694665,
    lon: 8.18067881,
    type: "bus"
  },
  {
    name: "Langenbrand",
    lat: 48.70206243,
    lon: 8.3553652,
    type: "bus"
  },
  {
    name: "Langenbrand Bahnhof",
    lat: 48.70187272,
    lon: 8.35513164,
    type: "bus"
  },
  {
    name: "Bermersbach Rathaus",
    lat: 48.69281288,
    lon: 8.34279777,
    type: "bus"
  },
  {
    name: "Forbach Klingenbach",
    lat: 48.68164001,
    lon: 8.35726065,
    type: "bus"
  },
  {
    name: "Forbach Schule",
    lat: 48.68086304,
    lon: 8.35806913,
    type: "bus"
  },
  {
    name: "Sulzbach Oberdorf",
    lat: 48.80722153,
    lon: 8.36221037,
    type: "bus"
  },
  {
    name: "Sulzbach Unterdorf",
    lat: 48.8058371,
    lon: 8.35755709,
    type: "bus"
  },
  {
    name: "Ottenau Sulzbacher Straße",
    lat: 48.79482544,
    lon: 8.3338236,
    type: "bus"
  },
  {
    name: "Ottenau Merkurschule",
    lat: 48.78891329,
    lon: 8.33588973,
    type: "bus"
  },
  {
    name: "Rastatt Mercedes-Benz Montage 4.1",
    lat: 48.86014407,
    lon: 8.17521706,
    type: "bus"
  },
  {
    name: "Stollhofen Leiberstunger Str.",
    lat: 48.7661755,
    lon: 8.05174362,
    type: "bus"
  },
  {
    name: "Leiberstung Jägerstraße",
    lat: 48.75731676,
    lon: 8.10467236,
    type: "bus"
  },
  {
    name: "Weitenung Ottenhofen",
    lat: 48.73397218,
    lon: 8.13000485,
    type: "bus"
  },
  {
    name: "Vimbuch Apotheke",
    lat: 48.72245287,
    lon: 8.11300872,
    type: "bus"
  },
  {
    name: "Vimbuch Rathaus",
    lat: 48.71772942,
    lon: 8.11569469,
    type: "bus"
  },
  {
    name: "Vimbuch Oberhof",
    lat: 48.71388871,
    lon: 8.11473349,
    type: "bus"
  },
  {
    name: "Bühl Industriegebiet",
    lat: 48.70302879,
    lon: 8.12539649,
    type: "bus"
  },
  {
    name: "Bühl Rheinstraße",
    lat: 48.69887272,
    lon: 8.13444253,
    type: "bus"
  },
  {
    name: "Weitenung Pfarrhaus",
    lat: 48.7402344,
    lon: 8.12743567,
    type: "bus"
  },
  {
    name: "Oberbruch Seestraße",
    lat: 48.72881726,
    lon: 8.08788285,
    type: "bus"
  },
  {
    name: "Oberbruch Rathaus",
    lat: 48.72520257,
    lon: 8.08773912,
    type: "bus"
  },
  {
    name: "Balzhofen Kirche",
    lat: 48.71224683,
    lon: 8.09178153,
    type: "bus"
  },
  {
    name: "Moos Weiherstraße",
    lat: 48.71700042,
    lon: 8.06140051,
    type: "bus"
  },
  {
    name: "Moos Mooser Straße",
    lat: 48.71793686,
    lon: 8.06361935,
    type: "bus"
  },
  {
    name: "Hildmannsfeld Denkmal",
    lat: 48.73413215,
    lon: 8.05865167,
    type: "bus"
  },
  {
    name: "Ulm (Lichtenau) Rathaus",
    lat: 48.7272292,
    lon: 8.01366404,
    type: "bus"
  },
  {
    name: "Oberweier (Bühl) Alte Schule",
    lat: 48.7006929,
    lon: 8.10972089,
    type: "bus"
  },
  {
    name: "Winden (Sinzheim) Schulhof",
    lat: 48.76624656,
    lon: 8.18321206,
    type: "bus"
  },
  {
    name: "Sinzheim Grundschule",
    lat: 48.76105942,
    lon: 8.16498525,
    type: "bus"
  },
  {
    name: "Sinzheim LvK-Schule",
    lat: 48.75576514,
    lon: 8.16427558,
    type: "bus"
  },
  {
    name: "Kartung Schule",
    lat: 48.77203113,
    lon: 8.16721307,
    type: "bus"
  },
  {
    name: "Schiftung Kirche",
    lat: 48.7675551,
    lon: 8.09693786,
    type: "bus"
  },
  {
    name: "Plittersdorf Riedstraße",
    lat: 48.8811202,
    lon: 8.1530107,
    type: "bus"
  },
  {
    name: "Bühl R-Koch-Str/Bachschlossweg",
    lat: 48.68982421,
    lon: 8.13991327,
    type: "bus"
  },
  {
    name: "Rittersbach Gasthaus Blume",
    lat: 48.6803233,
    lon: 8.1373351,
    type: "bus"
  },
  {
    name: "Rittersbach Haus Schneider",
    lat: 48.67800414,
    lon: 8.14513248,
    type: "bus"
  },
  {
    name: "Riegel Café Jägersteig",
    lat: 48.67697798,
    lon: 8.15913721,
    type: "bus"
  },
  {
    name: "Riegel Burg Windeck",
    lat: 48.67203671,
    lon: 8.15838263,
    type: "bus"
  },
  {
    name: "Riegel Gasthaus Rebstock",
    lat: 48.67806346,
    lon: 8.15476242,
    type: "bus"
  },
  {
    name: "Riegel Haus König",
    lat: 48.68105876,
    lon: 8.15090865,
    type: "bus"
  },
  {
    name: "Kappelwindeck Einsiedelhof",
    lat: 48.68617114,
    lon: 8.14744115,
    type: "bus"
  },
  {
    name: "Kappelwindeck Schrein. Rapp",
    lat: 48.68914817,
    lon: 8.14706386,
    type: "bus"
  },
  {
    name: "Kappelwindeck Haus Seifried",
    lat: 48.68805701,
    lon: 8.14978575,
    type: "bus"
  },
  {
    name: "Kappelwindeck Brombachweg",
    lat: 48.68826457,
    lon: 8.15549904,
    type: "bus"
  },
  {
    name: "Kappelwindeck Klotzbergstraße",
    lat: 48.69071964,
    lon: 8.15366647,
    type: "bus"
  },
  {
    name: "Vimbuch Tullaschule",
    lat: 48.72015936,
    lon: 8.11075395,
    type: "bus"
  },
  {
    name: "Kappelwindeck Kirchplatz",
    lat: 48.69202422,
    lon: 8.14564452,
    type: "bus"
  },
  {
    name: "Kappelwindeck Bachschlosssch.",
    lat: 48.69042907,
    lon: 8.14365026,
    type: "bus"
  },
  {
    name: "Bühl A.-Stifter-Straße",
    lat: 48.69186412,
    lon: 8.13137927,
    type: "bus"
  },
  {
    name: "Bühl M.-Luther-Str./Arndtstr.",
    lat: 48.69113474,
    lon: 8.12522581,
    type: "bus"
  },
  {
    name: "Bühl Siemensstraße",
    lat: 48.69624016,
    lon: 8.12213561,
    type: "bus"
  },
  {
    name: "Bühl Kirchgassweg",
    lat: 48.69804857,
    lon: 8.12417478,
    type: "bus"
  },
  {
    name: "Bühl Beethoven-/R.-Schum.-Str.",
    lat: 48.7005506,
    lon: 8.12482157,
    type: "bus"
  },
  {
    name: "Bühl O.-Haefelin/P.-Fischer-S",
    lat: 48.70048539,
    lon: 8.12719312,
    type: "bus"
  },
  {
    name: "Bühl Arndtstr./Berliner Str.",
    lat: 48.68981828,
    lon: 8.12828907,
    type: "bus"
  },
  {
    name: "Plittersdorf Schulstraße",
    lat: 48.88363084,
    lon: 8.1541336,
    type: "bus"
  },
  {
    name: "Bühl Im Grün",
    lat: 48.70042017,
    lon: 8.13633797,
    type: "bus"
  },
  {
    name: "Weitenung Canadastraße",
    lat: 48.734932,
    lon: 8.13278064,
    type: "bus"
  },
  {
    name: "Weitenung Yburgstraße",
    lat: 48.73627099,
    lon: 8.13523304,
    type: "bus"
  },
  {
    name: "Weitenung Witstunger Str.",
    lat: 48.74317862,
    lon: 8.13078638,
    type: "bus"
  },
  {
    name: "Weitenung Alte Post",
    lat: 48.74118818,
    lon: 8.12819924,
    type: "bus"
  },
  {
    name: "Bühl Draisstraße",
    lat: 48.68800956,
    lon: 8.11594622,
    type: "bus"
  },
  {
    name: "Eisental Auerhahn",
    lat: 48.70684663,
    lon: 8.16024214,
    type: "bus"
  },
  {
    name: "Eisental Kapelle",
    lat: 48.71246022,
    lon: 8.15197764,
    type: "bus"
  },
  {
    name: "Bühl LuK (Industriestr.)",
    lat: 48.70590405,
    lon: 8.12595345,
    type: "bus"
  },
  {
    name: "Bühl Robert-Bosch-Straße",
    lat: 48.68923119,
    lon: 8.1184076,
    type: "bus"
  },
  {
    name: "Bühl LuK (Dieselstr.)",
    lat: 48.70985208,
    lon: 8.12655532,
    type: "bus"
  },
  {
    name: "Vimbuch Werkstraße",
    lat: 48.71880809,
    lon: 8.12103068,
    type: "bus"
  },
  {
    name: "Unterstmatt",
    lat: 48.62947903,
    lon: 8.20681081,
    type: "bus"
  },
  {
    name: "Bühlertal Abzw. Burg Windeck",
    lat: 48.66903494,
    lon: 8.18234968,
    type: "bus"
  },
  {
    name: "Wiedenfelsen",
    lat: 48.66030148,
    lon: 8.22070774,
    type: "bus"
  },
  {
    name: "Bühl Rheintalstraße",
    lat: 48.69638246,
    lon: 8.12074322,
    type: "bus"
  },
  {
    name: "Bad Rotenfels Bahnhof/Rotherma",
    lat: 48.81564557,
    lon: 8.30338868,
    type: "bus"
  },
  {
    name: "Bad Rotenfels Bf/Rotherma (Ersatzhalt)",
    lat: 48.81610104,
    lon: 8.3031102,
    type: "bus"
  },
  {
    name: "Kuppenheim",
    lat: 48.83392631,
    lon: 8.25659544,
    type: "bus"
  },
  {
    name: "Kuppenheim Bahnhof",
    lat: 48.83408596,
    lon: 8.25550848,
    type: "bus"
  },
  {
    name: "Bischweier (Baden)",
    lat: 48.83168519,
    lon: 8.2786401,
    type: "bus"
  },
  {
    name: "Bühl Am Froschbächle",
    lat: 48.70736237,
    lon: 8.13156792,
    type: "bus"
  },
  {
    name: "Hilpertsau",
    lat: 48.74030549,
    lon: 8.34878954,
    type: "bus"
  },
  {
    name: "Hilpertsau (Ersatzhalt)",
    lat: 48.7402344,
    lon: 8.34892428,
    type: "bus"
  },
  {
    name: "Plittersdorf Fähre",
    lat: 48.88705692,
    lon: 8.13743392,
    type: "bus"
  },
  {
    name: "Weisenbach",
    lat: 48.72706328,
    lon: 8.35520351,
    type: "bus"
  },
  {
    name: "Vimbuch Vimbuch-Center",
    lat: 48.72449146,
    lon: 8.10974784,
    type: "bus"
  },
  {
    name: "Kaltenbronn Orgelfelsenhaus",
    lat: 48.73534674,
    lon: 8.41566911,
    type: "bus"
  },
  {
    name: "Kaltenbronn Rankhütte",
    lat: 48.73876519,
    lon: 8.41410604,
    type: "bus"
  },
  {
    name: "Kaltenbronn Kreuzle",
    lat: 48.72487072,
    lon: 8.42359225,
    type: "bus"
  },
  {
    name: "Kaltenbronn Schwarzmisshütte",
    lat: 48.71393612,
    lon: 8.42558651,
    type: "bus"
  },
  {
    name: "Staufenberg Neuhaus",
    lat: 48.76680314,
    lon: 8.2943696,
    type: "bus"
  },
  {
    name: "Loffenau Käppele",
    lat: 48.78493004,
    lon: 8.40232913,
    type: "bus"
  },
  {
    name: "Freiolsheim Mayersbild",
    lat: 48.83274959,
    lon: 8.36609109,
    type: "bus"
  },
  {
    name: "Raumünzach Obere Fallbrücke",
    lat: 48.650795,
    lon: 8.33439853,
    type: "bus"
  },
  {
    name: "Hügelsheim Schwarzwaldstraße",
    lat: 48.79613324,
    lon: 8.11377229,
    type: "bus"
  },
  {
    name: "Hochfeld Tennisplätze",
    lat: 48.78735672,
    lon: 8.11528146,
    type: "bus"
  },
  {
    name: "Hochfeld Ahornbrunnen",
    lat: 48.78736856,
    lon: 8.11196668,
    type: "bus"
  },
  {
    name: "Hardtwald Schule",
    lat: 48.78642157,
    lon: 8.10964004,
    type: "bus"
  },
  {
    name: "Airpark Eisstadion",
    lat: 48.78192907,
    lon: 8.09760262,
    type: "bus"
  },
  {
    name: "Hardtwald Victoriastraße",
    lat: 48.7860191,
    lon: 8.10623543,
    type: "bus"
  },
  {
    name: "Moos Kindergarten",
    lat: 48.71908664,
    lon: 8.0651375,
    type: "bus"
  },
  {
    name: "Gaggenau Altenheim",
    lat: 48.80319239,
    lon: 8.31361151,
    type: "bus"
  },
  {
    name: "Rastatt Mercedes-Benz QM",
    lat: 48.86394406,
    lon: 8.17845099,
    type: "bus"
  },
  {
    name: "Rastatt Mercedes-Benz Halle 2.1",
    lat: 48.8659119,
    lon: 8.17946609,
    type: "bus"
  },
  {
    name: "Gaggenau Neuapost. Kirche",
    lat: 48.80636366,
    lon: 8.30704483,
    type: "bus"
  },
  {
    name: "Bad Rotenfels Thermalbad",
    lat: 48.80844026,
    lon: 8.302688,
    type: "bus"
  },
  {
    name: "Rastatt Mercedes-Benz Tor 7",
    lat: 48.85643244,
    lon: 8.17279161,
    type: "bus"
  },
  {
    name: "Gaggenau Waldseebad",
    lat: 48.79837003,
    lon: 8.29750472,
    type: "bus"
  },
  {
    name: "Vimbuch TÜV",
    lat: 48.71465332,
    lon: 8.12180323,
    type: "bus"
  },
  {
    name: "Gaggenau Sommerhalde",
    lat: 48.79914519,
    lon: 8.33577295,
    type: "bus"
  },
  {
    name: "Bühl Bühlert.str/Kappelw.str",
    lat: 48.69388023,
    lon: 8.14106311,
    type: "bus"
  },
  {
    name: "Bühl Bühlertalstr/Hauptstr",
    lat: 48.69398696,
    lon: 8.13627509,
    type: "bus"
  },
  {
    name: "Gaggenau Heil",
    lat: 48.80749959,
    lon: 8.32854151,
    type: "bus"
  },
  {
    name: "Riegel Bühlsbergweg",
    lat: 48.67716186,
    lon: 8.15321732,
    type: "bus"
  },
  {
    name: "Kappelwindeck Öhinghaltweg",
    lat: 48.69165657,
    lon: 8.15200459,
    type: "bus"
  },
  {
    name: "Winden (Sinzheim) Jagdhausstr.",
    lat: 48.76904123,
    lon: 8.18229578,
    type: "bus"
  },
  {
    name: "Hügelsheim Bruchweg",
    lat: 48.79325722,
    lon: 8.10958614,
    type: "bus"
  },
  {
    name: "Söllingen Schule",
    lat: 48.77829453,
    lon: 8.0579959,
    type: "bus"
  },
  {
    name: "Leiberstung Grundschule",
    lat: 48.75154826,
    lon: 8.10107011,
    type: "bus"
  },
  {
    name: "Kappelwindeck Rungsstraße (Ersatz)",
    lat: 48.68716152,
    lon: 8.14668656,
    type: "bus"
  },
  {
    name: "Leiberstung Baggersee",
    lat: 48.75911706,
    lon: 8.11348483,
    type: "bus"
  },
  {
    name: "Lichtenau Schule",
    lat: 48.72508405,
    lon: 8.00884907,
    type: "bus"
  },
  {
    name: "Scherzheim Schule",
    lat: 48.71222905,
    lon: 8.00106966,
    type: "bus"
  },
  {
    name: "Oberweier (Bühl) Kapellenstr.",
    lat: 48.69808415,
    lon: 8.11293686,
    type: "bus"
  },
  {
    name: "Muckenschopf Abzw. Eichwaldstr.",
    lat: 48.6969161,
    lon: 7.9908648,
    type: "bus"
  },
  {
    name: "Bühl Henri-Dunant-Platz",
    lat: 48.70197943,
    lon: 8.12776804,
    type: "bus"
  },
  {
    name: "Eisental Grundschule",
    lat: 48.71311223,
    lon: 8.16171538,
    type: "bus"
  },
  {
    name: "Bühl Erlenstraße",
    lat: 48.70405442,
    lon: 8.13073248,
    type: "bus"
  },
  {
    name: "Bühl Untere Strut",
    lat: 48.71083015,
    lon: 8.13439761,
    type: "bus"
  },
  {
    name: "Ottersdorf Lindenallee",
    lat: 48.86257893,
    lon: 8.15945162,
    type: "bus"
  },
  {
    name: "Ottersdorf Im Streibelgrund",
    lat: 48.8621357,
    lon: 8.16221844,
    type: "bus"
  },
  {
    name: "Bad Rotenfels L.-Erhard-Straße",
    lat: 48.81018548,
    lon: 8.31699816,
    type: "bus"
  },
  {
    name: "Durmersheim Nord",
    lat: 48.9373401,
    lon: 8.27993367,
    type: "bus"
  },
  {
    name: "Durmersheim Nord (Ersatzhalt)",
    lat: 48.93811311,
    lon: 8.27809212,
    type: "bus"
  },
  {
    name: "Sinzheim (b. Bühl) Nord",
    lat: 48.77078783,
    lon: 8.16984513,
    type: "bus"
  },
  {
    name: "Sinzheim (b. Bühl)",
    lat: 48.76005272,
    lon: 8.15863416,
    type: "bus"
  },
  {
    name: "Sinzheim Bahnhof",
    lat: 48.760183,
    lon: 8.15822992,
    type: "bus"
  },
  {
    name: "Sinzheim Kiga. Vormberg",
    lat: 48.7553328,
    lon: 8.17806472,
    type: "bus"
  },
  {
    name: "Leiberstung Kindergarten",
    lat: 48.75243076,
    lon: 8.09783618,
    type: "bus"
  },
  {
    name: "Balzhofen Hauptfeld",
    lat: 48.71227647,
    lon: 8.09548259,
    type: "bus"
  },
  {
    name: "Ulm (Lichtenau) Zinken",
    lat: 48.72554627,
    lon: 8.01991631,
    type: "bus"
  },
  {
    name: "Grauelsbaum Birkenweiher",
    lat: 48.73537636,
    lon: 7.98006705,
    type: "bus"
  },
  {
    name: "Iffezheim Oktorfeld",
    lat: 48.82813113,
    lon: 8.13100198,
    type: "bus"
  },
  {
    name: "Muggensturm Feuerwehr",
    lat: 48.87239402,
    lon: 8.2812003,
    type: "bus"
  },
  {
    name: "Muggensturm Rathaus",
    lat: 48.86780285,
    lon: 8.27829874,
    type: "bus"
  },
  {
    name: "Muggensturm Karlsruher Str.",
    lat: 48.8739893,
    lon: 8.28922225,
    type: "bus"
  },
  {
    name: "Muggensturm Rastatter Str.",
    lat: 48.86939238,
    lon: 8.27612481,
    type: "bus"
  },
  {
    name: "Muggensturm Freibad",
    lat: 48.87627579,
    lon: 8.29043498,
    type: "bus"
  },
  {
    name: "Muggensturm Bachstraße",
    lat: 48.87637623,
    lon: 8.28028401,
    type: "bus"
  },
  {
    name: "Muggensturm Haus Margaretha",
    lat: 48.87105866,
    lon: 8.28340117,
    type: "bus"
  },
  {
    name: "Au Diehl",
    lat: 48.95423739,
    lon: 8.24138696,
    type: "bus"
  },
  {
    name: "Au Ortsmitte",
    lat: 48.95072742,
    lon: 8.23924897,
    type: "bus"
  },
  {
    name: "Au Elchesheimer Str.",
    lat: 48.94953575,
    lon: 8.23285297,
    type: "bus"
  },
  {
    name: "Würmersheim Auer Str.",
    lat: 48.9380541,
    lon: 8.25233742,
    type: "bus"
  },
  {
    name: "Illingen Speyerer Straße",
    lat: 48.93436596,
    lon: 8.21501242,
    type: "bus"
  },
  {
    name: "Illingen Durmersheimer Str.",
    lat: 48.93493838,
    lon: 8.20981118,
    type: "bus"
  },
  {
    name: "Illingen Heimatmuseum",
    lat: 48.93263687,
    lon: 8.20799658,
    type: "bus"
  },
  {
    name: "Elchesheim Grüner Baum",
    lat: 48.92835224,
    lon: 8.20961355,
    type: "bus"
  },
  {
    name: "Au Würmersheimer Str.",
    lat: 48.9499664,
    lon: 8.23998559,
    type: "bus"
  },
  {
    name: "Illingen Gemeindezentrum",
    lat: 48.93006377,
    lon: 8.20921829,
    type: "bus"
  },
  {
    name: "Freiolsheim Rathaus",
    lat: 48.84627726,
    lon: 8.37386152,
    type: "bus"
  },
  {
    name: "Freiolsheim Post",
    lat: 48.84459833,
    lon: 8.37564018,
    type: "bus"
  },
  {
    name: "Freiolsheim Waldparkplatz",
    lat: 48.8408619,
    lon: 8.38054498,
    type: "bus"
  },
  {
    name: "Haßmersheim Ort",
    lat: 49.30129297,
    lon: 9.1476164,
    type: "bus"
  },
  {
    name: "Neckarzimmern Rathaus",
    lat: 49.31790859,
    lon: 9.13432134,
    type: "bus"
  },
  {
    name: "Mosbach West",
    lat: 49.34675153,
    lon: 9.13414167,
    type: "stadtbahn"
  },
  {
    name: "Mosbach West (Ersatzhalt)",
    lat: 49.34700318,
    lon: 9.1335398,
    type: "bus"
  },
  {
    name: "Mosbach (Baden) (Ersatzhalt)",
    lat: 49.35221731,
    lon: 9.14339432,
    type: "bus"
  },
  {
    name: "Mosbach (Baden)",
    lat: 49.35209442,
    lon: 9.14344822,
    type: "bus"
  },
  {
    name: "Haßmersheim",
    lat: 49.30434476,
    lon: 9.15402139,
    type: "bus"
  },
  {
    name: "Haßmersheim (Ersatzhalt)",
    lat: 49.30360673,
    lon: 9.15382376,
    type: "bus"
  },
  {
    name: "Neckarzimmern",
    lat: 49.31694824,
    lon: 9.13699832,
    type: "bus"
  },
  {
    name: "Neckarzimmern (Ersatzhalt)",
    lat: 49.31656175,
    lon: 9.13707018,
    type: "bus"
  },
  {
    name: "Neckarelz (Ersatzhalt)",
    lat: 49.34874128,
    lon: 9.11224075,
    type: "bus"
  },
  {
    name: "Mosbach-Neckarelz",
    lat: 49.34877639,
    lon: 9.11270787,
    type: "bus"
  },
  {
    name: "Sinsheim (Elsenz) Hbf",
    lat: 49.25023973,
    lon: 8.87646892,
    type: "bus"
  },
  {
    name: "Sinsheim Museum/Arena",
    lat: 49.24144909,
    lon: 8.8996185,
    type: "bus"
  },
  {
    name: "Steinsfurt",
    lat: 49.2361763,
    lon: 8.90769436,
    type: "bus"
  },
  {
    name: "Altlußheim Raiffeisenbank",
    lat: 49.30249965,
    lon: 8.49764038,
    type: "bus"
  },
  {
    name: "Altlußheim Rebstöckl",
    lat: 49.30197246,
    lon: 8.49789191,
    type: "bus"
  },
  {
    name: "Pforzheim ZOB / Hbf",
    lat: 48.8936426,
    lon: 8.70587885,
    type: "bus"
  },
  {
    name: "Brötzingen Mitte",
    lat: 48.8890652,
    lon: 8.66666738,
    type: "bus"
  },
  {
    name: "Pforzheim Maihälden",
    lat: 48.89342999,
    lon: 8.67825565,
    type: "bus"
  },
  {
    name: "Brötzingen Sandweg",
    lat: 48.88584601,
    lon: 8.66240039,
    type: "bus"
  },
  {
    name: "Brötzingen Wohnlichstraße",
    lat: 48.88182319,
    lon: 8.65336333,
    type: "bus"
  },
  {
    name: "Pforzheim Hbf",
    lat: 48.89403831,
    lon: 8.70304915,
    type: "bus"
  },
  {
    name: "Bad Wildbad Uhlandplatz",
    lat: 48.75080198,
    lon: 8.54938334,
    type: "bus"
  },
  {
    name: "Calmbach",
    lat: 48.77669619,
    lon: 8.57154478,
    type: "bus"
  },
  {
    name: "Höfen (Enz) Nord",
    lat: 48.80776582,
    lon: 8.58178557,
    type: "bus"
  },
  {
    name: "Calmbach Süd",
    lat: 48.7733632,
    lon: 8.56649625,
    type: "bus"
  },
  {
    name: "Bad Wildbad Nord",
    lat: 48.7639432,
    lon: 8.55510561,
    type: "bus"
  },
  {
    name: "Calmbach Lindenplatz",
    lat: 48.77372434,
    lon: 8.58223473,
    type: "bus"
  },
  {
    name: "Höfen (Enz)",
    lat: 48.79896767,
    lon: 8.58137235,
    type: "bus"
  },
  {
    name: "Höfen (Enz) Sägmühlweg",
    lat: 48.80732802,
    lon: 8.58400441,
    type: "bus"
  },
  {
    name: "Bad Wildbad Bahnhof",
    lat: 48.75594873,
    lon: 8.55163811,
    type: "bus"
  },
  {
    name: "Bad Wildbad",
    lat: 48.75568222,
    lon: 8.55112607,
    type: "bus"
  },
  {
    name: "Bad Wildbad Kurpark",
    lat: 48.74863415,
    lon: 8.55050623,
    type: "bus"
  },
  {
    name: "Hochdorf (b. Horb)",
    lat: 48.48234915,
    lon: 8.72338701,
    type: "bus"
  },
  {
    name: "Höfen (Enz) Hindenburgstraße",
    lat: 48.80677189,
    lon: 8.58407628,
    type: "bus"
  },
  {
    name: "Dobel Dreimarkstein",
    lat: 48.80687247,
    lon: 8.52744648,
    type: "bus"
  },
  {
    name: "Dobel Gesundheitszentrum",
    lat: 48.80048246,
    lon: 8.50265298,
    type: "bus"
  },
  {
    name: "Dobel Ortsmitte",
    lat: 48.7974055,
    lon: 8.49445136,
    type: "bus"
  },
  {
    name: "Dobel Birkengrund",
    lat: 48.79951797,
    lon: 8.49034606,
    type: "bus"
  },
  {
    name: "Neusatz (Württ) Calwer Str.",
    lat: 48.81309011,
    lon: 8.48425548,
    type: "bus"
  },
  {
    name: "Neusatz (Württ) Kirche",
    lat: 48.8164737,
    lon: 8.48140782,
    type: "bus"
  },
  {
    name: "Rotensol Viertelstraße",
    lat: 48.8200345,
    lon: 8.46815767,
    type: "bus"
  },
  {
    name: "Rotensol Lamm",
    lat: 48.81890477,
    lon: 8.46215693,
    type: "bus"
  },
  {
    name: "Rotensol Schwarzwaldstr.",
    lat: 48.81601231,
    lon: 8.46143827,
    type: "bus"
  },
  {
    name: "Bad Herrenalb Bleiche",
    lat: 48.80564186,
    lon: 8.44490029,
    type: "bus"
  },
  {
    name: "Bad Herrenalb Post",
    lat: 48.801299,
    lon: 8.44092075,
    type: "bus"
  },
  {
    name: "Bad Herrenalb",
    lat: 48.8025593,
    lon: 8.43916005,
    type: "stadtbahn"
  },
  {
    name: "Bad Herrenalb Bahnhof",
    lat: 48.80213921,
    lon: 8.43896243,
    type: "bus"
  },
  {
    name: "Bad Herrenalb Falkensteinschule",
    lat: 48.80555311,
    lon: 8.45039798,
    type: "bus"
  },
  {
    name: "Dobel Schule",
    lat: 48.79738183,
    lon: 8.49395729,
    type: "bus"
  },
  {
    name: "Calmbach Parkanlage",
    lat: 48.77545301,
    lon: 8.57535363,
    type: "bus"
  },
  {
    name: "Höfen (Enz) Rathaus",
    lat: 48.80141734,
    lon: 8.58328576,
    type: "bus"
  },
  {
    name: "Calmbach Taubenäckersiedlung",
    lat: 48.77070494,
    lon: 8.56248078,
    type: "bus"
  },
  {
    name: "Bad Wildbad Schwarzer Weg",
    lat: 48.76121338,
    lon: 8.55219507,
    type: "bus"
  },
  {
    name: "Calmbach Birkenhof/Bahnhof",
    lat: 48.77553589,
    lon: 8.57098782,
    type: "bus"
  },
  {
    name: "Bad Herrenalb Steinhäusle (Ersatzhalt)",
    lat: 48.82048993,
    lon: 8.44568182,
    type: "bus"
  },
  {
    name: "Bad Herrenalb Kullenmühle",
    lat: 48.80875973,
    lon: 8.44384926,
    type: "stadtbahn"
  },
  {
    name: "Bernbach Rathaus",
    lat: 48.82370742,
    lon: 8.41586674,
    type: "bus"
  },
  {
    name: "Bernbach Althof",
    lat: 48.83165563,
    lon: 8.39408259,
    type: "bus"
  },
  {
    name: "Bernbach Talblickstr.",
    lat: 48.82052542,
    lon: 8.42024153,
    type: "bus"
  },
  {
    name: "Bad Herrenalb Sägwasenplatz",
    lat: 48.79529885,
    lon: 8.43870191,
    type: "bus"
  },
  {
    name: "Bad Herrenalb Hotel Post",
    lat: 48.79780196,
    lon: 8.4367346,
    type: "bus"
  },
  {
    name: "Bad Herrenalb Gernsbacher Straße",
    lat: 48.79457689,
    lon: 8.43244964,
    type: "bus"
  },
  {
    name: "Bad Herrenalb Rathausplatz",
    lat: 48.79700311,
    lon: 8.43530628,
    type: "bus"
  },
  {
    name: "Bad Herrenalb Kurhaus",
    lat: 48.79900909,
    lon: 8.43722868,
    type: "bus"
  },
  {
    name: "Gaistal Oberes Gaistal",
    lat: 48.76959778,
    lon: 8.44508894,
    type: "bus"
  },
  {
    name: "Gaistal Talwiese",
    lat: 48.76722353,
    lon: 8.44378638,
    type: "bus"
  },
  {
    name: "Gaistal Hirschwinkelbrunnen",
    lat: 48.77776767,
    lon: 8.44238501,
    type: "bus"
  },
  {
    name: "Gaistal Wiesengrund",
    lat: 48.78436774,
    lon: 8.44568182,
    type: "bus"
  },
  {
    name: "Gaistal Unteres Gaistal Schule",
    lat: 48.78158576,
    lon: 8.44771202,
    type: "bus"
  },
  {
    name: "Gaistal Abzw. Unteres Gaistal",
    lat: 48.78707855,
    lon: 8.44394808,
    type: "bus"
  },
  {
    name: "Bad Herrenalb Rotenbächle",
    lat: 48.79145223,
    lon: 8.44204365,
    type: "bus"
  },
  {
    name: "Gaistal Hirschwinkelhütte",
    lat: 48.77776767,
    lon: 8.44007634,
    type: "bus"
  },
  {
    name: "Gaistal Spechtschmiede",
    lat: 48.7689169,
    lon: 8.43681545,
    type: "bus"
  },
  {
    name: "Gaistal Zieflensberg",
    lat: 48.76727682,
    lon: 8.43651002,
    type: "bus"
  },
  {
    name: "Gaistal Bernbacher Weg",
    lat: 48.76296025,
    lon: 8.43297965,
    type: "bus"
  },
  {
    name: "Bad Herrenalb Freibad",
    lat: 48.79277195,
    lon: 8.42653872,
    type: "bus"
  },
  {
    name: "Birkenfeld (Württ.)",
    lat: 48.874202,
    lon: 8.64523358,
    type: "bus"
  },
  {
    name: "Neuenbürg (Württ.)",
    lat: 48.84895517,
    lon: 8.60040765,
    type: "bus"
  },
  {
    name: "Neuenbürg (Württ.) Süd",
    lat: 48.84445053,
    lon: 8.59896136,
    type: "bus"
  },
  {
    name: "Neuenbürg (Württ.) Freibad",
    lat: 48.83693599,
    lon: 8.59033753,
    type: "bus"
  },
  {
    name: "Neuenbürg (Württ.) Eyachbrücke",
    lat: 48.81701197,
    lon: 8.57781502,
    type: "bus"
  },
  {
    name: "Rotenbach",
    lat: 48.83058529,
    lon: 8.57933317,
    type: "bus"
  },
  {
    name: "Königsbach Bf",
    lat: 48.96221795,
    lon: 8.61107963,
    type: "bus"
  },
  {
    name: "Ispringen Kämpfelbachquelle",
    lat: 48.91766856,
    lon: 8.66506838,
    type: "bus"
  },
  {
    name: "Ispringen",
    lat: 48.9144512,
    lon: 8.67220101,
    type: "bus"
  },
  {
    name: "Ispringen Bahnhof",
    lat: 48.9146047,
    lon: 8.67229084,
    type: "bus"
  },
  {
    name: "Ersingen",
    lat: 48.93027033,
    lon: 8.63959216,
    type: "bus"
  },
  {
    name: "Bilfingen",
    lat: 48.94852103,
    lon: 8.62055686,
    type: "bus"
  },
  {
    name: "Königsbach (Baden)",
    lat: 48.96246566,
    lon: 8.60918419,
    type: "bus"
  },
  {
    name: "Wilferdingen-Singen",
    lat: 48.95369468,
    lon: 8.57300005,
    type: "bus"
  },
  {
    name: "Wilferdingen Bahnhof",
    lat: 48.9536062,
    lon: 8.57167953,
    type: "bus"
  },
  {
    name: "Ersingen West",
    lat: 48.93148607,
    lon: 8.63369921,
    type: "bus"
  },
  {
    name: "Ersingen Untere Eisinger Str.",
    lat: 48.93335094,
    lon: 8.63749909,
    type: "bus"
  },
  {
    name: "Ersingen Tankstelle",
    lat: 48.92993984,
    lon: 8.6458624,
    type: "bus"
  },
  {
    name: "Knittlingen ZOB / Schule",
    lat: 49.02596936,
    lon: 8.75896928,
    type: "bus"
  },
  {
    name: "Knittlingen Nord",
    lat: 49.02779535,
    lon: 8.75392075,
    type: "bus"
  },
  {
    name: "Knittlingen Gewerbegeb. Gröner",
    lat: 49.01965444,
    lon: 8.75595992,
    type: "bus"
  },
  {
    name: "Knittlingen Friedrichstraße",
    lat: 49.02297694,
    lon: 8.76085574,
    type: "bus"
  },
  {
    name: "Freudenstadt Stadt",
    lat: 48.46753817,
    lon: 8.41060261,
    type: "bus"
  },
  {
    name: "Freudenstadt Industriegeb. (Ersatz)",
    lat: 48.46471484,
    lon: 8.43493797,
    type: "bus"
  },
  {
    name: "FDS Industriegebiet/Schmid",
    lat: 48.46461358,
    lon: 8.4351356,
    type: "bus"
  },
  {
    name: "Freudenstadt Hbf",
    lat: 48.46056295,
    lon: 8.42809281,
    type: "bus"
  },
  {
    name: "Baiersbronn",
    lat: 48.50346532,
    lon: 8.37218167,
    type: "bus"
  },
  {
    name: "Baiersbronn Schule",
    lat: 48.51067865,
    lon: 8.37596357,
    type: "bus"
  },
  {
    name: "Friedrichstal (Murgtal)",
    lat: 48.4815036,
    lon: 8.37688884,
    type: "bus"
  },
  {
    name: "Heselbach",
    lat: 48.53724957,
    lon: 8.39886163,
    type: "bus"
  },
  {
    name: "Huzenbach",
    lat: 48.58265439,
    lon: 8.39121697,
    type: "bus"
  },
  {
    name: "Schwarzenberg",
    lat: 48.59880408,
    lon: 8.38368909,
    type: "bus"
  },
  {
    name: "Schönmünzach",
    lat: 48.60489898,
    lon: 8.36958554,
    type: "bus"
  },
  {
    name: "Grüntal-Wittlensweiler",
    lat: 48.47548911,
    lon: 8.45942605,
    type: "bus"
  },
  {
    name: "Nationalparkzentrum Ruhestein",
    lat: 48.56115505,
    lon: 8.22186657,
    type: "bus"
  },
  {
    name: "FDS Schulzentrum/Panoramabad",
    lat: 48.46740713,
    lon: 8.4212207,
    type: "bus"
  },
  {
    name: "Dornstetten",
    lat: 48.46962876,
    lon: 8.5030123,
    type: "bus"
  },
  {
    name: "Bittelbronn",
    lat: 48.4444287,
    lon: 8.58907091,
    type: "bus"
  },
  {
    name: "Horb Heiligenfeld",
    lat: 48.46767516,
    lon: 8.66017256,
    type: "bus"
  },
  {
    name: "Eutingen im Gäu",
    lat: 48.47984225,
    lon: 8.78194818,
    type: "bus"
  },
  {
    name: "Eutingen Nord",
    lat: 48.48473089,
    lon: 8.75384888,
    type: "bus"
  },
  {
    name: "Dornstetten-Aach",
    lat: 48.47326774,
    lon: 8.48286309,
    type: "bus"
  },
  {
    name: "Klosterreichenbach",
    lat: 48.52638728,
    lon: 8.3989335,
    type: "bus"
  },
  {
    name: "Röt",
    lat: 48.55528677,
    lon: 8.39710992,
    type: "bus"
  },
  {
    name: "Schopfloch (b. Freudenstadt)",
    lat: 48.45322929,
    lon: 8.54900605,
    type: "bus"
  },
  {
    name: "Renchen",
    lat: 48.59180533,
    lon: 8.00653141,
    type: "bus"
  },
  {
    name: "Seibelseckle",
    lat: 48.59539988,
    lon: 8.21752771,
    type: "bus"
  },
  {
    name: "Stadelhofen Brücke",
    lat: 48.55886609,
    lon: 8.03449597,
    type: "bus"
  },
  {
    name: "Stadelhofen Königsgasse",
    lat: 48.56136314,
    lon: 8.03972416,
    type: "bus"
  },
  {
    name: "Tiergarten Gemeindehalle",
    lat: 48.5583845,
    lon: 8.06471529,
    type: "bus"
  },
  {
    name: "Tiergarten Rebstock",
    lat: 48.55600027,
    lon: 8.06472428,
    type: "bus"
  },
  {
    name: "Tiergarten Spring",
    lat: 48.55203424,
    lon: 8.07096757,
    type: "bus"
  },
  {
    name: "Oberkirch Bahnhof",
    lat: 48.52943919,
    lon: 8.07679764,
    type: "bus"
  },
  {
    name: "Oberkirch Blumenau",
    lat: 48.53887931,
    lon: 8.07211741,
    type: "bus"
  },
  {
    name: "Oberkirch Renchener Straße",
    lat: 48.53349027,
    lon: 8.07709408,
    type: "bus"
  },
  {
    name: "Oberkirch Stadthalle",
    lat: 48.53353191,
    lon: 8.07208148,
    type: "bus"
  },
  {
    name: "Oberkirch H.-Furler-Gymnasium",
    lat: 48.52831482,
    lon: 8.07066214,
    type: "bus"
  },
  {
    name: "Oberkirch Ölmühle",
    lat: 48.53643468,
    lon: 8.06412241,
    type: "bus"
  },
  {
    name: "Maisenbühl Abzweig",
    lat: 48.5363871,
    lon: 8.04234724,
    type: "bus"
  },
  {
    name: "Oberkirch Raiffeisenstraße",
    lat: 48.53284783,
    lon: 8.06795821,
    type: "bus"
  },
  {
    name: "Nußbach Kirche",
    lat: 48.53545918,
    lon: 8.02079666,
    type: "bus"
  },
  {
    name: "Zusenhofen Bahnhof",
    lat: 48.54499928,
    lon: 8.01806578,
    type: "bus"
  },
  {
    name: "Zusenhofen Rathaus",
    lat: 48.54739591,
    lon: 8.01741001,
    type: "bus"
  },
  {
    name: "Appenweier",
    lat: 48.54178772,
    lon: 7.97375189,
    type: "bus"
  },
  {
    name: "Offenburg ZOB",
    lat: 48.47559035,
    lon: 7.94505072,
    type: "bus"
  },
  {
    name: "Rheinbischofsheim Gymnasium",
    lat: 48.65449218,
    lon: 7.9298602,
    type: "bus"
  },
  {
    name: "Freistett Seniorenzentrum",
    lat: 48.66389116,
    lon: 7.93937336,
    type: "bus"
  },
  {
    name: "Haslach Rathaus",
    lat: 48.56574457,
    lon: 8.05991829,
    type: "bus"
  },
  {
    name: "Haslach KiGa Maria Goretti",
    lat: 48.5618982,
    lon: 8.06191255,
    type: "bus"
  },
  {
    name: "Markwaldhütte",
    lat: 48.60688293,
    lon: 8.19234793,
    type: "bus"
  },
  {
    name: "Sasbach Ochsen",
    lat: 48.64063379,
    lon: 8.09260798,
    type: "bus"
  },
  {
    name: "Sasbachried Abzweig",
    lat: 48.65480669,
    lon: 8.09831229,
    type: "bus"
  },
  {
    name: "Achern Gymnasium",
    lat: 48.63588486,
    lon: 8.08115446,
    type: "bus"
  },
  {
    name: "Lauf Niederhofen",
    lat: 48.65280089,
    lon: 8.12723804,
    type: "bus"
  },
  {
    name: "Lauf Neue Schule",
    lat: 48.65053981,
    lon: 8.13057079,
    type: "bus"
  },
  {
    name: "Achern Bahnhof",
    lat: 48.6332965,
    lon: 8.06640413,
    type: "bus"
  },
  {
    name: "Achern",
    lat: 48.63381299,
    lon: 8.06529022,
    type: "bus"
  },
  {
    name: "Helmlingen Ratz",
    lat: 48.69929368,
    lon: 7.9807857,
    type: "bus"
  },
  {
    name: "Helmlingen Molkerei",
    lat: 48.70837605,
    lon: 7.96964659,
    type: "bus"
  },
  {
    name: "Memprechtshofen B36",
    lat: 48.68454615,
    lon: 7.97798295,
    type: "bus"
  },
  {
    name: "Freistett Busbahnhof",
    lat: 48.66665593,
    lon: 7.94202339,
    type: "bus"
  },
  {
    name: "Helmlingen Dorfstraße",
    lat: 48.70445162,
    lon: 7.97193729,
    type: "bus"
  },
  {
    name: "Oberkirch Friedhof",
    lat: 48.52487018,
    lon: 8.07997767,
    type: "bus"
  },
  {
    name: "Oberkirch Realschule",
    lat: 48.5348703,
    lon: 8.07466863,
    type: "bus"
  },
  {
    name: "Oberkirch KiGa Sr. Giovanna",
    lat: 48.53772541,
    lon: 8.0770312,
    type: "bus"
  },
  {
    name: "Bottenau Maisenbühl",
    lat: 48.53075389,
    lon: 8.04442235,
    type: "bus"
  },
  {
    name: "Bottenau St. Wendel",
    lat: 48.52688107,
    lon: 8.04602135,
    type: "bus"
  },
  {
    name: "Bottenau Rathaus",
    lat: 48.51986046,
    lon: 8.04931817,
    type: "bus"
  },
  {
    name: "Bottenau Schlatten",
    lat: 48.52451916,
    lon: 8.05539078,
    type: "bus"
  },
  {
    name: "Hesselbach Haus Braun",
    lat: 48.50983953,
    lon: 8.07358167,
    type: "bus"
  },
  {
    name: "Hesselbach Haus Walz",
    lat: 48.50851238,
    lon: 8.07214436,
    type: "bus"
  },
  {
    name: "Hesselbach Grünberg",
    lat: 48.50353675,
    lon: 8.06829059,
    type: "bus"
  },
  {
    name: "Hesselbach Kapelle",
    lat: 48.51189267,
    lon: 8.07720188,
    type: "bus"
  },
  {
    name: "Hesselbach Albersbach",
    lat: 48.51956891,
    lon: 8.08352602,
    type: "bus"
  },
  {
    name: "Hesselbach Brücke",
    lat: 48.52053877,
    lon: 8.08374161,
    type: "bus"
  },
  {
    name: "Ödsbach Alm",
    lat: 48.50581631,
    lon: 8.09038016,
    type: "bus"
  },
  {
    name: "Ödsbach Heuberg",
    lat: 48.5171293,
    lon: 8.08975134,
    type: "bus"
  },
  {
    name: "Ödsbach Obere Alm",
    lat: 48.5109405,
    lon: 8.09428783,
    type: "bus"
  },
  {
    name: "Ödsbach Schule",
    lat: 48.5005428,
    lon: 8.08766725,
    type: "bus"
  },
  {
    name: "Ringelbach Rathaus",
    lat: 48.55746888,
    lon: 8.08782895,
    type: "bus"
  },
  {
    name: "Niederlehen Schwarzwaldtanne",
    lat: 48.54812737,
    lon: 8.08105565,
    type: "bus"
  },
  {
    name: "Niederlehen Schwender Straße",
    lat: 48.55383594,
    lon: 8.08555621,
    type: "bus"
  },
  {
    name: "Niederlehen Haus Hildebrand",
    lat: 48.55319376,
    lon: 8.08525078,
    type: "bus"
  },
  {
    name: "Ödsbach Vordere Alm",
    lat: 48.5180397,
    lon: 8.08949083,
    type: "bus"
  },
  {
    name: "Sasbach Heimschule Lender",
    lat: 48.63644288,
    lon: 8.08976032,
    type: "bus"
  },
  {
    name: "Lauf Schänzelstraße",
    lat: 48.64840326,
    lon: 8.1241658,
    type: "bus"
  },
  {
    name: "Mummelsee",
    lat: 48.59602371,
    lon: 8.20089989,
    type: "bus"
  },
  {
    name: "Kaltenbrunnen B500",
    lat: 48.61874937,
    lon: 8.19308455,
    type: "bus"
  },
  {
    name: "Eutingen Bahnhof",
    lat: 48.47939563,
    lon: 8.78270277,
    type: "bus"
  },
  {
    name: "Ergenzingen",
    lat: 48.48913681,
    lon: 8.8095085,
    type: "bus"
  },
  {
    name: "Ergenzingen Schlachthäusle",
    lat: 48.4929887,
    lon: 8.81019122,
    type: "bus"
  },
  {
    name: "Roeschwoog Sud",
    lat: 48.82387894,
    lon: 8.03180102,
    type: "bus"
  },
  {
    name: "Soufflenheim Centre de secours",
    lat: 48.83245392,
    lon: 7.96130124,
    type: "bus"
  },
  {
    name: "Beinheim Route du Rhin",
    lat: 48.85853652,
    lon: 8.08484654,
    type: "bus"
  },
  {
    name: "Roppenheim Village de Marques",
    lat: 48.83842007,
    lon: 8.08493637,
    type: "bus"
  },
  {
    name: "Seltz Le Seltzbach",
    lat: 48.89592819,
    lon: 8.10799613,
    type: "bus"
  },
  {
    name: "Kesseldorf Centre",
    lat: 48.87578542,
    lon: 8.06900924,
    type: "bus"
  },
  {
    name: "Beinheim Mairie",
    lat: 48.86309307,
    lon: 8.08421772,
    type: "bus"
  },
  {
    name: "Roppenheim Centre",
    lat: 48.8434455,
    lon: 8.05518417,
    type: "bus"
  },
  {
    name: "Roeschwoog Gare",
    lat: 48.83359517,
    lon: 8.03005829,
    type: "bus"
  },
  {
    name: "Roeschwoog Centre",
    lat: 48.82705481,
    lon: 8.03507089,
    type: "bus"
  },
  {
    name: "Rountzenheim Gare SNCF",
    lat: 48.82048402,
    lon: 8.01238843,
    type: "bus"
  },
  {
    name: "Soufflenheim Hall du Marché",
    lat: 48.82944989,
    lon: 7.96581078,
    type: "bus"
  },
  {
    name: "Soufflenheim Route de Haguenau",
    lat: 48.82989932,
    lon: 7.95789662,
    type: "bus"
  },
  {
    name: "Seltz Gare",
    lat: 48.89628845,
    lon: 8.09803381,
    type: "bus"
  }
];

