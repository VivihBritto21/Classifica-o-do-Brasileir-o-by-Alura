var playerList = [];
var elementTable = document.getElementById("tabelaJogadores");

function displayOnScreen() {
  elementTable.innerHTML = "";
  playerList.forEach((jogador, index) => {
    console.log(jogador);
    elementTable.innerHTML += `
      <tr>
          <td>${jogador.nome}</td>
          <td>${jogador.vitoria}</td>
          <td>${jogador.empate}</td>
          <td>${jogador.derrota}</td>
          <td>${jogador.pontos}</td>
          <td><button onClick="adicionarVitoria(${index})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${index})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${index})">Derrota</button></td>
          <td><button onClick="clearScorePlayer(${index})">Limpar Pontuação</button></td>
          <td><button onClick="deletePlayer(${index})">Apagar Jogador</button></td>
          <td><button onClick="deleteAllPlayers()">Apagar todos jogadores</button></td>
    </tr> `;
  });
}

function createPlayer() {
  var nameNewPlayer = document.getElementById("nomeJogador").value;
  playerList.push({
    nome: nameNewPlayer,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  });
  document.getElementById("nomeJogador").value = "";
  displayOnScreen();
}

function adicionarVitoria(index) {
  playerList[index].vitoria++;
  playerList[index].pontos = playerList[index].pontos + 3;
  displayOnScreen();
}
function adicionarEmpate(index) {
  playerList[index].empate++;
  playerList[index].pontos++;
  displayOnScreen();
}
function adicionarDerrota(index) {
  playerList[index].derrota++;
  displayOnScreen();
}

function clearScorePlayer(index) {
  playerList[index].vitoria = 0;
  playerList[index].empate = 0;
  playerList[index].derrota = 0;
  playerList[index].pontos = 0;
  displayOnScreen();
}

function deletePlayer(index) {
  playerList.splice(index, 1);
  displayOnScreen();
}

function deleteAllPlayers() {
  playerList = [];
  displayOnScreen();
}
