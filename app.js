let listaAmigos = [];

const adicionar = () => {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo) {
        listaAmigos.push(nomeAmigo);
        inputAmigo.value = '';
        renderLista();
    } else {
        alert('Preencha o campo com o nome do amigo');
    }
}

const renderLista = () => {
    const listaAtual = document.getElementById('listaAmigos');
    listaAtual.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        const amigo = listaAmigos[i];
        const nome = document.createElement('li');
        nome.textContent = amigo;
        listaAtual.appendChild(nome);
    }
}

const sortearAmigo = () => {
    if (listaAmigos.length === 0) {
        alert('Adicione amigos para sortear!');
        return;
    }

    // Gera um índice aleatório dentro do tamanho do array
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);

    // Pega o amigo correspondente ao índice sorteado
    const amigoSorteado = listaAmigos[indiceSorteado];

    // Exibe o amigo sorteado na tela
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<p class="ganhador">O ganhador é: ${amigoSorteado}</p>`;
}