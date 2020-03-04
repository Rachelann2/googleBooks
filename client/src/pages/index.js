import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";

//components
import Card from "../components/Card";


function App() {

    const [books, setbooks] = useState([]);
    const [booksSearch, setbooksSearch] = useState("");





    const handleBookChange = event => {
        console.log(event.target.value);
        setbooksSearch(event.target.value);
    }

    //when user clicks submit
    const handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        //stop page from refreshing
        event.preventDefault();

        //make api call to get book data
        API.getBooks(booksSearch).then(function (response) {
            console.log(response.data)

            //set the state of variable books so that it triggers a re
            //render on the page 
            setbooks(response.data);
            setbooksSearch("");

        });

    };


    return (
        <div>
            <Nav />
            <Jumbotron />





            <Container>
                <Row>
                    <Col size="md-12">
                        <form>
                            <Container>
                                <Row>
                                    <Col size="xs-9 sm-10">
                                        <Input
                                            onChange={handleBookChange}
                                            value={booksSearch}
                                            placeholder="Search For a Book"
                                        />
                                    </Col>
                                    <Col size="xs-3 sm-2">
                                        <Button
                                            onClick={handleFormSubmit}
                                            type="success"
                                            className="input-lg" >
                                            Search
                    </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="xs-12">

                    </Col>
                </Row>
            </Container>
            <br />
            {/* {mapping over the books state} */}

            {
                books.map(function (book) {
                    var bookObj = {
                        title: book.volumeInfo.title,
                        authors: book.volumeInfo.authors ? book.volumeInfo.authors.toString() : "",
                        description: book.volumeInfo.description
                    }

                    if (!bookObj.title || !bookObj.authors || !bookObj.description) {
                        return;
                    }

                    console.log(bookObj);

                    return (
                        <Card bookObj={bookObj} />
                    )


                })
            }
            <br />
            <br />

            <div></div>
        </div >

    );
}

export default App;
