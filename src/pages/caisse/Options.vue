<template>
  <div
    class="btn-group d-flex"
    role="group"
    aria-label="Basic mixed styles example"
  >
    <div v-html="trans_button"></div>
    <!-- <button  @click="deletePatient"  class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="fa fa-trash text-white"></i></button> -->
  </div>
  <Paye :transfert="transfert" />
</template>

<script >
import Paye from "./Paye.vue";

export default {
  name: "Options",
  components: { Paye },
  props: {
    transfert: Object,
  },
  data() {
    return {
      trans_button: "",
    };
  },
  methods: {
    async deletePatient(e) {
      e.preventDefault();
      if (confirm("Êtes vous sur de votre choix ?")) {
        const res = await fetch(
          "http://127.0.0.1:8000/api/patient/" + this.patient.id_patient,
          {
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("current_token"),
              Accept: "application/json",
              "Content-Type": "application/json;charset=utf-8",
            },
          }
        );

        const data = await res.json();

        if (res.status === 401) {
          alert(data.message + " Please login first !");
        } else {
          alert("Information Supprime !!!");
          location.reload();
        }
      }
    },
  },
  async created() {
    const num_modal = this.transfert.id_transfert;
    this.trans_button =
      "<button type='button' class='badge bg-primary' data-bs-toggle='modal' data-bs-target='#transModal" +
      num_modal +
      "'><i class='bx bxs-badge-dollar'></i> Payer</button>";
  },
};
</script>
