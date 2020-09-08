import Dropdown from './Dropdown' // import base class
import DropdownPropsItem from './__item/dropdown-props__item'
import DropdownControl from './__control/dropdown__control';


export default class DropdownProps extends Dropdown {
  constructor(idDropdown, option) {
    super(idDropdown);
    this.titleType = option.titleType;
    this.titleMask = option.titleMask;
    if (option.titleDefault) { this.titleDefault = option.titleDefault; }
    this.values = {'value': []}
    this.listPropsItem = [];
    let dropdownProps__item = document.querySelectorAll(`#${idDropdown}Slider .dropdown-props__item`);
    document.getElementById(idDropdown + 'Slider').addEventListener('click', () => this.clickSlider(event));

    for (let i = 0; i < dropdownProps__item.length; i++) {
      let dropdownPropsItem = new DropdownPropsItem({
        'id': dropdownProps__item[i].id,
        'propsValueDefault' : option.propsValueDefault[i], 
        'propsValueLimit': option.propsValueLimit[i]
      });
      this.listPropsItem.push({'id': dropdownProps__item[i].id, 'class': dropdownPropsItem});
    }
    if (option.control == false) document.getElementById(idDropdown + 'Control').classList.add('dropdown__control_noneVisibility')

    this.dropdownControl = new DropdownControl(idDropdown, this.listPropsItem);
    this.updateTitle();
    this.setDropdownDefault(option);
  }

  clickSlider(event) {
    if (event.target.id.slice(-9) == 'Increment' || event.target.id.slice(-9) == 'Decrement') {
      this.dropdownControl.enableClear();
      this.updateTitle();
    } else if (event.target.id.slice(-5) == 'Clear') {
      this.dropdownControl.setDropdownDefault(this.listPropsItem);
      if (this.titleDefault) document.getElementById(this.idDropdown + 'Title').innerText = this.titleDefault;
    } else if (event.target.id.slice(-5) == 'Apply') {
      this.dropdownClose();
    }
  }

  updateTitle() {
    let title = '';
    switch(this.titleType) {
      case 'text': {
        for (let i = 0; i < this.listPropsItem.length; i++) {
          let value = this.listPropsItem[i].class.value;
          switch (true) {
            case (value == 0):
            case (value > 4):
              title += value + ' ' + this.titleMask[i][2];
              break;
            case (value == 1):
              title += value + ' ' + this.titleMask[i][0];
              break;
            case (1 < value < 5):
              title += value + ' ' + this.titleMask[i][1];
              break;
          }
          if (i < this.listPropsItem.length - 1) title += ', '
        }
      }
      case 'sum': {
        let value = 0;
        for (let i = 0; i < this.listPropsItem.length; i++) {
          value += this.listPropsItem[i].class.value;
        }
        switch (true) {
          case (value == 0):
          case (value > 4):
            title += value + ' ' + this.titleMask[0][2];
            break;
          case (value == 1):
            title += value + ' ' + this.titleMask[0][0];
            break;
          case (1 < value < 5):
            title += value + ' ' + this.titleMask[0][1];
            break;
        }
      }
    }
    document.getElementById(this.idDropdown + 'Title').innerText = title;
  }

  setDropdownDefault(option) {
    this.dropdownControl.setDropdownDefault(this.listPropsItem);
    if ('titleDefault' in option) {
      document.getElementById(this.idDropdown + 'Title').innerText = option.titleDefault;
    }
  }

  getValue() {
    this.values.value.length = 0;
    for (let propsItem of this.listPropsItem) {
      this.values.value.push({'id': this.idDropdown + '__' + propsItem.id, 'value': propsItem.class.value });
    }
    return this.values;
  }
}