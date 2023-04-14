<template>
  <div class="body">
    <div v-if="currentPage === 'ListSoireePage'">
      <div v-if="!createSoireeButton">
        <div class="profile-picture-container">
          <img class="profile-picture" alt="Profile Picture" src="/path/to/profile-picture.jpg"/>
        </div>
        <button @click="currentPage='ProfilPage'">Voir le profil</button>
        <h2>Soirées disponibles</h2>
        <div v-if="listSoiree.length">
          <ul>
            <li
                v-for="(soiree, index) in listSoiree"
                :key="index"
            >
              <button
                  @click="goToSoiree(soiree.idParty)"
                  style="background-color: #101010; color: white"
              >
                {{soiree.name}} - {{ soiree.dateStart}} - {{ soiree.adresse}}
              </button>
            </li>
          </ul>
        </div>
        <div v-else>
          <span>Aucune soirée disponible</span>
        </div>
      </div>
      <button
          v-if="!createSoireeButton"
          @click="currentPage = 'CreateSoireePage'"
          class="bottom-button"
      >
        <a>Créer une soirée</a>
      </button>
    </div>
    <create-soiree-page v-if="currentPage === 'CreateSoireePage'"/>
    <profil-page v-if="currentPage === 'ProfilPage'"></profil-page>
    <event-page v-if="currentPage === 'EventPage'"  :event-id="currentSoireeId" />
    <component :is="currentView" />
  </div>
</template>

<script>
import CreateSoireePage from "@/pages/CreateSoireePage";
import EventPage from "@/pages/EventPage";
import ProfilPage from "@/pages/ProfilPage";

const routes = {
  '/createSoiree': CreateSoireePage,
}
export default {
  name: "ListSoireePage",
  components: { CreateSoireePage, EventPage, ProfilPage  },
  data() {
    return {
      currentPath: window.location.hash,
      currentPage: 'ListSoireePage',
      currentSoireeId: Number,
      listSoiree: [],
      createSoireeButton: false,
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjoiRGVyY3Jha2VyIiwiRW1haWwiOiJhbnRvaW5lLmNhcGl0YWluQGdtYWlsLmNvbSIsImp0aSI6ImVjY2MzNzczLWJhYmMtNGNmMy04MGY0LTZmMmYxZDRjMWQ0NyIsIlJvbGVzIjoiQWRtaW4iLCJuYmYiOjE2ODE0NjIxNjIsImV4cCI6MTY4MTU0ODU2MiwiaWF0IjoxNjgxNDYyMTYyfQ.jLJ4yfkKNQ8bxIHrfzeDb_IL6WY1gGJplXxQ-BHfQls';
    fetch('https://api-challenge-48h.game-trip.fr/Party', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.listSoiree = data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    goToSoiree (soireeId) {
      this.currentPage = 'EventPage'
      this.currentSoireeId = soireeId
    },
  }

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
ul {
  list-style: none;
  padding: 0;
}
</style>