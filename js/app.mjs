import Egreso from `./Egreso.mjs`
import Ingreso from `./Ingreso.mjs`

let egresos = {
    Renta: 900,
    Ropa:400
}

let ingresos = {
    Quincena: 9000,
    Venta: 400,
}

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos()
    let porcentajeEgreso = (totalIngresos() -  totalEgresos()) / totalIngresos()    
}

const totalIngresos = () => {
    let total = 0
    for (const key in ingresos) {
        const value = ingresos[key]
        total = total + value
    }
    return total
}

const totalEgresos = () => {
    let total = 0
    for (const key in egresos) {
        const value = egresos[key]
        total = total + value
    }
    return total
}

const formatoMoneda = (valor) => `$${valor.toLocaleString()}`
const formatoPorcentaje = (valor) => `${valor.toLocaleString()}%`

cargarCabecero()

