// Resposta 1
const funcionario = {
    codigo: 15,
    nome: 'Pedro'
};

// Resposta 2
const funcionario2: {codigo: number, nome: string} = {
    codigo: 15,
    nome: 'Pedro'
}

// Respostas 3 e 4
interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 15;
funcionarioObj.nome = 'Pedro';

const funcionarioObj2: Funcionario = {
    codigo: 15,
    nome: 'Pedro'
}