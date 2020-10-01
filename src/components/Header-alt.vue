<template>
    <div class="content">
        <div class="header-alt flex">
            <div class="header-alt__location flex">
                <div class="location__logo">
                    <img :src="assets.location" alt="">
                </div>
                <div class="location__info">
                    <p>Волгоградская область</p>
                </div>
            </div>
            <div class="header-alt__nav">
                <ul class="nav__lists flex">
                    <li class="nav__list">
                        <a href="#">Тендеры</a>
                    </li>
                    <li class="nav__list">
                        <a href="#">База подрядчиков</a>
                    </li>
                    <li class="nav__list">
                        <a class="nav_drowdown" @click="isDropdown = !isDropdown">Другие сервисы</a>
                    </li>
                    <div v-if="isDropdown" class="drowdown__block flex">
                        <a href="#">Другие сервисы 1</a>
                        <a href="#">Другие сервисы 2</a>
                        <a href="#">Другие сервисы 3</a>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
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
        }
    }
</script>

<style lang="scss">
    .header-alt {
        position: relative;
        display: flex;
        padding: 6px 0;
        font-size: 12px;
        line-height: 20px;
        color: #708598;

        &__location {
            .location__info {
                margin-left: 8px;
            }
        }

        &__nav {
            .nav__lists {
                list-style: none;
                padding-right: 20px;

                .drowdown__block {
                    position: absolute;
                    top: 100%;
                    right: 0;
                    max-width: 145px;
                    flex-direction: column;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 5px;
                    background: #ccc;
                    padding: 10px;
                    z-index: 4;
                }

                li + li {
                    margin-left: 24px;
                }

                a {
                    text-decoration: none;
                    color: #708598;
                    cursor: pointer;
                }

                .nav_drowdown::after {
                    content: '';
                    position: absolute;
                    top: 14px;
                    right: 0;
                    width: 10px;
                    height: 6px;
                    background: url('../assets/vector.svg') no-repeat;
                    transform: translate(-50%);
                }
            }
        }
    }
</style>
        