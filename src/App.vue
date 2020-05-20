<template>
    <div id="app">
        <!--        <router-view/>-->
        <div class="box" ref="boxRef"></div>
    </div>
</template>
<script lang="ts">
    import Vue, {ComponentOptions} from "vue"
    import {Component, Ref} from "vue-property-decorator";
    import anime from "animejs";

    @Component
    export default class App extends Vue implements ComponentOptions<Vue> {
        @Ref() boxRef!: HTMLElement;
        mounted(): void {
            const targets = {rotate:0};
            let i = 1;
            anime({
                targets,
                rotate:[-20, 20],
                loopComplete(){
                    i++;
                },
                update:()=> {
                    this.boxRef.style.transform = `rotate(${targets.rotate/i}deg)`
                },
                loop: 6,
                easing: "easeInOutSine",
                duration: 200,
                direction: "alternate",
            })
        }
        created(): void {
            // rotateZ:_.times(5,(i)=>{
            //     const diff = i*3;
            //     return [0,-20+diff,20-diff];
            // }).flat(1).concat(0),
        }
    }
</script>

<style lang="scss">
    @import "./assets/theme.scss";
    #app{
        .box{
            margin:30px;
            @include rect(30px);
            transform-origin:center bottom 50px;
            background:url("~assets/img/1589791322.jpg") no-repeat center/contain;
        }
        #routerContainer{
            padding-bottom:50px;
            overflow-y:auto;
        }
        #tabBar{
            background:#2C2C35;
            box-shadow:0px -2px 4px 0px rgba(53, 53, 61, 1);
            &:after{
                display:none;
            }
        }
    }
</style>
