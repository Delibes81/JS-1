import Dato from `./Dato.mjs`

 export default class Egreso extends Dato {
    static contadorEngresos = 0

    constructor(descripcion, valor){
        super(descripcion, valor)
        this._id = contadorEngresos +1
    }

    getId(){
        return this._id
    }
}