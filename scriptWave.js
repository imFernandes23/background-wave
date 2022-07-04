function createWave(){
    document.getElementById('background').addEventListener('click', posiWave)

}

function posiWave(event){
    let background = document.getElementById('background')
    let wave = document.createElement('span')
    wave.classList.add('wave')
    wave.style.left = (event.clientX - 400) + "px"
    wave.style.top = (event.clientY - 400) + "px"
    background.appendChild(wave)

    setTimeout(function(){
        wave.remove()
    },5000)
}