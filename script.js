/* ============================================================
   CSphere — Données, logique et rendu
   ============================================================ */

const DATA = {
  ds: {
    name: "Data Science",
    icon: "📊",
    logo: "ressources/ds-logo.png",
    desc: "La Data Science (Science des données) est un domaine interdisciplinaire qui combine les statistiques, les mathématiques, la programmation et l'intelligence artificielle afin d'extraire des connaissances pertinentes à partir de grandes quantités de données. Elle permet de transformer des données brutes en informations exploitables, de découvrir des tendances, d'identifier des relations, de réaliser des prédictions et d'accompagner la prise de décision.",
    jobs: ["Data analyst", "Data scientist", "Data engineer"],
    news: [
      ["Date du test : 24-11-2026 ,Heure : 10h ,Observations : Début des présentation"]
          ]
  },
  fs: {
    name: "Full Stack Developer",
    icon: "🌐",
    logo: "ressources/fs-logo.png",
    desc: "Le Full Stack Development est une spécialité du développement informatique qui englobe la conception et la réalisation d'applications web, aussi bien du côté client (Front-End) que du côté serveur (Back-End). Un développeur Full Stack maîtrise les différentes couches d'une application : l'interface utilisateur, la logique métier, la gestion des données, les API et le déploiement.",
    jobs: ["Développeur front-end", "Développeur back-end", "Développeur full stack"],
    news: [
      ["12 novembre 2026", "Lab : Créer une API REST avec Express"],
      ["05 novembre 2026", "Séminaire : Composants React"],
      ["22 octobre 2026", "Lab : Mise en page responsive"]
    ]
  },
  cy: {
    name: "Cybersécurité",
    icon: "🔒",
    logo: "ressources/cy-logo.png",
    desc: "La cybersécurité est un domaine de l'informatique consacré à la protection des systèmes informatiques, des réseaux, des applications et des données contre les cyberattaques, les accès non autorisés, les altérations et les différentes formes de menaces numériques. Elle repose sur un ensemble de techniques, de technologies, de méthodes et de bonnes pratiques permettant de garantir la confidentialité, l'intégrité et la disponibilité des informations.",
    jobs: ["Analyste SOC", "Pentester", "Responsable sécurité (RSSI)"],
    news: [
      ["Technique d'expression :Date du test : 18-11-2026,,Observations : un thème :01_CV . 02 Lettre de Motivation. 03 Pitch De Présentation "],
    ["Fondamentaux de la Cybersécurité :Date du test : 18-11-2026,Heure : 11h,Observations : Distribution des thème"],
    
    ]
  },
  ia: {
    name: "Intelligence artificielle et Télécommunications",
    icon: "🤖",
    logo: "ressources/ia-logo.png",
    desc: "L'association de l'Intelligence Artificielle (IA) et des Télécommunications représente l'un des axes majeurs de l'évolution des technologies numériques. L'intelligence artificielle permet aux systèmes de télécommunications d'analyser de grandes quantités de données, d'automatiser certaines opérations, de prédire les anomalies, d'optimiser les performances des réseaux et d'améliorer l'expérience des utilisateurs. Cette spécialité se situe à l'intersection de plusieurs disciplines : intelligence artificielle, science des données, réseaux informatiques, traitement du signal et systèmes de communication.",
    jobs: ["Ingénieur IA", "Ingénieur ML", "Chercheur en IA"],
    news: [
      ["Date du test : 23-11-2026,Heure : 13h,Observations : QCM / Questions libres"],

    ]
  },
    en: {
    name: "Encadrement & Accompagnement",
    icon: "🎓",
    logo: "ressources/en-logo.png",
    desc: "L'encadrement est un espace d'accompagnement, de partage et de transmission des connaissances. Il vise à guider les étudiants dans leurs parcours académiques et leurs projets pratiques, en les aidant à développer leurs compétences techniques, leur esprit d'analyse et leur autonomie.À travers un accompagnement personnalisé, je les encourage à transformer leurs idées en réalisations concrètes et à relever les défis du monde numérique et technologique.",
    jobs: ["BTS "],
    news: [
      ["Date  : 16-11-2026 : Début des encadrement"]
          ]
  },
};

