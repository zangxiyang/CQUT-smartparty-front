<template>
  <Header/>
  <Nav/>
  <Assembly/>
<!--  <router-view></router-view>-->
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Nav from "@/components/Nav";
import Assembly from "@/views/ThreeMeetLesson/Assembly";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Nav,
    Assembly
  }
}
</script>

<style>
</style>
