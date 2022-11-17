class PopUp {
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popUpText = document.querySelector(".pop-up-message");
    this.popUpRefresh = document.querySelector(".pop-up-refresh");
    this.popUpRefresh.addEventListener("click", () => {
      this.onClick && this.onClick();
    this.hide();
    }); //onclick이 있을때만 얘를 호출
  }

  setClickListener(onClick) {
    this.onClick = onClick; 
  }  // 팝업을 클릭하면 내가 전달해준 온클릭호출, 팝업에 온클릭에 이걸 할당.

  hide() {
    this.popUp.classList.add("pop-up-hide");
  }

  showPopUp(text) {
    
    this.popUpText.innerText = text;
    this.popUp.classList.remove("pop-up-hide");
  }
}

export default PopUp;