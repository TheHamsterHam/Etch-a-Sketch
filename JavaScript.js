const resetButton = document.querySelector('button')
const container = document.querySelector('.container')

const createGrid = (alotofGrids) => {
  for (let i = 0;  i < alotofGrids; i++) {
    const row = document.createElement('div')
    row.classList.add('grid-row')

    for (let r = 0; r < alotofGrids; r++) {
      const widthAndHeight = 960 / sizeOfGrid
      const gridBox = document.createElement('div')
      gridBox.classList.add('grid-box')
      gridBox.style.width = `${widthAndHeight}px`
      gridBox.style.height = `${widthAndHeight}px`

      gridBox.addEventListener('mouseenter', () => {
        gridBox.style.backgroundColor = 'red'
      })
      row.appendChild(gridBox)
    }

    container.appendChild(row)
  }
}
sizeOfGrid = 16;
createGrid(sizeOfGrid)



// Add 16 divs
//or (let i = 1; i < 257; i++) {
//  const div = document.createElement('div');
//  creatediv.appendChild(div);
//}