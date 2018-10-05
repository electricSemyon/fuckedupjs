// У меня не очень хорошо с фантазией:
const activities = ['Обоссать тебе ебало', 'Может быть расчехлить свои IDE', 'Сверстать cтраничку', 'Подключить жикваери'];
const slider = document.querySelector('.development__range');
let output = document.querySelector('.development__result');
const list = document.querySelector('.development__activities-list');
const btn = document.querySelector('.development__btn');

// Инишал вэлью ебать его в рот
output.textContent = `${slider.value}`

slider.addEventListener('input', () => {
  output.textContent = slider.value;
  list.innerHTML = printActivities().reduce((html, activity) => {
    return html + `<li class="development__list-element">${activity}</li>`;
  }, '');
  if (slider.value >= 80) {
    btn.removeAttribute('disabled');
    btn.textContent = 'Кинуть нам свои гроши'
  } else {
    btn.setAttribute('disabled', '');
    btn.textContent = 'Кнопка не для бомжей'
  }
});

// че, пацаны, клинкод?
const printActivities = () => {
  const val = slider.value;
  let out = [];
  if (val < 50) {
    out = activities.slice(0, 1);
  } else if (val >= 50 && val < 75) {
    out = activities.slice(0,2);
  } else if (val >= 75 && val < 90) {
    out = activities.slice(0,3)
  } else {
    out = activities;
  }
  return out;
}




