//declare all the inputs
const container = document.querySelector('.book-container')
const openDia = document.querySelector('.add-book')
const dialog = document.querySelector('dialog')
const closeDia = document.querySelector('.close-dialog')
const form = document.querySelector('form')
const myLibrary = [];
//constructor function
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  }
//function to add the book into the array
function addBookToLibrary(title, author, pages, read) {
let newBook = new Book(title, author, pages, read)
myLibrary.push(newBook)
}
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', false)

//Prints the books into HTMl
const printBook = function(){
let k = myLibrary.length - 1 
 let card = document.createElement('div')
 let paraG = document.createElement('p')
 container.append(card)
 card.append(paraG)
 if(myLibrary[k].read == undefined){
 paraG.innerHTML = `${myLibrary[k].title} by ${myLibrary[k].author}, ${myLibrary[k].pages}, have not read.`
}
else{
  paraG.innerHTML = `${myLibrary[k].title} by ${myLibrary[k].author}, ${myLibrary[k].pages}, have read.`
}

openDia.addEventListener('click', () => {
  dialog.showModal()
})}

//Get user input 
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const preData = new FormData(form)
  userdata = Object.fromEntries(preData)

  addBookToLibrary(userdata.title, userdata.author, userdata.pages, userdata.read)
  printBook()
  form.reset()
});
printBook()