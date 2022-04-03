<template lang="">
	<section class="maineContainer">
		<h1>Account</h1>
		<p>
			View your account information, change your data, or learn more about
			account desactivation options
		</p>

		<div class="miniContainer">
			<h2>Account information</h2>
			<div class="trait"></div>
		</div>
		<div class="container">
			<p>A</p>
			<h4>Name</h4>
			<div>
				<input type="text" />
				<p class="botInput">
					Your full name will be show in your profile and feed.
				</p>
			</div>
		</div>
	</section>
</template>
<script>
const AccountComponent = {};
export default AccountComponent;
</script>
<style scoped>
.maineContainer {
	margin-left: 4vw;
	height: 100vh;

	width: 50vw;
	display: flex;
	flex-direction: column;
}
h1 {
	font-size: 2rem;
	margin-top: 2.570694087403599vh;
}
p {
	font-size: 0.9rem;

	margin-right: 2vw;
	word-break: break-all;
}
h2 {
	font-size: 1rem;
	align-self: center;
	width: 40%;
}
.trait {
	background-color: #a7adba;
	height: 1px;
	width: 100%;
	margin-right: 2vw;
}
.miniContainer {
	display: flex;
	margin-top: 4vh;
	align-items: center;
}
.container {
	display: flex;
	justify-content: space-between;

	align-items: center;
	height: 8vh;
}
.botInput {
	font-size: 0.6rem;
}
.container div {
	margin-top: 3.3vh;
	margin-bottom: 0.2vh;
}
.container div input {
	width: 85%;
}
h4 {
	text-align: left;
	margin-right: 50%;
}
</style>
