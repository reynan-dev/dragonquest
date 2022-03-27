<template>
      <div class="sidebar">
      <div class="logo">
        <i class="fa-solid fa-dragon"></i> <span class="logo">DragonQuest</span>
      </div>
      <div class="profile">
        <div class="imgProfile">
          <div class="photoDivProfile">
            <img
              src="../assets/mago.png"
              alt="Profile - Name"
              class="photoProfile"
            />
          </div>
          <div class="editDivProfile">
            <span class="editProfile">Edit profile</span>
          </div>
        </div>
        <div class="dataProfile">
          <div class="nameDivProfile">
            <span class="nameProfile">Name</span>
          </div>
          <div class="usernameDivProfile">
            <span class="usernameProfile">@username</span>
          </div>
        </div>
      </div>

      <div class="menu">
        <div class="itemMenu">
          <div class="iconMenu"><i class="fa-solid fa-house"></i></div>
          <div class="textMenu">Home</div>
        </div>
        <div class="itemMenu">
          <div class="iconMenu"><i class="fa-solid fa-user"></i></div>
          <div class="textMenu">Profile</div>
        </div>
        <div class="itemMenu">
          <div class="iconMenu"><i class="fa-solid fa-icons"></i></div>
          <div class="textMenu">My all posts</div>
        </div>
        <div class="itemMenu">
          <div class="iconMenu"><i class="fa-solid fa-bell"></i></div>
          <div class="textMenu">Notifications</div>
        </div>
        <div class="menuBtn"><span class="btn">Create a new post</span></div>
      </div>

      <div class="menu">
        <div class="itemMenu">
          <div class="iconMenu"><i class="fa-solid fa-code"></i></div>
          <div class="textMenu">Code</div>
        </div>
        <div class="itemMenu">
          <div class="iconMenu"><i class="fa-solid fa-user-group"></i></div>
          <div class="textMenu">Team</div>
        </div>
        <div class="itemMenu">
          <div class="iconMenu">
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
          <div class="textMenu">Logout</div>
        </div>
      </div>

      <div class="copyMenu">
        <p>&copy; DragonQuest 2022. All rights reserved.</p>
      </div>
    </div>

</template>

<script>
export default {
  name: "SideComponent",
};
</script>

<style scoped>
.sidebar {
  width: 25%;
  flex-wrap: nowrap;
  border-right: 2px solid #a7adba;
  height: 100vh;
}

.sidebar .logo {
  width: 100%;
  font-size: 30px;
  align-items: center;
  text-align: center;
  padding: 20px 0px;
}

.sidebar .profile {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  border-bottom: 1px solid var(#a7adba);
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.sidebar .profile .imgProfile {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
}

.sidebar .profile .imgProfile .photoDivProfile {
  width: 100%;
  position: relative;
}

.sidebar .profile .imgProfile .photoDivProfile img {
  width: 100%;
  border-radius: 100%;
  position: relative;
}

.sidebar .profile .imgProfile .editDivProfile {
  width: 100%;
  position: relative;
}

.sidebar .profile .imgProfile .editDivProfile .editProfile {
  position: relative;
}

.sidebar .profile .dataProfile {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  height: 100%;
  text-align: left;
}

.sidebar .profile .dataProfile .nameDivProfile {
  width: 100%;
  position: relative;
}

.sidebar .profile .dataProfile .nameDivProfile .nameProfile {
    font-size: 25px;
}

.sidebar .profile .dataProfile .usernameDivProfile .usernameProfile {
    font-size: 18px;
}


.sidebar .profile .dataProfile .usernameDivProfile {
  width: 100%;
  position: relative;
}

.sidebar .menu {
  width: 100%;
  display: block;
  flex-wrap: nowrap;
}

.sidebar .menu .itemMenu {
  position: relative;
  display: flex;
  width: 100%;
  margin: 30px 0px;
}

.sidebar .menu .itemMenu .iconMenu {
  width: 30%;
  text-align: center;
}

.sidebar .menu .itemMenu .textMenu {
  width: 70%;
}

.sidebar .menu .menuBtn {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}

.sidebar .copyMenu {
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