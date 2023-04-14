<template>
  <div class="body">
    <div>
      <h2>Nouvelle soirée</h2>
      <form>
        <label for="Nom">Nom</label>
        <input id="Nom">
        <label for="Description">Description</label>
        <input id="Description">
        <label for="Date">Date</label>
        <input id="Date">
        <label for="Adresse">Adresse</label>
        <input id="Adresse">
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
      </form>
    </div>
    <button class="bottom-button" style="background-color: #101010;">
      <a href="/listSoiree">Annuler</a>
    </button>
    <button class="bottom-button" style="background-color: #2c3e50">
      <a href="/listSoiree">Valider</a>
    </button>
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