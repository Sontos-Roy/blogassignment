<!-- eslint-disable vue/valid-v-for -->
<script setup>
import { useBlogStore } from '@/stores/BlogStore';
import SingleBlog from './SingleBlog.vue';

let blog = useBlogStore();
</script>

<template>
<main>
    <div class="container">
      <div class="mt-3">
        <div class="row mb-2 m-0">
            <SingleBlog
              v-for="item in blog.blogs"
              :name="item.name"
              :content="item.content"
              :tag="item.tag"
              :status="item.status" />
        </div>
      </div>
    </div>
  </main>
</template>