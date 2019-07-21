<template>
    <section>
        <TheHeader />
        <nuxt />
        <BaelFooter :pagination="paginate" />
    </section>
</template>
<script>
import BaelFooter from "~/components/BaelFooter";
import TheHeader from "~/components/TheHeader";

export default {
    data() {
        return {
            email: { email: "" }
        };
    },

    methods: {
        navHeight() {
            // if (process.browser) {
            //     var height = document.getElementById("navbar").clientHeight;
            //     this.$store.commit("SET_NAVHEIGHT", height - 1);
            // }
        }
    },
    updated() {
        if (process.browser) {
            this.$nextTick(() => {
                this.navHeight();
                console.log(this.$store.state.navheight);
                console.log("default updated");
            });
        }
    },
    mounted() {
        if (process.browser) {
            this.$nextTick(() => {
                this.navHeight();
                console.log(this.$store.state.navheight);
                console.log("default mounted");
            });
        }
    },
    computed: {
        paginate() {
            return this.$store.state.pagination;
        },
        blogposts() {
            return this.$store.state.blogPosts;
        },
        blogtitle() {
            return this.$store.state.blogTitle;
        }
    },
    components: {
        TheHeader,
        BaelFooter
    }
};
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html,
body {
    height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: "Cantarell", sans-serif;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 8px;
    max-width: 1220px;
}
</style>
