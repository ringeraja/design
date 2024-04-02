<template>
  <div class="customSection text-secondary px-4 py-5 text-center">
    <div class="py-5"></div>
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white">Agencija za Web Dizajn</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">Always taking in mind the freshest and latest trends.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <TheForm></TheForm>
        </div>
      </div>
      <div class="py-5"></div>
    </div>
  </div>

  <div class="container my-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis">SEO Optimizacija</h1>
        <p class="lead">
          Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
          most popular front-end open source toolkit, featuring Sass variables and mixins,
          responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img
          class="rounded-lg-3"
          src="../assets/images/hero-image-homepage.jpg"
          alt=""
          width="720"
        />
      </div>
    </div>
  </div>
  <div class="container .bg-dark.bg-gradient px-4 py-5"></div>
  <div class="container-flex customSection">
    <h2>Test</h2>
  </div>
</template>

<script setup lang="ts">
import TheForm from '@/elements/TheForm.vue';
</script>

<style scoped>
.roundClass {
  border-radius: 30px;
  color: #9ef01a;
  border-color: #9ef01a;
}
.customColor {
  background-color: #161a1d;
}

.customSection {
  background-image: url("../assets/images/background-triangles.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
