<template>
    <div class="stop-icon d-flex">
        <div class="bar" :style="{
            marginRight: '2px'
        }" />
        <div class="bar" />
    </div>
</template>

<style lang="scss" scoped>
.stop-icon {
    .bar {
        :first-of-type {
            margin-right: 2px;
        }

        width: 4px;
        height: 10px;
        background: white;
    }
}
</style>
