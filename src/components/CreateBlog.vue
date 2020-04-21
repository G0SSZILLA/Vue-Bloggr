<template>
  <div class="create-blog col-6 m-auto pb-5">
    <!-- Card -->
    <div class="card shadow bg-white">
      <!-- Card content -->
      <div class="card-body text-center">
        <!-- Title -->
        <h4 class="card-title text-center">
          <a>Start Blogging!</a>
        </h4>
        <!-- Text -->
        <p class="card-text shadow">
          <input
            type="text"
            class="form-control"
            placeholder="Blog Title..."
            v-model="newBlog.title"
          />
          <input type="text" class="form-control" placeholder="Blog Body..." v-model="newBlog.body" />
        </p>
        <!-- Button -->
        <button type="button" class="btn btn-primary border-0 shadow" @click="addBlog()">Add Blog</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "create-blog",
  data() {
    return {
      newBlog: {}
    };
  },
  computed: {},
  methods: {
    addBlog() {
      this.$store.dispatch("addBlog", this.newBlog);
      this.addBlog = {};
    }
  },
  components: {}
};
</script>


<style scoped>
</style>