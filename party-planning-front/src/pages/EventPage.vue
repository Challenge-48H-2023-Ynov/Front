<template>
  <div class="body">
    <div class="profile-picture-container">
      <img class="profile-picture" alt="Profile Picture">
    </div>
    <div class="title">
      <h1>{{event.Title}}</h1>
    </div>
    <div class="user">
      <h3>Evénement préparer par : <span class="highlight">{{event.Name}}</span></h3>
    </div>
    <div class="info">
      <div class="date">
        <h3>La date de l'événement : <span class="highlight">{{event.DateDateTime}}</span></h3>
      </div>
      <div class="adress">
        <h3>L'adresse de l'événement : <span class="highlight">{{event.Adress}}</span></h3>
      </div>
    </div>
    <div class="description">
      <h3>Description de l'événement : </h3>
      <p>{{event.Description}}</p>
    </div>
    <div class="checkbox" v-if="showCheckbox">
      <input type="checkbox" v-model="isChecked" :disabled="!isEditModeEnabled">
      <label>{{ aport.Type }} - {{ aport.Nom }} - {{ aport.Quantité }}</label>
    </div>
    <div class="button">
      <button v-if="!isEditModeEnabled" @click="enableEditMode">Participer</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventPage",
  data() {
    return {
      isChecked: false,
      isEditModeEnabled: false,
      showCheckbox: true,
      event: {
        id: 1,
        Title: "JOJO",
        Name: "JOEL",
        DateDateTime: "25/05/23",
        Description: "BLALALALALLAA",
        Adress: "27 rue raoul servant 69007 Lyon",
      },
      aport: {
        id: 1,
        Type: "Snack",
        Nom: "Friandises + Chips",
        Quantité: "3",
      },
    }
  },
  mounted(){

  },
  methods: {
    enableEditMode() {
      this.isEditModeEnabled = true;
      this.showCheckbox = true;
    },
  },
}
</script>


<style scoped>
.body{
  background-color: black;
}
.profile-picture-container {
  width: 80px;
  height: 80px;
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
.info{
  display: flex;
  justify-content: space-around;
  color:white;
}
.user{
  color: white;
}
.highlight {
  color: dodgerblue;
}
.description{
  color: white;
}
.checkbox{
  color: antiquewhite;
}
</style>