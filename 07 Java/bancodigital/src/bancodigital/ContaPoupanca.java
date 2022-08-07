package bancodigital;

public class ContaPoupanca {
	public ContaPoupanca(Cliente cliente) {
		super();
	}

	public void imprimirExtrato() {
		System.out.println("=== Extrato Conta Poupança ===");
		super.imprimirInfosComuns();
	}
}
