/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/popup.js */ \"./src/scripts/popup.js\");\n/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\n\n\nconst canvasGame = document.getElementById(\"gameCanvas\");\nconst ctxGame = canvasGame.getContext(\"2d\");\ncanvasGame.width = 500;\ncanvasGame.height = 700;\n\n// const playerImage = new Image();\n// playerImage.src = \"./img/player.png\";\n\n// playerImage.onload = () => {\n//   ctxGame.drawImage(playerImage, 200, 600, 100, 100);\n// };\n\nconst player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](10, 10, canvasGame);\nplayer.draw();\ndocument.addEventListener(\"keydown\", event => {\n  player.update(event);\n});\nconst fieldRect = canvasGame.getBoundingClientRect(); //필드의 전체싸이즈와 포지션 알수있음\n\nfunction initGame() {\n  console.log(fieldRect);\n  addItem(\"money\", 10, \"img/coin.png\");\n}\nfunction addItem(className, count, imgPath) {\n  const x1 = 0;\n  const y1 = 0;\n  const x2 = fieldRect.width;\n  const y2 = fieldRect.height;\n  for (let i = 0; i < count; i++) {\n    const item = document.createElement(\"img\");\n    item.setAttribute(\"class\", className);\n    item.setAttribute(\"src\", imgPath);\n    item.style.position = \"absolute\";\n    const x = randomNumber(x1, x2); //x1, x2이 사이에 있는 아무숫자\n    const y = randomNumber(y1, y2);\n    item.style.left = `${x}px`;\n    item.style.top = `${y}px`;\n    canvasGame.appendChild(item); //need to search how to add object to canvas\n  }\n}\n\nfunction randomNumber(min, max) {\n  return Math.random() * (max - min) + min;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVDO0FBQ0U7QUFFekMsTUFBTUUsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUM7QUFDeEQsTUFBTUMsT0FBTyxHQUFHSCxVQUFVLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDM0NKLFVBQVUsQ0FBQ0ssS0FBSyxHQUFHLEdBQUc7QUFDdEJMLFVBQVUsQ0FBQ00sTUFBTSxHQUFHLEdBQUc7O0FBRXZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxJQUFJUiwwREFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUVDLFVBQVUsQ0FBQztBQUM3Q08sTUFBTSxDQUFDQyxJQUFJLEVBQUU7QUFDYlAsUUFBUSxDQUFDUSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUdDLEtBQUssSUFBSztFQUM5Q0gsTUFBTSxDQUFDSSxNQUFNLENBQUNELEtBQUssQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRixNQUFNRSxTQUFTLEdBQUdaLFVBQVUsQ0FBQ2EscUJBQXFCLEVBQUUsQ0FBQyxDQUFDOztBQUV0RCxTQUFTQyxRQUFRLEdBQUc7RUFDbEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixTQUFTLENBQUM7RUFDdEJLLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLGNBQWMsQ0FBQztBQUN0QztBQUVBLFNBQVNBLE9BQU8sQ0FBQ0MsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtFQUMxQyxNQUFNQyxFQUFFLEdBQUcsQ0FBQztFQUNaLE1BQU1DLEVBQUUsR0FBRyxDQUFDO0VBQ1osTUFBTUMsRUFBRSxHQUFHWCxTQUFTLENBQUNQLEtBQUs7RUFDMUIsTUFBTW1CLEVBQUUsR0FBR1osU0FBUyxDQUFDTixNQUFNO0VBQzNCLEtBQUssSUFBSW1CLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR04sS0FBSyxFQUFFTSxDQUFDLEVBQUUsRUFBRTtJQUM5QixNQUFNQyxJQUFJLEdBQUd6QixRQUFRLENBQUMwQixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDRCxJQUFJLENBQUNFLFlBQVksQ0FBQyxPQUFPLEVBQUVWLFNBQVMsQ0FBQztJQUNyQ1EsSUFBSSxDQUFDRSxZQUFZLENBQUMsS0FBSyxFQUFFUixPQUFPLENBQUM7SUFDakNNLElBQUksQ0FBQ0csS0FBSyxDQUFDQyxRQUFRLEdBQUcsVUFBVTtJQUNoQyxNQUFNQyxDQUFDLEdBQUdDLFlBQVksQ0FBQ1gsRUFBRSxFQUFFRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLE1BQU1VLENBQUMsR0FBR0QsWUFBWSxDQUFDVixFQUFFLEVBQUVFLEVBQUUsQ0FBQztJQUM5QkUsSUFBSSxDQUFDRyxLQUFLLENBQUNLLElBQUksR0FBSSxHQUFFSCxDQUFFLElBQUc7SUFDMUJMLElBQUksQ0FBQ0csS0FBSyxDQUFDTSxHQUFHLEdBQUksR0FBRUYsQ0FBRSxJQUFHO0lBQ3pCakMsVUFBVSxDQUFDb0MsV0FBVyxDQUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ2hDO0FBQ0Y7O0FBRUEsU0FBU00sWUFBWSxDQUFDSyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUM5QixPQUFPQyxJQUFJLENBQUNDLE1BQU0sRUFBRSxJQUFJRixHQUFHLEdBQUdELEdBQUcsQ0FBQyxHQUFHQSxHQUFHO0FBQzFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfdGVzdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3BVcCBmcm9tIFwiLi9zY3JpcHRzL3BvcHVwLmpzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3NjcmlwdHMvcGxheWVyLmpzXCI7XG5cbmNvbnN0IGNhbnZhc0dhbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVDYW52YXNcIik7XG5jb25zdCBjdHhHYW1lID0gY2FudmFzR2FtZS5nZXRDb250ZXh0KFwiMmRcIik7XG5jYW52YXNHYW1lLndpZHRoID0gNTAwO1xuY2FudmFzR2FtZS5oZWlnaHQgPSA3MDA7XG5cbi8vIGNvbnN0IHBsYXllckltYWdlID0gbmV3IEltYWdlKCk7XG4vLyBwbGF5ZXJJbWFnZS5zcmMgPSBcIi4vaW1nL3BsYXllci5wbmdcIjtcblxuLy8gcGxheWVySW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuLy8gICBjdHhHYW1lLmRyYXdJbWFnZShwbGF5ZXJJbWFnZSwgMjAwLCA2MDAsIDEwMCwgMTAwKTtcbi8vIH07XG5cbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoMTAsIDEwLCBjYW52YXNHYW1lKTtcbnBsYXllci5kcmF3KCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgcGxheWVyLnVwZGF0ZShldmVudCk7XG59KTtcblxuY29uc3QgZmllbGRSZWN0ID0gY2FudmFzR2FtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy/tlYTrk5zsnZgg7KCE7LK07Iu47J207KaI7JmAIO2PrOyngOyFmCDslYzsiJjsnojsnYxcblxuZnVuY3Rpb24gaW5pdEdhbWUoKSB7XG4gIGNvbnNvbGUubG9nKGZpZWxkUmVjdCk7XG4gIGFkZEl0ZW0oXCJtb25leVwiLCAxMCwgXCJpbWcvY29pbi5wbmdcIik7XG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW0oY2xhc3NOYW1lLCBjb3VudCwgaW1nUGF0aCkge1xuICBjb25zdCB4MSA9IDA7XG4gIGNvbnN0IHkxID0gMDtcbiAgY29uc3QgeDIgPSBmaWVsZFJlY3Qud2lkdGg7XG4gIGNvbnN0IHkyID0gZmllbGRSZWN0LmhlaWdodDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjbGFzc05hbWUpO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltZ1BhdGgpO1xuICAgIGl0ZW0uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgY29uc3QgeCA9IHJhbmRvbU51bWJlcih4MSwgeDIpOyAvL3gxLCB4MuydtCDsgqzsnbTsl5Ag7J6I64qUIOyVhOustOyIq+yekFxuICAgIGNvbnN0IHkgPSByYW5kb21OdW1iZXIoeTEsIHkyKTtcbiAgICBpdGVtLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICBpdGVtLnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuICAgIGNhbnZhc0dhbWUuYXBwZW5kQ2hpbGQoaXRlbSk7IC8vbmVlZCB0byBzZWFyY2ggaG93IHRvIGFkZCBvYmplY3QgdG8gY2FudmFzXG4gIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59XG4iXSwibmFtZXMiOlsiUG9wVXAiLCJQbGF5ZXIiLCJjYW52YXNHYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eEdhbWUiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJwbGF5ZXIiLCJkcmF3IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidXBkYXRlIiwiZmllbGRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5pdEdhbWUiLCJjb25zb2xlIiwibG9nIiwiYWRkSXRlbSIsImNsYXNzTmFtZSIsImNvdW50IiwiaW1nUGF0aCIsIngxIiwieTEiLCJ4MiIsInkyIiwiaSIsIml0ZW0iLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJwb3NpdGlvbiIsIngiLCJyYW5kb21OdW1iZXIiLCJ5IiwibGVmdCIsInRvcCIsImFwcGVuZENoaWxkIiwibWluIiwibWF4IiwiTWF0aCIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst LEFT_ARROW = 37;\nconst RIGHT_ARROW = 39;\nconst UP_ARROW = 38;\nconst DOWN_ARROW = 40;\nclass Player {\n  constructor(x, y, canvasGame) {\n    this.x = x;\n    this.y = y;\n    this.speed = 4;\n    this.maxWidth = canvasGame.width;\n    this.maxHeight = canvasGame.height;\n    this.canvasGame = canvasGame;\n  }\n  draw() {\n    const playerImage = new Image();\n    playerImage.src = \"./img/player.png\";\n    playerImage.onload = () => {\n      this.canvasGame.getContext(\"2d\").drawImage(playerImage, 200, 600, 100, 100);\n    };\n  }\n  update(e) {\n    console.log(e);\n    // if (keyIsPressed) {\n    //   if (keycode === LEFT_ARROW) {\n    //     this.x--;\n    //   } else if (keycode == RIGHT_ARROW) {\n    //     this.x++;\n    //   }if(keycode==UP_ARROW){\n    //     this.y--;\n    //   }else if(keycode== DOWN_ARROW){\n    //    this.y++;\n    //   }\n    // } if (this.y+(d/2)===height || this.y-(d/2)==0){\n    //     x=500;\n    //     y=700;\n    // }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFVBQVUsR0FBRyxFQUFFO0FBQ3JCLE1BQU1DLFdBQVcsR0FBRyxFQUFFO0FBQ3RCLE1BQU1DLFFBQVEsR0FBRyxFQUFFO0FBQ25CLE1BQU1DLFVBQVUsR0FBRyxFQUFFO0FBRXJCLE1BQU1DLE1BQU0sQ0FBQztFQUNYQyxXQUFXLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxVQUFVLEVBQUU7SUFDNUIsSUFBSSxDQUFDRixDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0UsS0FBSyxHQUFHLENBQUM7SUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0YsVUFBVSxDQUFDRyxLQUFLO0lBQ2hDLElBQUksQ0FBQ0MsU0FBUyxHQUFHSixVQUFVLENBQUNLLE1BQU07SUFDbEMsSUFBSSxDQUFDTCxVQUFVLEdBQUdBLFVBQVU7RUFDOUI7RUFFQU0sSUFBSSxHQUFHO0lBQ0wsTUFBTUMsV0FBVyxHQUFHLElBQUlDLEtBQUssRUFBRTtJQUMvQkQsV0FBVyxDQUFDRSxHQUFHLEdBQUcsa0JBQWtCO0lBRXBDRixXQUFXLENBQUNHLE1BQU0sR0FBRyxNQUFNO01BQ3pCLElBQUksQ0FBQ1YsVUFBVSxDQUNaVyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQ2hCQyxTQUFTLENBQUNMLFdBQVcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDL0MsQ0FBQztFQUNIO0VBRUFNLE1BQU0sQ0FBQ0MsQ0FBQyxFQUFFO0lBQ1JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDLENBQUM7SUFDZDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0Y7QUFDRjs7QUFFQSwrREFBZWxCLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc190ZXN0Ly4vc3JjL3NjcmlwdHMvcGxheWVyLmpzPzY0NzEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTEVGVF9BUlJPVyA9IDM3O1xuY29uc3QgUklHSFRfQVJST1cgPSAzOTtcbmNvbnN0IFVQX0FSUk9XID0gMzg7XG5jb25zdCBET1dOX0FSUk9XID0gNDA7XG5cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIGNhbnZhc0dhbWUpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5zcGVlZCA9IDQ7XG4gICAgdGhpcy5tYXhXaWR0aCA9IGNhbnZhc0dhbWUud2lkdGg7XG4gICAgdGhpcy5tYXhIZWlnaHQgPSBjYW52YXNHYW1lLmhlaWdodDtcbiAgICB0aGlzLmNhbnZhc0dhbWUgPSBjYW52YXNHYW1lO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCBwbGF5ZXJJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIHBsYXllckltYWdlLnNyYyA9IFwiLi9pbWcvcGxheWVyLnBuZ1wiO1xuXG4gICAgcGxheWVySW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYW52YXNHYW1lXG4gICAgICAgIC5nZXRDb250ZXh0KFwiMmRcIilcbiAgICAgICAgLmRyYXdJbWFnZShwbGF5ZXJJbWFnZSwgMjAwLCA2MDAsIDEwMCwgMTAwKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAvLyBpZiAoa2V5SXNQcmVzc2VkKSB7XG4gICAgLy8gICBpZiAoa2V5Y29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgIC8vICAgICB0aGlzLngtLTtcbiAgICAvLyAgIH0gZWxzZSBpZiAoa2V5Y29kZSA9PSBSSUdIVF9BUlJPVykge1xuICAgIC8vICAgICB0aGlzLngrKztcbiAgICAvLyAgIH1pZihrZXljb2RlPT1VUF9BUlJPVyl7XG4gICAgLy8gICAgIHRoaXMueS0tO1xuICAgIC8vICAgfWVsc2UgaWYoa2V5Y29kZT09IERPV05fQVJST1cpe1xuICAgIC8vICAgIHRoaXMueSsrO1xuICAgIC8vICAgfVxuICAgIC8vIH0gaWYgKHRoaXMueSsoZC8yKT09PWhlaWdodCB8fCB0aGlzLnktKGQvMik9PTApe1xuICAgIC8vICAgICB4PTUwMDtcbiAgICAvLyAgICAgeT03MDA7XG4gICAgLy8gfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdLCJuYW1lcyI6WyJMRUZUX0FSUk9XIiwiUklHSFRfQVJST1ciLCJVUF9BUlJPVyIsIkRPV05fQVJST1ciLCJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiY2FudmFzR2FtZSIsInNwZWVkIiwibWF4V2lkdGgiLCJ3aWR0aCIsIm1heEhlaWdodCIsImhlaWdodCIsImRyYXciLCJwbGF5ZXJJbWFnZSIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsInVwZGF0ZSIsImUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/popup.js":
/*!******************************!*\
  !*** ./src/scripts/popup.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass PopUp {\n  constructor() {\n    this.PopUp = document.querySelector(\".pop-up\");\n    this.PopUpText = document.querySelector(\".pop-up-message\");\n    this.popUpRefresh = document.querySelector(\".pop-up-referesh\");\n    this.popUpRefresh.addEventListener(\"click\", () => {\n      this.onclick && this.onClick(); //온클릭이 트루면 온클릭을 호출\n      hide();\n    });\n  }\n\n  //버튼이 클릭되면 온클릭호출\n\n  setClickListener(onClick) {\n    this.onClick = onClick;\n  }\n  hide() {\n    this.popUpRefresh.classList.add(\"pop-up--hide\");\n  }\n  showWithText(text) {\n    this.PopUpText.classList.remove(\"pop-up-hide\");\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PopUp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wb3B1cC5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSyxDQUFDO0VBQ1ZDLFdBQVcsR0FBRztJQUNaLElBQUksQ0FBQ0QsS0FBSyxHQUFHRSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDOUMsSUFBSSxDQUFDQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0lBQzFELElBQUksQ0FBQ0UsWUFBWSxHQUFHSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztJQUM5RCxJQUFJLENBQUNFLFlBQVksQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDaEQsSUFBSSxDQUFDQyxPQUFPLElBQUksSUFBSSxDQUFDQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO01BQ2hDQyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7RUFDSjs7RUFFQTs7RUFFQUMsZ0JBQWdCLENBQUNGLE9BQU8sRUFBRTtJQUN4QixJQUFJLENBQUNBLE9BQU8sR0FBR0EsT0FBTztFQUN4QjtFQUVBQyxJQUFJLEdBQUc7SUFDTCxJQUFJLENBQUNKLFlBQVksQ0FBQ00sU0FBUyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBQ2pEO0VBRUFDLFlBQVksQ0FBQ0MsSUFBSSxFQUFFO0lBQ2pCLElBQUksQ0FBQ1YsU0FBUyxDQUFDTyxTQUFTLENBQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUM7RUFDaEQ7QUFDRjtBQUVBLCtEQUFlZixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfdGVzdC8uL3NyYy9zY3JpcHRzL3BvcHVwLmpzPzg4YzQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUG9wVXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLlBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3AtdXBcIik7XG4gICAgdGhpcy5Qb3BVcFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcC11cC1tZXNzYWdlXCIpO1xuICAgIHRoaXMucG9wVXBSZWZyZXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3AtdXAtcmVmZXJlc2hcIik7XG4gICAgdGhpcy5wb3BVcFJlZnJlc2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMub25jbGljayAmJiB0aGlzLm9uQ2xpY2soKTsgLy/smKjtgbTrpq3snbQg7Yq466Oo66m0IOyYqO2BtOumreydhCDtmLjstpxcbiAgICAgIGhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8v67KE7Yq87J20IO2BtOumreuQmOuptCDsmKjtgbTrpq3tmLjstpxcblxuICBzZXRDbGlja0xpc3RlbmVyKG9uQ2xpY2spIHtcbiAgICB0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLnBvcFVwUmVmcmVzaC5jbGFzc0xpc3QuYWRkKFwicG9wLXVwLS1oaWRlXCIpO1xuICB9XG5cbiAgc2hvd1dpdGhUZXh0KHRleHQpIHtcbiAgICB0aGlzLlBvcFVwVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wLXVwLWhpZGVcIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wVXA7Il0sIm5hbWVzIjpbIlBvcFVwIiwiY29uc3RydWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJQb3BVcFRleHQiLCJwb3BVcFJlZnJlc2giLCJhZGRFdmVudExpc3RlbmVyIiwib25jbGljayIsIm9uQ2xpY2siLCJoaWRlIiwic2V0Q2xpY2tMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInNob3dXaXRoVGV4dCIsInRleHQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/popup.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc190ZXN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;