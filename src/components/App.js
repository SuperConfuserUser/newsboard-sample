import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import ArticleList from './articles/Index'
import Article from './articles/Show'

class App extends Component {
  render() {
    const articles = ['1', '2', '3', '4']

    return (
      <div className="App">
        <header>Newsboard</header>
        <h1>Hello World</h1>
        <Nav />
        <main>
          <ArticleList articles={articles} />
          <Article article={articles[0]}/>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
