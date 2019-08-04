



<template lang="pug">
    main#app
        Header
        router-view
</template>




<script>
import Header from './header';
export default {
    components: {'Header' : Header},
    data(){
        return {
            
        }
    }
}
</script>



<style lang="stylus">
@import '../stylus/variables.styl';
    
*{
    margin 0px;
    padding 0px;
}

#app{

    font-family : Quicksand;
    width 100vw;
    height 100vh;
    background-color: #eb637b;
	background: linear-gradient(45deg, #b642e3, #fb9287);    
}

</style>

