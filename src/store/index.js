import { createStore } from "vuex";

const store = createStore({
  state: {
    currentProject: {},
    projects: [
      {
        id: 1,
        title: "Groupomania",
        type: "Fullstack",
        description:
          "Groupomania est un projet Fullstack qui a mis a contribution tous mes savoirs acquis pendant ma formation allant du design à la construction des routes, des models, des controllers, de l'architecture de l'app, des appels API etc.",
        difficulties:
          "Groupomania m'a permis d'appréhender les notions de lifecycle des composants d'un framework, l'utilité d'un router ainsi que les spécificités d'une base de données relationnelle.",
        tools: ["HTML", "CSS", "Vue.js", "Axios", "Node.js", "Express", "MySQL", "Sequelize"],
        objectif: "Créer un réseau social d'entreprise",
        features: ["Création API CRUD", "Gérer un stockage de données SQL", "Call API", "Design"],
        image: require("@/assets/projects/forest1.jpg"),
        screen: [
          require("@/assets/photos-projects/Groupomania/Groupomania-home.png"),
          require("@/assets/photos-projects/Groupomania/Groupomania-login.png"),
          require("@/assets/photos-projects/Groupomania/Groupomania-feed.png"),
          require("@/assets/photos-projects/Groupomania/Groupomania-settings.png"),
        ],
        year: "2022",
        link: "https://github.com/J-ibz/Groupomania-projet-7",
        codeSource: "https://github.com/J-ibz/Groupomania-projet-7",
      },

      {
        id: 2,
        type: "Backend",
        title: "Hot Takes",
        description: "Hot Takes est un projet backend qui avait pour objectif de créer une API CRUD sécurisée via Node.js et MongoDB.",
        difficulties:
          "Ce projet m'a permis de me familiariser avec le backend et d'apprendre ce que sont les routes, les endpoints, les controllers et les middlewares.",
        tools: ["Nodejs", "Express", "mongoDB"],
        objectif: "Construire une API sécurisée",
        skills: ["Stocker des données", "Mettre en œuvre des opérations CRUD de manière sécurisée"],
        features: ["Stocker les données", "Liker, Poster, Créer, Editer un article"],
        image: require("@/assets/projects/canyon.jpg"),
        screen: [
          require("@/assets/photos-projects/HotTakes/Hot-takes-login.png"),
          require("@/assets/photos-projects/HotTakes/Hot-takes-create.png"),
          require("@/assets/photos-projects/HotTakes/Hot-takes-feed.png"),
          require("@/assets/photos-projects/HotTakes/Hot-takes-edit.png"),
        ],
        year: "2021",
        link: "https://github.com/J-ibz/Ibanez_6_21102021",
        codeSource: "https://github.com/J-ibz/Ibanez_6_21102021",
      },

      {
        id: 3,
        type: "Frontend",
        title: "KANAP",
        description: "KANAP est projet frontend qui a été notamment ma première expérience avec la programmation JS.",
        difficulties:
          "Ce projet m'a permis d'acquérir les bases de la programmation avec JS, notamment, les fonctions, les callbacks, les fetchs, les boucles etc.",
        tools: ["HTML", "CSS", "Javascript"],
        objectif: "Construire le frontend d'un site e-commerce",
        skills: ["Appel API", "Validation des données côté front", "Créer un plan de test pour une application"],
        features: ["Appel API", "Validation des données côté front", "Données Dynamique"],
        image: require("@/assets/projects/mountains.jpg"),
        screen: [
          require("@/assets/photos-projects/KANAP/KANAP-accueil.png"),
          require("@/assets/photos-projects/KANAP/KANAP-products.png"),
          require("@/assets/photos-projects/KANAP/KANAP-product.png"),
          require("@/assets/photos-projects/KANAP/KANAP-basket.png"),
        ],
        year: "2021",
        link: "https://github.com/J-ibz/ibanez_5_06092021",
        codeSource: "https://github.com/J-ibz/ibanez_5_06092021",
      },

      {
        id: 4,
        type: "SEO / Accessibilité",
        title: "La Chouette agence",
        description:
          "C'est un projet un peu différent des autres car il se concentrait principalement sur l'optimisation du SEO, l'accessibilité et les performances du site.",
        difficulties:
          "Ce projet m'a permis de mieux comprendre comment Google référence les sites, l'importante de la sémantique HTML, les normes W3C.",

        tools: ["HTML", "CSS", "W3C", "Lighthouse"],
        objectif: "Optimiser un site web existant",
        skills: [
          "Écrire un code HTML et CSS maintenable",
          "Assurer l'accessibilité d'un site web",
          "Optimiser le référencement d'un site web",
          "Optimiser la taille et la vitesse d’un site web",
        ],
        features: ["Optimisation SEO", "Amélioration Perfomances", "Amélioration Accessibilité"],
        image: require("@/assets/projects/forest2.jpg"),
        screen: [
          require("@/assets/photos-projects/La-Chouette-Agence/avant.png"),
          require("@/assets/photos-projects/La-Chouette-Agence/apres.png"),
          require("@/assets/photos-projects/La-Chouette-Agence/apres2.png"),
        ],
        year: "2021",
        link: "https://j-ibz.github.io/Ibanez_4_06082021/",
        codeSource: "https://github.com/J-ibz/Ibanez_4_06082021",
      },

      {
        id: 5,
        title: "OhMyFood",
        type: "Intégration & Animations CSS",

        description: "Oh My Food est un projet d'intégration web qui m'a initié aux animations CSS.",
        difficulties: "Ce projet m'a permis d'appronfondir mes compétences CSS via l'ajout d'animations.",

        tools: ["HTML", "CSS"],
        objectif: "Dynamiser une page web avec des animations CSS",
        skills: ["Animation CSS", "Création spinner", "Intégration maquette"],
        features: ["Animations CSS"],
        image: require("@/assets/projects/arbre-fruit.jpg"),
        screen: [require("@/assets/photos-projects/OhMyFood/ohmyFood1.png"), require("@/assets/photos-projects/OhMyFood/ohmyFood2.png")],
        year: "2021",
        link: "https://j-ibz.github.io/Ibanez_3_28062021/index.html",
        codeSource: "https://github.com/J-ibz/Ibanez_3_28062021",
      },

      {
        id: 6,
        title: "Reservia",
        type: "Intégration de maquette",
        description: "Reservia est un projet d'intégration web, le tout premier que j'ai réalisé.",
        difficulties: "Ce projet m'a permis de découvrir les bases de l'HTML et du CSS, les balises sémantiques et leurs roles, flex-box, grid etc.",
        tools: ["HTML", "CSS"],
        objectif: "Réaliser un prototype en intégrant une maquette en HTLM et CSS",
        features: ["Responsive", "Validation W3C"],
        image: require("@/assets/projects/lonelyboat.jpg"),
        alt: "Photo de la mer",
        screen: [require("@/assets/photos-projects/Reservia/no1.png")],
        year: "2021",
        link: "https://j-ibz.github.io/Ibanez_2_26052021/",
        codeSource: "https://github.com/J-ibz/Ibanez_2_26052021",
      },
    ],
  },

  getters: {
    getProjects(state) {
      return state.projects;
    },
    getCurrentProject(state) {
      return state.currentProject;
    },
  },

  mutations: {
    setCurrentProject(state, project) {
      state.currentProject = project;
    },
  },

  actions: {
    setCurrentProject({ commit, state }, projectId) {
      let projectFound = {};
      state.projects.forEach((project) => {
        if (projectId == project.title) {
          projectFound = project;
        }
      });
      commit("setCurrentProject", projectFound);
    },
  },
});

export default store;
