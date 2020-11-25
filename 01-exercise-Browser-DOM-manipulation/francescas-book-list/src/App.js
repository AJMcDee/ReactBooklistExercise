import Header from "./Header";
import CardHolder from "./CardHolder";

function App() {
  const books = [
    {
      title: "The Design of EveryDay Things",
      author: "Don Norman",
      alreadyRead: false,
      img:
        "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      img:
        "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
    },
    {
      title: "Thinking with Type",
      author: "Ellen Lupton",
      alreadyRead: true,
      img:
        "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      alreadyRead: false,
      img: "https://eloquentjavascript.net/img/cover.jpg",
    },
  ];

  function splitAuthorName(arrOfBooks) {
    for (let book of arrOfBooks) {
      let authorNames = book.author.split(" ");
      book.authorFirstName = authorNames[0];
      book.authorLastName = authorNames[authorNames.length - 1];
    }
  }

  function sortBySurname(arrOfBooks) {
    return arrOfBooks.sort((a, b) => {
      if (a.authorLastName > b.authorLastName) return 1;
      else return -1;
    });
  }

  splitAuthorName(books);
  let sortedBooks = sortBySurname(books);

  return (
    <div className="App">
      <Header />
      <CardHolder books={sortedBooks} />
    </div>
  );
}

export default App;
