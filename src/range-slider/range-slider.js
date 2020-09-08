import './range-slider.scss';

export default class RangeSlider {
  constructor(option) {
    this.idElement = option.id;
    document.getElementById(option.id + 'Body').addEventListener('click', () => this.clickSliderBody(event));
    document.getElementById(option.id + 'Slider').addEventListener('mousemove', () => this.sliderMove(event));

  }

  clickSliderBody(event) {

    let parentCoordinat = document.getElementById(this.idElement + "Body").getBoundingClientRect();
    document.getElementById(this.idElement + "Slider").style.left = event.clientX - (parentCoordinat.x + 10) + 'px';
  }

  sliderMove(event) {
    let parentCoordinat = document.getElementById(this.idElement + "Body").getBoundingClientRect();
    if (event.which == 1) {
      document.getElementById(this.idElement + "Slider").style.left = event.clientX - (parentCoordinat.x + 10) + 'px';
    }
  }
}