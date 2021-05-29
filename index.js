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
            <h3>${book.attributes.title}</h3>
            
            <button dataId=${book.id}>Delete</button>
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
  postFetch(body)

  
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
    .then((data) => {
      console.log(data);
      const bookMarkup = `
          <div dataId=${data.id}>
            <img src=${data.imgUrl} height="200" width="200">
            <h3>${data.title}</h3>
            
            <button dataId=${data.id}>Delete</button>
          </div>
          <br><br>
        `;
      document.querySelector("#book-container").innerHTML += bookMarkup;
    })
    .catch((errors) => console.log(errors));
}

