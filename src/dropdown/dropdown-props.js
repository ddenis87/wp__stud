import Dropdown from './Dropdown' // import base class
import DropdownPropsItem from './__item/dropdown-props__item'

export default class DropdownProps extends Dropdown {
  constructor(idDropdown, option) {
    super(idDropdown);
    this.values = {'value': []}
    this.listPropsItem = [];
    let dropdownProps__item = document.querySelectorAll(`#${idDropdown}Slider .dropdown-props__item`);
    document.getElementById(idDropdown + 'Slider').addEventListener('click', () => this.updateTitle(option));

    for (let i = 0; i < dropdownProps__item.length; i++) {

      let dropdownPropsItemClass = new DropdownPropsItem({
        'id': dropdownProps__item[i].id, 
        'propsValueDefault' : option.propsValueDefault[i], 
        'propsValueLimit': option.propsValueLimit[i]
      });
      this.listPropsItem.push({'id': dropdownProps__item[i].id, 'class': dropdownPropsItemClass});
    }
    this.updateTitle(option);
  }
  updateTitle(option) {
    let title = '';
    if (option.titleType == 'sum') {
      let value = 0;
      for (let i = 0; i < this.listPropsItem.length; i++) {
        value += this.listPropsItem[i].class.value;
      }
      switch (true) {
        case (value == 0):
        case (value > 4):
          title += value + ' ' + option.titleMask[0][2];
          break;
        case (value == 1):
          title += value + ' ' + option.titleMask[0][0];
          break;
        case (1 < value < 5):
          title += value + ' ' + option.titleMask[0][1];
          break;
      }
    } else if (option.titleType == 'text') {
      for (let i = 0; i < this.listPropsItem.length; i++) {
        let value = this.listPropsItem[i].class.value;
        switch (true) {
          case (value == 0):
          case (value > 4):
            title += value + ' ' + option.titleMask[i][2];
            break;
          case (value == 1):
            title += value + ' ' + option.titleMask[i][0];
            break;
          case (1 < value < 5):
            title += value + ' ' + option.titleMask[i][1];
            break;
        }
        if (i < this.listPropsItem.length - 1) title += ', '
      }
    }
    document.getElementById(this.idDropdown + 'Title').innerText = title;
  }

  getValue() {
    this.values.value.length = 0;
    for (let propsItem of this.listPropsItem) {
      this.values.value.push({'id': this.idDropdown + '__' + propsItem.id, 'value': propsItem.class.value });
    }
    return this.values;
  }
}