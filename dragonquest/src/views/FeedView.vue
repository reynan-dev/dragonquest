<template>
  <div class="feedBody">
    
    <SideComponent />

    <div class="feedMain"></div>
  </div>
</template>

<script>
import SideComponent from "@/components/SideComponent.vue";

export default {
  name: "SideComponent",
  components: {
    SideComponent,
  },
};
</script>

<style scoped>
.feedBody {
  width: 80%;
  padding-left: 10%;
}
</style>