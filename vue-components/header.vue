
<template lang="pug">
    header
        nav.main-nav
            h1 items
</template>


<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../stylus/variables.styl';

.main-nav{
    display flex;
    justify-content space-between;
    align-items center;
    background-color #222222
    color : #EB637B;

    height : $nav-height;
}
</style>

