
exports.seed = async function(knex) {
  await knex('books').insert([
    {
      id: 1,
      name: 'Superman - Entre a Foice e o Martelo',
      description: 'Superman - Entre a foice e o martelo ou na original Superman - Red Son é uma obra onde vemos o Superman, o Homem de Aço, porém de uma maneira bem diferente da que já conhecemos. A história se inicia durante a Segunda Guerra Mundial, porém em uma realidade onde a nave do Kriptoniano, o Clark, demorou 12 horas a mais para cair na terra, então assim ao invés de cair nos EUA, acabou caindo na Rússia e o Clark viveu e cresceu sobre os costumes e culturas da população lá daquela época. Aí aqui é simplesmente fantástico e possui um final surpreendente, é de explodir a mente, apesar das diferenças do herói clássico, o Superman que já conhecemos, algumas coisas continuam lá, mas eu não posso contar você vai ter que ler pra saber, hein. Cara, aproveita, ela é muito boa, lê vai, dá essa chance.',
      imageName: '71fugVWIEIL.jpg',
      fileName: '71fugVWIEIL.pdf',
      avaliation: 0.0,
    },
    {
      id: 2,
      name: 'Batman - A Cruzada Mascarada',
      description: 'Oi galera, vocês gostam do morcegão? Eu ganhei o livro A Cruzada Mascarada de um amigo e eu amei, ele conta o making-off do personagem Batman e como ele foi influenciado pelos fãs e os fãs influenciaram a criação do personagem, é muito legal, é como uma conversa com um amigo contando como que o personagem foi criado. Tem hora que você concorda, tem hora que você não concorda, mas você é cativado pelo livro que vai te contando essa história. São quase 80 anos de história, de 1939 até 2015. Eu amei e recomendo.',
      imageName: '91HZDsMHxbL.jpg',
      fileName: '91HZDsMHxbL.pdf',
      avaliation: 0.0,
    }
  ]);

  return await knex('booksGeners').insert([
    {
      bookId: 1,
      generId: 8
    },
    {
      bookId: 2,
      generId: 8
    },
  ]);
};
