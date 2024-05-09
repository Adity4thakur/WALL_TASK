const computeButton = document.getElementById('create-wall-button');
const resetButton = document.getElementById('reset-button');
const matrixContainer = document.getElementById('matrix-container');
const noOfWallsInput = document.getElementById('no-of-walls');
const heightOfWallsInput = document.getElementById('height-of-walls');
const visibleButton = document.getElementById('visible-button');
const visibleWallsContainer = document.getElementById('visible-walls-container');
const visibleFromLeft = 0;
const visibleFromRight = 0;

let createdWallHeights = [];

computeButton.addEventListener('click', () => {
  const noOfWalls = document.getElementById('no-of-walls').value;
  const heightOfWalls = document.getElementById('height-of-walls').value.split('#').map(Number).filter(height => !isNaN(height));

  matrixContainer.innerHTML = ''; 
  createdWallHeights = heightOfWalls;

  for (let column = 0; column < noOfWalls; column++) {
    const columnContainer = document.createElement('div');
    columnContainer.classList.add('column');

    const wallHeight = heightOfWalls[column] || 0;

    
    const boxCountLabel = document.createElement('div');
    boxCountLabel.classList.add('box-count-label');
    boxCountLabel.textContent = `${wallHeight}`;
    columnContainer.appendChild(boxCountLabel);
    

    const boxContainer = document.createElement('div');
    boxContainer.classList.add('box-container');
    for (let row = 0; row < wallHeight; row++) {
      const box = document.createElement('div');
      box.classList.add('box');
      boxContainer.appendChild(box);
    }
    columnContainer.appendChild(boxContainer);

    // Create wall label
    const wallLabel = document.createElement('div');
    wallLabel.classList.add('wall-label');
    wallLabel.textContent = `Wall${column + 1}`;
    columnContainer.appendChild(wallLabel);

    matrixContainer.appendChild(columnContainer);
  }
});

resetButton.addEventListener('click', () => {
  noOfWallsInput.value = '';
  heightOfWallsInput.value = '';
  matrixContainer.innerHTML = '';
  const visibleFromLeft = 0;
    const visibleFromRight = 0;

    const leftObserver = document.getElementById('left-observer');
      const rightObserver = document.getElementById('right-observer');
      leftObserver.textContent = `Observer-1 can see :: ${visibleFromLeft}`;
      rightObserver.textContent = `Observer-2 can see :: ${visibleFromRight}`;

      leftObserver.style.color = 'black'; 
      rightObserver.style.color = "black";
  createdWallHeights = [];
});

// visibleButton.addEventListener('click', () => {
//     const visibleFromLeft = countVisibleBuildingsFromLeft(createdWallHeights);
//     const visibleFromRight = countVisibleBuildingsFromRight(createdWallHeights);
  
//     const leftObserver = document.getElementById('left-observer');
//       const rightObserver = document.getElementById('right-observer');
//       leftObserver.textContent = `Observer-1 can see :: ${visibleFromLeft}`;
//       rightObserver.textContent = `Observer-2 can see :: ${visibleFromRight}`;

//       leftObserver.style.color = 'green'; 
//       rightObserver.style.color = "green"; 



//   });
visibleButton.addEventListener('click', () => {
  const visibleFromLeft = countVisibleBuildingsFromLeft(createdWallHeights);
  const visibleFromRight = countVisibleBuildingsFromRight(createdWallHeights);

  const leftObserverValue = document.getElementById('left-observer-value');
  const rightObserverValue = document.getElementById('right-observer-value');

  leftObserverValue.textContent = visibleFromLeft;
  leftObserverValue.style.fontSize = '2rem'; // Increase the font size of the variable

  rightObserverValue.textContent = visibleFromRight;
  rightObserverValue.style.fontSize = '2rem';

  //const leftObserver = document.getElementById('left-observer');
  leftObserverValue.style.color = 'green';
  rightObserverValue.style.color = "green";
});


  function countVisibleBuildingsFromLeft(heights) { // 
    let maxHeight = 0;
    let visibleBuildings = 0;
  
    for (let height of heights) {
      if (height > maxHeight) {
        maxHeight = height;
        visibleBuildings++;
      }
    }
  
    return visibleBuildings;
  }
  
  function countVisibleBuildingsFromRight(heights) {
    let maxHeight = 0;
    let visibleBuildings = 0;
  
    for (let i = heights.length - 1; i >= 0; i--) {
      const height = heights[i];
  
      if (height > maxHeight) {
        maxHeight = height;
        visibleBuildings++;
      }
    }
  
    return visibleBuildings;
  }

