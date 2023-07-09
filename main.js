const btn = document.querySelector('button');
const img = document.querySelector('.img-result');

btn.addEventListener('click', getFetch);

function getFetch() {
  console.log('get pic');
  const url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      img.src = data.message;
    })
    .catch(err => {
      console.log(`Error ${err}`)
    });   
}
