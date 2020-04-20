<template>
    <div class="Blogs">
        <div class="row m-auto">
<!-- <p>{{title}}</p> -->
        <div class="col-12 text-center">
          <div class="card col-11 mx-auto mt-5 pt-5">
            <div class="card-body">
             <div class="card-title">
            <h5>{{blog.blog.title}}</h5>
            <h5>{{blog.blog.creator.name}}</h5>
            <hr>
            <h1>{{blog.blog.body}}</h1>
            <hr>
            <createComment v-if="$auth.isAuthenticated"></createComment>
                <button class="btn btn-dark" @click="$router.push({name:'Home'})">Home</button>
                    <button class="btn btn-danger" @click="deleteBlog()">Delete Blog</button>
                <DeleteBlog v-if="$auth.isAuthenticated"/>                
                <button class="btn btn-warning" @click="editBlog()">Edit Blog</button>          
             </div>
            </div>
          </div>
            <hr>
            <comment v-for="comment in comments" :commentData="comment" :key="comment._id"/>
        </div>
        </div>
    </div>
</template>


<script>
// import Blog from "../components/blog.vue"
import createComment from "../components/CreateComment.vue"
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
    components:{createComment,comment}
}
</script>


<style scoped>

</style>
