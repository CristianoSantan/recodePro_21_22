// ----------------------- 01 - Escopo
// var animal = 'cat'; // escopo global
// console.log(animal);
// console.error('error');
// console.warn('warn');
// console.info('info');
// console.debug('debug');

// var animal;
// function sayAnimal() {
//   animal = 'cat';
//   console.log(animal);
// }

// sayAnimal();
// console.log(animal);

// let sound = 'meow';
// const nome = 'jake';

// ----------------------- 02 - Let
// Em JS, temos 3 palavras-chave para a declaração de variáveis: var, let e const.

// As keywords var e const são bem conhecidas, a novidade aqui é a keyword let, que surgiu na versão 6 do EcmaScript (ES6).
// var animal = 'cat';
// console.log(animal);
// {
//   let animal = 'dog';
//   console.log(animal);
// }
// console.log(animal);
// ----------------------- 03 - Const
// const secretNumber = 28;

// const will = {
//   name: 'Willian',
//   age: 53,
// };

// Object.freeze(will);

// will.age = 26;

// console.log(will);
// ----------------------- 04 - Temporal dead zone
// console.log(cat);
// let cat = 'meow';
// ----------------------- 05 - arrow-functions
// const nome = 'Cristiano';

// function ola(name) {
//   return `Olá meu nome é, ${name}!`;
// }

// let ola = function (name) {
//   return `Olá meu nome é, ${name}!`;
// };

// let ola = (name) => {
//   return `Olá meu nome é, ${name}!`;
// };

// let ola = name => {
//   return `Olá meu nome é, ${name}!`;
// };

// let ola = (name) => `Olá meu nome é, ${name}!`;

// console.log(ola(nome));

// ----------------------- 06 - This no Arrow Function
// const btn = document.getElementById('btn');
// btn.addEventListener('click', function () {
//   console.log(this);
// });
// ----------------------- 07 - Template Literals
// const europa = {
//   live: 'Dublin',
//   love: 'Portugal',
// };

// const text =
//   'Eu moro em ' + europa.live + ' e sou apaixonado por ' + europa.love + '!';

// const newText = `Eu moro em ${europa.live} e sou apaixonado por ${europa.love}!`;

// const fruits = 'bannana' + `\n` + 'orange' + `\n` + 'apple';

// const newFruits = `
//     bannana
//     orange
//     apple`;

// console.log(newText);
// ----------------------- 08 - Template Literals e HTML
// const article = {
//   title: 'Aprendendo Template Strings',
//   intro:
//     'Uma breve explicação de como se utilizar template strings do ES6 em seu código hoje!',
//   body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, officia, perspiciatis? Architecto, molestias autem. Repellat, laborum deserunt soluta necessitatibus. Tenetur illo, id magnam numquam neque illum temporibus, in qui eos.',
//   tags: ['es6', 'js', 'template-literal'],
// };

// function renderAuthor(name) {
//   return name ? name : 'desconhecido';
// }

// const markup = `
//     <article>
//         <header>
//             <h1>${article.title}</h1>
//         </header>
//         <section>
//             <p>${article.intro}</p>
//         </section>
//         <footer>
//             <ul>
//                 ${article.tags.map((tag) => `<li>${tag}</li>`).join('')}
//             </ul>
//             <p>Author: ${renderAuthor(article.author)}</p>
//         </footer>
//     </article>
// `;

// document.body.innerHTML = markup;
// ----------------------- 09 - Escopo
// ----------------------- 10 - Escopo
// const produto = {
//   img: 'https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_UL160_SR160,160_.jpg',
//   descricao: 'Echo Dot (4ª Geração): Smart Speaker com Alexa - Cor Preta',
//   precoAntigo: 'R$ 1222,00',
//   precoAtual: 'R$ 399,00',
// };

// for (let i = 0; i < 10; i++) {
//   var markup = `
//     <div class="card">
//         <img src="${produto.img}" alt="">
//         <p>${produto.descricao}</p>
//         <div class="price">
//             <p><s>${produto.precoAntigo}</s></p>
//             <p>${produto.precoAtual}</p>
//         </div>
//         <button id="btn">Comprar</button>
//     </div>
//     `;
//   section_card.innerHTML += markup;
// }
