<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/" exact-active-class="is-active" aria-label="FLS Lab home">
        <img src="@/assets/images/figma/fls-logo.png" alt="FLS Lab" />
      </RouterLink>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-navigation"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">{{ menuOpen ? "Close menu" : "Open menu" }}</span>
        <span></span><span></span><span></span>
      </button>
      <nav id="primary-navigation" class="primary-nav" :class="{ 'is-open': menuOpen }">
        <RouterLink to="/">Home</RouterLink>
        <div class="nav-group">
          <RouterLink to="/technology">Technology</RouterLink>
          <div class="nav-submenu">
            <RouterLink to="/technology">Research</RouterLink>
            <RouterLink to="/personnel">Personnel</RouterLink>
          </div>
        </div>
        <RouterLink to="/publications">Publications</RouterLink>
        <RouterLink to="/announcements">Announcements</RouterLink>
      </nav>
      <a class="button button-gradient header-contact" href="https://github.com/flyinglightspeck" target="_blank" rel="noreferrer">GitHub</a>
    </header>

    <main id="main-content" class="site-main">
      <RouterView />
    </main>

    <footer class="gradient-footer">
      <div class="footer-card">
        <div class="footer-lead">
          <p class="eyebrow">From the lab</p>
          <h2>Curious what light can do?</h2>
          <p>Explore our latest research, products, and collaborations.</p>
          <p class="footer-cta-note">Explore our work through the links below.</p>
        </div>
        <div class="footer-links">
          <div class="footer-about">
            <h3>FLS Lab</h3>
            <p>Flying Light Specks Lab</p>
            <p>Researching luminous points, spatial computing, and 3D visualization.</p>
          </div>
          <div>
            <h3>Products</h3>
          <RouterLink to="/technology">Technology</RouterLink>
          </div>
          <div>
            <h3>Resources</h3>
            <RouterLink to="/personnel">Personnel</RouterLink>
            <RouterLink to="/publications">Publications</RouterLink>
            <RouterLink to="/announcements">Announcements</RouterLink>
          </div>
          <div>
            <h3>Connect</h3>
            <a href="https://github.com/flyinglightspeck" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div class="footer-bottom">
          <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2425754&HistoricalAwards=false" target="_blank" rel="noreferrer">
            <img src="@/assets/images/NSF_logo.png" alt="Supported by the National Science Foundation" />
          </a>
          <span>© {{ new Date().getFullYear() }} FLS Lab. All rights reserved.</span>
          <span>Exploring a more dimensional tomorrow.</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const menuOpen = ref(false);
const route = useRoute();
watch(() => route.fullPath, () => { menuOpen.value = false; });
</script>
