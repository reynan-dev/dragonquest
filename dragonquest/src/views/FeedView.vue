<template>
  <div class="feedBody">
    
    <SidebarComponent :photo="'http://data.pixiz.com/output/user/frame/preview/api/big/5/2/9/3/2633925_7c673.jpg'" :name="'Reynan'" :username="'thereynan'"/>

    <div class="feedMain">
      <NewPostComponent />
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/SidebarComponent.vue'
import NewPostComponent from '@/components/NewPostComponent.vue'

export default {
  name: 'FeedView',
  components: {
    SidebarComponent, NewPostComponent,
  }
}
</script>

<style scoped>
.feedBody {
  width: 80%;
  padding-left: 10%;
}
</style>