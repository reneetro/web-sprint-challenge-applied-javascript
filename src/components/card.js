import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement('div');
  const headlineHolder = document.createElement('div');
  const author = document.createElement('div');
  const imgHolder = document.createElement('div');
  const authorImage = document.createElement('img');
  const byLine = document.createElement('span');

  card.classList.add('card');
  headlineHolder.classList.add('headline');
  author.classList.add('author');
  imgHolder.classList.add('img-container');

  headlineHolder.textContent = article.headline;
  byLine.textContent = article.authorName;

  authorImage.src = article.authorPhoto;

  card.appendChild(headlineHolder);
  card.appendChild(author);
  author.appendChild(imgHolder);
  imgHolder.appendChild(authorImage);
  author.appendChild(byLine);
  
  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/articles')
    .then(resp => {
    
        const topics = Object.keys(resp.data.articles);
        //console.log(topics[0]);

      topics.forEach(topic => {
        const newTopic = resp.data.articles[topic];
        
        newTopic.forEach(tag => {
          console.log(tag);
          const newCard = Card(tag);
          const selectorElem = document.querySelector(selector);
          selectorElem.appendChild(newCard);
          return newCard;
        })

        
        
      })
 
    
    })

}



export { Card, cardAppender }
