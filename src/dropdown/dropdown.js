import './dropdown.scss';
import './__control/dropdown__control'

export default class Dropdown {
  constructor(idDropdown, option) {
    this.idDropdown = idDropdown;
    document.getElementById(idDropdown).addEventListener('blur', () => this.dropdownClose());
    document.getElementById(idDropdown + 'Button').addEventListener('click', () => this.dropdownSwitching());
    if (option.control) {
      document.getElementById(idDropdown + 'Control').addEventListener('click', () => {
        event.stopPropagation();
        switch(event.target.id.slice(-5)) {
          case 'Apply': this.dropdownClose(); break;
          case 'Clear': this.dropdownDefault(option); break;
        }
      });
    }
  }
  dropdownSwitching() {
    document.getElementById(this.idDropdown + 'Slider').classList.toggle('dropdown__slider-drop');
    document.getElementById(this.idDropdown + 'Box').classList.toggle('dropdown__box-drop');
  }
  dropdownClose() {
    document.getElementById(this.idDropdown + 'Slider').classList.remove('dropdown__slider-drop');
    document.getElementById(this.idDropdown + 'Box').classList.remove('dropdown__box-drop');
  }
}