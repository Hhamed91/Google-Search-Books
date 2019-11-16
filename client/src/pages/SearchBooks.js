import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchFrom from "../components/SearchFrom";
import SearchResults from "../components/SearchResults"

class SearchBooks extends Component {
    state = {

        search: "",
        books: [],
        error: "",
        message: ""
    };

    handleInputChange = event => {

        this.setState({ search: event.target.value })
    }

    handleFromFrom = event => {
        event.preventDafult();

        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);

                } else {
                    let resutls = res.data.items;

                    resutls = resutls.map(resutls => {
                        resutls = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return resutls;
                    })

                    this.setState({ books: resutls, error: "" })
                }
            })

            .catch(err => this.setState({ error: err.items }))

        handleSavedButton = event => {
            event.preventDafult();

            let savedBooks = this.setState.books.filter(book => book.id === event.target.id)
            savedBooks = savedBooks[0]

            API.savedBooks(savedBooks)
                .then(this.setState({ message: alert("You book is saved") }))
                .catch(err => this.setState({ error: err.items }))

        }

    }
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1 className="text-white">Find Your Favorite Books with GoogleBook API</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }

}