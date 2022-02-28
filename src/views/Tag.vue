<template>
  <div class="tag">
     <div v-if="error">{{error}}</div>
     <div v-if="filteredPosts.length" class="layout">
      <PostList :posts="filteredPosts"/>
      <TagCloud :posts="filteredPosts"/>
     </div>
     <div v-else>
        <Spinner/>
     </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import Spinner from '../components/Spinner.vue'
import getPosts from '../composable/getPosts'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'

export default {
   props: ['tag'],
   components: { PostList, Spinner, TagCloud },
   setup(){
      const { posts, error, load } = getPosts()
      load()
      const route = useRoute()
      const filteredPosts = computed(() => {
         return posts.value.filter((post) => post.tags.includes(route.params.tag))
      })
      console.log(filteredPosts);
      return { filteredPosts, error }
   }
}

</script>

<style>
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
.tag{
   max-width: 1200px;
   margin: 0 auto;
   padding: 10px;
}
</style>