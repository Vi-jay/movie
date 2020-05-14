<template>
    <div id="Index">
        <search-bar><location-button slot="left"/></search-bar>
        <swiper class="c-swipe" :options="swiperOptions">
            <swiper-slide v-for="(pic,k) in swipeList" :key="k">
                <img class="c-swipe__pic" :src="pic" alt="">
            </swiper-slide>
        </swiper>
        <section class="c-banner">
            <aside v-for="i in 2" class="c-banner__item">
                <img class="c-banner__pic" :src="getPic()" alt="">
                <footer class="banner-foot">
                    <em class="banner-foot__tip">进去看看</em>
                    <van-icon name="arrow" />
                </footer>
            </aside>
        </section>
        <div class="c-segment"></div>
        <movie-info/>
        <div class="c-segment"></div>
        <recommend/>
    </div>
</template>
<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import {Component} from "vue-property-decorator";
    import LocationButton from "@/components/basic/location-button.vue";
    import SearchBar from "@/components/index/search-bar.vue";
    import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import {getPic} from "@/utils";
    import MovieInfo from "@/components/index/movie-info.vue";
    import Recommend from "@/components/index/recommend.vue";

    const swipeList =_.times(3,()=>getPic());
    @Component({
        components: {Recommend, MovieInfo, SearchBar, LocationButton, Swiper, SwiperSlide}
    })
    export default class Index extends Vue implements ComponentOptions<Vue> {
        swipeList=swipeList;
        swiperOptions = {
            initialSlide: 1,
            delay: 2000,
            reverseDirection: true,
            loop:true,
            effect: 'coverflow',
            slidesPerView: 1.2, // or 'auto'
            centeredSlides: true,
            coverflowEffect: {
                rotate: 0, // Slide rotate in degrees
                stretch: 30, // Stretch space between slides (in px)
                depth: 80, // Depth offset in px (slides translate in Z axis)
                modifier: 2, // Effect multipler
                slideShadows: true, // Enables slides shadows
            },
        }
        created(): void {
        }
    }
</script>

<style scoped lang="scss">
    @import "~assets/common.scss";
    #Index{
        min-height: 100vh;
        background: #2C2C35;
        .c-swipe{
            &__pic{
                width:100%;
                object-fit: cover;
                height:186px;
                border-radius: 6px;
                overflow: hidden;
            }
        }
        .c-banner{
            @include alignCenter;
            justify-content: space-between;
            padding: 15px 10px 7px;
            &__item{
                width:174px;
                height:100px;
                border-radius: 6px;
                overflow: hidden;
                position: relative;
            }
            &__pic{
                @include absoluteFull;
                object-fit: cover;
            }
            .banner-foot{
                @include absoluteFull;
                top: auto;
                height:25px;
                background:rgba(240,133,25,1);
                @include flex-center;
                color: #FFFFFF;
                font-size: 14px;
                &__tip{
                    margin-right: 7px;
                }
            }
        }
        .c-segment{
            height:4px;
            background:rgba(57,57,66,1);
        }
    }
</style>
