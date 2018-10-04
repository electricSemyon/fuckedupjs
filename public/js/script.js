// У меня не очень хорошо с фантазией:
const activities = ['Обоссать тебе ебало', 'Может быть расчехлить свои IDE', 'Сверстать cтраничку', 'Раз денег дохуя то на счётчик поставим'];
const slider = document.querySelector('.development__range');
let output = document.querySelector('.development__result');
const list = document.querySelector('.development__activities-list');

// Инишал вэлью ебать его в рот
output.textContent = `${slider.value}`

slider.addEventListener('input', () => {
  output.textContent = slider.value;
  list.innerHTML = printActivities().reduce((html, activity) => {
    return html + `<li class="development__list-element">${activity}</li>`;
  }, '')
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




