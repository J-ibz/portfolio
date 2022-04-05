<template>
  <HeaderSection />
  <HeroProjectSection />
  <DescriptionProjectSection />
  <SuggestionSection />
  <ContactSection />
  <FooterSection />
  <MobileNav />
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import HeroProjectSection from "@/components/HeroProjectSection.vue";
import DescriptionProjectSection from "@/components/DescriptionProjectSection.vue";
import SuggestionSection from "@/components/SuggestionSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import FooterSection from "@/components/FooterSection.vue";
import MobileNav from "@/components/MobileNav.vue";

export default {
  name: "ProjectView",
  props: ["id", "title"],
  components: { HeaderSection, HeroProjectSection, DescriptionProjectSection, SuggestionSection, ContactSection, FooterSection, MobileNav },

  created() {
    this.$store.dispatch("setCurrentProject", this.id);
  },
  computed: {
    project: function () {
      return this.$store.getters.getCurrentProject;
    },
  },
  mounted() {
    document.title = `Projet - ${this.$route.params.id}`;
  },
};
</script>

<style scoped></style>
