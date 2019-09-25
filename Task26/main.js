class Gallery {
    constructor(modal, photos) {
        this.photos_img = '.gallery__image';

        this.modal = modal;
        this.$photos = $(photos);
        this.$img = this.$photos.find(this.photos_img);
        self = this;
        this.$img.click((event) => {
            this.modal.show(event.target)
        });
    }

}

class Modal {
    constructor(modal) {
        this.$modal = $(modal);
        this.$modal_item = this.$modal.find(".modal__content");
        this.img = null;
    }

    show(photo) {
        let src = photo.getAttribute('src');
        this.img = $(`<img src='${src}'>`); 
        
        let state = {
            page: src,
        }        
        
        history.pushState(state, '', '');
        this.img.click(() => {
            this.$modal.toggleClass('modal_show');
            this.img.detach();
            history.pushState({}, '', '');
          }   
        );    
        this.$modal_item.append(this.img); 
        this.$modal.toggleClass('modal_show');
    }
}

window.onpopstate = (e) => {
    if (e.state.page) {
        debugger;
        let modal = new Modal('#modal');
        let img = document.createElement('img');
        img.setAttribute('src', e.state.page);
        modal.show(img);
    }
    return;
}