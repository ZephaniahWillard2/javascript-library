
document.addEventListener("DOMContentLoaded", function() {
    
    // Define an array to store books
let bookLibrary = [];
  
    // Function to add a book to the library
function addBook(title, author, pages, isRead) {
    let book = {
        title: title,
        author: author,
        pages: pages,
        isRead: isRead,
    };
    bookLibrary.push(book);
    console.log(bookLibrary);
}
  
    // Function to display books in the library
function displayBooks() {
    let bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

  
    // Loop through each book in the library and create a list item for each
for(let i = 0; i < bookLibrary.length; i++) {
    let book = bookLibrary(i);
    let bookItem = document.createElement("li");
    bookItem.textContent = `${book.title} by ${book.author} - ${book.pages} (${book.isRead ? "Read" : "Unread"})`;
    bookList.appendChild(bookItem);
}
}
    // Add some sample books to the library
    addBook("The Alchemist", "Paulo Coelho", 100, false);
    addBook("The Great Gatsby", "F Scott Fits", 218, false);
    addBook("A New Earth", "Echart Tolle", 100, false);
    addBook("To Kill a Mocking Bird", "Harper Lee", 100, true);
    addBook("1984", "George Orwell", 100, false);

  
  
    // Display the books in the library
displayBooks();
}); 