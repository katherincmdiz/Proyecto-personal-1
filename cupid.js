function btnSi() {
    Swal.fire({
        title: "Yo......",
        text: "Te quiero esclavo!",
        imageUrl: "imagenes/loca.svg",
        imageWidth: 400,
        imageHeight: 200,
        /*imageAlt: "Custom image",*/
        background: "linear-gradient(pink, lightblue)",
      });
}
/*https://unsplash.it/400/200*/
function mueveElBoton() {
    Width = window.innerWidth;
    Height = window.innerHeight;

    newWidth = Math.random() * Width;
    newHeight = Math.random() * Height;

    document.getElementById("btnNo").style.left= newWidth + 'px';
    document.getElementById("btnNo").style.top= newHeight + 'px';
    document.getElementById("btnNo").style.position = 'absolute';

    
}