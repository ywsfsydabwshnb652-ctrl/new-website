/* ============ البيانات ============ */
const WAR_DATE = new Date("1973-10-06T14:05:00+02:00");

const photos = [
  { src: "alkawarb.jpeg", cap: "عبور قناة السويس بالقوارب المطاطية" },
  { src: "rafa alalam.jpeg", cap: "الجنود يرفعون العلم المصري على الضفة الشرقية" },
  { src: "aktham.jpeg", cap: "اقتحام خط بارليف" },
  { src: "obor alknah.jpeg", cap: "الكوبري العائم على القناة" },
  { src: "aldababat.jpeg", cap: "الدبابات المصرية في سيناء" },
  { src: "alsadat.jpeg", cap: "الرئيس السادات مع قادة الحرب" }
];

const videos = [
  { type: "youtube", id: "", title: "فيلم وثائقي عن حرب أكتوبر", thumb: "images/v1.jpg" },
  { type: "youtube", id: "", title: "لقطات أرشيفية من العبور", thumb: "images/v2.jpg" },
  { type: "file", id: "videos/war1.mp4", title: "مقطع من أرض المعركة", thumb: "images/v3.jpg" }
];

const days = [
  { tab: "6 أكتوبر", title: "يوم العبور", points: [
    "الساعة 2:05 ظهرًا: نحو 200 طائرة مصرية تنفذ الضربة الجوية الأولى على المطارات والرادارات ومراكز القيادة.",
    "بدء قصف مدفعي مكثف على خط بارليف، وعبور قوات الصاعقة والمشاة بالقوارب المطاطية.",
    "استخدام خراطيم المياه عالية الضغط لفتح ثغرات في الساتر الترابي.",
    "رفع العلم المصري على الضفة الشرقية، ونصب الكباري وتشغيل المعديات خلال ساعات.",
    "في نفس اليوم هاجمت القوات السورية في الجولان."
  ]},
  { tab: "7–9 أكتوبر", title: "تثبيت رؤوس الكباري", points: [
    "عبور آلاف الجنود والدبابات والمدفعية إلى سيناء.",
    "صدّ الهجمات الإسرائيلية المضادة، وتدمير أعداد كبيرة من الدبابات بالصواريخ المضادة للدبابات.",
    "بناء شبكة صواريخ دفاع جوي (سام) منعت الطيران الإسرائيلي من التحرك بحرية."
  ]},
  { tab: "14 أكتوبر", title: "معركة تطوير الهجوم", points: [
    "شنّت القوات المصرية هجومًا باتجاه المضايق في عمق سيناء.",
    "من أكبر معارك الدبابات في التاريخ الحديث.",
    "لم تحقق القوات هدفها بالكامل، لكن الجبهة استقرت وظلت المكاسب الأساسية على الضفة الشرقية."
  ]},
  { tab: "15–18 أكتوبر", title: "ثغرة الدفرسوار", points: [
    "عبرت قوة إسرائيلية إلى الضفة الغربية للقناة عند منطقة الدفرسوار.",
    "دارت معارك عنيفة حول الإسماعيلية والمزرعة الصينية، وأُوقف التقدم الإسرائيلي نحو المدن.",
    "ظلت الثغرة محاصرة داخل منطقة محدودة."
  ]},
  { tab: "22–24 أكتوبر", title: "وقف إطلاق النار", points: [
    "22 أكتوبر: مجلس الأمن يصدر القرار 338 بوقف إطلاق النار.",
    "حدثت خروقات واستمر القتال حتى 24 أكتوبر، وحاصرت القوات الإسرائيلية مدينة السويس دون دخولها.",
    "صمدت المقاومة الشعبية والجيش في السويس.",
    "بدأ بعد ذلك المسار السياسي للمفاوضات."
  ]}
];

const leaders = [
  { icon: "", name: "الرئيس أنور السادات", role: "القائد الأعلى وصاحب قرار الحرب" },
  { icon: "", name: "المشير أحمد إسماعيل علي", role: "وزير الحربية والقائد العام" },
  { icon: "", name: "الفريق سعد الدين الشاذلي", role: "رئيس أركان حرب القوات المسلحة" },
  { icon: "", name: "اللواء عبد الغني الجمسي", role: "رئيس هيئة العمليات" },
  { icon: "", name: "الفريق حسني مبارك", role: "قائد القوات الجوية" }
];

