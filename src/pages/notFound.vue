<template>
    <div id="NotFound">
        notfound
    </div>
</template>
<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import Component from 'vue-class-component'

    @Component
    export default class NotFound extends Vue implements ComponentOptions<Vue> {
        name = "NotFound";
        created() {
        }
    }
</script>

<style scoped lang="scss">
    @import "~assets/common.scss";
    #NotFound{
    }
</style>
