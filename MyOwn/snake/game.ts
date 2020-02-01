//INICJALIZACJA - 1
const areaEmpty: any = [
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
];
const areaWithSnake: any = [
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
];
//INICJALIZACJA - 2
const snake = [
  { x: 0, y: 2 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },
  { x: 3, y: 2 }
];
//INICJALIZACJA - 3
async function pushSnake(snakeToPush) {
  let snakeLength = snakeToPush.length;
  for (let i = 0; i < snakeLength; i++) {
    areaWithSnake[snake[i].x][snake[i].y] = 'O';
  }

  console.clear();
  document.getElementById('target-id0').innerHTML = areaWithSnake[0];
  document.getElementById('target-id1').innerHTML = areaWithSnake[1];
  document.getElementById('target-id2').innerHTML = areaWithSnake[2];
  document.getElementById('target-id3').innerHTML = areaWithSnake[3];
  document.getElementById('target-id4').innerHTML = areaWithSnake[4];
  document.getElementById('target-id5').innerHTML = areaWithSnake[5];
  document.getElementById('target-id6').innerHTML = areaWithSnake[6];
  document.getElementById('target-id7').innerHTML = areaWithSnake[7];
  document.getElementById('target-id8').innerHTML = areaWithSnake[8];
  document.getElementById('target-id9').innerHTML = areaWithSnake[9];
  console.log(snakeLength + ' dlugosc weza');
  areaWithSnake[snakeToPush[0].x][snakeToPush[0].y] = 'x';
}

let vector;

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37:
      vector = { x: 0, y: -1 };
      break;
    case 38:
      vector = { x: -1, y: 0 };
      break;
    case 39:
      vector = { x: 0, y: +1 };

      break;
    case 40:
      // alert('Down key pressed');
      vector = { x: 1, y: 0 };
      break;
  }

  //INICJALIZACJA - 3, 1WYWOLANI WEZA
  function moveDown(vector) {
    snake.shift();
    let snakeLength = snake.length;
    let snakeX = snake[snakeLength - 1].x;
    let snakeY = snake[snakeLength - 1].y;
    if (vector.x === 0 && vector.y === 0) {
      snake.push({ x: snakeX + 1, y: snakeY + 1 });
    } else {
      snake.push({ x: snakeX + vector.x, y: snakeY + vector.y });
    }
    pushSnake(snake);
  }

  function startGame() {
    let start = setInterval(moveDown, 3000);
  }

  startGame();
  moveDown(vector);
};
