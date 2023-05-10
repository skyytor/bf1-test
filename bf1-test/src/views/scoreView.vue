<template>
  <div>
    <h3>得分板</h3>
    <div class="score">
      <ScoreTeam :playerList="playerList1" />
      <ScoreTeam :playerList="playerList2" />
    </div>
  </div>
</template>

<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue'

import ScoreTeam from '@/components/Scoreboard.vue'

const axios = inject('$axios')

const playerList1 = ref([])
const playerList2 = ref([])

const timer = null;

onMounted(() => {
  console.log('onMounted');
  getGamePlayerList();
});

onUnmounted(() => {
  console.log('onUnmounted');
  clearTimeout(timer);
});

function getGamePlayerList() {
  axios.get('http://127.0.0.1:10086/Player/GetGamePlayerList')
    .then((res) => {
      console.log(res);

      playerList1.value = [];
      playerList2.value = [];

      res.data.forEach((item, index) => {
        if (item.teamId == 1)
          playerList1.value.push(item);
        // else if (item.teamId == 2)
        //     playerList2.value.push(item);

        if (item.rank > 149) {
          playerList2.value.push(item);
        }
      })

      playerList1.value.sort((a, b) => {
        return b.score - a.score;
      });

      playerList2.value.sort((a, b) => {
        return b.score - a.score;
      });

      /* timer = setTimeout(() => {
        getGamePlayerList();
      }, 5000); */
    }).catch((err) => {
      console.log(err);
    })
}
</script>

<style scoped>
h3 {
  text-align: center;
  font-size: 24px;
}

.score {
  display: flex;
}
</style>