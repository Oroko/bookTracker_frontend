const url = "http://localhost:3000/api/v1/books";
document.addEventListener("DOMContentLoaded", () => {
  getBooks();
  const createBookForm = document.querySelector("#create-book");
  createBookForm.addEventListener("submit", (e) => {
    createFormHandler(e);
  });
});

const getBooks = () => {
  fetch(url)
    .then((res) => res.json())
    .then((books) => {
      books.data.map((book) => {
        const bookMarkup = `
          <div dataId=${book.id}>
            <img src=${book.attributes.imgUrl} height="200" width="200">
            <h3>${book.attributes.title}
            
            <button dataId=${book.id}>edit</button>
          </div>
          <br><br>
        `;
        document.querySelector("#book-container").innerHTML += bookMarkup;
      });
    })
    .catch((error) => console.log(error));
};

const createFormHandler = (e) => {
  e.preventDefault();
  const data = new FormData(e.target)
  const value = Object.fromEntries(data.entries())
  console.log({value})
};

// {
// "data": [
// {
// "id": "1",
// "type": "book",
// "attributes": {
// "title": "The Alchemist",
// "genre": null,
// "imgUrl": null,
// "status": null,
// "author_id": 1
// },
// "relationships": {
// "author": {
// "data": {
// "id": "1",
// "type": "author"
// }
// }
// }
// },
