const video = document.querySelector("#player1");
let volume = video.volume;

// Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	video.autoplay = false;
	video.loop = false;
	video.load();
	console.log("Good job opening the window")
});

// Play the video and update the volume information.  
document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

// Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 
document.querySelector("#slower").addEventListener("click", function() {

	let currentSpeed = video.playbackRate;
	video.playbackRate = currentSpeed * 0.9;
	currentSpeed = video.playbackRate;
	console.log("Video slowed down to:", currentSpeed);
});

// Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function() {
	let currentSpeed = video.playbackRate;
	video.playbackRate = currentSpeed / 0.9;
	currentSpeed = video.playbackRate;
	console.log("Video Sped up to:", currentSpeed);
});


// Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;

	if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }

	console.log("Current Timestamp:", video.currentTime);
});

// Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {

	if (video.volume == 0) {
		video.volume = volume;
	}
	else {
		volume = video.volume;
		video.volume = 0;
	}
	
	document.querySelector("#volume").innerHTML = video.volume * 100;
	document.querySelector("#slider").value = video.volume * 100;
	console.log("Mute Video");
});


// Change the volume based on the slider and update the volume information.
document.querySelector("#slider").addEventListener("input", function() {
	let currentVolume = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = currentVolume;
	video.volume = currentVolume / 100;
	console.log("Update Volume");
});


// Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
	console.log("Update Class to oldschool");
});


// Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
	console.log("Update Class to Original");
});

