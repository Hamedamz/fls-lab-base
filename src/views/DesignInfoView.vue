<template>
  <div class="page design-info-page">
    <template v-if="page.key === 'notFound'">
      <p class="eyebrow">404</p><h1>We couldn’t find that page.</h1><p class="lead">Try one of the links below to continue exploring FLS Lab.</p>
      <div class="quick-links"><RouterLink to="/">Home</RouterLink><RouterLink to="/products">Products</RouterLink><RouterLink to="/resources">Resources</RouterLink></div>
    </template>
    <template v-else>
      <section class="design-hero">
        <div>
          <p class="eyebrow">{{ page.eyebrow }}</p><h1>{{ page.title }}</h1><p class="lead">{{ page.intro }}</p>
          <div v-if="page.actions?.length || page.externalActions?.length" class="hero-actions">
            <RouterLink v-for="action in page.actions" :key="action.label" class="button" :class="action.primary ? 'button-gradient' : 'button-outline'" :to="action.to">{{ action.label }}</RouterLink>
            <a v-for="action in page.externalActions" :key="action.label" class="button button-gradient" :href="action.href" target="_blank" rel="noreferrer">{{ action.label }} ↗</a>
          </div>
        </div>
        <div v-if="page.heroMedia" class="hero-media" :class="page.key === 'dronevision' ? 'dark-media' : 'gradient-panel'" role="img" :aria-label="page.heroMedia"><span class="media-chip">FLS LAB</span><span class="media-caption">{{ page.heroMedia }}</span></div>
      </section>

      <template v-if="page.key === 'contact'">
        <div class="contact-layout">
          <form class="contact-form" @submit.prevent="submitContact">
            <h2>Tell us what you are exploring.</h2>
            <label>Name<input v-model="form.name" name="name" autocomplete="name" required /></label>
            <label>Organization<input v-model="form.organization" name="organization" autocomplete="organization" /></label>
            <label>Email<input v-model="form.email" name="email" type="email" autocomplete="email" required /></label>
            <label>Inquiry type<select v-model="form.topic" name="topic"><option>General inquiry</option><option>Dronevision demo</option><option>Tile</option><option>Research partnership</option></select></label>
            <label>Message<textarea v-model="form.message" name="message" rows="4" required></textarea></label>
            <button class="button button-gradient" type="submit">Preview message details</button>
            <p class="form-note" role="status">{{ formStatus }}</p>
          </form>
          <aside><h2>How can we help?</h2><article v-for="item in page.cards" :key="item.title" class="help-card"><h3>{{ item.title }}</h3><p>{{ item.description }}</p></article></aside>
        </div>
      </template>

      <template v-else>
        <section v-for="section in page.sections" :key="section.title" class="info-section">
          <div class="section-heading"><p class="eyebrow">{{ section.eyebrow }}</p><h2>{{ section.title }}</h2><p>{{ section.description }}</p></div>
          <div class="info-card-grid" :class="`columns-${section.items.length > 3 ? 3 : 2}`">
            <article v-for="item in section.items" :key="item.title" class="content-card">
              <span class="card-art" :class="item.art || ''"><span></span></span>
              <p v-if="item.label" class="eyebrow card-eyebrow">{{ item.label }}</p><h3>{{ item.title }}</h3><p>{{ item.description }}</p>
              <RouterLink v-if="item.to" class="text-link" :to="item.to">{{ item.link || 'Explore' }} →</RouterLink>
              <a v-else-if="item.href" class="text-link" :href="item.href" target="_blank" rel="noreferrer">{{ item.link || 'Explore' }} ↗</a>
              <span v-else-if="item.link" class="text-link">{{ item.link }}</span>
            </article>
          </div>
        </section>
        <section v-if="page.callout" class="page-callout"><h2>{{ page.callout }}</h2><RouterLink class="button button-gradient" to="/contact">Contact FLS Lab</RouterLink></section>
      </template>
    </template>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();