/* ---------- Ressources par spécialité ----------
   Format : [titre, url/chemin, description, type]
   type = "web"   → lien internet
          "local" → fichier de votre PC (dossier ressources/)
------------------------------------------------- */
const RES = {
  ds: {
    "Cours": [
     ["Cours ", "ressources/ds/m17 cour.pptx", "Support de cours complet ", "local"]
    ],
    "Documentation": [
      ["Guide API / HTTP", "ressources/ds/Guide_API_Maouche_Meriem.pdf", "Explication des API et méthodes HTTP", "local"],
      ["Guide Arab", "ressources/ds/m17_explication_simplifiee.pdf", "Explication en Arab de cours.", "local"],
["Résumer de cours", "ressources/ds/Déploiement et automatisation des modèles d'apprentissage (1).pdf", "Résumer", "local"] ,  
 ["Cloud_docker", "ressources/ds/cloud_docker_ihm_client.pdf", "Graphe cloud_docker.", "local"],
["Ressources vidéo", "ressources/ds/Fiche ressources vidéo · Module 17 Maouche Meriem.pdf", "Ressources supplémentaire", "local"],
["Load Balancer, Registry d'images, Stockage persistant", "ressources/ds/load_balancer_registry_stockage.pdf", "Ressources supplémentaire", "local"],
["ML méthodes", "ressources/ds/ML Maouche Meriem.jfif", "Ressources supplémentaire ML méthodes", "local"],
["Parcour data scientist", "ressources/ds/data.jpg", "Parcour data scientist", "local"],
    ],
    "Pratique": [
      ["TP Pickle", "ressources/ds/Guide du stagiaire – TP Module 17 déployer un modèle de prédiction du prix des maisons.pdf", "TP.", "local"]
    ]
  },
  fs: {
    "Cours": [
      ["freeCodeCamp", "https://www.freecodecamp.org/", "Parcours web complets et gratuits.", "web"],
      ["The Odin Project", "https://www.theodinproject.com/", "Cursus full stack avec projets.", "web"]
    ],
    "Documentation": [
      ["MDN Web Docs", "https://developer.mozilla.org/fr/", "HTML, CSS, JavaScript.", "web"],
      ["React", "https://react.dev/", "Documentation officielle.", "web"],
      ["Node.js", "https://nodejs.org/docs/latest/api/", "API Node.js.", "web"],
      ["Pro Git (français)", "https://git-scm.com/book/fr/v2", "Livre gratuit sur Git.", "web"],
      ["Cheatsheet HTML/CSS (PDF)", "ressources/fs/cheatsheet-html.pdf", "Mémento HTML5 et CSS3.", "local"]
    ],
    "Pratique": [
      ["Frontend Mentor", "https://www.frontendmentor.io/", "Défis de développement front-end.", "web"],
      ["TP API REST (PDF)", "ressources/fs/tp-api-rest.pdf", "Énoncé complet du TP Express.", "local"]
    ]
  },
  cy: {
    "Cours": [
      ["cours communication fr", "ressources/cy/MC5_Support_de_cours_detaille Maouche Meriem.pdf", " cours en français.", "local"],
      ["cours communication ar", "ressources/cy/MC5_Support_de_cours_AR Maouche Meriem.pdf", "cours en arabs", "local"],
      ["cours cybersécurité", "ressources/cy/Cours_Fondamentaux_Cybersecurite_MC6.pptx", "cours power point.", "local"]],
    "Documentation": [
        ["Guide en cybersécurité", "ressources/cy/Fondamentaux_Cybersecurite_M.C.6 Maouche Meriem.pdf", "guide supplémentaire", "local"],
      ["Résumer de cours communication", "ressources/cy/Schemas_Communication_Professionnelle.pdf", "Résumer de cours communication", "local"],
      
  ["CV – Karim Benali", "ressources/cy/01_CV_Karim_Benali.docx", "CV technicien SOC junior", "local"],
  ["Lettre de motivation", "ressources/cy/02_Lettre_de_motivation.docx", "Candidature poste technicien SOC junior", "local"],
  ["Pitch de présentation 30s", "ressources/cy/03_Pitch_de_presentation_30s.docx", "Discours de présentation et structure", "local"],
  ["Simulation d'entretien d'embauche", "ressources/cy/04_Simulation_entretien_embauche.docx", "Questions/réponses et conseils entretien", "local"],
  ["Message de remerciement", "ressources/cy/05_Message_de_remerciement.docx", "Modèle de remerciement post-entretien", "local"],
  ["Note de service – Mots de passe", "ressources/cy/06_Note_de_service.docx", "Politique de mots de passe obligatoire", "local"],
  ["Rapport d'incident de sécurité", "ressources/cy/07_Rapport_incident.docx", "Rapport tentative d'intrusion 12/09/2026", "local"],
  ["Compte-rendu de réunion", "ressources/cy/08_Compte_rendu_reunion.docx", "Point hebdomadaire sécurité 15/09/2026", "local"],
  ["Extrait charte informatique", "ressources/cy/09_Extrait_charte_informatique.docx", "Articles 3 et 5 – confidentialité et accès", "local"],
  ["Guide en cybersécurité", "ressources/cy/Fondamentaux_Cybersecurite_M.C.6 Maouche Meriem.pdf", "guide supplementaire", "local"],
  ["Résumé de cours communication", "ressources/cy/Schemas_Communication_Professionnelle.pdf", "Résumé de cours communication", "local"]
],
    
    "Pratique": [
      
      
    ]
  },
  ia: {
    "Cours": [
      ["cours ", "ressources/ia/Programmation_Procedurale_Algorithmique_C.pptx", "cours power point", "local"]

    ],
    "Documentation": [
         ["Guide en algorithmique et programmation en C", "ressources/ia/BTS Guide_Programmation_Procedurale_Algorithmique_C Maouche Meriem.pdf", "guide supplémentaire", "local"],
          ["Ressources ", "ressources/ia/Capture d'écran 2026-11-15 141011.png", "ressources platforme et logicils", "local"],

    ],
    "Pratique": [
 [" Série des exercices en Algo et C ", "ressources/ia/Série d'exercices Programmation procédurale en langage C.pdf", "série des exercices en Algo et C", "local"]
    ],
    
  },
   en: {
    "Cours": [
     
    ],
    "Documentation": [
      ["Guide redaction memoire_BTS", "ressources/en/Guide_Redaction_Memoire_BTS Mme Maouche Meriem.pdf", "Guide redaction memoire_BTS", "local"],
    ["Guide redaction memoire_BTS Arab ", "ressources/en/Guide_Redaction_Memoire_BTS_Arabe.pdf", "Guide redaction memoire_BTS Arab", "local"],
    ["Template Memoire BTS", "ressources/en/Template_Memoire_BTS Maouche Meriem.docx", "Template_Memoire_BTS Maouche Meriem", "local"],
    ],
    "Pratique": [
      
    ]
  }
};

