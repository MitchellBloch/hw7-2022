var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;

});



document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	video.play()

 });

 
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video")
	video.playbackRate *= 0.9
	console.log("The current speed is: " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video")
	video.playbackRate /= 0.9
	console.log("The current speed is: " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead in Video")

	if (video.currentTime + 10 >= video.duration){
		video.currentTime = 0
	}
	else{

		video.currentTime += 10
	}
	console.log("The current time is:" + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {

	if(video.muted == false) {
		video.muted = true;
		console.log("video is muted")
		this.innerHTML = "Unmute";
	}
	else{

		video.muted = false;
		console.log("video is not muted")
		this.innerHTML = "Mute";
		
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100
	console.log("The current volume is: " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume*100+"%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Class is currently oldSchool")
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Class is currently Original")
	video.classList.remove("oldSchool")
});



 

