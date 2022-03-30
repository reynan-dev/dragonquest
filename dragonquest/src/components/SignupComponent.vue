<template>
	<div class="loginForms">
		<form action="">
			<div class="input">
				<input
					type="text"
					v-model="user.firstname"
					class="forms"
					placeholder="Name"
				/>
			</div>
			<div class="input">
				<input
					type="text"
					v-model="user.lastname"
					class="forms"
					placeholder="Nickname"
				/>
			</div>
			<div class="input">
				<input
					type="email"
					v-model="user.email"
					class="forms"
					placeholder="Email"
				/>
			</div>
			<div class="input">
				<input
					type="password"
					v-model="user.password"
					class="forms"
					placeholder="Password"
				/>
			</div>
		</form>
		<div class="signTxt">
			Read ours <a href="#">Service Terms</a> and
			<a href="#">Privacy Policy</a>.
		</div>

		<div class="signBtn btn" @click="requestAccount">Sign up now</div>

		<div class="goodNotify" v-show="revele">Account created.</div>
		<div class="badNotify" v-show="reveleWrong">Something went wrong.</div>
	</div>
</template>

<script>
const SignupComponent = {
	data() {
		return {
			user: {
				firstaname: "",
				lastname: "",
				email: "",
				password: "",
			},
			revele: false,
			reveleWrong: false,
		};
	},
	methods: {
		async requestAccount() {
			if (this.verifEmail() == true) {
				const promise = await fetch(
					"https://dragonquest.osc-fr1.scalingo.io/register",
					{
						method: "POST",
						body: JSON.stringify(this.user),
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				console.log(promise);
				this.reveleWrong = false;
				if (promise.status === 200) {
					this.revele = true;
					setTimeout(this.$router.push, 3000, "/login");
				} else {
					this.reveleWrong = true;
				}
			} else {
				this.reveleWrong = true;
			}
		},
		// verification de l 'address mail
		verifEmail() {
			let pattern = /^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}.+[a-z]{2}$/i;

			if (pattern.test(this.user.email)) {
				return true;
			} else {
				return false;
			}
		},
	},
};
export default SignupComponent;
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
