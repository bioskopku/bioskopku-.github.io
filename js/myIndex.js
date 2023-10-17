if (page >= 2){
	var page=page;
	var prevPage = '<a href="?page='+(page*1-1)+'"><i class="fa fa-chevron-left"></i> PREV</a>';
	var nextPage = '<a href="?page='+(page*1+1)+'">NEXT <i class="fa fa-chevron-right"></i></a>';
}else{
	var page=1
	var prevPage = '';
	var nextPage = '<a href="?page='+(page*1+1)+'">NEXT <i class="fa fa-chevron-right"></a>';
}
document.addEventListener("DOMContentLoaded", function() { getDataNews(); })
function getDataNews() {
var fetchUrl = api+'/discover/movie?primary_release_year=2022&api_key='+kunci+'&language=id-ID&page='+page;
	let dataNews = '<table><tr><th class="left"><h3>Latest Movies Page: <span style="color:#fff;">'+page+'</span></h3></th><th class="right"><h3><a href="popular.html">Most Popular</a> | <a href="toprated.html">Top Rated</a> | <a href="trending.html">Trending</a></h3></th></tr></table>';
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
        dataNews += '<div class="responsive"><div class="gallery"><a href="play.html?id='+id+'&q='+title+'"><img data-src="'+thumb+'" alt="'+id+'" class="img lazyload"></a><div class="desc">'+title+' ['+date+']</div></div></div>';
		})
		dataNews += '<div class="clearfix"></div><div class="paging"><div class="divnext">'+prevPage+' '+nextPage+'</div></div>';
		document.getElementById("movie").innerHTML = dataNews;
	})
	.catch(err => { console.log(err) });
}