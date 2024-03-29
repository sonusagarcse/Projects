let SongDetail = [
    {
        title : "Tere Vaste Falak...",
        image : "Images/terevaste.jpg",
        song : "https://pagalworld.network/dlod/3215"
    },
    {
        title : "Dokha Arijit Singh",
        image : "Images/dhokha.webp",
        song : "Audio/Arijit Singh - Dhokha(PagalWorld.com.se) lofi.mp3"
    },
    {
        title : "Zihaal e Miskin",
        image : "Images/zihaal.jpg",
        song : "https://pagalworld.network/dlod/3237"
    },
    {
        title : "Falak Tak Chal",
        image : "Images/Falak.jpg",
        song : "https://pagaliworld.com/files/download/id/4938"
    },
    {
        title : "Desh Mera",
        image : "Images/I0-IiiVgvyU-HQ.webp",
        song : "https://pagalsong.in/uploads/systemuploads/mp3/Bhuj%20The%20Pride%20Of%20India/Desh%20Mere%20-%20Bhuj%20The%20Pride%20Of%20India%20128%20Kbps.mp3"
    },
    {
        title : "Kajra Mohabat Wala",
        image : "Images/kajra.jpg",
        song : "Audio/Kajra Mohobbat Wala - (Slowed Reverb) PSNT MUSIC.mp3"
    },
    {
        title : "Kya Loge Tum..",
        image : "https://pagalfree.com/images/128Kya%20Loge%20Tum%20-%20B%20Praak%20128%20Kbps.jpg",
        song : "https://pagalfree.com/musics/128-Kya%20Loge%20Tum%20-%20B%20Praak%20128%20Kbps.mp3"
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



