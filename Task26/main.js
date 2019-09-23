class Gallery {
    constructor(modal, photos) {
        this.photos_img = '.gallery__image';

        this.modal = modal;
        this.$photos = $(photos);
        this.$img = this.$photos.find(this.photos_img);
        self = this;
        this.$img.click(function() {
            self.modal.show(this)
        })
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
        window.onpopstate = (e) => {
            this.$modal_item.append(`<img src='${src}'>`);
            this.img = this.$modal_item.find('img');
        }
        let stat = {
           page: src,
        }
        history.pushState(stat, '', stat.page);
        this.img.click(() => {
            this.$modal.toggleClass('modal_show');
            this.img.detach();
          }
        );
        this.$modal.toggleClass('modal_show');
    }
}