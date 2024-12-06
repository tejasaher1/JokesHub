import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Fav() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/favourites');
        setFavourites(response.data);
      } catch (error) {
        console.error('Error fetching favourites:', error);
      }
    };

    fetchFavourites();
  }, []);

  return (
    <div className="container mt-5">
      <a href='http://localhost:3000/' style={{position:'relative',left:'95%'}}> Home </a>
      <div className="text-center mb-4">
        <h1 className="display-5 text-primary">Favourite Jokes</h1>
      </div>

      <div className="row">
        {favourites.length === 0 ? (
          <div className="col-12 text-center">
            <p className="text-secondary fs-5">No favourites found! Add some jokes to your favourites.</p>
          </div>
        ) : (
          favourites.map((joke) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={joke.id}>
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body d-flex flex-column">
                  <blockquote className="blockquote mb-4 text-center">
                    <p className="mb-0 text-dark">{joke.joke_text}</p>
                  </blockquote>
                  <footer className="blockquote-footer mt-auto text-end">
                    Favourite Joke #{joke.id}
                  </footer>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}

export default Fav;
