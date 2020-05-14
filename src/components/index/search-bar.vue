<template>
    <div id="SearchBar">
        <slot name="left"/>
        <div class="c-input" :class="{notEmpty:searchText}">
            <aside class="fake-input">
                <van-icon class="fake-input__icon" size="20" name="search"/>
                <em class="fake-input__placeholder">复仇者联盟3</em>
            </aside>
            <input class="c-input__cmp" v-model="searchText" type="text">
        </div>
    </div>
</template>
<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import Component from 'vue-class-component'

    @Component
    export default class SearchBar extends Vue implements ComponentOptions<Vue> {
        searchText="";
        name = "SearchBar";
        created() {
        }
    }
</script>

<style scoped lang="scss">
    @import "~assets/common.scss";
    #SearchBar{
        @include alignCenter;
        justify-content:space-between;
        padding:8px 18px ;
        .c-input{
            width:263px;
            height:30px;
            background:rgba(33, 33, 42, 1);
            border-radius:14px;
            position:relative;
            .fake-input{
                height:100%;
                display:inline-block;
                color:#777777;
                @include absoluteXCenter;
                transition: all .2s;
                &__icon{
                    margin-right:8px;
                    position:relative;
                    top:50%;
                    transform:translateY(-50%);
                }
            }
            &:focus-within,&.notEmpty{
                background:#181717;
                .fake-input{
                    left: 10px;
                    transform: translateX(0);
                    &__placeholder{
                     display: none;
                    }
                }
            }
            &__cmp{
                all:unset;
                @include absoluteFull;
                padding-left:40px;
                color: white;
            }
        }
    }
</style>
