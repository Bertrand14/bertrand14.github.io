const online = [
    {
        title: "Cuisine et Traditions",
        link:"https://cuisine-et-traditions.com",
        image:"./src/assets/images/projects/cuisine-et-traditions.png",
        technologies:["HTML", "CSS", "PHP (Back-End)", "MySQL (Tietokanta)",],
        date:"2009",
        description:"Ranskalais-suomalaiselle gastronomialle omistettu alusta. Tämä projekti heijastaa aloitustani verkkokehityksessä keskittyen kulttuuriseen ja yhteisölliseen näkökulmaan.",
        keypoints: [
            "Johdonmukaisen HTML-rakenteen luominen.",
            "CSS-tyylien hallinta yksinkertaisiin mutta tyylikkäisiin asetteluihin.",
            "Strukturoidun tietokannan luominen",
            "Monikielisyys: Sisällön hallinta useilla kielillä monipuolisen asiakaskunnan tyydyttämiseksi.",
        ],
        status: "Sivusto on online-tilassa ja toimiva, mutta se voisi hyötyä täydellisestä suunnittelun ja teknisen rakenteen uudistamisesta nykyaikaisten standardien täyttämiseksi ja paremman käyttökokemuksen tarjoamiseksi. Lisäksi suurta osaa sivustosta ei ole käännetty kokonaan.",
    },
    {
        title: "Martinin Herkut",
        link:"https://martininherkut.net",
        image:"./src/assets/images/projects/martinin-herkut.png",
        technologies:["HTML", "CSS", "JavaScript (Vanilla)", "PHP (Back-End)", "MySQL (Tietokanta)",],
        date:"2011",
        description:"Martinin Herkut syntyi halusta jakaa intohimoni ranskalaiseen keittiöön Suomessa. Nähtyäni ystävieni keskuudessa kasvavan kiinnostuksen kotitekoisia ruokiani kohtaan päätin luoda yksinkertaisen ja käyttäjäystävällisen alustan, jonka avulla asiakkaat voivat tilata ranskalaisia ​​erikoisuuksia suoraan kotoa. Tämä projekti oli myös kunnianosoitus pojalleni Martinille, joka inspiroi minua koko sen suunnittelussa.",
        keypoints:[
            "Back-end: Kehitä turvallinen ja helppokäyttöinen tilaustenhallintajärjestelmä PHP:n avulla.",
            "Design: Luo käyttöliittymä, joka tuo esiin sekä ranskalaisen gastronomian eleganssin että skandinaavisen yksinkertaisuuden."
        ],
        status: "Sivusto on online-tilassa ja toimiva, mutta se voisi hyötyä täydellisestä suunnittelun ja teknisen rakenteen uudistamisesta nykyaikaisten standardien täyttämiseksi ja paremman käyttökokemuksen tarjoamiseksi.",
    },
    {
        title: "Korpot t:mi v3.2",
        link:"https://korpot.org",
        iframe:"https://korpot.org",
        technologies:["React", "SASS", "Node.js (Back-End)", "SQL (Tietokanta),"],
        date:"2023",
        description:"Korpot.org on vuonna 2023 perustetun yritykseni Korpot t:mi digitaalinen laajennus tukemaan arkielämässä olevia perheitä. Sivuston tavoitteena on tarjota selkeä ja ammattimainen käyttöliittymä, jossa asiakkaat voivat oppia palveluistani, käyttää koulutusresursseja ja varata valmennusistuntoja.",
        keypoints:[
            "UX/UI-suunnittelu: Tarjoa käyttöliittymä, joka on sekä ammattimainen että lämmin, mukautettu stressaantuneille tai vaikeuksissa oleville perheille.",
            "Verkkovaraus: Integroi kalenterijärjestelmä, joka on synkronoitu saatavuuden kanssa ja takaa samalla sujuvan käyttökokemuksen.",
            "Yksityinen hallintapaneeli: Asiakasalue, jonka avulla voit hallita tapaamisia, käyttää jaettuja asiakirjoja ja seurata edistymistä.",
        ],
        status:"Korpot.org on verkossa ja toimii. Tammikuu 2025, olen parantunut muutamia asiaa, kuten graafinen ja interaktiivisuutta ja käyttäjien sitoutumista parantavien ominaisuuksien lisääminen."
    },
    {
        title: "Fanikauppa",
        iframe:"https://bertrand14.github.io/fanikauppa/",
        technologies:["HTML", "CSS", "REACT",],
        date:"2024",
        description:"Fanikauppa on ReactJS:llä ja Vitellä toteutettu yksisivuinen verkkosovellus (SPA), joka toimii fanituotteiden myyntiin suunniteltuna verkkokaupan prototyyppinä. Projektissa keskityttiin erityisesti ostoskorin tilamuutosten hallintaan käyttäen Reactin useState-hookia. Sovellus on julkaistu GitHub Pages -palvelussa.",
        keypoints:[
            "Tuotteiden selaus: Käyttäjä voi selata tuotteita listana tai karusellin avulla. Tuotetiedot esitetään selkeästi ja intuitiivisesti.",
            "Tuotteiden lisääminen ostoskoriin: Tuotteita voi lisätä ostoskoriin valitsemalla halutun kappalemäärän. Ostoskorin kokonaishinta päivittyy reaaliaikaisesti.",
            "Ostoskorin hallinta: Käyttäjä voi tarkastella, muokata ja tyhjentää ostoskorin sisältöä. Kaikki tilamuutokset hallitaan Reactin useState-hookin avulla.",
            "Tilauksen vahvistaminen: Käyttäjää pyydetään syöttämään yhteystiedot (nimi, sähköposti, puhelinnumero, toimitusosoite), minkä jälkeen näytetään tilauksen yhteenveto ja kiitosviesti. Tämän jälkeen ostoskori ja tiedot nollautuvat.",
            "Automaattinen alennusjärjestelmä tilauksen loppusumman mukaan.",
        ],
        status:"Projekti on vielä kehitysvaiheessa. Tavoitteena on lisätä lisää ominaisuuksia ja parantaa käyttöliittymää käyttäjäpalautteen perusteella.",


    },
    {
        title: "Lukuhaaste",
        link:"https://lukuhaaste.team25a.treok.io/",
        iframe:"https://lukuhaaste.team25a.treok.io/",
        technologies:["HTML", "CSS", "Laravel", "JavaScript"],
        date:"2025",
        description:"Lukuhaaste on verkkosovellus, joka kannustaa käyttäjiä lukemaan kirjoja ja jakamaan kokemuksiaan. Käyttäjät voivat luoda henkilökohtaisia lukuhaasteita, seurata edistymistään ja jakaa suosituksia muille.",
        keypoints:[
            "Käyttäjät voivat luoda ja hallita henkilökohtaisia lukuhaasteitaan.",
            "Sovellus tarjoaa mahdollisuuden jakaa kokemuksia ja suosituksia muiden käyttäjien kanssa.",
            "Sovellus on responsiivinen ja toimii hyvin eri laitteilla.",
            "Käyttäjät voivat seurata edistymistään ja saada muistutuksia lukemisesta.",       
        ],  
        status:"Projekti on vielä kehitysvaiheessa. Tavoitteena on lisätä lisää ominaisuuksia ja parantaa käyttöliittymää käyttäjäpalautteen perusteella.",
    },
]

