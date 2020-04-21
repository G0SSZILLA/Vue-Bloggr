<template>
  <div class="createComment col-6 m-auto">
    <form @submit.prevent="addComment()">
      <div class="form-group">
        <input
          type="text"
          name="body"
          v-model="newComment.body"
          class="form-control"
          required 
          placeholder="comment here..."
        />
        <button type="sumbit" class="btn btn-primary border-0 shadow">Send</button>
      
      
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "createComment",

  data() {
    return {
      newComment: {}
    };
  },
  computed: {
    activeBlogId() {
      return this.$store.state.activeBlog.blog._id;
    }
  },
  methods: {
    addComment() {
      this.newComment.blogId = this.activeBlogId;
      this.$store.dispatch("addComment", this.newComment);
      this.newComment = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>