const results = [
  "كسر نظرية الأمن الإسرائيلي وتحطيم أسطورة خط بارليف.",
  "استخدام النفط كسلاح سياسي من الدول العربية خلال الحرب.",
  "اتفاقيتا فض الاشتباك الأولى والثانية عامي 1974 و1975.",
  "معاهدة السلام المصرية الإسرائيلية عام 1979.",
  "25 أبريل 1982: عودة سيناء بالكامل ما عدا طابا.",
  "19 مارس 1989: عودة طابا بعد التحكيم الدولي."
];

const places = [
  { name: "القنطرة", x: 170, y: 135, side: "l", date: "6 أكتوبر",
    text: "من مناطق العبور في الشمال، عبرت منها قوات الجيش الثاني الميداني ضمن الموجات الأولى على امتداد القناة." },
  { name: "خط بارليف", x: 186, y: 175, side: "r", date: "6 أكتوبر",
    text: "سلسلة حصون وساتر ترابي على الضفة الشرقية. فُتحت فيه ثغرات بخراطيم المياه واقتُحمت حصونه في ساعات." },
  { name: "الإسماعيلية", x: 170, y: 215, side: "l", date: "6–24 أكتوبر",
    text: "مقر قيادة الجيش الثاني الميداني. دارت حولها معارك عنيفة أثناء محاولة الالتفاف الإسرائيلي ولم تسقط المدينة." },
  { name: "المزرعة الصينية", x: 206, y: 252, side: "r", date: "15–17 أكتوبر",
    text: "موقع معارك ضارية شرق القناة بالقرب من الإسماعيلية، من أعنف المعارك خلال محاولات الثغرة." },
  { name: "الدفرسوار", x: 170, y: 285, side: "l", date: "15–18 أكتوبر",
    text: "منطقة الثغرة، عبرت منها قوة إسرائيلية إلى الضفة الغربية في الفاصل بين الجيشين الثاني والثالث." },
  { name: "ممرات متلا والجدي", x: 330, y: 400, side: "r", date: "14 أكتوبر",
    text: "هدف تطوير الهجوم نحو الممرات الجبلية في عمق سيناء، وفيها دارت معركة دبابات كبيرة." },
  { name: "السويس", x: 170, y: 470, side: "l", date: "22–24 أكتوبر",
    text: "حوصرت المدينة من القوات الإسرائيلية بعد وقف إطلاق النار الأول، وصمدت المقاومة الشعبية مع الجيش ولم تدخلها القوات." },
  { name: "طابا", x: 522, y: 470, side: "l", date: "19 مارس 1989",
    text: "آخر نقطة عادت إلى مصر بعد التحكيم الدولي، لتكتمل بذلك استعادة كامل أرض سيناء." }
];

