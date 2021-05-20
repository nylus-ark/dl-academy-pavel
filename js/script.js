// .chrome styling Vanilla JS

document.getElementById("myinput").oninput = function() {
  this.style.background = 'linear-gradient(to right, #C29974 0%, #C29974 ' + this.value + '%, #666 ' + this.value + '%, #666 100%)'
};
