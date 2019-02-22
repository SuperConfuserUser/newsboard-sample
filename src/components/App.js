import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Analytics from './Analytics'
import ArticleList from './articles/Index'
import Article from './articles/Show'

class App extends Component {
  render() {
    const articles = ['1', '2', '3', '4']

    return (
      <Router>
        <div className="App">
          <header>
            <Link to={'/articles'}>
              Newsboard
            </Link>
            <Link to={'/analytics'} >
              Analytics
            </Link>
          </header>
          <main>
            <Route exact path = '/articles' render={() => (
              <>
                <h1>Hello World</h1>
                <Nav />
                <ArticleList articles={articles} />
            {/* <Article article={articles[0]}/> */}
              </>
            )}/>
            <Route path ='/analytics/' component={Analytics} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
