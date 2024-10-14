//Create your own object to reflect your own hobby or interest. You could choose sports, cookies, music, books, movies, cars ...
//Create a projet for Books

//define an array of objects
const books = [
     { title: "City and the Stars",
     author: "Arthur C Clarke",
     genre: "Sci-Fiction"
},
{
   title: "Annie Bot",
   author: "Annie Greene",
   genre: "Thriller"
},
{
   title: "Chlorine",
   author: "Jade Song",
   genre: "Surrealism-Horror"
  },
  {
     title: "The husbands",
     author: "unknown",
     genre: "Satire"
    },
];
console.log(books)//checking

// Populate the array with objects, and reflect the objects in the display area

const setUpPage = () => {
     let bookSet = [];  

     const bookListRef = document.querySelector(".bookListRef");
     const bookDetailsRed = document.querySelector(".bookDetailsRed");
   
     books.forEach((book) => {
       const listItem = document.createElement("li");
       listItem.textContent = books.title;
       joinBooks(bookSet, book.title);     
       bookListRef.appendChild(bookDetails);       
     });
     bookListRef.textContent = bookDetails.join(" - ");
   };
//Create
const addNewBook = () =>
{
   let title = prompt("Book title?");
   let author = prompt("Author name?");
   let genre = prompt("What genre?");
}
   console.log(addNewBook.title)
