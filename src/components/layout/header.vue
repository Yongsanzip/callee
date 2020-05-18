<template>
    <header class="header is_top">
        <div class="logo"></div>
        <nav class="navigation">
            <ul>
                <li v-for="(menu, idx) in menus" :key="idx" :class="{'actice': idx == 0}">
                    <a :href="'#'+menu.name" class="scrollactive-item">{{menu.title}}</a>
                </li>
            </ul>
        </nav>
        <div class="nav-hamburger" @click="showHamMenu">
            <div class="hamburgerBtn">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
        <div class="hamMenuBg" v-show="isShowHamMenu"  @click.self="showHamMenu">
        </div>
        <div class="hamMenu">
            <div class="closeBtn" @click="showHamMenu">close</div>
            <ul>
                <li v-for="(menu, idx) in menus" :key="idx" :class="{'actice': idx == 0}">
                    <a :href="'#'+menu.name" class="scrollactive-item" @click="showHamMenu">{{menu.title}}</a>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default {
        name: "layoutHeader",
        data() {
            return {
                isShowHamMenu: false,
                menus: [{
                    name: "home",
                    title: "HOME"
                },{
                    name: "service",
                    title: "SERVICE"
                },{
                    name: "company",
                    title: "COMPANY"
                },{
                    name: "patent",
                    title: "PATENT"
                },{
                    name: "contact",
                    title: "CONTACT US"
                }]
            }
        },
        methods: {
            showHamMenu() {
                this.isShowHamMenu = !this.isShowHamMenu;
                document.getElementsByClassName("hamMenu")[0].classList.remove("show");
                if(this.isShowHamMenu == true){
                    document.getElementsByClassName("hamMenu")[0].classList.add("show");
                }
            }
        }
    }
</script>

<style scoped>

</style>