var app = new Vue({
    el : '#container',
    data : {
        newItem : "",
        listArray : [
            {
                text : "fare la spesa",
                done : true,
            },
            {
                text : "portare a passeggio il cane",
                done : false,
            },
            {
                text : "lavare la macchina",
                done : false,
            },
            {
                text : "pagare la bolletta",
                done : true,
            },
            {
                text : "curare il giardino",
                done : false,
            },
            {
                text : "comprare il biglietto per il cinema",
                done : true,
            }
        ]  
    },
    methods : {
        delItem(index) {       
            this.listArray.splice(index, 1);
        },
        addItem() {
            var newitemArray = {
                text : this.newItem,
                done : false,
            }
            if(newitemArray !== "") {
                this.listArray.push(newitemArray);
                newitemArray = "";
            }
        }
    }
});