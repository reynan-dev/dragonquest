<template>
	<!--
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
-->

	<section class="home">
		<div class="logotype">
			<i class="fa-solid fa-dragon"></i> <span class="logo">DragonQuest</span>
		</div>

		<div class="title">Livin your game</div>

		<div class="signup">
			<div class="signTitle">Sign up now.</div>
			<router-link to="/signup"
				><div class="signBtn btn">Sign up with your email</div></router-link
			>
			<div class="signTxt">
				When you sign up, you agree ours <a href="#">Service Terms</a> and
				<a href="#">Privacy Policy</a>, included the
				<a href="#">Use of Cookies</a>.
			</div>
		</div>

		<div class="or">
			<div class="trac"></div>
			<div class="orDiv">or</div>
			<div class="trac"></div>
		</div>

		<div class="signin">
			<div class="signTitle">Have an account?</div>
			<router-link to="/login"
				><div class="signBtn btn">Sign in now</div></router-link
			>
		</div>
	</section>

	<section class="bgImg"></section>

	<footer class="copyrights">
		&copy; DragonQuest 2022. All rights reserved.
	</footer>
</template>

<script>
/*
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
} */
</script>

<style scoped>
a {
	text-decoration: none;
}

.home {
	position: relative;
	min-width: 40%;
	background-color: var(#343d46);
	height: 100vh;
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

.title {
	margin-left: 15%;
	font-size: 40px;
	color: var(--colortext);
	font-weight: 900;
	font-family: var(--font);
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
	margin-top: 2%;
	width: 35%;
}

.signTxt {
	margin-left: 15%;
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

.or {
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	margin-left: 15%;
	margin-top: 4%;
	width: 43%;
}

.or .trac {
	background-color: var(--colortext);
	height: 1px;
	width: 40%;
}

.or .orDiv {
	margin: 0 5px;
}

.copyrights {
	position: fixed;
	bottom: 0px;
	width: 100%;
	background-color: #343d46;
	display: flex;
	align-content: center;
	justify-content: center;
	height: fit-content;
	padding: 10px 0px;
}
</style>
