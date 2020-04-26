
document.getElementById('submit').addEventListener('click',getMoviesID);

function getMoviesID()
{

  document.getElementById('movies').innerHTML ="";
  var search = document.getElementById('inputBar').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`https://www.omdbapi.com/?s=${search}&apikey=2fe665da`,true);
  xhr.onload = function(){

    // console.log(this.status);

    if(this.status===200)
    {
      
      let output ='';
      var movies = JSON.parse(this.response);
      //console.log(this.response);

      movies['Search'].forEach(function(movie){
      var id = movie.imdbID ;
      getMovies(id);
      })
    }
   
  }

  xhr.send();

}

/*-------------------------------------------------------------------------------------------------------------------------------------*/

function getMovies(id)
{
  imdb = id;
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`https://www.omdbapi.com/?i=${imdb}&apikey=cb8aa8be`,true);
  xhr.onload = function(){

    // console.log(this.status);

    if(this.status===200)
    {
      
      let output ='';
      var movie = JSON.parse(this.response);
      console.log(this.response);

      // movies.forEach(function(movie){
        output += `
        <br>
        <div class="flip-card" style="margin-bottom:50px;margin-left: 30px;border-radius:20%;width:300px;height:450px;">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${movie.Poster}" alt="Avatar" style="width:300px;height:450px; border-radius:20%;">
              </div>
            <div class="flip-card-back"  style="width:300px;height:450px;border-radius:20%;">
            <br>
              <h1>${movie.Title}</h1>
              <p>${movie.Year}</p>
              <a href="https://www.imdb.com/title/${movie.imdbID}/" role="button" class="btn btn-primary">Imdb Link</a>
            </div>
        </div>
      </div>
        `
    //  })

      document.getElementById('movies').innerHTML += output ;
    }
   
  }

  xhr.send();

}




/*--------------------------------------------------------------------------------------------------------------------------------------*/


function getMoviesOnLoad()
{
  var search = document.getElementById('inputBar').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`https://www.omdbapi.com/?s=Avengers&apikey=cb8aa8be`,true);
  xhr.onload = function(){

    // console.log(this.status);

    if(this.status===200)
    {
      
      let output ='';
      var movies = JSON.parse(this.response);
      console.log(this.response);
  

       movies['Search'].forEach(function(movie){
        output += `
        <br>
        <div class="flip-card" style="margin-bottom:50px;margin-left: 30px;border-radius:20%;width:300px;height:450px;">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${movie.Poster}" alt="Avatar" style="width:300px;height:450px; border-radius:20%;">
              </div>
            <div class="flip-card-back"  style="width:300px;height:450px;border-radius:20%;">
            <br>
              <h1>${movie.Title}</h1>
              <p>${movie.Year}</p>
              <a href="https://www.imdb.com/title/${movie.imdbID}/" role="button" class="btn btn-primary">Imdb Link</a>
            </div>
        </div>
      </div>
        `
      })

      document.getElementById('movies').innerHTML = output;
    }
   
  }

  xhr.send();

}
