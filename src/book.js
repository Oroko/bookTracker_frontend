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
     <div data-id=${this.id}>
      <img src=${this.imgUrl} height="200" width="200">
      <h3>${this.title}</h3>
            
      <button  class="delete-button" data-id=${this.id}>Delete</button>
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
