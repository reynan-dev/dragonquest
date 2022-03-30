<template>
	<router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");

:root {
	--font: "Lato", sans-serif;
	--colorbg: #343d46;
	--colorboder: #a7adba;
	--colorhoverbtn: #44bef7;
	--colorprincipal: #02a9f7;
	--colortext: #f7f9f9;
}

html {
	color: var(--colortext);
	font-family: var(--font);
	background-color: var(--colorbg);
	padding: 0px;
	margin: 0px;
}

a {
	text-decoration: none;
}

body {
	margin: 0px;
	padding: 0px;
}

#app {
	font-family: var(--font);
	display: flex;
	width: 100%;
}

.logo {
	color: var(--colortext);
	text-decoration: underline;
	font-weight: 900;
	padding-left: 20px;
}

.btn {
	background-color: var(--colorprincipal);
	padding: 15px 30px;
	color: var(--colortext);
	font-size: 20;
	font-weight: 600;
	text-align: center;
	cursor: pointer;
}

.btn:hover {
	background-color: var(--colorhoverbtn);
}

.forms {
	color: var(--colorboder);
	border: none;
	border: 1px solid var(--colorboder);
	font-size: medium;
	font-weight: 400;
	border-radius: 8px;
	padding: 15px 20px;
	background-color: var(--colorbg);
	width: 100%;
}

.forms::placeholder {
	color: var(--colorboder);
	font-size: medium;
	font-weight: 300;
}

.nameProfile {
	font-weight: 700;
}

.usernameProfile,
.comments {
	font-weight: 300;
}

.deletebtn {
	background-color: #f70202;
	padding: 15px 25px;
	color: var(--colortext);
	font-size: 20;
	font-weight: 300;
}

.deletebtn:hover {
	background-color: #fb8989;
	padding: 15px 25px;
	color: var(--colortext);
	font-size: 20;
	font-weight: 300;
}
</style>
