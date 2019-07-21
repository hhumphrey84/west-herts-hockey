<template>
    <nav ref="navBar" class="header">
        <div class="header__container">
            <TheHeaderNav />
            <div class="header__masthead">
                <nuxt-link to="/" exact class="header__logo">
                    <img src="~/assets/stag.svg" />
                    <!-- </nuxt-link>
                        <nuxt-link to="/" exact> -->
                    West Herts Hockey
                </nuxt-link>
            </div>
            <a href="" class="header__link">
                Members Site
            </a>
        </div>
        <!-- BREADCRUMB -->
        <!-- <div
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
        </div> -->
    </nav>
</template>
<script>
// import VueFuse from "~/components/VueFuse";
// import SlideOut from "~/components/SlideOut";
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
        // allPosts() {
        //     let posts = this.$store.state.blogPosts;
        //     let pages = this.$store.state.allPages;
        //     let both = posts.concat(pages);
        //     return both;
        // },
        // headerSiteName() {
        //     return this.$store.state.siteInfo.sitename;
        // },
        // componentResults() {
        //     return this.$store.state.results;
        // },
        // crumb() {
        //     return this.$store.state.theCrumb;
        // }
    }

    // methods: {
    //     navHeight() {
    //         var height = document.getElementById("navbar").clientHeight;
    //         console.log(height);
    //         this.$store.commit("SET_NAVHEIGHT", height - 1);
    //     }
    // },

    // mounted() {
    //     this.$on("searchChanged", results => {
    //         this.compResults = results;
    //     });
    // },

    // components: {
    //     SlideOut
    // }
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
    /* width: 60px; */
    height: 60px;
    padding: 4px 8px 8px 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* text-align: center; */
    /* margin-right: 8px; */
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
