function getUrlVar() {
var result = {};
var location = window.location.href.split('#');
var parts = location[0].replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { result [key] = value; });
return result;	}
var c = getUrlVar()["c"];
var q = getUrlVar()["q"];
var id = getUrlVar()["id"];
var page = getUrlVar()["page"];
document.addEventListener("DOMContentLoaded", function() { getDataRender(); })
function getDataRender() {
	var fetchUrl = api+'/movie/'+id+'?api_key='+kunci+'&language=id-ID';
	let rendered = '<table><tr><th class="left"><h1>'+decodeURIComponent(q)+'</h1></th><th class="right"><h3><a href="popular.html">Most Popular</a> | <a href="toprated.html">Top Rated</a> | <a href="trending.html">Trending</a></h3></th></tr></table>';
	fetch(fetchUrl)
	.then(response => response.json())
	.then(data => { console.log(data)
		var title = data.title
		var date = data.release_date
		//var language = data.spoken_languages[0].name
		var poster = data.poster_path
		var posters = data.backdrop_path
		var popular = data.popularity
		var vote = data.vote_count
		var tags = data.tagline
		var plot = data.overview
		var embed = data.imdb_id
		if (embed == null){ var kosong = '<h1>MAAF VIDEO '+q+' TELAH DIHAPUS</h1>'; }else{ var kosong = ''; }
		rendered += '<div class="embed"><div class="iframe-container"><iframe class="lazyload" data-src="https://2embed.org/embed/movie?imdb='+embed+'&server=hydrax"></iframe></div></div>';
		rendered += '<div class="movietitle"><div class="poster"><img src="https://image.tmdb.org/t/p/w500/'+poster+'" alt="'+title+'"></div><div class="description"><h4>'+title+'</h4><div id="genres"></div><div id="product"></div><b>Released :</b> '+date+'<br><b>Popular :</b> '+popular+'<br><b>Vote :</b> '+vote+'<br><b>Plot :</b> '+tags+'<br>'+plot+'<div id="thriler"></div></div></div>';
		rendered += kosong;
		document.getElementById("embed").innerHTML = rendered
	 })
	 .catch(err => { console.log(err) });
}
document.addEventListener("DOMContentLoaded", function() { getDataGenre(); })
function getDataGenre() {
	var fetchUrl = api+'/movie/'+id+'?api_key='+kunci+'&language=id-ID';
	let dataGenres = '<b>Genre :</b> ';
	fetch(fetchUrl)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		data.genres.forEach(function(item){
			var gid = item.id
			var gname = item.name
			var date = item.pubDate
			dataGenres += '<a href="genre.html?q='+gid+'&c='+gname+'">'+gname+'</a>, '
		})
		document.getElementById("genres").innerHTML = dataGenres
	})
	.catch(err => { console.log(err) });
}
document.addEventListener("DOMContentLoaded", function() { getDataProduct(); })
function getDataProduct() {
	var fetchUrl = api+'/movie/'+id+'?api_key='+kunci+'&language=id-ID';
	let dataProduct = '<b>Product :</b> ';
	fetch(fetchUrl)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		data.production_companies.forEach(function(item){
			var product = item.name
			dataProduct += product+', '
		})
		document.getElementById("product").innerHTML = dataProduct
	})
	.catch(err => { console.log(err) });
}
document.addEventListener("DOMContentLoaded", function() { getDataVideos(); })
var fetchUrl = api+'/movie/'+id+'?api_key='+kunci+'&append_to_response=videos';
function getDataVideos() {
	let dataVideos = '<b>Thriler :</b> ';
	fetch(fetchUrl)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		data.videos.results.forEach(function(item){
			var thriler = item.key;
			dataVideos += '<a class="lazyload" target="_blank" href="https://youtube.com/embed/'+thriler+'">youtube.com/embed/'+thriler+'</a>, ' ;
		})
		document.getElementById("thriler").innerHTML = dataVideos;
	})
	.catch(err => { console.log(err) });
}
if (page >= 2){
var page=page;
var prevPage = '';
var nextPage = '<a href="index"><i class="fa fa-chevron-left"> BACK</a>';
}else{
var page=1
var prevPage = '';
var nextPage = '<a href="index"><i class="fa fa-chevron-left"> BACK</a>';
}
document.addEventListener("DOMContentLoaded", function() { getDataNews(); })
function getDataNews() {
	var fetchUrl = api+'/movie/'+id+'/similar?api_key='+kunci+'&language=id-ID&page=1';
	let dataNews = '<h3>Similar Movies</h3>';
	fetch(fetchUrl)
	.then(response => response.json())
	.then(data => {
		console.log(data)
		data.results.forEach(function(item){
			var id = item.id
			var titles = item.title
			var title = titles.substring(0, 40);
			var poster = item.poster_path
			var posters = item.backdrop_path
			var date = item.release_date
			var popular = item.popularity
			var vote = item.vote_count
			if (poster == null){var thumb = 'images/blank.jpg';}else{var thumb = img+poster;}
			dataNews += '<div class="responsive"><div class="gallery2"><a href="play.html?id='+id+'&q='+title+'"><img data-src="'+thumb+'" alt="'+id+'" class="img lazyload"></a><div class="desc">'+title+' ['+date+']</div></div></div>';
		})
		document.getElementById("movie").innerHTML = dataNews;
	})
	.catch(err => { console.log(err) });
}
