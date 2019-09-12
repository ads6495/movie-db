import React, { Component } from 'react'
import Movie from './components/Movie'

class App extends Component {

  render() {
    return (
      <main>
        <header>
          <button className="primaryButton"></button>
          <h1>Hello SasS!</h1>


        </header>

        <Movie />
      </main>

    )
  }
}

export default App
