<template>
    <div id="MovieDetail">
        <preview/>
        <section class="l-section">
            <title-bar title="剧情简介"/>
            <p class="c-content">
                《复仇者联盟3：无限战争》是漫威电影宇宙10周年的历史性集结，将为影迷们带来史诗版的终极对决。面对灭霸突然发起的闪电袭击，复仇者联盟及其所有超级英雄盟友必须全力以赴，才能阻止他对全宇宙造成毁灭性的打击...</p>
            <section class="c-analysis">
                <h3 class="c-analysis__title">实时票房</h3>
                <span>今日票房：1888万</span>
                <span>总票房：10亿</span>
            </section>
        </section>
        <section class="l-section">
            <title-bar title="演员" link-desc="查看全部演员"/>
            <ul class="c-scroller">
                <li class="c-scroller__item" v-for="i in 10">
                    <custom-image width="80" height="108" radius="5"/>
                    <em class="c-scroller__label">安东尼·罗素</em>
                </li>
            </ul>
        </section>
        <section class="l-section">
            <title-bar title="剧照和视频" link-desc="查看全部"/>
            <ul class="c-scroller">
                <li class="c-scroller__item" v-for="i in 10">
                    <custom-image width="172" height="92" radius="5"/>
                </li>
            </ul>
        </section>
        <div class="l-segment"></div>
        <comment/>
        <footer class="foot-btn active-able">特惠抢票</footer>
    </div>
</template>
<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import Component from 'vue-class-component'
    import Preview from "@/components/movie-detail/preview.vue";
    import TitleBar from "@/components/movie-detail/title-bar.vue";
    import CustomImage from "@/components/basic/custom-image.vue";
    import Comment from "@/components/movie-detail/comment.vue";

    export const meta = {hideTab: true}
    @Component({
        components: {Comment, CustomImage, TitleBar, Preview}
    })
    export default class MovieDetail extends Vue implements ComponentOptions<Vue> {
        name = "MovieDetail";
        created() {
        }
    }
</script>

<style scoped lang="scss">
    @import "~assets/common.scss";
    #MovieDetail{
        padding:0 12px 50px;
        .l-section{
            padding-bottom:20px;
        }
        .l-segment{
            height:4px;
            background:rgba(57, 57, 66, 1);
        }
        .foot-btn{
            @include absoluteFull(fixed);
            top: auto;
            @include flex-center;
            height:50px;
            font-size: 18px;
            color: #FFFFFF;
            background:rgba(240,133,25,1);
        }
        .c-content{
            color:#DADADA;
            font-size:14px;
            line-height:1.5;
            margin-bottom:20px;
        }
        .c-analysis{
            width:355px;
            height:84px;
            background:rgba(163, 163, 163, .1);
            border-radius:5px;
            padding:10px 12px;
            color:#BCBBBB;
            box-sizing:border-box;
            font-size:14px;
            @include flex-between;
            flex-direction:column;
            &__title{
                color:#FFFFFF;
                font-size:16px;
            }
        }
        .c-scroller{
            overflow-x:auto;
            overflow-y:hidden;
            display:flex;
            padding-bottom:6px;
            &__item{
                flex-shrink:0;
                @include flex-center;
                flex-direction:column;
                &:not(:first-child){
                    margin-left:8px;
                }
            }
            &__label{
                color:#FFFFFF;
                margin-top:8px;
            }
        }

    }
</style>
