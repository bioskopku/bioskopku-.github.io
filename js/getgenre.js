document.addEventListener("DOMContentLoaded", function() { getDataGenres(); })
function getDataGenres() {
var fetchUrl = api+'/genre/movie/list?api_key='+kunci+'&language=id-ID';
	let dataGenres = '';
	fetch(fetchUrl)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		data.genres.forEach(function(item){
			var id = item.id
			var name = item.name
        dataGenres += '&raquo; <a href="genre.html?q='+id+'&c='+name+'">'+name+'</a><hr>';
		})
	dataGenres += '';
		document.getElementById("mGenre").innerHTML = dataGenres;
	})
	.catch(err => { console.log(err) });
}