/* Contenuti tratti dagli appunti del corso e dal libro di F. Fabbri "Around the clock"
   + cap. "La musica nell'era digitale" + Programma (prof. S. Garino) + Ordinanza SIAE.
   q = query di ricerca YouTube; yt = id video (ove disponibile per riproduzione inline). */
window.DATA = {
  meta:{
    course:"Elementi di Economia dei beni musicali",
    prof:"prof. Simone Garino",
    university:"Università degli Studi di Milano · Informatica Musicale"
  },
  areas:[
    {id:"fond",  title:"Fondamenti & diritti", icon:"💶", color:"#a8455a", short:"Mercato, collecting, diritto d'autore, SIAE, streaming.", desc:"Le strutture economiche di base dell'industria musicale: chi produce e chi consuma, le società di collecting, il diritto d'autore, le ripartizioni SIAE e l'economia dello streaming."},
    {id:"orig",  title:"Precursori: dall'editoria allo show business", icon:"🎭", color:"#c08a3a", short:"Da Napoli e Tin Pan Alley al musical e al cinema.", desc:"La nascita del mercato musicale: editoria, spartiti, caffè concerto, Tin Pan Alley, musical e cinema sonoro. (Fabbri, capp. 2–5, 9–11)"},
    {id:"medlat",title:"Musiche dei porti e dei bassifondi", icon:"🌍", color:"#cf7a4a", short:"Rebetico, flamenco, fado, tango, bossa, reggae, world.", desc:"Generi nati nei bassifondi delle città portuali e ai margini sociali, dove la storia della popular music si sovrappone a quella del folklore: dal Mediterraneo all'America latina, fino alla world music. (Fabbri, capp. 6, 8, 18, 26, 29, 32)"},
    {id:"tech1", title:"Tecnologie del suono (1877–1950)", icon:"🔧", color:"#5f7fb0", short:"Fonografo, grammofono, registrazione, radio, chitarra elettrica.", desc:"Le innovazioni che hanno creato e trasformato il mercato discografico, da Edison alla prima metà del Novecento. (Fabbri, capp. 3, 12)"},
    {id:"afro",  title:"Ragtime, blues, jazz e le voci nere", icon:"🎺", color:"#5d9b74", short:"Ragtime, blues, jazz, crooner, soul.", desc:"Dalla matrice afroamericana nascono ragtime, blues e jazz, fino al rhythm & blues e al soul. (Fabbri, capp. 7, 13, 15)"},
    {id:"rnr",   title:"Il rock'n'roll e le sue alternative", icon:"🎸", color:"#d2774a", short:"Rock'n'roll, cover, folk e Bob Dylan.", desc:"Il primo genere rivolto ai giovani e le sue alternative «perbene», dal folk a Dylan. (Fabbri, capp. 15–16, 20)"},
    {id:"ita",   title:"L'Italia: dal Ventennio a Sanremo ai cantautori", icon:"🇮🇹", color:"#4f93b0", short:"Ventennio, Sanremo, cantacronache, cantautori.", desc:"La musica leggera italiana, dal periodo fascista a Sanremo e ai cantautori. (Fabbri, capp. 14, 17, 19)"},
    {id:"sixties",title:"L'era dei gruppi e dei festival", icon:"🎤", color:"#8f6fb0", short:"Beatles, British Invasion, Beach Boys, Woodstock.", desc:"L'era dei gruppi e dei grandi festival, con lo studio di registrazione che diventa strumento. (Fabbri, capp. 21, 23–24)"},
    {id:"digit", title:"Compact disc, campionatori, rete (1950–2000)", icon:"💻", color:"#5775b8", short:"Transistor, CD, MTV, MP3, Napster, streaming.", desc:"La digitalizzazione del suono e la dirompenza del digitale: dal possesso all'accesso. (Fabbri, capp. 30, 33)"},
    {id:"gen70", title:"Progressive, punk, post-punk, disco, rap", icon:"⚡", color:"#b8556e", short:"Progressive, punk, post-punk, disco, hip-hop.", desc:"Le scene degli anni '70-'80, le musiche urbane post-coloniali e la nascita della discografia indipendente. (Fabbri, capp. 28, 29, 31)"}
  ],

  songs:[
    // --- ORIGINI ---
    {id:"tevoglio",title:"Te voglio bene assaje",artist:"trad. napoletana",year:1839,genre:"Napoletana",country:"Italia",topic:"ita-editoria",q:"Te voglio bene assaje canzone napoletana",yt:"9S6FsxMze1I"},
    {id:"funiculi",title:"Funiculì funiculà",artist:"L. Denza / P. Turco",year:1880,genre:"Napoletana",country:"Italia",topic:"ita-editoria",q:"Funiculì funiculà",yt:"U6VmdP1Qo2s"},
    {id:"osolemio",title:"'O sole mio",artist:"E. di Capua / G. Capurro",year:1898,genre:"Napoletana",country:"Italia",topic:"ita-editoria",q:"O sole mio Pavarotti",yt:"eQSNVBLTXYY"},
    {id:"pinafore",title:"I Am the Monarch of the Sea (H.M.S. Pinafore)",artist:"Gilbert & Sullivan",year:1878,genre:"Operetta",country:"UK",topic:"gilbert",q:"HMS Pinafore I am the monarch of the sea",yt:"iZ-gfalEWI0"},
    {id:"ohsusanna",title:"Oh! Susanna",artist:"Stephen Foster",year:1848,genre:"Minstrel/Popular",country:"USA",topic:"foster",q:"Stephen Foster Oh Susanna",yt:"qSIj17xbAyk"},
    {id:"jumpjimcrow",title:"Jump Jim Crow",artist:"Thomas D. Rice",year:1832,genre:"Minstrel/Popular",country:"USA",topic:"foster",q:"Jump Jim Crow minstrel song",yt:"FKzTaZLEKd4"},
    {id:"alexander",title:"Alexander's Ragtime Band",artist:"Irving Berlin",year:1911,genre:"Tin Pan Alley",country:"USA",topic:"tinpan",q:"Irving Berlin Alexander's Ragtime Band",yt:"xppMR3QVmQI"},
    {id:"mackknife",title:"Die Moritat von Mackie Messer (Mack the Knife)",artist:"Kurt Weill",year:1928,genre:"Kabarett",country:"Germania",topic:"caffe",q:"Kurt Weill Mack the Knife Moritat Mackie Messer",yt:"XcRLY39aHMU"},
    // musical
    {id:"smokeeyes",title:"Smoke Gets in Your Eyes",artist:"Jerome Kern",year:1933,genre:"Musical",country:"USA",topic:"musical",q:"Smoke Gets in Your Eyes Jerome Kern",yt:"sadL0zamrZ8"},
    {id:"allthings",title:"All the Things You Are",artist:"Jerome Kern",year:1939,genre:"Musical",country:"USA",topic:"musical",q:"All the Things You Are Jerome Kern",yt:"9nJvHsq0zjY"},
    {id:"summertime",title:"Summertime (Porgy and Bess)",artist:"George Gershwin",year:1935,genre:"Musical",country:"USA",topic:"musical",q:"Gershwin Summertime Porgy and Bess",yt:"O7-Qa92Rzbk"},
    {id:"myfavorite",title:"My Favorite Things (The Sound of Music)",artist:"Richard Rodgers",year:1959,genre:"Musical",country:"USA",topic:"musical",q:"My Favorite Things Sound of Music",yt:"0IagRZBvLtw"},
    {id:"nightday",title:"Night and Day",artist:"Cole Porter",year:1932,genre:"Musical",country:"USA",topic:"musical",q:"Cole Porter Night and Day",yt:"5WX_fKVWX2s"},
    // cinema
    {id:"blueskies",title:"Blue Skies (The Jazz Singer)",artist:"Al Jolson / I. Berlin",year:1927,genre:"Colonna sonora",country:"USA",topic:"cinema",q:"Al Jolson Blue Skies Jazz Singer 1927",yt:"64rulm3CFhg"},
    {id:"tara",title:"Tara's Theme (Via col vento)",artist:"Max Steiner",year:1939,genre:"Colonna sonora",country:"USA",topic:"cinema",q:"Max Steiner Tara's Theme Gone with the Wind",yt:"rYbpEVBKbjU"},
    {id:"psycho",title:"The Murder (Psycho)",artist:"Bernard Herrmann",year:1960,genre:"Colonna sonora",country:"USA",topic:"cinema",q:"Bernard Herrmann Psycho shower theme",yt:"Me-VhC9ieh0"},
    {id:"anatomy",title:"Main Title (Anatomy of a Murder)",artist:"Duke Ellington",year:1959,genre:"Colonna sonora",country:"USA",topic:"cinema",q:"Duke Ellington Anatomy of a Murder main title",yt:"cntm7j6R1G0"},

    // --- MEDITERRANEE & LATINE ---
    {id:"frango",title:"Frangosyriani",artist:"Markos Vamvakaris",year:1935,genre:"Rebetico",country:"Grecia",topic:"rebetico",q:"Markos Vamvakaris Frangosyriani rebetiko",yt:"MWHemzxaz7s"},
    {id:"ummkulthum",title:"Enta Omri",artist:"Umm Kulthum",year:1964,genre:"Canzone araba",country:"Egitto",topic:"rebetico",q:"Umm Kulthum Enta Omri",yt:"6YjW05dqec8"},
    {id:"entredos",title:"Entre dos aguas",artist:"Paco de Lucía",year:1973,genre:"Flamenco",country:"Spagna",topic:"flamenco",q:"Paco de Lucia Entre dos aguas",yt:"2oyhlad64-s"},
    {id:"leyendatiempo",title:"La Leyenda del Tiempo",artist:"Camarón de la Isla",year:1979,genre:"Flamenco",country:"Spagna",topic:"flamenco",q:"Camaron de la Isla La Leyenda del Tiempo",yt:"MrUWtOtfwDw"},
    {id:"lorca",title:"Los cuatro muleros",artist:"La Argentinita & F. G. Lorca",year:1931,genre:"Flamenco",country:"Spagna",topic:"flamenco",q:"La Argentinita Lorca Los cuatro muleros",yt:"w1FQd76fI3A"},
    {id:"barconegro",title:"Barco Negro",artist:"Amália Rodrigues",year:1955,genre:"Fado",country:"Portogallo",topic:"fado",q:"Amalia Rodrigues Barco Negro",yt:"DVFOUMJXdU8"},
    {id:"porunacabeza",title:"Por una cabeza",artist:"Carlos Gardel",year:1935,genre:"Tango",country:"Argentina",topic:"tango",q:"Carlos Gardel Por una cabeza",yt:"SJ1aTPM-dyE"},
    {id:"libertango",title:"Libertango",artist:"Astor Piazzolla",year:1974,genre:"Tango",country:"Argentina",topic:"tango",q:"Astor Piazzolla Libertango",yt:"kdhTodxH7Gw"},
    {id:"chegade",title:"Chega de Saudade",artist:"João Gilberto / Tom Jobim",year:1958,genre:"Bossa nova",country:"Brasile",topic:"bossa",q:"Joao Gilberto Chega de Saudade",yt:"yUuJrpP0Mak"},
    {id:"desafinado",title:"Desafinado (Jazz Samba)",artist:"Stan Getz & Charlie Byrd",year:1962,genre:"Bossa nova",country:"USA",topic:"bossa",q:"Stan Getz Charlie Byrd Desafinado Jazz Samba",yt:"npKGdsiQz9Q"},
    {id:"ipanema",title:"The Girl from Ipanema",artist:"Getz / Gilberto",year:1964,genre:"Bossa nova",country:"Brasile",topic:"bossa",q:"Girl from Ipanema Getz Gilberto Astrud",yt:"sVdaFQhS86E"},
    {id:"masquenada",title:"Mas, Que Nada!",artist:"Jorge Ben",year:1963,genre:"Bossa nova",country:"Brasile",topic:"bossa",q:"Jorge Ben Mas Que Nada",yt:"hg0XftC43Zo"},
    {id:"tropicalia",title:"Tropicália",artist:"Caetano Veloso",year:1968,genre:"Tropicalismo",country:"Brasile",topic:"bossa",q:"Caetano Veloso Tropicalia 1968",yt:"CFC9ceKUm5Y"},
    {id:"vivirenpaz",title:"El derecho de vivir en paz",artist:"Víctor Jara",year:1971,genre:"Canzone cilena",country:"Cile",topic:"latina",q:"Victor Jara El derecho de vivir en paz",yt:"XkXise2bHE0"},
    {id:"elcantante",title:"El Cantante",artist:"Héctor Lavoe",year:1978,genre:"Salsa",country:"Portorico",topic:"latina",q:"Hector Lavoe El Cantante",yt:"BNo0vkEYWRc"},
    {id:"bananaboat",title:"Banana Boat Song (Day-O)",artist:"Harry Belafonte",year:1956,genre:"Calypso",country:"Giamaica",topic:"latina",q:"Harry Belafonte Day-O Banana Boat Song",yt:"H5dpBWlRANE"},
    {id:"skaravan",title:"Skaravan",artist:"The Skatalites",year:1964,genre:"Ska",country:"Giamaica",topic:"latina",q:"The Skatalites Skaravan",yt:"mKEOcj2l2_8"},
    {id:"ishotmarley",title:"I Shot the Sheriff",artist:"Bob Marley & The Wailers",year:1973,genre:"Reggae",country:"Giamaica",topic:"latina",q:"Bob Marley I Shot the Sheriff",yt:"zGO8HN1QQdI"},
    {id:"mylifebush",title:"Regiment (My Life in the Bush of Ghosts)",artist:"Brian Eno & David Byrne",year:1981,genre:"World",country:"USA",topic:"world",q:"Eno Byrne My Life in the Bush of Ghosts Regiment",yt:"W9WUT4FD9-g"},
    {id:"graceland",title:"Graceland",artist:"Paul Simon",year:1986,genre:"World",country:"USA",topic:"world",q:"Paul Simon Graceland",yt:"GP6a-7MP91g"},
    {id:"sledgehammer",title:"Sledgehammer",artist:"Peter Gabriel",year:1986,genre:"Pop/Rock",country:"UK",topic:"world",q:"Peter Gabriel Sledgehammer",yt:"OJWJE0x7T4Q"},

    // --- TECNOLOGIE 1900-1950 ---
    {id:"caruso",title:"Vesti la giubba (incisione storica)",artist:"Enrico Caruso",year:1907,genre:"Opera",country:"Italia",topic:"fonografo",q:"Enrico Caruso Vesti la giubba 1907",yt:"Rq4VZhZM__I"},
    {id:"thisland",title:"This Land Is Your Land",artist:"Woody Guthrie",year:1944,genre:"Folk",country:"USA",topic:"radio",q:"Woody Guthrie This Land Is Your Land",yt:"wxiMrvDbq3s"},
    {id:"lespaul",title:"How High the Moon",artist:"Les Paul & Mary Ford",year:1951,genre:"Pop/Rock",country:"USA",topic:"chitarra",q:"Les Paul Mary Ford How High the Moon",yt:"NkGf1GHAxhE"},

    // --- AFROAMERICANE ---
    {id:"mapleleaf",title:"Maple Leaf Rag",artist:"Scott Joplin",year:1899,genre:"Ragtime",country:"USA",topic:"ragtime",q:"Scott Joplin Maple Leaf Rag",yt:"bCxLAr_bwpA"},
    {id:"entertainer",title:"The Entertainer",artist:"Scott Joplin",year:1902,genre:"Ragtime",country:"USA",topic:"ragtime",q:"Scott Joplin The Entertainer",yt:"TSoXBkF832I"},
    {id:"stlouis",title:"St. Louis Blues",artist:"W. C. Handy",year:1914,genre:"Blues",country:"USA",topic:"blues",q:"W.C. Handy St. Louis Blues Bessie Smith",yt:"cwRbsULaQIo"},
    {id:"seeseerider",title:"See See Rider Blues",artist:"Ma Rainey",year:1924,genre:"Blues",country:"USA",topic:"blues",q:"Ma Rainey See See Rider Blues",yt:"he9T0R0OCIA"},
    {id:"ponyblues",title:"Pony Blues",artist:"Charley Patton",year:1929,genre:"Blues",country:"USA",topic:"blues",q:"Charley Patton Pony Blues",yt:"sdytu2e3v6Y"},
    {id:"crossroad",title:"Cross Road Blues",artist:"Robert Johnson",year:1936,genre:"Blues",country:"USA",topic:"blues",q:"Robert Johnson Cross Road Blues",yt:"Kxi4XkIVWLQ"},
    {id:"liverystable",title:"Livery Stable Blues",artist:"Original Dixieland Jass Band",year:1917,genre:"Jazz",country:"USA",topic:"jazz",q:"Original Dixieland Jass Band Livery Stable Blues 1917",yt:"5WojNaU4-kI"},
    {id:"whitechristmas",title:"White Christmas",artist:"Bing Crosby",year:1942,genre:"Crooner",country:"USA",topic:"crooner",q:"Bing Crosby White Christmas",yt:"v5ryZdpEHqM"},
    {id:"flymemoon",title:"Fly Me to the Moon",artist:"Frank Sinatra",year:1964,genre:"Crooner",country:"USA",topic:"crooner",q:"Frank Sinatra Fly Me to the Moon",yt:"JYuyWrkwpok"},
    {id:"platterssmoke",title:"Smoke Gets in Your Eyes",artist:"The Platters",year:1958,genre:"Soul",country:"USA",topic:"soul",q:"The Platters Smoke Gets in Your Eyes",yt:"vfBboBz3yoc"},
    {id:"bemybaby",title:"Be My Baby (Wall of Sound)",artist:"The Ronettes",year:1963,genre:"Soul",country:"USA",topic:"soul",q:"The Ronettes Be My Baby",yt:"jSPpbOGnFgk"},
    {id:"changegonnacome",title:"A Change Is Gonna Come",artist:"Sam Cooke",year:1964,genre:"Soul",country:"USA",topic:"soul",q:"Sam Cooke A Change Is Gonna Come",yt:"wEBlaMOmKV4"},
    {id:"georgia",title:"Georgia on My Mind",artist:"Ray Charles",year:1960,genre:"Soul",country:"USA",topic:"soul",q:"Ray Charles Georgia on My Mind",yt:"ggGzE5KfCio"},
    {id:"whatsgoingon",title:"What's Going On",artist:"Marvin Gaye",year:1971,genre:"Soul",country:"USA",topic:"soul",q:"Marvin Gaye What's Going On",yt:"H-kA3UtBj4M"},
    {id:"superstition",title:"Superstition",artist:"Stevie Wonder",year:1972,genre:"Soul",country:"USA",topic:"soul",q:"Stevie Wonder Superstition",yt:"0CFuCYNx-1g"},
    {id:"iwantyouback",title:"I Want You Back",artist:"The Jackson 5",year:1969,genre:"Soul",country:"USA",topic:"soul",q:"Jackson 5 I Want You Back",yt:"y2bVIBwpCTA"},
    {id:"babylove",title:"Baby Love",artist:"The Supremes",year:1964,genre:"Soul",country:"USA",topic:"soul",q:"The Supremes Baby Love",yt:"D6QF4sB40gU"},
    {id:"papasbag",title:"Papa's Got a Brand New Bag",artist:"James Brown",year:1965,genre:"Soul",country:"USA",topic:"soul",q:"James Brown Papa's Got a Brand New Bag",yt:"QE5D2hJhacU"},
    {id:"dockbay",title:"(Sittin' On) The Dock of the Bay",artist:"Otis Redding",year:1968,genre:"Soul",country:"USA",topic:"soul",q:"Otis Redding Dock of the Bay",yt:"rTVjnBo96Ug"},

    // --- ROCK'N'ROLL ---
    {id:"rollover",title:"Roll Over Beethoven",artist:"Chuck Berry",year:1956,genre:"Rock'n'roll",country:"USA",topic:"rocknroll",q:"Chuck Berry Roll Over Beethoven",yt:"LvcROx4cxng"},
    {id:"sixtyminute",title:"Sixty Minute Man",artist:"Billy Ward & The Dominoes",year:1951,genre:"Rock'n'roll",country:"USA",topic:"rocknroll",q:"Sixty Minute Man The Dominoes",yt:"N_KZn3z7QNo"},
    {id:"rockclock",title:"Rock Around the Clock",artist:"Bill Haley & His Comets",year:1954,genre:"Rock'n'roll",country:"USA",topic:"rocknroll",q:"Bill Haley Rock Around the Clock",yt:"VsAlSuEG26A"},
    {id:"heartbreak",title:"Heartbreak Hotel",artist:"Elvis Presley",year:1956,genre:"Rock'n'roll",country:"USA",topic:"rocknroll",q:"Elvis Presley Heartbreak Hotel",yt:"e9BLw4W5KU8"},
    {id:"jailhouse",title:"Jailhouse Rock",artist:"Elvis Presley",year:1957,genre:"Rock'n'roll",country:"USA",topic:"rocknroll",q:"Elvis Presley Jailhouse Rock",yt:"gj0Rz-uP4Mk"},
    {id:"thatlbe",title:"That'll Be the Day",artist:"Buddy Holly",year:1957,genre:"Rock'n'roll",country:"USA",topic:"rocknroll",q:"Buddy Holly That'll Be the Day",yt:"M4TfFTmITLo"},
    {id:"spellonyou",title:"I Put a Spell on You",artist:"Screamin' Jay Hawkins",year:1956,genre:"Rock'n'roll",country:"USA",topic:"rocknroll",q:"Screamin Jay Hawkins I Put a Spell on You",yt:"82cdnAUvsw8"},
    {id:"likerolling",title:"Like a Rolling Stone",artist:"Bob Dylan",year:1965,genre:"Folk",country:"USA",topic:"folkdylan",q:"Bob Dylan Like a Rolling Stone",yt:"IwOfCgkyEj0"},
    {id:"blowin",title:"Blowin' in the Wind",artist:"Bob Dylan",year:1963,genre:"Folk",country:"USA",topic:"folkdylan",q:"Bob Dylan Blowin in the Wind",yt:"MMFj8uDubsE"},

    // --- ITALIA ---
    {id:"leggendapiave",title:"La leggenda del Piave",artist:"E. A. Mario",year:1918,genre:"Pop italiano",country:"Italia",topic:"leggera",q:"La leggenda del Piave E A Mario",yt:"Wgxjbnje3bU"},
    {id:"tammurriata",title:"Tammurriata nera",artist:"E. A. Mario",year:1944,genre:"Napoletana",country:"Italia",topic:"leggera",q:"Tammurriata nera",yt:"nq7q-fYVK28"},
    {id:"crapapelada",title:"Crapa pelada",artist:"Gorni Kramer",year:1936,genre:"Pop italiano",country:"Italia",topic:"leggera",q:"Gorni Kramer Crapa pelada Quartetto Cetra",yt:"qckWhsw-RZM"},
    {id:"volare",title:"Nel blu dipinto di blu (Volare)",artist:"Domenico Modugno",year:1958,genre:"Pop italiano",country:"Italia",topic:"sanremo",q:"Domenico Modugno Volare Nel blu dipinto di blu Sanremo 1958",yt:"J3M9nWEAjK4"},
    {id:"chebambola",title:"Che bambola",artist:"Fred Buscaglione",year:1956,genre:"Pop italiano",country:"Italia",topic:"sanremo",q:"Fred Buscaglione Che bambola",yt:"cXx8PdQY07w"},
    {id:"tuvuofa",title:"Tu vuò fà l'americano",artist:"Renato Carosone",year:1956,genre:"Napoletana",country:"Italia",topic:"sanremo",q:"Renato Carosone Tu vuo fa l'americano",yt:"BqlJwMFtMCs"},
    {id:"cieloinunastanza",title:"Il cielo in una stanza",artist:"Gino Paoli / Mina",year:1960,genre:"Cantautori",country:"Italia",topic:"cantautori",q:"Mina Il cielo in una stanza",yt:"x8YkoHWVb-Q"},
    {id:"ciaoamoreciao",title:"Ciao amore ciao",artist:"Luigi Tenco",year:1967,genre:"Cantautori",country:"Italia",topic:"cantautori",q:"Luigi Tenco Ciao amore ciao Sanremo 1967",yt:"AwXjos1SUSs"},
    {id:"bellaciao",title:"Bella ciao",artist:"trad. partigiana",year:1963,genre:"Cantautori",country:"Italia",topic:"cantautori",q:"Bella ciao canzone partigiana",yt:"Lqs2oIBFPxI"},
    {id:"24milabaci",title:"24 mila baci",artist:"Adriano Celentano",year:1961,genre:"Pop italiano",country:"Italia",topic:"rnr-ita",q:"Adriano Celentano 24 mila baci",yt:"9ufQQ3r79EE"},
    {id:"larmando",title:"L'Armando",artist:"Enzo Jannacci",year:1968,genre:"Cantautori",country:"Italia",topic:"rnr-ita",q:"Enzo Jannacci L'Armando",yt:"U74yps9oeKs"},
    {id:"lamer",title:"La Mer",artist:"Charles Trenet",year:1946,genre:"Chanson",country:"Francia",topic:"chanson",q:"Charles Trenet La Mer",yt:"ka--QM_tJ-s"},
    {id:"vieenrose",title:"La Vie en rose",artist:"Édith Piaf",year:1946,genre:"Chanson",country:"Francia",topic:"chanson",q:"Edith Piaf La Vie en rose",yt:"rzeLynj1GYM"},
    {id:"feuillesmortes",title:"Les Feuilles mortes",artist:"Yves Montand",year:1946,genre:"Chanson",country:"Francia",topic:"chanson",q:"Yves Montand Les Feuilles mortes",yt:"Xo1C6E7jbPw"},

    // --- ANNI '60 ---
    {id:"sheloves",title:"She Loves You",artist:"The Beatles",year:1963,genre:"Beat/Pop",country:"UK",topic:"beatles",q:"The Beatles She Loves You",yt:"nGbWU8S3vzs"},
    {id:"hardday",title:"A Hard Day's Night",artist:"The Beatles",year:1964,genre:"Beat/Pop",country:"UK",topic:"beatles",q:"The Beatles A Hard Day's Night",yt:"Yjyj8qnqkYI"},
    {id:"iffell",title:"If I Fell",artist:"The Beatles",year:1964,genre:"Beat/Pop",country:"UK",topic:"beatles",q:"The Beatles If I Fell",yt:"F_80s6S_7Vw"},
    {id:"inmylife",title:"In My Life",artist:"The Beatles",year:1965,genre:"Pop/Rock",country:"UK",topic:"beatles",q:"The Beatles In My Life",yt:"YBcdt6DsLQA"},
    {id:"tomorrownever",title:"Tomorrow Never Knows",artist:"The Beatles",year:1966,genre:"Psichedelia",country:"UK",topic:"beatles",q:"The Beatles Tomorrow Never Knows",yt:"m4BuziKGMy4"},
    {id:"dayinlife",title:"A Day in the Life (Sgt. Pepper's)",artist:"The Beatles",year:1967,genre:"Psichedelia",country:"UK",topic:"beatles",q:"The Beatles A Day in the Life",yt:"usNsCeOV4GM"},
    {id:"revolution9",title:"Revolution 9",artist:"The Beatles",year:1968,genre:"Psichedelia",country:"UK",topic:"beatles",q:"The Beatles Revolution 9",yt:"SNdcFPjGsm8"},
    {id:"theend",title:"The End (Abbey Road)",artist:"The Beatles",year:1969,genre:"Pop/Rock",country:"UK",topic:"beatles",q:"The Beatles The End Abbey Road",yt:"12R4FzIhdoQ"},
    {id:"satisfaction",title:"(I Can't Get No) Satisfaction",artist:"The Rolling Stones",year:1965,genre:"Pop/Rock",country:"UK",topic:"gruppi",q:"Rolling Stones Satisfaction",yt:"nrIPxlFzDi0"},
    {id:"reallygot",title:"You Really Got Me",artist:"The Kinks",year:1964,genre:"Pop/Rock",country:"UK",topic:"gruppi",q:"The Kinks You Really Got Me",yt:"fTTsY-oz6Go"},
    {id:"mygeneration",title:"My Generation",artist:"The Who",year:1965,genre:"Pop/Rock",country:"UK",topic:"gruppi",q:"The Who My Generation",yt:"qN5zw04WxCc"},
    {id:"believer",title:"I'm a Believer",artist:"The Monkees",year:1966,genre:"Pop/Rock",country:"USA",topic:"gruppi",q:"The Monkees I'm a Believer",yt:"5tpxXDILZHs"},
    {id:"goodvibrations",title:"Good Vibrations",artist:"The Beach Boys",year:1966,genre:"Psichedelia",country:"USA",topic:"gruppi",q:"Beach Boys Good Vibrations",yt:"apBWI6xrbLY"},
    {id:"wouldntnice",title:"Wouldn't It Be Nice (Pet Sounds)",artist:"The Beach Boys",year:1966,genre:"Psichedelia",country:"USA",topic:"gruppi",q:"Beach Boys Wouldn't It Be Nice Pet Sounds",yt:"6Vv_dkDwZeQ"},
    {id:"freedom",title:"Freedom (Woodstock)",artist:"Richie Havens",year:1969,genre:"Folk",country:"USA",topic:"festival",q:"Richie Havens Freedom Woodstock",yt:"rynxqdNMry4"},
    {id:"whiterabbit",title:"White Rabbit",artist:"Jefferson Airplane",year:1967,genre:"Psichedelia",country:"USA",topic:"festival",q:"Jefferson Airplane White Rabbit",yt:"pnJM_jC7j_4"},
    {id:"starspangled",title:"Star Spangled Banner (Woodstock)",artist:"Jimi Hendrix",year:1969,genre:"Psichedelia",country:"USA",topic:"festival",q:"Jimi Hendrix Star Spangled Banner Woodstock",yt:"sjzZh6-h9fM"},

    // --- DIGITALE / TECNOLOGIE 1950-2000 ---
    {id:"watchtower",title:"All Along the Watchtower (mix stereo)",artist:"Jimi Hendrix",year:1968,genre:"Psichedelia",country:"USA",topic:"tech60",q:"Jimi Hendrix All Along the Watchtower",yt:"TLV4_xaYynY"},
    {id:"pipergates",title:"Astronomy Domine (Piper at the Gates of Dawn)",artist:"Pink Floyd",year:1967,genre:"Psichedelia",country:"UK",topic:"tech60",q:"Pink Floyd Astronomy Domine",yt:"8UbNbor3OqQ"},
    {id:"spaceoddity",title:"Space Oddity",artist:"David Bowie",year:1969,genre:"Pop/Rock",country:"UK",topic:"tech60",q:"David Bowie Space Oddity",yt:"iYYRH4apXDo"},
    {id:"ironman",title:"Iron Man",artist:"Black Sabbath",year:1970,genre:"Pop/Rock",country:"UK",topic:"tech60",q:"Black Sabbath Iron Man",yt:"b3-QqGVt-tM"},
    {id:"shockmonkey",title:"Shock the Monkey (Fairlight)",artist:"Peter Gabriel",year:1982,genre:"Pop/Rock",country:"UK",topic:"digitalizzazione",q:"Peter Gabriel Shock the Monkey",yt:"CnVf1ZoCJSo"},
    {id:"videokilled",title:"Video Killed the Radio Star",artist:"The Buggles",year:1979,genre:"Pop/Rock",country:"UK",topic:"mtv",q:"The Buggles Video Killed the Radio Star",yt:"W8r-tXRLazs"},
    {id:"billiejean",title:"Billie Jean",artist:"Michael Jackson",year:1982,genre:"Pop/Rock",country:"USA",topic:"mtv",q:"Michael Jackson Billie Jean",yt:"Zi_XLOBDo_Y"},
    {id:"thriller",title:"Thriller",artist:"Michael Jackson",year:1982,genre:"Pop/Rock",country:"USA",topic:"mtv",q:"Michael Jackson Thriller official video",yt:"sOnqjkJTMaA"},
    {id:"inrainbows",title:"Jigsaw Falling into Place (In Rainbows)",artist:"Radiohead",year:2007,genre:"Pop/Rock",country:"UK",topic:"streaming-storia",q:"Radiohead Jigsaw Falling into Place",yt:"GoLJJRIWCLU"},

    // --- PROG / PUNK / POST-PUNK / DISCO / RAP ---
    {id:"schizoid",title:"21st Century Schizoid Man",artist:"King Crimson",year:1969,genre:"Progressive",country:"UK",topic:"prog",q:"King Crimson 21st Century Schizoid Man",yt:"7OvW8Z7kiws"},
    {id:"firthoffifth",title:"Firth of Fifth",artist:"Genesis",year:1973,genre:"Progressive",country:"UK",topic:"prog",q:"Genesis Firth of Fifth",yt:"Rz-tHZEr37I"},
    {id:"roundabout",title:"Roundabout",artist:"Yes",year:1971,genre:"Progressive",country:"UK",topic:"prog",q:"Yes Roundabout",yt:"LuGAWR2eRyQ"},
    {id:"luckyman",title:"Lucky Man",artist:"Emerson, Lake & Palmer",year:1970,genre:"Progressive",country:"UK",topic:"prog",q:"Emerson Lake Palmer Lucky Man",yt:"yRvljAT4O6Q"},
    {id:"mooninjune",title:"Moon in June",artist:"Soft Machine",year:1970,genre:"Progressive",country:"UK",topic:"prog",q:"Soft Machine Moon in June",yt:"IJFSIX_uVPM"},
    {id:"impressioni",title:"Impressioni di settembre",artist:"PFM",year:1972,genre:"Progressive",country:"Italia",topic:"prog",q:"PFM Impressioni di settembre",yt:"OzbDUbu1lMM"},
    {id:"bancorip",title:"R.I.P. (Requiescant in pace)",artist:"Banco del Mutuo Soccorso",year:1972,genre:"Progressive",country:"Italia",topic:"prog",q:"Banco del Mutuo Soccorso RIP",yt:"oF0MQ339Imc"},
    {id:"arealuglio",title:"Luglio, agosto, settembre (nero)",artist:"Area",year:1973,genre:"Progressive",country:"Italia",topic:"prog",q:"Area Luglio agosto settembre nero",yt:"kj1P7S47eZQ"},
    {id:"phaedra",title:"Phaedra",artist:"Tangerine Dream",year:1974,genre:"Krautrock/Elettronica",country:"Germania",topic:"prog",q:"Tangerine Dream Phaedra",yt:"HIQ0dd7B_FU"},
    {id:"vitaminc",title:"Vitamin C",artist:"Can",year:1972,genre:"Krautrock/Elettronica",country:"Germania",topic:"prog",q:"Can Vitamin C",yt:"YmN9oHa3ZIQ"},
    {id:"robots",title:"The Robots (Die Roboter)",artist:"Kraftwerk",year:1978,genre:"Krautrock/Elettronica",country:"Germania",topic:"prog",q:"Kraftwerk The Robots",yt:"D_8Pma1vHmw"},
    {id:"autobahn",title:"Autobahn",artist:"Kraftwerk",year:1974,genre:"Krautrock/Elettronica",country:"Germania",topic:"prog",q:"Kraftwerk Autobahn",yt:"iukUMRlaBBE"},
    {id:"heroes",title:"Heroes (trilogia berlinese)",artist:"David Bowie",year:1977,genre:"Pop/Rock",country:"UK",topic:"prog",q:"David Bowie Heroes",yt:"lXgkuM2NhYI"},
    {id:"chinagirl",title:"China Girl (The Idiot)",artist:"Iggy Pop",year:1977,genre:"Pop/Rock",country:"USA",topic:"prog",q:"Iggy Pop China Girl The Idiot",yt:"9BBAEUOOFKQ"},
    {id:"wannadog",title:"I Wanna Be Your Dog",artist:"The Stooges",year:1969,genre:"Punk",country:"USA",topic:"punk",q:"The Stooges I Wanna Be Your Dog",yt:"3gsWt7ey6bo"},
    {id:"kickoutjams",title:"Kick Out the Jams",artist:"MC5",year:1969,genre:"Punk",country:"USA",topic:"punk",q:"MC5 Kick Out the Jams",yt:"qUzgztAtezo"},
    {id:"personalitycrisis",title:"Personality Crisis",artist:"New York Dolls",year:1973,genre:"Punk",country:"USA",topic:"punk",q:"New York Dolls Personality Crisis",yt:"2aQTGqqXHw4"},
    {id:"blitzkrieg",title:"Blitzkrieg Bop",artist:"Ramones",year:1976,genre:"Punk",country:"USA",topic:"punk",q:"Ramones Blitzkrieg Bop",yt:"268C3N2dDYk"},
    {id:"anarchyuk",title:"Anarchy in the U.K.",artist:"Sex Pistols",year:1976,genre:"Punk",country:"UK",topic:"punk",q:"Sex Pistols Anarchy in the UK",yt:"q31WY0Aobro"},
    {id:"godsavequeen",title:"God Save the Queen",artist:"Sex Pistols",year:1977,genre:"Punk",country:"UK",topic:"punk",q:"Sex Pistols God Save the Queen",yt:"yqrAPOZxgzU"},
    {id:"londoncalling",title:"London Calling",artist:"The Clash",year:1979,genre:"Punk",country:"UK",topic:"punk",q:"The Clash London Calling",yt:"EfK-WX2pa8c"},
    {id:"whiteriot",title:"White Riot",artist:"The Clash",year:1977,genre:"Punk",country:"UK",topic:"punk",q:"The Clash White Riot",yt:"IvG3is7Bm1w"},
    {id:"owealiving",title:"Do They Owe Us a Living?",artist:"Crass",year:1978,genre:"Punk",country:"UK",topic:"punk",q:"Crass Do They Owe Us a Living",yt:"Furrw0VDpWM"},
    {id:"publicimage",title:"Public Image",artist:"Public Image Ltd",year:1978,genre:"Post-punk",country:"UK",topic:"postpunk",q:"Public Image Ltd Public Image",yt:"rIAZ8unRm2c"},
    {id:"loveteartus",title:"Love Will Tear Us Apart",artist:"Joy Division",year:1980,genre:"Post-punk",country:"UK",topic:"postpunk",q:"Joy Division Love Will Tear Us Apart",yt:"zuuObGsB0No"},
    {id:"shecontrol",title:"She's Lost Control (Unknown Pleasures)",artist:"Joy Division",year:1979,genre:"Post-punk",country:"UK",topic:"postpunk",q:"Joy Division She's Lost Control",yt:"s4prQ11orEM"},
    {id:"onceinlifetime",title:"Once in a Lifetime (Remain in Light)",artist:"Talking Heads",year:1980,genre:"Post-punk",country:"USA",topic:"postpunk",q:"Talking Heads Once in a Lifetime",yt:"CemsX7hvv9U"},
    {id:"aforest",title:"A Forest",artist:"The Cure",year:1980,genre:"Post-punk",country:"UK",topic:"postpunk",q:"The Cure A Forest",yt:"xik-y0xlpZ0"},
    {id:"hongkong",title:"Hong Kong Garden",artist:"Siouxsie and the Banshees",year:1978,genre:"Post-punk",country:"UK",topic:"postpunk",q:"Siouxsie and the Banshees Hong Kong Garden",yt:"Y-l9GQJRl9Y"},
    {id:"stayinalive",title:"Stayin' Alive (La febbre del sabato sera)",artist:"Bee Gees",year:1977,genre:"Disco",country:"UK",topic:"disco",q:"Bee Gees Stayin' Alive",yt:"fNFzfwLM72c"},
    {id:"rappersdelight",title:"Rapper's Delight",artist:"The Sugarhill Gang",year:1979,genre:"Hip-hop",country:"USA",topic:"rap",q:"Sugarhill Gang Rapper's Delight",yt:"H8yUxDOHlh8"},
    {id:"themessage",title:"The Message",artist:"Grandmaster Flash & the Furious Five",year:1982,genre:"Hip-hop",country:"USA",topic:"rap",q:"Grandmaster Flash The Message",yt:"gYMkEMCHtJ4"},
    {id:"planetrock",title:"Planet Rock",artist:"Afrika Bambaataa",year:1982,genre:"Hip-hop",country:"USA",topic:"rap",q:"Afrika Bambaataa Planet Rock",yt:"9J3lwZjHenA"},
    {id:"rapture",title:"Rapture",artist:"Blondie",year:1981,genre:"Hip-hop",country:"USA",topic:"rap",q:"Blondie Rapture",yt:"pHCdS7O248g"},
    {id:"walkthisway",title:"Walk This Way",artist:"Run-DMC & Aerosmith",year:1986,genre:"Hip-hop",country:"USA",topic:"rap",q:"Run DMC Aerosmith Walk This Way",yt:"4B_UYYPb-Gk"},
    {id:"micfiend",title:"Microphone Fiend",artist:"Eric B. & Rakim",year:1988,genre:"Hip-hop",country:"USA",topic:"rap",q:"Eric B Rakim Microphone Fiend",yt:"uPfIIn5V_LQ"},
    {id:"fuckpolice",title:"Fuck tha Police",artist:"N.W.A",year:1988,genre:"Hip-hop",country:"USA",topic:"rap",q:"NWA Straight Outta Compton",yt:"TMZi25Pq3T8"}
  ],

  topics:[
    /* ===== FONDAMENTI ===== */
    {id:"mercato",area:"fond",title:"Il mercato musicale",lead:"Chi produce e chi consuma la musica, e come il settore si divide in 'piccolo' e 'grande'.",
      body:[
        {t:"p",x:"Il mercato musicale è suddiviso tra chi **produce** la musica (musicisti e interpreti, autori e compositori, produttori…) e chi la **consuma** (supporti fisici, servizi di streaming, musica dal vivo…)."},
        {t:"h",x:"La filiera"},
        {t:"ul",x:["**Piccolo settore musicale**: le attività strettamente legate alla creazione o alla fruizione di musica.","**Grande settore musicale**: comprende anche le attività complementari (strumenti, media, pubblicità, hardware…)."]},
        {t:"note",x:"Per ogni transazione attivata dal consumatore parte del denaro viene distribuito sotto forma di **royalties**: flussi legati ai diritti, mediati dalle **società di collecting**."}
      ],
      keywords:["filiera","royalties","piccolo settore","grande settore","produzione/consumo"],
      related:["collecting","diritto","streaming-econ"]},

    {id:"collecting",area:"fond",title:"Società di collecting (SIAE, IMAIE, SCF)",lead:"Gli enti che raccolgono e ridistribuiscono i flussi legati ai diritti, divisi per chi rappresentano.",
      body:[
        {t:"p",x:"Le società di collecting si dividono a seconda di chi rappresentano. In Italia:"},
        {t:"ul",x:["**Autori** → SIAE (Società Italiana Autori ed Editori)","**Interpreti ed esecutori** → Nuovo IMAIE","**Case discografiche** → SCF (Società Consortile Fonografici)"]},
        {t:"h",x:"SIAE"},
        {t:"p",x:"Nasce come ente privato a Milano a fine '800, oggi ente pubblico a base associativa. Concede autorizzazioni e licenze, raccoglie e ridistribuisce il denaro generato, verifica gli utilizzi illeciti delle opere tutelate."},
        {t:"h",x:"Nuovo IMAIE e SCF"},
        {t:"p",x:"Il **Nuovo IMAIE** incassa per conto degli interpreti i proventi della riutilizzazione delle opere (radio, tv, locali) e li ripartisce. **SCF** tutela la registrazione discografica: il diritto alla riproduzione di un brano è esclusivo del **produttore fonografico**, e non è tutelato dalla SIAE."}
      ],
      keywords:["SIAE","Nuovo IMAIE","SCF","produttore fonografico","ente a base associativa"],
      related:["diritto","siae-rip","mercato"]},

    {id:"diritto",area:"fond",title:"Il diritto d'autore in Italia",lead:"Diritto morale e patrimoniale, diritti connessi, plagio e parodia.",
      body:[
        {t:"ul",x:["**Diritto morale**: decidere se/quando pubblicare, rivendicare la paternità, ritirare l'opera. È **inalienabile e irrinunciabile**; alla morte dell'autore è cedibile agli eredi.","**Diritto patrimoniale**: utilizzare economicamente l'opera e percepirne i compensi. Dura fino a **70 anni dopo la morte** dell'autore (o dell'ultimo coautore); poi l'opera è di **dominio pubblico**. È cedibile e commerciabile."]},
        {t:"p",x:"**Diritti connessi**: spettano a soggetti non direttamente coinvolti nella creazione (interpreti, esecutori, produttori fonografici), titolari anch'essi di diritti patrimoniali."},
        {t:"h",x:"Plagio e parodia"},
        {t:"p",x:"**Plagio**: appropriazione (anche inconsapevole) del «carattere specifico» di un'opera tutelata. Vanno dimostrate **somiglianza** tra le opere e **possibilità di accesso** all'originale. La **parodia autorizzata** genera royalties agli autori dell'originale (musica) e all'artista parodiante (testo ed esecuzione)."},
        {t:"note",x:"Caso '**O sole mio**': dichiarata di dominio pubblico nel 1898, nel 2025 si individua un terzo autore morto nel 1972 → il brano torna tutelato (fino al 2042) e la SIAE deve risarcire oltre 100 anni di royalties."}
      ],
      keywords:["diritto morale","diritto patrimoniale","70 anni","dominio pubblico","diritti connessi","plagio","parodia"],
      related:["collecting","siae-rip","ita-editoria"]},

    {id:"siae-rip",area:"fond",title:"L'ordinanza SIAE: ripartizioni e coefficienti",lead:"Ripartizioni analitiche vs non analitiche (supplementari), coefficienti, e la musica online.",
      body:[
        {t:"p",x:"La SIAE ripartisce gli incassi tra gli aventi diritto. La **ripartizione analitica** distribuisce in base all'uso effettivo dei brani (durata, numero di esecuzioni/stream); la **non analitica (supplementare)** usa campionamenti e stime quando il monitoraggio puntuale non è possibile."},
        {t:"h",x:"Coefficienti per radio e tv"},
        {t:"ul",x:["**Coeff. 1 – fascia oraria**: il moltiplicatore varia con l'ora (in radio conta di più la mattina; in tv la prima serata).","**Coeff. 2 – funzione della musica**: protagonista, di sottofondo, sigla/stacchetto… più il ruolo è 'importante', più genera introiti."]},
        {t:"h",x:"Musica online (Ordinanza 2025)"},
        {t:"p",x:"Gli incassi da **piattaforme musicali** (Spotify, YouTube, Apple Music) e **social** (Facebook, Instagram, TikTok) sono ripartiti **analiticamente in base al numero di stream**. Il digitale rende possibile la ripartizione analitica integrale: ogni ascolto è tracciato, contro il campionamento dell'era radiofonica."},
        {t:"note",x:"Storicamente **2/3 delle royalties** provenivano dalle esecuzioni in radio: la rilevazione degli ascolti è il cuore del sistema."}
      ],
      keywords:["ripartizione analitica","supplementare","coefficiente fascia oraria","funzione della musica","musica online","stream"],
      related:["collecting","streaming-econ","radio"]},

    {id:"streaming-econ",area:"fond",title:"Economia dello streaming e dei diritti",lead:"Le canzoni come asset finanziario, la vendita dei cataloghi, i ghost artist.",
      body:[
        {t:"p",x:"Gli introiti dello streaming sono **piccoli ma prevedibili**: questo rende le canzoni **investimenti finanziari** abbastanza stabili. Banche e startup comprano cataloghi come **portafogli di royalties**."},
        {t:"p",x:"Di fronte al calo delle entrate per stream, artisti come **Bob Dylan**, gli eredi di **David Bowie** e **Justin Bieber** hanno venduto i diritti del loro catalogo, che garantisce a chi lo compra entrate piccole ma costanti."},
        {t:"p",x:"Cresce il disinteresse per la musica corrente in favore della **musica di catalogo** (calo dello share dei Grammy, crescita degli ascolti di artisti del passato)."},
        {t:"note",x:"**Ghost artist**: l'inchiesta di **Liz Pelly** (caso Marquis stark) rivela che in playlist tematiche Spotify inserisce brani di artisti fantasma di cui acquista i diritti: il profitto va interamente a Spotify."}
      ],
      keywords:["asset finanziario","vendita cataloghi","ghost artist","Liz Pelly","musica di catalogo"],
      related:["siae-rip","streaming-storia","mercato"]},

    /* ===== ORIGINI ===== */
    {id:"nascita-econ",area:"orig",title:"La nascita dell'economia musicale",lead:"Da Mozart libero professionista alla scissione tra musica colta, popolare e popular.",
      body:[
        {t:"p",x:"L'economia di mercato in ambito musicale nasce nelle **corti europee del '700**. **Mozart** è il primo musicista a uscire dalla corte e vivere della propria arte come libero professionista, prima ancora che esistesse un vero mercato."},
        {t:"p",x:"A fine '700 nasce la **litografia**, che permette una rapida diffusione degli spartiti. Alla morte di **Beethoven** la musica, come la letteratura, è inserita in un'economia di mercato: nasce la figura del **musicista professionista** e una scissione tra **musica colta/d'arte** e **musica folkloristica/leggera**."},
        {t:"note",x:"Da questa divisione, nell'800, nasce la **popular music**: a differenza delle altre due (considerate 'pure' e 'autentiche'), è dettata dalle logiche di mercato. Johann Strauss è considerato il padre del valzer."}
      ],
      keywords:["Mozart","litografia","Beethoven","musica colta/popolare/popular","mercato"],
      related:["ita-editoria","tinpan","gilbert"]},

    {id:"ita-editoria",area:"orig",title:"Editoria italiana e canzone napoletana",lead:"Napoli, la SIAE e i primi grandi successi: Te voglio bene assaje, Funiculì funiculà, 'O sole mio.",
      body:[
        {t:"p",x:"L'editoria italiana ha origine a **Napoli** nei primi decenni dell'800. Si impone la **canzone napoletana**:"},
        {t:"ul",x:["**Te voglio bene assaje**: tra le prime composizioni in forma di canzone (strofa-ritornello).","**Funiculì funiculà**: scritta per la funicolare del Vesuvio, primo esempio del potere d'influenza della canzone, frutto di più mestieri (musicista, paroliere, giornalista, pubblicitario). Nello stesso periodo nasce la **SIAE** a Milano.","**'O sole mio**: la più nota, al centro di un lungo contenzioso sul dominio pubblico."]}
      ],
      keywords:["Napoli","canzone napoletana","SIAE","editoria","strofa-ritornello"],
      related:["nascita-econ","diritto","sanremo"]},

    {id:"gilbert",area:"orig",title:"Gilbert & Sullivan e la pirateria degli spartiti",lead:"H.M.S. Pinafore, repliche non autorizzate e l'esplosione del mercato degli spartiti.",
      body:[
        {t:"p",x:"**William Gilbert** (scrittore) e **Arthur Sullivan** (compositore) firmano operette satiriche di grande successo di fine '800, tra cui **H.M.S. Pinafore**: centinaia di repliche, molte **non autorizzate**, che non pagavano royalties."},
        {t:"p",x:"In America Pinafore pone le basi del teatro musicale di **Broadway** e fa esplodere il mercato degli **spartiti**, spesso piratati per mancanza di leggi internazionali sul copyright. La vendita di spartiti diventa la principale fonte di reddito della nascente industria, a scapito del teatro."}
      ],
      keywords:["Gilbert & Sullivan","Pinafore","pirateria spartiti","Broadway","copyright internazionale"],
      related:["foster","tinpan","musical"]},

    {id:"foster",area:"orig",title:"Stephen Foster e il minstrel show",lead:"Il precursore della popular music morto povero, e la catena minstrel → cakewalk → ragtime.",
      body:[
        {t:"p",x:"**Stephen Foster** (Oh! Susanna) è un antesignano della popular music: lavora a metà '800, quando la musica d'intrattenimento si stacca da colta e popolare. In assenza di norme sulle royalties **muore povero**, precursore di Tin Pan Alley."},
        {t:"p",x:"Si afferma il **minstrel show**: spettacolo di musicisti **bianchi truccati da neri**, avviato dal personaggio **Jim Crow** (Jump Jim Crow). Dal minstrel nasce il **cakewalk**, ballo afroamericano che parodia le imitazioni dei bianchi, su musica **ragtime**."},
        {t:"h",x:"Tappe legislative USA"},
        {t:"ul",x:["**1831**: legge sul diritto d'autore musicale (tutela degli spartiti).","**1909**: il Copyright Act include rulli di pianoforte e supporti fonografici.","**1914**: nasce **ASCAP**, prima società di collecting americana."]}
      ],
      keywords:["Stephen Foster","minstrel show","Jim Crow","cakewalk","ASCAP 1914","Copyright Act 1909"],
      related:["gilbert","tinpan","ragtime","radio"]},

    {id:"tinpan",area:"orig",title:"Tin Pan Alley",lead:"Il quartiere-fabbrica della canzone americana e la figura del song plugger.",
      body:[
        {t:"p",x:"**Tin Pan Alley** è il quartiere di New York (così chiamato per il suono metallico dei pianoforti) sede dell'industria musicale americana. Nasce il **song plugger**: chi convince — anche con incentivi economici — impresari e musicisti a inserire determinate canzoni negli spettacoli."},
        {t:"note",x:"La struttura delle canzoni di Tin Pan Alley sarà ripresa direttamente, decenni dopo, perfino dai **Beatles**."}
      ],
      keywords:["Tin Pan Alley","song plugger","industria della canzone","New York"],
      related:["foster","musical","beatles","radio"]},

    {id:"caffe",area:"orig",title:"Caffè concerto, cabaret, kabarett",lead:"Lo spettacolo informale tra palco e platea: Parigi, Napoli, Berlino.",
      body:[
        {t:"p",x:"Il **café chantant** (Francia, fine '800) è uno spettacolo meno formale del teatro: il pubblico mangia, fuma, si muove mentre assiste a musica, comici, ballerini, prestigiatori (Moulin Rouge, Ba-ta-clan)."},
        {t:"p",x:"Il **cabaret** ha clientela anticonformista e maggiore libertà espressiva (Le Chat Noir; **Aristide Bruant**, ritratto da Toulouse-Lautrec; **Yvette Guilbert**, che canta poesie di Baudelaire e Verlaine)."},
        {t:"p",x:"In Italia (Napoli) il modello è incarnato dalle **sciantose** (Elvira Donnarumma). In Germania il **kabarett** di Berlino riunisce la scena musicale e teatrale: **Friedrich Hollaender** (L'angelo azzurro) e **Kurt Weill** (L'opera da tre soldi, poi ripresa dai Doors e da Milva)."}
      ],
      keywords:["café chantant","cabaret","kabarett","sciantose","Kurt Weill","Aristide Bruant"],
      related:["chanson","nascita-econ"]},

    {id:"musical",area:"orig",title:"Il musical americano",lead:"Da Cohan a Gershwin: l'opera originale e l'incontro tra Tin Pan Alley e jazz.",
      body:[
        {t:"p",x:"**George Cohan** è il primo grande autore di musical: il suo successo spinge a scrivere **opere originali intere**, superando la logica del song plugger."},
        {t:"ul",x:["**Jerome Kern**: Smoke Gets in Your Eyes, All the Things You Are.","**George Gershwin**: unisce Tin Pan Alley e jazz; **Porgy and Bess**, pensata per interpreti neri.","**Richard Rodgers**: My Funny Valentine, The Lady Is a Tramp, The Sound of Music (My Favorite Things).","**Cole Porter**: Night and Day."]}
      ],
      keywords:["George Cohan","Jerome Kern","Gershwin","Porgy and Bess","Cole Porter","Richard Rodgers"],
      related:["gilbert","tinpan","cinema","jazz"]},

    {id:"cinema",area:"orig",title:"Il cinema sonoro e la musica da film",lead:"Da The Jazz Singer alla golden age di Hollywood, fino al jazz nelle colonne sonore.",
      body:[
        {t:"p",x:"Il **1895** (Lumière) è la data simbolica del cinema. Per trent'anni il cinema è **muto**, sonorizzato dal vivo; **John Zamecnik** compone musiche tematiche riutilizzabili."},
        {t:"p",x:"Nel **1927** esce **The Jazz Singer**, primo film sonoro (con un brano di Irving Berlin): i primi film vanno sincronizzati a mano; dal 1930 la musica è registrata sulla pellicola. **Blackmail** di Hitchcock è il primo sonoro europeo."},
        {t:"p",x:"La musica da film è considerata di serie B (eccezioni: Prokof'ev, Šostakóvič). Golden age: **Max Steiner** (Via col vento, Casablanca, King Kong), **Bernard Herrmann** (Quarto potere, Taxi Driver, Hitchcock). Nel **1959 Anatomia di un omicidio** ha la prima colonna sonora di un'orchestra afroamericana, la big band di **Duke Ellington**."}
      ],
      keywords:["The Jazz Singer 1927","cinema muto","Max Steiner","Bernard Herrmann","Duke Ellington","colonna sonora"],
      related:["musical","jazz","crooner"]},

    /* ===== MUSICHE DEI PORTI E DEI BASSIFONDI ===== */
    {id:"rebetico",area:"medlat",title:"Rebetico e canzone araba",lead:"Il 'blues greco' e Umm Kulthum, tra crisi economica e poesia cantata.",
      body:[
        {t:"p",x:"Il **rebetico** nasce in Grecia dalle condizioni disastrose seguite alla Prima guerra mondiale e alla guerra greco-turca (1919-1922). Cantato, con elementi orientali, legato alla parte bassa della società: l'equivalente del blues per i neri o del fado per i portoghesi."},
        {t:"p",x:"La maggiore esponente della **canzone araba** è **Umm Kulthum**: firma con la Gramophone nel 1926, dal 1937 si esibisce in concerti radiofonici; i suoi brani sono lunghe composizioni su poesie."}
      ],
      keywords:["rebetico","Umm Kulthum","musica dei porti","blues greco"],
      related:["fado","flamenco","jazz"]},

    {id:"flamenco",area:"medlat",title:"Flamenco (primo e nuevo)",lead:"Dai gitani e cante jondo a Paco de Lucía e Camarón, tra purezza e contaminazione.",
      body:[
        {t:"p",x:"Il **flamenco** (inizialmente cante jondo) è definito a metà '800, suonato dai **gitani** del sud della Spagna. Rivalità tra **El Nitri** (flamenco esclusivo dei gitani) e **Silverio Franconetti** (espansione, portandolo nei café). **Antonio Chacón** è la prima star non gitana, tra i primi registrati al fonografo. Sotto il **franchismo** (1939-1975) il flamenco subisce censure."},
        {t:"p",x:"**Flamenco nuevo**: col microsolco **Paco de Lucía** diventa star internazionale; **Camarón de la Isla** (La Leyenda del Tiempo) inserisce chitarra elettrica, batteria e sitar, criticato dai puristi. Aprono alla contaminazione (Paco introduce il **cajón** peruviano)."}
      ],
      keywords:["flamenco","cante jondo","gitani","Paco de Lucía","Camarón","franchismo","cajón"],
      related:["fado","tango","world"]},

    {id:"fado",area:"medlat",title:"Fado",lead:"Lisbona portuale, i bassifondi e Amália Rodrigues, regina del fado.",
      body:[
        {t:"p",x:"Il **fado** (fato) ha origini dubbie: a **Lisbona**, città portuale con forte presenza africana, circolano danze come la fofa e il lundum. L'espressione «battere il fado» rimanda al battito dei talloni; «casa di fado» era il bordello: lo sviluppo è legato ai bassifondi e ad allusioni sessuali."},
        {t:"p",x:"Figure chiave: **Amália Rodrigues** (regina del fado) e **José Afonso**."}
      ],
      keywords:["fado","Lisbona","Amália Rodrigues","musica dei porti"],
      related:["rebetico","flamenco","jazz"]},

    {id:"tango",area:"medlat",title:"Tango (primo e nuevo)",lead:"Gardel, primo divo internazionale, e la rivoluzione di Piazzolla.",
      body:[
        {t:"p",x:"Il **tango** è un genere meticcio sudamericano, nato dall'incontro tra culture (argentina, uruguaiana, africana, brasiliana, cubana). **Carlos Gardel**, primo **divo internazionale della popular music**, è mito nazionale argentino. **Osvaldo Pugliese**, censurato dalla dittatura, fonda negli anni '30 uno dei primi sindacati di musicisti fuori dagli USA."},
        {t:"p",x:"**Tango nuevo**: **Astor Piazzolla**, come Camarón per il flamenco, è prima considerato un 'inquinatore' (strumenti elettrici), poi accettato."}
      ],
      keywords:["tango","Carlos Gardel","Piazzolla","sindacato musicisti","tango nuevo"],
      related:["flamenco","fado","bossa"]},

    {id:"bossa",area:"medlat",title:"Samba, bossa nova, tropicalismo",lead:"Da Orfeu Negro a Ipanema, fino all'apertura internazionale del tropicalismo.",
      body:[
        {t:"p",x:"Nel 1961 **Orfeu Negro** (musiche di Tom Jobim e Luiz Bonfà) vince a Cannes e lancia il **samba** brasiliano. Nasce la **bossa nova** (Chega de Saudade, Desafinado). Arriva in America con l'album **Jazz Samba** (Stan Getz & Charlie Byrd); **Astrud Gilberto** presta la voce a **Garota de Ipanema**, la più importante canzone brasiliana."},
        {t:"p",x:"Si forma una scena di giovani (Nara Leão, Jorge Ben con Mas, Que Nada!). Nel 1965 nasce il festival della **MPB**, ispirato a Sanremo, vinto da **Elis Regina**. Con **tropicalismo** e **antropofagia** la MPB si apre a folk e rock psichedelico (Tropicália ou Panis et Circensis, con Gilberto Gil e Caetano)."}
      ],
      keywords:["samba","bossa nova","Tom Jobim","Garota de Ipanema","MPB","tropicalismo"],
      related:["tango","latina","world","jazz"]},

    {id:"latina",area:"medlat",title:"Canzone cilena, salsa, ska, reggae",lead:"Víctor Jara, la barriera linguistica e la nascita di ska e reggae in Giamaica.",
      body:[
        {t:"p",x:"**Canzone cilena**: Víctor Jara (El derecho de vivir en paz, contro la guerra in Vietnam). **Salsa**: scena cubano-portoricana-panamense (mambo, cha-cha), riferimento **Héctor Lavoe**."},
        {t:"p",x:"Il principale ostacolo della musica ispanofona era la **barriera linguistica**. In **Giamaica** l'inglese era lingua ufficiale (Banana Boat Song di Harry Belafonte). Nasce lo **ska** (accento in levare della chitarra; Skaravan da Caravan di Ellington)."},
        {t:"p",x:"Il **reggae** nasce con la cultura **rasta** (anticoloniale): **Bob Marley & The Wailers** (trio vocale r'n'b) diventa la prima star internazionale dal terzo mondo. Influenza vastissima: Eric Clapton (I Shot the Sheriff), i Police, e il **punk** dei Clash."}
      ],
      keywords:["Víctor Jara","salsa","Héctor Lavoe","ska","reggae","Bob Marley","rasta"],
      related:["bossa","rap","punk","world"]},

    {id:"world",area:"medlat",title:"World music",lead:"WOMAD, la digitalizzazione delle registrazioni e il nodo dell'appropriazione culturale.",
      body:[
        {t:"p",x:"Nel **1979 Peter Gabriel** fonda il **WOMAD**, festival che unisce arti da tutto il mondo. La **digitalizzazione** del suono rende più facile registrare musiche dei paesi del terzo mondo."},
        {t:"p",x:"**Brian Eno & David Byrne** pubblicano nel 1981 **My Life in the Bush of Ghosts**: campionano la voce di una cantante libanese che non riceve compensi e solo nel 2017 scopre di essere nell'album (poi un accordo extragiudiziale). **Paul Simon** (Graceland) è accusato di appropriazione culturale da Steven Van Zandt."},
        {t:"note",x:"Tema economico-giuridico ricorrente: il **campionamento** e i diritti di chi viene campionato — un nodo che il digitale rende esplosivo (vedi [[topic:rap|hip-hop]] e [[topic:postpunk|post-punk]])."}
      ],
      keywords:["WOMAD","Peter Gabriel","My Life in the Bush of Ghosts","Paul Simon","appropriazione culturale","campionamento"],
      related:["flamenco","bossa","digitalizzazione","postpunk"]},

    /* ===== TECNOLOGIE 1900-1950 ===== */
    {id:"fonografo",area:"tech1",title:"Fonografo e grammofono",lead:"Da Edison (1877) a Berliner (1888): l'inizio del moderno mercato musicale.",
      body:[
        {t:"p",x:"**Thomas Edison** inventa il **fonografo** nel **1877**: registra suoni (tra cui la voce), inizialmente con range di frequenze limitato."},
        {t:"p",x:"**Emile Berliner** inventa il **grammofono** nel **1888**: incide su un disco di zinco che funge da **matrice**, permettendo di stampare molte copie a qualità maggiore. È l'inizio del **moderno mercato musicale**. Come supporto si sceglie il disco in **gommalacca a 78 giri** (~3 minuti per lato)."}
      ],
      keywords:["Edison 1877","fonografo","Berliner 1888","grammofono","matrice","78 giri","gommalacca"],
      related:["registrazione","radio","supporti1","nascita-econ"]},

    {id:"registrazione",area:"tech1",title:"Registrazione elettrica e su nastro",lead:"Dalle valvole al montaggio del nastro: la performance registrata si allontana dal vivo.",
      body:[
        {t:"p",x:"Nel **1924** arriva la **registrazione elettrica**: spettro di frequenze più ampio e amplificazione del microfono via **valvole**, superando i limiti della registrazione meccanica (musicisti dentro grandi imbuti)."},
        {t:"p",x:"La **registrazione su nastro magnetico** (inizialmente commissionata dal regime nazista per i discorsi di Hitler) permette di **tagliare e rimontare**: si ricava un **master** dalle parti migliori. La musica registrata diventa impeccabile e si **allontana dalla dimensione live**."}
      ],
      keywords:["registrazione elettrica 1924","valvole","nastro magnetico","montaggio","master"],
      related:["fonografo","crooner","beatles","postpunk"]},

    {id:"radio",area:"tech1",title:"La radio e i conflitti economici",lead:"La Grande Crisi del disco, ASCAP vs NAB, lo sciopero dei musicisti e i payola.",
      body:[
        {t:"p",x:"La **radio** (valvole, esperimenti di **Marconi**) ha uso civile dopo la Prima guerra mondiale. La sua diffusione causa la **crisi del mercato discografico**: la radio spodesta il primato del disco; **2/3 delle royalties** vengono dalle esecuzioni radiofoniche."},
        {t:"h",x:"Conflitti economici"},
        {t:"p",x:"La **NAB** (radio) entra in conflitto con **ASCAP** sulle royalties. Nasce la **BMI**, collecting concorrente con artisti fuori da New York (hillbilly e blues, tra cui Woody Guthrie): le radio li privilegiano per pagare meno, e **Tin Pan Alley perde importanza**."},
        {t:"p",x:"Nel **1942** lo **sciopero del sindacato dei musicisti** (2 anni) protesta contro la mancanza di royalties d'esecuzione; i **cantanti** (sindacato attori) non aderiscono e diventano i nuovi protagonisti."},
        {t:"note",x:"I **payola** (mazzette alle radio) restano diffusi anche dopo le leggi degli anni '50 (via mafie). L'analogo odierno è la **«discovery mode» di Spotify**: più visibilità in cambio di royalties ridotte."}
      ],
      keywords:["radio","Grande Crisi","ASCAP vs NAB","BMI","sciopero 1942","payola","discovery mode"],
      related:["tinpan","crooner","streaming-storia","streaming-econ"]},

    {id:"chitarra",area:"tech1",title:"La chitarra elettrica",lead:"Pick-up, solid body e l'arrivo di basso e piano elettrici.",
      body:[
        {t:"p",x:"Nelle big band la chitarra acustica aveva funzione ritmica ma serviva più volume. Negli **anni '30** nascono i primi **pick-up magnetici** e le prime chitarre **solid body** (**Les Paul**), senza cassa di risonanza. Poco dopo arrivano **basso elettrico** e **piano Rhodes** (Fender)."}
      ],
      keywords:["pick-up","solid body","Les Paul","Fender","basso elettrico","Rhodes"],
      related:["rocknroll","registrazione","prog"]},

    {id:"supporti1",area:"tech1",title:"Microsolco e juke-box",lead:"Il 33 e il 45 giri, e il juke-box che rilancia il disco dopo la guerra.",
      body:[
        {t:"p",x:"Nel **1945** il primo **microsolco a 33 giri** (~22 minuti) ha solchi più piccoli del 78 giri (~3 minuti) ma richiede una puntina di **diamante/zaffiro**. Poco dopo arriva il **45 giri**."},
        {t:"p",x:"Il **juke-box** (inventato a fine anni '20) esplode negli anni '40 e diventa negli anni '50 il principale mezzo di diffusione: insieme alle altre innovazioni rilancia il mercato discografico, in crisi per la radio."}
      ],
      keywords:["33 giri","45 giri","microsolco","juke-box","ripresa del disco"],
      related:["fonografo","radio","rocknroll"]},

    /* ===== AFROAMERICANE ===== */
    {id:"ragtime",area:"afro",title:"Ragtime",lead:"Il primo genere afroamericano: Scott Joplin e l'eredità nel jazz.",
      body:[
        {t:"p",x:"Il **ragtime** è il primo genere di matrice afroamericana. Principale compositore: **Scott Joplin** (Maple Leaf Rag), figlio di schiavi, di formazione classica. **Irving Berlin** ha successo nell'epoca del ragtime perché in America si preferiva la musica scritta da bianchi (Alexander's Ragtime Band somiglia più a una marcia). Diverse caratteristiche del ragtime definiranno il **jazz**."}
      ],
      keywords:["ragtime","Scott Joplin","Maple Leaf Rag","Irving Berlin"],
      related:["foster","jazz","blues"]},

    {id:"blues",area:"afro",title:"Blues",lead:"Dalla cultura orale alla struttura a 12 battute; Robert Johnson e i 'race records'.",
      body:[
        {t:"p",x:"Il **blues** nasce come cultura orale a fine '800 e si struttura nei primi del '900 (classica forma a **12 battute**). **W. C. Handy** è il «padre del blues»; **Ma Rainey** la «madre del blues». Categorie: country, city, **delta blues** (**Charley Patton**). **Robert Johnson** è la figura più importante: primo musicista **consapevole della riproducibilità** della propria musica."},
        {t:"p",x:"Si usa l'etichetta **race records** per la musica afroamericana. Nasce l'**hillbilly** (alternativa 'bianca', poi country & western), col precursore dei cantautori **Woody Guthrie**."}
      ],
      keywords:["blues","12 battute","Robert Johnson","Charley Patton","race records","hillbilly","Woody Guthrie"],
      related:["ragtime","jazz","soul","radio"]},

    {id:"jazz",area:"afro",title:"Jazz",lead:"New Orleans, Storyville e il primo disco jazz della storia.",
      body:[
        {t:"p",x:"Il **jazz** nasce a **New Orleans** (ex colonia francese, città portuale di incontro tra culture, legata a bettole e bordelli — come flamenco, fado, tango, rebetico). Si origina da blues, ragtime, minstrel, cakewalk e marce europee. Sviluppo nel quartiere a luci rosse **Storyville** (1897-1917)."},
        {t:"p",x:"Organico iniziale: tromba, trombone, clarinetto, bassotuba, batteria. **Buddy Bolden** (mai registrato) è figura chiave delle origini; gli **Original Dixieland Jass Band** pubblicano il **primo disco jazz** della storia."}
      ],
      keywords:["jazz","New Orleans","Storyville","Buddy Bolden","Original Dixieland Jass Band"],
      related:["blues","ragtime","cinema","musical"]},

    {id:"crooner",area:"afro",title:"Crooner e lo sciopero dei musicisti",lead:"Il microfono cambia la voce: Bing Crosby e Frank Sinatra dopo lo sciopero del '42.",
      body:[
        {t:"p",x:"Grazie allo **sciopero dei musicisti** (a cui i cantanti non aderirono), i cantanti guadagnano importanza. Principale beneficiario **Bing Crosby**, con **Frank Sinatra** parte del fenomeno dei **crooner** (to croon = sussurrare)."},
        {t:"p",x:"I crooner usano una tecnica vocale **sussurrata**, vicina al parlato: possibile perché il **microfono** amplifica la voce, che non deve più sovrastare gli strumenti."}
      ],
      keywords:["crooner","microfono","Bing Crosby","Frank Sinatra","sciopero 1942"],
      related:["radio","registrazione","soul"]},

    {id:"soul",area:"afro",title:"Dal R&B al Soul: Motown e Stax",lead:"Sam Cooke, il Wall of Sound, e le due grandi etichette della musica nera.",
      body:[
        {t:"p",x:"La **Race Records** cambia nome (Harlem Hit Parade → **Rhythm and Blues**), dando il nome al genere. **Sam Cooke** è il primo afroamericano a ottenere i diritti delle proprie canzoni e a fondare un'etichetta; la musica nera inizia a chiamarsi **soul**. **Ray Charles**, bandito dalla Georgia per essersi rifiutato di suonare per un pubblico segregato, scriverà Georgia on My Mind."},
        {t:"p",x:"Gruppi vocali (i Platters) e **Phil Spector** col **Wall of Sound** (Be My Baby delle Ronettes). Nasce la **Motown** (Marvin Gaye, Stevie Wonder, Jackson 5, The Supremes con Diana Ross), con arrangiamenti pomposi; alternativa più grezza la **Stax**. Tra le due emerge **James Brown**, padrino del soul."}
      ],
      keywords:["rhythm & blues","soul","Sam Cooke","Wall of Sound","Phil Spector","Motown","Stax","James Brown"],
      related:["blues","crooner","disco","rap"]},

    /* ===== ROCK'N'ROLL ===== */
    {id:"rocknroll",area:"rnr",title:"Il rock'n'roll",lead:"Il primo genere per i giovani, tra cinema, scandalo e immagini 'ripulite'.",
      body:[
        {t:"p",x:"Il **rock'n'roll** è il primo genere rivolto soprattutto ai **giovani** (i più anziani preferiscono i crooner); i conservatori lo accusano di rovinare la gioventù (Gioventù bruciata). Nasce come altro nome del rhythm & blues, poi diventa genere a sé."},
        {t:"p",x:"**Chuck Berry** (Roll Over Beethoven). Primi esempi: Sixty Minute Men, **Rock Around the Clock**, **Heartbreak Hotel** di **Elvis Presley** (primo brano contemporaneamente nelle classifiche r&b, c&w e pop). L'industria riproponeva il rock'n'roll cantato da bianchi 'puliti' (**Buddy Holly**); **Screamin' Jay Hawkins** porta la vocalità all'estremo. Il **cinema** ne favorisce la diffusione (Jailhouse Rock)."},
        {t:"note",x:"Il rock'n'roll mette in luce la contraddizione americana: vuole lavoratori produttivi e insieme **avidi consumatori**."}
      ],
      keywords:["rock'n'roll","Chuck Berry","Elvis Presley","Buddy Holly","cover","giovani-consumatori"],
      related:["soul","folkdylan","rnr-ita","beatles"]},

    {id:"folkdylan",area:"rnr",title:"Alternative al rock'n'roll: folk e Bob Dylan",lead:"Le cover 'ripulite' e il folk non elettrificato, fino alla svolta elettrica di Dylan.",
      body:[
        {t:"p",x:"Nel periodo del rock'n'roll esplode il fenomeno delle **cover**, spesso di brani afroamericani riproposti con immagine 'pulita' e vendibile."},
        {t:"p",x:"Il **folk** nasce come alternativa **non elettrificata**, vista di buon occhio dai conservatori. **Bob Dylan**, influenzato da **Woody Guthrie**, raggiunge il successo a inizio anni '60; nel **'65** la **svolta elettrica**."}
      ],
      keywords:["cover","folk","Bob Dylan","Woody Guthrie","svolta elettrica 1965"],
      related:["rocknroll","beatles","blues"]},

    /* ===== ITALIA ===== */
    {id:"leggera",area:"ita",title:"Musica leggera in Italia e il Ventennio",lead:"E. A. Mario, la canzone sincopata e l'isolazionismo fascista.",
      body:[
        {t:"p",x:"**E. A. Mario** (Ermete Giovanni Gaeta) è tra i maggiori compositori italiani di inizio '900 (La leggenda del Piave, Tammurriata nera). Protagonisti della **canzone sincopata**: **Gorni Kramer** (Crapa pelada) e Alberto Rabagliati."},
        {t:"p",x:"Durante il **Ventennio fascista** si impone un **isolazionismo artistico**: limitata la musica straniera, abolita la parola «jazz» (gez, giazzì), tradotti i nomi (Louis Armstrong → Luigi Braccioforte), vietate le orchestre afroamericane. Anche in Germania (1940) norme per tornare allo 'spirito europeo'."}
      ],
      keywords:["E. A. Mario","canzone sincopata","Gorni Kramer","Ventennio","isolazionismo","censura del jazz"],
      related:["sanremo","cantautori","jazz"]},

    {id:"sanremo",area:"ita",title:"Il Festival di Sanremo",lead:"La nascita del Festival, la TV e Modugno che cambia la performance.",
      body:[
        {t:"p",x:"Negli **anni '50** nasce il **Festival di Sanremo**, quasi in concomitanza con l'arrivo della **TV** in Italia (in ritardo sul resto del mondo). All'inizio protagonisti i **brani** (3 interpreti per 20 canzoni)."},
        {t:"p",x:"Nomi importanti: Renato Carosone, Fred Buscaglione e soprattutto **Domenico Modugno**, che con **Volare** e il gesto di aprire le braccia influenza artisti italiani e internazionali."}
      ],
      keywords:["Sanremo","televisione","Modugno","Volare","centralità del brano"],
      related:["leggera","cantautori","bossa"]},

    {id:"cantautori",area:"ita",title:"Cantacronache, canzone politica, cantautori",lead:"Da «evadere l'evasione» a Bella ciao, fino a Paoli e alla morte di Tenco.",
      body:[
        {t:"p",x:"Contro la banalità della leggera nascono i **cantacronache** (con Italo Calvino): primo esempio in Italia di **canzone di protesta**, motto «**evadere l'evasione**». Nasce il **Nuovo Canzoniere Italiano** (riscoperta dei canti popolari). Per Gianni Bosio (editore di **Bella ciao**) il disco è strumento di emancipazione del proletariato."},
        {t:"p",x:"Dai cantacronache nasce la figura del **cantautore**. **Gino Paoli** (Il cielo in una stanza, con arrangiamento di Morricone, svolta per Mina) è il primo a essere definito così. **Luigi Tenco**, eliminato a Sanremo 1967, viene trovato morto: gesto di **ribellione** contro il sistema dello spettacolo."}
      ],
      keywords:["cantacronache","Calvino","Bella ciao","cantautore","Gino Paoli","Luigi Tenco"],
      related:["sanremo","chanson","folkdylan"]},

    {id:"rnr-ita",area:"ita",title:"Il rock'n'roll in Italia",lead:"Celentano ne La dolce vita, il prestanome SIAE e Jannacci.",
      body:[
        {t:"p",x:"Il primo contatto col rock'n'roll avviene con **Adriano Celentano** ne **La dolce vita** di Fellini. **Giorgio Gaber** contribuisce a portarlo in Italia: non iscritto alla SIAE, ricorre al **prestanome** (i brani registrati sotto altro nome). **Enzo Jannacci** (L'Armando) porta una vocalità nuova ed è il primo a pubblicare un **album live**."}
      ],
      keywords:["Celentano","La dolce vita","prestanome SIAE","Gaber","Jannacci","primo live"],
      related:["rocknroll","cantautori","collecting"]},

    {id:"chanson",area:"ita",title:"La chanson francese",lead:"Trenet, Piaf e Yves Montand, prima voce su disco di Bella ciao.",
      body:[
        {t:"p",x:"Esponenti della **chanson**: **Charles Trenet** (dal contesto dei cabaret), **Édith Piaf** (da famiglia di artisti circensi) e **Yves Montand** (italiano, legato a Piaf), che incide la prima versione su disco di **Bella ciao**."}
      ],
      keywords:["chanson","Charles Trenet","Édith Piaf","Yves Montand","Bella ciao"],
      related:["caffe","cantautori"]},

    /* ===== ANNI '60 ===== */
    {id:"beatles",area:"sixties",title:"I Beatles",lead:"Da Tin Pan Alley allo studio come strumento: l'ascesa dell'LP sul singolo.",
      body:[
        {t:"p",x:"I **Beatles** nascono a Liverpool a inizio anni '60, rodandosi nei locali. La struttura dei brani deriva da **Tin Pan Alley**. Con loro inizia la **British Invasion** (Rolling Stones, Kinks, Who)."},
        {t:"p",x:"Le armonie si complicano (If I Fell, A Hard Day's Night, con film omonimo). L'incontro con **Bob Dylan** rende i testi più introspettivi. Cresce l'interesse per l'**album** sul singolo: **Rubber Soul** è promosso senza singoli; in **Revolver** lo **studio di registrazione** diventa strumento (tape loop, parti al contrario)."},
        {t:"p",x:"**Sgt. Pepper's** (primo concept album) sancisce il **trionfo dell'LP**: all'uscita in America la radio sospende la programmazione per trasmetterlo. Dopo la morte di Brian Epstein arrivano il **White Album** (Revolution 9, tape loop), Let It Be (ritorno alla presa diretta, prodotto da Phil Spector) e **Abbey Road** (The End)."}
      ],
      keywords:["Beatles","British Invasion","Rubber Soul","Revolver","Sgt. Pepper's","studio come strumento","LP vs singolo"],
      related:["tinpan","registrazione","gruppi","folkdylan"]},

    {id:"gruppi",area:"sixties",title:"L'era dei gruppi (British Invasion, Beach Boys)",lead:"Stones e Monkees, e la corsa allo studio di Brian Wilson con Pet Sounds.",
      body:[
        {t:"p",x:"La popular music si fa di **gruppi** (Kinks, Who, **Rolling Stones**, in antitesi 'trasgressiva' ai Beatles; Satisfaction n.1 in USA). Arrivano risposte americane: i **Monkees**, gruppo costruito a tavolino senza musicisti."},
        {t:"p",x:"Il gruppo USA più rilevante sono i **Beach Boys**: dopo Rubber Soul, **Brian Wilson** cambia direzione con **Pet Sounds** (registrazione a 8 tracce, mix **mono** per rifarsi a Phil Spector). **Good Vibrations** è prodotto in 4 studi contemporaneamente (~90 minuti di musica per un brano)."}
      ],
      keywords:["Rolling Stones","Monkees","Beach Boys","Brian Wilson","Pet Sounds","Good Vibrations"],
      related:["beatles","soul","festival"]},

    {id:"festival",area:"sixties",title:"I grandi festival",lead:"Human Be-In, Woodstock e i festival come promozione del disco.",
      body:[
        {t:"p",x:"Nel **1967** lo **Human Be-In** (ideato da Timothy Leary, California) riunisce la controcultura (Ginsberg, Beat generation): ingresso 1 dollaro in beneficenza, da qui l'uso della parola **psichedelico**."},
        {t:"p",x:"**Woodstock** (1969, oltre 400k spettatori) nasce ispirandosi all'Human Be-In: organizzazione caotica (Richie Havens improvvisa **Freedom**), fonico **Bill Hanley**. **Isle of Wight** (1970, 600k) è un fallimento commerciale (si vedeva da una collina); l'**Harlem Cultural Festival** (alternativa afroamericana) viene oscurato da Woodstock."},
        {t:"note",x:"All'epoca i **concerti** erano **promozione** del mercato discografico — l'opposto di oggi, dove il disco promuove il tour."}
      ],
      keywords:["Human Be-In","Woodstock","psichedelico","Isle of Wight","Harlem Cultural Festival","concerto come promozione"],
      related:["gruppi","tech60","streaming-econ"]},

    /* ===== DIGITALE ===== */
    {id:"tech60",area:"digit",title:"Innovazioni 1950–2000: transistor, cassetta, walkman, synth",lead:"Miniaturizzazione, ascolto in movimento e il sintetizzatore di Moog.",
      body:[
        {t:"p",x:"I **transistor** e la miniaturizzazione fanno avanzare fruizione e produzione: radio a transistor (anni '50), **audiocassetta** (anni '60: economica, mixtape, mangianastri in auto, diffusa nei paesi caldi), **walkman** (fine anni '70: ascolto in cuffia e in movimento), cuffie stereo, **mix stereo** (All Along the Watchtower; The Piper at the Gates of Dawn), pedali per chitarra, drum machine."},
        {t:"p",x:"Anni '70: protagonista la **chitarra** (hard rock, heavy metal: Tony Iommi dei Black Sabbath accorda più basso dopo un incidente) e le **tastiere** (Hammond). **Robert Moog** costruisce il **sintetizzatore** modulare (filtri, inviluppi). In Space Oddity di **Bowie** mellotron e stylophone (poi colonna sonora dell'allunaggio)."},
        {t:"note",x:"Il **walkman** abitua all'ascolto **low-fi** in movimento: una premessa socio-acustica che spiegherà l'accettazione dell'**MP3** (vedi [[topic:streaming-storia|MP3 e streaming]])."}
      ],
      keywords:["transistor","audiocassetta","walkman","mix stereo","Moog","sintetizzatore","drum machine"],
      related:["chitarra","digitalizzazione","streaming-storia","prog"]},

    {id:"digitalizzazione",area:"digit",title:"La digitalizzazione e il CD",lead:"Dal calo di fine anni '70 al CD, al MIDI e ai campionatori — con il paradosso dell'alta fedeltà.",
      body:[
        {t:"p",x:"A fine anni '70 cala il mercato discografico; negli **anni '80** inizia la **digitalizzazione**. Arriva il **CD**, che entro il **1988 supera l'LP**. Nascono gli **effetti digitali** (gate reverb sui rullanti), il protocollo **MIDI** (standard di collegamento tra macchine) e i **campionatori** (**Peter Gabriel** tra i primi a usare il **Fairlight** a 8 bit)."},
        {t:"quote",x:"L'industria scommette sull'**alta fedeltà** (CD) mentre il pubblico ascolta sempre più in contesti low-fi (walkman, auto, sottofondo): è il **paradosso dell'alta fedeltà non necessaria**, che preparerà l'accettazione dell'MP3.",cite:"F. Fabbri, La musica nell'era digitale"},
        {t:"note",x:"Il CD illude i discografici di **riprendere il controllo** (i pirati non avranno una fabbrica di CD); ma masterizzatori e copia perfetta ribalteranno presto la situazione."}
      ],
      keywords:["CD","1988","MIDI","effetti digitali","campionatore","Fairlight","alta fedeltà non necessaria"],
      related:["mtv","streaming-storia","tech60","world"]},

    {id:"mtv",area:"digit",title:"Videoclip e MTV",lead:"Il video come marketing, la barriera razziale e Michael Jackson.",
      body:[
        {t:"p",x:"Dalla seconda metà degli anni '70 i discografici vedono i **videoclip** come efficaci **strumenti di marketing**, più delle ospitate TV. Nel **1981** nasce **MTV**: primo video **Video Killed the Radio Star** dei Buggles."},
        {t:"p",x:"Nei primi due anni MTV trasmette solo artisti euroamericani (critiche di **Bowie**): la barriera è abbattuta da **Billie Jean** di **Michael Jackson**; poi **Thriller** (regia di John Landis) diventa leggendario. L'album Thriller è uno degli ultimi grandi esempi di registrazione **analogica**. MTV apre nicchie (metal, rap, grunge) e produce gli **Unplugged** (Eric Clapton, Nirvana)."}
      ],
      keywords:["videoclip","MTV 1981","Video Killed the Radio Star","Michael Jackson","Thriller","Unplugged"],
      related:["digitalizzazione","streaming-storia","soul"]},

    {id:"streaming-storia",area:"digit",title:"Internet, MP3, Napster, iTunes, streaming",lead:"Dalla scomparsa del supporto fisico al passaggio dal possesso all'accesso.",
      body:[
        {t:"p",x:"Negli anni '90 il supporto fisico scompare progressivamente e la **qualità sonora non è più una priorità**. Il **Telecommunications Act** (Clinton, **1996**) toglie il limite di proprietà delle radio: corsa all'acquisto, programmazione omogeneizzata."},
        {t:"p",x:"Nel **1992** nasce l'**MPEG** e la compressione **MP3**. Nel **1999** **Napster** (peer-to-peer, senza royalties) fa crollare il mercato: gli viene fatto causa, non può filtrare i contenuti protetti e chiude; seguono **eMule** e **BitTorrent**."},
        {t:"p",x:"Nel **2003** Apple lancia **iTunes** (MP3 a 0,99$). Nascono le 'streaming radio' (**Pandora**). Nel **2005 YouTube** (poi Google) decreta la fine di MTV. Nel **2006 Daniel Ek** fonda **Spotify** (pubblicitari: scelgono la musica perché i file MP3 sono leggeri). **In Rainbows** dei **Radiohead** (2007) esce in rete a **offerta libera**."},
        {t:"quote",x:"La pseudogratuità di Internet nasconde un colossale **trasferimento di risorse** dall'industria musicale ad altri settori (ISP, hardware, telecom): «cui prodest?».",cite:"F. Fabbri, La musica nell'era digitale"},
        {t:"note",x:"Spotify si sposta dalle playlist per genere a quelle per **mood**: profilazione crescente. Nel 2023 blocca **Boomy** (AI) non per la musica in sé ma per gli **ascolti da bot**."}
      ],
      keywords:["MP3","Napster 1999","Telecommunications Act 1996","iTunes 2003","YouTube 2005","Spotify 2006","In Rainbows","dal possesso all'accesso","cui prodest"],
      related:["digitalizzazione","mtv","streaming-econ","radio"]},

    /* ===== PROG / PUNK / POST-PUNK / DISCO / RAP ===== */
    {id:"prog",area:"gen70",title:"Progressive rock (e la scena tedesca)",lead:"Virtuosismo e lunghe suite, dalla Canterbury all'Italia, fino a Kraftwerk e Bowie a Berlino.",
      body:[
        {t:"p",x:"Il **progressive rock** è nominato per i **King Crimson**: virtuosismo e sperimentazione, influenze classiche/barocche, abbandono della forma-canzone (brani lunghissimi). Gruppi: **Genesis** (Firth of Fifth, su sezione aurea), Emerson Lake & Palmer, **Yes**, Gentle Giant, Van Der Graaf Generator. Scena **Canterbury** (Soft Machine, Caravan, più free jazz). In Italia: **PFM, Banco, Area**, New Trolls, Orme."},
        {t:"p",x:"In **Germania** scena prog/elettronica (Tangerine Dream, **Can**, Popol Vuh, sintetizzatori). La scena attira **David Bowie** a Berlino per la **trilogia** (Low, Heroes, Lodger) con Eno e Fripp (e The Idiot di Iggy Pop). Emergono i **Kraftwerk**, iconici per l'immagine da robot (The Robots, Autobahn)."}
      ],
      keywords:["progressive","King Crimson","Genesis","Canterbury","PFM/Banco/Area","Krautrock","Kraftwerk","Bowie a Berlino"],
      related:["chitarra","tech60","punk","postpunk"]},

    {id:"punk",area:"gen70",title:"Punk",lead:"Dai precursori di Detroit al ritorno alla semplicità, McLaren e il DIY dei Crass.",
      body:[
        {t:"p",x:"Proto-punk: **Stooges** di Iggy Pop e **MC5** (Detroit), poi i **New York Dolls** (glam; manager **Malcolm McLaren**). Il **CBGB** è il locale del punk newyorkese (**Ramones**). Il punk segna un **ritorno alla semplicità** del rock'n'roll, contro il virtuosismo del prog (analogo allo spirito di Let It Be dei Beatles)."},
        {t:"p",x:"In **Inghilterra** McLaren e **Vivienne Westwood** aprono la boutique **SEX** (da cui i **Sex Pistols**): Anarchy in the UK (1976), caos in TV, contratti rotti con EMI e A&M (tenendosi i soldi), Never Mind the Bollocks (1977). I **Clash** (London Calling, influenze reggae) sono i più influenti. Il **DIY** dei **Crass** (anarcho-punk, etichetta autoprodotta) è una risposta a chi era 'venduto al sistema'."}
      ],
      keywords:["proto-punk","Stooges","Ramones","McLaren","Sex Pistols","Clash","DIY","Crass"],
      related:["prog","postpunk","latina","rocknroll"]},

    {id:"postpunk",area:"gen70",title:"Post-punk",lead:"Libertà compositiva e ritorno dello studio: Joy Division, Talking Heads e i diritti.",
      body:[
        {t:"p",x:"Il **post-punk** (termine di **Simon Reynolds**) ha radici nel punk ma recupera **libertà compositiva** e sperimentazione: influenze da funk, dub, prog; sintetizzatori e drum machine; atmosfere cupe; **ritorno dello studio di registrazione**. Spesso gli stessi protagonisti passano tra punk e post-punk (Johnny Rotten → Public Image Ltd)."},
        {t:"p",x:"I **Joy Division** (Unknown Pleasures, 1979): suono plasmato dalla **produzione** (batteria registrata pezzo per pezzo, delay digitale). **Talking Heads** (Remain in Light, prodotto da **Brian Eno**, 9 ingegneri): brani irriconoscibili dal vivo."},
        {t:"note",x:"Lo scioglimento dei Talking Heads (1980) nasce da **dispute sui diritti d'autore**: con la produzione sempre più complessa, le leggi (che tutelano solo **melodia e testo**) risultano inadeguate — arrangiatori, tecnici e produttori restano senza tutela."}
      ],
      keywords:["post-punk","Simon Reynolds","Joy Division","Talking Heads","Brian Eno","diritti d'autore","studio di registrazione"],
      related:["punk","beatles","world","streaming-econ"]},

    {id:"disco",area:"gen70",title:"Disco music",lead:"La continuazione della musica nera negli anni '70 e la centralità della discoteca.",
      body:[
        {t:"p",x:"Negli anni dell'esplosione del punk dominano le classifiche la **disco music**, continuazione della musica nera (ispirata a What's Going On di Marvin Gaye). Successo dei **Bee Gees**, che portano il genere all'apice nel **1977** con **La febbre del sabato sera**. La **discoteca** diventa luogo centrale di consumo di musica."}
      ],
      keywords:["disco","Bee Gees","La febbre del sabato sera","discoteca"],
      related:["soul","rap","punk"]},

    {id:"rap",area:"gen70",title:"Rap e hip-hop",lead:"Dal dub e dai sound system di Kool Herc all'ingresso nel mainstream e al 'Parental Advisory'.",
      body:[
        {t:"p",x:"La **dub** nasce dal reggae (lato B strumentale per continuare a ballare); arrivano i **sound system**. **DJ Kool Herc** porta il sound system giamaicano in America ed è il primo a usare **sample/break**: nascono i **block party** e la figura dell'**MC**. Le fonti dei sample sono spesso brani **funk o disco**."},
        {t:"p",x:"**Sylvia Robinson** (Sugar Hill Records) mette sotto contratto la Sugarhill Gang; firma anche **Grandmaster Flash**. **Afrika Bambaataa** fonda la **Zulu Nation**. L'hip-hop entra nel mainstream: Blondie (Rapture, 1981), b-boys davanti a Reagan (1983), **Run-DMC & Aerosmith** (Walk This Way; primi non atleti sponsor sportivi — Adidas), Rakim & Eric B. (Microphone Fiend)."},
        {t:"note",x:"Nel 1989 un concerto degli **N.W.A** (Fuck tha Police) viene interrotto dalla polizia. La **PMRC** non ottiene la censura ma introduce il bollino «**Parental Advisory**»."}
      ],
      keywords:["dub","sound system","Kool Herc","sample/break","Sugar Hill","Run-DMC","N.W.A","Parental Advisory"],
      related:["latina","soul","disco","world"]}
  ],

  maps:[
    {id:"genealogia",title:"Genealogia dei generi afroamericani",desc:"Dalla matrice afroamericana al rock'n'roll, al soul e all'hip-hop. **Clicca** un nodo per aprire l'argomento.",
      nodes:[
        {id:"min",label:"Minstrel show",col:0,row:0,topic:"foster"},
        {id:"rag",label:"Ragtime",col:1,row:0,topic:"ragtime"},
        {id:"blu",label:"Blues",col:1,row:1,topic:"blues"},
        {id:"jaz",label:"Jazz",col:2,row:0,topic:"jazz"},
        {id:"rnb",label:"R&B / race records",col:2,row:1,topic:"soul"},
        {id:"rnr",label:"Rock'n'roll",col:3,row:0,topic:"rocknroll"},
        {id:"sou",label:"Soul (Motown/Stax)",col:3,row:1,topic:"soul"},
        {id:"dis",label:"Disco",col:4,row:1,topic:"disco"},
        {id:"hip",label:"Hip-hop",col:4,row:0,topic:"rap"}
      ],
      edges:[
        {a:"min",b:"rag",label:"cakewalk"},{a:"rag",b:"jaz"},{a:"blu",b:"jaz"},
        {a:"blu",b:"rnb"},{a:"rnb",b:"rnr"},{a:"rnb",b:"sou"},
        {a:"sou",b:"dis"},{a:"dis",b:"hip",label:"sample"},{a:"rnr",b:"hip"}
      ]},
    {id:"tecnologia",title:"La catena tecnologica del suono",desc:"Ogni supporto ridistribuisce il potere economico nella filiera.",
      nodes:[
        {id:"fon",label:"Fonografo (1877)",col:0,row:0,topic:"fonografo"},
        {id:"gra",label:"Grammofono (1888)",col:1,row:0,topic:"fonografo"},
        {id:"ele",label:"Reg. elettrica (1924)",col:2,row:0,topic:"registrazione"},
        {id:"rad",label:"Radio + Grande Crisi",col:2,row:1,topic:"radio"},
        {id:"nas",label:"Nastro / master",col:3,row:0,topic:"registrazione"},
        {id:"mic",label:"Microsolco + juke-box",col:4,row:0,topic:"supporti1"},
        {id:"cd",label:"CD (1983)",col:5,row:0,topic:"digitalizzazione"},
        {id:"mp3",label:"MP3 / Napster",col:6,row:0,topic:"streaming-storia"},
        {id:"str",label:"Streaming",col:7,row:0,topic:"streaming-econ"}
      ],
      edges:[
        {a:"fon",b:"gra"},{a:"gra",b:"ele"},{a:"ele",b:"rad"},{a:"ele",b:"nas"},
        {a:"nas",b:"mic"},{a:"mic",b:"cd"},{a:"cd",b:"mp3",label:"copia perfetta"},{a:"mp3",b:"str"}
      ]},
    {id:"digitale",title:"La dirompenza del digitale: dal possesso all'accesso",desc:"Il filo conduttore dell'argomento d'esame: il valore non sparisce, **migra**.",
      nodes:[
        {id:"cd",label:"CD: apice del bene fisico",col:0,row:0,topic:"digitalizzazione"},
        {id:"par",label:"Paradosso alta fedeltà",col:0,row:1,topic:"digitalizzazione"},
        {id:"mtv",label:"MTV: video = marketing",col:1,row:0,topic:"mtv"},
        {id:"mp3",label:"MP3 / Napster",col:1,row:1,topic:"streaming-storia"},
        {id:"cui",label:"«Cui prodest?» valore migra",col:2,row:1,topic:"streaming-storia"},
        {id:"itu",label:"iTunes: guadagno sugli iPod",col:2,row:0,topic:"streaming-storia"},
        {id:"acc",label:"Dal possesso all'accesso",col:3,row:0,topic:"streaming-econ"},
        {id:"siae",label:"SIAE: ripartizione analitica",col:3,row:1,topic:"siae-rip"}
      ],
      edges:[
        {a:"cd",b:"mtv"},{a:"cd",b:"par"},{a:"mtv",b:"itu"},{a:"par",b:"mp3"},
        {a:"mp3",b:"cui"},{a:"mp3",b:"itu"},{a:"itu",b:"acc"},{a:"cui",b:"acc"},{a:"acc",b:"siae"}
      ]},
    {id:"giamaica",title:"Dalla Giamaica al mondo",desc:"Sound system e levare: una linea che arriva fino all'hip-hop e al punk.",
      nodes:[
        {id:"ska",label:"Ska",col:0,row:0,topic:"latina"},
        {id:"reg",label:"Reggae (rasta)",col:1,row:0,topic:"latina"},
        {id:"dub",label:"Dub / sound system",col:2,row:0,topic:"rap"},
        {id:"hip",label:"Hip-hop (Kool Herc)",col:3,row:0,topic:"rap"},
        {id:"pnk",label:"Punk (Clash)",col:2,row:1,topic:"punk"}
      ],
      edges:[
        {a:"ska",b:"reg"},{a:"reg",b:"dub"},{a:"dub",b:"hip"},{a:"reg",b:"pnk",label:"influenza"}
      ]}
  ],

  starterScalette:[
    {id:"argomento-b",title:"Argomento a scelta · L'impatto del digitale (CD → iTunes)",
      steps:[
        {title:"Apertura + tesi",topic:"digitalizzazione",flow:"il bene fisico raggiunge l'apice proprio col CD…",
          notes:"Il grammofono CREÒ il mercato trasformando la musica in bene vendibile; il digitale fa l'opposto, smaterializzandola: dall'era del POSSESSO a quella dell'ACCESSO (Fabbri). Annuncio le 3 fasi: CD → Napster → streaming.",songs:[]},
        {title:"Il CD: apice del bene fisico, ma un paradosso",topic:"digitalizzazione",flow:"ma la qualità non era il vero valore: arriva Internet…",
          notes:"1982-83 Philips/Sony; supera l'LP nel 1988. Boom da ri-acquisto del catalogo. PARADOSSO dell'alta fedeltà non necessaria (si vende qualità ma si ascolta in auto/cuffia). Collegamento: MTV e il videoclip come marketing; lo studio come strumento (Beatles/Eno).",songs:["thriller","videokilled"]},
        {title:"Internet e la crisi: la pirateria",topic:"streaming-storia",flow:"il valore non sparisce, MIGRA: cui prodest?",
          notes:"MP3 (Chiariglione, CSELT Torino) → Napster (causa RIAA/Metallica). Costo marginale 0 + bene non rivale → pirateria inevitabile. COLPO DA KO – «cui prodest?»: il valore migra a ISP, telecom, hardware. Collegamento storico: radio + Grande Crisi del '29 (il disco crollò, poi i DJ lo rilanciarono). La storia si ripete.",songs:["robots"]},
        {title:"Dal possesso all'accesso",topic:"streaming-storia",flow:"e i diritti diventano finanza…",
          notes:"iTunes 2003 (0,99$) ma Apple guadagna sugli iPod (come grammofono/radio agli inizi). YouTube/Spotify → il bene diventa servizio (riggancio il titolo del corso). Radiohead In Rainbows a offerta libera (2007). Pandora/Last.fm → profilazione → antenato di Spotify.",songs:["inrainbows"]},
        {title:"Diritti, finanza e SIAE",topic:"streaming-econ",flow:"chiudo: la lezione della storia…",
          notes:"Royalties piccole ma prevedibili → asset finanziario; vendita dei cataloghi (Dylan, Bowie, Bieber). SIAE 2025: streaming ripartito ANALITICAMENTE per numero di stream (ogni ascolto tracciato, contro il campionamento dell'era radio). Discovery mode = payola moderni; ghost artist (Liz Pelly).",songs:[]},
        {title:"Chiusura",topic:"streaming-econ",flow:"",
          notes:"Tesi di Fabbri: l'industria dovrebbe rileggere la propria storia — gli stessi conflitti tra media si ripetono, e i benefici nascono dalla libertà. Internet prometteva disintermediazione, ha creato intermediari più potenti (Spotify, Google). Frontiera: l'AI generativa — stesso schema, nuova scala.",songs:[]}
      ]}
  ]
};

