let angle = 0;
let circleSize = 50;
let flipX = 1; // 控制文字左右翻轉

function setup() {
  createCanvas(windowWidth,windowHeight);
  textSize(100);
  textAlign(CENTER, CENTER);
  noFill();
}

function draw() {
  background(220);
  
  // 繪製背景網格
  drawGrid();
  
  // 繪製背景圓形圖案
  drawBackground();
  
  // 繪製旋轉和翻轉的文字
  drawAnimatedText();
  
  // 更新動畫參數
  angle += 0.02;
  flipX = sin(angle * 0.5); // 控制文字左右翻轉
}

// 繪製背景網格
function drawGrid() {
  stroke(100, 150, 255);
  strokeWeight(1);
  
  // 繪製垂直線
  for (let x = 0; x <= width; x += circleSize) {
    line(x, 0, x, height);
  }
  
  // 繪製水平線
  for (let y = 0; y <= height; y += circleSize) {
    line(0, y, width, y);
  }
}

// 繪製背景圓形圖案
function drawBackground() {
  strokeWeight(2);
  stroke(100, 150, 255);
  
  let spacing = circleSize;
  
  for (let y = 0; y < height + spacing; y += spacing) {
    for (let x = 0; x < width + spacing; x += spacing) {
      // 計算滑鼠距離影響的圓形大小
      let d = dist(mouseX, mouseY, x, y);
      let xEffect = map(abs(x - mouseX), 0, width, 1.5, 0.5);
      let yEffect = map(abs(y - mouseY), 0, height, 1.5, 0.5);
      let sizeMultiplier = xEffect * yEffect;
      
      // 繪製主要圓形圖案
      let size = circleSize * sizeMultiplier;
      circle(x, y, size);
      
      // 繪製裝飾性小圓
      let smallSize = size * 0.3;
      circle(x, y, smallSize);
      
      // 繪製連接線
      line(x - size/2, y, x + size/2, y);
      line(x, y - size/2, x, y + size/2);
    }
  }
}

// 繪製動畫文字
function drawAnimatedText() {
  push();
  translate(width/2, height/2);
  rotate(angle);
  scale(flipX, 1); // 左右翻轉
  
  // 文字樣式
  fill("#e4c1f9");  // 紫色文字
  stroke(255);
  strokeWeight(3);
  
  // 繪製文字
  text("FINE", 0, 0);
  
  pop();
}
