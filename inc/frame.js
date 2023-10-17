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