
const h2 = document.getElementsByTagName("h2")[0]
const superEventHandler = {
  colorOfEvent: {
    _mouseover: colors[0],
    _mouseleave: colors[1],
    _resize: colors[2],
    _rightclick: colors[3]
  },

  txt: {
    _mouseover: "The mouse is here!",
    _mouseleave: "The mouse is gone",
    _resize: "You just resized",
    _rightclick: "That was a right click"
  },

  mouseOverEvent: function () {
    h2.style.color = superEventHandler.colorOfEvent._mouseover;
    h2.textContent = superEventHandler.txt._mouseover;
  },
  mouseLeaveEvent: function () {
    h2.style.color = superEventHandler.colorOfEvent._mouseleave;
    h2.textContent = superEventHandler.txt._mouseleave;
  },
  resizeEvent: function () {
    h2.style.color = superEventHandler.colorOfEvent._resize;
    h2.textContent = superEventHandler.txt._resize;
  },
  rightClickEvent: function () {
    h2.style.color = superEventHandler.colorOfEvent._rightclick;
    h2.textContent = superEventHandler.txt._rightclick;
  },

  eventhandler: function () {
    h2.addEventListener("mouseover", this.mouseOverEvent);
    h2.addEventListener("mouseleave", this.mouseLeaveEvent);
    addEventListener("resize", this.resizeEvent);
    addEventListener("contextmenu", this.rightClickEvent);
    console.log(this)
  }
};

superEventHandler.eventhandler();
