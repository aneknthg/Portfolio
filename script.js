/* ================================================================
   EDIT ME — all your real content lives in this data block.
   - Leave an image field as null to show a placeholder box.
   - Once you have real files, drop them in an /images folder next
     to this file and point the field at e.g. "images/project1.jpg"
   ================================================================ */

const PROFILE = {
  name: "Anek Anjireddy",
  badge: "New grad",                 // small pill under the avatar, e.g. "STUDENT", "ENGINEER"
  location: "Austin, Texas",
  bio: "Hey, I'm Anek, a recent graduate from the Indian Institute of Technology, Hyderabad, with a passion for Machine Learning and it's application in the real world. Currently exploring Uncertainty Quantification in AI Assisted Medical Imaging.",
  avatar: "images/avatar.jpg",                     // "images/avatar.jpg"

  // contact boxes (below name, above bio)
  email: "anekanjireddy06@gmail.com",                        // opens a pre-filled email draft
  github: "https://github.com/aneknthg",       // opens in a new tab
  linkedin: "https://www.linkedin.com/in/anek-anjireddy-03a057283", // opens in a new tab
  resume: "images/resume.pdf"                              // path to your resume PDF, e.g. place resume.pdf next to this file
};

const PROJECTS = [
  {
    id: "project-1",
    title: "Uncertainty Quantification in Medical Imaging",
    year: "2026",
    tags: ["Medical ML", "Bayesian Deep Learning", "PyTorch"],
    summary: "An understanding of uncertainty quantification in medical imaging, exploring various techniques and their applications in clinical settings.",
    description: "Having started the project as building an efficient pneumona detection classifier, I worked on multiple model variations of an Image-Net pretrained Densenet-121 Backbone. The baseline model achieved about 94% accuracy, and I shifted my focus to understanding the reliability of this model. Developed a MC Dropout based empirical framework with 100 forward passes.In order to quantify aleatoric uncertainty along with epistemic, I developed a second piepline using an Evidential deep learning classifier using Dirichlet based uncertainty Estimation.",
    thumb: "images/Project1_Thumbnail.jpg",     // "images/project1-thumb.jpg"
    images: ["images/Project1_Image1.png"],
    github: "https://github.com/aneknthg/Uncertainity-Estimation-for-Medical-ML.git"       // ["images/project1-1.jpg", "images/project1-2.jpg"]
  },
  {
    id: "project-2",
    title: "AI-Powered Deep Agent Workflow for Medicaid Analytics",
    year: "2026",
    tags: ["AWS", "SQL", "Python", "Data Analysis"],
    summary: "Built a Bedrock-based multi-agent analytics workflow that converts natural-language Medicaid queries into SQL analysis and identifies discrepancies across datasets.",
    description: "Developed an end-to-end AI data-analysis pipeline on Amazon Bedrock for detecting Medicaid URA discrepancies. The workflow combines entity extraction, context-aware SQL generation, Oracle database retrieval, and hybrid discrepancy reporting. Designed modular agents for use-case analysis, SQL generation, comparison, and orchestration to translate natural-language business queries into executable Oracle SQL and actionable insights. Integrated Oracle Database with connection pooling and schema-aware, parameterized SQL generation across claims, payment, and program datasets. Built a hybrid comparison engine combining SQL, statistical Python processing, and LLM-generated insights to identify time-based, category-based, and cross-dataset discrepancies. Six schema-management strategies reduced LLM context usage by 90%, from 50K to 5K tokens.",
    thumb: "images/Project3_Thumbnail.jpg",
    images: ["images/Project3_Image1.png"],
    github: "https://github.com/aneknthg/Agent-code.git"
  },
  {
    id: "project-3",
    title: "Time Series Forecasting of ICICI Bank Stock Prices",
    year: "2025",
    tags: ["Time Series", "Financial Forecasting", "SARIMA", "Holt-Winters"],
    summary: "Developed and compared SARIMA and Holt-Winters models for monthly ICICI Bank stock-price forecasting, with Holt-Winters achieving lower forecasting error.",
    description: "Developed a monthly time-series forecasting pipeline for ICICI Bank stock prices using historical market data. The project included monthly resampling, missing-value handling, exploratory analysis, and moving-average trend analysis. Performed time-series diagnostics using Augmented Dickey-Fuller tests, first-order differencing, seasonal decomposition, and ACF/PACF analysis to evaluate stationarity, trends, and seasonal behavior. Implemented a SARIMA forecasting model with exhaustive grid search across non-seasonal and seasonal parameters, selecting the configuration using Akaike Information Criterion. Also implemented multiplicative Holt-Winters Exponential Smoothing with 12-month seasonality. The models were compared using an 80/20 chronological train-test split, with Holt-Winters producing lower RMSE and MAE.",
    thumb: "images/Project2_Thumbnail.jpg",
    images: ["images/Project2_Image1.png", "images/Project2_Image2.png"],
    github: "https://github.com/aneknthg/ICICI-Stock-Price-Prediction.git"

  },
  {
    id: "project-4",
    title: "Garbage Classification with Attention-Augmented CNNs",
    year: "2025",
    tags: ["Transfer Learning", "Attention Mechanisms", "TensorFlow"],
    summary: "Built an attention-augmented garbage image classification system using EfficientNetB0 and CBAM, achieving up to 95% test accuracy on an independent dataset.",
    description: "Developed an end-to-end garbage classification pipeline using transfer learning with an EfficientNetB0 backbone and a custom Convolutional Block Attention Module (CBAM) combining channel and spatial attention. Implemented CBAM as reusable TensorFlow layers and built a training pipeline using tf.data, stratified dataset splitting, on-the-fly image augmentation, mixed-precision training, and staged fine-tuning. The model was trained and validated on two independent garbage classification datasets to evaluate robustness across datasets. It achieved 92% test accuracy on TrashNet and 95% test accuracy with a 0.954 F1-score on the larger independent Garbage Images Dataset.",
    thumb: "images/Project4_Thumbnail.jpeg",
    images: ["images/Project4_Image1.png"],
    github: "https://github.com/aneknthg/Garbage-Classification.git",
  }
  // Add more project objects here — the list page and home grid
  // both pull straight from this array.
];

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "Tech Mahindra",
    location: "Hyderabad, India",
    start: "May 2025",
    end: "July 2025",
    tags: ["Edge Computing", "Data Visualization", "Python"],
    description: "Worked with an international client to develop a data visualization dashboard for their edge computing platform.",
    logo: "images/Tech_Mahindra_logo.svg"   // "images/company1-logo.jpg"
  },
  {
    role: "ML Research Assistant",
    company: "Indian Institute of Technology, Hyderabad",
    location: "Hyderabad, India",
    start: "August 2025",
    end: "December 2025",
    tags: ["Computer Vision", "Feature Engineering", "PyTorch"],
    description: "Worked with Dr. Sumohana and PHD guide to develop a deepfake video detection model on the FaceForensics++ dataset.",
    logo: "images/IIT_Hyderabad_logo.svg"
  },
  {
    role: "Co-Founder & ML Head",
    company: "Afterhours",
    location: "Hyderabad, India",
    start: "March 2026",
    end: "Present",
    tags: ["Vite", "React", "AWS"],
    description: "Co-founded and serve as ML Head of Afterhours, leading the development of a women only social platform.",
    logo: "images/Afterhours_logo.svg"
  }
  // The home page's right-hand timeline pulls role / company / dates
  // straight from this same array — no separate list to maintain.
];

