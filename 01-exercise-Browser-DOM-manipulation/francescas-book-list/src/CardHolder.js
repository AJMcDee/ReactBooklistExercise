import Card from "./Card";
function CardHolder({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => {
        return <Card book={book} />;
      })}
    </div>
  );
}

export default CardHolder;
