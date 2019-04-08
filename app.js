new Vue ({
    el: '#punchbag',
    data: {
        test : "success",
        health: 100,
        ended: false

    },
    methods:{
        punch: function(){
            this.health -= 10;
            if(this.health <= 0 ){
                this.ended = true;

            }
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
            console.log(this.health);
        },
        asd: function(){
            console.log("asd");
        }
    },
    computed: {

    }
}); 