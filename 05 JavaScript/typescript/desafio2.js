"use strict";
var Trabalho;
(function (Trabalho) {
    Trabalho[Trabalho["Cantor"] = 0] = "Cantor";
    Trabalho[Trabalho["Motorista"] = 1] = "Motorista";
})(Trabalho || (Trabalho = {}));
let pessoa1 = {
    nome: 'Antonia',
    idade: 25,
    profissao: Trabalho.Cantor
};
let pessoa2 = {
    nome: 'Pedro',
    idade: 20,
    profissao: Trabalho.Motorista
};
let pessoa3 = {
    nome: 'Luana',
    idade: 33,
    profissao: Trabalho.Cantor
};
let pessoa4 = {
    nome: "Caio",
    idade: 18,
    profissao: Trabalho.Cantor
};
