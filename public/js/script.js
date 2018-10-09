// У меня не очень хорошо с фантазией:
const activities = ['Обоссать тебе ебало', 'Может быть расчехлить свои IDE', 'Вывести "хуй" в консоль', 'Сверстать cтраничку', 'Подключить жикваери'];
const slider = document.querySelector('.development__range');
let output = document.querySelector('.development__result');
const list = document.querySelector('.development__activities-list');
const btn = document.querySelector('.development__btn');

// Инишал вэлью ебать его в рот
output.textContent = `${slider.value}`

slider.addEventListener('input', () => {
  output.textContent = slider.value;
  list.innerHTML = printActivities(slider, activities).reduce((html, activity) => {
    return html + `<li class="development__list-element">${activity}</li>`;
  }, '');
  if (slider.value > 65) {
    btn.removeAttribute('disabled');
    btn.textContent = 'Кинуть нам свои гроши'
  } else {
    btn.setAttribute('disabled', '');
    btn.textContent = 'Кнопка не для бомжей'
  }
});

// че, пацаны, клинкод?
const ACTIVITY_CHANGE_THRESHOLD = 50

const printActivities = (slider, activities) => {
  const { value, max } = slider
  const activitiesLength = activities.length
  const activityChangeStep = getActivityChangeStep(max, activitiesLength)
  const rowIndex = getRowIndex(value, activityChangeStep)
  const indexToSlice = keepInRange(1, activitiesLength, rowIndex)

  return activities.slice(0, indexToSlice)
}

const getActivityChangeStep = (max, activitiesLength) =>
  (max - ACTIVITY_CHANGE_THRESHOLD) / activitiesLength

const getRowIndex = (value, activityChangeStep) =>
  Math.trunc((value - ACTIVITY_CHANGE_THRESHOLD ) / activityChangeStep)

const keepInRange = (from, to, number) =>
  Math.min(Math.max(parseInt(number), from), to);
