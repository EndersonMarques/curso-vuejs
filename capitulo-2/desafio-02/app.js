new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Botao Clicado');
        },
        eventoKeyDonw(e) {
            let v = e.target.value;
            this.valor = v;

            return this.valor
        }
    }
})