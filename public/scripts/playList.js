
const Chrismassh_mp3 = './music/Chrismassh.mp3';
const Chrismassh_ogg = './music/Chrismassh.ogg';



function Chrismassh(){
    var fon = document.createElement('audio');
    fon.className = "fon";
    fon.loop = "true";


    if (fon.canPlayType('audio/mp3')) {
        fon.setAttribute('src', Chrismassh_mp3);
    }

    if (fon.canPlayType('audio/mpeg')) {
       fon.setAttribute('src', Chrismassh_mp3);
    }

    if (fon.canPlayType('audio/ogg')) {
        fon.setAttribute('src', Chrismassh_ogg);
    }
    fon.play();
    };

       
     // Chrismassh();
 
