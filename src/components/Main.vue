<template>
    <div class="main" v-if="FILTERED_DATA && MODAL">
        <ul>
            <li class="z5" v-for="item in FILTERED_DATA" @click="setValue(item)" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

    export default {
        data() {
            return {
                assets: {
                    location: require('../assets/location.svg').default,
                    list: require('../assets/list.svg').default,
                    vector: require('../assets/vector.svg').default
                },
                isDropdown: false
            }
        },
        computed: {
            ...mapGetters([
                'FILTERED_DATA',
                'MODAL'
            ])
        },
        methods: {
            ...mapActions([
                'SET_VALUE'
            ]),
            setValue(value) {
                this.SET_VALUE(value);
                this.$store.state.modal = false;
            }
        }
    }
</script>

<style lang="scss">
    .main {
        margin: 0 auto;
        width: 50%;

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            list-style: none;
        }
    }
</style>
        