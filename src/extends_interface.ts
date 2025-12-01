interface Pessoa {
    nome: string;
    email: string;
}

interface Professor extends Pessoa {
    salario: string;
}

interface Aluno extends Pessoa {
    matricula: number;
}