const gitHub = [
    {
        title: "Ohimaan marjatila",
        link:"https://github.com/tredu/html-ja-css-Bertrand14/tree/main/harjoitukset/Harjoitus3",
        image:"./src/assets/images/projects/ohimaan-marjatila.png",
        technologies:["HTML", "CSS"],
        date:"10.2024",
        description:"",
        keypoints: [
            "Suunnittele marjatilalle sopiva verkkosivun ulkoasu AdobeXD:n avulla. Suunnittele jokaiselle kolmelle sivulle versio tietokonenäytölle ja kännykkänäytölle.",
            "Luo sitä varten Gitissä olevan Harjoitukset-kansion sisään oma kansio nimeltään Harjoitus 3. Siellä pääsivun nimen kuuluu olla index.html. Muille sivuille sopii nimeksi esimerkiksi tilaus.html ja yhteystiedot.html. Lisää myös kaikille sivuille yhteinen CSS-tiedosto ja linkitä se jokaiselle sivulle. Jos sivullasi on paljon kuvia, voit tehdä niille oman kansion tähän kansioon.",
            "Tee ensin etusivu ja muotoile ne oman suunnitelmasi mukaisesti.",
            "Tee sitten toiset kaksi sivua (voit kopioida header-osion, navigaation ja footer-osion koodin). Laita navigaation linkit viemään sivuston toisille sivuille. Jos ne ovat samassa kansiossa, pelkkä tiedoston nimi riittää.",
            "Tee sivuista responsiiviset eli että ne toimivat niin tietokoneen kuin mobiililaitteenkin näytöllä.",
        ],
        status: "",
    },
    ]

