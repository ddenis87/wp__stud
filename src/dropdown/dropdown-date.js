import Dropdown from './Dropdown' // import base class
import DropdownControl from './__control/dropdown__control';
import './__date/dropdown-date__date';

export default class DropdownDate extends Dropdown {
    constructor(idDropdown) {
      super(idDropdown);
    }
}