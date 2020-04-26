
document.getElementById('submit').addEventListener('click',getMovies);

function getMovies()
{
  var search = document.getElementById('inputBar').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`http://www.omdbapi.com/?s=${search}&apikey=2fe665da`,true);
  xhr.onload = function(){

    console.log(this.status);

    if(this.status===200)
    {
      
      let output ='';
      var movies = JSON.parse(this.response);
      console.log(movies);

       movies['Search'].forEach(function(movie){
        output += `
        <br>
        <div class="col-md-4">
        <div class="card" style="width: 18rem; heigth: 20rem;">
          <img class="card-img-top zoom" src="${movie.Poster}" alt="Poster" style="width:=350px;padding-left:=20px;height:=300px;padding-top:=20px;">
          <div class="card-body " style="height:=300px">
          <h5 class="card-title">${movie.Title}</h5>
          </div>
          <div class="card-footer">
          <small class="text-muted ">Released Year :${movie.Year}</small>
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

    if(this.status===200)
    {

      let output ='';
      var movies = JSON.parse(this.response);
      console.log(movies);

       movies['Search'].forEach(function(movie){
        output += `
        <br>
        <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top zoom" src="${movie.Poster}" alt="Poster" style="width:=350px;padding-left:=20px;height:=300px;padding-top:=20px;">
          <div class="card-body " style="height:=300px">
          <h5 class="card-title">${movie.Title}</h5>
          </div>
          <div class="card-footer">
          <small class="text-muted ">Released Year :${movie.Year}</small>
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



