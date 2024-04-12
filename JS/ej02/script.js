const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let index = 0;

setInterval(() => {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}, 1000);