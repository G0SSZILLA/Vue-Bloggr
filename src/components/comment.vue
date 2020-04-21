<template>
  <div class="comment container-fluid">
    <div class="row">
      <div class="col-10 text-center m-auto">
        <div v-if="editing" class="card card-body shadow">
          <h3>{{commentData.body}}</h3>
          <p>{{commentData.creator.name}}</p>
          <hr />

          <button
            v-if="$auth.userInfo.email == commentData.creator.email"
            class="btn btn-danger shadow"
            @click="deleteComment()"
          >Delete Comment</button>

          <button
            v-if="$auth.userInfo.email == commentData.creator.email"
            class="btn btn-warning shadow"
            @click="editing = !editing"
          >Edit Comment</button>
        </div>

        <form v-else @submit.prevent="editComment">
          <input type="text" v-model="commentData.body" />
          <button
            type="button"
            v-if="$auth.userInfo.email == commentData.creator.email"
            class="btn btn-success shadow"
            @click="editing = !editing"
          >Accept</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "comment",
  props: ["commentData"],
  data() {
    return {
      editing: true
    };
  },
  computed: {},
 
  methods: {
    editComment() {
      console.log(this.commentData);

      this.$store.dispatch("editComment", this.commentData);
      this.editing = true;
    },
    deleteComment() {
      this.$store.dispatch("deleteComment", this.commentData);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>