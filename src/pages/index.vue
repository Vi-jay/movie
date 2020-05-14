<template>
    <div id="Index">
        <canvas ref="canvas" class="game-stage"/>
        <test xname="asd" @hook:created="childMount"/>
    </div>
</template>
<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import Component, {mixins} from 'vue-class-component'
    import Test from "@/components/test.vue";
    import {CustomMixin} from "@/plugins/mixins/custom";
    import {mapGetters, mapState} from "vuex";

    @Component({
        components: {Test},
        computed:mapState(["a"])
    })
    export default class Index extends mixins(CustomMixin) implements ComponentOptions<Vue> {
        name = "Index";
        xx = 1;
        a!:number;
        get x1(){
            return "xx";
        }
        mounted() {
        }
        childMount(){
            console.log(this.a,this.x1)
        }

        created(): void {
        }
    }
</script>

<style scoped lang="scss">
    #Index{
        .game-stage{
            width:100vw;
            height:100vh;
        }
    }
</style>
