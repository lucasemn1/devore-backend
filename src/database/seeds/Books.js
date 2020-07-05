
exports.seed = function(knex) {
  knex('books').insert([
    {
      name: 'Superman - Entre a Foice e o Martelo',
      description: 'Superman - Entre a foice e o martelo ou na original Superman - Red Son é uma obra onde vemos o Superman, o Homem de Aço, porém de uma maneira bem diferente da que já conhecemos. A história se inicia durante a Segunda Guerra Mundial, porém em uma realidade onde a nave do Kriptoniano, o Clark, demorou 12 horas a mais para cair na terra, então assim ao invés de cair nos EUA, acabou caindo na Rússia e o Clark viveu e cresceu sobre os costumes e culturas da população lá daquela época. Aí aqui é simplesmente fantástico e possui um final surpreendente, é de explodir a mente, apesar das diferenças do herói clássico, o Superman que já conhecemos, algumas coisas continuam lá, mas eu não posso contar você vai ter que ler pra saber, hein. Cara, aproveita, ela é muito boa, lê vai, dá essa chance.',
      imageName: '71fugVWIEIL.jpg',
      fileName: '71fugVWIEIL.pdf',
      avaliation: 0.0,
    },
  ]);

  return knex('booksGeners').insert([
    {
      bookId: 1,
      generId: 8
    },
  ]);
};
