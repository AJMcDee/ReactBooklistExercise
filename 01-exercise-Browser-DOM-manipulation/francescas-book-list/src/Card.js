// import styled from "styled-components"; //Styled component example
// const Button = styled.button`
// background: transparent;
// border-radius: 3px;
// border: 2px solid palevioletred;
// color: palevioletred;
// margin: 0 1em;
// padding: 0.25em 1em;
// `;

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
          {/* <Button>Text here</Button> // Styled Component Example */}
          <span className={badgeClasses}>{badgeText}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
