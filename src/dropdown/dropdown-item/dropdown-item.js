import './dropdown-item.scss';

export default class DropdownItem {
  constructor(dropdownItem) {
    this.idDropdownItem = dropdownItem.id;
    this.value = +document.getElementById(this.idDropdownItem + 'Value').innerText;
    dropdownItem.addEventListener('click', () => { this.clickDropdownItem(event.target.id) });
  }
  clickDropdownItem(idTarget) {
    switch(idTarget) {
      case 'buttonIncrement': this.increment(); break;
      case 'buttonDecrement': this.decrement(); break;
    }
  }
  increment() {
    this.value++;
    this.updateValue();
  }
  decrement() {
    this.value--;
    this.updateValue();
  }
  updateValue() {
    document.getElementById(this.idDropdownItem + 'Value').innerText = this.value;
  }
}