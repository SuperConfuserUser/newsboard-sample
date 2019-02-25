import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import Banner from './Banner'
import Nav from './Nav'
import Footer from './Footer'
import History from './History'
import Loading from './Loading'
import ArticleList from './articles/Index'
import Article from './articles/Show'

const APIURL = `https://newsapi.org/v2/everything?sources=engadget&language=en&apiKey=${process.env.REACT_APP_ENGADGET_API_KEY}`

class App extends Component {
  constructor() {
    super()

    this.state = {
      articleData: {},
      articleCount: 1
    }
  }
  
  componentDidMount() {
    fetch(`${APIURL}`)
      .then(response => response.json())
      .then(articleData => this.setState({ articleData }))
  }

  render() {
    const { articles } = this.state.articleData
    const { articleCount } = this.state

    return (
      <Router>
        <div className="App">
          <Header />
          <main>
            <Route exact path = '/articles' render={(props) =>(
              <>
                <Banner />
                <Nav />
                { articles
                  ? <ArticleList {...props} articles={articles} articleCount={articleCount} />
                  : <Loading />
                }
              </>
            )}/>

            {articles && 
              <Route path = '/articles/:articleId' render={({ match }) => (
                <Article article={articles[match.params.articleId]} articles={articles} />
              )}/>
            }

            <Route path ='/history' component={History} />
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
