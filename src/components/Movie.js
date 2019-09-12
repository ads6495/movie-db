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
      <main id="bg">
        <section className="Header-section">
          <h1>Hello, World!</h1>
        </section>
        <ul style={{ width: "50%" }}>
          {this.state.searchResults.map(result => {
            return (
              <li key={result.id}>
                <div className="main-section">
                  <img src={`${this.state.imgUrl}${result['poster_path']}`} />
                  <div className="inner-div-flex">

                    <h3>{result.title} <span>Overall rating: {result.vote_average}</span></h3>
                    <p>{result.overview}</p>
                  </div>
                </div>
              </li>



            )
          })}
        </ul>
      </main >
    )
  }
}

export default MovieApiGrab
