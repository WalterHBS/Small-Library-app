const container = document.querySelector('.container')
const openDia = document.querySelector('.add-book')
const dialog = document.querySelector('dialog')
const closeDia = document.querySelector('.close-dialog')
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  }

function addBookToLibrary(title, author, pages, read) {
let newBook = new Book(title, author, pages, read)
myLibrary.push(newBook)
}
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', '295 pages', false)
console.log(myLibrary);

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