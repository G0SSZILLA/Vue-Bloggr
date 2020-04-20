<template>
    <div class="comment container-fluid">
<div class="row">
    <div class="col-10 text-center m-auto">
        <div class="card card-body">
            <h3>{{commentData.body}}</h3>
            <p>{{commentData.creator.name}}</p>
            <hr>
            <button v-if="$auth.userInfo.email == commentData.creator.email" class="btn btn-danger" @click="deleteComment()">Delete</button>
        </div>
    </div>
</div>

    </div>
</template>


<script>

export default {
    name: 'comment',
    props:['commentData'],
    data(){
        return {
            // editing: false
        }
    },
    computed:{
//         blog(){
//             return this.$store.state.activeBlog.blog
//         },
// comments(){
//     return this.$store.state.activeBlog.comments
// },
    },
    methods:{
        // mounted(){
        //     this.$store.dispatch("getBlog", this.$route.params.blogId)
        // },
//         editComment(){
//             this.$store.dispatch('editComment',this.commentData)
//             this.editing = false
//         },
        deleteComment(){
this.$store.dispatch('deleteComment', this.commentData)
        }
    },
    components:{}
}
</script>


<style scoped>

</style>