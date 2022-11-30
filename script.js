//selecting elements
const jokeSetupArea = document.getElementById('jokeSetup');
const jokepunch = document.getElementById('jokepunch');
const jokeGeneratorBtn = document.getElementById('jokeBtn');

//This function generates a joke
const pullJokes = function(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '202cdc3e1dmsh2147923b9b7cab3p106fd6jsn7fd97145ef2b',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };
    fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then(myResponse => {
        console.log(myResponse.body)
        const jokeObj = myResponse.body[0];
        console.log(jokeObj);
        const setUpLine = jokeObj?.setup;
        const punchLine = jokeObj.punchline;
        console.log(setUpLine);
        console.log(punchLine);
        jokeSetupArea.textContent = setUpLine;
        jokepunch.textContent = punchLine;
    })
	.catch(err => console.error(err));
}

//Button event handling
jokeGeneratorBtn.addEventListener('click',pullJokes);