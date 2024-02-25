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
 deleteBtn.innerHTML = "Delete"
 card.setAttribute('order', k)
 container.append(card)
 card.append(paraG)
card.append(deleteBtn)

 if(myLibrary[k].read == undefined){
 paraG.innerHTML = `${myLibrary[k].title} by ${myLibrary[k].author}, ${myLibrary[k].pages}, have not read.`
}
else{
  paraG.innerHTML = `${myLibrary[k].title} by ${myLibrary[k].author}, ${myLibrary[k].pages}, have read.`
}
deleteBtn.addEventListener('click', () => {
  let execute = document.querySelector(`div[order="${k}"]`);
  execute.remove();
})
}

 ShowDialog.addEventListener('click', () => {
    dialog.showModal()
  })

//Get user input 
form.addEventListener('submit', (e) =>  { e.preventDefault();})
submitForm.addEventListener('click', (e) => {
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

