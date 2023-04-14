<template>
  <div class="body">
    <div v-if="currentPage !== 'EventPage'">
      <div v-if="!createSoireeButton">
        <h2>Soirées disponibles</h2>
        <div v-if="listSoiree.length">
          <ul>
            <li
                v-for="(soiree, index) in listSoiree"
                :key="index"
            >
              <button @click="goToSoiree(soiree.id)"> @click="currentPage = 'EventPage'">
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
    <create-soiree-page v-if="currentPage === 'CreateSoireePage'"/>
    <event-page v-if="currentPage === 'EventPage'"  event-id="currentSoireeId" />
    <component :is="currentView" />
  </div>
</template>

<script>
import CreateSoireePage from "@/pages/CreateSoireePage";
import EventPage from "@/pages/EventPage";

const routes = {
  '/createSoiree': CreateSoireePage,
  '/event/': EventPage,
}
export default {
  name: "ListSoireePage",
  components: { CreateSoireePage, EventPage  },
  data() {
    return {
      currentPath: window.location.hash,
      currentPage: 'ListSoireePage',
      currentSoireeId: Number,
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
      this.currentPage = 'EventPage'
      this.currentSoireeId = soireeId
      console.log(this.currentSoireeId)
    },
  }

}
</script>

<style scoped>
.body {
  background-color: black;

}

div[v-if="currentPage !== 'EventPage'"] {
  background-color: black;
  margin-top: 0px;
  padding: 10px;
  border-radius: 5px;
}

h2 {
  text-align: center;
  margin-top: 50px;
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 100px;
  margin: auto;
}

li {
  margin-bottom: 10px;
}

.button {
  background-color: white;
  color: black;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

</style>