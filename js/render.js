// Shared rendering utilities

function renderNavigation() {
  const nav = document.querySelector("#main-nav");
  if (!nav) return;

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  nav.innerHTML = siteData.navigation
    .map((item) => {
      const isActive = item.href === currentPage;

      return `
        <a href="${item.href}"
           class="nav-link ${isActive ? "active" : ""}">
          ${item.label}
        </a>
      `;
    })
    .join("");
}

function renderHome() {
  const nameEls = document.querySelectorAll("[data-name]");
  const titleEl = document.querySelector("[data-title]");
  const introEl = document.querySelector("[data-intro]");
  const highlightsEl = document.querySelector("#home-highlights");
  const focusEl = document.querySelector("#home-focus");
  const skillsEl = document.querySelector("#home-skills");
  const metricsEl = document.querySelector("#home-metrics");

  // Set name everywhere it exists (navbar + home)
  nameEls.forEach((el) => {
    el.textContent = siteData.profile.name;
  });

  if (titleEl) {
    titleEl.textContent = siteData.profile.title;
  }

  if (introEl) {
    introEl.textContent = siteData.profile.intro;
  }

  if (highlightsEl && siteData.profile.highlights) {
    highlightsEl.innerHTML = siteData.profile.highlights
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  if (focusEl && siteData.profile.focus) {
    focusEl.innerHTML = siteData.profile.focus
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  if (skillsEl && siteData.profile.skills) {
    skillsEl.innerHTML = siteData.profile.skills
      .map((item) => `<span class="chip">${item}</span>`)
      .join("");
  }

  if (metricsEl && siteData.profile.metrics) {
    metricsEl.innerHTML = siteData.profile.metrics
      .map(
        (metric) => `
          <div class="stat">
            <div class="value">${metric.value}</div>
            <div class="label">${metric.label}</div>
          </div>
        `
      )
      .join("");
  }
}

function renderAcademics() {
  const container = document.querySelector("#academics-content");
  if (!container) return;

  const a = siteData.academics;
  const coursework = a.coursework || [];
  const awards = a.awards || [];
  const activities = a.activities || [];
  const focus = a.focus || [];

  container.innerHTML = `
    <h1>Academics</h1>
    <div class="card">
      <h2>${a.degree}</h2>
      <p class="muted">${a.university}</p>
<p class="gpa">
  GPA: <strong>${Number(a.gpa).toFixed(1)} / ${a.scale}</strong>
</p>
      <ul>
        ${a.highlights.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </div>
    <div class="section-grid">
      <div class="card">
        <h2>Coursework</h2>
        <div class="chip-row">
          ${coursework.map((item) => `<span class="chip">${item}</span>`).join("")}
        </div>
      </div>
      <div class="card">
        <h2>Awards & Honors</h2>
        <ul>
          ${awards.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div class="card">
        <h2>Activities</h2>
        <ul>
          ${activities.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </div>
    <div class="card">
      <h2>Academic Focus</h2>
      <p class="muted">
        Focused on building a strong biomedical foundation while pursuing
        clinical and research exposure.
      </p>
      <div class="chip-row">
        ${focus.map((item) => `<span class="chip">${item}</span>`).join("")}
      </div>
    </div>
  `;
}

function renderExperience() {
  const container = document.querySelector("#experience-content");
  if (!container) return;

  const experiences = siteData.experiences || [];
  const experienceHighlights = siteData.experienceHighlights || [];
  const experienceMetrics = siteData.experienceMetrics || [];
  const experienceAreas = siteData.experienceAreas || {};
  const categories = [...new Set(experiences.map((exp) => exp.category))];

  container.innerHTML = `
    <h1>Experience</h1>
    <div class="card">
      <h2>Overview</h2>
      <ul>
        ${experienceHighlights
          .map((item) => `<li>${item}</li>`)
          .join("")}
      </ul>
      <div class="stats-row">
        ${experienceMetrics
          .map(
            (metric) => `
              <div class="stat">
                <div class="value">${metric.value}</div>
                <div class="label">${metric.label}</div>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
    <div class="section-grid">
      ${categories
        .map(
          (category) => `
            <div class="card">
              <h2>${category}</h2>
              <p class="muted">${experienceAreas[category] || ""}</p>
              <div class="chip-row">
                <span class="chip">${experiences.filter((exp) => exp.category === category).length} roles</span>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
    <div class="timeline">
      ${experiences
        .map(
          (exp) => `
            <div class="card">
              <span class="tag">${exp.category}</span>
              <h2>${exp.title}</h2>
              <p class="muted">
                ${exp.organization} - ${exp.period}
              </p>
              <p>${exp.description}</p>
              ${
                exp.highlights
                  ? `<ul>${exp.highlights
                      .map((item) => `<li>${item}</li>`)
                      .join("")}</ul>`
                  : ""
              }
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderContact() {
  const detailsEl = document.querySelector("#contact-details");
  const availabilityEl = document.querySelector("#contact-availability");
  const responseEl = document.querySelector("#contact-response");
  const linksEl = document.querySelector("#contact-links");
  const faqEl = document.querySelector("#contact-faq");

  if (!detailsEl || !siteData.contact) return;

  const availability = siteData.contact.availability || [];
  const links = siteData.contact.links || [];
  const faq = siteData.contact.faq || [];

  detailsEl.innerHTML = `
    <div class="info-item">
      <span>Email</span>
      <strong>${siteData.contact.email}</strong>
    </div>
    <div class="info-item">
      <span>Location</span>
      <strong>${siteData.contact.location}</strong>
    </div>
  `;

  if (availabilityEl) {
    availabilityEl.innerHTML = availability
      .map((item) => `<li>${item}</li>`)
      .join("");
  }

  if (responseEl) {
    responseEl.textContent = siteData.contact.responseTime;
  }

  if (linksEl) {
    linksEl.innerHTML = links
      .map(
        (link) =>
          `<a href="${link.href}" target="_blank" rel="noopener">${link.label}</a>`
      )
      .join("");
  }

  if (faqEl) {
    faqEl.innerHTML = faq
      .map(
        (item) => `
          <div class="faq-item">
            <h3>${item.q}</h3>
            <p class="muted">${item.a}</p>
          </div>
        `
      )
      .join("");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavigation();

  // Page-specific renders (safe checks inside each function)
  renderHome();
  renderAcademics();
  renderExperience();
  renderContact();

  const cvBtn = document.getElementById("download-cv");
  if (cvBtn) {
    cvBtn.addEventListener("click", () => {
      window.print();
    });
  }
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
