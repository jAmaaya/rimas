const rimasAmor = ['Te miento si digo que no eres todo lo que pienso',
 'se que esto comenzo en tan solo un momento', 
 'entre tantas personas solo a ti te espero, tal vez tu pienses que miento, nena si eres fuego me quemo no perdamos el tiempo', 
 'aquella noche en el bar, el primer dia que empezamos a hablar no imagine que iba a terminar enamorado, loco y sin pensar, en el daño que me hicieron antes ya no importaba porque estaba tu',
 'bailandito asi, pegaito mami, como me gusta a mi, enamorado baby, crazy, crazy asi'
]
const rimasDes = ['Yo se, que no fui el mejor, a pesar que me traicionaste el corazon, nena mirame sabes que ya no va mas, este juego que no va a continuar',
'comenzo como lo mejor, termino jodiendo todo, lo que algun mi corazon sintio, todo fue solo un juego'
]

const rimasTris = ['no te puedo olvidar, eras todo lo que buscaba']

// aqui comienzan las funciones

let rimas = (rim) => {
    return rim[Math.floor(Math.random() * rim.length)]
}

const rimaDefi = (rima) => {
    if (rima === rimasAmor) {
        return `Escogiste rimas de amor ... blif ... bluff : ${rimas(rima)}`
    } else if (rima === rimasDes) {
        return `Escogiste rimas de desamor ... blam ... boom : ${rimas(rima)}`
    } else if (rima === rimasTris) {
        return `Escogiste rimas tristes ;-( ... ummm ... tin : ${rimas(rima)}`
    } else {
        return 'Tipo de rima invalido mi pana'
    }
}

console.log(rimaDefi(rimasTris))
