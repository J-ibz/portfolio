<template>
  <section>
    <HeaderSection />
    <AboutSection />
    <SkillsSection />
    <SuggestionSection />
    <ContactSection />
    <FooterSection />
    <MobileNav />
  </section>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import SuggestionSection from "@/components/SuggestionSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import MobileNav from "@/components/MobileNav.vue";
export default {
  name: "AboutView",
  components: { HeaderSection, AboutSection, SkillsSection, SuggestionSection, ContactSection, FooterSection, MobileNav },
};
</script>

<style scoped></style>
