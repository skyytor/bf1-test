<template>
  <div>
    <button @click="clickBtn" class="btn-item">hi~</button>
  </div>
</template>


<script setup>
import axios from 'axios'
import { ref, reactive } from 'vue';

const emit = defineEmits(['inFocus', 'submit'])

function buttonClick() {
  emit('submit')
}



/* 玩家列表 */
function GetPlayerList() {
  axios({
    method: 'get',
    url: 'http://localhost:5051/Player/GetPlayerList',
  }).then(function (scores) {
    score123.value = scores.data;
    console.log(MenuItem);
    console.log(score123);
  })
}
/* 服务器名称 */
function GetServerName() {
  axios({
    method: 'get',
    url: 'http://localhost:5051/Server/GetServerName',
  }).then(function (servername) {
    servername123.value = servername.data;
    console.log(servername123);
    console.log(servername);
  })
}



</script>
