<template>
    <ul class="breadcrumb__items container" v-if="theCrumb">
        <li class="breadcrumb__item">
            <nuxt-link to="/" exact>Home</nuxt-link>
        </li>
        <li class="breadcrumb__item">{{ theCrumb }}</li>
    </ul>
</template>

<script>
export default {
    computed: {
        theCrumb() {
            return this.$store.state.theCrumb;
        }
    }
};
</script>

<style>
.breadcrumb__items {
    display: flex;
}
.breadcrumb__item {
    display: block;
    font-weight: 800;
    font-size: 14px;
    padding: 4px 0;
}

.breadcrumb__item + .breadcrumb__item::before {
    content: ">";
    padding: 0 4px;
}
</style>
