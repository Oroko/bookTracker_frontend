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

  const body = {
    title: value.title,
    genre: value.genre,
    imgUrl: value.image,
    status: value.status,
    author_id: parseInt(value.authors),
  };
  postFetch(body);
  data = ""
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
      let newBook = new Book(book, book);
      document.querySelector("#book-container").innerHTML +=
        newBook.renderBook();
    })
    .catch((errors) => console.log(errors));
};

document.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (e.target.classList.contains("delete-button")) {
    e.target.parentNode.remove();
  }

  fetch(url + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
});



const toggleForm = () => {
  const form = document.querySelector("#form-container");
  
  if (form.style.display === "none") {
    form.style.display = "block";
    
    
  } else {
    form.style.display = "none";
    
  }
};

