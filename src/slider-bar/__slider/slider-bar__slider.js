import './slider-bar__slider.scss'

export default class SliderBarSlider {
  constructor(option) {
    this.idSliderBar = option.id;
    document.getElementById(option.id + 'Body').addEventListener('click', () => this.clickSliderBody(event));
    document.getElementById(option.id + 'Slider').addEventListener('mousemove', () => this.sliderMove(event)); 
  }

  clickSliderBody(event) {
    let parentCoordinat = document.getElementById(this.idSliderBar + "Body").getBoundingClientRect();
    document.getElementById(this.idSliderBar + "Slider").style.left = event.clientX - (parentCoordinat.x + 10) + 'px';
  }

  sliderMove(event) {
    let parentCoordinat = document.getElementById(this.idSliderBar + "Body").getBoundingClientRect();
    if (event.which == 1) {
      document.getElementById(this.idSliderBar + "Slider").style.left = event.clientX - (parentCoordinat.x + 10) + 'px';
    }
  }
}