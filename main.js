/* XO Lounge — main.js
   Signature: warm ember particle drift (Three.js) + restrained GSAP reveals.
   Degrades gracefully: no WebGL / reduced motion -> static, still beautiful. */

const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Smooth scroll (Lenis, gentle) ---------- */
let lenis = null;
if (!prefersReduced && window.Lenis) {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
  if (window.ScrollTrigger) lenis.on("scroll", () => ScrollTrigger.update());
}

/* ---------- Nav state + mobile ---------- */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("mobile-open");
  burger.setAttribute("aria-expanded", String(open));
  burger.textContent = open ? "✕" : "☰";
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("mobile-open");
    burger.setAttribute("aria-expanded", "false");
    burger.textContent = "☰";
  })
);

/* ---------- Live open-hours (Toronto time) ---------- */
(function liveHours() {
  const badge = document.getElementById("liveBadge");
  const text = document.getElementById("liveText");
  try {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Toronto" }));
    const day = now.getDay(); // 0 Sun
    const h = now.getHours() + now.getMinutes() / 60;
    // Hours: Tue-Wed 17-24, Thu-Sat 17-26 (2AM), Sun 17-24, Mon closed
    let open = false;
    if (day === 1) open = false;
    else if (day === 4 || day === 5 || day === 6) open = h >= 17 || h < 2;
    else open = h >= 17 && h < 24;
    badge.classList.toggle("open", open);
    text.textContent = open ? "Open tonight" : day === 1 ? "Closed Mondays" : "Opens 5PM";
  } catch {
    text.textContent = "Thu–Sun till 2AM";
  }
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();

/* ---------- Menu tabs ---------- */
document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((b) => b.setAttribute("aria-selected", "false"));
    btn.setAttribute("aria-selected", "true");
    const key = btn.dataset.tab;
    document.querySelectorAll(".menu-panel").forEach((p) =>
      p.classList.toggle("active", p.dataset.panel === key)
    );
    if (window.gsap && !prefersReduced) {
      gsap.fromTo(`.menu-panel[data-panel="${key}"] .dish`,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: { each: 0.05, from: "start" }, ease: "power3.out", overwrite: true });
    }
  });
});

/* ---------- Reservation form (front-end validation + honest states) ---------- */
(function booking() {
  const form = document.getElementById("bookForm");
  const ok = document.getElementById("formOk");
  const btn = document.getElementById("bookBtn");
  const setHint = (k, msg) => {
    const el = form.querySelector(`[data-hint="${k}"]`);
    if (el) el.textContent = msg || "";
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    ["name", "phone", "date", "size", "form"].forEach((k) => setHint(k, ""));
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date.value;
    const size = form.size.value;
    let bad = false;
    if (name.length < 2) { setHint("name", "Give us a name for the table."); bad = true; }
    if (!/^[+()\-\s\d]{7,}$/.test(phone)) { setHint("phone", "A reachable phone — we confirm by text."); bad = true; }
    if (!date) { setHint("date", "Pick a night."); bad = true; }
    if (!size) { setHint("size", "How many mouths?"); bad = true; }
    if (bad) { setHint("form", "Two quick fixes above and you're booked."); return; }
    btn.disabled = true;
    btn.textContent = "Sending…";
    setTimeout(() => {
      const nice = new Date(date + "T12:00:00").toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" });
      document.getElementById("formOkText").textContent =
        `${name.split(" ")[0]}, ${size} on ${nice} — noted. We text ${phone} within a day to lock it in.`;
      ok.style.display = "block";
      btn.textContent = "Request sent ✓";
      form.querySelectorAll("input,select,textarea").forEach((el) => (el.disabled = true));
      ok.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "nearest" });
    }, 700);
  });
  // min = today (Toronto)
  try {
    const t = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Toronto" }));
    document.getElementById("fDate").min = t.toISOString().slice(0, 10);
  } catch { /* ignore */ }
})();

/* ---------- Marquee: duplicate once for a seamless loop ---------- */
(function marquee() {
  const track = document.getElementById("marqueeTrack");
  track.innerHTML += track.innerHTML;
})();

