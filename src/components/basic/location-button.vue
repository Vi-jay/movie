<template>
    <div id="LocationButton">
        <em class="text">苏州</em>
        <van-icon name="arrow-down"/>
    </div>
</template>
<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import Component from 'vue-class-component'

    @Component
    export default class LocationButton extends Vue implements ComponentOptions<Vue> {
        name = "LocationButton";
        created() {
        }
    }
</script>

<style scoped lang="scss">
    @import "~assets/common.scss";
    #LocationButton{
        @include alignCenter;
        font-size: 14px;
        color: #777777;
        .text{
            margin-right: 6px;
        }
    }
</style>
