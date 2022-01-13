new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },

    computed: {
        resultado() {
            return this.valor === 37 ? 'valor for igual a 37' : 'Valor Diferente'
        }
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0;
            }, 5000)
        }
    },
});