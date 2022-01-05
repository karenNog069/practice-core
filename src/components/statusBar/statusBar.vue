<template>
    <div v-if="isBug=='true'" class="status-bar">
<!--        <span>当前iframeUrl:{{iframeUrl}}</span>&nbsp;&nbsp;-->
        <span>当前api的baseUrl:{{apiUrl}}</span>&nbsp;&nbsp;
        <span>sessionId:{{sessionId}}</span>&nbsp;&nbsp;
    </div>
</template>

<script>
    import js from "./statusBar";
    export default js;
</script>

<style>
    .status-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        color: #fff;
        background: rgba(0,0,0,0.7);
        pointer-events: none;
    }
</style>
