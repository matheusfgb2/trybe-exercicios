// Etapas:
// Parte 1: Criar conteúdo do header
//  1 - Criar elemento header
const body = document.querySelector('body');
const header = document.createElement('header');
header.id = 'header-container';
body.appendChild(header);
//  2 - Criar elemento section com id 'event-lists'
const headerSection = document.createElement('section');
headerSection.id = 'event-lists';
header.appendChild(headerSection);
//  3 - Criar arrays que contenham o que será colocado nas listas
const bgColorArray = ['white', 'black', 'green', 'blue', 'yellow'];
const fontColorArray = ['black', 'red', 'white'];
const fontSizeArray = ['8px', '10px', '12px', '14px', '20px'];
const lineHeightArray = ['1', 'normal', '1.5', '2.0', '3.0'];
const fontFamilyArray = ['Arial', 'Times New Roman'];
//  4 - Criar listas (criar função createList)
const createList = (idName) => {
  const list = document.createElement('ul');
  list.id = idName;
  list.className = 'list';
  headerSection.appendChild(list);
};
//    1 - Criar lista com a id 'bg-color-list'
//    2 - Criar lista com a id 'font-color-list'
//    3 - Criar lista com a id 'font-size-list'
//    4 - Criar lista com a id 'line-height-list'
//    5 - Criar lista com a id 'font-family-list'
createList('bg-color-list');
createList('font-color-list');
createList('font-size-list');
createList('line-height-list');
createList('font-family-list');

//  5 - Criar itens das listas (criar função createListItem)
//    1 - Iterar array correspondente
//    2 - Criar variável com o tipo de elemento 'li' e 'button'
//    3 - Adicionar classe correspondente
//    4 - Adicionar innerHTML com conteúdo iterado
//    5 - AppendChild na lista correspondente
const createListItem = (array, listID, paragraph) => {
  //Capturando lista
  const list = document.getElementById(listID);
  //Criando parágrafo
  const p = document.createElement('p');
  p.innerHTML = paragraph;
  //Colocando parágrafo na lista
  list.appendChild(p);
  for (item of array) {
    //Criando li
    const listItem = document.createElement('li');
    listItem.id = `'${item}-li'`;
    listItem.className = 'list-item';
    //Criando botão
    const button = document.createElement('button');
    button.innerHTML = item;
    button.className = 'button';
    //Colocando botão no li
    listItem.appendChild(button);
    //Colocando li na lista
    list.appendChild(listItem);
  }
}
createListItem(bgColorArray, 'bg-color-list', 'Cor de fundo');
createListItem(fontColorArray, 'font-color-list', 'Cor da fonte');
createListItem(fontSizeArray, 'font-size-list', 'Tamanho da fonte');
createListItem(lineHeightArray, 'line-height-list', 'Espaçamento entre linhas');
createListItem(fontFamilyArray, 'font-family-list', 'Tipo da fonte');
//  6 - Ajustar styles da section 'event-lists'
//    1 - display
//    2 - padding
//    3 - button

// Parte 2: Criar conteúdo do main
//  1 - Criar main
//    1 - Criar section c/ id 'main-title'
//    2 - Criar título h1 c id 'title'
//    3 - Criar subtítulo h3 c/ id 'second-title'
const main = document.createElement('main');
main.id = 'main-container';
const mainTitleSection = document.createElement('section');
mainTitleSection.id = 'main-title';
const title = document.createElement('h1');
title.id = 'title';
title.innerHTML = 'Título';
const secondTitle = document.createElement('h3');
secondTitle.id = 'second-title';
secondTitle.innerHTML = '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."';
body.appendChild(main);
main.appendChild(mainTitleSection);
mainTitleSection.appendChild(title);
mainTitleSection.appendChild(secondTitle);
//  2 - Criar section c/ id 'main-paragraph'
//    1 - Criar parágrafo
const mainParagraphSection = document.createElement('section');
mainParagraphSection.id = 'main-paragraph';
main.appendChild(mainParagraphSection);
const mainParagraph = document.createElement('p');
mainParagraph.innerHTML = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';
mainParagraphSection.appendChild(mainParagraph);
//  3 - Fazer com que botões disparem um evento
//    1 - Fazer com que todos os botões sejam escutáveis
//    2 - Atribuir o estilo, escrito no botão clicado, ao texto

//-------------------------------------------------------
//Objeto com as classes e seus referentes estilos
listClasses = {
  'bg-color-list': 'backgroundColor',
  'font-color-list': 'color',
  'font-size-list': 'fontSize',
  'line-height-list': 'lineHeight',
  'font-family-list': 'fontFamily'
};
const buttons = document.getElementsByClassName('button');
//Iterando através de todos os botões para captura
for (button of buttons) {
  button.addEventListener('click', (event) => {
    //Variável para estocar a ID da lista atual (pai do pai do evento) 
    const currentListId = event.target.parentElement.parentElement.id;
    //Variável para estocar a propriedade atual (ex: black, 8px, etc)
    const property = event.target.innerHTML;
    //Conversão do nome da classe para o tipo de estilo (ex: 'bg-color-list' para 'backgroundColor')
    currentStyleProperty = listClasses[currentListId];
    //Alteração do estilo na main
    main['style'][currentStyleProperty] = property;
    //Local storage
    localStorage.setItem(currentStyleProperty, property);
    // console.log(localStorage.key(currentStyleProperty));
  });
};
//Atribuir valores da localStorage ao body

//Iteração de todos os elementos da localStorage através da propriedade key
for (index = 0; index < localStorage.length; index += 1) {
  //Atribuição do atributo do estilo numa variável
  const styleAtribute = localStorage.key(index);
  //Atribuição do valor do estilo numa variável
  const styleValue = localStorage.getItem(localStorage.key(index));
  //Alteração do estilo da main
  main.style[styleAtribute] = styleValue;
}