const { Component } = React

const Roll = ({ multiplier }) => (
  <img
    src="/img/roll.svg"
    width={ 200 }
    height={ 130 }
    className="design__roll"
    style={{
      bottom: `calc(50% - ${multiplier * 30}px)`,
      right: `calc(50% - ${multiplier * 30}px)`,
    }}
  />
)

const RollWrapper = ({ children, multiplier }) => (
  <div
    className="design__roll-wrapper"
  >
    <Roll multiplier={ multiplier } />
    <div className="design__details">{ children }</div>
  </div>
)

class DesignWidget extends Component {
  render() {
    return (
      <div className="design__widget">
        {
          [
            'Сделаем обёртку для бизнеса',
            'Увеличим ссаную конверсию',
            'Поревьювим твой говнокод',
            'Погуляем с твоей собакой (дорого)',
            'Погуляем с твоей телкой (очень дорого)',
            'Пройдём за тебя собеседование'
          ].map((text, i) => (
            <RollWrapper multiplier={ i }>
              { text }
            </RollWrapper>
          ))
        }
      </div>
    )
  }
}

ReactDOM.render(
  <DesignWidget />,
  document.getElementById('design-widget-root')
);