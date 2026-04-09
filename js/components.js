// Shared navigation
const NAV_HTML = `
<nav class="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">Emde <span>Stomatologia</span></a>
    <div class="nav-links">
      <a href="index.html">Strona główna</a>
      <a href="o-nas.html">O nas</a>
      <a href="uslugi.html">Usługi</a>
      <a href="galeria.html">Galeria</a>
      <a href="cennik.html">Cennik</a>
      <a href="kontakt.html">Kontakt</a>
    </div>
    <button class="nav-cta" onclick="window.location='kontakt.html'">Umów wizytę</button>
    <div class="nav-mobile-toggle"><span></span><span></span><span></span></div>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-top">
    <div class="footer-brand">
      <a href="index.html" class="footer-logo">Emde <span>Stomatologia</span></a>
      <p>Gabinet stomatologiczny dr Mariusza Dolińskiego w Lęborku. Nowoczesna stomatologia z 25-letnim doświadczeniem. Bezbolesne leczenie, nano-wypełnienia, bezpłatna konsultacja.</p>
    </div>
    <div class="footer-col">
      <h4>Usługi</h4>
      <ul>
        <li><a href="usluga-zachowawcza.html">Leczenie zachowawcze</a></li>
        <li><a href="usluga-protetyka.html">Protetyka</a></li>
        <li><a href="usluga-chirurgia.html">Chirurgia</a></li>
        <li><a href="usluga-higienizacja.html">Higienizacja</a></li>
        <li><a href="usluga-estetyczna.html">Stomatologia estetyczna</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Gabinet</h4>
      <ul>
        <li><a href="o-nas.html">O lekarzu</a></li>
        <li><a href="galeria.html">Galeria</a></li>
        <li><a href="cennik.html">Cennik</a></li>
        <li><a href="kontakt.html">Kontakt</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Kontakt</h4>
      <ul>
        <li><a href="#">Al. Wolności 40a</a></li>
        <li><a href="#">84-300 Lębork</a></li>
        <li><a href="tel:606729560">606 729 560</a></li>
        <li><a href="mailto:dr.dolinski@icloud.com">dr.dolinski@icloud.com</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2025 Emde Stomatologia · Dr Mariusz Doliński · Lębork</span>
    <span class="footer-copy">Projekt strony: [Twoje imię]</span>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
});
