// eslint-disable-next-line prettier/prettier
<script setup>
import "@/assets/teamview.css";
// import { ref } from "vue";
// import Modal from "../components/teams/Modal.vue";
// import TeamMember from "../components/teams/TeamMember.vue";
// import team from "@/team.json";
import { useBlogStore } from "../stores/BlogStore.js";

let team = useBlogStore();

team.fill();


// let showModal = ref(false);

// console.log(team);
</script>
<template>
  
</template>
