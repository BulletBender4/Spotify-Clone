let audioPlay = new Audio('songs/1.mp3');
let mainBtn = document.querySelector('#masterPlay');
let progressBar = document.querySelector('#musicRangeBar');
let gif = document.querySelector('#gif');
let songName = document.querySelectorAll('.songName');
let cover = document.querySelectorAll('.coverBgImg');
let songDur = document.querySelectorAll('.duration');
let iconbtn = document.querySelectorAll('.icons');
const songDuration = document.querySelector('.duration');
let songCount = 0;
let previousBtn = document.querySelector('#previous')
let nextBtn = document.querySelector('#next')
let currentPlayingSongName = document.querySelector('#currentPlayingSongName')



songs = [
    { songName1: 'Gulabi sadi lali lal', cover: 'songs/1.mp3', cover: 'covers/1.jpg', duration: '03:45' },
    { songName1: 'Kya hua tera wada', path: 'songs/2.mp3', cover: 'covers/2.jpg', duration: '02:56' },
    { songName1: 'Lag jaaa gale', path: 'songs/3.mp3', cover: 'covers/3.jpg', duration: '04:18' },
    { songName1: 'love me like you do', path: 'songs/4.mp3', cover: 'covers/4.jpg', duration: '04:09' },
    { songName1: 'Mai hu na', path: 'songs/5.mp3', cover: 'covers/5.jpg', duration: '08:00' },
    { songName1: 'Mere mehboob', path: 'songs/6.mp3', cover: 'covers/6.jpg', duration: '04:12' },
    { songName1: 'Satranga', path: 'songs/7.mp3', cover: 'covers/7.jpg', duration: '03:56' },
    { songName1: 'Mai hu kahan', path: 'songs/8.mp3', cover: 'covers/8.jpg', duration: '04:53' },
    { songName1: 'Until I Found You', path: 'songs/9.mp3', cover: 'covers/9.jpg', duration: '02:56' },
    { songName1: 'Papa meri jaan', path: 'songs/10.mp3', cover: 'covers/10.jpg', duration: '00:00' }
]

songName.forEach((sname, i) => {
    sname.innerText = songs[i].songName1;

});

cover.forEach((path, i) => {
    path.src = songs[i].cover;
})

// songDur.forEach((time, i) => {
//     time.innerText = songs[i].duration;
// })


mainBtn.addEventListener('click', () => {
    if (audioPlay.paused || audioPlay.currentTime <= 0) {
        audioPlay.play();
        gif.style.opacity = 1;
        currentPlayingSongName.innerText = songs[songCount].songName1;
        mainBtn.classList.remove('fa-play-circle');
        mainBtn.classList.add('fa-pause-circle');
        allBtnPause();
        iconbtn[songCount].classList.remove('fa-play-circle');
        iconbtn[songCount].classList.add('fa-pause-circle');


    }
    else {
        audioPlay.pause();
        gif.style.opacity = 0;
        mainBtn.classList.remove('fa-pause-circle');
        mainBtn.classList.add('fa-play-circle');
        allBtnPause();
        iconbtn[songCount].classList.remove('fa-pause-circle');
        iconbtn[songCount].classList.add('fa-play-circle');
    }

})

audioPlay.addEventListener('timeupdate', () => {
    progress = parseInt((audioPlay.currentTime / audioPlay.duration) * 1000)
    progressBar.value = progress;
    if (audioPlay.currentTime === audioPlay.duration) {
        songCount++;
        songCount++;
        audioPlay.src = `songs/${songCount}.mp3`;
        audioPlay.play();
        currentPlayingSongName.innerText = songs[songCount].songName1;
    }
})

progressBar.addEventListener('click', () => {
    audioPlay.currentTime = (audioPlay.duration * progressBar.value) / 1000;
})

iconbtn.forEach((btn) => {

    btn.addEventListener('click', (evt) => {
        songCount = parseInt(evt.target.id);
        audioPlay.src = (`songs/${songCount + 1}.mp3`);
        audioPlay.play();
        document.getElementById("gif").style.opacity = 1;
        mainBtn.classList.remove('fa-play-circle');
        mainBtn.classList.add('fa-pause-circle');
        allBtnPause();
        btn.classList.remove('fa-play-circle');
        btn.classList.add('fa-pause-circle');
        audioPlay.currentTime = 0
        currentPlayingSongName.innerText = songs[songCount].songName1;

    })
})

let allBtnPause = () => {
    iconbtn.forEach((btn) => {
        btn.classList.remove('fa-pause-circle');
        btn.classList.add('fa-play-circle');
    })

}

previousBtn.addEventListener('click', (evt) => {
    if (songCount <= 0) {
        audioPlay.currentTime = 0;
        audioPlay.play();
    }
    else {
        songCount--;
        audioPlay.currentTime = 0;
        audioPlay.src = (`songs/${songCount + 1}.mp3`);
        audioPlay.play();
        allBtnPause();

        iconbtn[songCount].classList.remove('fa-play-circle');
        iconbtn[songCount].classList.add('fa-pause-circle');
        let songDetails = (songs[songCount]);
        currentPlayingSongName.innerText = songDetails.songName1;
    }
})

nextBtn.addEventListener('click', (evt) => {
    if (songCount >= songs.length - 1) {
        songCount = -1;
        audioPlay.src = (`songs/${songCount + 1}.mp3`);
        audioPlay.play();
    }
    else {
        songCount++;
        audioPlay.currentTime = 0;
        audioPlay.src = (`songs/${songCount + 1}.mp3`);
        audioPlay.play();
        allBtnPause();
        iconbtn[songCount].classList.remove('fa-play-circle');
        iconbtn[songCount].classList.add('fa-pause-circle');
        let songDetails = (songs[songCount]);
        currentPlayingSongName.innerText = songDetails.songName1;
    }
})

// currentPlayingSongName.innerText = songCount[songs.name]
