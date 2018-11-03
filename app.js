let arr = [
  {
    price: 10,
    src: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1075399.svg"
  },
  {
    price: 20,
    src: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/1072111.svg"
  },
  {
    price: 30,
    src: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/493457.svg"
  }
];

document.getElementById('add-cat').addEventListener('click', addCat);

document.querySelector('#api-cats').addEventListener('click', getCats);



function addCat() {

  for (let i = 0; i < arr.length; i++) {
    let t = document.querySelector('#temp');
    let tb = document.querySelector(".grid");
    let clone = document.importNode(t.content, true);

    if ('content' in document.createElement('template')) {
      clone.querySelector('.cat__price').textContent = `${arr[i].price}`;
      clone.getElementById('cat__image').src = `${arr[i].src}`;
    }

    tb.appendChild(clone);
  }

}


function getCats() {

  async function catFetch() {
    // await the response of the fetch call
    const response = await fetch
      ('https://ma-cats-api.herokuapp.com/api/cats');

    const data = await response.json();
    return data;
  }
  catFetch().then(function (obj) {
    obj.cats.forEach(function (cat) {
      let image = cat.img_url;
      let price = cat.price;
      // console.log(image, price);

      let t = document.querySelector('#temp');
      let tb = document.querySelector(".grid");
      let clone = document.importNode(t.content, true);

      clone.querySelector('.cat__price').textContent = price;

      clone.getElementById('cat__image').src = image;

      tb.appendChild(clone);
    });
  });
}

