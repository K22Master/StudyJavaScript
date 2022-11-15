<template>
  <div class="tomclass">
    <h2>你好!我叫{{name}}</h2>
    <h3>住在{{address}}</h3>
  </div>
</template>

<script>
export default {
    name:'TomInfo',
    data(){
        return {
            name:'Tom',
            address:'美国'
        }
    },
}
</script>

<style>

.tomclass{
    background-color: #FFCCCC;
}
</style>