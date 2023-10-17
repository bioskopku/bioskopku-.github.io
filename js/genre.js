if (page >= 2){
var page=page;
var prevPage = '<a href="?q='+q+'&c='+c+'&page='+(page*1-1)+'"><i class="fa fa-chevron-left"></i> PREV</a>';
var nextPage = '<a href="?q='+q+'&c='+c+'&page='+(page*1+1)+'">NEXT <i class="fa fa-chevron-right"></i></a>';
}else{
var page=1;
var prevPage = '';
var nextPage = '<a href="?q='+q+'&c='+c+'&page='+(page*1+1)+'">NEXT <i class="fa fa-chevron-right"></a>';
}
document.addEventListener("DOMContentLoaded", function() { getDataGenre(); })
function getDataGenre() {
	var fetchUrl = target+'/discover/movie?with_genres='+q+'&page='+page+'&api_key='+kunci;
	let dataGenre = '<table><tr><th class="left"><h3>Genre for <span style="color:#fff;">'+c+'</span> Page: <span style="color:#fff;">'+page+'</span></h3></th><th class="right"><h3><a href="popular.html">Most Popular</a> | <a href="toprated.html">Top Rated</a> | <a href="trending.html">Trending</a></h3></th></tr></table>';
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
        dataGenre += '<div class="responsive"><div class="gallery"><a href="play.html?id='+id+'&q='+title+'"><img data-src="'+thumb+'" alt="'+id+'" class="img lazyload"></a><div class="desc">'+title+' ['+date+']</div></div></div>';
		})
		dataGenre += '<div class="clearfix"></div><div class="paging"><div class="divnext">'+prevPage+' '+nextPage+'</div></div>';
		document.getElementById("movie").innerHTML = dataGenre;
	})
	.catch(err => { console.log(err) });
}