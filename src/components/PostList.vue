<template>
    <h1>Listado de Posts</h1>
    <ul>
        <li v-for="post of posts" :key="post.id">{{ post.title }}</li>
    </ul>
</template>

<script setup lang="ts">
    import PostService from '@/services/PostService';
    import { onMounted } from 'vue';
    const service=new PostService()
    const posts=service.getPosts()

    onMounted(async ()=>{
        await service.fetchAll()
    })

</script>

