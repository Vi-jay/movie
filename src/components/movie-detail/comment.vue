<template>
    <div id="Comment">
        <header class="l-header">
            <strong>影片评论</strong>
            <button class="l-header__btn">写影评</button>
        </header>
        <section v-for="i in 6" class="l-section">
            <header class="comment-header">
                <custom-image round width="50" height="50"/>
                <div class="comment-header__info">
                    <em>MISSS YSII</em>
                    <van-rate size=".16rem" :value="3.5" allow-half void-icon="star" void-color="#eee"/>
                </div>
            </header>
            <p class="comment-content">
                灭霸是一个有情怀的无产主义者，不惜牺牲此生最爱来整治这个混乱而拥挤不堪的宇宙，整治完了也不是要搞什么奴隶制自己当皇帝什么的，而是隐居深山老林看着夕阳感叹人生无常，说不定有空再种种菜养养鸡什么的。以随机的方式减去一半的人口也体现了其公平性和创新性，简直就是boss里面不可多得的楷模。</p>
            <footer class="comment-footer">
                <em>2小时前</em>
                <ol class="footer-analysis">
                    <li class="footer-analysis__item">
                        <van-icon class="footer-analysis__icon" name="brush-o"/>
                        <em>9000</em></li>
                    <li class="footer-analysis__item">
                        <van-icon class="footer-analysis__icon" name="location-o"/>
                        <em>9000</em></li>
                </ol>
            </footer>
        </section>
    </div>
</template>
<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import Component from 'vue-class-component'
    import CustomImage from "@/components/basic/custom-image.vue";

    @Component({
        components: {CustomImage}
    })
    export default class Comment extends Vue implements ComponentOptions<Vue> {
        name = "Comment";
        created() {
        }
    }
</script>

<style scoped lang="scss">
    @import "~assets/common.scss";
    #Comment{

        .l-header{
            @include alignCenterBt;
            font-size:16px;
            color:#FFFFFF;
            margin:10px 0;
            &__btn{
                font-size:14px;
                background:rgba(240, 133, 25, 1);
                border-radius:17px;
                padding:7px 15px;
            }
        }
        .l-section{
            padding-bottom:10px;
            border-bottom:.33PX solid #393942;
            &:not(:first-child){
                margin-top:20px;
            }
        }
        .comment-header{
            @include alignCenter;
            &__info{
                font-size:14px;
                color:#FFFFFF;
                @include flex-between;
                flex-direction:column;
                height:42px;
                margin-left:12px;
            }
        }
        .comment-content{
            color:#D8D8D8;
            font-size:14px;
            line-height:1.5;
            margin:14px 0 10px;
        }
        .comment-footer{
            @include alignCenterBt;
            color:#9B9B9B;
            font-size:12px;
            .footer-analysis{
                @include alignCenter;
                &__item{
                    @include alignCenter;
                    &:not(:first-child){
                        margin-left:12px;
                    }
                }
                &__icon{
                    margin-right:6px;
                }
            }
        }
    }
</style>
