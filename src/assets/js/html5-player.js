var audio;
var playControl;
var progressControl;
var progressHolder;
var playProgressBar;
var playProgressInterval;
var playerIntervalDuration;
var currentTimeDisplay;
var handControl;
var timer;

var bodyLoaded = function () {
    audio = document.getElementById("audio");
    playControl = document.getElementById("play");
    progressControl = document.getElementById("progress");
    progressHolder = document.getElementById("progress_box");
    progressBuffer = document.getElementById("load_progress");
    playProgressBar = document.getElementById("play_progress");
    currentTimeDisplay = document.getElementById("current_time_display");
    handControl = document.getElementById("hand_progress");
    if (audio != null) {
        setTimeSong();
        pauseAudio();
        //set mac dinh gia tri volume cho audio player phuc vu on dinh cho player ko bi luc to luc nho
        audio.volume = 0.8;

        audio.addEventListener('error', function failed(e) {
            // audio playback failed - show a message saying why
            // to get the source of the audio element use $(this).src
            switch (e.target.error.code) {
                case e.target.error.MEDIA_ERR_ABORTED:
                    console.log('You aborted the video playback.');
                    break;
                case e.target.error.MEDIA_ERR_NETWORK:
                    console.log('A network error caused the audio download to fail.');
                    break;
                case e.target.error.MEDIA_ERR_DECODE:
                    console.log('The audio playback was aborted due to a corruption problem or because the video used features your browser did not support.');
                    break;
                case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    console.log('The video audio not be loaded, either because the server or network failed or because the format is not supported.');
                    break;
                default:
                    console.log('An unknown error occurred.');
                    break;
            }
            var oClient = new MyOauthClient();
            logListenFail(1, "WAP", window.location.href, audio.src, e.target.error.code, oClient.getUserMsisdn());
        }, true);

        playControl.addEventListener("click", function () {
            if (audio.paused) {
                playAudio();
                index = getIndex();
                if (index == 'undefined') {
                    changeSong(0);
                }
            } else {
                pauseAudio();
            }
        }, true);

        progressHolder.addEventListener("mouseup", function (e) {
            setPlayProgress(e.pageX);
        }, true);

        handControl.addEventListener("mousedown", function () {
            blockTextSelection();
            document.onmousemove = function (e) {
                stopTrackingPlayProgress();
                setPlayProgress(e.pageX);
            }
            document.onmouseup = function () {
                unblockTextSelection();
                document.onmousemove = null;
                document.onmouseup = null;
                trackPlayProgress();
            }
        }, true);

        handControl.addEventListener("mouseup", function (e) {
            setPlayProgress(e.pageX);
        }, true);
    }
}

function playAudio() {
    console.log("play audio|start");
    console.log("play audio|" + audio.src);
    clearInterval(timer);
    timer = setInterval(function () {
        audio.play();
    }, 3000);
    audio.play();

    playControl.className = "pause control";

    trackPlayProgress();
    //update lai slider value
    clearInterval(playerIntervalDuration);
    playerIntervalDuration = setInterval(setMaxSliderValue, 33);
    //playerIntervalDuration = setInterval(setMaxSliderValue, 33);
    //jQuery( "#audioSlider" ).slider( "option", "max", audio.duration );
    console.log("play audio|end");
}
//
// //danh cho bxh bai hat
// function playAudio(id) {
// 	clearInterval(timer);
// 	timer = setInterval(function(){
// 		audio.play();
// 	}, 3000);
// 	audio.play();
// 	playControl.className = "pause control";
// 	countLike(id, 'song', '#count_like');
// 	trackPlayProgress();
// }

function pauseAudio() {
    console.log("pause audio|start");
    clearInterval(timer);
    audio.pause();
    playControl.className = "play control";
    stopTrackingPlayProgress();
    console.log("pause audio|end");
}

