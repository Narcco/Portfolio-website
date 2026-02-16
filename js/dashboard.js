const DASHBOARD_KEY = "dashboardUnlocked";
const DATA_KEY = "siteDataOverride";
const PASSPHRASE = "arad-dashboard";

/* Access control */
function checkDashboardAccess() {
  if (sessionStorage.getItem(DASHBOARD_KEY)) return true;

  const input = prompt("Enter dashboard passphrase:");
  if (input === PASSPHRASE) {
    sessionStorage.setItem(DASHBOARD_KEY, "true");
    return true;
  }

  alert("Access denied.");
  window.location.href = "index.html";
  return false;
}

/* Save override data */
function saveOverrideData(newData) {
  const existingRaw = localStorage.getItem(DATA_KEY);
  const existing = existingRaw ? JSON.parse(existingRaw) : {};

  const merged = {
    profile: {
      ...existing.profile,
      ...newData.profile,
    },
    academics: {
      ...existing.academics,
      ...newData.academics,
    },
    experiences: newData.experiences || existing.experiences,
  };

  localStorage.setItem(DATA_KEY, JSON.stringify(merged));
}

document.addEventListener("DOMContentLoaded", () => {
  if (!checkDashboardAccess()) return;

  /* Inputs */
  const introInput = document.getElementById("intro-input");
  const gpaInput = document.getElementById("gpa-input");
  const saveBtn = document.getElementById("save-btn");

  const expCategory = document.getElementById("exp-category");
  const expTitle = document.getElementById("exp-title");
  const expOrg = document.getElementById("exp-org");
  const expPeriod = document.getElementById("exp-period");
  const expDesc = document.getElementById("exp-desc");
  const addExpBtn = document.getElementById("add-exp-btn");
  const expList = document.getElementById("exp-list");

  /* Render experiences */
  function renderExperienceList() {
    expList.innerHTML = "";

    siteData.experiences.forEach((exp, index) => {
      const div = document.createElement("div");
      div.className = "exp-item";

      div.innerHTML = `
        <span><strong>${exp.title}</strong> · ${exp.organization}</span>
        <button data-index="${index}">Remove</button>
      `;

      div.querySelector("button").addEventListener("click", () => {
        siteData.experiences.splice(index, 1);

        saveOverrideData({
          profile: siteData.profile,
          academics: siteData.academics,
          experiences: siteData.experiences,
        });

        renderExperienceList();
      });

      expList.appendChild(div);
    });
  }

  /* Add experience */
  addExpBtn.addEventListener("click", () => {
    if (!expTitle.value || !expOrg.value) return;

    siteData.experiences.unshift({
      category: expCategory.value,
      title: expTitle.value,
      organization: expOrg.value,
      period: expPeriod.value,
      description: expDesc.value,
      tags: [expCategory.value],
    });

    saveOverrideData({
      profile: siteData.profile,
      academics: siteData.academics,
      experiences: siteData.experiences,
    });

    expTitle.value = "";
    expOrg.value = "";
    expPeriod.value = "";
    expDesc.value = "";

    renderExperienceList();
  });

  /* Initial render */
  renderExperienceList();

  /* Load current values */
  introInput.value = siteData.profile.intro;
  gpaInput.value = siteData.academics.gpa;

  /* Save profile */
  saveBtn.addEventListener("click", () => {
    const updated = {
      profile: {
        ...siteData.profile,
        intro: introInput.value,
      },
      academics: {
        ...siteData.academics,
        gpa: parseFloat(gpaInput.value),
      },
    };

    saveOverrideData(updated);
    alert("Saved. Refresh the site to see changes.");
  });
});