const form = reactive({ name: "", organization: "", email: "", topic: "General inquiry", message: "" });
const formStatus = ref("Form delivery is not configured yet. Your message will not be sent from this preview.");
function submitContact() {
  formStatus.value = `Preview only: ${form.topic} from ${form.name || "your name"}. Delivery still needs to be connected; nothing was sent.`;
}

const pages = {
  dronevision: {
    key: "dronevision", eyebrow: "FLS Lab product", title: "Dronevision",
    intro: "A physical 3D visualization platform that uses coordinated flying light specks to bring digital forms into shared space.",
    heroMedia: "Dronevision demo / looping drone swarm video", actions: [{ label: "Request a demo", to: "/contact", primary: true }, { label: "Explore capabilities", to: "/technology" }],
    sections: [
      { eyebrow: "Spatial visualization", title: "See ideas in space", description: "Explore form, motion, and spatial relationships before physical fabrication.", items: [{ title: "Dronevision CAD / physical render", description: "A visual preview of coordinated flying light specks in shared space.", art: "art-blue" }] },
      { eyebrow: "Capabilities", title: "Built for ideas in motion", description: "A physical research platform for interactive 3D visualization.", items: [{ title: "Coordinated flight", description: "Multiple flying light specks work together within a shared volume." }, { title: "Illuminated form", description: "Addressable lighting primitives make lines and shapes visible." }, { title: "Human interaction", description: "Explore ways people can engage with spatial displays." }] },
      { eyebrow: "Research", title: "From model to motion", description: "Explore research and demonstrations behind the platform.", items: [{ title: "LightBender", description: "A flying light speck designed to illuminate mid-air line drawing.", to: "/technology" }, { title: "Publications", description: "Read research on Dronevision and spatial computing.", to: "/publications" }] },
    ], callout: "Bring the next idea into view.",
  },
  tiles: {
    key: "tiles", eyebrow: "FLS Lab product", title: "Tile",
    intro: "A portable visual reference surface for flexible UAV and robotics localization experiments.", heroMedia: "Tile CAD / physical render",
    actions: [{ label: "Ask about Tile", to: "/contact", primary: true }, { label: "Contact FLS Lab", to: "/contact" }],
    sections: [
      { eyebrow: "Spatial visualization", title: "See ideas in space", description: "Tile supports flexible experiments through a portable reference surface.", items: [{ title: "Tile reference surface", description: "A visual preview of the localization platform.", art: "art-blue" }] },
      { eyebrow: "Capabilities", title: "Built for ideas in motion", description: "Move from setup to experiment in a shared spatial environment.", items: [{ title: "Portable setup", description: "A compact reference surface for experiments." }, { title: "Flexible test environment", description: "Adapt experiments to different layouts." }, { title: "Localization research", description: "Explore spatial positioning for aerial robotics." }, { title: "Robotics integration", description: "Support research workflows for UAVs and robotics." }] },
      { eyebrow: "How Tile works", title: "How Tile works", description: "A simple collaborative path from a digital model to a live spatial setup.", items: [{ title: "Place Tile", description: "Set up the visual reference." }, { title: "Observe", description: "Capture observations of the environment." }, { title: "Determine position", description: "Estimate spatial position." }, { title: "Run experiment", description: "Use the setup in a research workflow." }] },
      { eyebrow: "Applications", title: "Where Tile fits", description: "Explore flexible starting points for products, experiments, and learning.", items: [{ title: "Robotics research visual", description: "Visualize research experiments." }, { title: "UAV development visual", description: "Explore UAV development." }, { title: "Education & lab testing visual", description: "Support education and lab testing." }] },
    ], callout: "Make localization more flexible.",
  },
  products: {
    key: "products", eyebrow: "FLS Lab products", title: "Explore our products",
    intro: "Choose a platform to learn more about how FLS Lab brings digital ideas into physical space.",
    sections: [{ eyebrow: "Platforms", title: "Explore the work behind the products", description: "Research tools and experiences that inform the FLS Lab product direction.", items: [{ title: "Dronevision", label: "Flagship product", description: "A physical 3D visualization platform using coordinated flying light specks.", to: "/dronevision", art: "art-dark" }, { title: "Tile", label: "Localization platform", description: "A portable visual reference surface for flexible experiments.", to: "/tiles", art: "art-blue" }] }],
    callout: "Two ways to explore spatial technology.",
  },
  about: {
    key: "about", eyebrow: "FLS Lab", title: "About FLS Lab",
    intro: "We explore how light, robotics, and spatial computing can bring digital ideas into the physical world.",
    sections: [
      { eyebrow: "Our mission", title: "From research to real-world tools", description: "FLS Lab studies interactive 3D visualization, flying light specks, and spatial computing. The work connects foundational research with systems people can explore and use.", items: [{ title: "Research", description: "Investigate the systems, algorithms, and interactions behind spatial displays.", to: "/technology" }, { title: "Visualization", description: "Study new ways to make digital ideas visible in shared physical space.", to: "/dronevision" }, { title: "Spatial computing", description: "Explore how people, devices, and environments can interact.", to: "/tiles" }] },
      { eyebrow: "Meet the lab", title: "People behind the work", description: "Learn about the faculty, students, and alumni contributing to FLS Lab research.", items: [{ title: "Personnel", description: "Meet current lab members and affiliated faculty.", to: "/personnel" }, { title: "Alumni", description: "See former students and collaborators.", to: "/alumni" }, { title: "Publications", description: "Read the research behind the lab's projects.", to: "/publications" }, { title: "Announcements", description: "Follow project news and lab milestones.", to: "/announcements" }] },
    ], callout: "Keep exploring FLS Lab research.",
  },
  resources: {
    key: "resources", eyebrow: "FLS Lab", title: "Resources", intro: "Explore the research, people, tools, and updates behind FLS Lab.",
    sections: [{ eyebrow: "Featured", title: "Explore the work", description: "Research stories and experiments that inform the FLS Lab product direction.", items: [{ title: "About FLS Lab", description: "The people, questions, and mission behind the lab.", to: "/about" }, { title: "Publications", description: "Research on spatial interaction and physical visualization.", to: "/publications" }, { title: "Announcements", description: "Milestones, project progress, and lab updates.", to: "/announcements" }, { title: "GitHub", description: "Open software, experiments, and technical resources.", to: "/github" }] }, { eyebrow: "Research", title: "Explore work behind the products", description: "Research themes and technology that inform FLS Lab products.", items: [{ title: "Dronevision research", description: "A visual editorial entry point for research.", to: "/dronevision" }, { title: "Flying Light Specks", description: "A visual editorial entry point for FLS research.", to: "/technology" }] }], callout: "Have a question? Contact FLS Lab.",
  },
  github: {
    key: "github", eyebrow: "External resource", title: "Open tools and code", intro: "Explore public FLS Lab software, experiments, and technical resources on GitHub.",
    externalActions: [{ label: "Visit FLS Lab on GitHub", href: "https://github.com/flyinglightspeck" }],
    sections: [{ eyebrow: "Open research", title: "Code, experiments, and documentation—open for exploration.", description: "Visit the lab's public GitHub organization.", items: [{ title: "FLS Lab GitHub", description: "Open software, experiments, and technical resources.", href: "https://github.com/flyinglightspeck", link: "Visit GitHub", art: "art-blue" }] }],
    callout: "Explore the work behind the research.",
  },
  contact: {
    key: "contact", eyebrow: "Start a conversation", title: "Let’s build in three dimensions.", intro: "Connect with FLS Lab about product demonstrations, research collaboration, or industry partnerships.",
    cards: [{ title: "Request a Dronevision demo", description: "A focused starting point for the conversation." }, { title: "Ask about Tile", description: "A focused starting point for the conversation." }, { title: "Explore a research partnership", description: "A focused starting point for the conversation." }],
  },
};
pages.notFound = { key: "notFound", title: "Page not found", eyebrow: "404", intro: "Try one of the links below to continue exploring FLS Lab." };
const page = computed(() => pages[route.meta.page] || pages.notFound);
</script>

