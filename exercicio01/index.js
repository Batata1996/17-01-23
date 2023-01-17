/* EXERCICIO 1 - Criar três classes de objetos

1º - Classe de heróis da Marvel
2º - Classe de Vingadores
3º - Classe de Vingadores que morreram no cinema

Métodos: Voar, Correr Muito Rápido, Bater, Lutar
Atributos: Teletransporte, Se Regenerar, Super Força, Imortalidade

Construir através do método contrutor.

BOA SORTE!

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Marvel = /** @class */ (function () {
    function Marvel(m, a) {
        this.método = m;
        this.atributo = a;
    }
    Marvel.prototype.exibirDocs = function () {
        console.log("O her\u00F3i que ".concat(this.método, ", que possui ").concat(this.atributo, " morreu no \u00FAltimo filme"));
    };
    return Marvel;
}());
var marvel = new Marvel("Voa", "Super Força");
marvel.exibirDocs;
var Vingadores = /** @class */ (function (_super) {
    __extends(Vingadores, _super);
    function Vingadores() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vingadores.prototype.exibirDocs = function () {
        console.log("O her\u00F3i que ".concat(this.método, ", que possui ").concat(this.atributo, " envelheceu no \u00FAltimo filme"));
    };
    return Vingadores;
}(Marvel));
var vingadores = new Vingadores("Corre Muito Rápido", "Super Força");
vingadores.exibirDocs;
var Morreram = /** @class */ (function (_super) {
    __extends(Morreram, _super);
    function Morreram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Morreram.prototype.exibirDocs = function () {
        console.log("O her\u00F3i que ".concat(this.método, ", que possui ").concat(this.atributo, " morreu no pen\u00FAltimo filme"));
    };
    return Morreram;
}(Vingadores));
var morreram = new Morreram("Bate", "Super Força");
morreram.exibirDocs;