/* ---------- Scroll reveals: varied, motivated, never uniform ---------- */
if (window.gsap && window.ScrollTrigger && !prefersReduced) {
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance: one orchestrated sequence (the delight moment)
  gsap.timeline({ defaults: { ease: "expo.out" } })
    .from(".hero h1 .line > span", { yPercent: 110, duration: 1.1, stagger: 0.12 })
    .from(".eyebrow", { x: -24, opacity: 0, duration: 0.8 }, "-=0.8")
    .from(".hero-sub", { y: 22, opacity: 0, duration: 0.9 }, "-=0.7")
    .from(".hero-actions .btn", { y: 16, opacity: 0, duration: 0.7, stagger: 0.09 }, "-=0.6")
    .from(".hero-meta > div", { y: 14, opacity: 0, duration: 0.6, stagger: 0.07 }, "-=0.5")
    .from(".hero-figure", { y: 40, opacity: 0, duration: 1.0, ease: "power3.out" }, "-=0.9");

  // Section heads: slide + rule draw
  gsap.utils.toArray(".sec-head").forEach((el, i) => {
    gsap.from(el, {
      y: i % 2 ? 36 : 28, opacity: 0, duration: 0.9,
      ease: i % 2 ? "power3.out" : "expo.out",
      scrollTrigger: { trigger: el, start: "top 85%" }
    });
  });

  // Experience rows: alternating drift (not identical fade-ups)
  gsap.utils.toArray(".x-row").forEach((row, i) => {
    gsap.from(row, {
      x: i % 2 ? 28 : -28, opacity: 0, duration: 0.8, ease: "power3.out",
      scrollTrigger: { trigger: row, start: "top 88%" }
    });
  });

  // Gallery parallax: each image drifts at its own rate
  gsap.utils.toArray(".g-item img").forEach((img, i) => {
    gsap.fromTo(img, { yPercent: -6 + i * 2 }, {
      yPercent: 6 - i * 2, ease: "sine.out",
      scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: 1 }
    });
  });

  // Giant footer outline: slow rise
  gsap.from(".giant", {
    yPercent: 24, opacity: 0, duration: 1.1, ease: "expo.out",
    scrollTrigger: { trigger: "footer", start: "top 90%" }
  });
}

/* ---------- Ember field: Three.js signature (tasteful, capped, guarded) ---------- */
(async function embers() {
  const canvas = document.getElementById("ember-field");
  if (prefersReduced) { canvas.style.display = "none"; return; }
  let THREE;
  try {
    THREE = await import("three");
  } catch {
    canvas.style.display = "none";
    return;
  }

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 8;

  const COUNT = window.innerWidth < 768 ? 320 : 700;
  const pos = new Float32Array(COUNT * 3);
  const speed = new Float32Array(COUNT);
  const phase = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 22;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 13;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    speed[i] = 0.12 + Math.random() * 0.5;
    phase[i] = Math.random() * Math.PI * 2;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

  // Warm ember sprite drawn once on a tiny canvas — no image assets needed
  const sprite = (() => {
    const c = document.createElement("canvas");
    c.width = c.height = 64;
    const g = c.getContext("2d");
    const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255,196,130,1)");
    grad.addColorStop(0.35, "rgba(232,93,42,.85)");
    grad.addColorStop(1, "rgba(232,93,42,0)");
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 64);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  })();

  const mat = new THREE.PointsMaterial({
    size: 0.16, map: sprite, transparent: true, opacity: 0.75,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
    color: 0xffb37a
  });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  let mx = 0, my = 0, tx = 0, ty = 0;
  window.addEventListener("pointermove", (e) => {
    tx = (e.clientX / window.innerWidth - 0.5) * 2;
    ty = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize);

  let running = true;
  document.addEventListener("visibilitychange", () => { running = !document.hidden; });
  const clock = new THREE.Clock();

  (function tick() {
    requestAnimationFrame(tick);
    if (!running) return;
    const t = clock.getElapsedTime();
    const arr = geo.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      arr[i * 3 + 1] += speed[i] * 0.008;                    // slow rise
      arr[i * 3] += Math.sin(t * 0.4 + phase[i]) * 0.0035;   // breathing drift
      if (arr[i * 3 + 1] > 7) { arr[i * 3 + 1] = -7; arr[i * 3] = (Math.random() - 0.5) * 22; }
    }
    geo.attributes.position.needsUpdate = true;
    mx += (tx - mx) * 0.03;
    my += (ty - my) * 0.03;
    points.rotation.y = mx * 0.12;
    points.rotation.x = -my * 0.08;
    renderer.render(scene, camera);
  })();
})();
