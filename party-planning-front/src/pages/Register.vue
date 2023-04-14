<template>
    <div>
        <div id="form">
            <form method="get" action="" id="registerForm">
                <h1><u>Créer un compte</u></h1><br>
                <h2>Prénom</h2>
                <input id="First-Name" class="form-control" placeholder="Prénom"><br>
				<h2>Nom</h2>
                <input id="Last-Name" class="form-control" placeholder="Nom"><br>
				<h2>Pseudo</h2>
                <input id="Username" class="form-control" placeholder="Pseudo"><br>
				<h2>Email</h2>
                <input id="Email" class="form-control" placeholder="Email" type="email"><br>
				<h2>Téléphone</h2>
                <input id="Phone-Number" class="form-control" placeholder="Télephone"><br>
                <h2>Mot de passe</h2>
                <input id="Password" class="form-control" placeholder="Mot de passe" type="password"><br>
				<h2>Confirmer le mot de passe</h2>
                <input id="RePassword" class="form-control" placeholder="Confirmer mot de passe" type="password"><br>

              <button type="submit" class="button login__submit">Créer</button>
              <button @click="currentPage = 'Login'">J'ai déjà un compte</button>
            </form>
        </div>
      <login v-if="currentPage === 'Login'" />
    </div>
</template>


<script>
import Login from "@/pages/Login";
export default {
  name: "RegisterPage",
  components: {
    Login,
  },
  data() {
    return {
      currentPage: 'RegisterPage',
    }
  }
    
}
</script>

<style>
body {
  background-color: black;
}

/* Texte blanc */
body, input {
  color: white;
}

/* Marge et centrage du formulaire */
#form {
  margin: 0 auto;
  width: 50%;
}

/* Style pour les champs de saisie */
.form-control {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid white;
  background-color: black;
  color: white;
}

/* Style pour le bouton */
.button {
  display: inline-block;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Style pour le texte du bouton */
.button__text {
  display: inline-block;
  margin-right: 10px;
}

/* Style pour l'icône du bouton */
.button__icon {
  display: inline-block;
  margin-left: 10px;
}

/* Effet de survol sur le bouton */
.button:hover {
  background-color: white;
  color: black;
}

/* Style pour les titres */
h1, h2 {
  color: white;
  text-decoration: underline;
}
</style>