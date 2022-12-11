const resetButton = document.querySelector('button')
const container = document.querySelector('.container')
const sizeOfGrid = 16;

const RandomRGB = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

   return { r, g, b }
  }

const createGrid = (alotofGrids) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')
  for (let i = 0;  i < alotofGrids; i++) {
    const row = document.createElement('div')
    row.classList.add('grid-row')

    for (let h = 0; h < alotofGrids; h++) {
      const { r, g, b } = RandomRGB()

      const widthAndHeight = 960 / sizeOfGrid
      const gridBox = document.createElement('div')
      gridBox.classList.add('grid-box')
      gridBox.style.width = `${widthAndHeight}px`
      gridBox.style.height = `${widthAndHeight}px`
      //the mouser addEventListener change the colour when the mouse hovers.
      gridBox.addEventListener('mouseenter', () => {
        //const RGBColor = "rgb(" + r + "," + g + "," + b +")"
        const currentOpacity = gridBox.style.opacity
        gridBox.style.background = `rgb(0, 0, 0)`
        if (currentOpacity) {
          gridBox.style.opacity = Number(currentOpacity) + .1
        } else {
          gridBox.style.opacity = .1
        }
      })
      row.appendChild(gridBox)
    }

    wrapper.appendChild(row)
  }
  container.appendChild(wrapper)
}

createGrid(sizeOfGrid)

resetButton.addEventListener('click', () => {
  let unserSize = Number(prompt('How big of a size would you like to Etch A Stetch to be?'))

  while (unserSize > 74) {
    unserSize = Number(prompt('Please pick a smaller number under 74!'))
  }

  const wrapper = document.querySelector('.wrapper')
  wrapper.remove()
  createGrid(unserSize)
})

//sizeOfGrid = 16;
//createGrid(sizeOfGrid)

//#can also be enter after the fact
//const addDivs = document.querySelectorAll('grid-box')
//addDivs.forEach(div => {
//  div.addEventListener('mouseenter', () =>{
//    gridBox.style.backgroundColor = 'red'
//})
//})


// Add 16 divs
//or (let i = 1; i < 257; i++) {
//  const div = document.createElement('div');
//  creatediv.appendChild(div);
//}