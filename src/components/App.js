import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import History from './History'
import ArticleList from './articles/Index'
import Article from './articles/Show'

class App extends Component {
  render() {
    const articles = [
      {
      "source": {
      "id": "engadget",
      "name": "Engadget"
      },
      "link": "0",
      "author": "Jon Fingas",
      "title": "Trailer for Jordan Peele's 'Twilight Zone' shows an unsettling universe",
      "description": "CBS All Access has unveiled its first trailer for Jordan Peele's 'The Twilight Zone,' and it's a darker take on a classic series.",
      "url": "https://www.engadget.com/2019/02/21/twilight-zone-trailer/?utm_campaign=homepage&amp;utm_medium=internal&amp;utm_source=dl",
      "urlToImage": "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1600%252C1067%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C1067%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-02%252F87ce1080-3616-11e9-bede-a58562f376bd%26client%3Da1acac3e1b3290917d92%26signature%3D405be2c8ecd5c90049b5ab5d21fc8545c2746182&client=amp-blogside-v2&signature=3c5928d0b6b2fc5252d7ce0b85ee8ed09fbe6a8a",
      "publishedAt": "2019-02-21T21:42:00Z",
      "content": "You no longer have to wonder how Jordan Peele would handle a reboot of The Twilight Zone. CBS All Access has shared the first trailer for the streaming series, and it appears to be what you'd hope for from the Get Out director: a more disturbing take on the c… [+275 chars]"
      },
      {
      "source": {
      "id": "engadget",
      "name": "Engadget"
      },
      "link": "1",
      "author": "Daniel Cooper",
      "title": "Don’t buy a phone just for 5G",
      "description": "Why pay a premium for a feature you'll barely be able to use?",
      "url": "https://www.engadget.com/2019/02/21/samsung-galaxy-s10-5g-hype/?utm_campaign=homepage&amp;utm_medium=internal&amp;utm_source=dl",
      "urlToImage": "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-02%252Fe652da80-35f5-11e9-af7f-fb20e8c73417%26client%3Da1acac3e1b3290917d92%26signature%3Da7d5ddef5e3611815010aca66732b6c8b03dded8&client=amp-blogside-v2&signature=afb52c4af33af1876c24ea9db5b6ce1bddca1b0f",
      "publishedAt": "2019-02-21T18:00:00Z",
      "content": "To take advantage of the speed and extra capacity 5G offers, Samsung hopes that we'll all buy the new Galaxy S10 5G. The phone is a larger S10, with a bigger screen, longer-lasting battery and, crucially, a 5G modem. But there are two issues with this, one of… [+2789 chars]"
      },
      {
      "source": {
      "id": "engadget",
      "name": "Engadget"
      },
      "link": "2",
      "author": "Kris Holt",
      "title": "Tesla Model 3 loses Consumer Reports recommendation",
      "description": "'Declining reliability' meant six cars lost the designation.",
      "url": "https://www.engadget.com/2019/02/21/tesla-model-3-consumer-reports-recommendation/?utm_campaign=homepage&amp;utm_medium=internal&amp;utm_source=dl",
      "urlToImage": "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D5112%252C2952%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C924%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-images%252F2019-02%252Fbdfa5c50-35f2-11e9-aef7-b92048d4b0f2%26client%3Da1acac3e1b3290917d92%26signature%3D94e5e7c26a50319bacf80c88b3b1b5990d21ec53&client=amp-blogside-v2&signature=2dd53deedffb55be6d1fa5594d27a4afc42ddb5f",
      "publishedAt": "2019-02-21T17:45:00Z",
      "content": "The Model 3 is one of six cars to lose the recommendation, along with the Chrysler 300, Dodge Charger, Acura RDX, BMW 5 Series and Volkswagen Tiguan. A dip in reliability caused each car's overall score to drop below the threshold for a recommendation. On the… [+2300 chars]"
      },
      {
      "source": {
      "id": "engadget",
      "name": "Engadget"
      },
      "link": "3",
      "author": "Aaron Souppouris",
      "title": "The problem with the Galaxy Fold",
      "description": "Take a look at the Galaxy Fold's 68 official images on Samsung's press site, and see if you can work out what's missing. Or watch the promotional clip and tell...",
      "url": "https://www.engadget.com/2019/02/21/the-problem-with-the-galaxy-fold/?utm_campaign=homepage&amp;utm_medium=internal&amp;utm_source=dl",
      "urlToImage": "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2019-02%2Fc6aff660-35ee-11e9-9fac-0ee01d44d826&client=amp-blogside-v2&signature=bb488ee1ff91531296bfdd792112df6daab1005a",
      "publishedAt": "2019-02-21T17:15:00Z",
      "content": "This is the Galaxy Fold... folded. Just look at the outline of the device. The image comes from the reveal video, which is the single piece of media that shows this angle. (Even then, it's only for two seconds.) In it, you can see a clear, and frankly glaring… [+3228 chars]"
      },
      {
      "source": {
      "id": "engadget",
      "name": "Engadget"
      },
      "link": "4",
      "author": "AJ Dellinger",
      "title": "Sony and camera startup Light team up for multi-lens smartphone",
      "description": "Sony and Light are teaming up to create better smartphone cameras.",
      "url": "https://www.engadget.com/2019/02/21/sony-light-partnership-smartphone-cameras/?utm_campaign=homepage&amp;utm_medium=internal&amp;utm_source=dl",
      "urlToImage": "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-02%252Fafd7ffb0-35fc-11e9-8ed9-b4c7bffe7af6%26client%3Da1acac3e1b3290917d92%26signature%3D0991ef0ad9846d569e8c54db7f0290890bf67b26&client=amp-blogside-v2&signature=5931c312e066856c6c0c448da27a010ba6b7a089",
      "publishedAt": "2019-02-21T16:39:00Z",
      "content": "While the companies didn't provide much detail about what their partnership may bring, the pairing makes sense. Light has mastered multi-camera technology -- perhaps most notably with its L16 camera, a device that uses 16 individual lenses packed into a smart… [+569 chars]"
      }
      ]

    return (
      <Router>
        <div className="App">
          <header>
            <Link to={'/articles'}>
              <div class='logo'>Newsboard</div>
            </Link>
            <Link to={'/history/'} >
              <div class='outbound-link'>History</div>
            </Link>
          </header>
          <main>
            <Route exact path = '/articles' render={() => (
              <>
                <div class='brand-banner'>
                  <h1>Get Informed<br/>
                    <span>Get Inspired</span>
                  </h1>
                  <p>Stories Curated For You</p>
                </div>
                <Nav />
                <ArticleList articles={articles} />
              </>
            )}/>
            {articles && (
              <Route path = '/articles/:articleId' render={({ match }) => (
                <Article article={articles.find(a => a.link == match.params.articleId )} />
              )} />
            )}
            <Route path ='/history/' component={History} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
