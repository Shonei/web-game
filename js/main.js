window.onload = function () {
  let c = document.getElementById("myCanvas");
  c.onclick = function (event) {
    console.log(Math.floor(event.layerX / 100), Math.floor(event.layerY / 50));
  }

  // block size
  let w = 100
  let h = 50

  // grid size
  let x = 5
  let y = 3
  let g = new Array(x)

  // Initialize grid
  for (let i = 0; i < x; i++) {
    g[i] = new Array(y)
  }


  let offset = {x: 50, y: 70}
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      g[i][j] = {pos: {x: (i * w) + offset.x + (i * 3), y: (j * h) + offset.y + (j * 3)}, size: {w: w, h: h}}
    }
  }
  console.log(g)

  let ctx = c.getContext("2d");

  ctx.drawGrid = function (g) {
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        ctx.drawBox(g[i][j].pos, g[i][j].size)
      }
    }
  }

  ctx.drawBox = function (p, d) {
    ctx.strokeStyle = "rgb(75,36,125)";
    ctx.fillStyle = "rgb(129,86,186)";
    ctx.beginPath();
    ctx.roundRect(p.x, p.y, d.w, d.h, 5);
    ctx.fill();
    ctx.stroke();
  }

  ctx.drawGrid(g)
};
