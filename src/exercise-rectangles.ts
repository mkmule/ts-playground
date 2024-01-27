// Part #1
const constructGrid = (inputText) => {
  return inputText.split(' ').map(line => line.split(''));
};

// Part #2
const printCoordinates = (value, coordinates) => {
  const prettyCoordinates = coordinates.map(coord => `(${coord[0]}, ${coord[1]})`).join(', ');
  console.log(`Letter: ${value}, Coordinates: ${prettyCoordinates}`);
};
const hasRectangle = (top, left, size, grid) => {
  const value = grid[top][left];

  const tentativeTopLeft = [top, left];
  const tentativeTopRight = [top, left + size];
  const tentativeBottomLeft = [top + size, left];
  const tentativeBottomRight = [top, left + size];

  const coordinates = [tentativeTopLeft, tentativeTopRight, tentativeBottomLeft, tentativeBottomRight];
  if (coordinates.every(coordinate => grid[coordinate[0]][coordinate[1]] === value)) {
    return coordinates;
  }

  return null;
};
const findSquares = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const maxSizeHorizontally = grid[i].length - j;
      const maxSizeVertically = grid.length - i;

      for (let size = 1; size < Math.min(maxSizeHorizontally, maxSizeVertically); size++) {
        const value = grid[i][j];
        const top = i;
        const left = j;
        const rectangleCoordinates = hasRectangle(top, left, size, grid);

        if (rectangleCoordinates) {
          printCoordinates(value, rectangleCoordinates);
        }
      }
    }
  }
};

// Part #3
const hasRectangleAdvanced = (top, left, stepOne, stepTwo, grid) => {
  const value = grid[top][left];

  const tentativeTopLeft = [top, left];
  const tentativeTopRight = [top + stepOne, left + stepTwo];
  const tentativeBottomLeft = [top + stepTwo, left - stepOne];
  const tentativeBottomRight = [tentativeBottomLeft[0] + stepOne, tentativeBottomLeft[1] + stepTwo];

  const coordinates = [tentativeTopLeft, tentativeTopRight, tentativeBottomLeft, tentativeBottomRight];
  if (coordinates.every(coordinate => (grid[coordinate[0]] || [])[coordinate[1]] === value)) {
    return coordinates;
  }

  return null;
};
const findSquaresAdvanced = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const maxSizeHorizontally = grid[i].length - j;
      const maxSizeVertically = grid.length - i;

      for (let sizeHorizontal = 1; sizeHorizontal <= maxSizeHorizontally; sizeHorizontal++) {
        for (let sizeVertical = 0; sizeVertical <= maxSizeVertically; sizeVertical++) {
          const value = grid[i][j];
          const top = i;
          const left = j;

          const rectangleCoordinates = hasRectangleAdvanced(top, left, sizeHorizontal, sizeVertical, grid);

          if (rectangleCoordinates) {
            printCoordinates(value, rectangleCoordinates);
          }
        }
      }
    }
  }
};

const input = 'ABCDCC BABECC ABEAAA BCDECA ADEDCE';
const grid = constructGrid(input);
console.log(grid);

findSquaresAdvanced(grid);
