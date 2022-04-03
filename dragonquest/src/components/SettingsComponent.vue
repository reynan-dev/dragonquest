<template lang="fr">
	<section>
        <div class="container">
            <h1>Settings</h1>
           <ul>
               <li>Account <i class="fa-solid fa-angle-right"></i></li>
               <li>Security <i class="fa-solid fa-angle-right"></i></li>
               <li>Privacy <i class="fa-solid fa-angle-right"></i></li>
               <li>Notifications <i class="fa-solid fa-angle-right"></i></li>
            </ul>
        </div>
    </section>
</template>
<script>
const SettingsComponent = {};
export default SettingsComponent;
</script>
<style scoped>
li {
	list-style: none;
	display: flex;
	justify-content: space-between;
	padding-top: 3vh;
	padding-bottom: 3vh;
	align-items: center;
	width: 15vw;
}
ul {
	padding: 0px;
}
h1 {
	font-size: 2rem;
	margin-top: 2.570694087403599vh;
}
.container {
	display: flex;
	flex-direction: column;
	margin-left: 20%;
	padding-right: 6vw;
	border-right: 2px solid #a7adba;
	height: 100vh;
}
</style>
