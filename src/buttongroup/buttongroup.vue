<template>
    <div class="kind-button-group">
        <slot></slot>
    </div>
</template>


<script lang="ts">
    export default {
      name: 'kind-button-group',
    };
</script>

<style scoped lang="scss">
.kind-button-group{
    display: inline-block;
    padding: 5px;
}
.kind-button-group :not(:first-child):not(:last-child){
    border-radius: 0%;
    border-right-color: rgba(rgb(246, 235, 235), 0.5);
    border-left-color: rgba(rgb(246, 235, 235), 0.5);
    margin: 0;
}
.kind-button-group :first-child{
    border-top-right-radius:0%;
    border-bottom-right-radius:0%;
    border-right-color: rgba(rgb(246, 235, 235), 0.5);
    border-left-color: rgba(rgb(246, 235, 235), 0.5);
    margin: 0;
}
.kind-button-group :last-child{
    border-top-left-radius: 0%;
    border-bottom-left-radius:0%;
    border-right-color: rgba(rgb(246, 235, 235), 0.5);
    border-left-color: rgba(rgb(246, 235, 235), 0.5);
    margin: 0;
}
//按钮之间有空隙
.kind-button-group :not(:last-child) {
    margin-right: -1px;
}
</style>