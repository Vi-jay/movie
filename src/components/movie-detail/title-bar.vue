<template>
    <div class="title-bar">
        <strong>{{title}}</strong>
        <div class="title-bar__tip active-able" v-if="linkDesc"><em>{{linkDesc}}</em>
            <van-icon class="title-bar__icon" name="arrow"/>
        </div>
    </div>
</template>
<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import Component from 'vue-class-component'
    import {Prop} from "vue-property-decorator";

    @Component
    export default class TitleBar extends Vue implements ComponentOptions<Vue> {
        name = "TitleBar";
        @Prop()title!:string;
        @Prop()linkDesc!:string;
        created() {
        }
    }
</script>

<style scoped lang="scss">
    @import "~assets/common.scss";
    .title-bar{
        color:#FFFFFF;
        font-size:16px;
        @include alignCenterBt;
        padding-left:10px;
        margin-bottom:11px;
        position:relative;
        &:before{
            @include absoluteFull;
            right:0;
            width:4px;
            background:#1D8FE1;
            border-radius:2px;
            transform:scaleY(.8);
            content:"";
        }
        &__tip{
            color:#C3C3C3;
            font-size:14px;
            @include alignCenter;
        }
        &__icon{
            margin-left:7px;
        }
    }
</style>
