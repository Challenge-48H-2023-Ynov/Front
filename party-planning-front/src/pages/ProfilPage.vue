<template>
  <div class ="body">
  <div class="profile-page">
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
          <label for="voiture">Voiture:</label>
          <input type="checkbox" v-model="user.HavePermis" v-bind:id="user.HavePermis" :disabled="!isEditModeEnabled" @keydown.enter="onSaveChanges">
          <label for="sam">SAM:</label>
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
  </div>
  </div>
</template>

<script>
export default {
  name: "ProfilPage",
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
    };
  },
  computed: {
    Pseudo() {
      return `${this.user[0].UserName} `;
    }
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
label {
  margin-right: 1rem;
}
input {
  font-size: 1rem;
  padding: 0.5rem;
}
button {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background-color: white;
  color: black;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.colonne{
  display: flex;
  justify-content: space-around;
}
.profile-check{
  margin-left: 10px;
}
</style>
