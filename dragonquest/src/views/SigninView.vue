<template>
	<section class="home">
		<div class="logotype">
			<i class="fa-solid fa-dragon"></i>
			<span class="logo">DragonQuest</span>
		</div>

		<div class="signin">
			<div class="signTitle">Login in your account</div>

			<LoginComponent />

			<div class="signChange">
				Don't have an account?
				<router-link to="/signup">Sign up now!</router-link>
			</div>
		</div>
	</section>

	<section class="bgImg"></section>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";

export default {
	name: "SigninView",
	components: {
		LoginComponent,
	},
};
/*
const login = {
  data() {
    return {
      returnLogin: {
        cod: "",
      },
    };
  },
}; */
</script>

<style scoped>
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

.home {
	position: relative;
	width: 40%;
	background-color: var(#343d46);
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
