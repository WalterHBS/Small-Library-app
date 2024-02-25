//declare all the inputs
const container = document.querySelector('.book-container');
const ShowDialog = document.querySelector('.add-book');
const dialog = document.querySelector('.FormSubmission'); // Update the selector to match the class name of the dialog
const closeDia = document.querySelector('.close-dialog');
const form = document.querySelector('form');
const submitForm = document.querySelector('.submit-dialog');
const myLibrary = [];

//constructor function
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  }
  Book.prototype.changeRead = function(){
    if (this.read == undefined){
      this.read = true
    }
    else{
      this.read = undefined
    }
  }
//function to add the book into the array
function addBookToLibrary(title, author, pages, read) {
let newBook = new Book(title, author, pages, read)
myLibrary.push(newBook)
}


//Prints the books into HTMl
const printBook = function(){
let k = myLibrary.length - 1 
 let card = document.createElement('div')
 let paraG = document.createElement('p')
 let deleteBtn = document.createElement('button')
 let readBtn = document.createElement('button')
 let readValue;
 
 deleteBtn.innerHTML = "Delete"
 card.setAttribute('order', k)
 container.append(card)
 card.append(paraG)
card.append(deleteBtn)
card.append(readBtn)

 function changeReadValue(){if(myLibrary[k].read == undefined){
  readValue = 'have not read'
 readBtn.innerHTML = 'Mark as read'
}
else{
  readValue = 'have read'
  readBtn.innerHTML = 'Mark as unread'
}}
changeReadValue()
function printParaText(title, author, pages, read){
paraG.innerHTML = `${title} by ${author}, ${pages}, ${read}`
}
printParaText(myLibrary[k].title, myLibrary[k].author, myLibrary[k].pages, readValue)
//delete the display of the book
deleteBtn.addEventListener('click', () => {
  let execute = document.querySelector(`div[order="${k}"]`);
  execute.remove();
})
//change the read feature
readBtn.addEventListener('click', () => {
  myLibrary[k].changeRead()
  changeReadValue()
  printParaText(myLibrary[k].title, myLibrary[k].author, myLibrary[k].pages, readValue)
})
}

 ShowDialog.addEventListener('click', () => {
    dialog.showModal()
  })

//Get user input 
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const preData = new FormData(form)
  userdata = Object.fromEntries(preData)

  addBookToLibrary(userdata.title, userdata.author, userdata.pages, userdata.read)
  printBook()
  form.reset()
  dialog.close()

});
closeDia.addEventListener('click', () => {
  dialog.close()
})

