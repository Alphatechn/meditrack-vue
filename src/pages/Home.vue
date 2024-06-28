<template>
  <form @submit.prevent="saveData">
    <table>
      <thead>
        <tr>
          <th>Examen</th>
          <th>Dose</th>
          <th>Prise</th>
          <th>Montant</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>
            <input
              type="text"
              v-model="item.libelle"
              :disabled="!item.libelle"
            />
          </td>
          <td>
            <input type="number" v-model.number="item.dose" />
          </td>
          <td>
            <input type="number" v-model.number="item.prise" />
          </td>
          <td>
            <input
              type="number"
              v-model.number="item.prix_examen"
              :disabled="!item.libelle"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <button type="submit">Save Data</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      items: [{ libelle: "", prix_examen: 0, dose: 0, prise: 0 }],
      itemsList: [],
      taskName: "",
    };
  },
  async created() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/examen");
      this.itemsList = await response.json();
      this.items = this.itemsList.map((item) => ({
        libelle: item.libelle,
        prix_examen: item.prix_examen,
        dose: 0,
        prise: 0,
      }));
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async saveData() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/examen", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: this.items,
            taskName: this.taskName,
          }),
        });
        if (response.ok) {
          console.log("Data saved successfully");
        } else {
          console.error("Error saving data");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
select {
  width: 100%;
}
</style>