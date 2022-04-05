<template>
  <div class="parent">
    <HeaderSection />
    <HeroSection />
    <ProjectsSection />
    <ContactSection />
    <FooterSection />
    <MobileNav />
  </div>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import MobileNav from "@/components/MobileNav.vue";

export default {
  name: "HomeView",
  components: { HeroSection, HeaderSection, ProjectsSection, ContactSection, FooterSection, MobileNav },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter&family=Quicksand:wght@300;400;500;600;700&family=Roboto&display=swap");
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  --primary: black;
  --primary-lighten: #979797;
  --secondary: #303030;
  --tertiary: #0586a3bf;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
