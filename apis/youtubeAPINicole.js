alert("youtube working5");

$("#searchButton").click(function(){
var ytSearch = "anode rod replacement";
// document.getElementById("youtubeSearch").value;	
console.log(document.getElementById("youtubeSearch").value);	
var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + ytSearch +"&type=video&maxResults=4&key=AIzaSyDYJIP_3sxyE3-SL-Dh0xAP0BWL98W0-Qs"
console.log("hello", queryURL);

var ytHead = "https://www.youtube.com/embed/";
	

	$.ajax({
		url:queryURL,
		method:"GET"
	}).done(function(result){
		var newResults = result.items;
		console.log("hello2", newResults);
		for(var i=0; i < newResults.length; i++){
			console.log("hello3", newResults[i]);
			console.log("hello4", newResults[i].snippet.thumbnails.default.url)
			console.log("hello5", newResults[i].id.videoId);

			var youtubeImage = newResults[i].snippet.thumbnails.default.url;
			var youtubeVidID = newResults[i].id.videoId;

			videoURL = `${ytHead}${youtubeVidID}`;
			$("#main-content").append(`<div class="general-video" data-toggle="modal" data-target="#myModal" data-url="${videoURL}"><iframe class="video-iframe" height="200" width="200" src="${videoURL}" allowfullscreen="allowfullscreen"></iframe></div>`);
			console.log(videoURL);

		};
	});
});	 