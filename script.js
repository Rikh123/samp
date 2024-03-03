// github.com/webFardin
// twitter.com/webFardin0
// instagram.com/webFardin
// t.me/webFardin

"use strict";

let audioTrack = document.createElement("audio");
audioTrack.preload = "metadata";
document.body.append(audioTrack);

let blurElement = document.getElementById("blurElement");

let themes = document.getElementById("themes");

let musicBox = document.getElementById("musicBox");

let trackItemsWrapper = document.getElementById("trackItemsWrapper");

let trackArtistName = document.getElementById("trackArtistName");
let trackAlbumName = document.getElementById("trackAlbumName");

let coverImage = document.getElementById("coverImage");

let playButton = document.getElementById("playButton");
let playButtonIcon = playButton.firstElementChild;
let pauseButtonIcon = playButton.lastElementChild;

let previousButton = document.getElementById("previousButton");
let nextButton = document.getElementById("nextButton");

let volumeWrapper = document.getElementById("volumeWrapper");
let volumeButton = document.getElementById("volumeButton");
let volumeNumber = document.getElementById("volumeNumber");

let wavesVolumeButton = document.getElementById("wavesVolumeButton");
let highVolumeSymbol = document.getElementById("highVolumeSymbol");
let mediumVolumeSymbol = document.getElementById("mediumVolumeSymbol");
let lowVolumeSymbol = document.getElementById("lowVolumeSymbol");
let volumeCross = document.getElementById("volumeCross");

let currentTrackTimeNumber = document.getElementById("currentTrackTimeNumber");
let currentTrackDuration = document.getElementById("currentTrackDuration");

let trackProgressBar = document.getElementById("trackProgressBar");
let trackLoading = document.getElementById("trackLoading");
let currentTrackTimeBar = document.getElementById("currentTrackTimeBar");

