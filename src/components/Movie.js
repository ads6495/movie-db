import React, { Component } from 'react'
import axios from 'axios'

class MovieApiGrab extends Component {
  state = {
    imgUrl: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
    searchResults: []
  }

  movie = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=2d3a8fbb2336ce29522e69bb7f40bffa'
    )
    this.setState({
      searchResults: resp.data.results
    })
    console.log(this.state.searchResults)
  }

  componentDidMount() {
    this.movie()
  }

  render() {
    return (
      <main>
        <section className="Header-section">
          <h1>Hello, World!</h1>
        </section>
        <section className="movie-section">
          <ul>
            {this.state.searchResults.map(result => {
              return (
                <li key={result.id}>
                  <img src={`${this.state.imgUrl}${result['poster_path']}`} />
                  <h3>{result.title}</h3>
                  <p>Overall rating: {result.vote_average}</p>
                  <p>{result.overview}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    )
  }
}

export default MovieApiGrab
