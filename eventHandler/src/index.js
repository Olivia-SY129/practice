// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

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
