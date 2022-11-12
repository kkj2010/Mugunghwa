class PopUp {
  constructor() {
    this.PopUp = document.querySelector(".pop-up");
    this.PopUpText = document.querySelector(".pop-up-message");
    this.popUpRefresh = document.querySelector(".pop-up-referesh");
    this.popUpRefresh.addEventListener("click", () => {
      this.onclick && this.onClick(); //온클릭이 트루면 온클릭을 호출
      hide();
    });
  }

  //버튼이 클릭되면 온클릭호출

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  hide() {
    this.popUpRefresh.classList.add("pop-up--hide");
  }

  showWithText(text) {
    this.PopUpText.classList.remove("pop-up-hide");
  }
}

export default PopUp;