let musics = [{
        
    audioSource: 'assets/esha.mp3',
    trackName: 'Ishagi chhi na 30nga ',
    coverImage: 'https://i.ytimg.com/vi/cBo8uyJ1R_I/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHmAoAC6AKKAgwIABABGGUgVihMMA8=&rs=AOn4CLA79dMa3xYcZ8QX93qbmKldD9NtUQ',
    artist: 'Devia Kshetrimayum',
},
{
        
    audioSource: 'assets/thagt.mp3',
    trackName: ' Thagatchari Nungshirambei',
    coverImage: 'https://img.youtube.com/vi/aBhYC1kjsHg/0.jpg',
    artist: 'Devia Kshetrimayum',
},
{
        
    audioSource: 'assets/loire.mp3',
    trackName: 'Loire Loire ',
    coverImage: 'https://img.youtube.com/vi/xW_U8k9TFVo/0.jpg',
    artist: 'Devia Kshetrimayum',
},{
        
    audioSource: 'assets/chaoba.mp3',
    trackName: 'Chaobagi Laibak ',
    coverImage: 'https://img.youtube.com/vi/oYtEzIjHBd4/0.jpg',
    artist: 'Devia Kshetrimayum',
},{
        
    audioSource: 'assets/pakn.mp3',
    trackName: 'Pakhong ama change',
    coverImage: 'https://img.youtube.com/vi/zIEgG5stPo4/0.jpg',
    artist: 'Devia Kshetrimayum',
},{
        
    audioSource: 'assets/hangna.mp3',
    trackName: 'Hangna Saba Ningthou ',
    coverImage: 'https://img.youtube.com/vi/PwsdsTgODXc/0.jpg',
    artist: 'Devia Kshetrimayum',
},
{
        
    audioSource: 'assets/echam.mp3',
    trackName: 'Echam Chamna',
    coverImage: 'https://img.youtube.com/vi/QVEactIs0Yo/0.jpg',
    artist: 'Devia Kshetrimayum',
},
{
        
    audioSource: 'assets/khoithum.mp3',
    trackName: 'Khoithumlaba Khonjel',
    coverImage: 'https://img.youtube.com/vi/9HgHeRAagzw/0.jpg',
    artist: 'Devia Kshetrimayum',
},{
        
    audioSource: 'assets/cycle.mp3',
    trackName: 'manlaba Cycle ',
    coverImage: 'https://img.youtube.com/vi/n7rXnpO1-Zs/0.jpg',
    artist: 'Devia Kshetrimayum',
},{
        
    audioSource: 'assets/chtke.mp3',
    trackName: 'Chatke hyna',
    coverImage: 'https://img.youtube.com/vi/ffjfdZZJbC4/0.jpg',
    artist: 'Devia Kshetrimayum',
},{
        
    audioSource: 'assets/un.mp3',
    trackName: 'Uncle ne Bemma',
    coverImage: 'https://img.youtube.com/vi/pE2kV5uSg00/0.jpg',
    artist: 'Devia Kshetrimayum',
},{
        
    audioSource: 'assets/Thoigi.mp3',
    trackName: 'Thoigi Damcha',
    coverImage: 'https://img.youtube.com/vi/7M5RE8hBPGk/0.jpg',
    artist: 'Devia Kshetrimayum',
},
{
        
    audioSource: 'assets/khu.mp3',
    trackName: 'Kufet Kafet',
    coverImage: 'https://th.bing.com/th/id/R.7bf5ed27d55ea467b710cd4747301040?rik=v34lV3i4SisDrw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f07%2fCute-Anime-Couple-HD-Picture.jpg&ehk=BQMHLdlHwjdJ6Z3enz05dPJ6QNH7y6ajJ8V1iaVhfg8%3d&risl=&pid=ImgRaw&r=0',
    artist: '',
},{
        
    audioSource: 'assets/.mp3',
    trackName: '',
    coverImage: '',
    artist: 'Devia Kshetrimayum',
},{
        
    audioSource: 'assets/.mp3',
    trackName: '',
    coverImage: '',
    artist: 'Devia Kshetrimayum',
},{
        
    audioSource: 'assets/.mp3',
    trackName: '',
    coverImage: '',
    artist: 'Devia Kshetrimayum',
},
    {
    audioSource: 'assets/1.mp3',
    trackName: 'Insinluba Twdana',
    coverImage: 'assets/1.jpg',
    artist: 'Aj Maisnam, Thaja Chanu',
},
{
    audioSource: 'assets/2.mp3',
    trackName: 'Koinare Koinare',
    coverImage: 'assets/2.jpg',
    artist: 'Ak yanggon,Linda',
},
{
    audioSource: 'assets/3.mp3',
    trackName: 'Lapthokkhro',
    coverImage: 'assets/3.jpg',
    artist: 'Innocent Eyes',

},{
    audioSource: 'assets/4.mp3',
    trackName: 'Liklaiba',
    coverImage: 'assets/4.jpg',
    artist: 'Pretty Yumnam',
},
{
    audioSource: 'assets/5.mp3',
    trackName: 'Lonthoktabi',
    coverImage: 'assets/5.jpg',
    artist: 'Amarjeet, Pusparani',
},{
    audioSource: 'assets/6.mp3',
    trackName: 'Magun Leina',
    coverImage: 'assets/6.jpg',
    artist: 'Amarjeet, Pusparani',
},
{
    audioSource: 'assets/7.mp3',
    trackName: 'Naitom Satpi',
    coverImage: 'assets/7.jpg',
    artist: 'Malemleima Talem',
},
{
    audioSource: 'assets/8.mp3',
    trackName: 'Nijage',
    coverImage: 'assets/8.jpg',
    artist: 'Kaiku Yumnam, Emarel',
}, {
    audioSource: 'assets/9.mp3',
    trackName: 'Apaiba Leichel',
    coverImage: 'assets/9.jpg',
    artist: 'Seihum',
}, {
    audioSource: 'assets/10.mp3',
    trackName: 'Tahallone',
    coverImage: 'assets/10.jpg',
    artist: 'Hitler, Pusparani',
}, {
    audioSource: 'assets/11.mp3',
    trackName: 'Thawai Anise',
    coverImage: 'assets/11.jpg',
    artist: 'Arbin Soibam, Pusparani',
}, {
    audioSource: 'assets/12.mp3',
    trackName: 'Thawai Yaodana',
    coverImage: 'assets/12.jpg',
    artist: 'Raj Englangbam, Surma',
},{
    audioSource: 'assets/13.mp3',
    trackName: 'Karigumba nangse',
    coverImage: 'https://a10.gaanacdn.com/images/albums/26/4994726/crop_480x480_4994726.jpg',
    artist: 'Pusparan',
},{
    audioSource: 'assets/14.mp3',
    trackName: 'Auk Thuna',
    coverImage: 'https://i.ytimg.com/vi/K_utbjHKupM/maxresdefault.jpg',
    artist: 'Sadananda , Pusparani',
},{
    audioSource: 'assets/15.mp3',
    trackName: 'Kari Natik',
    coverImage: 'https://tse1.mm.bing.net/th?&id=OVP.Oj9Sg2VHFmwP-ZSjlkS9zgEsDh&w=608&h=271&c=7&pid=1.7&rs=1',
    artist: 'Pusparani,Malem',
},{
    audioSource: 'assets/Kundo Leirang Mamal Naidraba Thamoi Official Movie Song Release.mp3',
    trackName: 'Kundo Leirang',
    coverImage: 'https://th.bing.com/th/id/OIP.tCUIy0jWbZ_cF7P3UEnHFAAAAA?rs=1&pid=ImgDetMain',
    artist: 'Pusparani',
},{
    audioSource: 'assets/Lao Haige Lao - Konggol Official Film Song Release.mp3',
    trackName: 'Lao Haige Lao',
    coverImage: 'https://a10.gaanacdn.com/images/albums/24/5860224/crop_480x480_5860224.jpg',
    artist: 'Pusparani',
},{
    audioSource: 'assets/Lei Lei Official Music Video Release 2020.mp3',
    trackName: 'Lei Lei ',
    coverImage: 'https://i.ytimg.com/vi/pmznizxX3OM/maxresdefault.jpg',
    artist: 'Pusparani',
},{
    audioSource: 'assets/Lonthoktabi Geet Yumnam Gepelina & Jackson Amarjit & Pushparani Official MV Release 2022.mp3',
    trackName: 'Lonthoktabi',
    coverImage: 'https://i.ytimg.com/vi/YSV3qJM2Hnk/maxresdefault.jpg',
    artist: 'Amarjeet, Pusparani',
},{
    audioSource: 'assets/Oinararo Se Themlage __ Bitan Chongtham __ Anjita Khoinaijam __ Official Music Video (320 kbps).mp3',
    trackName: 'Oinararo Se Themlage',
    coverImage: 'https://i.ytimg.com/vi/PdtNSSj3p7g/maxresdefault.jpg',
    artist: 'Bitan, Anzita',
},{
    audioSource: 'assets/Pamjana khanjaba nungcba mani mamou video song.mp3',
    trackName: 'Pamjana Khnjaba',
    coverImage: 'https://th.bing.com/th/id/OIP.CoTi6aTNDUdzyUNHVr3BtAAAAA?rs=1&pid=ImgDetMain',
    artist: 'Aj Maisam, Pusparani',
},{
    audioSource: 'assets/Phijido - Official Music Video Release.mp3',
    trackName: 'Phijido',
    coverImage: 'https://lh3.googleusercontent.com/proxy/qyEItisRsaNAMnAZbQxeUItxK7QxVhms64aU6n53MrwE11k3XOPMcScwArgw2mxOj8l0rrTcrd2wxY_C=w1200-h630-n-k-no-nu',
    artist: 'Aj Maisanm, Pusparani',
},{
    audioSource: 'assets/Taningle Bala & Jelish Umananda & Pushparani Official Music Video Release 2022.mp3',
    trackName: 'Taningle',
    coverImage: 'https://i.ytimg.com/vi/zmn08m6Mk0Y/maxresdefault.jpg',
    artist: 'Umananda, Pusparani',
},{
    audioSource: 'assets/Ukhidari Nangumba.mp3',
    trackName: 'Ukhidari Nangumba',
    coverImage: 'https://i.ytimg.com/vi/pWjy7Vdq44w/maxresdefault.jpg',
    artist: 'Amarjeet, Pusparani',
},{
    audioSource: 'assets/Waana Waana Official Music Video Release JAMZ & MAXINA Pushparani Official 2023.mp3',
    trackName: 'Waana Waana',
    coverImage: 'https://i.ytimg.com/vi/H5eVcIbzd4E/hqdefault.jpg',
    artist: 'Pusparani, Jit',
},{
    audioSource: 'assets/Wakhalgee.mp3',
    trackName: 'Wakhalgee',
    coverImage: 'https://i.ytimg.com/vi/z7cqAqsNLPY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AG2CIAC0AWKAgwIABABGEcgQShyMA8=&rs=AOn4CLDqni5YIcmBplvqMr21TUIyB81kAA',
    artist: 'Pusparani, Bonium',
},{
    audioSource: 'assets/Yengjei Nangse __ Official Music Video Release (320 kbps).mp3',
    trackName: 'Yengjei nangse',
    coverImage: 'https://i.ytimg.com/vi/OnISIj4J_hA/maxresdefault.jpg',
    artist: 'Jiteshwor',
},{
    audioSource: 'assets/ytmp3free.cc_mamal-naidraba-thamoi-youtubemp3free.org.mp3',
    trackName: 'Mamal Naidraba',
    coverImage: 'https://i.ytimg.com/vi/oDMM5lVqVEQ/maxresdefault.jpg',
    artist: 'Pupsarani, Aj Maisnam',
},{
    audioSource: 'assets/ytmp3free.cc_ngashi-hayeng-official-samadon-movie-song-release-youtubemp3free.org.mp3',
    trackName: 'Ngasi Hyen',
    coverImage: 'https://i.ytimg.com/vi/lrmxHg-8RgU/hqdefault.jpg',
    artist: 'Surma',
},  
];

