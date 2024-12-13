document.getElementById('enviartexto').addEventListener('click', function enviomensajeschat(){

const container=document.createElement('div');
const mensaje=document.getElementById('textarea').value;
container.textContent=mensaje;
document.getElementById('contenido').appendChild(container)
document.getElementById('ocultarchat')
this.classList.remove('contenedorchat');
document.getElementById('mostrarchat');
container.classList.add('conenedorchat');
});
document.getElementById('ocultarchat').addEventListener('click', function ocultarchat(){
    document.getElementsByClassName('contenedorchat')[0].innerHTML='';
    contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;
})



function getRandomBotMessage () {
    const messages = [
        "Creo que no.",
        "¡Totalmente!",
        "Eso suena interesante.",
        "No estoy seguro de entender, ¿puedes explicar más?",
        "¡Qué genial!",
        "Hmm, déjame pensar...",
        "¡Por supuesto!",
        "No sé, pero suena divertido.",
        "¿Puedes decirme más?",
        "Eso es un misterio para mí.",
        "¡Me encanta hablar contigo!"]

    return messages[Math.floor(Math.random() * messages.length)];
}



setTimeout(() => {
    getRandomBotMessage
}, 500)