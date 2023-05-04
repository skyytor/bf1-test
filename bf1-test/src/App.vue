<script>

</script>



<template>
    <div class="whole">


        <div class="theme">
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
                    <router-view></router-view>
            </main>
        </div>

    </div>
</template>

<style>
.whole{
    width: 100%;
  height: 100vh;
  display: flex;

  

}
.theme{
    height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fdb32a;
  overflow-x: hidden;
  padding-top: 20px;
}
.theme a{
    padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
    

.container {
    margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}


</style>
