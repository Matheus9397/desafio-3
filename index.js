// Desafio -3  - ESCREVENDO AS CLASSES DE UM JOGO

/* 

- Variáveis
- Operadores
- laços de Repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

OBJETIVO

Crie uma classe genérica que represente um herói de uma aventura e que possua as 
seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja)

Além disso, deve ter um método chamado atacar que deve atender os seguintes requisitos:

-Exibir a mensagem: "O {tipo} atacou usando {ataque}"
- aonde o {tipo} deve ser concatenado o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

-se mago --> no ataque exibir {usou magia}
-se guerreiro --> no ataque exibir {usou espada}
-se monge --> no ataque exibir {usou artes marciais}
-se ninja --> no ataque exibir {usou shuriken}
-se sayajin --> no ataque exibir {usou kamehamaha}


---SAÍDA---

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
ex: mago atacou usando magia
ex: guerreiro atacou usando espada

ó ´
*/


class heroiDeAventura{

    constructor(nomeHeroi,idadeHeroi,tipoHeroi){
      
        this.nome = nomeHeroi;
        this.idade = idadeHeroi;
        this.tipo = tipoHeroi;
    }

    // método da classe: 
     atacar(){

        if(this.tipo == "mago"){
            console.log(`O ${this.tipo} atacou usando magia`);
        }
        else if(this.tipo =="guerreiro"){
            console.log(`O ${this.tipo} atacou usando espada`);
        }
        else if (this.tipo =="monge"){
            console.log(`O ${this.tipo} atacou usando artes marciais`);
        }
        else if (this.tipo =="ninja"){
            console.log(`O ${this.tipo} atacou usando shuriken`);
        }
        else if(this.tipo =="sayajin"){
            console.log(`O ${this.tipo} atacou usando kamehameha`);
        }
        else{
            console.log(`O tipo non ecziste`);
        }

    }

}

var nomeHeroi = "Goku";
var idadeHeroi = "40";
var tipoHeroi = "sayajin";


let personagemHeroi = new heroiDeAventura(nomeHeroi,idadeHeroi,tipoHeroi);

console.log(personagemHeroi.atacar());