musics.forEach((item, index) => {
    trackItemsWrapper.innerHTML += `<div class="track-item" data-index="${index}">${index + 1
        }. ${item.trackName}</div>`;
});

trackItemsWrapper.firstElementChild.classList.add("active");

function informationUpdate(target) {
    target = target ? target : 0;
    coverImage.src = "";
    coverImage.src = musics[target].coverImage;
    audioTrack.src = musics[target].audioSource;
    trackArtistName.textContent = musics[target].artist;
    trackAlbumName.textContent = musics[target].album;
}

informationUpdate();

themes.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) return;
    let targetTheme = e.target.dataset.theme;

    let activeTheme = document.querySelector(".active-theme");
    activeTheme.classList.remove("active-theme");

    e.target.classList.add("active-theme");

    switch (targetTheme) {
        case "theme1":
            blurElement.style.visibility = "hidden";
            musicBox.style.border = "";
            musicBox.style.boxShadow = "";
            coverImage.style.background = "";
            trackProgressBar.style.background = "";
            currentTrackTimeBar.style.background = "";
            trackLoading.style.background = "";
            break;

        case "theme2":
            blurElement.style.visibility = "visible";
            musicBox.style.border = "1px solid #ffffff12";
            musicBox.style.boxShadow =
                "inset -10px -10px 15px #ffffff0a, inset 10px 10px 15px #ffffff0a";
            blurElement.style.background =
                "linear-gradient(135deg, #dc143c, #009688)";
            coverImage.style.background = "#00968875";
            trackProgressBar.style.background = "#0fd5ca73";
            currentTrackTimeBar.style.background = "#0fd5ca";
            trackLoading.style.background = "#0fd5ca";
            break;

        case "theme3":
            blurElement.style.visibility = "visible";
            musicBox.style.border = "1px solid #ffffff12";
            musicBox.style.boxShadow =
                "inset -10px -10px 15px #ffffff0a, inset 10px 10px 15px #ffffff0a";
            blurElement.style.background =
                "linear-gradient(135deg, #7f0096, #14abdc)";
            coverImage.style.background = "#288bcf75";
            trackProgressBar.style.background = "#0fd5ca73";
            currentTrackTimeBar.style.background = "#0fd5ca";
            trackLoading.style.background = "#0fd5ca";
            break;
    }
});

