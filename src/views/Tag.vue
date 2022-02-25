<template>
  <div class="tag">
     <div v-if="error">{{error}}</div>
     <div v-if="filteredPosts.length">
      <PostList :posts="filteredPosts"/>
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

export default {
   props: ['tag'],
   components: { PostList, Spinner },
   setup(){
      const { posts, error, load } = getPosts()
      load()
      const route = useRoute()
      const filteredPosts = computed(() => {
         return posts.value.filter((post) => {
            return post.tags.includes(route.params.tag)
         })
      })
      console.log(filteredPosts);
      return { filteredPosts, error }
   }
}

</script>

<style>

</style>