const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  document.documentElement.style.setProperty("--bg", tg.themeParams?.bg_color || "#0b1220");
}

const courses = [
  "Communicative English 1","Geography","Psychology",
  "Logic and Critical Thinking","Physical Fitness","General Physics",
  "Economics","Mathematics for Natural Science","Mathematics for Social Science"
];

const courseList = document.getElementById("courseList");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

courses.forEach((name, i) => {
  const row = document.createElement("div");
  row.className = "course";
  row.innerHTML = `<span class="num">${i + 1}</span><strong>${name}</strong>`;
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = "Open";
  btn.addEventListener("click", () => showModal(name));
  row.appendChild(btn);
  courseList.appendChild(row);
});

function showModal(title) {
  modalContent.innerHTML = `
    <span class="badge">📚 COURSE</span>
    <h2>${title}</h2>
    <p class="muted">Your course area is ready. Add your real PDFs, quizzes, worksheets and videos here when the backend/content system is connected.</p>
    <ul>
      <li>📄 Short notes</li>
      <li>📝 Practice quizzes</li>
      <li>🎯 Worksheets & exam preparation</li>
      <li>▶️ Short tutorial videos</li>
    </ul>`;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden","false");
}

function showSection(page) {
  const titles = {
    courses:["📚 Courses","Browse your freshman subjects."],
    materials:["📄 Materials","Lecture PDFs, short notes and worksheets will appear here."],
    quizzes:["📝 Quizzes","Practice quizzes will appear here."],
    exams:["🎯 Past Exams","Past mid/final exam resources will appear here."],
    updates:["📢 Academic Updates","Important academic announcements will appear here."],
    support:["💬 Support","Need help? Contact Golden WCU through the bot."]
  };
  const [title, text] = titles[page] || ["Golden WCU","Welcome!"];
  modalContent.innerHTML = `<span class="badge">GOLDEN WCU</span><h2>${title}</h2><p class="muted">${text}</p>`;
  if (page === "support") {
    const a = document.createElement("button");
    a.className = "primary";
    a.textContent = "Open Golden WCU Bot";
    a.type = "button";
    a.addEventListener("click", () => {
      if (tg?.openTelegramLink) tg.openTelegramLink("https://t.me/GoldenWCUFreshmanBot");
      else window.open("https://t.me/GoldenWCUFreshmanBot","_blank");
    });
    modalContent.appendChild(a);
  }
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden","false");
}

document.querySelectorAll("[data-page]").forEach(btn => {
  btn.addEventListener("click", () => showSection(btn.dataset.page));
});

document.getElementById("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden","true");
}

document.getElementById("joinBtn").addEventListener("click", () => {
  if (tg?.openTelegramLink) tg.openTelegramLink("https://t.me/GoldenWCUFreshmanBot");
  else window.open("https://t.me/GoldenWCUFreshmanBot","_blank");
});

const user = tg?.initDataUnsafe?.user;
if (user) {
  document.getElementById("userBox").textContent =
    `Hi, ${user.first_name || "Student"} 👋`;
}