const EXTRACURRICULARS = [
  {
    title: "Head of Sponsorship, Elan & nVision, IIT Hyderabad",
    subtitle: "Led a 3-tier team of 200+ individuals to raise the largest sponsorship fund for any student run event in IIT-H.",
    image:  "images/extracurriuclar_1.HEIC"  // "images/extracurricular1.jpg"
  },
  {
    title: "Head of Writing Club, IIT Hyderabad",
    subtitle: "Led the Writing Club of IIT Hyderabad and promoted the culture of writing across the student body through offline and offline prose, poetry and word game events.",
    image: "images/extracurricular_2.HEIC"
  },
  {
    title: "Counselling Mentor, Sunshine, IIT Hyderabad",
    subtitle: "Provided counselling services to students and facilitated workshops on mental health and well-being.",
    image: "images/extracurricular_3.HEIC"
  }
  // Add more entries here — each renders as a card with an image on
  // top and a title + short description below, like the journal page.
];

const SKILLS = [
  { group: "Languages", items: ["Python", "C/C++", "Java", "SQL", "R", "MATLAB", "HTML/CSS", "JavaScript"] },
  { group: "Tools & Frameworks", items: ["TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "Seaborn", "Hugging Face", "LangChain", "FAISS", "React", "Vite", "Flask", "FastAPI", "Django", "Spring Boot", "Supabase", "Docker", "Git", "Claude Code", "Cursor"] },
  { group: "AI/ML", items: ["Deep Learning", "LLM Fine-Tuning", "Encoder-Decoder", "Distributed Training", "Self Supervised Learning", "MLOps", "Explainability", "Optimization", "Reinforcement Learning (RL)", "Fine Tuning", "Gen AI", "Prompt Engineering", "RAG", "AI Agents"] },
  { group: "Relevant Courses", items: ["Machine Learning", "Computer Vision", "Probability", "Linear Algebra", "Time Series Forecasting", "Information Theory", "NLP", "Financial Fraud Analytics", "Error Codes", "Entrepreneurship in Climate Change"] }
];

/* ================================================================
   Below this line is just rendering / routing code — you shouldn't
   need to touch it to update your content.
   ================================================================ */

const app = document.getElementById('app');

function initials(str){
  return (str || "?").split(" ").filter(Boolean).slice(0,2).map(w => w[0].toUpperCase()).join("");
}

function posterEl(imgSrc, label, extraClass){
  if(imgSrc){
    return `<div class="poster ${extraClass||''}"><img src="${imgSrc}" alt="${label}"></div>`;
  }
  return `<div class="poster ${extraClass||''}"><span class="ph-label">${label}</span></div>`;
}

function tagsHtml(tags){
  return (tags||[]).map(t => `<span class="pill">${t}</span>`).join("");
}

function header(activeTab){
  const tabs = [
    {key:'projects', label:'PROJECTS', href:'#/projects'},
    {key:'experience', label:'EXPERIENCE', href:'#/experience'},
    {key:'extracurriculars', label:'EXTRACURRICULARS', href:'#/extracurriculars'},
  ];
  return `
  <header class="topbar">
    <div class="inner">
      <div class="topbar-row">
        <a class="brand" href="#/"><span class="menu-glyph">&#9776;</span><span>${PROFILE.name}</span></a>
        <span class="icon-btn">&#128269;</span>
      </div>
      <nav class="tabbar">
        ${tabs.map(t => `<a class="tab ${activeTab===t.key?'active':''}" href="${t.href}">${t.label}</a>`).join("")}
      </nav>
    </div>
  </header>`;
}

function footer(){
  return `<footer>${PROFILE.name} — built with care.</footer>`;
}

/* ---------- HOME ---------- */
function renderHome(){
  const recent = PROJECTS.slice(0, 4);
  return `
    ${header(null)}
    <main>
      <div class="home-inner">
        <div class="home-grid">

          <div class="home-col-left">
            <div class="profile-hero">
              <div class="avatar-wrap">
                <div class="avatar">${PROFILE.avatar ? `<img src="${PROFILE.avatar}" alt="${PROFILE.name}">` : initials(PROFILE.name)}</div>
                ${PROFILE.badge ? `<div class="profile-badge">${PROFILE.badge}</div>` : ''}
              </div>
              <div class="profile-name">${PROFILE.name}</div>
              ${PROFILE.location ? `<div class="profile-location">&#128205; ${PROFILE.location}</div>` : ''}

              <div class="contact-grid">
                <a class="contact-box" href="mailto:${PROFILE.email}?subject=${encodeURIComponent('Hi ' + PROFILE.name)}">Email</a>
                <a class="contact-box" href="${PROFILE.github}" target="_blank" rel="noopener">GitHub</a>
                <a class="contact-box" href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
                <a class="contact-box" href="${PROFILE.resume}" target="_blank" rel="noopener">Resume</a>
              </div>

              <div class="profile-bio">${PROFILE.bio}</div>
            </div>

            <div class="section-label">Recent Activity</div>
            <div class="activity-grid">
              ${recent.map(p => `
                <a href="#/project/${p.id}">
                  ${posterEl(p.thumb, p.title)}
                </a>
              `).join("")}
            </div>
            <a class="more-link" href="#/projects">ALL PROJECTS &rarr;</a>

            <div class="section-label">Skills</div>
              ${SKILLS.map(group => `
                <div class="skills-group">
                  <div class="skills-group-label">${group.group}</div>
                  <div class="skills-wrap">${tagsHtml(group.items)}</div>
                </div>
              `).join("")}
          </div>

          <div class="home-col-right">
            <div class="section-label" style="margin-top:0;">Experience</div>
            <div class="mini-timeline">
              ${EXPERIENCE.map(e => `
                <div class="mini-exp-entry">
                  <div class="mini-exp-date">${e.start} &ndash; ${e.end}</div>
                  <div class="mini-exp-role">${e.role}</div>
                  <div class="mini-exp-company">${e.company}</div>
                </div>
              `).join("")}
            </div>
            <a class="more-link" href="#/experience">FULL EXPERIENCE &rarr;</a>
          </div>

        </div>

      </div>
    </main>
    ${footer()}
  `;
}

/* ---------- PROJECTS LIST ---------- */
function renderProjectsList(){
  return `
    ${header('projects')}
    <main>
      <div class="inner">
        <div class="section-label" style="margin-top:22px;">All Projects</div>
        ${PROJECTS.map(p => `
          <a class="project-card" href="#/project/${p.id}">
            <div class="project-card-top">
              <div class="project-card-title">${p.title}<span class="yr">${p.year}</span></div>
            </div>
            <div class="project-card-mid">
              <div class="tagrow">${tagsHtml(p.tags)}</div>
              <div class="avatar-mini">${initials(PROFILE.name)}</div>
            </div>
            <div class="project-card-body">
              ${posterEl(p.thumb, p.title)}
              <div class="project-card-summary">${p.summary}</div>
            </div>
          </a>
        `).join("")}

      </div>
    </main>
    ${footer()}
  `;
}

/* ---------- PROJECT DETAIL ---------- */
function renderProjectDetail(id){
  const p = PROJECTS.find(x => x.id === id);
  if(!p){
    return `
      ${header('projects')}
      <main><div class="inner">
        <div class="placeholder-page">
          <div class="big">Project not found</div>
          <a class="back-link" href="#/projects">&larr; Back to projects</a>
        </div>
      </div></main>
      ${footer()}
    `;
  }
  const imgs = p.images && p.images.length ? p.images : [null]; // default: 1 placeholder image
  return `
    ${header('projects')}
    <main>
      <div class="inner">
        <a class="back-link" href="#/projects">&larr; Back to projects</a>
        <div class="detail-title">${p.title}</div>
        <div class="detail-sub">${p.year}</div>
        <div class="detail-tags">${tagsHtml(p.tags)}</div>
        <div class="detail-images ${imgs.length===1?'single':''}">
          ${imgs.map(src => posterEl(src, p.title)).join("")}
        </div>
        <div class="detail-desc">${p.description}</div>
        <div class="detail-links">
          ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">GitHub</a>` : ''}
        </div>
        <div class="empty-hint" style="margin-top:26px;">
          Edit this project's <code>description</code> and <code>images</code> fields (up to 2) in the <code>PROJECTS</code> array.
        </div>
      </div>
    </main>
    ${footer()}
  `;
}

/* ---------- EXPERIENCE (diary style) ---------- */
function renderExperience(){
  return `
    ${header('experience')}
    <div class="diary-heading"><div class="inner">EXPERIENCE</div></div>
    <main>
      <div class="inner">
        ${EXPERIENCE.map(e => `
          <div class="exp-entry">
            <div class="exp-date"><div class="start">${e.start}</div>&ndash;<br>${e.end}</div>
            <div class="exp-logo">${e.logo ? `<img src="${e.logo}" alt="${e.company}">` : initials(e.company)}</div>
            <div class="exp-content">
              <div class="exp-role">${e.role}</div>
              <div class="exp-company">${e.company}</div>
              <div class="exp-location">${e.location}</div>
              <div class="exp-tags">${tagsHtml(e.tags)}</div>
              <div class="exp-desc">${e.description}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </main>
    ${footer()}
  `;
}

/* ---------- EXTRACURRICULARS (letterboxd journal look) ---------- */
function renderExtracurriculars(){
  return `
    ${header('extracurriculars')}
    <main>
      <div class="inner">
        <div class="section-label" style="margin-top:22px;">Extracurriculars</div>
        ${EXTRACURRICULARS.map(e => `
          <div class="journal-card">
            ${posterEl(e.image, e.title)}
            <div class="journal-card-body">
              <div class="journal-card-title">${e.title}</div>
              <div class="journal-card-sub">${e.subtitle}</div>
            </div>
          </div>
        `).join("")}
   
      </div>
    </main>
    ${footer()}
  `;
}

/* ---------- router ---------- */
function router(){
  const hash = location.hash || '#/';
  const parts = hash.replace('#/', '').split('/').filter(Boolean);

  let html;
  if(parts.length === 0){
    html = renderHome();
  } else if(parts[0] === 'projects' && parts.length === 1){
    html = renderProjectsList();
  } else if(parts[0] === 'project' && parts[1]){
    html = renderProjectDetail(parts[1]);
  } else if(parts[0] === 'experience'){
    html = renderExperience();
  } else if(parts[0] === 'extracurriculars'){
    html = renderExtracurriculars();
  } else {
    html = renderHome();
  }
  app.innerHTML = html;
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
