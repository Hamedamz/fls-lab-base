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
                <a v-if="pub.additionalLink" :href="pub.additionalLink" target="_blank" class="additional-link">
                  {{ pub.additionalLinkText }}
                </a>
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
        <a href="https://urldefense.com/v3/__https://www.nsf.gov/awardsearch/showAward?AWD_ID=2425754&HistoricalAwards=false__;!!LIr3w8kk_Xxm!rBmrWhQdSpF4Abq7sdxr1i6DrvsTB3WgkYk6D6W7o4csESD-1lkX-mk8csyu-v2EY9JAG5mTc9mFUT7h$" target="_blank" class="nsf-logo-link">
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
  citeBeforeLink: 'Hamed Alimohammadzadeh, Shuqin Zhu, and Shahram Ghandeharizadeh. 2025. Techniques to Conceal Dark Standby Flying Light Specks. ',
  conferenceTitle: 'ACM Trans. Multimedia Comput. Commun. Appl.',
  conferenceLink: '',
  location: '',
  citeAfterLink: ' Just Accepted (April 2025). ',
  additionalLink: 'https://doi.org/10.1145/3724399',
  additionalLinkText: 'https://doi.org/10.1145/3724399',
  pdf: 'https://dl.acm.org/doi/pdf/10.1145/3724399',
},
{
  citeBeforeLink: 'H. Alimohammadzadeh and S. Ghandeharizadeh.  Swazure: Swarm Measurement of Pose for Flying Light Specks.  In ',
  conferenceTitle: 'Second International Conference on Holodecks',
  conferenceLink: 'https://www.holodecks.quest/agenda-2024',
  location: ', Los Angeles, USA',
  citeAfterLink: ', December 19, 2024.',
  pdf: 'https://www.holodecks.quest/_files/ugd/fb2888_c1bca9ab88a247579a554a3b901ec688.pdf',
},
{
  citeBeforeLink: 'S. Zhu and S. Ghandeharizadeh.  Circular Flight Patterns for Dronevision.  In ',
  conferenceTitle: 'Second International Conference on Holodecks',
  conferenceLink: 'https://www.holodecks.quest/agenda-2024',
  location: ', Los Angeles, USA',
  citeAfterLink: ', December 19, 2024.',
  pdf: 'https://www.holodecks.quest/_files/ugd/9de2a3_56d6674c4495453e9d14b94c66603dd8.pdf',
  videoLink: 'https://www.youtube.com/watch?v=H60r2oTPB4k',
  videoText: 'Video',
},
{
  citeBeforeLink: 'H. Alimohammadzadeh and S. Ghandeharizadeh. Swarical: An Integrated Hierarchical Approach to Localizing Flying Light Specks. In ACM Multimedia, Melbourne, Australia, October 2024.',
  conferenceTitle: '',
  location: '',
  citeAfterLink: '',
  pdf: 'https://dl.acm.org/doi/10.1145/3664647.3681080',
},
{
  citeBeforeLink: 'H. Alimohammadzadeh, S. Zhu, J. Bai and S. Ghandeharizadeh. Reliability Groups with Standby Flying Light Specks. In ACM MMSys, Bari, Italy, April 15-18, 2024.',
  conferenceTitle: '',
  location: '',
  citeAfterLink: '',
  pdf: 'https://dl.acm.org/doi/pdf/10.1145/3625468.3647606',
},
{
  citeBeforeLink: 'Y. Chen, H. Alimohammadzadeh, S. Ghandeharizadeh, and H. Culbertson. Force-Feedback Through Touch-based Interactions With a Nanocopter. In IEEE Haptics Symposium, Long Beach, CA, April 7-10, 2024. ',
  videoLink: 'https://youtu.be/5vvzaATa0lg',
  videoText: 'Video',
  pdf: 'https://ieeexplore.ieee.org/document/10520851'
},
{
  citeBeforeLink: 'H. Alimohammadzadeh, R. Bernard, Y. Chen, T. Phan, P. Singh, S. Zhu, H. Culbertson, and S. Ghandeharizadeh. Dronevision: An Experimental 3D Testbed for Flying Light Specks. In ',
  conferenceLink: 'https://www.holodecks.quest/agenda-2023',
  conferenceTitle: 'the First International Conference on Holodecks',
  location: ', Los Angeles, USA',
  citeAfterLink: ', December 15, 2023. (arXiv 2308.10121, August 2023.)',
  pdf: 'https://arxiv.org/pdf/2308.10121.pdf',
},
{
    citeBeforeLink: 'S. Ghandeharizadeh and V. Oria. Virtual Reality, Augmented Reality, Mixed Reality, Holograms and Holodecks. In ',
    conferenceLink: 'https://www.holodecks.quest/agenda-2023',
    conferenceTitle: 'the First International Conference on Holodecks',
    location: ', Los Angeles, USA',
    citeAfterLink: ', December 15, 2023.',
    pdf: 'https://urldefense.com/v3/__https://www.holodecks.quest/_files/ugd/fb2888_2ab188133a214c3287ed8be3cc71ae6f.pdf?index=true__;!!LIr3w8kk_Xxm!vROpUlRfPc7mWWv-phZt38Pwb-Vba5Nk-l2ZdQ6a-afV3DPw72lMXyTFxit2mxoK6q1wsJr-FHqeojOQ$',
    sourceCode: ''
  },

  {
    citeBeforeLink: 'Yang Chen; Hamed Alimohammadzadeh; Shahram Ghandeharizadeh; Heather Culbertson. Towards a Stable 3D Physical Human-Drone Interaction. In ',
    conferenceLink: 'https://www.holodecks.quest/agenda-2023',
    conferenceTitle: 'the First International Conference on Holodecks',
    location: ', Los Angeles, USA',
    citeAfterLink: ', December 15, 2023.',
    pdf: 'https://urldefense.com/v3/__https://www.holodecks.quest/_files/ugd/fb2888_25a58674ba6c49bea8e53b76bb7a106d.pdf?index=true__;!!LIr3w8kk_Xxm!vgCwBBL0JOp6tzDK2oc1x19Iof3hBakz20M22Yo_e4h5QvprwATjWvj6ThE7tW50SBCmVtozFP9bCmEI$',
    sourceCode: ''
  },

  {
    citeBeforeLink: 'H. Alimohammadzadeh and S. Ghandeharizadeh. SwarMer: A Decentralized Localization Framework for Flying Light Specks. In ',
    conferenceLink: 'https://www.holodecks.quest/agenda-2023',
    conferenceTitle: 'the First International Conference on Holodecks',
    location: ', Los Angeles, USA',
    citeAfterLink: ', December 15, 2023.',
    pdf: 'https://urldefense.com/v3/__https://www.holodecks.quest/_files/ugd/fb2888_f3e51e31182f4cd9b61204547b6b89f3.pdf?index=true__;!!LIr3w8kk_Xxm!vROpUlRfPc7mWWv-phZt38Pwb-Vba5Nk-l2ZdQ6a-afV3DPw72lMXyTFxit2mxoK6q1wsJr-FOSnimgW$',
    sourceCode: ''
  },
{
  citeBeforeLink: 'S. Zhu and S. Ghandeharizadeh. Flight Patterns for Swarms of Drones. In ',
  conferenceLink: 'https://www.holodecks.quest/agenda-2023',
  conferenceTitle: 'the First International Conference on Holodecks',
  location: ', Los Angeles, USA',
  citeAfterLink: ', December 15, 2023.',
  pdf: 'https://urldefense.com/v3/__https://www.holodecks.quest/_files/ugd/fb2888_3e3f436ac55a443db18d89604f7f369b.pdf?index=true__;!!LIr3w8kk_Xxm!vROpUlRfPc7mWWv-phZt38Pwb-Vba5Nk-l2ZdQ6a-afV3DPw72lMXyTFxit2mxoK6q1wsJr-FBKTp2F9$',
  sourceCode: ''
},
{
  citeBeforeLink: 'N. Yazdani, H. Alimohammadzadeh, and S. Ghandeharizadeh. A Conceptual Model of Intelligent Multimedia Data Rendered using Flying Light Specks (Invited Paper). In ',
  conferenceLink: 'https://www.holodecks.quest/agenda-2023',
  conferenceTitle: 'the First International Conference on Holodecks',
  location: ', Los Angeles, USA',
  citeAfterLink: ', December 15, 2023.',
  pdf: 'https://urldefense.com/v3/__https://www.holodecks.quest/_files/ugd/fb2888_4cf85d8951b241d1a86a378af2144cdb.pdf?index=true__;!!LIr3w8kk_Xxm!vROpUlRfPc7mWWv-phZt38Pwb-Vba5Nk-l2ZdQ6a-afV3DPw72lMXyTFxit2mxoK6q1wsJr-FLm-veSV$',
  sourceCode: ''
},
  {
    citeBeforeLink: 'H. Alimohammadzadeh, H. Culbertson, and S. Ghandeharizadeh. An Evaluation of Decentralized Group Formation Techniques for Flying Light Specks. In ACM Multimedia Asia, Taipei, Taiwan, December 6-8, 2023.',
    pdf: 'https://urldefense.com/v3/__https://dl.acm.org/doi/pdf/10.1145/3595916.3626460__;!!LIr3w8kk_Xxm!vROpUlRfPc7mWWv-phZt38Pwb-Vba5Nk-l2ZdQ6a-afV3DPw72lMXyTFxit2mxoK6q1wsJr-FAPuISni$',
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

.conference-link, .pdf-link, .source-code-link, .video-link, .additional-link {
  color: #63b3ed; /* Blue color for the links */
  text-decoration: none; /* Removes underline */
}

.conference-link:hover, .pdf-link:hover, .source-code-link:hover, .video-link:hover, .additional-link:hover {
  color: #3182ce; /* Darker blue on hover */
}
</style>
