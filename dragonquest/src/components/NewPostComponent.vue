<template>
  <div class="newPostBox">
    <div class="newPostTitle">
      <h3>Tell us your story.</h3>
    </div>
    <div class="newPostInput">
      <textarea id="newpost" cols="1" rows="5" class="forms"></textarea>
    </div>
    <div class="newPostFooter">
      <div class="newPostOptions">
        <div class="newPostImg">
          <div class="imgIcon"><i class="fa-solid fa-photo-film"></i></div>
          <div class="imgInput">
            <input
              type="text"
              placeholder="Insert image's URL here"
              class="forms"
            />
          </div>
        </div>

        <div class="newPostTag"><i class="fa-solid fa-hashtag"></i></div>
      </div>
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

.newPostInput textarea {
  width: 95%;
}

.newPostFooter {
    display: flex;
    align-items: center;
      margin: 5px 1px;

}
.newPostOptions {
  display: flex;
  width: 85%;
  flex-wrap: nowrap;
  margin: 15px 20px;
}
.newPostOptions .newPostImg {
  width: fit-content;
  position: relative;
  font-size: 18px;
  color: var(--colorprincipal);
  flex-wrap: nowrap;
  max-height: 20px;
  display: flex;
  align-items: center;
}

.newPostOptions .newPostImg .imgIcon {
  width: fit-content;
}

.newPostOptions .newPostImg .imgInput {
  width: fit-content;
}

.newPostOptions .newPostImg .imgInput input {
  width: fit-content;
  height: 0px;
  margin-left: 10px;
}

.newPostOptions .newPostTag {
  width: fit-content;
  position: relative;
  font-size: 18px;
  color: var(--colorprincipal);
  margin: 0px 20px;
}
.newPostSend {
  width: 20%;
  position: relative;
  justify-content: end;
  margin-right: 10px;
}
</style>