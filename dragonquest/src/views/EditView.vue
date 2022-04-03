<template lang="fr">
    <section class="mainContainer">
        <div>
            <Sidebar   :photo="'http://data.pixiz.com/output/user/frame/preview/api/big/5/2/9/3/2633925_7c673.jpg'"
            :name="'Reynan'"
            :username="'thereynan'"/>
        </div>
        <div>
            <Settings/>
        </div>
        <div>
            <Account/>   
        </div>
        
    </section>
    
</template>
<script>
import SidebarComponent from "@/components/SidebarComponent.vue";
import SettingsComponent from "@/components/SettingsComponent.vue";
import AccountComponent from "@/components/AccountComponent.vue";
const EditView = {
	components: {
		Sidebar: SidebarComponent,
		Settings: SettingsComponent,
		Account: AccountComponent,
	},
};
export default EditView;
</script>
<style scoped>
.mainContainer {
	display: flex;
}
</style>
