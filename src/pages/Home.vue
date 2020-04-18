
<template>
      
  <div class="home container-fluid row mt-5">
        <CreateBlog v-if="$auth.isAuthenticated"/>
          <small class="text-danger" v-else>You must log in to create a blog! </small> 
    <div class="row m-auto">
            <Blog v-for="blog in blogs" :blogData="blog" :key="blog._id"/>
    </div>
    
  </div>
</template>

<script>
import CreateBlog from '../components/CreateBlog.vue'
import Blog from '../components/blog.vue'
export default {
  name: 'home',
  data(){
    return {}
  },

  mounted(){
    console.log(this.$auth);
    
    this.$store.dispatch('getBlogs')
  },
  computed:{
    blogs(){
     return this.$store.state.blogs
  },
},
  methods:{},
  components:{CreateBlog, Blog}
}

</script>


<style scoped>

</style>
