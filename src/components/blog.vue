<template>
  <div class=" blog col-4" @click="selectBlog()">
    <div class="card bg-info card-cascade wider mb-4">
      <div class="view view-cascade overlay">
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

      <div class="card-body card-body-cascade text-center shadow">
        <h5 class="blue-text pb-2">
          <strong>{{blogData.title}}</strong>
        </h5>
        <hr />

        <h4 class="card-title">
          <strong>{{blogData.creator.name}}</strong>
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  props: ["blogData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    selectBlog() {
      this.$router.push({
        name: "Blog",
        params: { blogId: this.blogData._id }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>