// lv: 1 سهل (10 نقاط) | 2 متوسط (20) | 3 صعب (30) — c: رقم الإجابة الصحيحة (يبدأ من 0)
const quiz = [
  { lv: 1, q: "في أي عام وقعت حرب أكتوبر؟", a: ["1967", "1973", "1982", "1956"], c: 1,
    info: "بدأت الحرب في 6 أكتوبر 1973." },
  { lv: 1, q: "في أي يوم من أكتوبر بدأت الحرب؟", a: ["الثالث", "السادس", "العاشر", "الرابع عشر"], c: 1,
    info: "بدأت يوم السبت 6 أكتوبر، الموافق 10 رمضان." },
  { lv: 1, q: "ما اسم القناة التي عبرها الجيش المصري؟", a: ["قناة السويس", "قناة بنما", "ترعة الإسماعيلية", "قناة كييل"], c: 0,
    info: "عبرت القوات المصرية قناة السويس من الغرب إلى الشرق." },
  { lv: 1, q: "ما اسم الساتر الذي اقتحمه الجيش المصري؟", a: ["خط بارليف", "خط ماجينو", "خط سيجفريد", "خط ماجي"], c: 0,
    info: "خط بارليف: ساتر ترابي وحصون على الضفة الشرقية للقناة." },
  { lv: 1, q: "من كان رئيس مصر وقت الحرب؟", a: ["جمال عبد الناصر", "أنور السادات", "محمد نجيب", "حسني مبارك"], c: 1,
    info: "الرئيس أنور السادات كان القائد الأعلى وصاحب قرار الحرب." },

  { lv: 2, q: "في أي ساعة تقريبًا بدأت الضربة الجوية الأولى؟", a: ["6:00 صباحًا", "2:05 ظهرًا", "5:30 مساءً", "12:00 منتصف الليل"], c: 1,
    info: "الضربة الجوية الأولى بدأت الساعة 2:05 ظهرًا." },
  { lv: 2, q: "ما الوسيلة التي استُخدمت لفتح ثغرات في الساتر الترابي؟", a: ["القنابل النووية", "خراطيم المياه عالية الضغط", "الألغام البحرية", "الجرافات فقط"], c: 1,
    info: "استُخدمت مضخات وخراطيم مياه عالية الضغط لتجريف الرمال وفتح الثغرات." },
  { lv: 2, q: "مع أي دولة نسّقت مصر الهجوم؟", a: ["العراق", "ليبيا", "سوريا", "الأردن"], c: 2,
    info: "هاجمت القوات السورية في الجولان في نفس اليوم." },
  { lv: 2, q: "ما رقم قرار مجلس الأمن الخاص بوقف إطلاق النار؟", a: ["242", "338", "425", "194"], c: 1,
    info: "القرار 338 صدر يوم 22 أكتوبر 1973." },
  { lv: 2, q: "متى عادت طابا إلى مصر؟", a: ["1979", "1982", "1989", "1995"], c: 2,
    info: "عادت طابا في 19 مارس 1989 بعد التحكيم الدولي." },

  { lv: 3, q: "من كان رئيس أركان حرب القوات المسلحة وقت الحرب؟", a: ["سعد الدين الشاذلي", "عبد الغني الجمسي", "أحمد إسماعيل علي", "محمد فوزي"], c: 0,
    info: "الفريق سعد الدين الشاذلي، بينما كان اللواء الجمسي رئيس هيئة العمليات." },
  { lv: 3, q: "ما الاسم الرمزي للعملية العسكرية المصرية؟", a: ["صلاح الدين", "بدر", "خالد بن الوليد", "النصر"], c: 1,
    info: "العملية سُمّيت «بدر» تيمنًا بغزوة بدر التي وقعت في رمضان." },
  { lv: 3, q: "من أي منطقة عبرت القوة الإسرائيلية إلى الضفة الغربية للقناة؟", a: ["القنطرة", "بورسعيد", "الدفرسوار", "الشلوفة"], c: 2,
    info: "عبرت عند الدفرسوار، وهي «الثغرة» بين الجيشين الثاني والثالث." },
  { lv: 3, q: "متى وُقّعت اتفاقية فض الاشتباك الأولى؟", a: ["يناير 1974", "أكتوبر 1973", "سبتمبر 1975", "مارس 1979"], c: 0,
    info: "وُقّعت في يناير 1974، والثانية في سبتمبر 1975." },
  { lv: 3, q: "في أي تاريخ عادت سيناء إلى مصر (ما عدا طابا)؟", a: ["6 أكتوبر 1979", "25 أبريل 1982", "19 مارس 1989", "26 مارس 1979"], c: 1,
    info: "25 أبريل 1982 هو عيد تحرير سيناء." }
];

const LEVELS = {
  1: { name: "سهل", pts: 10, cls: "lv1" },
  2: { name: "متوسط", pts: 20, cls: "lv2" },
  3: { name: "صعب", pts: 30, cls: "lv3" }
};

/* ============ أدوات صغيرة ============ */
const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];
const pad = n => String(n).padStart(2, "0");

/* ============ عدّاد سنين الانتصار ============ */
function updateSince() {
  const now = new Date();
  let years = now.getFullYear() - WAR_DATE.getFullYear();
  const anniv = new Date(WAR_DATE); anniv.setFullYear(WAR_DATE.getFullYear() + years);
  if (now < anniv) years--;
  const last = new Date(WAR_DATE); last.setFullYear(WAR_DATE.getFullYear() + years);
  let diff = Math.floor((now - last) / 1000);
  const d = Math.floor(diff / 86400); diff %= 86400;
  const h = Math.floor(diff / 3600); diff %= 3600;
  const m = Math.floor(diff / 60), s = diff % 60;
  $("#sYears").textContent = years;
  $("#sDays").textContent = d;
  $("#sHours").textContent = pad(h);
  $("#sMins").textContent = pad(m);
  $("#sSecs").textContent = pad(s);
  $("#yearsText").textContent = years;
}
updateSince(); setInterval(updateSince, 1000);

