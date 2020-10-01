<template>
    <div id = "app">
        <div class="absolute forClick" @click="changeModal"></div>
        <header>
                <HeaderAlt />
                <div class="header__border">
                    <Header />
                </div>
        </header>

        <main>
            <Main />
        </main>
    </div>
</template>

<script>
    import Header from '../components/Header';
    import HeaderAlt from '../components/Header-alt';
    import Main from '../components/Main';
    
    export default {
        components: {
            Header,
            HeaderAlt,
            Main
        },
        data() {
            return {}
        },
        methods: {
            changeModal() {
                this.$store.state.modal = false;
            }
        }
    }
</script>

<style lang = 'scss'>
    * {
        box-sizing: border-box;
        margin: 0; 
        padding: 0;
    }

    html,
    body {
        height: 100%;
        font-family: sans-serif;
    }

    .forClick {
        position: absolute;
        width: 100%;
        min-height: 100%;
        z-index: 0;
    }

    .flex {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .header__border {
        border-top: 1px solid #ECEFF1;
        border-bottom: 1px solid #ECEFF1;
    }

    .content {
        width: 1110px;
        margin: 0 auto;
    }

    img {
        display: block;
        width: 100%;
    }

    .z5 {
        z-index: 5;
    }
</style>