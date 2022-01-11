import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233309, 123456789);
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(100);

const cliente2  = new Cliente("Alice", 88822233309, 987654321);
const contaCorrenteAlice = new ContaCorrente(cliente2, 102);


const valorSacado = contaCorrenteRicardo.sacar(50);

contaCorrenteRicardo.transferir(200, contaCorrenteAlice);
console.log(valorSacado);

