import Dropdown from './Dropdown' // import base class
import DropdownControl from './__control/dropdown__control';
import './__date/dropdown-date__date';

export default class DropdownDate extends Dropdown {
    constructor(idDropdown, option) {
      super(idDropdown);
      if (option.titleDefault) { this.titleDefault = option.titleDefault; }
      if (option.range) { this.range = option.range; } else { this.range = false; }
      let optionCalendar = {
        minDate: new Date()
      }
      if (option.range) {optionCalendar.range = option.range;}

      this.listPropsItem = [];
      this.airCalendar = $('#' + idDropdown + 'Calendar');
      this.airCalendar.datepicker(optionCalendar)
      

      document.getElementById(idDropdown + 'Slider').classList.add('dropdown__slider-date');
      document.getElementById(idDropdown + 'Control').classList.add('dropdown__control-date');
      document.getElementById(idDropdown + 'Slider').addEventListener('click', () => this.clickSlider(event));
      
      this.dropdownControl = new DropdownControl(idDropdown, this.listPropsItem);

      this.setDropdownDefault(option);
    }

    clickSlider(event) {
      this.dropdownControl.enableClear();
      if (event.target.id.slice(-5) == 'Clear') {
        this.dropdownControl.setDropdownDefault(this.listPropsItem);
        this.airCalendar.datepicker().data('datepicker').clear();
        if (this.titleDefault) document.getElementById(this.idDropdown + 'Title').innerText = this.titleDefault;
      } else if (event.target.id.slice(-5) == 'Apply') {
        this.dropdownClose();
        this.updateTitle();
      }
    }

    updateTitle() {
      if (!this.range) {
        document.getElementById(this.idDropdown + 'Title').innerText = this.formatedDate(this.airCalendar.datepicker().data('datepicker').selectedDates);
      } else {
        document.getElementById(this.idDropdown + 'Title').innerText = this.formatedDateRange(this.airCalendar.datepicker().data('datepicker').selectedDates);
      }
    }

    setDropdownDefault(option) {
      this.dropdownControl.setDropdownDefault(this.listPropsItem);
      if ('titleDefault' in option) {
        document.getElementById(this.idDropdown + 'Title').innerText = option.titleDefault;
      }
    }

    formatedDate(noFormat) {
      let formatDate = '';
      let dateNow = new Date(noFormat);
      let dd = (+dateNow.getDate() < 10) ? '0' + dateNow.getDate() : dateNow.getDate();
      let mm = (+dateNow.getMonth() < 10) ? '0' + (+dateNow.getMonth() + 1) : +dateNow.getMonth() + 1;
      let yyyy = dateNow.getFullYear();

      formatDate = dd + '.' + mm + '.' + yyyy;
      return formatDate;
    }

    formatedDateRange(noFormat) {
      let formatDate = '';
      let option = {
        day: '2-digit',
        month: 'short'
      };
      formatDate = Intl.DateTimeFormat('ru-RU',option).format(new Date(noFormat[0])).slice(0, -1) + ' - ' +
                   Intl.DateTimeFormat('ru-RU',option).format(new Date(noFormat[1])).slice(0, -1)
      return formatDate;
    }
}