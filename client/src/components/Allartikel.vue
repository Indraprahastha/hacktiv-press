<template>
  <div class="container">
    <div class="list-group" v-for="artikels in artikel">
      <a href="#" class="list-group-item"> {{artikels.title}} </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Allartikel',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'artikel'
    ])
  },
  methods: {
    ...mapActions([
      'dapatkanArtikel'
    ])
  },
  created () {
    // dijalankan ketika pertamakali komponen di load
    this.dapatkanArtikel()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group {
  text-align: left;
}

</style>
