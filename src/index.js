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
      //console.log(books);
      books.data.map((book) => {
        let newBook = new Book(book, book.attributes);

        document.querySelector("#book-container").innerHTML +=
          newBook.renderBook();
      });
    })
    .catch((error) => console.log(error));
};

const createFormHandler = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  const value = Object.fromEntries(data.entries());
  //console.log({ value });

  const body = {
    title: value.title,
    genre: value.genre,
    imgUrl: value.image,
    status: value.status,
    author_id: parseInt(value.authors),
  };
  postFetch(body);
};

const postFetch = (formData) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((book) => {
      //console.log(book);
      // const bookMarkup = `
      //     <div data-id=${book.id}>
      //       <img src=${book.imgUrl} height="200" width="200">
      //       <h3>${book.title}</h3>

      //       <button data-id=${book.id}>Delete</button>
      //     </div>
      //     <br><br>
      //   `;

      let newBook = new Book(book, book);
      document.querySelector("#book-container").innerHTML += newBook.renderBook();
    })
    .catch((errors) => console.log(errors));
};

// const render = (book) => {
//   const bookMarkup = `
//           <div data-id=${book.id}>
//             <img src=${book.attributes.imgUrl} height="200" width="200">
//             <h3>${book.attributes.title}</h3>

//             <button data-id=${book.id}>Delete</button>
//           </div>
//           <br><br>
//         `;
//   document.querySelector("#book-container").innerHTML += bookMarkup;
// };
