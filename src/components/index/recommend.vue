<template>
    <div id="Recommend">
        推荐
    </div>
</template>
<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import Component from 'vue-class-component'

    @Component
    export default class Recommend extends Vue implements ComponentOptions<Vue> {
        name = "Recommend";
        created() {
        }
    }
</script>

<style scoped lang="scss">
    @import "~assets/common.scss";
    #Recommend{
        padding: 10px;
    }
</style>
