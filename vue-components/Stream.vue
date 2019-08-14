
<template lang="pug">
    div.stream
        .wrapper
            h1 \#{{stream_id}}
            video
            
</template>


<script>
export default {
    props:['stream_id'],
    data(){
        return {
			
        }
	},
	
	
}
</script>

<style lang="stylus">
h1
    color:black;
</style>

