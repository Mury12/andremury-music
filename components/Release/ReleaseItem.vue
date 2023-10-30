<template>
    <div class="release-item position-relative mb-4 h-100 align-items-start">
        <div class="mask bg opacity-0.7 position-absolute w-100 h-100" :style="{ backgroundImage }" />
        <div class="mask opacity-0.5 position-absolute w-100 h-100 bg-black" />

        <BRow class="p-3 pt-2">
            <BCol cols="12" class="release-card-header release-card-title text-disabled">
                {{ cardTitle }}
            </BCol>

            <BCol cols="12" md="auto" class="left d-flex flex-column align-items-center position-relative">
                <div class="cover mb-2" :style="{ backgroundImage }">
                    <div class="cover-play pointer position-absolute d-flex align-items-center justify-content-center"
                        v-if="item?.songs.some(item => item.isAvailable)"
                        @click="playSong(item.songs.find(song => song.file === isPlaying))">
                        <div class="cover-play-icon">
                            <Transition name="fade" mode="out-in">
                                <ReleasePlayIcon v-if="!item.songs.find(song => song.file === isPlaying)" />
                                <ReleaseStopIcon v-else />
                            </Transition>
                        </div>
                    </div>
                </div>
                <!-- <ReleasePlatformIcons /> -->
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
                            <Transition name="fade" mode="out-in">
                                <ReleasePlayIcon v-if="isPlaying !== song.file" />
                                <ReleaseStopIcon v-else />
                            </Transition>
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

const isPlaying = useIsPlaying()

const cardTitle = computed(() => {
    return item.releaseDate < new Date() ? 'Past release' : 'Coming soon';
})

const backgroundImage = computed(() => {
    return `url('/covers/${item.cover}')`
})

const file = usePlayer();

const volume = useVolume();

const playNext = () => {
    if (item.songs.length > 1) {
        const index = item.songs.findIndex(song => song.file === isPlaying.value)
        if (index !== -1) {
            const next = item.songs[index + 1]
            if (next?.file) {
                isPlaying.value = next.file
                return;
            }
        }
    }
    isPlaying.value = ''
}

watch(isPlaying, (value, old) => {
    file?.value?.pause();
    console.log('watch', value, old)
    if (value && value !== old) {
        file.value = new Audio(`/demos/${value}`)

        file.value.onended = () => {
            playNext()
        }

        file.value.volume = volume.value
        if (file.value.error) {
            console.log('error', file.value.error)
        } else file.value?.play()
    }
})

const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-CA', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    })
}

const playSong = (song?: Song) => {
    const toPlay = song || item.songs.find(song => song.isAvailable)
    if (toPlay?.isAvailable) {
        console.info(`Playing ${toPlay.title}`)
        isPlaying.value = isPlaying.value === toPlay.file || !toPlay.file ? '' : toPlay.file
    }
}

</script>

<style lang="scss" scoped>
.release-item {
    @media screen and (max-width: 768px) {
        max-width: 420px;
        width: auto;
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
            position: inherit;
            z-index: 0;

            .cover-play {
                transition: ease-in-out 0.2s;
                opacity: 0;
                height: 100%;
                width: 100%;
                background-color: rgba(255, 255, 255, 0.4);

                &:hover {
                    opacity: 1;
                }

                .cover-play-icon {

                    .play-icon,
                    .stop-icon {
                        transform: scale(4);
                    }

                    z-index: 2;
                }
            }
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
    }


}
</style>
