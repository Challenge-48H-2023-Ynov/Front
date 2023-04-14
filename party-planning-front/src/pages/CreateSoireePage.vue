<template>
  <div class="body">
    <div>
      <h2>Nouvelle soirée</h2>
      <form action="/listSoiree">
        <label for="Nom">Nom</label>
        <input id="Nom" v-model="newSoiree.name">
        <label for="Description">Description</label>
        <input id="Description" v-model="newSoiree.description">
        <label for="Date">Date</label>
        <input id="Date" v-model="newSoiree.date">
        <label for="Adresse">Adresse</label>
        <input id="Adresse" v-model="newSoiree.adresse">
        <button @click="addApport()">Ajouter un apport</button>
        <div v-if="apports.length">
          <ul>
            <li
                v-for="(apport, index) in apports"
                :key="index"
            >
              <apport-component></apport-component>
            </li>
          </ul>
        </div>
        <button class="bottom-button" style="background-color: #101010;">
          <a href="/listSoiree">Annuler</a>
        </button>
        <button @click="submitForm()" class="bottom-button" style="background-color: #2c3e50">
          <a href="/listSoiree">Valider</a>
        </button>
      </form>
    </div>
    <component :is="currentView" />
  </div>
</template>

<script>
import ApportComponent from "@/components/ApportComponent";
import ListSoireePage from "@/pages/ListSoireePage";

const routes = {
  '/listSoiree': ListSoireePage,
}
export default {
  name: "CreateSoireePage",
  components: { ListSoireePage, ApportComponent },
  data() {
    return {
      currentPath: window.location.hash,
      currentPage: 'CreateSoireePage',
      newSoiree: {
        name: null,
        description: null,
        date: null,
        adresse: null,
      },
      apports: []
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
  },
  methods: {
    addApport () {
      console.log(this.apports)
      this.apports.push()
    },
    submitForm () {
      console.log(this.newSoiree.name)
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjoiRGVyY3Jha2VyIiwiRW1haWwiOiJhbnRvaW5lLmNhcGl0YWluQGdtYWlsLmNvbSIsImp0aSI6ImVjY2MzNzczLWJhYmMtNGNmMy04MGY0LTZmMmYxZDRjMWQ0NyIsIlJvbGVzIjoiQWRtaW4iLCJuYmYiOjE2ODE0NjIxNjIsImV4cCI6MTY4MTU0ODU2MiwiaWF0IjoxNjgxNDYyMTYyfQ.jLJ4yfkKNQ8bxIHrfzeDb_IL6WY1gGJplXxQ-BHfQls';
      let formData = {
        idPartyMaker: "AC7053C5-5CDB-4A81-A38A-08DB3C7A50EE",
        name: "string",
        description: "string",
        adresse: "string",
        dateStart: "2023-04-14T10:16:01.550Z",
        dateEnd: "2023-04-14T10:16:01.550Z"
      };
      fetch('https://api-challenge-48h.game-trip.fr/Party/new', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }).then(response => {
          return response.json();
        }).catch(error => {
          console.log(error);
        });
    }
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
label {
  color: white;
  margin-left: 20rem;
  margin-right: 20rem;
}
input {
  font-size: 1rem;
  padding: 0.5rem;
  width: 50rem;
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
.bottom-button {
  margin-top: 17em;
}
.bottom-button a {
  text-decoration: none;
  color: white;
}
</style>