const standBy = [
    {
        title: "KerhoOlo",
        image:"./src/assets/images/projects/kerhoolo.png",
        technologies:["HTML", "SCSS", "REACT", "MySQL", "Node.js", "Laravel"],
        date:"2025?",
        description:"KerhoOlo on web-sovellus, jonka avulla voidaan hallita lasten päiväkotien läsnäoloa, jolloin työntekijät voivat seurata tuloja ja lähtöjä reaaliajassa. Se tarjoaa myös järjestelmänvalvojille mahdollisuuden hallita lasten asiakirjoja, luoda läsnäoloraportteja ja hallita käyttäjiä samalla, kun taataan turvallinen ja henkilökohtainen pääsy roolien mukaan.",
        keypoints: [
            "Määrittele toiminnalliset tarpeet: Tunnistaa käyttäjät (työntekijät ja järjestelmänvalvojat) ja keskeiset toiminnot, kuten läsnäoloseurannan, lapsitietueiden hallinnan ja raportoinnin, eri rooleja ja käyttöoikeuksia.",
            "Luo järjestelmäarkkitehtuuri: Suunnittele tietorakenne (lapset, käyttäjät, läsnäolo) ja määritä RESTful API -reitit, joita tarvitaan tietokannan kanssa vuorovaikutukseen ja päätoimintojen hallintaan.",
            "Prototyyppi käyttöliittymä: Piirrä selkeitä ja intuitiivisia malleja Figman kaltaisilla työkaluilla sivujen järjestämiseen: kojelautaan, lomakkeisiin ja yksinkertaistettuun navigointijärjestelmään.",
            "Kehitys: Luo taustan (API, jossa on Node.js ja Express.js) tietojen hallintaa ja todennusta varten ja kehittää sitten käyttöliittymän (React.js) dynaamista API-yhteyttä varten.",
            "Testaus ja optimointi: Testaa sovellusta (yksikköä ja integraatiota) virheiden havaitsemiseksi, suorituskyvyn optimoimiseksi ja turvallisuuden vahvistamiseksi, erityisesti arkaluonteisten tietojen todentamisessa ja hallinnassa.",
            "Käynnistä ja ylläpitä sovellus: ottaa sovelluksen käyttöön palveluissa, kuten Vercel ja Heroku, seuraa säännöllisesti päivityksiä ja kerää palautetta tulevien ominaisuuksien parantamiseksi.",
        ],
        status: "Projekti kehitetty DEMO-esityksiä varten. Taustaa on vahvistettava, erityisesti arkaluonteisten tietojen salausta, salasanat ovat jo tiivistetty PHP-toiminnolla.",
    },
    {
        title: "KotiTaito",
        image:"./src/assets/images/projects/kotitaito.jpg",
        technologies:["HTML", "SCSS", "REACT", "Node.js", "Laravel"],
        date:"2025-2026?",
        description:"KotiTaito on web-pohjainen sovellus, joka on suunniteltu tukemaan kotikoulua perheille Suomessa.",
        keypoints: [
            "Seurata ja hallita kotikoulun edistymistä",
            "Jakaa tehtäviä ja kommentoida niitä",
            "Luoda ja seurata oppimistavoitteita",
            "Sovellus on suunniteltu joustavaksi ja helposti saavutettavaksi kaikille käyttäjille.",
        ],  
        status:"Projekti on tällä hetkellä kehitysvaiheessa ja on esitelty eräälle mahdolliselle asiakkaalle. Tämä projekti ei voi etenä ilman asiakkaan hyväksyntää ja sitoutumista, joten se on tällä hetkellä odotustilassa.",
    }
]

export {online, gitHub, standBy}