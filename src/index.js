import './style.scss'
import './toggle/toggle'
import './text-field/text-field'
import DropdownProps from './dropdown/dropdown-props'

console.log('Hello from index.js');

let roomDropdown = new DropdownProps(
  'propsRoom', 
  {
    titleType: 'text', 
    titleMask: [
      ['спальня','спальни','спален'],
      ['кровать','кровати','кроватей'],
      ['ванная комната','ванные комнаты','ванных комнат'],
    ],
    propsValueDefault: [2,2,0],
    propsValueLimit: [[1,5],[1,7],[0,2]],
    control: false
  }
);
console.log(roomDropdown);

let guestDropdown = new DropdownProps(
  'propsGuest', 
  {
    titleType: 'sum', 
    titleMask: [['гость','гостя','гостей']],
    titleDefault: 'Сколько гостей',
    propsValueDefault: [0,0,0],
    propsValueLimit: [[0,5],[0,7],[0,2]],
    control: true
  }
); // -- class Dropdown(id - dropdown element)
console.log(guestDropdown);

document.getElementById('getDropdownRoom').addEventListener('click', () => {
  console.log(roomDropdown.getValue());
})
document.getElementById('getDropdownGuest').addEventListener('click', () => {
  console.log(guestDropdown.getValue());
})
