import React from "react";
import { Container, Row, Col } from "../Grid";

export function bookResults(props) {
  console.log(props);
  return (
    <p>{props}</p>
  )
}

bookResults();
// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  title,
  author,
  description
}) {
  return (

    <li className="list-group-item">
      <Container>
        <Row>
          {
            <Col size="xs-8 sm-9">
              <h3>{title}</h3>
              <p>Author: {author}</p>
            </Col>

          }
          {/* <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail || "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Ingredients: {ingredients}</p>
            <a rel="noreferrer noopener" target="_blank" href={href}>
              Go to recipe!
            </a>
          </Col> */}


        </Row>
      </Container>
    </li>
  );
}




export default BookList;