<template>
    <nav ref="navBar" class="header">
        <div class="header__container">
            <TheHeaderNav />
            <div class="header__masthead">
                <nuxt-link to="/" exact class="header__logo">
                    <img src="~/assets/stag.svg" />
                    West Herts Hockey
                </nuxt-link>
            </div>
            <a href="" class="header__link">
                Members Site
            </a>
        </div>
    </nav>
</template>
<script>
import TheHeaderNav from "~/components/TheHeaderNav";
export default {
    props: ["blogtitle", "posts", "thecrumb"],
    data() {
        return {
            results: [],
            keys: [
                {
                    name: "title",
                    weight: 0.3
                },
                {
                    name: "body",
                    weight: 0.7
                }
            ],

            compResults: []
        };
    },
    components: { TheHeaderNav },
    computed: {
        navItems() {
            return this.$store.state.allPages;
        }
    }
};
</script>
<style>
.header {
    border-top: 8px #232c37 solid;
    padding: 0 8px;
    background-color: #363f4c;
}
.header__container {
    max-width: 1220px;
    margin: 0 auto;
    display: flex;
    align-items: center;
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
}
.header__link:hover {
    border: 2px rgba(166, 173, 187, 0.8) solid;
}
</style>
