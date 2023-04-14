<template>
  <div class="body">
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
    <create-soiree-page v-if="currentPage === 'CreateSoireePage'"/>
    <component :is="currentView" />
  </div>
</template>

<script>
import CreateSoireePage from "@/pages/CreateSoireePage";

const routes = {
  '/createSoiree': CreateSoireePage,
}
export default {
  name: "ListSoireePage",
  components: { CreateSoireePage  },
  data() {
    return {
      currentPath: window.location.hash,
      currentPage: 'ListSoireePage',
      listSoiree: [
        { id: 1, name: 'BQQ', date: '05/05/2023', adresse: '5 rue du Test' },
        { id: 2, name: 'Bar', date: '06/06/2023', adresse: '6 rue du Test' }
      ],
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
  },
  methods: {
    goToSoiree (soireeId) {
      alert('id de la soiree :' + soireeId)
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