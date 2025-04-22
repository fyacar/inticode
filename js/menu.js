const menu = document.querySelector('.menu');
const btnCerrar = document.querySelector('.btnCerrar');
const nav = document.querySelector('nav');

const boton1Roblox = document.getElementById('botonMostrarRoblox');
const boton2Roblox = document.getElementById('botonOcultarRoblox');
const seccionRoblox = document.getElementById('contenidoVerMasRoblox');

const boton1Python = document.getElementById('botonMostrarPython');
const boton2Python = document.getElementById('botonOcultarPython');
const seccionPython = document.getElementById('contenidoVerMasPython');

const boton1Make = document.getElementById('botonMostrarMake');
const boton2Make = document.getElementById('botonOcultarMake');
const seccionMake = document.getElementById('contenidoVerMasMake');

const boton1Scratch = document.getElementById('botonMostrarScratch');
const boton2Scratch = document.getElementById('botonOcultarScratch');
const seccionScratch = document.getElementById('contenidoVerMasScratch');

const boton1Stencyl = document.getElementById('botonMostrarStencyl');
const boton2Stencyl = document.getElementById('botonOcultarStencyl');
const seccionStencyl = document.getElementById('contenidoVerMasStencyl');

menu.addEventListener('click',()=>{
    nav.classList.add('open-nav')
})

btnCerrar.addEventListener('click',()=>{
    nav.classList.remove('open-nav')
})


boton1Roblox.addEventListener('click', () => {
    seccionRoblox.style.display = 'block';
    boton1Roblox.style.display = 'none';
    boton2Roblox.style.display = 'inline-block';
  });

boton2Roblox.addEventListener('click', () => {
    seccionRoblox.style.display = 'none';
    boton1Roblox.style.display = 'inline-block';
    boton2Roblox.style.display = 'none';
  });


boton1Python.addEventListener('click', () => {
    seccionPython.style.display = 'block';
    boton1Python.style.display = 'none';
    boton2Python.style.display = 'inline-block';
  });

boton2Python.addEventListener('click', () => {
    seccionPython.style.display = 'none';
    boton1Python.style.display = 'inline-block';
    boton2Python.style.display = 'none';
  });


boton1Make.addEventListener('click', () => {
    seccionMake.style.display = 'block';
    boton1Make.style.display = 'none';
    boton2Make.style.display = 'inline-block';
  });

boton2Make.addEventListener('click', () => {
    seccionMake.style.display = 'none';
    boton1Make.style.display = 'inline-block';
    boton2Make.style.display = 'none';
  });


boton1Scratch.addEventListener('click', () => {
    seccionScratch.style.display = 'block';
    boton1Scratch.style.display = 'none';
    boton2Scratch.style.display = 'inline-block';
  });

boton2Scratch.addEventListener('click', () => {
    seccionScratch.style.display = 'none';
    boton1Scratch.style.display = 'inline-block';
    boton2Scratch.style.display = 'none';
  });

boton1Stencyl.addEventListener('click', () => {
    seccionStencyl.style.display = 'block';
    boton1Stencyl.style.display = 'none';
    boton2Stencyl.style.display = 'inline-block';
  });

boton2Stencyl.addEventListener('click', () => {
    seccionStencyl.style.display = 'none';
    boton1Stencyl.style.display = 'inline-block';
    boton2Stencyl.style.display = 'none';
  });


  function copiarParrafo() {
    const texto = document.getElementById("parrafo");
    const range = document.createRange();
    const selection = window.getSelection();

    range.selectNodeContents(texto);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      const copiado = document.execCommand('copy');
      if (copiado) {
        alert('Texto copiado: ' + texto.textContent);
      } else {
        alert('No se pudo copiar el texto.');
      }
    } catch (err) {
      alert('Error al copiar: ' + err);
    }

    selection.removeAllRanges(); // Limpia la selección
  }