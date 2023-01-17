/* EXERCICIO 1 - Criar três classes de objetos

1º - Classe de heróis da Marvel
2º - Classe de Vingadores
3º - Classe de Vingadores que morreram no cinema

Métodos: Voar, Correr Muito Rápido, Bater, Lutar
Atributos: Teletransporte, Se Regenerar, Super Força, Imortalidade

Construir através do método contrutor.

BOA SORTE!

*/

class Marvel {
    método: string;
    atributo: string;

    constructor(m: string, a:string) {
        this.método = m;
        this.atributo = a;
    }

    exibirDocs(): void {
        console.log(`O herói que ${this.método}, que possui ${this.atributo} morreu no último filme`)
    }

    
}

let marvels = new Marvel("Voa", "Super Força")
marvels.exibirDocs()

class Vingadores extends Marvel {

    exibirDocs(): void {
        console.log(`O herói que ${this.método}, que possui ${this.atributo} envelheceu no último filme`)
    }

    
}

let vingador= new Vingadores("Corre Muito Rápido", "Super Força")
vingador.exibirDocs

class Morreram extends Vingadores {

    exibirDocs(): void {
        console.log(`O herói que ${this.método}, que possui ${this.atributo} morreu no penúltimo filme`)
    }

    
}

let morrera= new Morreram("Bate", "Super Força")
morrera.exibirDocs

