<template>
    <BRow class="release-list justify-content-center px-0 user-select-none">
        <BCol v-for="(item, index) in items" :key="index" cols="auto" class="release-item-wrap px-0 px-md-4 mb-4" :style="{
            'animation-delay': `${index * 300}ms`,
        }">
            <ReleaseItem :item="item" />
        </BCol>
    </BRow>
</template>

<script lang="ts" setup>
import { Release } from '~/shared/types';
import { releases } from '~/shared/releases';

const items = ref<Release[]>(releases);

</script>

<style lang="scss" scoped>
.release-item-wrap {
    transition: ease-in-out 100ms;
    animation: slide-down 1s ease;
    animation-fill-mode: backwards;
    @media screen and (min-width: 768px) {
        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>
