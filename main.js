import './styles/normalize.css'
import './styles/index.scss'

import data from './data.json'

// [+] cargar elementos de la grafica
const loadGraphicElements = () => {
  let graphic = document.querySelector('div.graphic')

  for(let i = 0; i < data.length; i++) {
    const graphic_element = `
      <div class="graphic-element">
        <div class="element-bar">
          <div class="bar"><div class="tooltip"></div></div>
        </div>
        <p>${ data[i].day }</p>
      </div>
    `
    graphic.innerHTML += graphic_element
  }

  const max = Math.max(...data.map(item => item.amount))

  for(let i = 0; i < graphic.children.length; i++) {
    let bar = graphic.children[i].children[0].children[0]
    bar.style.height = `${data[i].amount * 100 / max}%`
    bar.children[0].innerHTML = `$${ data[i].amount }`

    if(data[i].amount == max) {
      bar.classList.add('max')
    }
  }
}

loadGraphicElements()