trackItemsWrapper.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) return;
    let activeAudio = document.querySelector(".active");
    activeAudio.classList.remove("active");
    e.target.classList.add("active");

    let targetIndex = e.target.dataset.index;

    informationUpdate(targetIndex);
});

audioTrack.addEventListener("waiting", waitingEvent);

function waitingEvent() {
    trackLoading.classList.add("track-loading");
}

audioTrack.addEventListener("canplay", (e) => {
    trackLoading.classList.remove("track-loading");
    audioTrack.removeEventListener("waiting", waitingEvent);
});

let firstPlay = true;
audioTrack.addEventListener("loadstart", (e) => {
    audioTrack.addEventListener("waiting", waitingEvent);
    currentTrackTimeBar.style.width = 0;
    if (!firstPlay) {
        audioTrack.play();
    }
    firstPlay = false;
});

let requestAnimationTimeArgument = performance.now();

requestAnimationFrame(function currentTimeUpdater(
    requestAnimationTimeArgument
) {
    let currentTime = audioTrack.currentTime;

    let currentMinute = Math.trunc(currentTime / 60);
    let currentSeconds = Math.trunc(currentTime % 60);

    if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }

    currentTrackTimeNumber.textContent = `${currentMinute}:${currentSeconds}`;

    currentTrackTimeBar.style.width =
        (currentTime / audioTrack.duration) * 100 + "%";

    requestAnimationFrame(currentTimeUpdater);
});

