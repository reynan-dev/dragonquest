<template>
	<div class="loginForms">
		<form action="">
			<div class="input">
				<input
					type="text"
					v-model="this.user.email"
					class="forms"
					placeholder="Email"
				/>
			</div>
			<div class="input">
				<input
					type="password"
					v-model="this.user.password"
					class="forms"
					placeholder="Password"
				/>
			</div>
			<div class="signTxt">
				Forgot your password?
				<a href="#">Click here to recover</a>.
			</div>
		</form>
		<div class="signBtn btn" @click="connexion">Sign in now</div>

		<div class="goodNotify" v-show="revele">Success login.</div>
		<div class="badNotify" v-show="reveleWrong">
			Incorrect e-mail or password.
		</div>
	</div>
</template>

<script>
//import { mapState } from "vuex";
const LoginComponent = {
	data() {
		return {
			user: {
				email: "",
				password: "",
			},
			token: "",
			revele: false,
			reveleWrong: false,
		};
	},
	methods: {
		async connexion() {
			const promise = await fetch(
				"https://dragonquest.osc-fr1.scalingo.io/login",
				{
					method: "POST",
					body: JSON.stringify(this.user),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			console.log(promise);
			if (promise.status === 200) {
				let response = await promise.json();
				this.token = response.token;
				this.revele = true;
				this.envoieData();
				setTimeout(this.$router.push, 3000, "/feed");
			} else {
				this.reveleWrong = true;
				setTimeout(this.apparition, 3000);
			}
		},
		apparition() {
			this.reveleWrong = false;
		},
		envoieData() {
			this.$store.dispatch("envoieDatae", this.token);
		},
	},
};

export default LoginComponent;
</script>

<style scoped>
.loginForms {
	margin-left: 15%;
	width: 100%;
	margin-top: 5%;
}

.loginForms form {
	width: 35%;
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
