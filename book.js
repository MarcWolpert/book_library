const myLibrary=[
        ["To Kill a Mockingbird", "Harper Lee", 150, 281, false],
        ["1984", "George Orwell", 328, 328, true],
        ["Pride and Prejudice", "Jane Austen", 120, 432, false],
        ["The Great Gatsby", "F. Scott Fitzgerald", 200, 200, true],
        ["Moby-Dick", "Herman Melville", 65, 635, false],
        ["War and Peace", "Leo Tolstoy", 500, 1225, false],
        ["Crime and Punishment", "Fyodor Dostoevsky", 430, 671, false],
        ["The Catcher in the Rye", "J.D. Salinger", 214, 214, true],
        ["Brave New World", "Aldous Huxley", 250, 311, false],
        ["The Hobbit", "J.R.R. Tolkien", 310, 310, true],
        ["Anna Karenina", "Leo Tolstoy", 100, 864, false],
        ["Jane Eyre", "Charlotte Brontë", 390, 500, false],
        ["The Odyssey", "Homer", 200, 541, false],
        ["Don Quixote", "Miguel de Cervantes", 700, 1072, false],
        ["Ulysses", "James Joyce", 50, 730, false]
];
let id=0;
function Book(name, author, pages,totalPages, isRead){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.totalPages=totalPages;
    this.isRead= (isRead? "Yes": "No")
}

function addBookToLibrary(book){
    const cardDiv=document.createElement("div");
    cardDiv.className="card";

    const bookName=document.createElement("p");
    bookName.className="book cardAttributes";
    bookName.textContent=`Book: ${book.name}`;

    const authorName=document.createElement("p");
    authorName.className="author cardAttributes";
    authorName.textContent=`Author: ${book.author}`;

    const pagesRead=document.createElement("p");
    pagesRead.className="isRead cardAttributes";
    pagesRead.textContent=`Pages Count: ${book.pages}/${book.totalPages}`;

    const readBefore=document.createElement("p");
    readBefore.className="isRead cardAttributes";
    readBefore.textContent=`Read Before: ${book.isRead}`

    const buttonChangeReadStatus=document.createElement("button");
    buttonChangeReadStatus.className="changeReadStatus";
    buttonChangeReadStatus.textContent=`Change Read Status`;

    const buttonRemoveBook=document.createElement("button");
    buttonRemoveBook.className="removeBook";
    buttonRemoveBook.textContent=`Remove Book`;


    const removeCard=function(){
        cardDiv.remove();
        //search in array
        for (let i=0; i<myLibrary.length; i++){
            console.log(book.name, myLibrary[i][0]);
            if (book.name===myLibrary[i][0]){
                myLibrary.splice(i,1);
                break;
            }
        }
        console.log(myLibrary);
    }
    const changeReadStatus=function(){
        if (readBefore.textContent.search("Yes")!==-1){
            book.isRead="No";
            readBefore.textContent=readBefore.textContent.replace("Yes", book.isRead);
        } else{
            book.isRead="Yes";
            readBefore.textContent=readBefore.textContent.replace("No", book.isRead);
        }
        console.log(book.isRead);
    }

    buttonChangeReadStatus.addEventListener("click",changeReadStatus);
    buttonRemoveBook.addEventListener("click",removeCard );

    cardDiv.appendChild(bookName);
    cardDiv.appendChild(authorName);
    cardDiv.appendChild(pagesRead);
    cardDiv.appendChild(readBefore);
    cardDiv.appendChild(buttonChangeReadStatus);
    cardDiv.appendChild(buttonRemoveBook);

    const bookList=document.querySelector(".bookList");
    bookList.append(cardDiv);
}



for (let i=0; i<myLibrary.length; i++){
// for (let i=0; i<3; i++){
    const b=myLibrary[i]
    const book1=new Book(b[0],b[1],b[2],b[3],b[4]);
    addBookToLibrary(book1);
}


const modal=document.getElementById("modal");
console.log(modal);
const addBookButton=document.getElementsByClassName("addBook")[0];
console.log(addBookButton);

addBookButton.addEventListener("click",()=>{
    modal.showModal();
})
// addBookButton.addEventListener("click",showModalDialog);
modal.addEventListener("click",(event)=>{
    if (event.target===modal){
        modal.close();
    }
})





const newBookForm = document.querySelector("#submitNewBook");


function submit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const output=[];
    formData.forEach((value,key)=>{
        output.push(value);
    })
    const newBook=new Book(output[0],output[1],output[2],output[3],output[4]);
    console.log(newBook);
    addBookToLibrary(newBook);
    newBookForm.reset();
    modal.close()
}
newBookForm.addEventListener("submit", submit);

