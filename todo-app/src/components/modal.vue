<template>
  <div v-if="view" @click="hide()" class="modal">
    <div class="modal__content" @click.stop.prevent>
      <h4>Product</h4>
      <input type="text" placeholder="enter product" v-model="product.name" />
      <br />
      <input type="text" placeholder="enter price" v-model="product.price" />
      <br />
      <button class="btn btn-outline-success" @click="save()">
        SUBMIT
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["view"],
  data() {
    return {
      product: {
        name: "",
        price: "",
      },
    };
  },
  methods: {
    hide() {
      this.$emit("hide", false);
    },
    save() {
      if (this.product.name && this.product.price) {
        this.$store.dispatch("addContent", this.product);
        this.hide();
        this.resetPayload();
      } else {
        alert("Please add product & price");
      }
    },
    resetPayload() {
      this.product = {
        name: "",
        price: "",
      };
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  background-color: #333333b5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__content {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 0px 10px #333;
  padding: 50px;
}
</style>