/* ---------- Utilitaires ---------- */
const $ = id => document.getElementById(id);

/* Encode chaque segment du chemin (espaces, accents, apostrophes, « · », « – »...) */
const encodePath = p => p.split("/").map(encodeURIComponent).join("/");

/* ---------- Onglets ---------- */
const tabs = $("tabs");

Object.entries(DATA).forEach(([key, v]) => {
  const b = document.createElement("button");
  b.setAttribute("role", "tab");
  b.setAttribute("aria-selected", "false");
  b.dataset.key = key;
  b.innerHTML = `<span class="tab-icon">${v.icon}</span><span>${v.name}</span>`;
  b.addEventListener("click", () => show(key));
  tabs.appendChild(b);
});

/* ---------- Logo (toujours logo.png, emoji en secours) ---------- */
function updateLogo(d) {
  const logoEl = $("logo");
  if (!logoEl) return;

  let img = logoEl.querySelector("img");
  if (!img) {
    img = document.createElement("img");
    img.id = "logo-img";
    img.alt = "Logo CSphere";
    img.onerror = () => {
      img.remove();
      logoEl.textContent = "💻";
    };
    logoEl.textContent = "";
    logoEl.appendChild(img);
  }

  if (!img.getAttribute("src")) img.src = "logo.png";
}
/* ---------- Affichage d'une spécialité ---------- */
function show(key) {
  const d = DATA[key];
  if (!d) return;

  [...tabs.children].forEach(b =>
    b.setAttribute("aria-selected", b.dataset.key === key ? "true" : "false")
  );

  updateLogo(d);
  document.title = d.name + " — CSphere";

  $("desc").innerHTML = `
    <h3 class="card-title">${d.icon} ${d.name}</h3>
    <p>${d.desc}</p>
  `;

  const jobsEl = $("jobs");
  if (jobsEl) {
    jobsEl.innerHTML = d.jobs.map(j => `<li>${j}</li>`).join("");
  }

  const newsEl = $("news");
  const newsTitle = $("news-title");
  if (newsEl) {
    newsEl.innerHTML = d.news
      .map(n => n.length > 1
        ? `<li><span class="date">${n[0]}</span><span class="sep">—</span>${n[1]}</li>`
        : `<li>${n[0]}</li>`)
      .join("");
  }
  if (newsTitle) newsTitle.textContent = "— " + d.name;

  renderRes(key);
}

