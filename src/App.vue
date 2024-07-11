<template>
  <div id="app">
    <Header />
    <router-view v-slot="slotProps">
        <component :is="slotProps.Component"></component>
    </router-view>
    <router-link to="/contact_page">
      <div class="message">
        <button class="btn-msg">
          <img src="@/assets/images/geo.png" />
          CONTACT US
        </button>
      </div>
    </router-link>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  
}
</script>

<style>
@import './assets/style.css';
</style>
<style scoped>
.message {
    position: fixed;
    right: -52px;
    bottom: 0;
}

button.btn-msg {
    transform: rotate(-90deg) translateX(100%);
    background: blue;
    color: #fff;
    border: none;
}
</style>
