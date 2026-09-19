[9/20/2026 1:51 AM] 𝐒𝐢𝐬𝐚𝐲 𝐓𝐚𝐦𝐢𝐫𝐚𝐭: const tg=window.Telegram?.WebApp;
if(tg){tg.ready();tg.expand();}

const app=document.getElementById('app');
const modal=document.getElementById('modal');
const modalBody=document.getElementById('modalBody');

const esc=s=>String(s).replace(/[&<>"']/g,m=>({
  '&':'&amp;',
  '<':'&lt;',
  '>':'&gt;',
  '"':'&quot;',
  "'":'&#39;'
}[m]));

function go(view){
  history.replaceState({},'',#${view});
  render(view);
  document.querySelectorAll('.bottom-nav button').forEach(b=>{
    b.classList.toggle('active',b.dataset.view===view);
  });
}

function render(view){
  if(view==='courses') return courses();
  if(view==='physics') return physics();
  if(view==='materials') return materials();
  if(view==='quizzes') return quizzes();
  if(view==='exams') return exams();
  if(view==='updates') return updates();
  if(view==='support') return support();
  if(view==='more') return more();
  home();
}

function home(){
  app.innerHTML=
    <div class="hero">
      <div class="eyebrow">🎓 GOLDEN WCU FRESHMAN HUB</div>
      <h1>Learn Smart. Practice More. Prepare Early.</h1>
      <p class="muted">
        One place for courses, study materials, quizzes, worksheets,
        and Wachemo University exams.
      </p>
    </div>

    <div class="welcome">
      <span class="badge">✨ Welcome to Golden WCU</span>
      <h2 id="welcomeName">Freshman Academic Dashboard</h2>
      <p class="muted">
        Organized for Wachemo University freshman students.
        More resources can be added later without changing the bot.
      </p>

      <div class="actions">
        <button class="primary" data-view="courses">Explore Courses</button>
        <button class="secondary" data-view="physics">Open Physics Hub</button>
      </div>
    </div>

    <section>
      <div class="section-title">
        <h2>Quick Access</h2>
        <span class="pill">2026</span>
      </div>

      <div class="grid">
        ${[
          ['📚','Courses','Freshman subjects','courses'],
          ['📄','Materials','PDFs, PPTX & worksheets','materials'],
          ['📝','Quiz Center','Practice & instant feedback','quizzes'],
          ['🎯','Wachemo Exams','WCU past exams','exams'],
          ['📢','Updates','Academic announcements','updates'],
          ['💬','Support','Golden WCU help','support']
        ].map(x=>
          <button class="card" data-view="${x[3]}">
            <span class="icon">${x[0]}</span>
            <strong>${x[1]}</strong>
            <small>${x[2]}</small>
          </button>
        ).join('')}
      </div>
    </section>

    <section>
      <div class="section-title">
        <h2>Progress</h2>
        <span class="pill">Chapter 1 → 7</span>
      </div>

      <div class="feature">
        <div class="progressbar"><i></i></div>
        <p>
          Architecture is ready for chapter-by-chapter progress tracking,
          wrong-answer review, difficulty levels, and Daily Golden Challenge.
        </p>
      </div>
    </section>

    <div class="premium">
      <span class="badge">⭐ PREMIUM</span>
      <h2>Golden WCU Premium Tutorial</h2>
      <p class="muted">
        Structured freshman resources: tutorials, lecture materials,
        practice, exams, worksheets and academic support.
      </p>
      <button class="primary" id="premiumBtn">
        Open Golden WCU Bot
      </button>
    </div>
  ;

  bindViewButtons();

  document.getElementById('premiumBtn').onclick=()=>{
    tg?.openTelegramLink
      ? tg.openTelegramLink('https://t.me/GoldenWCUFreshmanBot')
      : window.open('https://t.me/GoldenWCUFreshmanBot','_blank');
  };

  if(tg?.initDataUnsafe?.user){
    document.getElementById('welcomeName').textContent=
      Welcome, ${esc(tg.initDataUnsafe.user.first_name||'Student')} 👋;
  }
}

function courses(){
  app.innerHTML=`
    <div class="hero">
      <div class="eyebrow">📚 ACADEMIC COURSES</div>
      <h1>Freshman Courses</h1>
      <p class="muted">
        First-semester and second-semester course menu.
      </p>
    </div>
[9/20/2026 1:51 AM] 𝐒𝐢𝐬𝐚𝐲 𝐓𝐚𝐦𝐢𝐫𝐚𝐭: <section>
      <div class="section-title">
        <h2>1st Semester</h2>
        <span class="pill">Natural Science</span>
      </div>

      <div class="course-grid">
        ${GOLDEN_DATA.courses1.map((c,i)=>
          <div class="course" data-course="${esc(c)}">
            <b>${i+1}. ${esc(c)}</b>
            <span>Learn • Practice • Test</span>
          </div>
        ).join('')}
      </div>
    </section>

    <section>
      <div class="section-title">
        <h2>2nd Semester</h2>
        <span class="pill">Freshman</span>
      </div>

      <div class="course-grid">
        ${GOLDEN_DATA.courses2.map((c,i)=>
          <div class="course" data-course="${esc(c)}">
            <b>${i+1}. ${esc(c)}</b>
            <span>Learn • Practice • Test</span>
          </div>
        ).join('')}
      </div>
    </section>
  ;

  document.querySelectorAll('[data-course]').forEach(el=>{
    el.onclick=()=>openCourse(el.dataset.course);
  });
}

function openCourse(c){
  openModal(
    <h2>${esc(c)}</h2>
    <p class="muted">Golden WCU learning structure</p>

    <div class="feature">
      <h3>📖 Learn</h3>
      <p>
        Short notes, important concepts, examples and key points.
      </p>
    </div>

    <div class="feature">
      <h3>📝 Practice</h3>
      <p>
        Interactive quizzes, calculations, common mistakes and worksheets.
      </p>
    </div>

    <div class="feature">
      <h3>🎯 Test</h3>
      <p>
        Mock exams, final score and wrong-answer review.
      </p>
    </div>

    <div class="note">
      More course-specific content will be added to this menu
      as materials are collected.
    </div>
  );
}

function physics(){
  app.innerHTML=
    <div class="hero">
      <div class="eyebrow">⚛️ GENERAL PHYSICS • PHYS 1011</div>
      <h1>Physics Hub</h1>
      <p class="muted">
        Chapters, study workflow, critical practice and Wachemo exam resources.
      </p>
    </div>

    <section>
      <div class="feature">
        <h3>🔥 GOLDEN STUDY SYSTEM</h3>
        <p>
          <b>Learn → Practice → Test</b><br>
          Use short notes and formulas first, practice calculations next,
          then test yourself with mock exams.
        </p>

        <div class="chips">
          <span class="chip">🟢 Basic</span>
          <span class="chip">🟡 Intermediate</span>
          <span class="chip">🔴 Challenge</span>
          <span class="chip">❌ Wrong-answer Review</span>
        </div>
      </div>
    </section>

    <section>
      <div class="section-title">
        <h2>Chapters 1–7</h2>
        <span class="pill">Official module structure</span>
      </div>

      <div class="list">
        ${GOLDEN_DATA.physicsChapters.map(ch=>
          <button class="list-card" data-chapter="${ch.n}">
            <div class="ico">
              ${['📏','🚀','💧','🌡️','〰️','⚡','🌍'][ch.n-1]}
            </div>

            <div>
              <h3>
                Chapter ${ch.n} — ${esc(ch.title)}
              </h3>

              <p>
                ${ch.topics.slice(0,4).map(esc).join(' • ')}
                ${ch.topics.length>4?' • …':''}
              </p>
            </div>
          </button>
        ).join('')}
      </div>
    </section>

    <section>
      <div class="section-title">
        <h2>Critical Practice</h2>
        <span class="pill">5 questions</span>
      </div>

      <button class="list-card" id="criticalBtn">
        <div class="ico">🧠</div>
        <div>
          <h3>Fluid Mechanics Critical Questions</h3>
          <p>
            Floating, buoyancy, continuity and calculation practice.
          </p>
        </div>
      </button>
    </section>
  ;

  document.querySelectorAll('[data-chapter]').forEach(b=>{
    b.onclick=()=>chapter(+b.dataset.chapter);
  });

  document.getElementById('criticalBtn').onclick=()=>{
    startQuiz('critical');
  };
}

function chapter(n){
  const ch=GOLDEN_DATA.physicsChapters[n-1];

  openModal(
    <h2>Chapter ${n}: ${esc(ch.title)}</h2>
[9/20/2026 1:51 AM] 𝐒𝐢𝐬𝐚𝐲 𝐓𝐚𝐦𝐢𝐫𝐚𝐭: <div class="note">
      🧠 <b>Golden Tip:</b>
      Don't memorize formulas only. Understand what each variable means
      and when the relation applies.
    </div>

    <h3>Focus Topics</h3>

    <div class="chips">
      ${ch.topics.map(t=>
        <span class="chip">${esc(t)}</span>
      ).join('')}
    </div>

    <div class="actions">
      <button class="primary"
        onclick="go('materials');closeModal()">
        Open Materials
      </button>

      <button class="secondary"
        onclick="go('quizzes');closeModal()">
        Quiz Center
      </button>
    </div>
  );
}

function materials(){

  /*
    IMPORTANT:
    Only Wachemo/normal Golden resources are shown here.
    Resources belonging to "Different Universities" and
    "Exam Collections" are intentionally hidden.
  */

  const visibleResources=GOLDEN_DATA.resources.filter(r=>{
    const group=String(r.group||'').toLowerCase();

    return !group.includes('different') &&
           !group.includes('exam collections');
  });

  const groups=[
    ...new Set(visibleResources.map(r=>r.group))
  ];

  app.innerHTML=
    <div class="hero">
      <div class="eyebrow">📄 RESOURCE LIBRARY</div>
      <h1>Materials</h1>
      <p class="muted">
        Golden WCU study materials and Wachemo University resources.
      </p>
    </div>

    ${groups.map(g=>
      <section>
        <div class="section-title">
          <h2>${esc(g)}</h2>
        </div>

        <div class="list">
          ${visibleResources
            .filter(r=>r.group===g)
            .map(resourceCard)
            .join('')}
        </div>
      </section>
    ).join('')}

    <section>
      <div class="feature">
        <h3>🔒 Premium safety note</h3>
        <p>
          GitHub Pages is public. Do not place paid/protected files there
          if you need real access control. For protected premium content,
          use a backend that validates Telegram initData and serves
          protected resources.
        </p>
      </div>
    </section>
  ;

  document.querySelectorAll('[data-pdf]').forEach(b=>{
    b.onclick=()=>{
      openPDF(b.dataset.pdf,b.dataset.title||'PDF Material');
    };
  });
}

function quizzes(){
  app.innerHTML=
    <div class="hero">
      <div class="eyebrow">📝 QUIZ CENTER</div>
      <h1>Practice & Test</h1>
      <p class="muted">
        Instant feedback now; the architecture is ready for larger
        question banks.
      </p>
    </div>

    <section>

      <button class="list-card" id="q1">
        <div class="ico">📏</div>
        <div>
          <h3>Chapter 1 — Preliminaries</h3>
          <p>
            10-question interactive starter set covering measurement,
            SI units, uncertainty, significant figures and vectors.
          </p>
        </div>
      </button>

      <button class="list-card" id="q3">
        <div class="ico">💧</div>
        <div>
          <h3>Chapter 3 — Critical Practice</h3>
          <p>
            5 calculation/concept questions from the fluid-mechanics
            practice set.
          </p>
        </div>
      </button>

      <div class="feature">
        <h3>🎯 Planned quiz structure</h3>
        <p>
          25/50-question mock tests • timed tests • score •
          wrong-answer review • similar question •
          Basic/Intermediate/Challenge.
        </p>
      </div>

    </section>
  ;

  document.getElementById('q1').onclick=()=>{
    startQuiz('quiz');
  };

  document.getElementById('q3').onclick=()=>{
    startQuiz('critical');
  };
}

function startQuiz(kind){
  const qs=GOLDEN_DATA[kind];

  let i=0;
  let score=0;

  openModal(<div id="quizBox"></div>);

  function draw(){

    const q=qs[i];

    document.getElementById('quizBox').innerHTML=
      <div class="eyebrow">
        QUESTION ${i+1} / ${qs.length}
      </div>

      <h2>${esc(q.q)}</h2>

      ${q.o.map((o,j)=>
        <button class="quiz-option" data-i="${j}">
          ${String.fromCharCode(65+j)}. ${esc(o)}
        </button>
      ).join('')}
[9/20/2026 1:51 AM] 𝐒𝐢𝐬𝐚𝐲 𝐓𝐚𝐦𝐢𝐫𝐚𝐭: <div class="actions">
        <button class="primary" id="submitQ">
          Submit Answer
        </button>
      </div>

      <div id="feedback"></div>
    ;

    let selected=null;

    document.querySelectorAll('.quiz-option').forEach(b=>{
      b.onclick=()=>{
        selected=+b.dataset.i;

        document.querySelectorAll('.quiz-option')
          .forEach(x=>x.classList.remove('selected'));

        b.classList.add('selected');
      };
    });

    document.getElementById('submitQ').onclick=()=>{

      if(selected===null)return;

      const ok=selected===q.a;

      if(ok)score++;

      document.getElementById('feedback').innerHTML=
        <div class="quiz-result">

          <b class="${ok?'correct':'wrong'}">
            ${ok?'✅ Correct!':'❌ Not quite.'}
          </b>

          <p>${esc(q.e)}</p>

          <button class="secondary" id="nextQ">
            ${i===qs.length-1?'Finish':'Next Question →'}
          </button>

        </div>
      ;

      document.getElementById('submitQ').disabled=true;

      document.getElementById('nextQ').onclick=()=>{

        if(i===qs.length-1){

          document.getElementById('quizBox').innerHTML=
            <div class="eyebrow">RESULT</div>

            <h2>🎉 ${score} / ${qs.length}</h2>

            <p class="muted">
              Review missed questions and repeat the set to improve.
            </p>

            <button class="primary" id="again">
              Try Again
            </button>
          ;

          document.getElementById('again').onclick=()=>{
            i=0;
            score=0;
            draw();
          };

        }else{
          i++;
          draw();
        }
      };
    };
  }

  draw();
}

function exams(){

  /*
    WACHEMO UNIVERSITY EXAMS ONLY.
    Different-university exams and external exam collections
    are NOT displayed in this Mini App.
  */

  const wcu=GOLDEN_DATA.resources.filter(r=>{
    const group=String(r.group||'').toLowerCase();

    return group.includes('wachemo') &&
           !group.includes('different');
  });

  app.innerHTML=
    <div class="hero">
      <div class="eyebrow">🎯 WACHEMO UNIVERSITY</div>
      <h1>Wachemo Exam Library</h1>

      <p class="muted">
        Past examination resources from Wachemo University.
      </p>
    </div>

    <section>

      <div class="section-title">
        <h2>Wachemo University Exams</h2>
        <span class="pill">WCU Only</span>
      </div>

      <div class="list">
        ${
          wcu.length
            ? wcu.map(resourceCard).join('')
            : 
              <div class="feature">
                <h3>📚 No Wachemo exams found</h3>
                <p>
                  Wachemo University exam resources can be added
                  to the Golden data file.
                </p>
              </div>
            
        }
      </div>

    </section>

    <section>
      <div class="feature">
        <h3>📌 Golden WCU Rule</h3>
        <p>
          Wachemo University exams are kept separate from
          exams collected from other universities.
        </p>
      </div>
    </section>
  ;

  document.querySelectorAll('[data-pdf]').forEach(b=>{
    b.onclick=()=>{
      openPDF(
        b.dataset.pdf,
        b.dataset.title||'Wachemo University Exam'
      );
    };
  });
}

function resourceCard(r){

  return 
    <button
      class="list-card"
      data-pdf="${encodeURI(r.file)}"
      data-title="${esc(r.name)}"
      type="button"
    >

      <div class="ico">🎯</div>

      <div>
        <h3>${esc(r.name)}</h3>

        <p>
          ${esc(r.note||'Wachemo University exam resource')}
        </p>

        <div class="resource-meta">
          ${esc(r.type||'PDF')}
        </div>
      </div>

    </button>
  ;
}

function openPDF(file,title){

  const safeFile=encodeURI(file);

  openModal(
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px;">
      <h2 style="margin:0;">
        ${esc(title)}
      </h2>
[9/20/2026 1:51 AM] 𝐒𝐢𝐬𝐚𝐲 𝐓𝐚𝐦𝐢𝐫𝐚𝐭: <button
        class="secondary"
        onclick="closeModal()"
        type="button"
      >
        ✕
      </button>
    </div>

    <div
      style="
        width:100%;
        height:70vh;
        min-height:420px;
        border-radius:12px;
        overflow:hidden;
        background:#f5f5f5;
      "
    >

      <iframe
        src="${safeFile}"
        title="${esc(title)}"
        style="
          width:100%;
          height:100%;
          border:0;
          display:block;
          background:white;
        "
      ></iframe>

    </div>

    <div class="note" style="margin-top:12px;">
      📄 If your Telegram browser does not display the PDF,
      use the browser's PDF viewer to open it.
    </div>
  );
}

function updates(){

  app.innerHTML=
    <div class="hero">
      <div class="eyebrow">📢 GOLDEN WCU</div>
      <h1>Updates</h1>

      <p class="muted">
        A dedicated space for academic announcements
        and new resources.
      </p>
    </div>

    <section>

      <div class="feature">
        <h3>🔄 Easy future updates</h3>

        <p>
          New exams, worksheets, quizzes, chapter notes,
          tutorial videos and announcements can be added later.
          The menu is data-driven so the structure does not need
          to be rebuilt from scratch each time.
        </p>
      </div>

      <div class="feature">
        <h3>🧹 Resource organization</h3>

        <p>
          Wachemo University resources are kept separate from
          resources belonging to other universities.
        </p>
      </div>

    </section>
  ;
}

function support(){

  app.innerHTML=
    <div class="hero">
      <div class="eyebrow">💬 SUPPORT</div>
      <h1>Golden WCU Support</h1>

      <p class="muted">
        Need the bot, tutorial or a resource?
      </p>
    </div>

    <section>

      <div class="feature">
        <h3>🤖 Golden WCU Freshman Tutorial Bot</h3>

        <p>
          Use the Telegram bot for the premium tutorial workflow.
        </p>

        <button class="primary" id="botBtn">
          Open Telegram Bot
        </button>
      </div>

      <div class="feature">
        <h3>▶️ Golden Academy</h3>

        <p>
          YouTube: @GoldenAcademyCenter
        </p>

        <button class="secondary" id="ytBtn">
          Open YouTube
        </button>
      </div>

    </section>
  ;

  document.getElementById('botBtn').onclick=()=>{
    window.open(
      'https://t.me/GoldenWCUFreshmanBot',
      '_blank'
    );
  };

  document.getElementById('ytBtn').onclick=()=>{
    window.open(
      'https://youtube.com/@GoldenAcademyCenter',
      '_blank'
    );
  };
}

function more(){

  app.innerHTML=
    <div class="hero">
      <div class="eyebrow">☰ MORE</div>
      <h1>Golden WCU Menu</h1>
    </div>

    <section>

      <div class="list">

        ${[
          ['📚','Courses','courses'],
          ['⚛️','General Physics','physics'],
          ['📄','Materials','materials'],
          ['📝','Quiz Center','quizzes'],
          ['🎯','Wachemo Exams','exams'],
          ['📢','Updates','updates'],
          ['💬','Support','support']
        ].map(x=>
          <button
            class="list-card"
            data-view="${x[2]}"
          >

            <div class="ico">${x[0]}</div>

            <div>
              <h3>${x[1]}</h3>
              <p>Open section</p>
            </div>

          </button>
        ).join('')}

      </div>

    </section>
  `;

  bindViewButtons();
}

function bindViewButtons(){

  document.querySelectorAll('[data-view]').forEach(b=>{
    b.onclick=()=>{
      go(b.dataset.view);
    };
  });
}

function openModal(html){
  modalBody.innerHTML=html;
  modal.classList.remove('hidden');
}

function closeModal(){
  modal.classList.add('hidden');
}

document.getElementById('closeModal').onclick=closeModal;

modal.onclick=e=>{
  if(e.target===modal)closeModal();
};

document.getElementById('menuBtn').onclick=()=>{
  document.getElementById('drawer').classList.remove('hidden');
};
[9/20/2026 1:51 AM] 𝐒𝐢𝐬𝐚𝐲 𝐓𝐚𝐦𝐢𝐫𝐚𝐭: document.getElementById('closeDrawer').onclick=()=>{
  document.getElementById('drawer').classList.add('hidden');
};

document.getElementById('homeBtn').onclick=()=>{
  go('home');
};

document.querySelectorAll('#bottomNav button').forEach(b=>{
  b.onclick=()=>{
    go(b.dataset.view);
  };
});

document.querySelectorAll('#drawer [data-view]').forEach(b=>{
  b.onclick=()=>{
    document.getElementById('drawer').classList.add('hidden');
    go(b.dataset.view);
  };
});

window.closeModal=closeModal;
window.openPDF=openPDF;

const initial=location.hash.slice(1)||'home';
go(initial);
