function createWave(){
    document.getElementById('background').addEventListener('click', posiWave)

}

function posiWave(event){
    const background = document.getElementById('background')
    const wave = document.createElement('span')
    wave.classList.add('wave')
    wave.style.left = (event.clientX - 400) + "px"
    wave.style.top = (event.clientY - 400) + "px"
    background.appendChild(wave)
}