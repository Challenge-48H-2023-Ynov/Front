<template>
    <div>
        <div id="form" v-if="currentPage === 'LoginPage'">
            <form method="get" action="" id="loginForm">
                <h1><u>LOGIN : </u></h1><br>
                <h2>Username / Email : </h2>
                <input id="Username" class="form-control" placeholder="Enter your username"><br>
                <h2>Password : </h2>
                <input id="Password" class="form-control" placeholder="Enter your password" type="password"><br>
                <button v-if="currentPage !== 'ListSoireePage'" @click="currentPage = 'ListSoireePage'">Se connecter</button>
              <button v-if="currentPage !== 'Register'" @click="currentPage = 'Register'">Créer un compte</button>
            </form>
        </div>
      <Register v-if="currentPage === 'Register'" />
      <list-soiree-page v-if="currentPage === 'ListSoireePage'" />
    </div>
</template>


<script>
import ListSoireePage from "@/pages/ListSoireePage";
import Register from "@/pages/Register.vue";

export default {
  name: "LoginPage",
  components: {
    ListSoireePage,
    Register,
  },
  data() {
    return {
      currentPage: 'LoginPage',
    }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;	
	/* font-family: Raleway, sans-serif; */
}

body {
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(90deg, #C7C5F4, #776BCC);		
}
#form {		
	background: linear-gradient(90deg, #5D54A4, #7C78B8);		
	position: relative;	
	height: 600px;
	width: 360px;	
	box-shadow: 0px 0px 24px #5C5696;
}
form {
	background: linear-gradient(90deg, white, #C7C5F4, #776BCC);	
	height: 600px;	
	width: 360px;
	padding: 30px;
	padding-top: 156px;
}
.form-control{
	/* height: 60px; */
	border: none;
	border-bottom: 2px solid #D1D1D4;
	background: none;
	padding: 10px;
	padding-left: 24px;
	font-weight: 700;
	width: 75%;
	transition: .2s;
}

.form-control:active,
.form-control:focus,
.form-control:hover {
	outline: none;
	border-bottom-color: #6A679E;
}

#form {
	
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
	height: 100px;
	font-weight: bold;
	text-underline-position: under;
}
h2{
	height: 20px;
	font-weight: bold;
	text-underline-position: under;
}
input{
	height: 50px;
	font-weight: bold;
	text-underline-position: under;
}
button{
	width: 250px;
	height: 50px;
	font-weight: bold;
	background: #fff;
	font-size: 14px;
	margin-top: 30px;
	padding: 16px 20px;
	border-radius: 26px;
	border: 1px solid #D4D3E8;
	text-transform: uppercase;
	font-weight: 700;
	display: flex;
	align-items: center;
	width: 100%;
	color: #4C489D;
	box-shadow: 0px 2px 2px #5C5696;
	cursor: pointer;
	transition: .2s;
	
}
.button__icon {
	font-size: 24px;
	margin-left: auto;
	color: #7875B5;
}
.button__text{
	text-align: center;
}

</style>