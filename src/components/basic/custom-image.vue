<template>
    <van-image fit="cover" lazy-load :round="round" :radius="calculateRemSize(radius)" :src="randomPic"
               :width="calculateRemSize(width)" :height="calculateRemSize(height)"/>
</template>
<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import Component from 'vue-class-component'
    import {Prop} from "vue-property-decorator";
    import {Lazyload} from 'vant';

    Vue.use(Lazyload);
    @Component
    export default class CustomImage extends Vue implements ComponentOptions<Vue> {
        name = "CustomImage";
        @Prop({default: false}) round!: boolean;
        @Prop() radius!: number;
        @Prop({required:true}) width!: number;
        @Prop({required:true}) height!: number;
        calculateRemSize(num: number) {
            return `${+num / 100}rem`;
        }
        created() {
        }
    }
</script>

<style scoped lang="scss">
    @import "~assets/common.scss";
    #CustomImage{
    }
</style>
