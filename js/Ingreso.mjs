import Dato from `./Dato.mjs`

export default class Ingreso extends Dato {
    static contadorIngresos = 0

    constructor(descripcion, valor){
        super(descripcion, valor)
        this._id = contadorIngresos +1
    }

    getId(){
        return this._id
    }
}