audioTrack.addEventListener("canplay", canPlayEvent);

audioTrack.addEventListener("durationchange", canPlayEvent);

function canPlayEvent(e) {
    let totalTime = audioTrack.duration;

    let totalMinute = Math.trunc(totalTime / 60);
    let totalSeconds = Math.trunc(totalTime % 60);

    if (totalSeconds < 10) {
        totalSeconds = "0" + totalSeconds;
    }

    currentTrackDuration.textContent = `${totalMinute}:${totalSeconds}`;
}

trackProgressBar.addEventListener("pointerdown", (e) => {
    audioTrack.currentTime =
        ((e.offsetX / trackProgressBar.offsetWidth) * 100 * audioTrack.duration) /
        100;
    trackProgressBar.addEventListener("pointermove", trackProgressBarPointerMove);

    function trackProgressBarPointerMove(e) {
        audioTrack.currentTime =
            ((e.offsetX / trackProgressBar.offsetWidth) * 100 * audioTrack.duration) /
            100;
    }
    document.addEventListener("pointerup", (e) => {
        trackProgressBar.removeEventListener(
            "pointermove",
            trackProgressBarPointerMove
        );
    });
});

trackProgressBar.addEventListener("wheel", (e) => {
    if (e.deltaY < 0) {
        audioTrack.currentTime += 5;
    }
    if (e.deltaY > 0) {
        audioTrack.currentTime -= 5;
    }
});

playButton.addEventListener("click", (e) => {
    if (audioTrack.paused) {
        audioTrack.play();
    } else {
        audioTrack.pause();
    }
});

previousButton.addEventListener("click", (e) => {
    let activeAudio = document.querySelector(".active");

    let trackItems = document.querySelectorAll(".track-item");

    let activeIndex = +activeAudio.dataset.index == 0 ?
        trackItems.length :
        +activeAudio.dataset.index;

    let targetIndex = +activeIndex - 1;

    activeAudio.classList.remove("active");
    trackItems[targetIndex].classList.add("active");

    informationUpdate(targetIndex);
});

nextButton.addEventListener("click", (e) => {
    let activeAudio = document.querySelector(".active");

    let trackItems = document.querySelectorAll(".track-item");

    let activeIndex = +activeAudio.dataset.index == trackItems.length - 1 ?
        -1 :
        +activeAudio.dataset.index;

    let targetIndex = +activeIndex + 1;

    activeAudio.classList.remove("active");
    trackItems[targetIndex].classList.add("active");

    informationUpdate(targetIndex);
});

audioTrack.addEventListener("play", (e) => {
    playButtonIcon.style.opacity = 0;
    pauseButtonIcon.style.opacity = 1;
    if (wasPlaying) {
        wasPlaying = false;
    }
});

// prevent from nested animations
let firstTimeAnimation = true;
audioTrack.addEventListener("playing", (e) => {
    if (firstTimeAnimation) {
        blurElement.animate({ filter: "blur(30px)" }, {
            duration: 5000,
            easing: "ease-in-out",
            direction: "alternate",
            iterations: Infinity
        });
        firstTimeAnimation = false;
    }
});

