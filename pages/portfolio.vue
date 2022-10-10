<template>
  <!-- <div class="min-h-screen p-4 text-teal-400 bg-gradient-to-br from-[#292e49] via-[#536976] to-[#bbd2c5]"> -->
  <div class="min-h-screen p-4 bg-gradient-to-b from-[#afc9dc] to-[#f2f4f6] text-[#2b2b2b]">
    <!-- f6f6f6, f2f4f6, 303030 -->
    <!-- font-color => 303030, 2b2b2b, 1b1c1e, afc9dc -->
    <!-- <h1 class=" text-5xl">Who am I ?</h1> -->
    <div class="container mx-auto my-5">
      <div class="flex items-center justify-center p-5">
          <img class="h-44 w-44 rounded-full border shadow-lg" src="../assets/img/PPM_CU_1.png" alt="ppm_cu_img">
      </div>
      <!-- <div class="flex flex-row md:flex-col items-center justify-center md:p-5 mt-5"> -->
      <div class="lg:p-4 mt-5">
        <h1 class="text-4xl mb-6">About Me</h1>
        <div class="flex w-full items-center justify-center text-2xl font-light text-left">
          <div class="w-full md:w-2/3">
            <p class="p-2 mb-2">Hi. I'm Pyae Phyo Maung</p>
            <p class="p-2 mb-2">I've been working as a Web Developer for 4 years and learning to become a forntend developer with a decent UI/UX skills</p>
            <p class="p-2 mb-2">
              I'm currently developing an online gift system, as a Senior Developer, with Vue.js, Node.js, Serverless Framework and AWS Services at 
              <a class="text-[#536976] underline" href="https://scala-next.jp/">Scala Next, Inc. ( Mandalay Branch )</a>
            </p>
            <p class="p-2 mb-2">In my previous role as junior backend developer at L-future Network Technology Co., Ltd., I developed the company's portfolio website and online bus tickets service using Laravel and Vue.js </p>
          </div>
        </div>
      </div>

      <div class="lg:p-4 mt-5">
        <h1 class="text-4xl mb-6">Technical Skills</h1>
        <div class="flex flex-col w-full justify-around text-2xl font-light text-left mx-auto p-1">
          <!-- Frontend -->
          <div class="w-full md:w-auto p-1 md:px-2">
            <h3 class="text-3xl mb-3 text-center font-medium">Frontend</h3>
            <div class="flex justify-center">
              <div class="w-full md:w-2/3 py-2">
                <ul class="list-disc list-inside md:list-outside">
                  <li class="p-1">Vue.js</li>
                  <li class="p-1">Tailwind css</li>
                  <li class="p-1">Bootstrap</li>
                  <li class="p-1">Nuxt <small class="text-xs">( currently learning )</small></li>
                  <li class="p-1">Svelte <small class="text-xs">( basic knowledge )</small></li>
                  <li class="p-1">React <small class="text-xs">( basic knowledge )</small></li>
                  <li class="p-1">HTML/CSS</li>
                  <li class="p-1">JavaScript</li>
                  <li class="p-1">JQuery</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Backend -->
          <div class="w-full md:w-auto p-1 md:px-2 mt-5">
            <h3 class="text-3xl mb-3 text-center font-medium">Backend</h3>
            <div class="flex justify-center">
              <div class="w-full md:w-2/3 py-2">
                <ul class="list-disc list-inside md:list-outside">
                  <li class="p-1">Node.js/Express</li>
                  <li class="p-1">DynamoDB</li>
                  <li class="p-1">AWS SDKs</li>
                  <li class="p-1">Laravel</li>
                  <li class="p-1">REST APIs</li>
                  <li class="p-1">OpenAPI Specification</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- AWS Services -->
          <div class="w-full md:w-auto p-1 md:px-2 mt-5">
            <h3 class="text-3xl mb-3 text-center font-medium">AWS Services</h3>
            <div class="flex justify-center">
              <div class="w-full md:w-2/3 py-2">
                <ul class="list-disc list-inside md:list-outside">
                  <li class="p-1">Lambda</li>
                  <li class="p-1">S3</li>
                  <li class="p-1">Cognito</li>
                  <li class="p-1">API Gateway</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- others -->
          <div class="w-full md:w-auto p-1 md:px-2 mt-5">
            <h3 class="text-3xl mb-3 text-center font-medium">Others</h3>
            <div class="flex justify-center">
              <div class="w-full md:w-2/3 py-2">
                <ul class="list-disc list-inside md:list-outside">
                  <li class="p-1">Ubuntu</li>
                  <li class="p-1">Digital Ocean</li>
                  <li class="p-1">Git</li>
                  <li class="p-1">Scrum</li>
                  <li class="p-1">Docker <small class="text-xs">( basic knowledge )</small></li>
                </ul>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div class="lg:p-4 mt-5">
        <h1 class="text-4xl mb-6">Conclusion</h1>
        <div class="flex w-full items-center justify-center text-2xl font-light text-left">
          <div class="w-full md:w-2/3">
            <p class="p-2 mb-2">Thanks for reading down to this part</p>
            <p class="p-2 mb-2">
              I'm looking for a new opportunity as a Frontend Developer right now and if you have an open poisiton that's suited for me, you can connect me on <span class="text-[#0058B6]">LinkedIn <font-awesome-icon :icon="['fa-brands', 'fa-linkedin']" /></span>
            </p>
            <p class="p-2 mb-2">
              If you want to know how this portfolio is done, check on my <span class="text-[#000]">GitHub <font-awesome-icon :icon="['fa-brands', 'fa-github']" /></span>
                <!-- <a class="text-[#536976] underline" href="https://scala-next.jp/">Scala Next, Inc. ( Mandalay Branch )</a> -->
            </p>
            <!-- <p class="p-2 mb-2">In my previous role as junior backend developer at L-future Network Technology Co., Ltd., I developed the company's portfolio website and online bus tickets service using Laravel and Vue.js </p> -->
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
    name: 'portfolio',
    data() {
      return {
      }
    },
}
</script>

<style>
</style>