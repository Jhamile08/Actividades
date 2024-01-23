import {Coder} from './index.js';

export class coderMedellin extends Coder{
    constructor(coderName,coderAge, nivel){
        super(coderName,coderAge)
        this.nivel = nivel
    }
    showInfo(){
        return 
    }
}