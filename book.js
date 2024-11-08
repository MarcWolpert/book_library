const myLibrary=[];

function Book(name, author, pages, isRead){
    this.name=name;
    this.author=author;
    this.pages=pages;
    this.isRead= (isRead? "is read": "has not been read")
}

function addBookToLibrary(book){
    const cardDiv=document.createElement("div");
    cardDiv.className="card";

    const bookName=document.createElement("p");
    bookName.className="book cardAttributes";

    const authorName=document.createElement("p");
    authorName.className="author cardAttributes";

    const pagesRead=document.createElement("p");
    pagesRead.className="isRead cardAttributes";

    const readBefore=document.createElement("p");
    readBefore.className="isRead cardAttributes";

    const buttonChangeReadStatus=document.createElement("button");
    buttonChangeReadStatus.className="changeReadStatus";

    const buttonRemoveBook=document.createElement("button");
    buttonRemoveBook.className="removeBook";
    buttonRemoveBook.addEventListener((cardDiv)=>{
        
    })

    cardDiv.appendChild(bookName);
    cardDiv.appendChild(authorName);
    cardDiv.appendChild(pagesRead);
    cardDiv.appendChild(readBefore);
    cardDiv.appendChild(buttonChangeReadStatus);
    cardDiv.appendChild(buttonRemoveBook);

    const bookList=document.querySelector(".bookList");
    bookList.append(cardDiv);
}

for (let i=0; i<15; i++){
    bookI=new Book(i,i,i,0);
    myLibrary.push(bookI);
}