function setTimeSong() {
    if (audio.duration) {
        currentTimeDisplay.innerHTML = formatTime(audio.duration);

    }

}
function setMaxSliderValue() {
    if (audio.duration) {
        //console.log("playerr audio " + playerIntervalDuration + "|" + audio.duration );
        // jQuery( "#audioSlider" ).slider( "option", "max", audio.duration );
        clearInterval(playerIntervalDuration);
    }
}
function trackPlayProgress() {

    playProgressInterval = setInterval(updatePlayProgress, 33);
}

function stopTrackingPlayProgress() {
    clearInterval(playProgressInterval);
}

function updatePlayProgress() {
    updateLoading();
    playProgressBar.style.width = ((audio.currentTime / audio.duration) * (progressHolder.offsetWidth - 2))
        + "px";
    handControl.style.left = (((audio.currentTime / audio.duration) * (progressHolder.offsetWidth - 2)) - 7)
        + "px";
    updateTimeDisplay();
}

function updateLoading() {
    var precentLoad;
    if ((audio.buffered != undefined) && (audio.buffered.length != 0)) {
        precentLoad = parseInt(
            ((audio.buffered.end(0) / audio.duration) * 100), 10);
        progressBuffer.style.width = precentLoad + "%";
    }
}

function setPlayProgress(clickX) {
    updateLoading();

    var newPercent = Math.max(0, Math.min(1,
        (clickX - findPosX(progressHolder)) / progressHolder.offsetWidth));
    audio.currentTime = newPercent * audio.duration;

    playProgressBar.style.width = newPercent * (progressHolder.offsetWidth - 2)
        + "px";
    handControl.style.left = ((newPercent * (progressHolder.offsetWidth - 2)) - 7)
        + "px";
    updateTimeDisplay();
}

function updateTimeDisplay() {

    if (audio.duration) {
        //jQuery( "#audioSlider" ).slider( "option", "value", audio.currentTime );
        //console.log("player time =" + audio.currentTime);
        currentTimeDisplay.innerHTML = formatTime(audio.duration - audio.currentTime);
    }
}

function blockTextSelection() {
    document.body.focus();
    document.onselectstart = function () {
        return false;
    };
}

function unblockTextSelection() {
    document.onselectstart = function () {
        return true;
    };
}

function formatTime(seconds) {
    seconds = Math.round(seconds);
    minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
}

function findPosX(obj) {
    var curleft = obj.offsetLeft;
    while (obj = obj.offsetParent) {
        curleft += obj.offsetLeft;
    }
    return curleft;
}
var getIndex = function () {
    var list = jQuery('#show_audio_play .keeng-song-item');
    //var list = document.getElementById('listSong').getElementsByTagName('div');

    for (i = 0; i < list.length; i++) {
        if (list[i].className == "keeng-song-item playing") {
            return i;
        }
    }
    return 'undefined';
};

var setActiveSong = function (index) {
    if (index != 'undefined') {
        var list = jQuery('#show_audio_play .keeng-song-item');
        for (i = 0; i < list.length; i++) {
            if (i == index)
                list[i].className = "keeng-song-item playing";
            else {
                list[i].className = (i != list.length - 1) ? "keeng-song-item"
                    : "keeng-song-item noborder";
            }
        }
    }
};

function logListenFail(type, source, url, mediaUrl, errorCode, msisdn){
    try {
        MyLogger.log("log listen fail start");
        MyLogger.log(type + "|" + source + "|" + url + "|" + mediaUrl + "|" + errorCode + "|" + msisdn);
        var request = jQuery.ajax({
            url: MyConstant.getParameter("PLAY_ERROR_LOG_URL"),
            type: "POST",
            data: {
                type: type, //1 audio, 2 video
                source: source,
                url: url + "|" + mediaUrl,
                msisdn: msisdn,
                errorCode: errorCode
            }
        });

        request.done(function (info) {
            MyLogger.log("log listen fail success|" + info);
        });
        request.fail(function (jqXHR, textStatus, errorThrown) {
            MyLogger.log("log listen fail error|" + textStatus);
        });
    } catch (error) {
        console.log(error);
    }
}