<template>
  <div class="feedBody">
    <SidebarComponent
      :photo="'http://data.pixiz.com/output/user/frame/preview/api/big/5/2/9/3/2633925_7c673.jpg'"
      :name="'Reynan'"
      :username="'thereynan'"
    />

    <div class="feedMain">
      <div class="feedTitle">
        <span class="feedTitle">Feed</span>
      </div>
      <div class="newPost">
        <NewPostComponent />
      </div>
      <div class="feedPost">
        
      </div>
    </div>
  </div>
  <div class="newPostBox" v-if="1 != 1"><NewPostBox /></div>
          
</template>

<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import NewPostComponent from "@/components/NewPostComponent.vue";
import NewPostBox from "@/components/NewPostBox.vue";


export default {
  name: "FeedView",
  components: {
    SidebarComponent,
    NewPostComponent,
    NewPostBox,
  },
};
</script>

<style scoped>
.feedTitle {
  color: var(--colortext);
  font-weight: 900;
  width: 100%;
  font-size: 30px;
  align-items: center;
  padding: 20px 10px 0px 10px;
}

.feedBody {
  width: 80%;
  padding-left: 10%;
  display: flex;
}

.feedBody .feedMain {
  width: 80%;
  position: relative;
  border-right: 2px solid #a7adba;
  height: 100vh;
}

.feedBody .feedMain .newPost {
  padding: 10px 50px;
  border-bottom: 2px solid var(--colorboder);
}
</style>