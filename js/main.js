document.addEventListener('DOMContentLoaded', () => {

  // ─── SCROLL ANIMATIONS ───
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in, .fade-left, .fade-right').forEach(el => observer.observe(el));

  // ─── ACTIVE NAV ───
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // ─── MOBILE MENU ───
  const toggle = document.querySelector('.nav-mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const open = navLinks.style.display === 'flex';
      navLinks.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:white;border-bottom:0.5px solid #e0dbd3;padding:0 2.5rem;z-index:300;';
    });
  }

  // ─── STATS COUNTER ───
  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) {
    const statsObs = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      statsObs.disconnect();
      document.querySelectorAll('.stat-num').forEach(el => {
        const raw = el.textContent.trim();
        const num = parseInt(raw);
        if (isNaN(num)) return;
        const suffix = raw.replace(String(num), '');
        let start = null;
        const step = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / 1200, 1);
          el.textContent = Math.floor(p * num) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    statsObs.observe(statsBar);
  }

  // ─── REVIEWS CAROUSEL ───
  const track = document.getElementById('carousel-track');
  const dotsEl = document.getElementById('carousel-dots');
  if (!track) return;

  const slides = track.querySelectorAll('.carousel-slide');
  const total = slides.length;
  const getVisible = () => window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3;
  let cur = 0;
  let auto;

  function buildDots() {
    if (!dotsEl) return;
    dotsEl.innerHTML = '';
    const pages = total - getVisible() + 1;
    for (let i = 0; i < pages; i++) {
      const d = document.createElement('div');
      d.className = 'cdot' + (i === 0 ? ' active' : '');
      d.onclick = () => go(i);
      dotsEl.appendChild(d);
    }
  }

  function go(n) {
    const pages = total - getVisible() + 1;
    cur = Math.max(0, Math.min(n, pages - 1));
    track.style.transform = `translateX(-${cur * (100 / getVisible())}%)`;
    dotsEl && dotsEl.querySelectorAll('.cdot').forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  buildDots();
  document.getElementById('carousel-prev') && document.getElementById('carousel-prev').addEventListener('click', () => go(cur - 1));
  document.getElementById('carousel-next') && document.getElementById('carousel-next').addEventListener('click', () => go(cur + 1));

  const startAuto = () => { auto = setInterval(() => go((cur + 1) % (total - getVisible() + 1)), 4500); };
  const stopAuto = () => clearInterval(auto);
  startAuto();
  track.closest('.carousel') && track.closest('.carousel').addEventListener('mouseenter', stopAuto);
  track.closest('.carousel') && track.closest('.carousel').addEventListener('mouseleave', startAuto);
  window.addEventListener('resize', () => { buildDots(); go(0); });

});
