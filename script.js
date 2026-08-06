/* =====================================================================
   EDIT ONLY THIS DATA BLOCK.  The rendering code below is generic.
   - To use a real thumbnail, add  image: 'assets/projects/foo.png'
   - To use a real avatar, set     profile.avatar: 'assets/avatar.jpg'
   - Résumé PDF goes at            assets/resume.pdf   (or change cvUrl)
   ===================================================================== */
const data = {
  profile: {
    name: 'Nhan Dinh',
    fullName: 'Đinh Hoàng Thuận Nhân',
    headline: 'Unity Gameplay Engineer',
    bio: 'Senior Unity Developer with 10+ years of experience. I build gameplay systems, squash bugs, and occasionally create new ones — only to squash them again. I enjoy clean architecture, smooth gameplay, and pretending every feature only takes “a couple of hours.”',
    avatar: 'assets/avatar.jpg',
    cvUrl: 'assets/resume.pdf',
    email: 'thuannhanniit@gmail.com',
    github: 'https://github.com/thuannhanACM',
    linkedin: 'https://www.linkedin.com/in/nhan-dinh-851742136/',
  },

  about: [
    // Each string is a paragraph. Use <a href="">text</a> for inline links.
    'I\'m a Senior Unity Developer with over 10 years of experience building mobile games from prototype to live operations. I enjoy designing scalable gameplay systems, optimizing performance, and turning ideas into polished player experiences.',
    'Beyond writing code, I value clean architecture, collaboration, and mentoring teammates to build high-quality games together.',
  ],

  skills: [
    'Unity', 'C / C++', 'C#', 'Swift', 'Java', 'Lua', 'Scala', 'TypeScript',
    'Git / Plastic SCM / Perforce / SVN',
    'MySQL / NoSQL / PostgreSQL / Redis',
    'AI (Claude Code, Coplay MCP)',
  ],

  // ------- 6 PROJECTS (large, foldable) -------
  projects: [
    {
      title: 'Project One',                     // TODO
      tagline: 'One-line summary of what it is.',
      period: '2024',
      role: 'Full-stack developer',
      image: '',                                // 'assets/projects/one.png'
      description: 'A longer description that appears when the card is expanded. Explain the problem, what you built, and why it mattered.',
      highlights: [
        'A concrete result or metric (e.g. cut load time by 40%).',
        'A notable technical decision or feature you owned.',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL'],
      demo: '',                                 // 'https://...'
      repo: 'https://github.com/thuannhanACM',
    },
    {
      title: 'Project Two',
      tagline: 'One-line summary of what it is.',
      period: '2024',
      role: 'Your role',
      image: '',
      description: 'Longer description shown on expand.',
      highlights: ['Result one.', 'Result two.'],
      tech: ['TypeScript', 'Next.js'],
      demo: '',
      repo: 'https://github.com/thuannhanACM',
    },
    {
      title: 'Project Three',
      tagline: 'One-line summary of what it is.',
      period: '2023',
      role: 'Your role',
      image: '',
      description: 'Longer description shown on expand.',
      highlights: ['Result one.', 'Result two.'],
      tech: ['Python', 'FastAPI'],
      demo: '',
      repo: 'https://github.com/thuannhanACM',
    },
    {
      title: 'Project Four',
      tagline: 'One-line summary of what it is.',
      period: '2023',
      role: 'Your role',
      image: '',
      description: 'Longer description shown on expand.',
      highlights: ['Result one.', 'Result two.'],
      tech: ['React Native'],
      demo: '',
      repo: 'https://github.com/thuannhanACM',
    },
    {
      title: 'Project Five',
      tagline: 'One-line summary of what it is.',
      period: '2022',
      role: 'Your role',
      image: '',
      description: 'Longer description shown on expand.',
      highlights: ['Result one.', 'Result two.'],
      tech: ['Vue', 'Firebase'],
      demo: '',
      repo: 'https://github.com/thuannhanACM',
    },
    {
      title: 'Project Six',
      tagline: 'One-line summary of what it is.',
      period: '2022',
      role: 'Your role',
      image: '',
      description: 'Longer description shown on expand.',
      highlights: ['Result one.', 'Result two.'],
      tech: ['Go', 'Docker'],
      demo: '',
      repo: 'https://github.com/thuannhanACM',
    },
  ],

  // ------- OTHERS: prototypes (small, not foldable) -------
  others: [
    { title: 'Prototype A', desc: 'One-line description of a small experiment.', tech: 'Canvas / JS', link: '' },
    { title: 'Prototype B', desc: 'One-line description of a small experiment.', tech: 'Python', link: '' },
    { title: 'Prototype C', desc: 'One-line description of a small experiment.', tech: 'WebGL', link: '' },
  ],
};

/* =====================================================================
   Rendering — generic, no need to edit below.
   ===================================================================== */
const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, props = {}, ...kids) => {
  const n = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === 'class') n.className = v;
    else if (k === 'html') n.innerHTML = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else if (v !== null && v !== undefined) n.setAttribute(k, v);
  });
  kids.flat().forEach((c) => c != null && n.append(c.nodeType ? c : document.createTextNode(c)));
  return n;
};

const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 6 10 7 10-7"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>',
  chevron: '<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
};

