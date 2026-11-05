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
          <RouterLink to="/products">Products</RouterLink>
          <div class="nav-submenu">
            <RouterLink to="/dronevision">Dronevision</RouterLink>
            <RouterLink to="/tiles">Tile</RouterLink>
          </div>
        </div>
        <div class="nav-group">
          <RouterLink to="/resources">Resources</RouterLink>
          <div class="nav-submenu">
            <RouterLink to="/technology">Research</RouterLink>
            <RouterLink to="/about">About Us</RouterLink>
            <RouterLink to="/publications">Publications</RouterLink>
            <RouterLink to="/announcements">Announcements</RouterLink>
            <RouterLink to="/github">GitHub</RouterLink>
          </div>
        </div>
      </nav>
      <RouterLink class="button button-gradient header-contact" to="/contact">Contact Us</RouterLink>
    </header>

    <main id="main-content" class="site-main" :class="{ 'legacy-page': isLegacyPage }">
      <RouterView />
    </main>

    <footer class="gradient-footer">
      <div class="footer-card">
        <div class="footer-lead">
          <p class="eyebrow">From the lab</p>
          <h2>Curious what light can do?</h2>
          <p>Explore our latest research, products, and collaborations.</p>
          <RouterLink class="button button-dark footer-cta" to="/contact">Get in touch <span aria-hidden="true">→</span></RouterLink>
        </div>
        <div class="footer-links">
          <div class="footer-about">
            <h3>FLS Lab</h3>
            <p>Flying Light Specks Lab</p>
            <p>Researching luminous points, spatial computing, and 3D visualization.</p>
          </div>
          <div>
            <h3>Products</h3>
          <RouterLink to="/dronevision">Dronevision</RouterLink>
          <RouterLink to="/tiles">Tile</RouterLink>
          </div>
          <div>
            <h3>Resources</h3>
            <RouterLink to="/about">About FLS Lab</RouterLink>
            <RouterLink to="/publications">Publications</RouterLink>
            <RouterLink to="/announcements">Announcements</RouterLink>
            <RouterLink to="/resources">Resources</RouterLink>
          </div>
          <div>
            <h3>Connect</h3>
            <RouterLink to="/contact">Contact Us</RouterLink>
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
import { computed, ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const menuOpen = ref(false);
const route = useRoute();
const isLegacyPage = computed(() => ["/technology", "/personnel", "/publications", "/announcements", "/alumni"].includes(route.path));
watch(() => route.fullPath, () => { menuOpen.value = false; });
</script>
