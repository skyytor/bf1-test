<template>
    <table>
        <thead>
            <tr>
                <th>序号</th>
                <th>等级</th>
                <th>玩家ID</th>
                <th>小队</th>
                <th>击杀</th>
                <th>死亡</th>
                <th>得分</th>
                <th>兵种</th>
                <th>兵种2</th>
                <th>主武器</th>
                <th>配枪</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(player, index) in playerList" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ player.rank }}</td>
                <td>{{ player.name }}</td>
                <td>{{ player.squadName }}</td>
                <td>{{ player.kill }}</td>
                <td>{{ player.dead }}</td>
                <td>{{ player.score }}</td>
                <td>{{ player.kitName }}</td>
                <td>
                    <img class="kitImage" :src="player.kitImage2" alt="">
                </td>
                <td>{{ player.weaponS0.name }}</td>
                <td>{{ player.weaponS1.name }}</td>
                <td>
                    <button @click="itemMakr(player)">操作</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
defineProps([
    "playerList"
])

import { inject } from 'vue'

const axios = inject('$axios')

function itemMakr(item) {
    console.log(item);

    axios({
        url: 'https://sparta-gw.battlelog.com/jsonrpc/pc/api',
        method: 'post',
        headers: {
            "Content-Type": "text/json",
            "X-Gatewaysession": "739b5f01-e893-4907-bf13-a340121935e5"
        },
        data: {
            jsonrpc: "2.0",
            method: "RSP.movePlayer",
            params: {
                game: "tunguska",
                gameId: "8324510040059",
                personaId: item.personaId,
                teamId: 1,
                forceKill: true,
                moveParty: false
            },
            id: "f936d186-d454-43c3-82ba-1aeb212dc7ac"
        },
    }).then((res) => {
        console.log("res", res);
        console.log("res.data", res.data);
    }).catch((err) => {
        console.log("err", err);
    })
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    transition: all .1s ease;
    margin: 5px;
}

thead {
    background-color: rgb(255, 217, 0);
    padding: 10px;
}

th,td {
    border-bottom: 1px solid rgb(41, 38, 38);
    padding: 5px;
    font-size: 10px;
}

tr:hover {
    background-color: #faabab;
}

.kitImage {
    max-height: 20px;
}
</style>