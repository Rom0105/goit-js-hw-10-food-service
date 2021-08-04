const themeToggle = document.querySelector('#theme-switch-toggle');
const themeBody = document.querySelector('body');
themeToggle.addEventListener('change', themeDarkLight);
themeToggle.addEventListener('change', localTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function themeDarkLight() {
  const check = themeToggle.checked;
  if (check) {
    themeBody.classList.add(Theme.DARK);
    themeBody.classList.remove(Theme.LIGHT);
  } else {
    themeBody.classList.add(Theme.LIGHT);
    themeBody.classList.remove(Theme.DARK);
  }
}

function localTheme() {
  const check = themeToggle.checked;

  if (check) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
  themeBody.classList.add(Theme.DARK);
  themeToggle.checked = true;
}
