<template>
  <section class="home">
    <div class="logotype">
      <i class="fa-solid fa-dragon"></i>
      <span class="logo">DragonQuest</span>
    </div>

    <div class="signup">
      <div class="signTitle">Sign up your new account</div>

      <SignupComponent />


      <div class="signChange">
        Have you an account? <router-link to="/login">Sign in now!</router-link>
      </div>
    </div>
  </section>

  <section class="bgImg"></section>
</template>

<script>
import SignupComponent from "@/components/SignupComponent.vue";

export default {
  name: "SignupView",
  components: {
    SignupComponent,
  },
};
</script>

<style scoped>
.home {
  position: relative;
  width: 40%;
  background-color: var(#343d46);
}

.bgImg {
  position: relative;
  min-width: 60%;
  background-image: url(../assets/greet-the-final-battle-alone-illustration.jpg);
  background-position: 250px;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  background-repeat: no-repeat;
}

.logotype {
  width: 80%;
  margin-left: 15%;
  font-size: 60px;
  margin-top: 15%;
}

.signTitle {
  margin-left: 15%;
  font-size: 30px;
  color: var(--colortext);
  font-weight: 900;
  font-family: var(--font);
  margin-top: 5%;
}

.signBtn {
  margin-left: 15%;
  margin-top: 5%;
  width: 35%;
}

.signInput {
  margin-left: 15%;
  margin-top: 5%;
  width: 35%;
}

.signTxt {
  margin-left: 16%;
  font-size: 12px;
  color: var(--colortext);
  font-weight: 300;
  font-family: var(--font);
  flex-wrap: wrap;
  width: 40%;
}

.signTxt a {
  color: var(--colorprincipal);
  text-decoration: none;
}

.signChange {
  margin-left: 15%;
  font-size: 15px;
  color: var(--colortext);
  font-weight: 300;
  font-family: var(--font);
  flex-wrap: wrap;
  width: 40%;
  margin-top: 5%;
}

.signChange a {
  color: var(--colorprincipal);
  text-decoration: none;
}
</style>
