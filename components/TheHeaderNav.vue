<template>
    <div class="header-nav">
        <button class="header-nav__button" @click="toggleMenu">
            Menu
        </button>
        <div class="header-nav__drawer" :class="{ 'is-active': isOpen }">
            <button class="header-nav__button" @click="toggleMenu">
                Close
            </button>
            <ul class="header-nav__items">
                <li
                    v-for="(navItem, i) in navItems"
                    class="header-nav__item"
                    :key="`navItem-${i}`"
                >
                    <nuxt-link :to="navItem._path" class="header-nav__link">
                        {{ navItem.title }}
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        };
    },
    computed: {
        navItems() {
            return this.$store.state.allPages;
        }
    },
    methods: {
        open() {
            this.isOpen = true;
        },
        close() {
            this.isOpen = false;
        },
        toggleMenu() {
            console.log(">> toggle");

            if (this.isOpen) {
                this.close();
            } else {
                this.open();
            }
        }
    }
};
</script>
<style>
.header-nav__button {
    font-size: 14px;
    color: #ffffff;
    border: 2px rgba(166, 173, 187, 0.3) solid;
    padding: 8px;
    font-weight: 800;
    margin: 0;
    background: transparent;
    transition: 0.3s;
    font-family: "Fjalla One", sans-serif;
}
.header-nav__button:hover {
    border: 2px rgba(166, 173, 187, 0.8) solid;
}
.header-nav__drawer {
    padding: 16px 8px 8px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    transform: translateX(-100%);
    transition: 0.4s;
    background-color: #363f4c;
    width: 300px;
}
.header-nav__drawer.is-active {
    transform: translateX(0);
}
.header-nav__items {
    padding-top: 8px;
}
.header-nav__item + .header-nav__item {
    border-top: 1px #232c37 solid;
}
.header-nav__link {
    color: #ffffff;
    font-family: "Cantarell", sans-serif;
    display: block;
    padding: 8px 0;
}
</style>
