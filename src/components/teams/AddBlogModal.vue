<script setup>
import { useBlogStore } from '@/stores/BlogStore';
import Modal from './Modal.vue';
import { ref } from 'vue';

let blogs = useBlogStore();

let showModal = ref(false);
console.log(blogs.blogs);
</script>

<template>
    <header>
    <div class="d-flex justify-content-between mt-2">
      <button class="btn btn-rounded btn-primary" @click="showModal = true">
        Add Blog
      </button>
      <div class="logo">
        <h3>:-)<span class="text-info">{{ blogs.name }}</span>  <span class="badge bg-info rounded-circle">{{ blogs.blogs.length }}</span></h3>
      </div>
    </div>
  </header>
    <teleport to='body' >
    <Modal :show="showModal" @close="showModal = false">
    <template #default>
      <form action="">
        <input type="text" class="form-control" placeholder="Add Member Name">
        <button type="submit" class="btn btn-outline-success btn-sm mt-2">Add Member</button>
      </form>
    </template>
    </Modal>  
  </teleport>
</template>