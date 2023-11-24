async function getChuckNorrisJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        return data.value;
    } catch (error) {
        console.error('Error fetching Chuck Norris joke:', error);
        throw error; // Re-throw the error to propagate it
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    var jokeElement = document.getElementById('jokePlaceHolder');
    try {
        const jokeParameter = await getChuckNorrisJoke();
        jokeElement.innerText = jokeParameter;
    } catch (error) {
        // Handle the error if needed
    }
});