/* Video ID YouTube verificati per i brani in evidenza (riproduzione inline garantita).
   Gli altri brani usano la ricerca YouTube come fallback (sempre funzionante). */
(function(){
  var YT={
    psycho:"cyLD9bydXEk",
    personalitycrisis:"GbMmEI7aRlE", blitzkrieg:"268C3N2dDYk", godsavequeen:"yqrAPOZxgzU", whiteriot:"Xk00SETBlyA", owealiving:"qLDimN21S5M", publicimage:"rfpVsnqk80U", shecontrol:"CYA-KtCfN6Q", onceinlifetime:"5IsSpAOD6K8", aforest:"xik-y0xlpZ0", hongkong:"7gJx23P3w0c", planetrock:"9J3lwZjHenA", rapture:"pHCdS7O248g", micfiend:"uPfIIn5V_LQ", fuckpolice:"d_AnibvbFWs", jumpjimcrow:"T5FpKAxQNKU",
    schizoid:"7OvW8Z7kiws", firthoffifth:"UjdNhtt3h7Q", roundabout:"cPCLFtxpadE", luckyman:"yRvljAT4O6Q", mooninjune:"IJFSIX_uVPM", impressioni:"DS76YKxiOKU", bancorip:"PfyzNl8a2Fg", arealuglio:"zy9B2xCW8ts", phaedra:"HIQ0dd7B_FU", vitaminc:"YmN9oHa3ZIQ", autobahn:"iukUMRlaBBE", heroes:"lXgkuM2NhYI", chinagirl:"fYPdEUBTArM", wannadog:"Uy2-5uDpu5Q", kickoutjams:"Nb__KOKUFw0",
    revolution9:"SNdcFPjGsm8", theend:"12R4FzIhdoQ", reallygot:"EEJVwzI3w78", mygeneration:"qN5zw04WxCc", believer:"i6cjGbDr4_M", wouldntnice:"-LeE86jZEXo", freedom:"rynxqdNMry4", whiterabbit:"pnJM_jC7j_4", starspangled:"sjzZh6-h9fM", watchtower:"TLV4_xaYynY", pipergates:"7A2IzRXwVvY", ironman:"qRcYjJQ0JHg", shockmonkey:"elBeF8xlu0c", inrainbows:"GoLJJRIWCLU",
    tuvuofa:"6vYcQaWdhm4", cieloinunastanza:"VkLxROfo2AA", ciaoamoreciao:"E2oaSgLdAAk", bellaciao:"4CI3lhyNKfo", "24milabaci":"Czeq3UPIz0U", larmando:"U74yps9oeKs", lamer:"tKOpxCP5TGM", vieenrose:"-0KvBnIvTFs", feuillesmortes:"Xo1C6E7jbPw", sheloves:"nGbWU8S3vzs", hardday:"Yjyj8qnqkYI", iffell:"F_80s6S_7Vw", inmylife:"YBcdt6DsLQA", tomorrownever:"pHNbHn3i9S4",
    georgia:"ggGzE5KfCio", iwantyouback:"79eyuz8z6Cg", babylove:"9_y6nFjoVp4", papasbag:"QE5D2hJhacU", dockbay:"rTVjnBo96Ug", sixtyminute:"pJbDHw_qsFs", jailhouse:"gj0Rz-uP4Mk", thatlbe:"-868M2k7Puo", spellonyou:"82cdnAUvsw8", blowin:"MMFj8uDubsE", leggendapiave:"llloLXJvy4Y", tammurriata:"_sbDAKMecZI", crapapelada:"qckWhsw-RZM", chebambola:"DCNcHUDPBLo",
    thisland:"wxiMrvDbq3s", lespaul:"NkGf1GHAxhE", mapleleaf:"zMVlICUZzfg", entertainer:"TSoXBkF832I", stlouis:"Sllp2C6NKDw", seeseerider:"7L1hE3Qhv7E", ponyblues:"_xWqtiFJKfs", crossroad:"Kxi4XkIVWLQ", liverystable:"5WojNaU4-kI", whitechristmas:"gB3A9tUBoWs", flymemoon:"JYuyWrkwpok", platterssmoke:"wG4mDo8QwAI", bemybaby:"jSPpbOGnFgk", changegonnacome:"wEBlaMOmKV4",
    lorca:"w1FQd76fI3A", chegade:"k2WctARV8Dc", desafinado:"tcZtakKdR-E", masquenada:"5r9X-iQfJ44", tropicalia:"tn9KnK0DZCc", vivirenpaz:"XkXise2bHE0", elcantante:"KfjB690ZTD4", bananaboat:"71fi-cBX3Ks", skaravan:"-B47nidCpr0", mylifebush:"ARmKfoEm6BM", graceland:"GP6a-7MP91g", sledgehammer:"LpY28vetocE", caruso:"PG7kpfbUCgs",
    tevoglio:"aj4Qkfm-hvA", pinafore:"n9VaDlbpAeI", smokeeyes:"KJGBjVwisSI", allthings:"9nJvHsq0zjY", nightday:"diUGIA1EmNk", frango:"-5BvAst7jEg", ummkulthum:"XPGHpBOt5sE", entredos:"2oyhlad64-s", leyendatiempo:"LhTUzleCwZc", barconegro:"8inwZrpgBIM", porunacabeza:"Gcxv7i02lXc",
    funiculi:"G_Ew9cTr35o", osolemio:"eQSNVBLTXYY", ohsusanna:"qSIj17xbAyk", alexander:"xppMR3QVmQI", mackknife:"X7eO7MKEZAY", summertime:"FXk2zvL6v8M", myfavorite:"2gyGzz7Zi9E", blueskies:"r0jVSMKV2-E", tara:"rYbpEVBKbjU", anatomy:"cntm7j6R1G0",
    videokilled:"W8r-tXRLazs", thriller:"sOnqjkJTMaA", billiejean:"Zi_XLOBDo_Y",
    stayinalive:"I_izvAbhExY", robots:"9plTe80SosA", loveteartus:"zuuObGsB0No",
    themessage:"PobrSpMwKk4", likerolling:"IwOfCgkyEj0", rollover:"EOrMg3pY7hw",
    rockclock:"ZgdufzXvjqw", heartbreak:"e9BLw4W5KU8", dayinlife:"usNsCeOV4GM",
    goodvibrations:"apBWI6xrbLY", anarchyuk:"cBojbjoMttI", londoncalling:"EfK-WX2pa8c",
    satisfaction:"nrIPxlFzDi0", whatsgoingon:"o5TmORitlKk", spaceoddity:"iYYRH4apXDo",
    volare:"7wWiC0e3b2I", libertango:"yvtpT1ARF1o", ipanema:"c5QfXjsoNe4",
    ishotmarley:"sG52YAe8Crg", walkthisway:"4B_UYYPb-Gk", rappersdelight:"mcCK99wHrk0",
    superstition:"7_tmeHCO1IM"
  };
  window.DATA.songs.forEach(function(s){ if(YT[s.id]) s.yt=YT[s.id]; });
})();
