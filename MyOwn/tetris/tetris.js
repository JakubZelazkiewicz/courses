class Well {
  constructor() {
    var x, y, row, cell;
    this.el = document.getElementById('well');
    for (y = 0; y < 20; y++) {
      row = document.createElement('div');
      for (x = 0; x < 10; x++) {
        cell = document.createElement('div');
        row.appendChild(cell);
      }
    }
  }

  Well.prototype.setCell = fuction(x, y, state) {
    if (y >= && y < this.width && x >= && x <this.height)
    this.el.children[y].children[x].className = (state ? 'set' : '');
   };
}

var well = new Well();
