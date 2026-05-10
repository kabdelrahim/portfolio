(function () {
  const page = document.body.dataset.page;

  const path = window.location.pathname;
  const isInSubdir = path.includes('/pages/') || path.includes('/legal/');
  const base = isInSubdir ? '../' : '';

  const navItems = [
    { key: 'home',     label: 'Accueil',         href: base + 'index.html' },
    { key: 'about',    label: 'À propos',         href: base + 'pages/about.html' },
    { key: 'projects', label: 'Projets',          href: base + 'pages/projects.html' },
    { key: 'skills',   label: 'Compétences',      href: base + 'pages/skills.html' },
    { key: 'cv',       label: 'CV',               href: base + 'pages/cv.html' },
    { key: 'cyber',    label: 'Cybersécurité',    href: base + 'pages/cyber.html' },
    { key: 'contact',  label: 'Contact',          href: base + 'pages/contact.html' },
  ];

  const navHTML = navItems.map(function (item) {
    const active = item.key === page ? ' font-semibold underline' : '';
    return '<a href="' + item.href + '" class="hover:text-blue-400' + active + '">' + item.label + '</a>';
  }).join('\n          ');

  const headerEl = document.createElement('header');
  headerEl.className = 'bg-gray-800 py-4 shadow fixed w-full z-50';
  headerEl.innerHTML =
    '<div class="container mx-auto flex justify-between items-center px-6">' +
      '<h1 class="text-2xl font-bold text-blue-400">' +
        '<a href="' + base + 'index.html">&lt;/ABDELRAHIM SALEH Karim&gt;</a>' +
      '</h1>' +
      '<nav class="space-x-4 text-sm">' +
        navHTML +
      '</nav>' +
    '</div>';

  const footerEl = document.createElement('footer');
  footerEl.className = 'bg-gray-800 mt-20 py-4 text-center text-gray-500 text-sm';
  footerEl.innerHTML =
    '© 2025 ABDELRAHIM SALEH Karim — Portfolio Développeur | ' +
    '<a href="' + base + 'legal/mentions.html" class="hover:text-blue-400">Mentions légales</a>';

  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (headerPlaceholder) headerPlaceholder.replaceWith(headerEl);
  if (footerPlaceholder) footerPlaceholder.replaceWith(footerEl);
})();
