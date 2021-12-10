new Vue({
    el: '#desafio',
    data: {
        nome: 'Enderson',
        idade: 20,
        src: 'https://picsum.photos/400/400'
    },
    methods: {
        aleatorio() {
            return Math.random();
        }
    }
})