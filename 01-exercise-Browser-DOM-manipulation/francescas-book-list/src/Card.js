function Card({ book }) {
  let altText = `Cover of ${book.title} by ${book.author}.`;

  let badgeText, badgeClasses;
  if (book.alreadyRead) {
    badgeText = "Read";
    badgeClasses =
      "badge badge-pill badge-success font-weight-normal float-right font-italic";
  } else {
    badgeText = "To read";
    badgeClasses =
      "badge badge-pill badge-secondary font-weight-normal float-right font-italic";
  }
  return (
    <div className="col-xs-12 col-sm-6 col-lg-3 p-1 d-flex justify-content-center">
      <div className="card book">
        <a href={book.img}>
          <img
            className="card-img-top book-cover"
            alt={altText}
            src={book.img}
          />
        </a>
        <div className="card-body">
          <h5>{book.title}</h5>
          <p className="card-text text-muted small">{book.author}</p>
        </div>
        <div className="card-footer">
          <span className={badgeClasses}>{badgeText}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
