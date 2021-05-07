const StartCall = () => {


    const videoEl = document.getElementById('webcam-vid')

    const startWebcam = () => {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                videoEl.srcObject = stream
            })
            .catch(err => {
                console.log('Something went wrong, can not connect', err)
            })
        }
    }

    const stopWebcam = () => {
        const stream = videoEl.srcObject
        const tracks = stream.getTracks()

        for (let i = 0; i < tracks.length; i++) {
            let track = tracks[i]
            track.stop()
        }

        videoEl.srcObject = null
    }

    return(
        <>
        </>
    )
}