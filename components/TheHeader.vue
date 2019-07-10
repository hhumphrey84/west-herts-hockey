<template>
    <nav ref="navBar" id="navbar" class="nav-bar r">
        <div class="header c-6">
            <img class="header__logo" src="~/assets/stag.svg" />
            <nuxt-link class="header__site-name" to="/" exact>{{
                headerSiteName
            }}</nuxt-link>
        </div>
        <!-- MENU -->
        <SlideOut />
        <!-- BREADCRUMB -->
        <div
            v-if="blogtitle"
            style="z-index:55;"
            class="c-12 xs-border-top xs-border-bottom xs-p2 xs-text-6 titlebar"
        >
            <div class="item">
                <nuxt-link to="/" exact>Home</nuxt-link>
                <span v-show="crumb">
                    &nbsp;
                    <span class="text-gray-lightest"> > </span> &nbsp;
                    {{ thecrumb }}
                </span>
                &nbsp; <span class="text-gray-lightest"> > </span> &nbsp;
                {{ blogtitle }}
            </div>
        </div>
    </nav>
</template>
<script>
import VueFuse from "~/components/VueFuse";
import SlideOut from "~/components/SlideOut";
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
    components: { VueFuse },
    computed: {
        allPosts() {
            let posts = this.$store.state.blogPosts;
            let pages = this.$store.state.allPages;
            let both = posts.concat(pages);
            return both;
        },
        headerSiteName() {
            return this.$store.state.siteInfo.sitename;
        },
        componentResults() {
            return this.$store.state.results;
        },
        crumb() {
            return this.$store.state.theCrumb;
        }
    },

    methods: {
        navHeight() {
            var height = document.getElementById("navbar").clientHeight;
            console.log(height);
            this.$store.commit("SET_NAVHEIGHT", height - 1);
        }
    },

    mounted() {
        this.$on("searchChanged", results => {
            this.compResults = results;
        });
    },

    components: {
        SlideOut
    }
};
</script>
<style>
.nav-bar {
    z-index: 999;
}
.header__logo {
    width: 45px;
    height: 45px;
}
.header {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.header__site-name {
    color: #000;
    font-family: "Archivo Black", sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 18px;
    padding-left: 16px;
}
.titlebar .item {
    overflow-x: none;
}
.results {
    padding-left: 0;
    transform: translateY(17px);
    width: 30vw;
}
.results li {
    list-style-type: none;
    margin-left: 0;
}
nav {
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    right: 0;
}
@media only screen and (max-width: 40rem) {
    .results {
        width: 94vw;
    }
}
</style>
