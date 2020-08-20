import './style.scss'
import './toggle/toggle'
import './text-field/text-field'
import Dropdown from './dropdown/dropdown'

console.log('Hello from index.js');

let roomDropdown = new Dropdown(
  'propsRoom', 
  {
    titleType: 'text', 
    titleMask: [
      ['спальня','спальни','спален'],
      ['кровать','кровати','кроватей'],
      ['ванная комната','ванные комнаты','ванных комнат'],
    ]
  }
); // -- class Dropdown(id - dropdown element)
let guestDropdown = new Dropdown('propsGuest', {titleType: 'sum', titleMask: ['гость','гостя','гостей']}); // -- class Dropdown(id - dropdown element)

document.getElementById('getDropdown').addEventListener('click', () => {
  console.log(roomDropdown.getValue());
 
})

console.log(roomDropdown);