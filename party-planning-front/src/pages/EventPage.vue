<template>
  <div class="body">
    <div class="profile-picture-container">
      <img class="profile-picture" alt="Profile Picture">
    </div>
    <div class="title">
      <h1>{{event.name}}</h1>
    </div>
    <div class="user">
      <h3>Evénement préparer par : <span class="highlight">{{event.maker}}</span></h3>
    </div>
    <div class="info">
      <div class="date">
        <h3>La date de l'événement : <span class="highlight">{{event.dateStart}}</span></h3>
      </div>
      <div class="adress">
        <h3>L'adresse de l'événement : <span class="highlight">{{event.adress}}</span></h3>
      </div>
    </div>
    <div class="description">
      <h3>Description de l'événement : </h3>
      <p>{{event.description}}</p>
    </div>
    <div class="checkbox" v-if="showCheckbox">
      <input type="checkbox" v-model="isChecked" :disabled="!isEditModeEnabled">
      <label>{{ aport.Type }} - {{ aport.Nom }} - {{ aport.Quantité }}</label>
    </div>
    <div class="button">
      <button v-if="!isEditModeEnabled" @click="enableEditMode">Participer</button>
    <profil-page v-if="currentPage === 'ProfilPage'"></profil-page>
  </div>
  </div>
</template>

<script>
import ProfilPage from "@/pages/ProfilPage";

export default {
  name: "EventPage",
  props: {
    eventId: {
      type: String,
      required: true
    }
  },
  components: {
    ProfilPage
  },
  data() {
    return {
      isChecked: false,
      isEditModeEnabled: false,
      showCheckbox: true,
      currentPage: 'EventPage',
      event: {
      },
      aport: {
        id: 1,
        Type: "Snack",
        Nom: "Friandises + Chips",
        Quantité: "3",
      },
    }
  },
  mounted() {
    console.log(this.eventId);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjoiRGVyY3Jha2VyIiwiRW1haWwiOiJhbnRvaW5lLmNhcGl0YWluQGdtYWlsLmNvbSIsImp0aSI6ImVjY2MzNzczLWJhYmMtNGNmMy04MGY0LTZmMmYxZDRjMWQ0NyIsIlJvbGVzIjoiQWRtaW4iLCJuYmYiOjE2ODE0NjIxNjIsImV4cCI6MTY4MTU0ODU2MiwiaWF0IjoxNjgxNDYyMTYyfQ.jLJ4yfkKNQ8bxIHrfzeDb_IL6WY1gGJplXxQ-BHfQls';

    fetch('https://api-challenge-48h.game-trip.fr/Party/'+ this.eventId, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.event = data;
        })
        .catch(error => {
          console.log(error);
        });
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

.profile-picture {
  width: 100%;
  height: auto;
  object-fit: cover;
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
.info {
  display: flex;
  justify-content: space-around;
}

.highlight {
  color: #5c91a9;
}
</style>