(() => {

    const constraints = {
        audio: true,
        video: false,
    }

    navigator.mediaDevices.getUserMedia(constraints).then(function (mediaStream) {
        let audio = document.querySelector('audio');
        audio.srcObject = mediaStream;
        audio.play();
    }).catch(function (err) {
        console.log('error = ' + err.message);
    })

})()