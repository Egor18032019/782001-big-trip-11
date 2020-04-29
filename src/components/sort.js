// отрисовывает кнопки сортировки Event/Time/Price

import {
  creatSorting
} from '../mock/sort.js'; // может это сюда перенести ?

import AbstractComponent from "../components/abstract-component.js";

/**
 * @param {*} name имя фильтра
 * @param {*} svg есть ли свг
 * @param {*} isChecked чекнут или нет
 * @return{html} возращает разметку одного фильтра
 */
const creatSort = (name, svg = ``, isChecked) => {
  return (
    `<div class="trip-sort__item  trip-sort__item--${name}">
  <input id="sort-${name}" class="trip-sort__input  visually-hidden" type="radio"
  name="trip-sort"
  ${isChecked ? `checked` : ``}
  value="sort-${name}">
  <label class="trip-sort__btn" for="sort-${name}">
    ${name}
    ${svg}
  </label>
</div>`);
};

/**
 *   Сортировка
 * @return{html} возращает разметку всех фильтров
 */
const createSiteSortTemplate = () => {
  const creatSortMarkup = creatSorting.map((it) => creatSort(it.name, it.icon, it.check)).join(``);

  return (
    `
      <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
        <span class="trip-sort__item  trip-sort__item--day">Day</span>
${creatSortMarkup}
        <span class="trip-sort__item  trip-sort__item--offers">Offers</span>
      </form>
    `
  );
};

export default class FirstFromTemplate extends AbstractComponent {
  constructor(point) {
    super();

    this._point = point;
  }

  getTemplate() {
    return createSiteSortTemplate();
  }

}
