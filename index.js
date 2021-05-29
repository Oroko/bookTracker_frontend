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
      console.log(books);
      books.data.map((book) => {
        const bookData = {
          id: book.id,
          imgUrl: book.attributes.imgUrl,
          title: book.attributes.title,
        };
        render(bookData);
      });
    })
    .catch((error) => console.log(error));
};

const createFormHandler = (e) => {
  e.preventDefault();
  // const data = new FormData(e.target);

  // const value = Object.fromEntries(data.entries());
  // console.log({ value });

  const title = document.querySelector("#input-title").value;
  const genre = document.querySelector("#input-genre").value;
  const imgUrl = document.querySelector("#input-image-url").value;
  console.log(imgUrl)
  const status = document.querySelector('input[name="status"]:checked').value;
  const author_id = parseInt(document.querySelector("#authors").value);

  // const body = {
  //   title: title,
  //   genre: genre,
  //   imgUrl: image,
  //   status: status,
  //   author_id: author_id
  // };

  postFetch(title, genre, imgUrl, status, author_id);
};

const postFetch = (title, genre, image_url, status, author_id) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      title: title,
      genre: genre,
      imgUrl: image_url,
      status: status,
      author_id: author_id,
    }),
  })
    .then((res) => res.json())
    .then((book) => {
      console.log(book);
      // const bookMarkup = `
      //     <div data-id=${book.id}>
      //       <img src=${book.imgUrl} height="200" width="200">
      //       <h3>${book.title}</h3>

      //       <button data-id=${book.id}>Delete</button>
      //     </div>
      //     <br><br>
      //   `;

      render(book);
      //document.querySelector("#book-container").innerHTML += bookMarkup;
    })
    .catch((errors) => console.log(errors));
};

const render = (book) => {
  console.log('from render function', book)
  const bookMarkup = `
          <div data-id=${book.id}>
            <img src=${book.imgUrl} height="200" width="200">
            <h3>${book.title}</h3>
            
            <button data-id=${book.id}>Delete</button>
          </div>
          <br><br>
        `;
  document.querySelector("#book-container").innerHTML += bookMarkup;
};