<style scoped>
.design-hero { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:42px; padding:16px 0 72px; }
.hero-media { min-height:320px; border-radius:18px; position:relative; display:flex; align-items:flex-end; padding:24px; color:#0e1729; overflow:hidden; }
.dark-media { background:radial-gradient(ellipse at 55% 100%,#134477,#0b111b 65%); color:white; }
.media-chip { align-self:flex-start; position:absolute; top:20px; left:20px; padding:7px 12px; border-radius:999px; background:#12b8ad; color:white; font-size:11px; font-weight:700; }
.media-caption { font-size:17px; font-weight:650; }
.hero-actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:24px; }
.button-outline { color:#078da4; border:1px solid #a6d8df; background:white; }
.info-section { padding:40px 0 32px; }
.section-heading h2 { margin-bottom:8px; }
.section-heading > p:not(.eyebrow) { color:#58718a; }
.info-card-grid { display:grid; gap:18px; }
.columns-2 { grid-template-columns:repeat(2,minmax(0,1fr)); }.columns-3 { grid-template-columns:repeat(3,minmax(0,1fr)); }
.content-card { overflow:hidden; padding:16px; border:1px solid #e8eef4; border-radius:16px; background:white; }
.card-art { height:160px; margin-bottom:18px; display:grid; place-items:center; border-radius:12px; background:linear-gradient(110deg,#e0faf7,#d4edfc 52%,#e0e0fc); }
.card-art span { width:44px; height:12px; border-radius:999px; background:#12b8ad; }
.card-art.art-dark { background:radial-gradient(ellipse at bottom,#1c5080,#0b111b 72%); }
.card-art.art-blue { background:linear-gradient(110deg,#e0faf7,#d4edfc 52%,#e0e0fc); }
.card-art.wave-art { background:linear-gradient(110deg,#5544a7,#458fe2,#12b8ad); }
.card-eyebrow { margin:0 0 6px; }
.content-card h3 { margin:0 0 8px; font-size:19px; }
.content-card > p:not(.eyebrow) { color:#60758a; font-size:14px; line-height:1.55; }
.text-link { display:inline-block; margin-top:8px; color:#078da4; text-decoration:none; font-weight:650; font-size:14px; }
.page-callout { margin:48px 0 16px; padding:32px 36px; display:flex; align-items:center; justify-content:space-between; gap:20px; background:#d4e9fb; border-radius:16px; }
.page-callout h2 { font-size:24px; }
.quick-links { display:flex; flex-wrap:wrap; gap:16px; margin-top:30px; }
.contact-layout { display:grid; grid-template-columns:1.2fr .8fr; gap:40px; padding:4px 0 72px; }
.contact-form { display:grid; gap:18px; padding:30px; border-radius:18px; background:white; border:1px solid #edf0f3; }
.contact-form h2,.contact-layout aside h2 { margin:0 0 8px; font-size:23px; }
.contact-form label { display:grid; gap:7px; color:#27374c; font-weight:600; font-size:13px; }
.contact-form input,.contact-form textarea,.contact-form select { width:100%; padding:12px 14px; border:1px solid #d8e0e7; border-radius:8px; background:#f7f9fb; color:#0e1729; }
.form-note { margin:0; color:#567089; font-size:13px; line-height:1.5; }
.help-card { margin-top:18px; padding:20px; background:#d4e9fb; border-radius:14px; }.help-card h3 { margin:0 0 8px; font-size:17px; }.help-card p { margin:0; color:#58718a; font-size:14px; }
@media(max-width:760px){.design-hero,.contact-layout{grid-template-columns:1fr;gap:24px}.hero-media{min-height:250px}.columns-2,.columns-3{grid-template-columns:1fr}.info-section{padding-top:26px}.page-callout{align-items:flex-start;flex-direction:column;padding:26px}}
</style>