audioTrack.addEventListener("pause", (e) => {
    playButtonIcon.style.opacity = 1;
    pauseButtonIcon.style.opacity = 0;

    blurElement.animate({ filter: "blur(10px)" }, {
        duration: 1000,
        easing: "linear",
        fill: "forwards"
    });

    firstTimeAnimation = true;
});

volumeWrapper.addEventListener(
    "wheel",
    (e) => {
        e.preventDefault();
        switch (true) {
            case e.deltaY < 0:
                audioTrack.volume = (audioTrack.volume += 0.05).toFixed(2);
                break;

            case e.deltaY > 0:
                audioTrack.volume = (audioTrack.volume -= 0.05).toFixed(2);
                break;
        }
        volumeNumberUpdate();
    }, { passive: false }
);

function volumeNumberUpdate() {
    // trunc is just for (0.55 * 100)!
    volumeNumber.textContent = Math.trunc(audioTrack.volume * 100);
}

let wasPlaying;
audioTrack.addEventListener("volumechange", (e) => {
    let currentVolume = audioTrack.volume;
    switch (true) {
        case 0.66 < currentVolume:
            highVolumeSymbol.style.fill = "white";
            mediumVolumeSymbol.style.fill = "white";
            lowVolumeSymbol.style.fill = "white";
            wavesVolumeButton.style.opacity = 1;
            volumeCross.style.opacity = 0;
            if (wasPlaying) {
                audioTrack.play();
                wasPlaying = false;
            }
            break;

        case 0.33 < currentVolume && currentVolume < 0.66:
            highVolumeSymbol.style.fill = "#808080";
            mediumVolumeSymbol.style.fill = "white";
            lowVolumeSymbol.style.fill = "white";
            wavesVolumeButton.style.opacity = 1;
            volumeCross.style.opacity = 0;
            if (wasPlaying) {
                audioTrack.play();
                wasPlaying = false;
            }
            break;

        case 0 < currentVolume && currentVolume < 0.33:
            highVolumeSymbol.style.fill = "#808080";
            mediumVolumeSymbol.style.fill = "#808080";
            lowVolumeSymbol.style.fill = "white";
            wavesVolumeButton.style.opacity = 1;
            volumeCross.style.opacity = 0;
            if (wasPlaying) {
                audioTrack.play();
                wasPlaying = false;
            }
            break;

        case currentVolume == 0:
            wavesVolumeButton.style.opacity = 0;
            volumeCross.style.opacity = 1;
            if (!audioTrack.paused) {
                wasPlaying = true;
                audioTrack.pause();
            }
            break;
    }

    volumeNumberUpdate();
});

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowDown":
            audioTrack.volume = (audioTrack.volume -= 0.05).toFixed(2);
            break;

        case "ArrowUp":
            audioTrack.volume = (audioTrack.volume += 0.05).toFixed(2);
            break;

        case "ArrowLeft":
            audioTrack.currentTime -= 5;
            break;

        case "ArrowRight":
            audioTrack.currentTime += 5;
            break;

        case "Space":
            if (audioTrack.paused) {
                audioTrack.play();
            } else {
                audioTrack.pause();
            }
            break;
    }

    if (e.code == "ArrowDown" || e.code == "ArrowUp") {
        volumeButton.style.opacity = 0;
        volumeNumber.style.opacity = 1;

        document.addEventListener("keyup", (e) => {
            let volumeChangeAnimation = setTimeout(() => {
                volumeButton.style.opacity = 1;
                volumeNumber.style.opacity = 0;
            }, 600);

            document.addEventListener("keydown", (e) => {
                if (e.code == "ArrowDown" || e.code == "ArrowUp") {
                    clearTimeout(volumeChangeAnimation);
                }
            });
        });
    }
});

coverImage.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    let coverImageBigSize = coverImage.cloneNode();
    coverImageBigSize.className = "cover-image-big-size";
    coverImageBigSize.removeAttribute("id");
    document.body.append(coverImageBigSize);

    document.addEventListener("pointerup", (e) => {
        coverImageBigSize.remove();
    });
});