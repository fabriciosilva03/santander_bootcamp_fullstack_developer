
enum Trabalho {
    Cantor,
    Motorista
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Antonia',
    idade: 25,
    profissao: Trabalho.Cantor
};

let pessoa2: Humano = {
    nome: 'Pedro',
    idade: 20,
    profissao: Trabalho.Motorista
};

let pessoa3: Humano = {
    nome: 'Luana',
    idade: 33,
    profissao: Trabalho.Cantor
};

let pessoa4: Humano = {
    nome: "Caio",
    idade: 18,
    profissao: Trabalho.Cantor
}