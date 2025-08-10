# Sorteador de Amigos

Este é um pequeno projeto em JavaScript puro, HTML e CSS para sortear um único nome de uma lista de amigos. Ele permite que os usuários adicionem nomes, vejam a lista na tela e, em seguida, cliquem em um botão para sortear aleatoriamente um nome como "ganhador".

## Funcionalidades

* **Adicionar Amigo**: Um campo de entrada permite que o usuário digite o nome de um amigo e o adicione a uma lista.
* **Visualizar a Lista**: A lista de amigos é exibida dinamicamente na tela à medida que os nomes são adicionados.
* **Sortear Ganhador**: Um botão "Sortear amigo" seleciona aleatoriamente um nome da lista e o exibe como o ganhador.
* **Validação de Entrada**: O sistema impede a adição de nomes vazios e garante que o sorteio só ocorra se houver amigos na lista.

## Tecnologias Utilizadas

* **HTML**: Estrutura e layout da página.
* **CSS**: Estilização visual.
* **JavaScript**: Lógica de manipulação da lista de amigos, renderização dinâmica e o algoritmo de sorteio.

## Dificuldades e Soluções

Ao longo do desenvolvimento deste projeto, enfrentei alguns desafios comuns para quem está começando com JavaScript e manipulação do DOM.

### 1. Manipulação do Array (Array.push)

* **Dificuldade**: No início, tentei adicionar o valor do input diretamente a uma variável que era uma string, e não um array, o que impedia o uso do método `.push()`.
* **Solução**: A solução foi garantir que a variável `listaAmigos` fosse inicializada como um array vazio (`[]`) desde o começo do código. A leitura do valor do input e o uso do `.push()` foram movidos para a função que é chamada pelo botão "Adicionar".

### 2. Renderização da Lista na Tela

* **Dificuldade**: Renderizar a lista na tela de forma dinâmica foi um ponto de atenção. Eu percebi que simplesmente atribuir o array a um `innerHTML` resultava em uma string simples, como "Nome1,Nome2". Além disso, os itens eram duplicados a cada nova adição.
* **Solução**: A abordagem foi criar uma função dedicada (`renderLista()`) que é chamada toda vez que um amigo é adicionado. Dentro desta função, a lista HTML é limpa (`listaAtual.innerHTML = '';`) e, em seguida, um loop (`for...`) percorre o array, criando um novo elemento `<li>` para cada amigo e adicionando-o ao `<ul>` na página.

### 3. Lógica do Sorteio

* **Dificuldade**: Inicialmente, a lógica do sorteio estava configurada para um "amigo secreto" (onde cada pessoa sorteia outra), usando um algoritmo de embaralhamento. No entanto, o objetivo final do projeto era ter apenas um único ganhador.
* **Solução**: A função de sorteio foi simplificada. Em vez de embaralhar e criar pares, o código passou a gerar um número aleatório entre 0 e o tamanho total da lista (`Math.floor(Math.random() * listaAmigos.length)`). Este número é usado como um índice para selecionar um único amigo do array, que é então exibido como o ganhador.

### 4. Erros de Referência (Sobrescrita de Variável)

* **Dificuldade**: Um erro sutil que ocorreu foi a declaração de duas variáveis com o mesmo nome em escopos diferentes, como `amigoSorteado`. A primeira variável se referia a um elemento HTML, e a segunda, a um nome de amigo, o que causava um erro de `appendChild` porque uma string não tem esse método.
* **Solução**: As variáveis foram renomeadas para ter nomes únicos e claros (por exemplo, `resultadoElemento` para o contêiner HTML e `amigoSorteado` para o nome do ganhador), eliminando o conflito e garantindo que cada variável fizesse referência ao tipo de dado correto.

## Como Executar o Projeto

1.  Clone ou baixe este repositório.
2.  Abra o arquivo `index.html` em seu navegador web.
3.  Pronto! Você pode começar a adicionar nomes e sortear.