/* deterministic gradient from a string, for placeholder thumbnails */
function gradientFor(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = str.charCodeAt(i) + ((h << 5) - h);
  const a = Math.abs(h) % 360;
  const b = (a + 55) % 360;
  return `linear-gradient(135deg, hsl(${a} 65% 45%), hsl(${b} 60% 35%))`;
}
function initials(str) {
  return str.split(/\s+/).map((w) => w[0]).join('').slice(0, 3).toUpperCase();
}

function thumbNode(item) {
  const t = el('div', { class: 'thumb' });
  if (item.image) {
    t.append(el('img', { src: item.image, alt: item.title + ' thumbnail', loading: 'lazy' }));
  } else {
    t.style.background = gradientFor(item.title);
    t.textContent = initials(item.title);
  }
  return t;
}

function renderProfile(p) {
  const av = $('#avatar');
  if (p.avatar) av.append(el('img', { src: p.avatar, alt: p.name })); else av.textContent = initials(p.name);
  $('#name').textContent = p.name;
  if (p.fullName) {
    $('#name').insertAdjacentElement('afterend', el('p', { class: 'fullname' }, p.fullName));
  }
  $('#headline').textContent = p.headline;
  $('#bio').textContent = p.bio;

  const cv = $('#cv-btn');
  cv.href = p.cvUrl; cv.textContent = 'Résumé';

  const socials = $('#socials');
  const add = (href, icon, label) => socials.append(el('li', {}, el('a', { href, 'aria-label': label, target: '_blank', rel: 'noreferrer', html: icon })));
  if (p.github) add(p.github, ICONS.github, 'GitHub');
  if (p.linkedin) add(p.linkedin, ICONS.linkedin, 'LinkedIn');
  if (p.email) add('mailto:' + p.email, ICONS.email, 'Email');
}

function renderNav() {
  const items = [['about', 'About'], ['projects', 'Projects'], ['others', 'Others']];
  const list = $('#nav-list');
  items.forEach(([id, label]) => {
    list.append(el('li', {}, el('a', { href: '#' + id, 'data-nav': id },
      el('span', { class: 'line' }), label)));
  });
}

function renderAbout() {
  const body = $('#about-body');
  data.about.forEach((para) => body.append(el('p', { html: para })));
  const skills = $('#skills');
  data.skills.forEach((s) => skills.append(el('li', {}, s)));
}

function linkRow(pr) {
  const row = el('div', { class: 'project-links' });
  if (pr.demo) row.append(el('a', { href: pr.demo, target: '_blank', rel: 'noreferrer', html: ICONS.external + '<span>Live demo</span>' }));
  if (pr.repo) row.append(el('a', { href: pr.repo, target: '_blank', rel: 'noreferrer', html: ICONS.github + '<span>Source</span>' }));
  return row;
}

function renderProjects() {
  const list = $('#projects-list');
  data.projects.forEach((pr) => {
    const summary = el('summary', {},
      thumbNode(pr),
      el('div', { class: 'project-head' },
        el('h3', {}, pr.title),
        el('p', { class: 'tagline' }, pr.tagline),
        pr.period ? el('p', { class: 'period' }, pr.period) : null,
      ),
      el('span', { html: ICONS.chevron }),
    );
    const body = el('div', { class: 'project-body' },
      el('p', { class: 'desc' }, pr.description),
      pr.role ? el('p', { class: 'role', html: '<strong>Role:</strong> ' + pr.role }) : null,
      pr.highlights && pr.highlights.length
        ? el('ul', { class: 'highlights' }, pr.highlights.map((h) => el('li', {}, h)))
        : null,
      pr.tech && pr.tech.length
        ? el('ul', { class: 'tags' }, pr.tech.map((t) => el('li', {}, t)))
        : null,
      linkRow(pr),
    );
    list.append(el('details', { class: 'project' }, summary, body));
  });
}

function renderOthers() {
  const grid = $('#others-grid');
  data.others.forEach((o) => {
    const top = el('div', { class: 'proto-top' },
      el('h4', {}, o.title),
      o.link ? el('a', { class: 'proto-link', href: o.link, target: '_blank', rel: 'noreferrer', 'aria-label': o.title + ' link', html: ICONS.external }) : null,
    );
    grid.append(el('div', { class: 'proto-card' },
      top,
      el('p', { class: 'proto-desc' }, o.desc),
      o.tech ? el('p', { class: 'proto-tags' }, o.tech) : null,
    ));
  });
}

function renderFooter() {
  $('#footer-text').innerHTML =
    'Built with plain HTML, CSS &amp; JavaScript. Design inspired by ' +
    '<a href="https://brittanychiang.com" target="_blank" rel="noreferrer">Brittany Chiang</a>.';
}

/* scroll-spy: highlight the nav link of the section in view */
function initScrollSpy() {
  const links = new Map([...document.querySelectorAll('[data-nav]')].map((a) => [a.dataset.nav, a]));
  const sections = ['about', 'projects', 'others'].map((id) => document.getElementById(id));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((a) => a.classList.remove('active'));
        links.get(e.target.id)?.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
  sections.forEach((s) => s && obs.observe(s));
}

document.addEventListener('DOMContentLoaded', () => {
  renderProfile(data.profile);
  renderNav();
  renderAbout();
  renderProjects();
  renderOthers();
  renderFooter();
  initScrollSpy();
});
