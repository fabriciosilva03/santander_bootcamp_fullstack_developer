package bancodigital;

public class ContaCorrente {
	public ContaCorrente(Cliente cliente) {
		super();
	}

	public void imprimirExtrato() {
		System.out.println("=== Extrato Conta Corrente ===");
		super.imprimirInfosComuns();
	}

}
