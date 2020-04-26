
document.getElementById('submit').addEventListener('click',getMovies);

function getMovies()
{
  var search = document.getElementById('inputBar').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`https://www.omdbapi.com/?s=${search}&apikey=2fe665da`,true);
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
        <div class="flip-card" style="margin-bottom: 300px;margin-left: 30px;">
        <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${movie.Poster}" alt="Avatar" style="width:300px;height:450px;">
            </div>
          <div class="flip-card-back"  style="width:300px;height:450px;">
            <h1>${movie.Title}</h1>
            <p>${movie.Year}</p>
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

function getMoviesOnLoad()
{
  var search = document.getElementById('inputBar').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`http://www.omdbapi.com/?s=Avengers&apikey=2fe665da`,true);
  xhr.onload = function(){

    // console.log(this.status);

    if(this.status===200)
    {
      
      let output ='';
      var movies = JSON.parse(this.response);
      console.log(movies);

       movies['Search'].forEach(function(movie){
        output += `
        <br>
        <div class="flip-card" style="margin-bottom: 300px;margin-left: 30px;">
          <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${movie.Poster}" alt="Avatar" style="width:300px;height:450px;">
              </div>
            <div class="flip-card-back"  style="width:300px;height:450px;">
              <h1>${movie.Title}</h1>
              <p>${movie.Year}</p>
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
