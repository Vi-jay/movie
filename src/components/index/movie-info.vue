<template>
    <div id="MovieInfo">
        电影详情
    </div>
</template>
<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import Component from 'vue-class-component'

    @Component
    export default class MovieInfo extends Vue implements ComponentOptions<Vue> {
        name = "MovieInfo";
        created() {
        }
    }
</script>

<style scoped lang="scss">
    @import "~assets/common.scss";
    #MovieInfo{
        padding: 10px;
    }
</style>
