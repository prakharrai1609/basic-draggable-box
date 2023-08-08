const app = document.getElementById('app');
const selectionBox = document.getElementById('selection-box');

let isDragging = false;
let startX, startY, endX, endY;

app.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - app.getBoundingClientRect().left;
  startY = e.clientY - app.getBoundingClientRect().top;
  selectionBox.style.display = 'block';
  selectionBox.style.left = startX + 'px';
  selectionBox.style.top = startY + 'px';
});

app.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  endX = e.clientX - app.getBoundingClientRect().left;
  endY = e.clientY - app.getBoundingClientRect().top;

  selectionBox.style.width = Math.abs(endX - startX) + 'px';
  selectionBox.style.height = Math.abs(endY - startY) + 'px';
  selectionBox.style.left = Math.min(endX, startX) + 'px';
  selectionBox.style.top = Math.min(endY, startY) + 'px';
});

app.addEventListener('mouseup', () => {
  isDragging = false;
  selectionBox.style.display = 'none';
  console.log(`Start Point: (${startX}, ${startY}), End Point: (${endX}, ${endY})`);
});
