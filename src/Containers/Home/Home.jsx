import React from 'react';
import axios from 'axios';
import { Card, Button, Form } from 'react-bootstrap';

class Home extends React.Component {
  state = {
    films: [],
    searchTerm: '',
  }

  componentDidMount() {
    axios
      .get('https://gowatch.p.rapidapi.com/lookup/title/tmdb_id')
      .then(response => {
        this.setState({ films: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleSearchChange = event => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });

    // Debounce the API call so it doesn't fire on every keystroke
    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => {
      this.fetchFilms();
    }, 500);
  }

  fetchFilms() {
    axios
      .get('https://gowatch.p.rapidapi.com/lookup/title/tmdb_id', { params: { searchTerm: this.state.searchTerm }})
      .then(response => {
        this.setState({ films: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="container">
        <Form>
          <Form.Group controlId="formSearch">
            <Form.Label>Search for films</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a film title"
              value={this.state.searchTerm}
              onChange={this.handleSearchChange}
            />
          </Form.Group>
        </Form>

        <div className="card-columns">
          {this.state.films.map(film => (
            <Card key={film.id}>
              <Card.Img variant="top" src={film.posterUrl} />
              <Card.Body>
                <Card.Title>{film.title}</Card.Title>
                <Card.Text>{film.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;