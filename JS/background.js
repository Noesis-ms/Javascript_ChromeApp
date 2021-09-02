const image = ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG"];

const chosenImage = image[Math.floor(Math.random() * image.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
