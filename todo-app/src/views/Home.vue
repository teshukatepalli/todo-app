<template>
  <div>
    <div class="container-fluid">
      <div class="body-height">
        <div class="row">
          <div class="col-md-2 col-sm-4 sidebar-border">
            <div class="sticky">
              <Sidebar />
            </div>
          </div>
          <div class="col-md-10 bg-color">
            <div class="body-content">
              <router-view></router-view>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Base/Navbar";
import Sidebar from "../components/Base/Sidebar";
export default {
  components: { Navbar, Sidebar },
  data() {
    return {
      message: "Base component",
    };
  },
};
</script>

<style scoped>
.body-height {
  height: 100vh;
}
.sticky {
  position: sticky;
  top: 0;
}
.sidebar-border {
  border-right: 1px solid #ebebeb;
}

.body-content {
  padding-top: 100px;
  min-height: 100vh;
}
</style>
