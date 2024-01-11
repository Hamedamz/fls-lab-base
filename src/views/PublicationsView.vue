<template>
  <div class="flex flex-col items-left">
    <h1 class="mb-8 text-4xl font-black text-white">Publications</h1>

    <div class="tab-content-container w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div v-for="(pub, i) in publications" :key="i" class="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <div class="flex items-baseline">
              <span class="citation-number text-white mr-2">{{ i + 1 }}.</span>
              <p class="citation-text">
                {{ pub.citeBeforeLink }}
                <a v-if="pub.conferenceLink" :href="pub.conferenceLink" target="_blank" class="conference-link">
                  {{ pub.conferenceTitle }}
                </a>
                {{ pub.location }}{{ pub.citeAfterLink }}
              </p>
            </div>
          </div>
          <div class="mt-4 flex justify-end">
            <a v-if="pub.pdf" :href="pub.pdf" target="_blank" class="pdf-link mr-2">pdf</a>
            <a v-if="pub.videoLink" :href="pub.videoLink" target="_blank" class="video-link">{{ pub.videoText }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer w-full">
      <div class="text-center">
        <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2232382&HistoricalAwards=false" target="_blank" class="nsf-logo-link">
          <img :src="NSFLogoImage" alt="NSF Logo" class="nsf-logo">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import NSFLogoImage from "@/assets/images/NSF_logo.png";
const publications = [

{
  citeBeforeLink: 'Y. Chen, H. Alimohammadzadeh, S. Ghandeharizadeh, and H. Culbertson. Force-Feedback Through Touch-based Interactions With a Nanocopter. In IEEE Haptics Symposium, Long Beach, CA, April 7-10, 2024. ',
  videoLink: 'https://youtu.be/5vvzaATa0lg',
  videoText: 'Video',
},
{
  citeBeforeLink: 'H. Alimohammadzadeh, R. Bernard, Y. Chen, T. Phan, P. Singh, S. Zhu, H. Culbertson, and S. Ghandeharizadeh. Dronevision: An Experimental 3D Testbed for Flying Light Specks. In ',
  conferenceLink: 'http://www.holodecks.quest',
  conferenceTitle: 'the First International Conference on Holodecks',
  location: ', Los Angeles, USA',
  citeAfterLink: ', December 15, 2023. (arXiv 2308.10121, August 2023.)',
  pdf: 'https://arxiv.org/pdf/2308.10121.pdf',
},
{
    citeBeforeLink: 'S. Ghandeharizadeh and V. Oria. Virtual Reality, Augmented Reality, Mixed Reality, Holograms and Holodecks. In ',
    conferenceLink: 'http://www.holodecks.quest',
    conferenceTitle: 'the First International Conference on Holodecks',
    location: ', Los Angeles, USA',
    citeAfterLink: ', December 15, 2023.',
    pdf: '',
    sourceCode: ''
  },
  {
    citeBeforeLink: 'H. Alimohammadzadeh and S. Ghandeharizadeh. SwarMer: A Decentralized Localization Framework for Flying Light Specks. In ',
    conferenceLink: 'http://www.holodecks.quest',
    conferenceTitle: 'the First International Conference on Holodecks',
    location: ', Los Angeles, USA',
    citeAfterLink: ', December 15, 2023.',
    pdf: '',
    sourceCode: ''
  },
{
  citeBeforeLink: 'S. Zhu and S. Ghandeharizadeh. Flight Patterns for Swarms of Drones. In ',
  conferenceLink: 'http://www.holodecks.quest',
  conferenceTitle: 'the First International Conference on Holodecks',
  location: ', Los Angeles, USA',
  citeAfterLink: ', December 15, 2023.',
  pdf: '',
  sourceCode: ''
},
{
  citeBeforeLink: 'N. Yazdani, H. Alimohammadzadeh, and S. Ghandeharizadeh. A Conceptual Model of Intelligent Multimedia Data Rendered using Flying Light Specks (Invited Paper). In ',
  conferenceLink: 'http://www.holodecks.quest',
  conferenceTitle: 'the First International Conference on Holodecks',
  location: ', Los Angeles, USA',
  citeAfterLink: ', December 15, 2023.',
  pdf: '',
  sourceCode: ''
},
  {
    citeBeforeLink: 'H. Alimohammadzadeh, H. Culbertson, and S. Ghandeharizadeh. An Evaluation of Decentralized Group Formation Techniques for Flying Light Specks. In ACM Multimedia Asia, Taipei, Taiwan, December 6-8, 2023.',
    pdf: '',
  },
  {
    citeBeforeLink: 'Y. Chen, H. Alimohammadzadeh, S. Ghandeharizadeh, H. Culbertson. Towards Enabling Complex Touch-based Human-Drone Interaction. In Workshop on Human Multi-Robot Interaction, IROS, October 1, 2023, Detroit, USA.',
    pdf: 'https://bpb-us-e2.wpmucdn.com/sites.uci.edu/dist/2/5230/files/2023/09/79_SCR_23_Yang_Chen.pdf',
  },
  {
    citeBeforeLink: "T. Phan, H. Alimohammadzadeh, H. Culbertson, and S. Ghandeharizadeh. An Evaluation of Three Distance Measurement Technologies for Flying Light Specks. In International Conference on Intelligent Metaverse Technologies and Applications (iMETA2023), Tartu, Estonia, September 18-20, 2023.",
    pdf: "https://arxiv.org/pdf/2308.10115.pdf",
  },
  {
    citeBeforeLink: "H. Alimohammadzadeh, D. Mehraban, and S. Ghandeharizadeh. Modeling Illumination Data with Flying Light Specks. In Proceedings of the 14th Conference on ACM Multimedia Systems, Vancouver, Canada, June 2023.",
    pdf: "https://dl.acm.org/doi/pdf/10.1145/3587819.3592544",
  },
  {
    citeBeforeLink: "S. Ghandeharizadeh. Display of 3D Illuminations using Flying Light Specks. In ACM Multimedia, Lisbon, Portugal, October 2022.",
    pdf: "https://arxiv.org/pdf/2207.08346.pdf",
  },
  {
    citeBeforeLink: "S. Ghandeharizadeh and L. Garcia. Safety in the Emerging Holodeck Applications. In CHI 2022 Workshop on Novel Challenges of Safety, Security and Privacy in Extended Reality, April 25, 2022.",
    pdf: "https://arxiv.org/pdf/2208.08398.pdf",
  },
  {
    citeBeforeLink: "S. Ghandeharizadeh. Holodeck: Immersive 3D Displays Using Swarms of Flying Light Specks. In ACM Multimedia Asia, Gold Coast, Australia, December 1-3, 2021.",
    pdf: "https://arxiv.org/pdf/2111.03657.pdf",
  },
  

];
</script>

<style scoped>
.footer {
  background-color: #2D3748;
  width: 100%;
  padding: 10px 0;
  margin-top: 20px;
}

.nsf-logo-link {
  display: inline-block;
  width: 80px;
  height: 80px;
  outline: none !important;
  border: none !important;
}

.nsf-logo {
  width: 100%;
  height: auto;
}

.citation-number {
  font-weight: bold;
}

.citation-text {
  color: white;
  margin: 0;
}

.conference-link, .pdf-link, .source-code-link {
  color: #63b3ed; /* Blue color for the links */
  text-decoration: none; /* Removes underline */
}

.conference-link:hover, .pdf-link:hover, .source-code-link:hover {
  color: #3182ce; /* Darker blue on hover */
}
</style>
