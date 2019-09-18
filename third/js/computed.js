var app = new Vue({
    el:"#app",
    data:{
        math:60,
        chinese:94,
        english:86,
        math2:60,
        chinese2:94,
        english2:86
    },
    computed:{
        sum:function(){
            return this.math+this.chinese+this.english;
        },
        sum2:function(){
            return this.math2+this.chinese2+this.english2;
        },
        average:function(){
            return Math.round(this.sum2/3)
        }
    }
})