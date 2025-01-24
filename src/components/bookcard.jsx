import React from "react";

const BookCard = ({ book }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
    maxWidth: "250px",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    marginBottom: "10px",
  };

  const textStyle = {
    margin: "5px 0",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <img src={book.image} alt={book.name} style={imageStyle} />
      <h3>{book.name}</h3>
      <p style={textStyle}>Genre: {book.genre}</p>
      <p style={textStyle}>Author: {book.author}</p>
    </div>
  );
};

export default BookCard;
