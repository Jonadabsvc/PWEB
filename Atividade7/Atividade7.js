var jogador1, pc, opcao;


        do {
        alert("Digite 1 para pedra" +
        "\nDigite 2 para papel" +
        "\nDigite 3 para tesoura" +
        "\nDigite 4 para Sair");
        opcao = prompt("entre com número");

        //opcao = parseInt(opcao)
        pc = Math.random();

            if (opcao == 1) {
                if (pc > 0 && pc <= 0.33) {
                    alert("Máquina escolheu Pedra");
                    alert("Empate");

                }
                if (pc > 0.34 && pc <= 0.66) {
                    alert("Máquina escolheu Papel");
                    alert("Vitoria da maquina");
                }
                if (pc > 0.67 && pc <= 0.99) {
                    alert("Máquina escolheu Tesoura");
                    alert("Vitoria do Jogador");
                }
            }
            
            if (opcao == 2) {
                if (pc > 0 && pc <= 0.33) {
                    alert("Máquina escolheu Pedra");
                    alert("Vitoria do jogador");
                }
                if (pc > 0.34 && pc <= 0.66) {
                    alert("Máquina escolheu Papel");
                    alert("Empate");
                }
                if (pc > 0.67 && pc <= 0.99) {
                    alert("Máquina escolheu Tesoura");
                    alert("Vitoria do maquina");
                }
            }
            
            if (opcao == 3) {
                if (pc > 0 && pc <= 0.33) {
                    alert("Máquina escolheu Pedra");
                    alert("Vitoria do maquina");
                }
                if (pc > 0.34 && pc <= 0.66) {
                    alert("Máquina escolheu Papel");
                    alert("Vitoria do jogador");
                }
                if (pc > 0.67 && pc <= 0.99) {
                    alert("Máquina escolheu Tesoura");
                    alert("Empate");
                }
            }
        } while (opcao < "4");