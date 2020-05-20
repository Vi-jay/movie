<template>
    <div id="MovieInfo">
        <section class="c-detail">
            <van-image
                    fit="cover"
                    width="1rem"
                    radius="6"
                    height="1.42rem"
                    :src="randomPic"/>
            <div class="detail-info">
                <header class="detail-info__header">
                    <strong class="detail-info__title">复仇者联盟3：无限战争</strong>
                    <em>Avengers:Infinity War</em>
                </header>
                <ul class="detail-info__mid">
                    <li>动作/科幻/奇幻/冒险</li>
                    <li>电影时长：150分钟</li>
                    <li>2018-05-31上映</li>
                </ul>
                <div class="detail-info__link active-able">
                    <em>电影详情</em>
                    <van-icon name="arrow"/>
                </div>
                <aside class="detail-info__timer">
                    <span>开始倒计时</span>
                    <span>00：24：23</span>
                </aside>
            </div>
        </section>
        <section class="c-member">
            <header class="member-bar">
                <strong class="member-bar__title">同厅观影 （1号厅）</strong>
                <div class="member-bar__tip active-able"><em>42人正在观影</em>
                    <van-icon class="member-bar__icon" name="arrow"/>
                </div>
            </header>
            <div class="c-member__container">
                <ul class="member-avatars">
                    <li v-for="i in 12" class="member-avatars__item">
                        <van-image
                                round
                                fit="cover"
                                width=".5rem"
                                height=".5rem"
                                :src="randomPic"/>
                    </li>
                </ul>
            </div>
            <footer class="member-bar">
                <strong class="member-bar__title">16人正在热议</strong>
                <div class="member-bar__tip active-able"><em>进入热聊区</em>
                    <van-icon class="member-bar__icon" name="arrow"/>
                </div>
            </footer>
        </section>
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
        padding:10px;
        .c-detail{
            padding-bottom:12px;
            border-bottom:0.333PX solid #393942;
            display:flex;
            &__pic{
                width:100px;
                height:142px;
                object-fit:cover;
            }
            .detail-info{
                color:#9D9D9D;
                font-size:12px;
                line-height:18px;
                margin-left:12px;
                display:flex;
                flex-direction:column;
                position:relative;
                flex:1;
                &__header{
                    display:flex;
                    flex-direction:column;
                }
                &__title{
                    font-size:16px;
                    color:#FEFFFF;
                }
                &__mid{
                    margin:8px 0 auto;
                }
                &__link{
                    color:#F7F7F7;
                    @include alignCenter;
                    font-size:14px;
                    width:74px;
                    justify-content:space-between;
                    margin-bottom:10px;
                }
                &__timer{
                    @include absoluteFull;
                    top:auto;
                    left:auto;
                    width:85px;
                    height:65px;
                    background:rgba(240, 133, 25, 1);
                    border-radius:5px;
                    @include flex-between;
                    align-items:center;
                    flex-direction:column;
                    color:#FFFFFF;
                    padding:11px 0;
                    box-sizing:border-box;
                }
            }
        }
        .c-member{
            .member-bar{
                @include alignCenterBt;
                color:#C3C3C3;
                font-size:14px;
                padding: 9px 0;
                &__title{
                    color:#FEFFFF;
                    font-size:16px;
                }
                &__tip{
                    @include alignCenter;
                }
                &__icon{
                    margin-left:7px;
                }
            }
            &__container{
                padding: 5px 0;
            }
            .member-avatars{
                @include alignCenter;
                flex-wrap: wrap;
                margin-top: -10px;
                margin-left: -10px;
                &__item{
                    flex-shrink: 0;
                    margin-top: 10px;
                    margin-left: 10px;
                }
            }
        }
    }
</style>
