class Book {
  constructor(book, bookAttributes) {
    this.id = book.id;
    this.title = bookAttributes.title;
    this.genre = bookAttributes.genre;
    this.imgUrl = bookAttributes.imgUrl;
    this.status = bookAttributes.status;
    this.author = bookAttributes.author;
    Book.all.push(this);
  }

  renderBook() {
    return `
     <div class="book-div" data-id=${this.id}>
      <img src=${this.imgUrl} height="150" width="150">
      <h6>${this.title}</h6>
            
      
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" data-id=${this.id} class=" delete-button bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
   </div>
   <br><br>
   `;
  }
  removeBook = () => {
    
      
        fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((book) => console.log(book));
    
    
  };
}
Book.all = [];
