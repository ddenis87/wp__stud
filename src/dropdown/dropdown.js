import './dropdown.scss';

export default class Dropdown {
  constructor(idDropdown) {
    this.idDropdown = idDropdown;
    // document.getElementById(idDropdown).addEventListener('blur', () => this.dropdownClose());
    document.getElementById(idDropdown + 'Button').addEventListener('click', () => this.dropdownSwitch());
  }
  dropdownSwitch() {
    document.getElementById(this.idDropdown + 'Slider').classList.toggle('dropdown__slider-drop');
    document.getElementById(this.idDropdown + 'Box').classList.toggle('dropdown__box-drop');
  }
  dropdownClose() {
    document.getElementById(this.idDropdown + 'Slider').classList.remove('dropdown__slider-drop');
    document.getElementById(this.idDropdown + 'Box').classList.remove('dropdown__box-drop');
  }
}