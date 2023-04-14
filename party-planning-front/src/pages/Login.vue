<template>
    <div>
        <div id="form" v-if="currentPage === 'LoginPage'">
            <form method="get" action="" id="loginForm">
                <h1>Connexion</h1><br>
                <h2>Email</h2>
                <input id="Username" class="form-control" placeholder="Email"><br>
                <h2>Mot de passe</h2>
                <input id="Password" class="form-control" placeholder="Mot de passe" type="password"><br>
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
#form {
  margin: auto;
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
  margin: 1rem;
}
input{
  color: white;
	height: 50px;
	font-weight: bold;
	text-underline-position: under;
}
button{
	height: 50px;
	font-weight: bold;
	background: #fff;
	font-size: 14px;
	margin-top: 30px;
	padding: 16px 20px;
	border-radius: 26px;
	border: 1px solid #D4D3E8;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	width: 100%;
	color: #101010;
	cursor: pointer;
}
</style>