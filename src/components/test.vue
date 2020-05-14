<template>
    <div id="test">
        <slot />
    </div>
</template>

<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import Component from 'vue-class-component'
    @Component
    export default class Test extends Vue implements ComponentOptions<Vue> {
        name = "test";
        data() {
            return {}
        }
        mounted() {
            console.log(this.$slots)
        }
    }
</script>

<style lang="scss" scoped>
    @import "~assets/common.scss";
    #test{
    }
</style>
