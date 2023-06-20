let SongDetail = [
    {
        title : "Dokha Arijit Singh",
        image : "Images/dhokha.webp",
        song : "Audio/Arijit Singh - Dhokha(PagalWorld.com.se) lofi.mp3"
    },
    {
        title : "Bholi si Surat",
        image : "Images/download.jpeg",
        song : "https://cdn.pagalworld.us/songs/new/192/03%20-%20Bholi%20Si%20Surat%20-%20DTPH%201997.mp3"
    },
    {
        title : "Falak Tak Chal",
        image : "Images/Falak.jpg",
        song : "https://pagaliworld.com/files/download/id/4938"
    },
    {
        title : "Desh Mera",
        image : "Images/I0-IiiVgvyU-HQ.webp",
        song : "https://www.pagalworld.com.se/files/download/id/3254"
    },
    {
        title : "Kajra Mohabat Wala",
        image : "Images/kajra.jpg",
        song : "Audio/Kajra Mohobbat Wala - (Slowed Reverb) PSNT MUSIC.mp3"
    },
];


var Title = document.querySelector(".title");
var ImageTag = document.getElementById("MainImg");
var songLength = document.querySelector('.songLength');

//Button Part
var playbtn = document.getElementById("play");
var forwardbtn = document.getElementById("forward");
var reversebtn = document.getElementById("reverse");
var audio = document.getElementById("audio");


//Play Function
audio.src = SongDetail[0].song;
ImageTag.src = SongDetail[0].image;
Title.innerHTML = SongDetail[0].title;
isPlaying = 0;

function play() {
    playbtn.classList = "fa-solid fa-pause";
    audio.play()
    ImageTag.classList = "rotate";
    
        if(isPlaying == 1) {
            playbtn.classList = "fa-solid fa-play";
            audio.pause()
            isPlaying = 0;
            ImageTag.classList = "";
        }else{
            isPlaying++;
        }
}

 // songLength 
 var  position = 1;
 songLength.innerHTML = position + "/" + SongDetail.length;

//forward btn System

var position = 0;
forwardbtn.addEventListener ('click', () => {
    position++;
    audio.src = SongDetail[position].song;
    ImageTag.src = SongDetail[position].image;
    Title.innerHTML = SongDetail[position].title;

    // songLength 
    songLength.innerHTML = (position+1) + "/" + SongDetail.length;

    if(isPlaying == 1) {
        audio.play();
        playbtn.classList = "fa-solid fa-pause";
    }
});

//reverse btn System

var position = 0;
reversebtn.addEventListener ('click', () => {
    position--;
    audio.src = SongDetail[position].song;
    ImageTag.src = SongDetail[position].image;
    Title.innerHTML = SongDetail[position].title;

     // songLength 
     songLength.innerHTML = (position+1) + "/" + SongDetail.length;

    if(isPlaying == 1) {
        audio.play();
        playbtn.classList = "fa-solid fa-pause";
    }
});



