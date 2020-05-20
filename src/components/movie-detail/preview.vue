<template>
    <div id="Preview">
        <section class="c-preview">
            <custom-image width="375" height="212"/>
        </section>
        <section class="c-info">
            <custom-image radius="6" class="c-info__pic" width="100" height="142"/>
            <div class="c-info__container">
                <h3 class="c-info__title" data-tag="3D">复仇者联盟3：无限战争</h3>
                <em>Avengers:Infinity War</em>
                <em class="c-info__tags">动作/科幻/奇幻/冒险</em>
                <ul class="info-analysis">
                    <li class="info-analysis__item" v-for="i in 3">
                        <van-icon class="info-analysis__icon" name="like-o"/>
                        <em>2039</em></li>
                </ul>
            </div>
        </section>
        <section class="c-data">
            <ol class="data-list">
                <li class="data-list__item">
                    <div class="data-list__wrap">
                        <strong class="data-list__strong">9.1</strong>
                        <van-rate class="data-list__rate" size=".16rem" :value="4.6" allow-half void-icon="star" color="#F08519"
                                  void-color="#eee"/>
                    </div>
                    <em>专业评分</em>
                </li>
                <li class="data-list__item">
                    <strong class="data-list__strong">8.6</strong>
                    <em>专业评分</em>
                </li>
                <li class="data-list__item">
                    <strong class="data-list__strong">20388</strong>
                    <em>想看人数</em>
                </li>
            </ol>
            <footer class="data-foot">
                <button class="data-foot__btn">
                    <van-icon class="data-foot__icon" name="like"/>
                    <em>想看</em>
                </button>
                <button class="data-foot__btn">
                    <van-icon class="data-foot__icon" name="like"/>
                    <em>看过</em>
                </button>
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
    export default class Preview extends Vue implements ComponentOptions<Vue> {
        name = "Preview";
        created() {
        }
    }
</script>

<style scoped lang="scss">
    @import "~assets/common.scss";
    #Preview{
        padding-top:212px;
        .c-preview{
            @include absoluteFull;
            bottom:auto;
        }
        .c-info{
            position:relative;
            padding:8px 0 8px 110px;
            margin-bottom:20px;
            &:after{
                content:"";
                @include absoluteFull;
                top:auto;
                transform:translateY(10px);
                border-bottom:.333PX solid #393942;
            }
            &__pic{
                @include positionAbsolute("", "", 0, 0);
            }
            &__container{
                display:flex;
                flex-direction:column;
                color:#9D9D9D;
                line-height:1.3;
            }
            &__title{
                color:#FFFFFF;
                font-size:16px;
            }
            &__tags{
                margin:7px 0;
            }
            .info-analysis{
                @include alignCenter;
                margin-left:-16px;
                &__item{
                    @include alignCenter;
                    margin-left:16px;
                }
                &__icon{
                    margin-right:2px;
                }
            }
        }
        .c-data{
            .data-list{
                @include alignCenter;
                &__item{
                    width:33.33%;
                    flex-shrink:0;
                    line-height:1.5;
                    color:#B6B5B5;
                    @include flex-center;
                    flex-direction:column;
                }
                &__rate{
                    margin-right: -10px;
                }
                &__wrap{
                    @include alignCenter;
                    .data-list__strong{
                        color:#1D8FE1;
                        margin-right:3px;
                    }
                }
                &__strong{
                    font-size:18px;
                    color:#F08519;
                }
            }
            .data-foot{
                margin: 18px 0;
                @include alignCenterBt;
                &__btn{
                    color: #CFCFCF;
                    background:rgba(74,74,81,1);
                    border-radius:3px;
                    font-size: 14px;
                    width: 160px;
                    height: 40px;
                    @include flex-center;
                }
                &__icon{
                    margin-right: 10px;
                }
            }
        }
    }
</style>
