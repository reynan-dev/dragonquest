<template>
    <section class="home">
        <div class="logotype">
            <font-awesome-icon icon="fa-solid fa-dragon" /> <span class="logo">DragonQuest</span>
        </div>


        <div class="signup">
            <div class="signTitle">Login at Social Network</div>

            <div class="signInput"><input type="text" class="forms"></div>

            <div class="signTxt">Forgot your password? <a href="#">Click here to recover</a>.</div>

            <div class="signBtn btn">Sign up with your email</div>
        </div>

    </section>

    <section class="bgImg">
    </section>
</template>

<script>

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
</style>
