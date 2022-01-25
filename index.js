const pobierzDane = document.getElementById('btn-order')
// tworzymy obiekt zamowienia
const order = {
    pizza: '',
    sosy: [],
    name:'',
    email:'',
    telefon:'',
    adres:'',
    text:'',
    napoje:[]
}
pobierzDane.addEventListener('click', takeOrder)
// piszemy funckje ktora to bedzie pobierac
function takeOrder () {
    // pobieranie selecta
const pizzaSelect = document.getElementById('form-select').value
    if(pizzaSelect === '0') {
        alert('nie wybrales pizzy')
      }  else {
          order.pizza = pizzaSelect
      }
    
// pobieramy napoje  
// jezeli pobieramy cos po class to pobieramy HTMLcollection - zeby to zmienic w tabilce lub lieterowalna tablice to Array.from to zrobi 
// Array.from - w nawiasie mowimy z czego ma stworzyc tablice
//  forEach to petla jak for, literuje sie po elementach naszej tablicy z checkboxami oraz za pomoca push dodaje do tablicy wartosci z pola checked
const napoje = Array.from(document.getElementsByClassName('form-check-napoje'))
    napoje.forEach(item => {
    order.napoje.push(item.checked)
})

// item => mozna rowniez zapisac function.item
// pobieramy sosy
const sosy = Array.from(document.getElementsByClassName('form-check-sosy'))
    sosy.forEach(item => {
    order.sosy.push(item.checked)
})
// pobieramy imie
// name !== '' ? name  - jesli name jest rozne od pustego stringu to podaj name 
// : alert ('Podaj imie i nazwisko') jesli jest puste to wyswietl alert
const name = document.getElementById('form-input-name').value
order.name = name !== '' ? name : alert ('Podaj imie i nazwisko')

// pobieramy email
// order.email = email !== '' ? email : alert ('Podaj email')
// sprawdzam czy w ciagu znakow jest @
const email = document.getElementById('form-input-email').value
order.email = email.search('@') && email.length > 3 ? email : alert ('Podaj email')
// console.log(email)

// pobieramy telefon 
// order.telefon = telefon !== '' ? telefon : alert ('Podaj telefon')
const telefon = document.getElementById('form-input-tel').value
// zmieniamy string na number
const telefonToNum = parseInt(telefon)
// sprawdza czy is Not a Number - isNaN
order.telefon = isNaN(telefonToNum) ? alert('To nie jeste telefon') : telefon
// order.telefon = telefon.parseInt(telefon,10) && telefon.isNaN(telefon) ? telefon : alert('Podaj telefon')

// pobieramy adres
const adres = document.getElementById('form-input-adres').value
order.adres = adres !== '' ? adres : alert ('Podaj adres')

// pobiermy text dla kuriera
const text = document.getElementById('form-input-info').value
order.text = text !== '' ? text : alert ('Wpisz informacje')

console.log(order)
}