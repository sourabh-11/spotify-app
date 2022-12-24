console.log("Welcome to spotify" );
let songIndex = 0;
let audiElement =  new Audio('./song/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
// let myProgressBar = document.getElementById("myProgressBar");
 let songItem = Array.from(document.getElementById("songItem"));
let gif = document.getElementById("gif");
let songs = [
    
        {songName: " besarm rang by bhtan", filePath: "song/1.mp3", coverPath: "./img/1.jpg"},
        {songName: " jaddugar by badshah", filePath: "song/2.mp3", coverPath: "./img/2.jpg"},
        {songName: " wooh the new song", filePath: "song/3.mp3", coverPath: "./img/3.jpg"},
        {songName: " honety new song", filePath: "song/4.mp3", coverPath: "./img/4.jpg"},
        {songName: " besarm rang by bhtan", filePath: "song/5.mp3", coverPath: "./img/5.jpg"},
        {songName: " desi girl   ", filePath: "song/6.mp3", coverPath: "./img/6.jpg"},
        {songName: " honety new song", filePath: "song/7.mp3", coverPath: "./img/7.jpg"},
        {songName: " besarm rang by bhtan", filePath: "song/8.mp3", coverPath: "./img/8.jpg"},
        {songName: " besarm rang by bhtan", filePath: "song/9.mp3", coverPath: "./img/9.jpg"},
]
songItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementByTagName('img')[0].src = songs[i].filePath;
});


audiElement.play();





// handle play
masterPlay.addEventListener('click',()=>{
   if(audiElement.paused ||audiElement.currentTime<=0){
       audiElement.play();
       masterPlay.classList.remove(" fa-solid fa-play")
       masterPlay.classList.add(" fa-solid fa-pause  ")
    //    gif.style.opacity =1;
    }
     
   
       else{
    audiElement.pause();
    masterPlay.classList.remove(" fa-solid fa-pause ")
    masterPlay.classList.add(" fa-solid fa-play")
    // gif.style.opacity =0;
    
   }


})

//listen to event
audiElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update seekbar
  progress = parseInt((audiElement.currentTime/audiElement.duration)*100)
//   console.log(progress);
  myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', ()=>{
    audiElement.currentTime= (myProgressBar.value*audiElement.duration/100);
})
