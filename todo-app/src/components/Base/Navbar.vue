<template>
  <div class="row header">
    <div class="col-12 flex-between">
      Interface Matters
      <button @click="toggleModal()" class="menu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
    </div>
    <modal :view="open_nav" type="navigation" @hide="toggleModal()"></modal>
  </div>
</template>

<script>
import Modal from "@/components/modal";
export default {
  components: { Modal },
  data() {
    return {
      open_nav: false,
    };
  },
  methods: {
    toggleModal() {
      this.open_nav = !this.open_nav;
    },
  },
};
</script>

<style lang="stylus" scoped>
.header
  position fixed
  width 100%
  top 0
  z-index 1
  height 87px
  background-color #fff
  padding 1em 0
  display flex
  align-items center
  justify-content center
  box-shadow 0 2px 4px rgba(0, 0, 0, 0.08)

.logo
  padding 0em 1em

.menu
  background-color transparent
  border none

.bar
  width 35px
  height 3px
  background-color green
  margin 6px 0

.flex-between
  display flex
  align-items center
  justify-content space-between

@media only screen and (min-width: 787px)
  .menu
    display none
</style>
