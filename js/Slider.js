class Slider {
  constructor(images) {
    this.images = images;
    this.index = 0;
  }
  __setIndex(index) {
    if (index >= this.images.length) {
      this.index = 0;
    } else if (index < 0) {
      this.index = this.images.length - 1;
    } else {
      this.index = index;
    }
  }
  __addActiveClass(index) {
    this.images[index].classList.add('img_active');
  }
  __removeActiveClass(index) {
    this.images[index].classList.remove('img_active');
  }
  nextSlide() {
    this.__removeActiveClass(this.index);
    this.__setIndex(this.index + 1);
    this.__addActiveClass(this.index);
  }
  prevSlide() {
    this.__removeActiveClass(this.index);
    this.__setIndex(this.index - 1);
    this.__addActiveClass(this.index);
  }
}