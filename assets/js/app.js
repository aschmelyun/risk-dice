try {
    window.$ = window.jQuery = require('jquery');
} catch(e) {}

window.Vue = require('vue');

const app = new Vue({
    data: {
        redDiceAmount: 3,
        whiteDiceAmount: 2,
        redDice: [],
        whiteDice: [],
        results: {
            red: 0,
            white: 0
        }
    },
    mounted() {
        this.getDiceRoll();
    },
    methods: {
        getDiceRoll: function() {
            this.redDice = [];
            this.whiteDice = [];
            this.results = {
                red: 0,
                white: 0
            };

            var self = this;

            for (i = 0; i < this.redDiceAmount; i++) {
                this.redDice.push(this.getRandomInt(1, 6));
            }
            for (i = 0; i < this.whiteDiceAmount; i++) {
                this.whiteDice.push(this.getRandomInt(1, 6));
            }

            this.redDice.sort(function(a, b){
                return b-a;
            });

            this.whiteDice.sort(function(a, b){
                return b-a;
            });

            this.whiteDice.forEach(function(number, index) {
                if(number >= self.redDice[index]) {
                    self.results.white++;
                } else {
                    self.results.red++;
                }
            });
        },
        getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}).$mount('#app');