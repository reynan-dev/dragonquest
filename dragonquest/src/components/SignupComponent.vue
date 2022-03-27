<template>
  <div class="loginForms">
    <form action="">
      <div class="input">
        <input type="text" class="forms" placeholder="Name" />
      </div>
      <div class="input">
        <input type="text" class="forms" placeholder="Nickname" />
      </div>
      <div class="input">
        <input type="text" class="forms" placeholder="Email" />
      </div>
      <div class="input">
        <input type="text" class="forms" placeholder="Password" />
      </div>
    </form>
    <div class="signTxt">
      Read ours <a href="#">Service Terms</a> and
      <a href="#">Privacy Policy</a>.
    </div>

    <div class="signBtn btn">Sign up now</div>

        <div class="goodNotify">Account created.</div>
    <div class="badNotify">
      Something went wrong.
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupComponent",
};
</script>

<style>
.loginForms {
  margin-left: 15%;
  width: 100%;
  margin-top: 5%;
}

.loginForms form {
  width: 38%;
}

.input {
  width: 100%;
  margin-top: 5%;
}

.signTxt {
  margin-left: 2%;
  font-size: 12px;
  color: var(--colortext);
  font-weight: 300;
  font-family: var(--font);
  flex-wrap: wrap;
  width: 100%;
}

.signTxt a {
  color: var(--colorprincipal);
  text-decoration: none;
}

.goodNotify {
  font-size: 15px;
  color: var(--colortext);
  font-weight: 300;
  font-family: var(--font);
  display: flex;
  justify-content: center;
  margin-top: 2%;
  width: 35%;
  border: 1px solid #02f737;
  color: #02f737;
  padding: 15px 30px;
}

.badNotify {
  font-size: 15px;
  color: var(--colortext);
  font-weight: 300;
  font-family: var(--font);
  display: flex;
  justify-content: center;
  margin-top: 2%;
  width: 35%;
  border: 1px solid #f75002;
  color: #f75002;
  padding: 15px 30px;
}

.signBtn {
  margin-top: 5%;
  width: 35%;
}
</style>