import './dropdown-props__item.scss';

export default class DropdownPropsItem {
  constructor(option) {
    this.id = option.id;
    this.value = option.propsValueDefault;
    this.valueLimit = option.propsValueLimit;

    document.getElementById(this.id).addEventListener('mousedown', () => { event.preventDefault() });
    document.getElementById(this.id).addEventListener('click', () => { this.changePropsItem(event.target) });
    
    this.updateValue();
  }
  changePropsItem(target) {
    // console.log(target.id.slice(0, -9))
    switch(target.id.slice(-9)) {
      case 'Increment': this.value++; break;
      case 'Decrement': this.value--; break;
    }
    if ( this.value > this.valueLimit[0] && this.value < this.valueLimit[1]) {
      document.getElementById(target.id.slice(0, -9) + 'Increment').disabled = false;
      document.getElementById(target.id.slice(0, -9) + 'Decrement').disabled = false;
    } else if (this.value == this.valueLimit[0]) {
      document.getElementById(target.id.slice(0, -9) + 'Decrement').disabled = true;
    } else if (this.value == this.valueLimit[1]) {
      document.getElementById(target.id.slice(0, -9) + 'Increment').disabled = true;
    }
    this.updateValue();
  }
  updateValue() {
    document.getElementById(this.id + 'Value').innerText = this.value;
  }
}