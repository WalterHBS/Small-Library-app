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
for (let i = 0; i < myLibrary.length; i++){
 let card = document.createElement('div')
 let paraG = document.createElement('p')
 container.append(card)
 card.append(paraG)
 if(myLibrary[i].read == false){
 paraG.innerHTML = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages}, have not read.`
}
else{
  paraG.innerHTML = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages}, have read.`
}
}
openDia.addEventListener('click', () => {
  dialog.showModal()
})

//Get user input 

form.addEventListener('submit', callbackFunction);
function callbackFunction(event) {
  event.preventDefault();
  const myFormData = new FormData(event.target);

  const formDataObj = Object.fromEntries(myFormData.entries());
  console.log(formDataObj);}
