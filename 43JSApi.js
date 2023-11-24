// try {
    
// } catch (error) {
    
// }



function getChuckNorrisJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
.then((someParameter)=>{
    // console.log("API:",someParameter.json());
    return someParameter.json();
})
                                                    // .then((someParameter2)=>{
                                                    //     // console.log("Data is: ",someParameter2);
                                                    //     // return someParameter2.json();
                                                    // })
.then((someParameter3)=>{
    var joke = someParameter3.value;
    console.log("JOKE",joke);
})
.catch();
}






document.addEventListener('DOMContentLoaded',()=>{
    var jokeElement = document.getElementById('jokePlaceHolder');
    getChuckNorrisJoke().then((jokeParameter)=>{
        jokeElement.innerText = jokeParameter;
    })
})