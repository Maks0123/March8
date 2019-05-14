

    var fon = document.createElement('audio');
    fon.className = "audio";
    fon.canPlayType('audio/mp3');
    fon.canPlayType('audio/mpeg');
    fon.canPlayType('audio/ogg');
    fon.src = "./music/hohoho.mp3";
    //fon.controls = "controls";
    //fon.autoplay = "autoplay";
    fon.id = "audio";
    fon.play();
    
