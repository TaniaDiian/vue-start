<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <h3>Post : {{ post.title }}</h3>
          <p>
            {{ post.body }}
          </p>
        </div>
        <div class="col-6">
          <h3>Coments</h3>
          <button @click="loadsComments" v-if="!loaded">Load coments</button>

          <ul v-if="comments.length" class="comments">
            <li v-for="item in comments" :key="item.id">
              <strong>name: </strong> {{ item.name }}
              <br />
              <strong>email: </strong>{{ item.email }}
              <br />
              <strong>text: </strong>{{ item.body }}
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  data: function() {
    return {
      post: {},
      comments: [],
      loaded: false
    };
  },
  created() {
    this.getPost(this.$route.params.id);
  },
  methods: {
    getPost(id) {
      this.$api.post.getPost(id).then(({ data }) => {
        this.post = data;
      });
    },

    loadsComments() {
      this.$api.comments
        .getCommentByPostId(this.$route.params.id)
        .then(({ data }) => {
          console.log({ data });
          this.comments = data;
        }).catch()
        .finally(() => (this.loaded = true));

    },
  },
};
</script>

<style lang="scss" scoped>
.comments {
  padding-left: 0;
  li {
    list-style: none;
    font-size: 12px;
  }
}
</style>
