<template>
  <div class="body">
    <h1>PartyPlanning</h1><br>
    <div v-if="currentPage !== 'EventPage'">
      <div v-if="!createSoireeButton">
        <h2>Soirées disponibles</h2>
        <div v-if="listSoiree.length">
          <ul>
            <li
                v-for="(soiree, index) in listSoiree"
                :key="index"
            >
              <button @click="goToSoiree(soiree.id)">
                {{soiree.name}} - {{ soiree.date}} - {{ soiree.adresse}}
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
    <!-- <button type = "button" id = "get-joke" @click = "fetchAPIData">Get a Joke!!</button> -->
    <create-soiree-page v-if="currentPage === 'CreateSoireePage'"/>
    <event-page v-if="currentPage === 'EventPage'" />
    <component :is="currentView" />
  </div>
</template>

<script>
import CreateSoireePage from "@/pages/CreateSoireePage";
import EventPage from "@/pages/EventPage";
// import Vue from 'vue'

const routes = {
  '/createSoiree': CreateSoireePage,
  '/event/': EventPage,
}
export default {
  name: "ListSoireePage",
  components: { CreateSoireePage, EventPage },
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
.body{
  background-color: #101010;
}
h2 {
  color: white;
  padding: 1rem;
}
ul {
  list-style: none;
  padding: 0;
}
button {
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: 1rem;
  background-color: white;
  color: black;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.bottom-button {
  margin-top: 15em;
}
.bottom-button a {
  text-decoration: none;
  color: black;
}
</style>