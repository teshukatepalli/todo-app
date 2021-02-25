<template>
  <div class="Content">
    <div class="Content-heading">
      <h4>PRODUCTS</h4>
      <button class="btn btn-outline-success" @click="toggleModal()">
        + ADD
      </button>
    </div>
    <br />
    <table v-if="availability" class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">Product</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <th scope="row">{{ product.name }}</th>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No products available</p>
    <modal :view="show" type="modal" @hide="toggleModal()"></modal>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Modal from "../components/modal";
export default {
  components: { Modal },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.products,
      availability: (state) => state.products.length,
    }),
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="stylus" scoped>
.Content
  padding 10px

.Content-heading
  display flex
  align-items center
  justify-content space-between

table
  max-width 300px
</style>
