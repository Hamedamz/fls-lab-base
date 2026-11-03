<template>
  <div class="home-page">
    <section class="hero-video" aria-labelledby="home-title">
      <video v-if="heroVideo" ref="videoEl" class="hero-video-media" :src="heroVideo" :autoplay="!reduceMotion" muted loop playsinline></video>
      <div class="hero-grid" aria-hidden="true"></div>
      <span class="hero-label">{{ heroVideo ? "FLS Lab" : "Hero video asset needed" }}</span>
      <button v-if="heroVideo" class="video-toggle" type="button" @click="toggleVideo">{{ videoPaused ? "Play video" : "Pause video" }}</button>
      <div class="hero-title-wrap"><p class="eyebrow">Flying Light Specks Lab</p><h1 id="home-title">3D Visualization<br />Brought to Life</h1></div>
    </section>

    <div class="research-strip">
      <span>Research · Visualization · Spatial Computing</span>
      <span>Flying Light Specks Lab</span>
    </div>

    <section class="home-section research-intro">
      <div class="section-heading"><p class="eyebrow">Research · Visualization · Spatial Computing</p><h2>Light, shaped into new dimensions.</h2></div>
      <p>Advances in computing, storage, communication, and robotics have enabled the vision of intelligent 3D multimedia systems. We investigate their design, implementation, applications, and social implications—from healthcare to entertainment—and explore how they can change the way we work, learn, play, receive care, and socialize.</p>
    </section>

    <section class="home-section" aria-labelledby="ideas-title">
      <div class="section-heading"><p class="eyebrow">Explore the work</p><h2 id="ideas-title">Ideas in motion</h2><p>Two ways to bring light-based visualization into shared space.</p></div>
      <div class="product-grid">
        <RouterLink v-for="product in products" :key="product.name" class="product-tile" :to="product.to">
          <div class="tile-art" :class="product.art"><span class="tile-cube" aria-hidden="true"></span><span class="tile-grid-lines" aria-hidden="true"></span></div>
          <div class="tile-copy"><h3>{{ product.name }}</h3><p>{{ product.description }}</p><span class="text-link">Explore {{ product.name }} →</span></div>
        </RouterLink>
      </div>
    </section>

    <section class="home-section">
      <div class="section-heading"><p class="eyebrow">FLS technology</p><h2>Revolutionary features for every creator</h2><p>Explore how coordinated light and motion can support new spatial experiences.</p></div>
      <div class="feature-grid">
        <article v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-art" :class="feature.art" aria-hidden="true"><span></span></div>
          <h3>{{ feature.title }}</h3><p>{{ feature.description }}</p>
        </article>
      </div>
    </section>

    <section class="home-section split-feature">
      <div><p class="eyebrow">Dronevision</p><h2>Learn more about Dronevision</h2><p>Explore a physical 3D visualization platform using coordinated flying light specks.</p><RouterLink class="text-link" to="/dronevision">Explore Dronevision →</RouterLink></div>
      <div class="visual-placeholder drone-art" role="img" aria-label="Illustration placeholder for Dronevision technology"><span>Dronevision visualization</span></div>
    </section>

    <section class="home-section split-feature reverse">
      <div class="visual-placeholder tile-art-large" role="img" aria-label="Illustration placeholder for Tile localization"><span>Tile localization visualization</span></div>
      <div><p class="eyebrow">Tile</p><h2>Learn more about Tiles</h2><p>Explore a visual reference surface for flexible UAV and robotics localization experiments.</p><RouterLink class="text-link" to="/tiles">Explore Tile →</RouterLink></div>
    </section>

    <section class="home-section">
      <div class="section-heading"><p class="eyebrow">More about FLS</p><h2>More information on FLS</h2></div>
      <div class="info-grid">
        <RouterLink class="info-card" to="/about"><span class="visual-placeholder mini-art">Lab research</span><span><h3>About us</h3><p>Learn about the lab, our mission, and areas of exploration.</p><b class="text-link">Meet the lab →</b></span></RouterLink>
        <RouterLink class="info-card" to="/contact"><span class="visual-placeholder mini-art cyan-art">Contact</span><span><h3>Contact us</h3><p>Connect with FLS Lab about research and products.</p><b class="text-link">Get in touch →</b></span></RouterLink>
      </div>
    </section>

    <section class="home-section">
      <div class="section-heading"><p class="eyebrow">News</p><h2>Announcements</h2></div>
      <div class="announcement-preview">
        <article v-for="item in announcements" :key="item.title" class="announcement-card"><span class="announcement-icon" aria-hidden="true">✦</span><div><h3>{{ item.title }}</h3><p>{{ item.description }}</p></div></article>
      </div>
      <RouterLink class="text-link" to="/announcements">View all announcements →</RouterLink>
    </section>

    <section class="home-cta"><div><p class="eyebrow">From the lab</p><h2>Curious what light can do?</h2><p>Explore our latest research, products, and collaborations.</p></div><RouterLink class="button button-gradient" to="/contact">Contact Us <span aria-hidden="true">→</span></RouterLink></section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterLink } from "vue-router";

