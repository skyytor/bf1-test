<script setup>
import axios from 'axios'
import { ref,reactive } from 'vue';


const score123 = reactive([])

console.log(score123);
function GetPlayerList() {
  axios({
    method:'get',
    url: 'http://localhost:5051/Player/GetPlayerList',
  }).then(function (scores){
    score123.value=scores.data;
    console.log(scores);
  })
}

</script>

<template>
  <div>
    <h1>获取玩家列表</h1>
  <button @click="GetPlayerList">获取玩家列表</button>

  <ul>
  <li v-for="score in score123.value">
    {{ score.rank }}  {{ score.name }}####{{ score.kill }} / {{ score.dead }} {{ score.weaponS0 }}
  </li>

</ul>
  </div>

</template>
<style scoped>



</style>