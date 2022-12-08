const creatediv = document.querySelector('.container');

const makeGrid = (alotofGrids) => {
  for (let i = 0;  i < alotofGrids; i++) {
    const row = document.createElement('div')
    row.classList.add('gridwithrows')

    for (let r = 0; r < alotofGrids; r++) {
      const gridBox = document.createElement('div')
    }
  }
}




// Add 16 divs
//or (let i = 1; i < 257; i++) {
//  const div = document.createElement('div');
//  creatediv.appendChild(div);
//}