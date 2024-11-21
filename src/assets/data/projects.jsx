const online = [
 {
  title: "Cuisine et Traditions",
  link:"https://cuisine-et-traditions.com",
  image:"src/assets/images/projects/cuisine-et-traditions.png",
  technologies:["HTML", "CSS", "PHP (Back-End)", "MySQL (Base de données)",],
  date:"2009",
  description:"Une plateforme dédiée à la gastronomie franco-finlandaise. Ce projet reflète mes débuts en développement web avec une attention portée sur l’aspect culturel et communautaire.",
  keypoints: [
   "Création d’une structure HTML cohérente.",
   "Gestion de styles CSS pour des mises en page simples mais élégantes.",
   "Création d'une base de données structurée",
   "Multilinguisme : Gestion des contenus en plusieurs langues pour satisfaire une clientèle variée.",
  ],
  status: "Le site est en ligne et fonctionnel, mais il pourrait bénéficier d'une refonte complète en termes de design et de structure technique pour répondre aux standards modernes et offrir une meilleure expérience utilisateur. De plus, une bonen partie du site n'est pas complètement traduite.",
 },
 {
  title: "Martinin Herkut",
  link:"https://martininherkut.net",
  image:"src/assets/images/projects/martinin-herkut.png",
  technologies:["HTML", "CSS", "JavaScript (Vanilla)", "PHP (Back-End)", "MySQL (Base de données)",],
  date:"2011",
  description:"Martinin Herkut est né d'une envie de partager ma passion pour la cuisine française en Finlande. Après avoir constaté un intérêt croissant parmi mes amis pour mes plats faits maison, j’ai décidé de créer une plateforme simple et conviviale permettant aux clients de commander des spécialités françaises directement depuis chez eux. Ce projet a également été un hommage à mon fils Martin, qui m'a inspiré tout au long de sa conception.",
  keypoints:[
   "Back-End : Développer un système de gestion des commandes sécurisé et simple d’utilisation avec PHP.",
   "Design : Créer une interface qui évoque à la fois l'élégance de la gastronomie française et la simplicité scandinave.",
  ],
  status: "Le site est en ligne et fonctionnel, mais il pourrait bénéficier d'une refonte complète en termes de design et de structure technique pour répondre aux standards modernes et offrir une meilleure expérience utilisateur.",
 },
 {
  title: "Korpot t:mi",
  link:"https://korpot.org",
  image:"src/assets/images/projects/korpot.png",
  technologies:["React", "SASS", "Node.js (Back-End)", "SQL (Base de données),"],
  date:"2023",
  description:"Korpot.org est le prolongement numérique de ma société Korpot t:mi, fondée en 2023 pour accompagner les familles rencontrant des difficultés éducatives. Le site vise à fournir une interface claire et professionnelle où les clients peuvent en apprendre davantage sur mes services, accéder à des ressources éducatives et planifier des sessions de coaching. L'objectif principal est de créer une connexion authentique et rassurante tout en proposant une solution digitale intuitive.",
  keypoints:[
   "Conception UX/UI : Proposer une interface à la fois professionnelle et chaleureuse, adaptée aux familles stressées ou en difficulté.",
   "Réservation en ligne : Intégrer un système de calendrier synchronisé avec les disponibilités tout en garantissant une expérience utilisateur fluide.",
   "Dashboard privé : Espace client permettant de gérer les rendez-vous, d’accéder à des documents partagés et de suivre les progrès.",
  ],
  status:"Korpot.org est en ligne et opérationnel. Cependant, il reste des axes d'amélioration, comme une refonte graphique et l'ajout de fonctionnalités pour enrichir l’interactivité et l’engagement des utilisateurs. Je souhaite également mettre en place une gestion des données sensibles, pour protéger la confidentialité des informations personnelles des clients."
 },
]

const gitHub = [
 {
  title: "Ohimaan marjatila",
  link:"https://github.com/tredu/html-ja-css-Bertrand14/tree/main/harjoitukset/Harjoitus3",
  image:"src/assets/images/projects/ohimaan-marjatila.png",
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
  title: "PrésenceGuard",
  link:"",
  image:"",
  technologies:["HTML", "SCSS", "REACT", "PostgreSQL", "Node.js"],
  date:"2025?",
  description:"PrésenceGuard est une application web de gestion des présences des enfants dans les garderies, permettant aux employés de suivre les arrivées et départs en temps réel. Elle offre également aux administrateurs la possibilité de gérer les fiches des enfants, de générer des rapports de présence et de gérer les utilisateurs, tout en garantissant un accès sécurisé et personnalisé selon les rôles.",
  keypoints: [
   "Définir les besoins fonctionnels : Identifie les utilisateurs (employés et administrateurs) et les fonctionnalités clés, comme le suivi des présences, la gestion des fiches enfants, et la création de rapports, en différenciant les rôles et droits d’accès.",
   "Créer une architecture système : Conçois la structure des données (enfants, utilisateurs, présences) et définis les routes API RESTful nécessaires pour interagir avec la base de données et gérer les fonctionnalités principales.",
   "Prototyper l'interface utilisateur : Dessine des maquettes claires et intuitives avec des outils comme Figma pour organiser les pages : tableau de bord, formulaires, et système de navigation simplifié.",
   "Développement : Crée le back-end (API avec Node.js et Express.js) pour gérer les données et l’authentification, puis développe le front-end (React.js) pour une interface utilisateur dynamique et connectée aux APIs.",
   "Tests et optimisation : Teste l’application (unitaires et d’intégration) pour détecter les erreurs, optimise les performances, et renforce la sécurité, notamment pour l’authentification et la gestion des données sensibles.",
   "Lancer et maintenir l’application : Déploie l’application sur des services comme Vercel et Heroku, assure un suivi régulier pour les mises à jour, et collecte les retours pour améliorer les fonctionnalités futures.",
  ],
  status: "Projet développé pour présentation DEMO. Le back-end doit être renforcer, notamment le chiffrage des données sensible (les mot de passe sont déjà hashé avec la fonction PHP.",
 },
]

export {online, gitHub, standBy}