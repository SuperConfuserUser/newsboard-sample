import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import ArticleList from './ArticleList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Newsboard</header>
        <h1>Hello World</h1>
        <Nav />
        <main>
          <ArticleList />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
