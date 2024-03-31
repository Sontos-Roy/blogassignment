<script setup>
import "@/assets/teamview.css";
// import { ref } from "vue";
// import Modal from "../components/teams/Modal.vue";
// import BlogMember from "../components/teams/BlogMember.vue";
// import team from "@/team.json";
import BlogHeader from "../components/teams/BlogHeader.vue";
import BlogMain from "../components/teams/BlogMain.vue";
import { useBlogStore } from "../stores/BlogStore.js";

let blogs = useBlogStore();

blogs.fill();

</script>

<template>
  <main>
    <BlogHeader/>  
    <BlogMain/>  
  </main>
</template>