/* ---------- Ressources ---------- */
function renderRes(key) {
  const resTitle = $("res-title");
  const box = $("res");
  if (!box) return;

  if (resTitle) resTitle.textContent = "— " + DATA[key].name;
  box.innerHTML = "";

  const res = RES[key];
  if (!res) {
    box.innerHTML = `<p class="muted">Aucune ressource disponible pour cette spécialité.</p>`;
    return;
  }

  Object.entries(res).forEach(([cat, items]) => {
    const wrap = document.createElement("div");
    wrap.className = "acc";

    const btn = document.createElement("button");
    btn.className = "acc-btn";
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = `
      <span>${cat} <span class="badge">${items.length}</span></span>
      <span class="arrow">▶</span>
    `;

    const panel = document.createElement("div");
    panel.className = "acc-panel";

    panel.innerHTML = items.map(r => {
      const [titre, url, desc, type] = r;
      const isLocal = type === "local";
      const icon = isLocal ? "📎" : "↗";
      const cls = isLocal ? "res-item local" : "res-item web";
      const label = isLocal ? "Fichier local" : "Lien web";
      const href = isLocal ? encodePath(url) : url;
      const fileName = url.split("/").pop();
      const linkAttrs = isLocal
        ? `download="${fileName.replace(/"/g, "")}"`
        : `target="_blank" rel="noopener noreferrer"`;

      return `
        <div class="${cls}">
          <a href="${href}" ${linkAttrs}>
            ${titre} <span class="ext">${icon}</span>
          </a>
          <p>
            <span class="tag-type">${label}</span>
            ${desc}
          </p>
        </div>
      `;
    }).join("");

    btn.addEventListener("click", () => {
      const open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    wrap.append(btn, panel);
    box.appendChild(wrap);
  });
}

/* ---------- Démarrage ---------- */
show("ds");

/* ---------- Diagnostic : ouvrir le site avec ?check à la fin de l'adresse ---------- */
if (location.search.includes("check")) {
  const panel = document.createElement("div");
  panel.style.cssText = "position:fixed;inset:10px;z-index:9999;overflow:auto;background:#fff;color:#000;border:3px solid #1f5fbf;border-radius:12px;padding:16px;font:14px/1.5 monospace";
  panel.innerHTML = "<h3>Diagnostic des ressources…</h3>";
  document.body.appendChild(panel);

  (async () => {
    let ko = 0;
    for (const [spec, cats] of Object.entries(RES)) {
      for (const [cat, items] of Object.entries(cats)) {
        for (const [titre, url, , type] of items) {
          if (type !== "local") continue;
          let ok = false, info = "";
          try {
            const r = await fetch(encodePath(url), { method: "HEAD", cache: "no-store" });
            ok = r.ok; info = r.status;
          } catch (e) { info = "erreur réseau"; }
          if (!ok) ko++;
          const line = document.createElement("div");
          line.style.color = ok ? "green" : "red";
          line.textContent = (ok ? "✔ " : "✘ ") + info + "  " + url;
          panel.appendChild(line);
        }
      }
    }
    const h = panel.querySelector("h3");
    h.textContent = ko ? `${ko} fichier(s) introuvable(s) (en rouge)` : "Tous les fichiers sont accessibles ✔";
  })();
}
