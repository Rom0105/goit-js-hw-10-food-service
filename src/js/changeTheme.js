const themeToggle = document.querySelector('#theme-switch-toggle');
const themeBody = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function themeDark() {
  const check = themeToggle.checked;
  if (check) {
    themeBody.classList.add(Theme.DARK);
    themeBody.classList.remove(Theme.LIGHT);
  } else {
    themeBody.classList.add(Theme.LIGHT);
    themeBody.classList.remove(Theme.DARK);
  }
}

themeToggle.addEventListener('change', themeDark);
