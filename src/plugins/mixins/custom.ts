import {ComponentOptions} from "vue/types/options";
import Vue from "vue";
import Component from "vue-class-component";

@Component
export class CustomMixin extends Vue {
    m = 12;
    created(): void {
        console.log("1 ,mixin")
    }
}
