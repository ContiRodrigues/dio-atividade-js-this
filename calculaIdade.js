function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Renata',
    idade: 35,
};

const pessoa2 = {
    nome: 'Júlia',
    idade: 20,
};

const pessoa3 = {
    nome: 'Pedro',
    idade: 12,
};

const animal = {
    nome: 'Luna',
    idade: 3,
    raca: 'Maltês',
};

console.log(calculaIdade.call(animal, 8));
console.log(calculaIdade.apply(animal, [8]));
