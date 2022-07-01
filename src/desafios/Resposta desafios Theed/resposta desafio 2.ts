enum Funcao {
    Atriz,
    Padeiro,
    Desenvolvedor,
    Professor,
    Estudante,
    Aprendiz
}

type Funcionario = {
    nome: string,
    idade: number,
    profissao: Funcao
}

let colaborador1: Funcionario  = {
    nome: 'marda',
    idade: 33,
    profissao: Funcao.Atriz
};

let colaborador2: Funcionario = {
    nome: 'theed',
    idade: 19,
    profissao: Funcao.Desenvolvedor
};

let colaborador3: Funcionario = {
    nome: 'laura',
    idade: 21,
    profissao: Funcao.Estudante
};

let colaborador4: Funcionario = {
    nome: "junior",
    idade: 29,
    profissao: Funcao.Professor
}

let colaborador5: Funcionario = {
    nome: "ana beatriz",
    idade: 14,
    profissao: Funcao.Aprendiz
}