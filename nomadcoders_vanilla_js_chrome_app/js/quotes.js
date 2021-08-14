const quotes = [
	{
		quote: '책임감이 강한 사람은 쉽게 좌절하고 포기할지도 모른다.',
		author: 'donpark',
	},
	{
		quote: '우물안 개구리 바다를 모른다 그럴지언정 하늘의 푸름을 안다.',
		author: 'animation',
	},
	{
		quote: '인간이 5명 모이면 반드시 1명은 쓰레기가 있다.',
		author: '나루토',
	},
	{
		quote: '누군가 100% 잘못했다고 하는거는 없어',
		author: '????',
	},
	{
		quote: '불평불만을 하는 순간부터 자기자신의 발전은 멈출것이다.',
		author: '깨박이',
	},
	{
		quote: "'왜' 라는 질문을 설명할 때에는 서로가 참이라고 납득하는 일련의 범주 안에서 이루어 져야 한다.",
		author: '어느 박사',
	},
	{
		quote: '할거없어서 보다가 정들어서 계속본게된다.',
		author: '아프리카',
	},
	{
		quote: '끝날때까지 끝난게 아니다.',
		author: '영화',
	},
	{
		quote: '가는사람은 기다려주지 않는다.',
		author: '먼저간 사람',
	},
	{
		quote: '마지막 말을 생각하면서 이야기하라!',
		author: '이야기꾼',
	},
	{
		quote: '다 맞다는것 처럼 얘기하는 이유는 그게 틀렸다고 인정하고 싶지 않아서',
		author: '나',
	},
];

const quote = document.querySelector('#qutoe span:first-child');
const author = document.querySelector('#qutoe span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todayQuote.quote}`;
author.innerText = `- ${todayQuote.author} -`;
// console.log(quotes[random].quote);
