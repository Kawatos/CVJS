var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas`)

var dia = new Date()
var diasem = dia.getDay()

/* 
    0 = Domingo
    1 = Segunda
    2 = Terca
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado

*/

console.log(diasem)

switch(diasem) {
    case 0:
        console.log('Domingueira')
        break
    case 1:
        console.log('Segundou')
        break
    case 2:
        console.log('terca-feira (teclado em en-us e triste')
        break
    case 3:
        console.log('Quartou-feirou')
        break
    case 4:
        console.log('Quinta feira, quase la.')
        break
    case 5:
        console.log('SEXTOU')
        break
    case 6:
        console.log('Sabadou!')
        break
    default:
        console.log('Dia invalido.')
        break
}