<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <b-table
            @row-clicked="OnRowClick"
            striped
            hover
            :items="posts"
            :fields="fields"
            :busy="isBusy">
            <template v-slot:table-busy>
              <div class="text-center text-danger my-2">
                <strong>Loading...</strong>
              </div>
            </template>
          </b-table>
        </div>
        <div class="col-12">
          <b-pagination
            @change="changePage"
            :value="currentPage"
            :total-rows="rows"
            :per-page="perpage"
            align="right"
          ></b-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: function() {
    return {
      currentPage: 1,
      rows: 100,
      perpage: 10,
      posts: [],
      isBusy: false,
    };
  },
  components: {},
  created() {
    console.log(this.$api);
    this.getAllPosts();
  },
  computed: {
    reqData: function() {
      const _start = (this.currentPage - 1) * this.perpage;
      const _limit = this.perpage;
      return {
        _start,
        _limit,
      };
    },
    fields() {
      return [
        {
          key: "title",
          label: "Заголовок",
        },
        {
          key: "body",
          label: "Текст",
        },
      ];
    },
  },
  methods: {
    getAllPosts() {
      this.isBusy = true;
      this.$api.post
        .getAll(this.reqData)
        .then(({ data, config, status, headers }) => {
          this.posts = data;
        })
        .catch()
        .finally(() => (this.isBusy = false));
    },
    changePage($event) {
      this.currentPage = $event;
      this.getAllPosts();
    },
    OnRowClick($event){
      console.log($event);
      this.$router.push({ name: 'Post', params: { id: $event.id } })
    }
  },
};
</script>
