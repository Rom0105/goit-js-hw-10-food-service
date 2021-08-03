import menusFoodTpl from './templates/food-menus.hbs';
import menu from './js/menu.json';

const ulListMenu = document.querySelector('.js-menu');
const cardMenu = createMenuCardsMarkup(menu);
ulListMenu.insertAdjacentHTML('beforeend', cardMenu);

function createMenuCardsMarkup(menu) {
  return menusFoodTpl(menu);
}
