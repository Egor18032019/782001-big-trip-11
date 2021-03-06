// отрисовка одного дня

import PointComponent from '../components/points.js';

import {
  render,
  RenderPosition,
  remove,
} from '../utils/render.js';

export default class DayController {
  constructor(container, iterator) {
    this._container = container;
    this._iterator = iterator;

    this._dayComponent = null;
  }

  render(day) {

    this._dayComponent = new PointComponent(day, this._iterator);

    this._dayComponent.setDeleteClickHandler(() => {
    });

    render(this._container, this._dayComponent, RenderPosition.BEFOREEND);
  }

  destroy() {
    remove(this._dayComponent);
    this._dayComponent = null;

  }

}
