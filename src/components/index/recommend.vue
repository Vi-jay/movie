<template>
    <div id="Recommend">
       <section class="c-analysis">
           <h3 class="c-analysis__title">实时票房</h3>
           <span>今日票房：1888万</span>
           <span>总票房：10亿</span>
       </section>
        <div class="recommend-bar">
            <strong>正在热映</strong>
            <div class="recommend-bar__tip active-able"><em>我在这里等你哦</em>
                <van-icon class="recommend-bar__icon" name="arrow"/>
            </div>
        </div>
        <ul class="c-scroller">
            <li class="c-scroller__item" v-for="i in 10">
                <van-image
                        radius="5"
                        width="1rem"
                        fit="cover"
                        height="1.42rem"
                        :src="randomPic"/>
                <em class="c-scroller__label">复仇者联盟</em>
            </li>
        </ul>
        <div class="recommend-bar">
            <strong>送餐入座</strong>
            <div class="recommend-bar__tip active-able"><em>我在这里等你哦</em>
                <van-icon class="recommend-bar__icon" name="arrow"/>
            </div>
        </div>
        <ul class="c-scroller">
            <li class="c-scroller__item" v-for="i in 10">
                <van-image
                        radius="5"
                        width="1rem"
                        fit="cover"
                        height=".87rem"
                        :src="randomPic"/>
            </li>
        </ul>
        <footer class="footer-tip">亲，我到底啦！</footer>
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
        .c-analysis{
            width:355px;
            height:84px;
            background:rgba(163,163,163,.1);
            border-radius:5px;
            padding: 10px 12px;
            color: #BCBBBB;
            box-sizing: border-box;
            font-size: 14px;
            @include flex-between;
            flex-direction: column;
            &__title{
                color: #FFFFFF;
                font-size: 16px;
            }
        }
        .c-scroller{
            overflow-x: auto;
            overflow-y: hidden;
            display: flex;
            padding-bottom: 6px;
            &__item{
                flex-shrink: 0;
                @include flex-center;
                flex-direction: column;

                &:not(:first-child){
                    margin-left: 8px;
                }

            }
            &__label{
                color: #FFFFFF;
                margin-top: 8px;
            }
        }
        .recommend-bar{
            color: #FFFFFF;
            font-size: 16px;
            @include alignCenterBt;
            padding-left: 10px;
            margin: 13px 0;
            position: relative;
            &:before{
                @include absoluteFull;
                right: 0;
                width: 4px;
                background: #1D8FE1;
                border-radius: 2px;
                transform: scaleY(.8);
                content: "";
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
        .footer-tip{
            color: #9A999A;
            padding: 17px 0 7px;
            text-align: center;
        }
    }
</style>
