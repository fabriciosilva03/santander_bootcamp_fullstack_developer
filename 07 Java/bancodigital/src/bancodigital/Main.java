package bancodigital;

public class Main {
	Cliente fabricio = new Cliente();
	fabricio.setNome("Fabricio");
	
	ContaCorrente cc = new ContaCorrente(fabricio);
	ContaPoupanca poupanca = new ContaPoupanca(fabricio);

	cc.depositar(100);
	cc.transferir(100, poupanca);
	
	cc.imprimirExtrato();
	poupanca.imprimirExtrato();

}
