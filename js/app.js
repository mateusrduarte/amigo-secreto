let listaAmigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");

  if (amigo.value == "") {
    alert("Informe o nome do amigo!");
    return;
  }

  if (listaAmigos.includes(amigo.value)) {
    alert("Nome já adicionado!");
    return;
  }

  listaAmigos.push(amigo.value);

  document.getElementById("lista-amigos").innerHTML = listaAmigos;
  document.getElementById("nome-amigo").value = "";
}

function sortear() {
  if (amigos.length < 4) {
    alert("Adicione pelo menos 4 amigos!");
    return;
  }

  embaralhar(listaAmigos);
  mostrarRsultado();
}

function embaralhar(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function mostrarRsultado() {
  let sorteio = document.getElementById("lista-sorteio");
  for (let i = 0; i < listaAmigos.length; i++) {
    if (i == listaAmigos.length - 1) {
      sorteio.innerHTML =
        sorteio.innerHTML + listaAmigos[i] + " --> " + listaAmigos[0] + "<br/>";
    } else {
      sorteio.innerHTML =
        sorteio.innerHTML +
        listaAmigos[i] +
        " --> " +
        listaAmigos[i + 1] +
        "<br/>";
    }
  }
}

function reiniciar() {
  listaAmigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
