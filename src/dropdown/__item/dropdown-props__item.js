import './dropdown-props__item.scss';

export default class DropdownPropsItem {
  constructor(option) {
    this.idPropsItem = option.id;
    this.value = option.propsValueDefault;
    this.valueDefault = option.propsValueDefault;
    this.valueLimit = option.propsValueLimit;

    document.getElementById(this.idPropsItem).addEventListener('mousedown', () => { event.preventDefault() });
    document.getElementById(this.idPropsItem).addEventListener('click', () => { this.changeValue(event.target) });
    
    this.updateValueForm();
    this.switchControl();
  }
  changeValue(target) {
    // console.log(this.idPropsItem + 'Increment')
    // console.log(target.id)
    switch(target.id) {
      case this.idPropsItem + 'Increment': this.value++; break;
      case this.idPropsItem + 'Decrement': this.value--; break;
    }
    this.updateValueForm();
    this.switchControl()
  }
  updateValueForm() {
    document.getElementById(this.idPropsItem + 'Value').innerText = this.value;
  }
  setValueDefault() {
    this.value = this.valueDefault;
    this.updateValueForm();
    this.switchControl();
  }
  getValue() {
    return this.value;
  }
  switchControl() {
    switch(true) {
      case (this.value > this.valueLimit[0] && this.value < this.valueLimit[1]): {
        document.getElementById(this.idPropsItem + 'Increment').disabled = false;
        document.getElementById(this.idPropsItem + 'Decrement').disabled = false;
        break;
      }
      case (this.value == this.valueLimit[0]): {
        document.getElementById(this.idPropsItem + 'Increment').disabled = false;
        document.getElementById(this.idPropsItem + 'Decrement').disabled = true;
        break;
      }
      case (this.value == this.valueLimit[1]): {
        document.getElementById(this.idPropsItem + 'Increment').disabled = true;
        document.getElementById(this.idPropsItem + 'Decrement').disabled = false;
        break;
      }
    }
  }
}