<template>
  <nav class="navbar navbar-expand-sm navbar-dark myColor" aria-label="Third navbar example">
    <div class="container-fluid">
      <LogoComp></LogoComp>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        :aria-expanded="navIsVisibleComputed ? 'true' : 'false'"
        aria-label="Toggle navigation"
        @click="toggleMobileMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav me-auto mb-2 mb-sm-0">
          <li class="nav-item">
            <router-link @click="toggleMobileMenu"
            to="/" aria-current="page" class="nav-link text-nowrap active"
            data-toggle="collapse"
            data-target=".navbar-collapse"
              >Početna</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Usluge</a
            >
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Izrada web sajtova</a></li>
              <li><a class="dropdown-item" href="#">SEO Optimizacija</a></li>
              <li><a class="dropdown-item" href="#">Oglašavanje na Google-u</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link
             @click="toggleMobileMenu"
             to="/about" class="nav-link text-nowrap">O nama</router-link>
          </li>
          <li class="nav-item">
            <router-link @click="navIsVisible = false"
            to="/kontakt" class="nav-link text-nowrap">Kontakt</router-link>
          </li>
        </ul>
        <form role="search" class="d-block d-sm-none">
          <input class="form-control customSearch"
           type="search" placeholder="Pretraži" aria-label="Search" />
        </form>
      </div>

    </div>
  </nav>
</template>
<script setup lang="ts">

import { ref, computed, onMounted } from 'vue';

import LogoComp from './LogoComp.vue';

const welcomeMessage = ref('Welcome to NDesign!');
const navIsVisible = ref<boolean>(false);

function printWelcomeMessage(param: string) {
  console.log(param);
}

const navIsVisibleComputed = computed<boolean>(() => {
  if (navIsVisible.value) {
    return true;
  } return false;
});

function toggleMobileMenu() {
  navIsVisible.value = !navIsVisible.value;
  console.log(navIsVisibleComputed.value);
}

onMounted(() => {
  setTimeout(() => {
    console.log(navIsVisibleComputed.value);
    console.log(navIsVisible.value);
  }, 1000);
});

</script>
<style scoped>

.customSearch {
  max-width:307px;
}

nav {
  padding: 30px 15px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
/* my colors */
.myColor {
  background-color:#161a1d;
}

/* custom css to make dropdown menu on hover */
@media (min-width: 576px){
  .dropdown:hover > .dropdown-menu {
  display: block;
  margin-top: 0;
}
}
/* css for dropdown menu mobile */
@media (max-width: 576px){
  .navbar-nav {
  padding-top: 12px;
}
}
@media (min-width: 576px)
.navbar-expand-sm .navbar-toggler {
    display: none;
}
</style>
