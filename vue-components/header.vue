
<template lang="pug">
    header
        nav.main-nav
            .wrapper
                img(src="../images/logo.png" class="logo")
                .nav-group.nav_center-items
                    img(src="../images/nav_fire.png" class="item")
                    img(src="../images/nav_lock.png" class="item")
                    img(src="../images/nav_camera.png" class="item")
                .nav-group.account
                    router-link(to="login").link.login
                        div
                            span Log-in
                    router-link(to="registration").link.signup Sign-up
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
header 
    height $nav-height

.main-nav
    background-color #222222
    color : #EB637B;

    height : $nav-height;
    .wrapper
        display flex;
        justify-content space-between;
        align-items center;

        .nav-group
            display flex;
            align-items center;
            justify-content space-between;

            height $nav-height;
            min-width 150px
            .item
                height 30px;
            


            .signup
                display flex
                align-items center
                justify-content center
                color white;
                width 100px;
                height 30px;
                background: linear-gradient(140.59deg, #7D10A8 17.65%, #EB637B 63.47%), #EB637B;
                border-radius: 100px;

            .login
                position relative
                display flex
                justify-content center
                align-items center
                width 100px;
                height 30px;
                border-radius: 100px;
                background: linear-gradient(140.59deg, #7D10A8 17.65%, #EB637B 63.47%), #EB637B;

                margin-right 15px
                div
                    position absolute
                    display flex
                    align-items center
                    justify-content center
                    background-color #222
                    content "";
                    width calc(100% - 6px);
                    height calc(100% - 6px);
                    border-radius 100px;
                    span
                        

                        background: linear-gradient(140.59deg, #7D10A8 17.65%, #EB637B 63.47%), #EB637B;
                        border-radius: 100px;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    
                    
    


.logo
    height 30px;

</style>

