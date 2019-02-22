import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Analytics from './Analytics'
import ArticleList from './articles/Index'
import Article from './articles/Show'

class App extends Component {
  render() {
    const articles = [{"id":1,"title":"Polarised empowering matrix","description":"Sed ante. Vivamus tortor. Duis mattis egestas metus."},
    {"id":2,"title":"Triple-buffered tangible toolset","description":"Phasellus in felis. Donec semper sapien a libero. Nam dui."},
    {"id":3,"title":"Quality-focused radical strategy","description":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."},
    {"id":4,"title":"Organic multi-tasking forecast","description":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."},
    {"id":5,"title":"Monitored client-server capability","description":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."}]

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
              </>
            )}/>
            {articles && (
              <Route path = '/articles/:articleId' render={({ match }) => (
                <Article article={articles.find(a => a.id == match.params.articleId )} />
              )} />
            )}
            <Route path ='/analytics' component={Analytics} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
