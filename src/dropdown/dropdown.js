import './dropdown.scss';
import DropdownItem from './dropdown-item/dropdown-item'

export default class Dropdown {
  constructor(idDropdown, option) {
    this.idDropdown = idDropdown;
    this.value = []; // -- array return value [{id, value},...] 
    this.arrDropdownItems = [];

    document.getElementById(idDropdown).addEventListener('blur', () => this.dropdownClose());
    document.getElementById(idDropdown + 'Button').addEventListener('click', () => this.dropdownSwitching());
    document.getElementById(idDropdown + 'Items').addEventListener('click', () => this.updateTitle());

    let dropdownItems = document.querySelectorAll(`#${idDropdown}Items .dropdown-item`);
    for (let item of dropdownItems) {
      let itemClass = new DropdownItem(item);
      this.arrDropdownItems.push({'id': item.id, 'class': itemClass})
    }
    this.updateTitle();
    this.getValue();
  }
  dropdownSwitching() {
    let dropdownItems = document.getElementById(this.idDropdown + 'Items');
    let dropdownBox = document.getElementById(this.idDropdown + 'Box');
    dropdownItems.classList.toggle('dropdown__items-drop');
    dropdownBox.classList.toggle('dropdown__box-drop');
  }
  dropdownClose() {
    let dropdownItems = document.getElementById(this.idDropdown + 'Items');
    let dropdownBox = document.getElementById(this.idDropdown + 'Box');
    dropdownItems.classList.remove('dropdown__items-drop');
    dropdownBox.classList.remove('dropdown__box-drop');
  }
  updateTitle() {
    let arrText= [];
    if (this.arrDropdownItems[0].class.value == 1) arrText.push('спальня,');
    else if (this.arrDropdownItems[0].class.value > 1 && this.arrDropdownItems[0].class.value < 5) arrText.push('спальни,');
    else if (this.arrDropdownItems[0].class.value > 4) arrText.push('спален,');
    if (this.arrDropdownItems[1].class.value == 1) arrText.push('кровать...');
    else if (this.arrDropdownItems[1].class.value > 1 && this.arrDropdownItems[1].class.value < 5) arrText.push('кровати...');
    else if (this.arrDropdownItems[1].class.value > 4) arrText.push('кроватей...');
    document.getElementById(this.idDropdown + 'Title').innerText = this.arrDropdownItems[0].class.value + ' ' + arrText[0] + ' ' +this.arrDropdownItems[1].class.value + ' ' + arrText[1];
  }
  getValue() {
    this.value.length = 0;
    for (let item of this.arrDropdownItems) {
      this.value.push({'id': this.idDropdown + '__' + item.id, 'value': item.class.value });
    }
    return this.value;
  }
}

// -- let roomDropdown = new Dropdown('propsRoom'); -- declare in index.js