// Add the approved looping hero video under public/media and set this path.
const heroVideo = "";
const videoEl = ref(null);
const reduceMotion = ref(false);
const videoPaused = ref(false);
let motionQuery;
function syncMotionPreference() {
  reduceMotion.value = Boolean(motionQuery?.matches);
  if (reduceMotion.value && videoEl.value) {
    videoEl.value.pause();
    videoPaused.value = true;
  }
}
function toggleVideo() {
  if (!videoEl.value) return;
  if (videoEl.value.paused) {
    videoEl.value.play().then(() => {
      videoPaused.value = false;
    }).catch(() => {
      videoPaused.value = true;
    });
    return;
  }
  videoEl.value.pause();
  videoPaused.value = videoEl.value.paused;
}
onMounted(() => {
  motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  syncMotionPreference();
  motionQuery.addEventListener?.("change", syncMotionPreference);
});
onBeforeUnmount(() => motionQuery?.removeEventListener?.("change", syncMotionPreference));
const products = [
  { name: "Dronevision", to: "/dronevision", description: "Light-based 3D visualization in shared space.", art: "drone-art" },
  { name: "Tile", to: "/tiles", description: "Flexible localization surfaces for UAVs and robotics.", art: "tile-art" },
];
const features = [
  { title: "Real-world light", description: "Bring digital ideas into physical space.", art: "wave-art" },
  { title: "Spatial design", description: "Explore form, motion, and shared experiences.", art: "line-art" },
  { title: "New perspectives", description: "Investigate visualization from another point of view.", art: "field-art" },
];
const announcements = [
  { title: "LightBender at ACM Multimedia 2026", description: "LightBender has been accepted to appear at the upcoming ACM Multimedia conference." },
  { title: "SIGGRAPH 2026 student research", description: "Hamed won second place for a poster on visual effects using LightBenders." },
  { title: "Dronevision workshop", description: "The lab organized a SIGGRAPH Frontiers workshop on Dronevision and spatial computing." },
];
</script>

