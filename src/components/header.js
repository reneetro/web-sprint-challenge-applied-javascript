const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const headerDiv = document.createElement('div');
  const shownDate = document.createElement('span');
  const shownTitle = document.createElement('h1');
  const shownTemp = document.createElement('span');

  headerDiv.classList.add('header');
  shownDate.classList.add('date');
  shownTemp.classList.add('temp');

  shownDate.textContent = date;
  shownTitle.textContent = title;
  shownTemp.textContent = temp;

  headerDiv.appendChild(shownDate);
  headerDiv.appendChild(shownTitle);
  headerDiv.appendChild(shownTemp);

  return headerDiv;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const newHeader = Header('Woman Saves Dog Stuck in Tree', 'Nov 18, 1999', '80');
  const selectorElem = document.querySelector(selector);
  selectorElem.appendChild(newHeader);
}

export { Header, headerAppender }