/* ============ التابات (الأحداث) ============ */
function renderTabs() {
  const tabs = $("#tabs"), box = $("#tabContent");
  function show(i) {
    const d = days[i];
    box.innerHTML = `<h3>${d.title}</h3><ul>${d.points.map(p => `<li>${p}</li>`).join("")}</ul>`;
    box.style.animation = "none"; box.offsetHeight; box.style.animation = "";
  }
  days.forEach((d, i) => {
    const b = document.createElement("button");
    b.className = "tab" + (i === 0 ? " active" : "");
    b.textContent = d.tab;
    b.onclick = () => { $$(".tab").forEach(t => t.classList.remove("active")); b.classList.add("active"); show(i); };
    tabs.appendChild(b);
  });
  show(0);
}
renderTabs();

/* ============ الخريطة التفاعلية ============ */
(function renderMap() {
  const svg = $("#warMap"), g = $("#pins"), info = $("#mapInfo");
  const NS = "http://www.w3.org/2000/svg";
  const FULL = { x: 0, y: 0, w: 600, h: 760 };
  let vb = { ...FULL }, anim = null;
  const pins = [];

  const applyVB = () => svg.setAttribute("viewBox", `${vb.x} ${vb.y} ${vb.w} ${vb.h}`);
  function target(cx, cy, w) {
    w = Math.max(220, Math.min(FULL.w, w));
    const h = w * FULL.h / FULL.w;
    const x = Math.max(0, Math.min(FULL.w - w, cx - w / 2));
    const y = Math.max(0, Math.min(FULL.h - h, cy - h / 2));
    return { x, y, w, h };
  }
  function animateTo(t) {
    cancelAnimationFrame(anim);
    const s = { ...vb }, st = performance.now(), dur = 450;
    (function step(now) {
      const k = Math.min((now - st) / dur, 1), e = 1 - Math.pow(1 - k, 3);
      ["x", "y", "w", "h"].forEach(n => vb[n] = s[n] + (t[n] - s[n]) * e);
      applyVB();
      if (k < 1) anim = requestAnimationFrame(step);
    })(st);
  }
  function zoom(f) { animateTo(target(vb.x + vb.w / 2, vb.y + vb.h / 2, vb.w / f)); }
  $("#zoomIn").onclick = () => zoom(1.5);
  $("#zoomOut").onclick = () => zoom(1 / 1.5);
  $("#zoomReset").onclick = () => animateTo({ ...FULL });

  function select(i, focus) {
    i = (i + places.length) % places.length;
    const p = places[i];
    pins.forEach((el, k) => el.classList.toggle("active", k === i));
    info.innerHTML =
      `<span class="date">${p.date}</span>
       <h3>${p.name}</h3>
       <p>${p.text}</p>
       <div class="mp-nav">
         <button class="btn small" id="mpPrev">❯ السابق</button>
         <span>${i + 1} / ${places.length}</span>
         <button class="btn small" id="mpNext">التالي ❮</button>
       </div>`;
    $("#mpPrev").onclick = () => select(i - 1, true);
    $("#mpNext").onclick = () => select(i + 1, true);
    if (vb.w < FULL.w) animateTo(target(p.x, p.y, vb.w));
    else if (focus) animateTo(target(p.x, p.y, 380));
  }

  const mk = (tag, attrs) => {
    const el = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
  };
  places.forEach((p, i) => {
    const pin = mk("g", { class: "pin", tabindex: "0", role: "button", "aria-label": p.name });
    const left = p.side === "l";
    const label = mk("text", {
      class: "lbl", x: left ? p.x - 18 : p.x + 18, y: p.y + 5,
      "text-anchor": left ? "end" : "start"
    });
    label.textContent = p.name;
    const num = mk("text", { class: "num", x: p.x, y: p.y + 4 });
    num.textContent = i + 1;
    pin.append(
      mk("circle", { class: "pulse", cx: p.x, cy: p.y, r: 11 }),
      mk("circle", { class: "dot", cx: p.x, cy: p.y, r: 11 }),
      num, label
    );
    pin.addEventListener("click", () => select(i, false));
    pin.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(i, true); }
    });
    g.appendChild(pin);
    pins.push(pin);
  });
})();

