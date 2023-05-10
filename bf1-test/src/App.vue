<script>

</script>



<template>
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

  <main>
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component"></component>
                </keep-alive>
            </router-view>
        </main>
</template>

<style></style>
