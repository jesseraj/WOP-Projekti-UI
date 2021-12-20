'use strict';
const url = 'http://localhost:5000'; // change url when uploading to server

// select existing html elements
const ul = document.querySelector('#list');


// create cat cards
const createMemeCards = (memes) => {
    // clear ul
    ul.innerHTML = '';
    memes.forEach((meme) => {
      // create li with DOM methods
      const img = document.createElement('img');
      img.src = url + cat.Profiilikuva;
      img.alt = meme.Käyttäjänimi;
      img.classList.add('resp');
  
      // open image in single.html
      img.addEventListener('click', () => {
        location.href = 'single.html?id=' + meme.KäyttäjäID;
      });
  
      const figure = document.createElement('figure').appendChild(img);
  
      const h2 = document.createElement('h2');
      h2.innerHTML = '';
  
      const p1 = document.createElement('p');
      p1.innerHTML = `Birthdate: `;
  
      const p2 = document.createElement('p');
      p2.innerHTML = `Weight:`;
  
      const p3 = document.createElement('p');
      p3.innerHTML = `Owner:`;
  
      const li = document.createElement('li');
      li.classList.add('light-border');
  
      li.appendChild(h2);
      li.appendChild(figure);
      li.appendChild(p1);
      li.appendChild(p2);
      li.appendChild(p3);
      ul.appendChild(li);
    })
};


// AJAX call
const getMeme = async () => {
    try {
      const fetchOptions = {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      };
      const response = await fetch(url + '/meme', fetchOptions);
      const memes = await response.json();
      createMemeCards(memes);
    } catch (e) {
      console.log(e.message);
    }
  };
  getMeme();
  