<template>
  <div class="popupShadow">
    <div class="popupBox">
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
              <div class="imgInput" v-if=" 1 != 1">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "NewPostBox",
};
</script>

<style scoped>
.popupShadow {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.popupBox {
  width: fit-content;
  height: fit-content;
  padding: 20px;
  border-radius: 8px;
  color: var(--colorbg);
  background-color: var(--colortext);
}

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
  width: 91%;
  background-color: var(--colortext) !important;
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
  background-color: var(--colortext) !important;
}

.newPostOptions .newPostImg .imgInput input::placeholder {
    color: var(--colorbg);
}

.newPostOptions .newPostTag {
  width: fit-content;
  position: relative;
  font-size: 18px;
  color: var(--colorprincipal);
  margin: 0px 20px;
}
.newPostSend {
  width: 30%;
  position: relative;
  justify-content: end;
  margin-right: 10px;
}
</style>