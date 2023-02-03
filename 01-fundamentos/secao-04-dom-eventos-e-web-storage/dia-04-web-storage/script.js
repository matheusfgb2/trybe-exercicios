

// Etapas:
// Parte 1: Criar conteúdo do header
//  1 - Criar elemento header
const body = document.querySelector('body');
const header = document.createElement('header');
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
createList('font-color-list');
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