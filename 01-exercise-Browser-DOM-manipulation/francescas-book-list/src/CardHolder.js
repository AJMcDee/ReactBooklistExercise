import Card from "./Card";
import { uuid } from "uuidv4";

function CardHolder({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => {
        return <Card book={book} key={uuid()} />;
      })}
    </div>
  );
}

export default CardHolder;
