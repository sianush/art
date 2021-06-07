const lienzo = document.querySelector('canvas')
const ctx = lienzo.getContext('2d')
const container3 = document.querySelector('.container-3')

//datos obra
const titulo = document.querySelector('#titulo')
const autor = document.querySelector('#autor')
const vanguardia = document.querySelector('#vanguardia')
const year = document.querySelector('#year')

import cuadritos from './cuadros.js'



// const colores = [""blue", "pink", "black", "#896633", "#628496", "#794438", "#3f51b5", "#00bcd4""]
// const colores = [""#ecd4c6", "#e3b155", "#27242a", "#f4e7d5"; "#84b09b", "#606060", "#faf1eb""]
const coloresNombres = ['brownClair', 'yellow','black', 'beige', 'ment', 'mentClair', 'gray', 'clair' ]

const colores = {
    brownClair: '#ecd4c6',
    yellow: '#e3b155',
    black: '#27242a',
    beige: '#f4e7d5',
    ment: '#84b09b',
    mentClair: '#cdf3e1',
    gray: '#606060',
    clair: '#faf1eb',
}

// const aleatorio = () => colores[Math.floor(Math.random() * colores.length)]

function azar(limite){
    let random = Math.random() * limite
    return Math.floor(random)
    
}

function digitoAleatortiorio(){
    let random = Math.random() * 255
    return String(Math.floor(random)) 
}

function transparenciaAleatortiorio(){
    let random = Math.random() 
    return String(Math.floor(random)) 
}

function colorAleatorio(){
    let posicion = coloresNombres[Math.floor(Math.random() * coloresNombres.length)]
    return colores[posicion]
}

// function hexadecimalAleatorio(){
//     let h1 = digitoAleatortiorio()
//     let h2 = digitoAleatortiorio()
//     let h3 = digitoAleatortiorio()
//     let h4 = digitoAleatortiorio()
//     let h5 = digitoAleatortiorio()
//     let h6 = digitoAleatortiorio()
//     let h7 = digitoAleatortiorio()
//     let h8 = digitoAleatortiorio()
//     return `#${h1}${h2}${h3}${h4}${h5}${h6}${h7}${h8}`
// }

function crearCuadrito( x, y, w, h){
    let x1 = azar(x) 
    let y1 = azar(y)
    let w1 = azar(w)
    let h1 = azar (h)
    // ctx.fillStyle = `rgb(${digitoAleatortiorio()}, ${digitoAleatortiorio()}, ${digitoAleatortiorio()}, 0.3)`
    ctx.fillStyle = colorAleatorio()
    ctx.fillRect(x1, y1, w1, h1)
}

crearCuadrito(980, 80, 500, 500)
crearCuadrito(980, 80, 20, 100)
crearCuadrito(900, 100, 100, 200)
crearCuadrito(900, 80, 100, 100)
crearCuadrito(800, 100, 200, 200)
crearCuadrito(700, 80, 300, 200)
crearCuadrito(700, 130, 300, 100)



function crearCirculito( a, b, c, d){
    let a1 = azar(a) 
    let b1 = azar(b)
    let c1 = azar(c)
    let d1 = azar (d)
    ctx.fillStyle = colorAleatorio()
    // ctx.fillStyle = `rgb(${digitoAleatortiorio()}, ${digitoAleatortiorio()}, ${digitoAleatortiorio()}, 0.3)`
    // ctx.strokeStyle = 'none'
    ctx.beginPath()
    ctx.arc(a1, b1, c1, d1, 2*Math.PI)
    ctx.fill()
 
}

crearCirculito(900, 90, 500, 0, 2*Math.PI)
crearCirculito(900, 90, 80, 0, 2*Math.PI)
crearCirculito(800, 120, 80, 0, 2*Math.PI)
crearCirculito(900, 150, 100, 0, 2*Math.PI)
crearCirculito(600, 100, 100, 0, 2*Math.PI)
crearCirculito(900, 180, 20, 0, 2*Math.PI)
crearCirculito(950, 100, 50, 0, 2*Math.PI)


// class Cuadros {
//     constructor(autor, titulo, vanguardia, year, foto){
//         this.autor = autor,
//         this.titulo = titulo,
//         this.vanguardia = vanguardia,
//         this.year = year,
//         this.foto = foto
//     }
// }

// const nocheEstrellada = new Cuadros('Vincent van Gogh', 'La noche estrellada', 'posimpresionista', 1888, 'v1')
// const persistenciaMemoria = new Cuadros('Slavador Dalí', 'La persistencia de la memoria', 'Surrealismo', 1931, 'v2')





// const cuadroNegro = {
//     autor: 'Kazimir Malevich',
//     titulo: 'Cuadro negro sobre fondo blanco',
//     vanguardia: 'Suprematismo',
//     año: 1915,
//     foto: 'v17'
// }

// const cuadroBlanco = {
//     autor: 'Kazimir Malevich',
//     titulo: 'Cuadro blanco sobreblanco',
//     vanguardia: 'Suprematismo',
//     año: 1918,
//     foto: 'v18'
// }

// const deStijl= {
//     autor: 'Peter Keler',
//     titulo: 'De Stijl 1',
//     vanguardia: 'Neoplasticismo',
//     año: 1922,
//     foto: 'v19'
// }

// const composiciónBlancoNegro= {
//     autor: 'Piet Mondrian',
//     titulo: 'Composición en Blanco y Negro',
//     vanguardia: 'Neoplasticismo',
//     año: 1917,
//     foto: 'v20'
// }


function indiceArray(){
    return Math.floor(Math.random() * cuadritos.length)
}

const indiceAletorio = indiceArray()

//cargar imagenes aleatorias en container 3
const imagen = document.createElement('img')
imagen.src = `./assets/img/${cuadritos[indiceAletorio].foto}.png`
imagen.style.width = '100%'
container3.appendChild(imagen)

titulo.textContent = cuadritos[indiceAletorio].titulo
autor.textContent = cuadritos[indiceAletorio].autor
vanguardia.textContent = cuadritos[indiceAletorio].vanguardia
year.textContent = cuadritos[indiceAletorio].year