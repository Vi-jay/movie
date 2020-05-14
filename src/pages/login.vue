<template>
    <div id="Login">
        <button @click="fuck">login</button>
    </div>
</template>
<script lang="ts">
    import Vue, {ComponentOptions, VueConstructor} from "vue"
    import Component from 'vue-class-component'

    @Component
    export default class Login extends Vue implements ComponentOptions<Vue> {
        name = "Login";
        data() {
            return {}
        }
        fuck() {
            console.log(this)
        }
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    @import "~assets/common.scss";
    #Login{
    }
</style>
