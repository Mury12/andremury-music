<template>
    <BRow class="release-list justify-content-center px-0">
        <BCol v-for="(item, index) in items" :key="index" cols="auto" class="release-item-wrap px-0 px-md-4 mb-4">
            <ReleaseItem :item="item" />
        </BCol>
    </BRow>
</template>

<script lang="ts" setup>
import { Release } from '~/shared/types';
import { releases } from '~/shared/releases';

const items = ref<Release[]>(releases);

</script>
