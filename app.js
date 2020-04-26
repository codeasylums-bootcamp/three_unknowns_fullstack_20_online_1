
document.getElementById('submit').addEventListener('click',getMovies);

function getMovies()
{
  var search = document.getElementById('inputBar').value;
  const xhr = new XMLHttpRequest();
  xhr.open('GET',`http://www.omdbapi.com/?s=${search}&apikey=2fe665da`,true);
  xhr.onload = function(){

    if(this.status===200)
    {

      //console.log(this.responseText);

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


// {/* <div class="card">
// <img class="card-img-top" src="..." alt="Card image cap">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
// </div>
// <div class="card-footer">
// <small class="text-muted">Released Year :</small>
// </div>
// </div> */}