<style scoped>
.hero-video { height: clamp(430px, 56vw, 810px); margin: 0 calc((min(100vw - 48px, 1296px) - 100vw) / 2); position: relative; overflow: hidden; display: grid; place-items: end center; background: #090d14; color: white; }
.hero-video-media { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.hero-grid { position: absolute; inset: 0; opacity: .24; background-image: linear-gradient(#702e2c55 1px,transparent 1px),linear-gradient(90deg,#702e2c55 1px,transparent 1px); background-size: 24px 24px; mask-image: linear-gradient(transparent,#000 20%,#000); }
.hero-label { position: absolute; top: 14%; right: 12%; color: #abb5c4; font: italic 16px monospace; }
.video-toggle { position:absolute; z-index:1; right:24px; bottom:24px; padding:10px 16px; border:1px solid #ffffff66; border-radius:999px; color:white; background:#0e1729cc; cursor:pointer; }
.hero-title-wrap { position: relative; text-align: center; padding: 0 20px 56px; }
.hero-title-wrap .eyebrow { color: #66d5dd; }
.hero-title-wrap h1 { margin: 0; font-size: clamp(38px,5.2vw,70px); line-height: 1.08; letter-spacing: -.04em; color: white; }
.research-strip { min-height: 116px; display: flex; align-items: center; justify-content: space-between; gap: 24px; border-bottom: 1px solid #e4ebf1; color: #087fa5; font-size: 13px; text-transform: uppercase; letter-spacing: .04em; }
.research-strip span:last-child { color: #647b91; text-align: right; }
.home-section { padding: 80px 0 20px; }
.section-heading { margin-bottom: 28px; }
.section-heading > p:not(.eyebrow) { margin: 10px 0 0; color: #60758a; }
.research-intro { display:grid; grid-template-columns: .9fr 1.1fr; align-items:start; gap:48px; }
.research-intro > p { max-width:680px; margin:0; color:#4f6881; font-size:17px; line-height:1.7; }
.product-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 28px; }
.product-tile { overflow: hidden; border-radius: 16px; background: #0e213e; color: white; text-decoration: none; box-shadow: 0 12px 26px #102c4b20; }
.tile-art { height: 300px; position: relative; overflow: hidden; display: grid; place-items: center; background: radial-gradient(ellipse at 50% 92%,#176ba0,#0e244a 52%,#0b111b); }
.tile-art::before { content:""; position:absolute; inset:0; opacity:.55; background-image: radial-gradient(#36e1d8 1px,transparent 1px); background-size:24px 24px; }
.tile-cube { position:relative; width:125px; height:100px; border:1px solid #63e7ef; background:linear-gradient(135deg,#c4fdff,#49d3e7 48%,#173a68 49%); transform:skewY(-25deg) rotate(25deg); box-shadow:0 24px 45px #11b9d355; }
.tile-grid-lines { position:absolute; inset:auto 0 0; height:35%; border-top:1px solid #43dbe080; background:linear-gradient(160deg,transparent 48%,#30c3ee70 49%,transparent 50%); }
.tile-copy { padding: 22px 24px 25px; }
.tile-copy h3 { margin: 0 0 8px; color: white; font-size: 20px; }
.tile-copy p { margin: 0 0 14px; color: #d5e3f4; }
.text-link { color: #078da4; font-size: 14px; font-weight: 650; text-decoration: none; }
.product-tile .text-link { color: #54d8d7; }
.feature-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 20px; }
.feature-card { padding: 12px 12px 20px; border:1px solid #e8edf3; border-radius:16px; background:#fff; box-shadow:0 6px 18px #153c5912; }
.feature-art { height:180px; border-radius:12px; overflow:hidden; background:linear-gradient(140deg,#182b74,#7558e9 54%,#20c8bd); position:relative; }
.feature-art::before,.feature-art::after { content:""; position:absolute; inset:28% -10%; border-top:1px solid #8dffffa8; transform:rotate(-17deg); box-shadow:0 14px 0 #3ecae977,0 30px 0 #75d7e688,0 50px 0 #9978ff80; }
.feature-art::after { transform:rotate(15deg); inset:55% -10%; }
.split-feature { display:grid; grid-template-columns: .8fr 1.2fr; align-items:center; gap:56px; }
.split-feature.reverse { grid-template-columns:1.2fr .8fr; }
.split-feature p:not(.eyebrow) { max-width:440px; color:#60758a; line-height:1.6; }
.visual-placeholder { min-height:360px; border-radius:16px; display:grid; place-items:center; background:radial-gradient(ellipse at 45% 110%,#addfff 0 20%,transparent 58%),linear-gradient(120deg,#e0faf7,#d4edfc 52%,#e0e0fc); color:#0c456c; text-align:center; font-size:13px; }
.tile-art-large { background:radial-gradient(ellipse at 50% 110%,#acdfff 0 22%,transparent 58%),linear-gradient(140deg,#dffbf6,#d4edfc 52%,#6558ef); }
.info-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:22px; }
.info-card { display:grid; grid-template-columns: 38% 1fr; gap:22px; padding:16px; border:1px solid #e9eff4; border-radius:16px; background:white; text-decoration:none; }
.info-card h3 { margin:4px 0; font-size:18px; }.info-card p { color:#60758a; font-size:14px; line-height:1.5; }
.mini-art { min-height:150px; font-size:12px; }
.announcement-preview { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; margin-bottom:18px; }
.announcement-card { display:flex; align-items:flex-start; gap:12px; padding:18px; border:1px solid #e8edf3; background:white; border-radius:14px; }
.announcement-icon { width:30px; height:30px; flex:0 0 30px; border-radius:50%; display:grid; place-items:center; color:#068ba4; background:#dff8f4; }
.announcement-card h3 { margin:0 0 6px; font-size:15px; }.announcement-card p { margin:0; font-size:13px; line-height:1.45; color:#657b91; }
.home-cta { margin:80px 0 70px; padding:32px 40px; display:flex; align-items:center; justify-content:space-between; gap:24px; border-radius:16px; background:#d4e9fb; }
.home-cta h2 { font-size:28px; }.home-cta p:not(.eyebrow) { margin:8px 0 0; color:#526b83; }
@media(max-width:760px){.hero-video{margin:0 calc((min(100vw - 36px,1296px) - 100vw)/2);height:520px}.hero-title-wrap{padding-bottom:42px}.research-strip{align-items:flex-start;flex-direction:column;justify-content:center;padding:22px 0;font-size:11px}.research-strip span:last-child{text-align:left}.home-section{padding-top:58px}.research-intro{grid-template-columns:1fr;gap:8px}.product-grid,.feature-grid,.info-grid,.announcement-preview{grid-template-columns:1fr}.tile-art{height:230px}.feature-art{height:190px}.split-feature,.split-feature.reverse{grid-template-columns:1fr;gap:24px}.split-feature.reverse .visual-placeholder{order:2}.visual-placeholder{min-height:260px}.info-card{grid-template-columns:34% 1fr;gap:14px}.mini-art{min-height:130px}.home-cta{align-items:flex-start;flex-direction:column;margin:50px 0;padding:26px}}
</style>
