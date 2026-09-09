/* XO Lounge v2 — clean interactions + subtle ember dust */
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const navLinks = document.getElementById("navLinks");
const burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("mobile-open");
  burger.setAttribute("aria-expanded", String(open));
  burger.textContent = open ? "✕" : "☰";
});
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  navLinks.classList.remove("mobile-open");
  burger.textContent = "☰";
}));

/* Live hours — Toronto */
(function () {
  const badge = document.getElementById("liveBadge");
  const text = document.getElementById("liveText");
  const top = document.getElementById("topbarHours");
  try {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Toronto" }));
    const day = now.getDay();
    const h = now.getHours() + now.getMinutes() / 60;
    let open = false;
    if (day === 1) open = false;
    else if (day === 4 || day === 5 || day === 6) open = h >= 17 || h < 2;
    else open = h >= 17 && h < 24;
    badge.classList.toggle("open", open);
    text.textContent = open ? "Open tonight" : day === 1 ? "Closed Mondays" : "Opens 5PM";
    if (top && open) top.textContent = "Open tonight · till 2AM";
  } catch { text.textContent = "Thu–Sun till 2AM"; }
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();

/* Menu tabs */
document.querySelectorAll(".tab").forEach((btn) => btn.addEventListener("click", () => {
  document.querySelectorAll(".tab").forEach((b) => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
  btn.classList.add("active");
  btn.setAttribute("aria-selected", "true");
  document.querySelectorAll(".menu-panel").forEach((p) => p.classList.toggle("active", p.dataset.panel === btn.dataset.tab));
}));

/* Booking */
(function () {
  const form = document.getElementById("bookForm");
  const err = document.getElementById("formErr");
  const ok = document.getElementById("formOk");
  const btn = document.getElementById("bookBtn");
  try {
    const t = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Toronto" }));
    document.getElementById("fDate").min = t.toISOString().slice(0, 10);
  } catch {}
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    err.textContent = "";
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    if (name.length < 2) { err.textContent = "Please add your name."; return; }
    if (!/^[+()\-\s\d]{7,}$/.test(phone)) { err.textContent = "Please add a valid phone — we confirm by text."; return; }
    if (!form.date.value) { err.textContent = "Please pick a date."; return; }
    if (!form.size.value) { err.textContent = "Please select party size."; return; }
    btn.disabled = true;
    btn.textContent = "Sending…";
    setTimeout(() => {
      const nice = new Date(form.date.value + "T12:00:00").toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" });
      document.getElementById("formOkText").textContent = `${name.split(" ")[0]}, ${form.size.value} on ${nice} — noted. We text ${phone} to confirm.`;
      ok.style.display = "block";
      btn.textContent = "Request sent";
    }, 600);
  });
})();

/* Subtle entrance */
if (window.gsap && window.ScrollTrigger && !prefersReduced) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.timeline({ defaults: { ease: "power3.out" } })
    .from(".hero h1", { y: 60, opacity: 0, duration: 1 })
    .from(".hero-sub", { y: 24, opacity: 0, duration: .8 }, "-=.6")
    .from(".hero-actions .btn", { y: 16, opacity: 0, duration: .6, stagger: .08 }, "-=.5")
    .from(".hero-foot > div", { y: 14, opacity: 0, duration: .5, stagger: .07 }, "-=.4");
  gsap.utils.toArray(".night, .tier, .dish").forEach((el) => {
    gsap.from(el, { y: 22, opacity: 0, duration: .7, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 92%" } });
  });
}

/* Ember dust — very subtle, low opacity */
(async function embers() {
  const canvas = document.getElementById("ember-field");
  if (prefersReduced || !canvas) { if (canvas) canvas.style.display = "none"; return; }
  let THREE;
  try { THREE = await import("three"); } catch { canvas.style.display = "none"; return; }
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, .1, 100);
  camera.position.z = 8;
  const COUNT = innerWidth < 768 ? 140 : 260;
  const pos = new Float32Array(COUNT * 3);
  const spd = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    pos[i*3] = (Math.random()-.5)*20; pos[i*3+1] = (Math.random()-.5)*12; pos[i*3+2] = (Math.random()-.5)*5;
    spd[i] = .1 + Math.random()*.35;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(32,32,0,32,32,32);
  grad.addColorStop(0,"rgba(255,200,140,1)"); grad.addColorStop(.4,"rgba(217,164,65,.7)"); grad.addColorStop(1,"rgba(217,164,65,0)");
  g.fillStyle = grad; g.fillRect(0,0,64,64);
  const tex = new THREE.CanvasTexture(c);
  const mat = new THREE.PointsMaterial({ size:.14, map:tex, transparent:true, opacity:.6, depthWrite:false, blending:THREE.AdditiveBlending });
  scene.add(new THREE.Points(geo, mat));
  const resize = () => {
    const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    renderer.setSize(w,h,false); camera.aspect = w/h; camera.updateProjectionMatrix();
  };
  resize(); addEventListener("resize", resize);
  let run = true;
  document.addEventListener("visibilitychange", () => run = !document.hidden);
  (function tick(){
    requestAnimationFrame(tick);
    if (!run) return;
    const a = geo.attributes.position.array;
    for (let i=0;i<COUNT;i++){ a[i*3+1]+=spd[i]*.006; if(a[i*3+1]>6.5){a[i*3+1]=-6.5;a[i*3]=(Math.random()-.5)*20;} }
    geo.attributes.position.needsUpdate = true;
    renderer.render(scene,camera);
  })();
})();
