// отрисовка эвентов в каждом дне
import AbstractComponent from "../components/abstract-component.js";

/**
 * контейнер для Offers
 * @param {*} arrayOffers
 * @return{html} возращает разметку
 */
const getOffersTemplates = (arrayOffers) => {

  return (
    `
      <li class="event__offer">
      <span class="event__offer-title">${arrayOffers.eventOfferTitle}</span>
      +
      €&nbsp;
      <span class="event__offer-price">${arrayOffers.evenOfferPrice}</span>
     </li>
     `);
};

const getPointTemplate = (points) => {
  const {
    eventPoint,
    eventTitle,
    eventOffers,
    eventTimeStart,
    eventTimeEnd,
    eventPrice,
    eventDuration,
  } = points;
  // console.log(points);
  const eventSelectedOffers = eventOffers.map((it) => getOffersTemplates(it)).join(`\n`);

  return (
    `
  <li class="trip-events__item">
  <div class="event">
    <div class="event__type">
    <img class="event__type-icon" src=img/icons/${eventPoint.toLowerCase()}.png
    alt="Event type icon" width="42" height="42">
    </div>
    <h3 class="event__title">${eventTitle}</h3>

    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">${eventTimeStart}</time>
        —
        <time class="event__end-time" datetime="2019-03-18T11:00">${eventTimeEnd}</time>
      </p>
      <p class="event__duration">${eventDuration}</p>
    </div>

    <p class="event__price">
      €&nbsp;<span class="event__price-value">${eventPrice}</span>
    </p>

    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
${eventSelectedOffers}
    </ul>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>
`
  );
};

export default class EventComponent extends AbstractComponent {
  constructor(point) {
    super();

    this._point = point;
  }

  getTemplate() {
    return getPointTemplate(this._point);
  }

}
