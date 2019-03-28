document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('#number').value;

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      
      let output = '';
  
      if(response.type === 'success') {
        response.value.forEach(function(arrItem) {
          output += `<li>${arrItem.joke}</li>`;
        });
      }
      else {
        output += '<li>Sorry, something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();

  e.preventDefault(); /* it's a button */
}