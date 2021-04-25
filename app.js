const constraints = { video: { facingMode: "environment" }, audio: false }
const cameraView = document.querySelector("#camera-view")
const cameraOutput = document.querySelector("#camera-output")
const cameraSensor = document.querySelector("#camera-sensor")

document.querySelector("#noswap-button").onclick = () => {
  cameraOutput.classList.remove("swap-red-green")
  cameraOutput.classList.remove("swap-red-blue")
}

document.querySelector("#swaprg-button").onclick = () => {
  cameraOutput.classList.remove("swap-red-blue")
  cameraOutput.classList.add("swap-red-green")
}

document.querySelector("#swaprb-button").onclick = () => {
  cameraOutput.classList.remove("swap-red-green")
  cameraOutput.classList.add("swap-red-blue")
}

window.addEventListener("load", () => {
  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      cameraView.srcObject = stream
    })
    .catch(error => {
      console.error("Something broke!", error)
    })
})

setInterval(() => {
  cameraSensor.width = cameraView.videoWidth
  cameraSensor.height = cameraView.videoHeight
  cameraSensor.getContext("2d").drawImage(cameraView, 0, 0)
  cameraOutput.src = cameraSensor.toDataURL("image/webp")
}, 70)