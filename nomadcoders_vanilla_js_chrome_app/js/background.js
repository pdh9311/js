const images = [
	'고양이1.jpg',
	'고양이2.jpg',
	'배경1.png',
	'배경2.png',
	'배경3.png',
	'배경4.png',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);
const bgImage = document.createElement('img');
bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);
document.body.appendChild(bgImage);
