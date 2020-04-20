<template>
    <div class="Blogs">
        <div class="row m-auto">
<!-- <p>{{title}}</p> -->
        <div class="col-12 text-center">
            <h5>{{blog.blog.title}}</h5>
            <h5>{{blog.blog.creator.name}}</h5>
            <h1>{{blog.blog.body}}</h1>
            <hr>
            <comment v-for="comment in comments" :comment="comment" :key="comment._id"/>
            
                <button class="btn btn-dark m-1" @click="$router.push({name:'Home'})">Back</button>
                <button class="btn btn-danger" @click="deleteBlog()">Delete</button>
                <DeleteBlog v-if="$auth.isAuthenticated"/>
        </div>
        </div>
    </div>
</template>


<script>
import comment from "../components/comment.vue"
export default {
    name: 'Blog',
   
    data(){
        return {
        }
    },

    mounted() {
    this.$store.dispatch("getBlog", this.$route.params.blogId);
  },

    computed:{  
 blog() {
      return this.$store.state.activeBlog;
    },
    comments(){
      return this.$store.state.activeBlog.comments
    }
    },

    methods:{
      deleteBlog() {
      this.$store.dispatch("deleteBlog",this.$route.params.blogId);
      this.$router.push({ name: "Home" });

    }
    },
    components:{comment}
}
</script>


<style scoped>

</style>
