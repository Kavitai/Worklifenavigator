// Mobile menu toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('nav-links-open');
  });
}

// Dropdown accordion ("People issues?" / "Point of View")
document.querySelectorAll('.nav-dropdown-toggle').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = btn.closest('.nav-dropdown');
    const isOpen = dropdown.classList.contains('open');

    // close any other open dropdown first
    document.querySelectorAll('.nav-dropdown.open').forEach((d) => {
      d.classList.remove('open');
      d.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      dropdown.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// Click anywhere outside a dropdown closes it
document.addEventListener('click', () => {
  document.querySelectorAll('.nav-dropdown.open').forEach((d) => {
    d.classList.remove('open');
    d.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
  });
});
