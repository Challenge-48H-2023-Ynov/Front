<template>
  <div class ="body">
    <div class="profile-page" v-if="currentPage === 'ProfilPage'">
      <div class="profile-picture-container">
        <img class="profile-picture" src="/path/to/profile-picture.jpg" alt="Profile Picture">
      </div>
      <h1>{{user.UserName}}</h1>
      <div class="colonne">
        <div class="profile-information-container">
          <div class="profile-field">
            <label for="firstName">Prénom:</label>
            <input type="text" id="firstName" v-model="user.FirstName" :disabled="!isEditModeEnabled" @keydown.enter="onSaveChanges">
          </div>
          <div class="profile-field">
            <label for="pseudo">Pseudo:</label>
            <input type="text" id="pseudo" v-model="user.UserName" :disabled="!isEditModeEnabled" @keydown.enter="onSaveChanges">
          </div>
          <div class="profile-field">
            <label for="lastName">Nom:</label>
            <input type="text" id="lastName" v-model="user.LastName" :disabled="!isEditModeEnabled" @keydown.enter="onSaveChanges">
          </div>
        </div>
        <div class="profile-information-container">
          <div class="profile-field">
            <label for="age">Âge:</label>
            <input type="number" id="age" v-model="user.DateOfBrith" :disabled="!isEditModeEnabled" @keydown.enter="onSaveChanges">
          </div>

          <div class="profile-field">
            <label for="telephone">Tel:</label>
            <input type="text" id="telephone" v-model="user.PhoneNumber" :disabled="!isEditModeEnabled" @keydown.enter="onSaveChanges">
          </div>

          <div class="profile-check">
            <label for="user.havePermis">Voiture:</label>
            <input type="checkbox" v-model="user.HavePermis" v-bind:id="user.HavePermis" :disabled="!isEditModeEnabled" @keydown.enter="onSaveChanges">
            <label for="user.sam">SAM:</label>
            <input type="checkbox" v-model="user.sam" v-bind:id="user.sam" :disabled="!isEditModeEnabled" @keydown.enter="onSaveChanges">
          </div>
        </div>
      </div>
      <div class="Bio">
        <h3>Ma Biographie:</h3>
        <p>{{ user.Biography }}</p>
      </div>
      <button v-if="!isEditModeEnabled" @click="enableEditMode">Modifier</button>
      <button v-else @click="onSaveChanges">Enregistrer</button>
      <button
          class="bottom-button"
          style="background-color: #101010; color: white"
          @click="currentPage = 'ListSoireePage'"
      >
        Annuler
      </button>
    </div>
    <list-soiree-page v-if="currentPage === 'ListSoireePage'" />
  </div>
</template>

<script>
import ListSoireePage from "@/pages/ListSoireePage";

export default {
  name: "ProfilPage",
  components: {
    ListSoireePage
  },
  data() {
    return {
      user: {
          id: 1,
          UserName: "JOJO",
          FirstName: "JOEL",
          LastName: "OUIUI",
          DateOfBrith: null,
          PhoneNumber: "",
          Biography: "HELLOOOO",
          HavePermis: false,
          sam: false,
        },
      isEditModeEnabled:false,
      currentPage: 'ProfilPage',
    };
  },
  computed: {
    Pseudo() {
      return `${this.user[0].UserName} `;
    },
  },
  methods: {
    enableEditMode() {
      this.isEditModeEnabled = true;
    },
    onSaveChanges() {
      this.isEditModeEnabled = false;
      // Send updated information to server
    }
  }
};
</script>

<style scoped>
body {
  background-color: black;
}

/* Texte blanc */
body, input {
  color: white;
}

/* Style pour les titres */
h1, h2 {
  color: white;
  text-decoration: underline;
}
.body{
  background-color: black;
}
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  padding: 2rem;
}
.profile-picture-container {
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid white;
}
.profile-picture {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.profile-information-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-field {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.colonne{
  display: flex;
  justify-content: space-around;
}
.profile-check{
  margin-left: 10px;
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid white;
  background-color: black;
  color: white;
}

/* Effet de survol pour les champs de saisie */
input:hover {
  border-bottom: 2px solid gray;
}
input[type="checkbox"] {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 10px 0 0;
  vertical-align: middle;
  cursor: pointer;
}

/* Style pour l'apparence de la case à cocher */
input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 2px solid white;
}

/* Style pour la case à cocher cochée */
input[type="checkbox"]:checked::before {
  background-color: white;
}

/* Style pour le texte associé à la case à cocher */
label {
  color: white;
  font-size: 16px;
  vertical-align: middle;
  cursor: pointer;
}
</style>
