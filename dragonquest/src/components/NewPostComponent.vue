<template>
  <div class="newPostBox">
    <div class="newPostTitle">
      <h3>Tell us your story.</h3>
    </div>
    <div class="newPostInput">
      <textarea id="newpost" cols="30" rows="5" class="forms"></textarea>
    </div>
    <div class="newPostOptions">
      <div class="newPostImg">
        <i class="fa-solid fa-photo-film"></i>
        <input type="text" placeholder="Insert image's URL here" class="forms">
      </div>
      <div class="newPostTag"><i class="fa-solid fa-hashtag"></i></div>
      <div class="newPostSend"><span class="btn">Post it</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPostComponent",
};
</script>

<style scoped>
.newPostBox {
    width: 100%;
}
.newPostTitle {
    width: 100%;
    font-weight: 400;
}
.newPostInput {
    width: 100%;
}
.newPostOptions {
    display: flex;
    width: 100%;
    flex-wrap: nowrap; 
}
.newPostOptions .newPostImg {
    width: fit-content;
    position: relative;
    font-size: 12px;
    color: var(--colorprincipal);
}

.newPostOptions .newPostTag {
    width: fit-content;
    position: relative;
    font-size: 12px;
    color: var(--colorprincipal);
}

.newPostOptions .newPostSend {
    width: fit-content;
    position: relative;
    justify-content: end;
}
</style>