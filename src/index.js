import menuFoodTpl from './templates/food-menu.hbs';
import menu from './js/menu.json';

const ulListMenu = document.querySelector('.js-menu');
const cardMenu = createMenuCardsMarkup(menu);
ulListMenu.insertAdjacentHTML('beforeend', cardMenu);

function createMenuCardsMarkup(menu) {
  return menu.map(menuFoodTpl).join('');
}