/* ============ القادة والنتائج ============ */
$("#leadersBox").innerHTML = leaders.map(l =>
  `<article class="card"><div class="ico">${l.icon}</div><h3>${l.name}</h3><p>${l.role}</p></article>`).join("");
$("#resultsList").innerHTML = results.map(r => `<li>${r}</li>`).join("");

/* ============ معرض الصور + Lightbox ============ */
const fallback = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='#2b1f0a'/><text x='50%' y='50%' fill='#e3b04b' font-size='32' text-anchor='middle'>ضع الصورة هنا</text></svg>`);

$("#galleryGrid").innerHTML = photos.map((p, i) =>
  `<div class="item" data-i="${i}"><img src="${p.src}" alt="${p.cap}" loading="lazy" onerror="this.onerror=null;this.src='${fallback}'"><div class="cap">${p.cap}</div></div>`).join("");

let cur = 0;
const lb = $("#lightbox");
function openLB(i) {
  cur = (i + photos.length) % photos.length;
  const img = $("#lbImg");
  img.onerror = () => { img.onerror = null; img.src = fallback; };
  img.src = photos[cur].src;
  $("#lbCap").textContent = photos[cur].cap;
  lb.classList.add("open");
}
$$("#galleryGrid .item").forEach(el => el.onclick = () => openLB(+el.dataset.i));
$("#lbClose").onclick = () => lb.classList.remove("open");
$("#lbNext").onclick = () => openLB(cur + 1);
$("#lbPrev").onclick = () => openLB(cur - 1);
lb.onclick = e => { if (e.target === lb) lb.classList.remove("open"); };

/* ============ الفيديوهات ============ */
$("#videoGrid").innerHTML = videos.map((v, i) =>
  `<div class="item" data-v="${i}"><img src="${v.thumb}" alt="${v.title}" onerror="this.onerror=null;this.src='${fallback}'"><div class="cap">${v.title}</div></div>`).join("");

const vm = $("#videoModal");
$$("#videoGrid .item").forEach(el => el.onclick = () => {
  const v = videos[+el.dataset.v];
  if (!v.id) { alert("ضع رقم فيديو YouTube أو مسار الملف في script.js"); return; }
  $("#vmBody").innerHTML = v.type === "youtube"
    ? `<iframe src="https://www.youtube.com/embed/${v.id}?autoplay=1" allow="autoplay; fullscreen" allowfullscreen></iframe>`
    : `<video src="${v.id}" controls autoplay></video>`;
  vm.classList.add("open");
});
function closeVM() { vm.classList.remove("open"); $("#vmBody").innerHTML = ""; }
$("#vmClose").onclick = closeVM;
vm.onclick = e => { if (e.target === vm) closeVM(); };

/* ============ لوحة المفاتيح ============ */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { lb.classList.remove("open"); closeVM(); }
  if (lb.classList.contains("open")) {
    if (e.key === "ArrowLeft") openLB(cur + 1);
    if (e.key === "ArrowRight") openLB(cur - 1);
  }
});

/* ============ عدّادات الأرقام ============ */
function animateCount(el) {
  const to = +el.dataset.to, dur = 1800, start = performance.now();
  (function step(t) {
    const p = Math.min((t - start) / dur, 1);
    el.textContent = Math.floor(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  })(start);
}

/* ============ ظهور العناصر عند التمرير ============ */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("show");
    if (en.target.classList.contains("stat")) animateCount($(".count", en.target));
    io.unobserve(en.target);
  });
}, { threshold: .15 });
$$(".reveal, .stat").forEach(el => io.observe(el));

/* ============ التمرير: شريط التقدم + القائمة + زر الأعلى ============ */
const sections = $$("section[id], header[id]");
window.addEventListener("scroll", () => {
  const h = document.documentElement;
  $("#progress").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
  $("#navbar").classList.toggle("scrolled", h.scrollTop > 40);
  $("#toTop").classList.toggle("show", h.scrollTop > 500);
  let id = "home";
  sections.forEach(s => { if (h.scrollTop >= s.offsetTop - 160) id = s.id; });
  $$("#menu a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
});
$("#toTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

/* ============ قائمة الموبايل ============ */
$("#burger").onclick = () => $("#menu").classList.toggle("open");
$$("#menu a").forEach(a => a.onclick = () => $("#menu").classList.remove("open"));

/* ============ الوضع الفاتح / الداكن ============ */
try { if (localStorage.getItem("theme") === "light") document.body.classList.add("light"); } catch (e) {}
$("#themeBtn").onclick = () => {
  document.body.classList.toggle("light");
  try { localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark"); } catch (e) {}
};

/* ============ الاختبار ============ */
let qs = [], qi = 0, score = 0, streak = 0, bestStreak = 0, right = 0;

function startQuiz() {
  qs = quiz.map(q => {
    const opts = q.a.map((t, i) => ({ t, ok: i === q.c }));
    opts.sort(() => Math.random() - .5);
    return { ...q, opts };
  });
  qi = score = streak = bestStreak = right = 0;
  renderQuiz();
}

function rankOf(r) {
  const p = r / qs.length;
  if (p === 1) return { t: "بطل أكتوبر 🎖", d: "إجابات كاملة! أنت تعرف الحرب جيدًا." };
  if (p >= .75) return { t: "ضابط ممتاز ⭐", d: "مستواك عالي جدًا، قريب من الدرجة النهائية." };
  if (p >= .5) return { t: "مقاتل شجاع 🪖", d: "مستوى جيد، راجع قسم الأحداث وحاول مرة تانية." };
  return { t: "مجنّد جديد 📖", d: "اقرأ الأحداث والخريطة وجرّب تاني." };
}

function renderQuiz() {
  const box = $("#quizBox");

  if (qi >= qs.length) {
    const rk = rankOf(right);
    box.innerHTML = `
      <div class="q-result">
        <h3>${rk.t}</h3>
        <p>${rk.d}</p>
        <div class="q-stats">
          <div><b>${score}</b><small>النقاط</small></div>
          <div><b>${right}/${qs.length}</b><small>إجابات صحيحة</small></div>
          <div><b>${bestStreak}</b><small>أطول سلسلة</small></div>
        </div>
        <button class="btn" id="retry">إعادة الاختبار</button>
      </div>`;
    $("#retry").onclick = startQuiz;
    return;
  }

  const q = qs[qi], L = LEVELS[q.lv];
  box.innerHTML = `
    <div class="q-top">
      <span class="lv ${L.cls}">${L.name} • ${L.pts} نقطة</span>
      <span class="q-score">⭐ ${score}</span>
      <span class="q-streak ${streak >= 3 ? "on" : ""}">🔥 ${streak}</span>
    </div>
    <div class="q-bar"><i style="width:${(qi / qs.length) * 100}%"></i></div>
    <h3>${qi + 1}/${qs.length}) ${q.q}</h3>
    <div id="opts">${q.opts.map((o, i) => `<button class="opt" data-i="${i}">${o.t}</button>`).join("")}</div>
    <div id="qFeedback"></div>`;

  $$(".opt", box).forEach(b => b.onclick = () => {
    const o = q.opts[+b.dataset.i];
    const all = $$(".opt", box);
    all.forEach((x, i) => { x.disabled = true; if (q.opts[i].ok) x.classList.add("right"); });

    let msg;
    if (o.ok) {
      streak++; right++; bestStreak = Math.max(bestStreak, streak);
      const gain = L.pts, bonus = streak >= 3 ? 5 : 0;
      score += gain + bonus;
      msg = `✅ إجابة صحيحة! +${gain}${bonus ? ` (+${bonus} مكافأة السلسلة 🔥)` : ""}`;
    } else {
      b.classList.add("wrong");
      streak = 0;
      msg = "❌ إجابة غير صحيحة";
    }

    const last = qi === qs.length - 1;
    $("#qFeedback").innerHTML = `
      <div class="fb ${o.ok ? "ok" : "no"}">
        <b>${msg}</b>
        <p>${q.info}</p>
        <button class="btn next-q" id="nextQ">${last ? "شاهد النتيجة" : "السؤال التالي"}</button>
      </div>`;
    $(".q-score", box).textContent = "⭐ " + score;
    $(".q-streak", box).textContent = "🔥 " + streak;
    $("#nextQ").onclick = () => { qi++; renderQuiz(); };
  });
}
startQuiz();