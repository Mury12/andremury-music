<template>
    <div class="release-item position-relative mb-4 h-100 align-items-start">
        <div class="mask position-absolute w-100 h-100" :style="{ backgroundImage }" />
        <div class="mask position-absolute w-100 h-100 bg-black" />

        <BRow class="p-3 pt-2">
            <BCol cols="12" class="release-card-header release-card-title text-disabled">
                {{ cardTitle }}
            </BCol>

            <BCol cols="12" md="auto" class="left d-flex flex-column align-items-center">
                <div class="cover mb-2" :style="{ backgroundImage }" />
                <ReleasePlatformIcons />
            </BCol>

            <BCol cols="auto">
                <div class="release-date">
                    {{ item.type }}
                </div>
                <div class="release-card-title">
                    {{ item.title }}
                </div>
                <div class="release-language text-disabled">
                    <small>Language: {{ item.language }}</small>
                </div>
                <div v-for="(song, index) in item.songs">
                    <div class="d-flex align-items-center" :key="index">
                        <div @click="playSong(song)" :class="{
                            'disabled': !song.isAvailable,
                            pointer: song.isAvailable
                        }">
                            <ReleasePlayIcon v-if="isPlaying !== song.title" />
                            <ReleaseStopIcon v-else />
                        </div>
                        <div class="mx-2">{{ song.title }} <small class="text-disabled">{{ formatDate(song.releaseDate)
                        }}</small></div>
                    </div>
                </div>
            </BCol>
        </BRow>
    </div>
</template>

<script lang="ts" setup>
import { Release, Song } from '~~/shared/types';

const { item } = defineProps<{
    item: Release
}>()

const isPlaying = ref<string>('')

const cardTitle = computed(() => {
    return item.releaseDate < new Date() ? 'Past release' : 'Coming soon';
})

const backgroundImage = computed(() => {
    return `url('_nuxt/assets/covers/${item.cover}')`
})

const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',

    })
}

const playSong = (song: Song) => {
    if (song.isAvailable) {
        console.log('play song')
        isPlaying.value = isPlaying.value === song.title ? '' : song.title
    }
}

</script>

<style lang="scss" scoped>
.release-item {
    @media screen and (max-width: 768px) {
        width: 420px;
    }

    width: 520px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.25);
    overflow: hidden;
    border-radius: 1.5rem;

    *:not(.mask) {
        z-index: 1;
    }

    .release-card-header {
        height: 40px;
    }

    .release-card-title {
        font-size: 1.5rem;
    }

    .release-type {
        font-size: 1.2rem;
    }

    .text-disabled {
        color: rgba(255, 255, 255, 0.7)
    }

    .release-language {
        position: relative;
        top: -10px;
    }

    .disabled {
        opacity: 0.5;
    }

    .left {
        .cover {
            height: 200px;
            width: 200px;
            background-size: cover;
            background-position: center;
        }
    }

    .mask {
        top: 0;
        z-index: 0;
        @media screen and (max-width: 768px) {
            background-size: 200%;
            
        }
        background-size: 110%;
        background-position: center;
        background-repeat: no-repeat;
        filter: blur(2px);
        opacity: 0.5;
    }
}
</style>
