<template>
    <nav ref="navBar" class="header">
        <div class="header__top-bar">
            <div class="header__container container">
                <TheHeaderNav />
                <div class="header__masthead">
                    <nuxt-link to="/" exact class="header__logo">
                        <img src="~/assets/stag.svg" />
                        {{ siteHeader }}
                    </nuxt-link>
                </div>
                <a href="" class="header__link">
                    Members Site
                </a>
            </div>
        </div>
        <TheBreadcrumb />
    </nav>
</template>
<script>
import TheHeaderNav from "~/components/TheHeaderNav";
import TheBreadcrumb from "~/components/TheBreadcrumb";

export default {
    components: {
        TheHeaderNav,
        TheBreadcrumb
    },
    computed: {
        siteHeader() {
            return this.$store.state.siteInfo.sitename;
        }
    }
};
</script>
<style>
.header {
    border-top: 8px #232c37 solid;
    background-color: #f7f7f7;
    border-bottom: 1px #dddddd solid;
}
.header__top-bar {
    background: #363f4c;
}
.header__container {
    display: flex;
    align-items: center;
    position: relative;
}

.header__masthead {
    flex: 1;
    display: flex;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #ffffff;
    font-weight: bold;
    font-family: "Fjalla One", sans-serif;
}
.header__masthead > a {
    color: #ffffff;
}
.header__logo {
    height: 60px;
    padding: 4px 8px 8px 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.header__logo > img {
    height: 100%;
    margin-right: 8px;
}
.header__link {
    font-size: 14px;
    color: #ffffff;
    border: 2px rgba(166, 173, 187, 0.3) solid;
    padding: 8px;
    font-weight: 800;
    transition: 0.3s;
    font-family: "Fjalla One", sans-serif;
}
.header__link:hover {
    border: 2px rgba(166, 173, 187, 0.8) solid;
}
</style>
