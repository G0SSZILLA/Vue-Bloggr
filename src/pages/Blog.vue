<template>
  <div class="Blogs">
    <div class="row m-auto">
      <div class="col-12 text-center">
        <div class="card col-11 mx-auto mt-5 pt-5">
          <div class="card-body">
            <div class="card-title">
              <h5>{{blog.creator.name}}</h5>
              <hr />
              <h1>{{blog.body}}</h1>
              <hr />
              <createComment v-if="$auth.isAuthenticated"></createComment>
              <button class="btn btn-dark" @click="$router.push({name:'Home'})">Home</button>
              <button
                v-if="$auth.userInfo.email == blog.creatorEmail"
                class="btn btn-danger shadow"
                @click="deleteBlog()"
              >Delete Blog</button>
           
              <button
                v-if="$auth.userInfo.email == blog.creatorEmail"
                class="btn btn-warning shadow"
                @click="editing = !editing"
              >Edit</button>

              <form v-if="editing" @submit.prevent="editBlog">
                <input type="text" v-model="blog.body" />
                <button
                  type="submit"
                  v-if="$auth.userInfo.email == blog.creator.email"
                  class="btn btn-warning shadow"
                >Confirm</button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <comment v-for="comment in comments" :commentData="comment" :key="comment._id" />
      </div>
    </div>
  </div>
</template>


<script>
import createComment from "../components/createComment.vue";
import comment from "../components/comment.vue";
export default {
  name: "Blog",

  data() {
    return {
      editing: false
    };
  },

  mounted() {
    this.$store.dispatch("getBlog", this.$route.params.blogId);
  },

  computed: {
    blog() {
      return this.$store.state.activeBlog.blog;
    },
    comments() {
      return this.$store.state.activeBlog.comments;
    }
  },

  methods: {
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.$route.params.blogId);
      this.$router.push({ name: "Home" });
    },
    editBlog() {
      console.log(this.blog);
      this.$store.dispatch("editBlog", this.blog);
      this.editing = false;
    }
  },
  components: { comment, createComment }
};
</script>


<style scoped>
</style>
