let movies = [];

const addMovie = (e) =>{
    e.preventDefault();// prevent form from submitting

    //obj form movies
    let movie = {
        id: Date(),
        title: document.getElementById('title').value.toLowerCase(), 
        year: document.getElementById("yr").value
    }

    movies.push(movie);
    //document.forms[0].reset();
    document.querySelector('form').reset();

    //printing to screen    
    console.warn('added',{movies});
    let pre = document.querySelector("#msg pre");
    pre.textContent = "\n" + JSON.stringify(movies, '\t',2);

    // save to local storage
    localStorage.setItem('MyMoviesList',JSON.stringify(movies));

}

//addEventListen 
document.addEventListener('DOMContentLoaded',() =>{
    document.getElementById("btn").addEventListener('click',addMovie);
});