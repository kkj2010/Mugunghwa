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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player.js */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_robot_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/robot.js */ \"./src/scripts/robot.js\");\n\n\nconst canvasGame = document.getElementById(\"gameCanvas\");\nconst ctxGame = canvasGame.getContext(\"2d\");\ncanvasGame.width = 500;\ncanvasGame.height = 700;\n\n// let player= new Player()\n// new GameView(ctx, \nconst backgroundImage = new Image();\nbackgroundImage.src = \"./img/background.png\";\nbackgroundImage.onload = () => {\n  ctxGame.drawImage(backgroundImage, 0, 0);\n};\nconst robot = new _scripts_robot_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](185, 27, canvasGame);\nrobot.draw();\nconst player = new _scripts_player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](225, 640, canvasGame);\nplayer.draw();\nplayer.playerListener();\nwindow.addEventListener(\"keydown\", event => {\n  player.update(event);\n  // console.log(player);\n});\n\nlet started = false;\nlet score = 0;\nlet timer = undefined;\nconst MONEY_COUNT = 7;\nconst GAME_DURATION_SEC = 20;\nconst MONEY_SIZE = 100;\nconst gameBtn = document.querySelector(\".game_button\");\nconst gameTimer = document.querySelector(\".timer_button\");\nconst gameScore = document.querySelector(\".reward_button\");\nconst popUp = document.querySelector(\".pop-up\");\nconst popUpText = document.querySelector(\".pop-up-message\");\nconst popUpRefresh = document.querySelector(\".pop-up-refresh\");\nconst fieldRect = canvasGame.getBoundingClientRect(); //필드의 전체싸이즈와 포지션 알수있음\n\ngameBtn.addEventListener(\"click\", () => {\n  if (started) {\n    stopGame();\n  } else {\n    startGame();\n  }\n  started = !started;\n});\npopUpRefresh.addEventListener(\"click\", () => {\n  startGame();\n  hidePopUp();\n});\nfunction startGame() {\n  initGame();\n  showStopbutton();\n  showTimerAndScore();\n  startGameTimer();\n}\nfunction stopGame() {\n  stopGameTimer();\n  hideGameButton();\n  showPopUp(\"REPLAY?\");\n}\nfunction finishGame(win) {\n  hideGameButton();\n  showPopUp(win ? \"YOU WIN\" : \"YOU LOST\");\n}\nfunction animateRobot() {}\nfunction drawBack() {\n  setInterval(robot.drawBack(), Math.random() * (3000 - 1000) + 1000);\n}\nfunction drawFront() {\n  setInterval(robot.draw(), Math.random() * (3000 - 1000) + 1000);\n}\nfunction showStopbutton() {\n  let icon = gameBtn.querySelector(\".fas\");\n  icon.classList.add(\"fa-stop\");\n  icon.classList.remove(\"fa-play\");\n}\nfunction hideGameButton() {\n  gameBtn.style.visibility = \"hidden\";\n}\nfunction showGameButton() {\n  gameBtn.style.visibility = \"visible\";\n}\nfunction showTimerAndScore() {\n  gameTimer.style.visibility = \"visible\";\n  gameScore.style.visibility = \"visible\";\n}\nfunction startGameTimer() {\n  let remainingTimeSec = GAME_DURATION_SEC;\n  updateTimerText(remainingTimeSec);\n  timer = setInterval(() => {\n    //setInterval:시간 간격마다 함수 실행\n    if (remainingTimeSec <= 0) {\n      clearInterval(timer); //설정된 함수종료\n      finishGame();\n      return; //아래코드 실행 하면안됨.\n    }\n\n    updateTimerText(--remainingTimeSec);\n  }, 1000);\n}\nfunction stopGameTimer() {\n  clearInterval(timer);\n}\nfunction showPopUp(text) {\n  popUpText.innerText = text;\n  popUp.classList.remove(\"pop-up-hide\");\n}\nfunction hidePopUp() {\n  popUp.classList.add(\"pop-up-hide\");\n}\nfunction updateTimerText(sec) {\n  const minutes = Math.floor(sec / 60);\n  const seconds = sec % 60;\n  gameTimer.innerText = `${minutes}:${seconds}`;\n}\nfunction initGame() {\n  //reset timer // show up character in original position\n  ctxGame.clearRect(0, 0, 700, 500);\n  ctxGame.drawImage(backgroundImage, 0, 0);\n  showGameButton();\n  gameScore.innerText = MONEY_COUNT;\n  addItem(\"money\", MONEY_COUNT, \"img/coin.png\");\n  player.draw();\n  robot.draw();\n}\nfunction randomNumber(min, max) {\n  return Math.random() * (max - min) + min;\n}\nfunction addItem(className, count, imgPath) {\n  // ctxGame.clearRect(0, 0, 700, 500);\n  backgroundImage.src = \"./img/background.png\";\n  backgroundImage.onload = () => {\n    ctxGame.drawImage(backgroundImage, 0, 0);\n  };\n  const x1 = 0;\n  const y1 = 0;\n  const x2 = fieldRect.width - MONEY_SIZE;\n  const y2 = fieldRect.height - MONEY_SIZE;\n  for (let i = 0; i < count; i++) {\n    const item = document.createElement(\"img\");\n    item.setAttribute(\"class\", className);\n    item.setAttribute(\"src\", imgPath);\n    item.style.position = \"absolute\"; //기본 static이라서 바꾸기.\n    const x = randomNumber(x1, x2); //x1, x2이 사이에 있는 아무숫자\n    const y = Math.max(200, randomNumber(y1, y2));\n    item.style.left = `${x}px`;\n    item.style.top = `${y}px`;\n    item.onload = () => {\n      ctxGame.drawImage(item, x, y, 30, 30);\n    };\n  }\n}\n\n// function playerCollision(){\n//   if (!started){\n//     return\n//   }\n//   //if collision between player & coin\n//     coin.remove();\n//     score++\n//     updateScoreBoard()\n// }\n\n// function updateScoreBoard(){\n//   gameScore.innerText= MONEY_COUNT- score;\n// }\n\n//lose, win, sing audio, pause audio, kill audio,//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNNLEVBQUUsRUFBRUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxNQUFNUSxDQUFDLEdBQUdyQyxJQUFJLENBQUN1QixHQUFHLENBQUMsR0FBRyxFQUFFRixZQUFZLENBQUNPLEVBQUUsRUFBRUUsRUFBRSxDQUFDLENBQUM7SUFDN0NFLElBQUksQ0FBQ3pCLEtBQUssQ0FBQytCLElBQUksR0FBSSxHQUFFRixDQUFFLElBQUc7SUFDMUJKLElBQUksQ0FBQ3pCLEtBQUssQ0FBQ2dDLEdBQUcsR0FBSSxHQUFFRixDQUFFLElBQUc7SUFDekJMLElBQUksQ0FBQ3pFLE1BQU0sR0FBRyxNQUFNO01BQ2xCUCxPQUFPLENBQUNRLFNBQVMsQ0FBQ3dFLElBQUksRUFBRUksQ0FBQyxFQUFFQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0VBQ0g7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfdGVzdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vc2NyaXB0cy9wbGF5ZXIuanNcIjtcbmltcG9ydCBSb2JvdCBmcm9tIFwiLi9zY3JpcHRzL3JvYm90LmpzXCI7XG5cblxuXG5jb25zdCBjYW52YXNHYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lQ2FudmFzXCIpO1xuY29uc3QgY3R4R2FtZSA9IGNhbnZhc0dhbWUuZ2V0Q29udGV4dChcIjJkXCIpO1xuY2FudmFzR2FtZS53aWR0aCA9IDUwMDtcbmNhbnZhc0dhbWUuaGVpZ2h0ID0gNzAwO1xuXG4vLyBsZXQgcGxheWVyPSBuZXcgUGxheWVyKClcbi8vIG5ldyBHYW1lVmlldyhjdHgsIFxuY29uc3QgYmFja2dyb3VuZEltYWdlID0gbmV3IEltYWdlKCk7XG5iYWNrZ3JvdW5kSW1hZ2Uuc3JjID0gXCIuL2ltZy9iYWNrZ3JvdW5kLnBuZ1wiO1xuYmFja2dyb3VuZEltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgY3R4R2FtZS5kcmF3SW1hZ2UoYmFja2dyb3VuZEltYWdlLCAwLCAwKTtcbn07XG5cbmNvbnN0IHJvYm90ID0gbmV3IFJvYm90KDE4NSwgMjcsIGNhbnZhc0dhbWUpO1xucm9ib3QuZHJhdygpO1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKDIyNSwgNjQwLCBjYW52YXNHYW1lKTtcbnBsYXllci5kcmF3KCk7XG5wbGF5ZXIucGxheWVyTGlzdGVuZXIoKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICBwbGF5ZXIudXBkYXRlKGV2ZW50KTtcbiAgLy8gY29uc29sZS5sb2cocGxheWVyKTtcbn0pO1xuXG5sZXQgc3RhcnRlZCA9IGZhbHNlO1xubGV0IHNjb3JlID0gMDtcbmxldCB0aW1lciA9IHVuZGVmaW5lZDtcbmNvbnN0IE1PTkVZX0NPVU5UID0gNztcbmNvbnN0IEdBTUVfRFVSQVRJT05fU0VDID0gMjA7XG5jb25zdCBNT05FWV9TSVpFID0gMTAwO1xuXG5jb25zdCBnYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX2J1dHRvblwiKTtcbmNvbnN0IGdhbWVUaW1lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZXJfYnV0dG9uXCIpO1xuY29uc3QgZ2FtZVNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXdhcmRfYnV0dG9uXCIpO1xuY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcC11cFwiKTtcbmNvbnN0IHBvcFVwVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwLW1lc3NhZ2VcIik7XG5jb25zdCBwb3BVcFJlZnJlc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcC11cC1yZWZyZXNoXCIpO1xuY29uc3QgZmllbGRSZWN0ID0gY2FudmFzR2FtZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsgLy/tlYTrk5zsnZgg7KCE7LK07Iu47J207KaI7JmAIO2PrOyngOyFmCDslYzsiJjsnojsnYxcblxuZ2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoc3RhcnRlZCkge1xuICAgIHN0b3BHYW1lKCk7XG4gIH0gZWxzZSB7XG4gICAgc3RhcnRHYW1lKCk7XG4gIH1cbiAgc3RhcnRlZCA9ICFzdGFydGVkO1xufSk7XG5cbnBvcFVwUmVmcmVzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdGFydEdhbWUoKTtcbiAgaGlkZVBvcFVwKCk7XG59KTtcblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBpbml0R2FtZSgpO1xuICBzaG93U3RvcGJ1dHRvbigpO1xuICBzaG93VGltZXJBbmRTY29yZSgpO1xuICBzdGFydEdhbWVUaW1lcigpO1xufVxuXG5mdW5jdGlvbiBzdG9wR2FtZSgpIHtcbiAgc3RvcEdhbWVUaW1lcigpO1xuICBoaWRlR2FtZUJ1dHRvbigpO1xuICBzaG93UG9wVXAoXCJSRVBMQVk/XCIpO1xufVxuXG5mdW5jdGlvbiBmaW5pc2hHYW1lKHdpbikge1xuICBoaWRlR2FtZUJ1dHRvbigpO1xuICBzaG93UG9wVXAod2luID8gXCJZT1UgV0lOXCIgOiBcIllPVSBMT1NUXCIpO1xufVxuXG5mdW5jdGlvbiBhbmltYXRlUm9ib3QoKSB7XG5cbn1cblxuZnVuY3Rpb24gZHJhd0JhY2soKXtcbiAgc2V0SW50ZXJ2YWwocm9ib3QuZHJhd0JhY2soKSwgTWF0aC5yYW5kb20oKSooMzAwMC0xMDAwKSsxMDAwKTtcbn1cblxuZnVuY3Rpb24gZHJhd0Zyb250KCl7XG4gIHNldEludGVydmFsKHJvYm90LmRyYXcoKSwgTWF0aC5yYW5kb20oKSooMzAwMC0xMDAwKSsxMDAwKTtcbn1cblxuZnVuY3Rpb24gc2hvd1N0b3BidXR0b24oKSB7XG4gIGxldCBpY29uID0gZ2FtZUJ0bi5xdWVyeVNlbGVjdG9yKFwiLmZhc1wiKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc3RvcFwiKTtcbiAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtcGxheVwiKTtcbn1cblxuZnVuY3Rpb24gaGlkZUdhbWVCdXR0b24oKSB7XG4gIGdhbWVCdG4uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG59XG5cbmZ1bmN0aW9uIHNob3dHYW1lQnV0dG9uKCkge1xuICBnYW1lQnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbn1cblxuZnVuY3Rpb24gc2hvd1RpbWVyQW5kU2NvcmUoKSB7XG4gIGdhbWVUaW1lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIGdhbWVTY29yZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZVRpbWVyKCkge1xuICBsZXQgcmVtYWluaW5nVGltZVNlYyA9IEdBTUVfRFVSQVRJT05fU0VDO1xuICB1cGRhdGVUaW1lclRleHQocmVtYWluaW5nVGltZVNlYyk7XG4gIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIC8vc2V0SW50ZXJ2YWw67Iuc6rCEIOqwhOqyqeuniOuLpCDtlajsiJgg7Iuk7ZaJXG4gICAgaWYgKHJlbWFpbmluZ1RpbWVTZWMgPD0gMCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7IC8v7ISk7KCV65CcIO2VqOyImOyiheujjFxuICAgICAgZmluaXNoR2FtZSgpO1xuICAgICAgcmV0dXJuOyAvL+yVhOuemOy9lOuTnCDsi6Ttlokg7ZWY66m07JWI65CoLlxuICAgIH1cbiAgICB1cGRhdGVUaW1lclRleHQoLS1yZW1haW5pbmdUaW1lU2VjKTtcbiAgfSwgMTAwMCk7XG59XG5cbmZ1bmN0aW9uIHN0b3BHYW1lVGltZXIoKSB7XG4gIGNsZWFySW50ZXJ2YWwodGltZXIpO1xufVxuXG5mdW5jdGlvbiBzaG93UG9wVXAodGV4dCkge1xuICBwb3BVcFRleHQuaW5uZXJUZXh0ID0gdGV4dDtcbiAgcG9wVXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcC11cC1oaWRlXCIpO1xufVxuXG5mdW5jdGlvbiBoaWRlUG9wVXAoKSB7XG4gIHBvcFVwLmNsYXNzTGlzdC5hZGQoXCJwb3AtdXAtaGlkZVwiKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGltZXJUZXh0KHNlYykge1xuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcihzZWMgLyA2MCk7XG4gIGNvbnN0IHNlY29uZHMgPSBzZWMgJSA2MDtcbiAgZ2FtZVRpbWVyLmlubmVyVGV4dCA9IGAke21pbnV0ZXN9OiR7c2Vjb25kc31gO1xufVxuXG5mdW5jdGlvbiBpbml0R2FtZSgpIHtcbiAgLy9yZXNldCB0aW1lciAvLyBzaG93IHVwIGNoYXJhY3RlciBpbiBvcmlnaW5hbCBwb3NpdGlvblxuICBjdHhHYW1lLmNsZWFyUmVjdCgwLCAwLCA3MDAsIDUwMCk7XG4gIGN0eEdhbWUuZHJhd0ltYWdlKGJhY2tncm91bmRJbWFnZSwgMCwgMCk7XG4gIHNob3dHYW1lQnV0dG9uKCk7XG4gIGdhbWVTY29yZS5pbm5lclRleHQgPSBNT05FWV9DT1VOVDtcbiAgYWRkSXRlbShcIm1vbmV5XCIsIE1PTkVZX0NPVU5ULCBcImltZy9jb2luLnBuZ1wiKTtcbiAgcGxheWVyLmRyYXcoKTtcbiAgcm9ib3QuZHJhdygpO1xufVxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbmZ1bmN0aW9uIGFkZEl0ZW0oY2xhc3NOYW1lLCBjb3VudCwgaW1nUGF0aCkge1xuICAvLyBjdHhHYW1lLmNsZWFyUmVjdCgwLCAwLCA3MDAsIDUwMCk7XG4gIGJhY2tncm91bmRJbWFnZS5zcmMgPSBcIi4vaW1nL2JhY2tncm91bmQucG5nXCI7XG4gIGJhY2tncm91bmRJbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY3R4R2FtZS5kcmF3SW1hZ2UoYmFja2dyb3VuZEltYWdlLCAwLCAwKTtcbiAgfTtcblxuICBjb25zdCB4MSA9IDA7XG4gIGNvbnN0IHkxID0gMDtcbiAgY29uc3QgeDIgPSBmaWVsZFJlY3Qud2lkdGggLSBNT05FWV9TSVpFO1xuICBjb25zdCB5MiA9IGZpZWxkUmVjdC5oZWlnaHQgLSBNT05FWV9TSVpFO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzTmFtZSk7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1nUGF0aCk7XG4gICAgaXRlbS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjsgLy/quLDrs7ggc3RhdGlj7J2065287IScIOuwlOq+uOq4sC5cbiAgICBjb25zdCB4ID0gcmFuZG9tTnVtYmVyKHgxLCB4Mik7IC8veDEsIHgy7J20IOyCrOydtOyXkCDsnojripQg7JWE66y07Iir7J6QXG4gICAgY29uc3QgeSA9IE1hdGgubWF4KDIwMCwgcmFuZG9tTnVtYmVyKHkxLCB5MikpO1xuICAgIGl0ZW0uc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuICAgIGl0ZW0uc3R5bGUudG9wID0gYCR7eX1weGA7XG4gICAgaXRlbS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjdHhHYW1lLmRyYXdJbWFnZShpdGVtLCB4LCB5LCAzMCwgMzApO1xuICAgIH07XG4gIH1cbn1cblxuLy8gZnVuY3Rpb24gcGxheWVyQ29sbGlzaW9uKCl7XG4vLyAgIGlmICghc3RhcnRlZCl7XG4vLyAgICAgcmV0dXJuXG4vLyAgIH1cbi8vICAgLy9pZiBjb2xsaXNpb24gYmV0d2VlbiBwbGF5ZXIgJiBjb2luXG4vLyAgICAgY29pbi5yZW1vdmUoKTtcbi8vICAgICBzY29yZSsrXG4vLyAgICAgdXBkYXRlU2NvcmVCb2FyZCgpXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHVwZGF0ZVNjb3JlQm9hcmQoKXtcbi8vICAgZ2FtZVNjb3JlLmlubmVyVGV4dD0gTU9ORVlfQ09VTlQtIHNjb3JlO1xuLy8gfVxuXG4vL2xvc2UsIHdpbiwgc2luZyBhdWRpbywgcGF1c2UgYXVkaW8sIGtpbGwgYXVkaW8sXG4iXSwibmFtZXMiOlsiUGxheWVyIiwiUm9ib3QiLCJjYW52YXNHYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eEdhbWUiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsInJvYm90IiwiZHJhdyIsInBsYXllciIsInBsYXllckxpc3RlbmVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidXBkYXRlIiwic3RhcnRlZCIsInNjb3JlIiwidGltZXIiLCJ1bmRlZmluZWQiLCJNT05FWV9DT1VOVCIsIkdBTUVfRFVSQVRJT05fU0VDIiwiTU9ORVlfU0laRSIsImdhbWVCdG4iLCJxdWVyeVNlbGVjdG9yIiwiZ2FtZVRpbWVyIiwiZ2FtZVNjb3JlIiwicG9wVXAiLCJwb3BVcFRleHQiLCJwb3BVcFJlZnJlc2giLCJmaWVsZFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzdG9wR2FtZSIsInN0YXJ0R2FtZSIsImhpZGVQb3BVcCIsImluaXRHYW1lIiwic2hvd1N0b3BidXR0b24iLCJzaG93VGltZXJBbmRTY29yZSIsInN0YXJ0R2FtZVRpbWVyIiwic3RvcEdhbWVUaW1lciIsImhpZGVHYW1lQnV0dG9uIiwic2hvd1BvcFVwIiwiZmluaXNoR2FtZSIsIndpbiIsImFuaW1hdGVSb2JvdCIsImRyYXdCYWNrIiwic2V0SW50ZXJ2YWwiLCJNYXRoIiwicmFuZG9tIiwiZHJhd0Zyb250IiwiaWNvbiIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsInNob3dHYW1lQnV0dG9uIiwicmVtYWluaW5nVGltZVNlYyIsInVwZGF0ZVRpbWVyVGV4dCIsImNsZWFySW50ZXJ2YWwiLCJ0ZXh0IiwiaW5uZXJUZXh0Iiwic2VjIiwibWludXRlcyIsImZsb29yIiwic2Vjb25kcyIsImNsZWFyUmVjdCIsImFkZEl0ZW0iLCJyYW5kb21OdW1iZXIiLCJtaW4iLCJtYXgiLCJjbGFzc05hbWUiLCJjb3VudCIsImltZ1BhdGgiLCJ4MSIsInkxIiwieDIiLCJ5MiIsImkiLCJpdGVtIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInBvc2l0aW9uIiwieCIsInkiLCJsZWZ0IiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst LEFT_ARROW = 37;\nconst RIGHT_ARROW = 39;\nconst UP_ARROW = 38;\nconst DOWN_ARROW = 40;\nclass Player {\n  constructor(x, y, canvasGame) {\n    this.x = x;\n    this.y = y;\n    this.maxWidth = canvasGame.width;\n    this.maxHeight = canvasGame.height;\n    this.canvasGame = canvasGame;\n    this.keys = {};\n  }\n  draw() {\n    const playerImage = new Image();\n    playerImage.src = \"./img/player.png\";\n    // if (x && y){\n    //   playerImage.onload = () => {\n    //     this.canvasGame\n    //       .getContext(\"2d\")\n    //       .drawImage(playerImage, x, y, 100, 100);\n    //   };\n    // }else{\n    playerImage.onload = () => {\n      this.canvasGame.getContext(\"2d\").drawImage(playerImage, this.x, this.y, 45, 55);\n    }; // }}\n  }\n\n  update(e) {\n    this.canvasGame\n    // .save()\n    .getContext(\"2d\")\n    // .getImageData()\n    .clearRect(this.x, this.y, 45, 55);\n    // .restore();\n    // .putImageData()\n\n    if (e.keyCode === LEFT_ARROW) {\n      this.x -= 7;\n      if (this.x <= 0) {\n        this.x += 7;\n      }\n      this.draw();\n    } else if (e.keyCode === RIGHT_ARROW) {\n      this.x += 7;\n      if (this.x >= 450) {\n        this.x -= 7;\n      }\n      this.draw();\n    }\n    if (e.keyCode === UP_ARROW) {\n      this.y -= 7;\n      if (this.y <= 0) {\n        this.y += 7;\n      }\n      this.draw();\n    } else if (e.keyCode === DOWN_ARROW) {\n      this.y += 7;\n      if (this.y >= 600) {\n        this.y -= 7;\n      }\n      this.draw();\n    }\n  }\n  playerListener() {\n    window.addEventListener(\"keydown\", event => this.keys[event.keyCode] = true);\n    window.addEventListener(\"keyup\", () => this.keys[event.keyCode] = false);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNlLEtBQUssQ0FBQ0osT0FBTyxDQUFDLEdBQUcsSUFBSyxDQUM3QztJQUNERSxNQUFNLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFPLElBQUksQ0FBQ2QsSUFBSSxDQUFDZSxLQUFLLENBQUNKLE9BQU8sQ0FBQyxHQUFHLEtBQU0sQ0FBQztFQUM1RTtBQUNGO0FBRUEsK0RBQWVwQixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfdGVzdC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExFRlRfQVJST1cgPSAzNztcbmNvbnN0IFJJR0hUX0FSUk9XID0gMzk7XG5jb25zdCBVUF9BUlJPVyA9IDM4O1xuY29uc3QgRE9XTl9BUlJPVyA9IDQwO1xuXG5jbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBjYW52YXNHYW1lKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMubWF4V2lkdGggPSBjYW52YXNHYW1lLndpZHRoO1xuICAgIHRoaXMubWF4SGVpZ2h0ID0gY2FudmFzR2FtZS5oZWlnaHQ7XG4gICAgdGhpcy5jYW52YXNHYW1lID0gY2FudmFzR2FtZTtcbiAgICB0aGlzLmtleXMgPSB7fTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgY29uc3QgcGxheWVySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBwbGF5ZXJJbWFnZS5zcmMgPSBcIi4vaW1nL3BsYXllci5wbmdcIjtcbiAgICAvLyBpZiAoeCAmJiB5KXtcbiAgICAvLyAgIHBsYXllckltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAvLyAgICAgdGhpcy5jYW52YXNHYW1lXG4gICAgLy8gICAgICAgLmdldENvbnRleHQoXCIyZFwiKVxuICAgIC8vICAgICAgIC5kcmF3SW1hZ2UocGxheWVySW1hZ2UsIHgsIHksIDEwMCwgMTAwKTtcbiAgICAvLyAgIH07XG4gICAgLy8gfWVsc2V7XG4gICAgcGxheWVySW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYW52YXNHYW1lXG4gICAgICAgIC5nZXRDb250ZXh0KFwiMmRcIilcbiAgICAgICAgLmRyYXdJbWFnZShwbGF5ZXJJbWFnZSwgdGhpcy54LCB0aGlzLnksIDQ1LCA1NSk7XG4gICAgfTsgLy8gfX1cbiAgfVxuXG4gIHVwZGF0ZShlKSB7XG4gICAgdGhpcy5jYW52YXNHYW1lXG4gICAgICAvLyAuc2F2ZSgpXG4gICAgICAuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAvLyAuZ2V0SW1hZ2VEYXRhKClcbiAgICAgIC5jbGVhclJlY3QodGhpcy54LCB0aGlzLnksIDQ1LCA1NSk7XG4gICAgLy8gLnJlc3RvcmUoKTtcbiAgICAvLyAucHV0SW1hZ2VEYXRhKClcblxuICAgIGlmIChlLmtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcbiAgICAgIHRoaXMueCAtPSA3O1xuICAgICAgaWYgKHRoaXMueCA8PSAwKSB7XG4gICAgICAgIHRoaXMueCArPSA3O1xuICAgICAgfVxuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XG4gICAgICB0aGlzLnggKz0gNztcbiAgICAgIGlmICh0aGlzLnggPj0gNDUwKSB7XG4gICAgICAgIHRoaXMueCAtPSA3O1xuICAgICAgfVxuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICAgIGlmIChlLmtleUNvZGUgPT09IFVQX0FSUk9XKSB7XG4gICAgICB0aGlzLnkgLT0gNztcbiAgICAgIGlmICh0aGlzLnkgPD0gMCkge1xuICAgICAgICB0aGlzLnkgKz0gNztcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJhdygpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XG4gICAgICB0aGlzLnkgKz0gNztcbiAgICAgIGlmICh0aGlzLnkgPj0gNjAwKSB7XG4gICAgICAgIHRoaXMueSAtPSA3O1xuICAgICAgfVxuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgcGxheWVyTGlzdGVuZXIoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImtleWRvd25cIixcbiAgICAgIChldmVudCkgPT4gKHRoaXMua2V5c1tldmVudC5rZXlDb2RlXSA9IHRydWUpXG4gICAgKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICgpID0+ICh0aGlzLmtleXNbZXZlbnQua2V5Q29kZV0gPSBmYWxzZSkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiJdLCJuYW1lcyI6WyJMRUZUX0FSUk9XIiwiUklHSFRfQVJST1ciLCJVUF9BUlJPVyIsIkRPV05fQVJST1ciLCJQbGF5ZXIiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwiY2FudmFzR2FtZSIsIm1heFdpZHRoIiwid2lkdGgiLCJtYXhIZWlnaHQiLCJoZWlnaHQiLCJrZXlzIiwiZHJhdyIsInBsYXllckltYWdlIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwidXBkYXRlIiwiZSIsImNsZWFyUmVjdCIsImtleUNvZGUiLCJwbGF5ZXJMaXN0ZW5lciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/robot.js":
/*!******************************!*\
  !*** ./src/scripts/robot.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Robot {\n  constructor(x, y, canvasGame) {\n    this.x = x;\n    this.y = y;\n    this.canvasGame = canvasGame;\n  }\n  draw() {\n    const robotImage = new Image();\n    robotImage.src = \"./img/robotf.png\";\n    robotImage.onload = () => {\n      this.canvasGame.getContext(\"2d\").drawImage(robotImage, this.x, this.y, 130, 170);\n    };\n  }\n  drawBack() {\n    const robotBackImage = new Image();\n    robotBackImage.src = \"./img/robotb.png\";\n    robotImage.onload = () => {\n      this.canvasGame.getContext(\"2d\").drawImage(robotImage, this.x, this.y, 130, 170);\n    };\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Robot);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9yb2JvdC5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsS0FBSyxDQUFDO0VBQ1ZDLFdBQVcsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLFVBQVUsRUFBRTtJQUM1QixJQUFJLENBQUNGLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBLFVBQVU7RUFDOUI7RUFFQUMsSUFBSSxHQUFHO0lBQ0wsTUFBTUMsVUFBVSxHQUFHLElBQUlDLEtBQUssRUFBRTtJQUM5QkQsVUFBVSxDQUFDRSxHQUFHLEdBQUcsa0JBQWtCO0lBRW5DRixVQUFVLENBQUNHLE1BQU0sR0FBRyxNQUFNO01BQ3hCLElBQUksQ0FBQ0wsVUFBVSxDQUNaTSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQ2hCQyxTQUFTLENBQUNMLFVBQVUsRUFBRSxJQUFJLENBQUNKLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQ3BELENBQUM7RUFDSDtFQUVBUyxRQUFRLEdBQUU7SUFDUixNQUFNQyxjQUFjLEdBQUcsSUFBSU4sS0FBSyxFQUFFO0lBQ2xDTSxjQUFjLENBQUNMLEdBQUcsR0FBRyxrQkFBa0I7SUFFdkNGLFVBQVUsQ0FBQ0csTUFBTSxHQUFHLE1BQU07TUFDeEIsSUFBSSxDQUFDTCxVQUFVLENBQ1pNLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FDaEJDLFNBQVMsQ0FBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFDcEQsQ0FBQztFQUNIO0FBQ0Y7QUFJQSwrREFBZUgsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Rlc3QvLi9zcmMvc2NyaXB0cy9yb2JvdC5qcz9jMzEyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFJvYm90IHtcbiAgY29uc3RydWN0b3IoeCwgeSwgY2FudmFzR2FtZSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmNhbnZhc0dhbWUgPSBjYW52YXNHYW1lO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBjb25zdCByb2JvdEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgcm9ib3RJbWFnZS5zcmMgPSBcIi4vaW1nL3JvYm90Zi5wbmdcIjtcblxuICAgIHJvYm90SW1hZ2Uub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jYW52YXNHYW1lXG4gICAgICAgIC5nZXRDb250ZXh0KFwiMmRcIilcbiAgICAgICAgLmRyYXdJbWFnZShyb2JvdEltYWdlLCB0aGlzLngsIHRoaXMueSwgMTMwLCAxNzApO1xuICAgIH07XG4gIH1cblxuICBkcmF3QmFjaygpe1xuICAgIGNvbnN0IHJvYm90QmFja0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgcm9ib3RCYWNrSW1hZ2Uuc3JjID0gXCIuL2ltZy9yb2JvdGIucG5nXCI7XG5cbiAgICByb2JvdEltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FudmFzR2FtZVxuICAgICAgICAuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgIC5kcmF3SW1hZ2Uocm9ib3RJbWFnZSwgdGhpcy54LCB0aGlzLnksIDEzMCwgMTcwKTtcbiAgICB9O1xuICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBSb2JvdDtcbiJdLCJuYW1lcyI6WyJSb2JvdCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJjYW52YXNHYW1lIiwiZHJhdyIsInJvYm90SW1hZ2UiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJkcmF3QmFjayIsInJvYm90QmFja0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/robot.js\n");

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