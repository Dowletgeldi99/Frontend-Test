<template>
    <div class="content">
        <div class="header flex">
            <div class="header__logo">
                <img :src="assets.logo" alt="">
            </div>
            <div class="header__catalog flex">
                <div class="catalog__img">
                    <img :src="assets.menu" alt="">
                </div>
                <p>Каталог</p>
            </div>
            <div class="header__search">
                <input class="z5" type="text" v-model="searchValue" @focus="$store.state.modal = true" placeholder="Хочу найти...">
            </div>
            <div class="header__list flex">
                <div class="header__list-img">
                    <img :src="assets.list" alt="">
                </div>
                <p>Список</p>
            </div>
            <div class="header__user">
                    <span>A</span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

    export default {
        data() {
            return {
                assets: {
                    logo: require('../assets/logo.svg').default,
                    list: require('../assets/list.svg').default,
                    menu: require('../assets/menu.svg').default
                },
                searchValue: ''
            }
        },
        computed: {
            ...mapGetters([
                'VALUE'
            ])
        },
        mounted() {
            this.filterData();
            
        },
        methods: {
            ...mapActions([
                'SET_FILTERED_DATA',
                'SET_VALUE'
            ]),
            filterData() {
                this.SET_FILTERED_DATA(this.searchValue);
                this.$store.state.value = this.searchValue;
            }
        },
        watch: {
            searchValue() {
                this.filterData();
            },
            VALUE() {
                this.searchValue = this.VALUE;
            }
        }
    }
</script>

<style lang="scss">
    .header {
        padding: 18px 0;
        
        &__catalog {
            width: 116px;
            border-radius: 4px;
            background: #FED83D;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            color: #050F19;
            padding: 8px 16px;
        }

        &__search {
            position: relative;

            input {
                width: 526px;
                padding: 8px 14px;
            }

            &::after {
                content: '';
                position: absolute;
                top: 50%;
                right: 15px;
                transform: translateY(-50%);
                width: 20px;
                height: 20px;
                background: url('../assets/search.svg') no-repeat;
                z-index: 2;
            }
        }

        &__list {
            width: 111px;
            background: #FAFBFC;
            border: 1px solid #ECEFF1;
            border-radius: 4px;
            padding: 8px 16px;   

            &-img {
                position: relative;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 6px;
                    height: 6px;
                    transform: translate(35%, -35%);
                    border: 2px solid #FAFBFC;
                    border-radius: 50%;
                    background: #E92F2F;
                }
            }
        }

        &__user {
            width: 40px;
            padding: 8px 15px;
            background: #9B51E0;
            border-radius: 50%;

            span {
                font-weight: 600;
                font-size: 14px;
                line-height: 24px;
                color: #fff;
            }
        }
    }
</style>
        