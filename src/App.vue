<template>
  <Header/>
  <Nav/>
  <main>
    <!--内容页-->
    <RouterView v-slot="{Component}">
      <keep-alive v-if="$route.meta.keepAlive">
        <component :is="Component">
        </component>
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive">
      </component>
    </RouterView>
  </main>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Nav,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
