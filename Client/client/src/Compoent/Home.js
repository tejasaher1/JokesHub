import React, { useState } from 'react';
import axios from 'axios';


function SearchJokes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jokes, setJokes] = useState([]);

  const searchJokes = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/jokes/search?term=${searchTerm}`);
      setJokes(response.data);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  const addToFavourites = async (joke) => {
    try {
      await axios.post('http://localhost:5000/api/jokes/favourite', joke);
      alert('Joke added to favourites');
    } catch (error) {
      console.error('Error adding joke to favourites:', error);
    }
  };

  return (
    <div
      className="container-fluid min-vh-100"
      style={{
        backgroundColor: '#f8f9fa',
        padding: '30px 15px',
      }}
    >
      <a href='http://localhost:3000/Fav' style={{position:'relative',left:'90%'}}> Favorites </a>
      <div className="container py-5">
        <div className="text-center">
          <h1 className="mb-4 display-4 text-primary">Joke Finder</h1>
          <p className="lead">Search for jokes and save your favorites!</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a search term..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-primary" onClick={searchJokes}>
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          {jokes.map((joke) => (
            <div className="col-md-4 mb-4" key={joke.id}>
              <div
                className="card shadow-sm"
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <div
                  className="card-body"
                  style={{
                    backgroundColor: '#ffffff',
                  }}
                >
                  <p
                    className="card-text"
                    style={{
                      fontSize: '1.2rem',
                      color: '#333',
                      fontStyle: 'italic',
                    }}
                  >
                    {joke.joke}
                  </p>
                  <div className="text-end">
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() =>
                        addToFavourites({ joke_id: joke.id, joke_text: joke.joke })
                      }
                    >
                      Add to Favourites
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchJokes;
