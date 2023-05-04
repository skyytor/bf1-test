<script>

</script>

<template>
    <div class="whole">


        <div class="nav">
                <router-link to="/home">主页</router-link>
                <router-link to="/power">权限</router-link>
                <router-link to="/score">得分板</router-link>
                <router-link to="/details">详情</router-link>
                <router-link to="/rules">规则</router-link>
                <router-link to="/monitor">监控</router-link>
                <router-link to="/chat">聊天</router-link>
                <router-link to="/about">关于</router-link>
                
        </div>


        <div class="container">
            <main>
                <div class="container">
                    <router-view></router-view>
                </div>
            </main>
        </div>

    </div>
</template>

<style>
.whole{
    width: 100%;
  height: 100vh;
  display: flex;
  background-color: aliceblue;
}
.nav a{

  border: 1px solid #f7aaaa;
  width: 80px;
  height: 30px;
  text-decoration: none;
  line-height: 30px;
  text-align: center;
}
    

/* .theme {
    border: 2px ridge rgb(248, 185, 185);
    background-color: rgb(245, 255, 241);
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    flex: 0 1 20%;
    overflow-y: auto;
    height: 95vh;
} */

.main {
    flex-wrap: nowrap;
}
</style>
