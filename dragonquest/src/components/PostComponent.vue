<template>
  <div class="post">
    <div class="postImg" v-if="POSTimg === true">
      <img :src="POSTimgURL" :alt="POSTstory"   />
    </div>
    <div class="postData">
      <div class="postProfile">
        <div class="profileImg">
          <img :src="USERphoto" :alt="'profile of ' + USERname" />
        </div>
        <div class="profileUser">
          <span class="name nameProfile">{{ USERname }}</span>
          <span class="username usernameProfile">{{ USERusername }}</span>
        </div>
      </div>
      <div class="postOptions">
        <div class="postComment">
          <i class="fa-solid fa-comment"></i> <span>{{ POSTqteComment }}</span>
        </div>
        <div class="postLike">
          <i class="fa-solid fa-thumbs-up"></i> <span>{{ POSTqteLike }}</span>
        </div>
      </div>
    </div>
    <div class="postStory">
      {{ POSTstory }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PostComponent",
  props: {
    POSTimg: Boolean,
    POSTimgURL: String,
    POSTstory: String,
    POSTqteLike: String,
    POSTqteComment: String,
    USERname: String,
    USERusername: String,
    USERphoto: String,
  },
};
</script>

<style>
.post {
  width: 100%;
  align-items: center;
  justify-content: center;
}

.postImg {
  width: 100%;
  max-height: 300px;
  min-width: 100%;
}

.postImg img {
  border-radius: 20px;
  object-fit: cover;
  object-position: center;
  max-height: 300px;
  width: 100%;
}

.postData {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding: 20px 20px 10px 20px;
}

.postProfile {
  width: 60%;
  position: relative;
  display: flex;
  align-items: center;
}

.postProfile .profileImg {
  width: fit-content;
  position: relative;
}

.postProfile .profileImg img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: relative;
  object-position: center;
  position: relative;
}

.postProfile .profileUser {
  width: 60%;
  position: relative;
  margin-left: 15px;
}

.postProfile .profileUser .name {
  font-size: large;
  margin-left: 5px;
}
.postProfile .profileUser .username {
  font-size: medium;
  margin-left: 5px;
}

.postOptions {
  width: 40%;
  position: relative;
  justify-content: right;
  display: flex;
}

.postOptions .postComment,
.postLike {
  font-size: x-large;
  position: relative;
  width: 30%;
  align-items: center;
  display: flex;
}

.postOptions .postComment span,
.postLike span {
  font-size: medium;
  margin-left: 5px;
}

.postStory {
  width: 95%;
  padding: 0px 20px 0px 20px;
}
</style>