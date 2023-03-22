class Modal{
    constructor(){
      this.modal = document.querySelector(".js-modal");
    }
    open(){
      this. modal.style.display = 'initial';
    }
    close(){
      this.modal.style.display = 'none';
    }
  }