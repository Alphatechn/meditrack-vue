<template>
  <div
    class="btn-group d-flex"
    role="group"
    aria-label="Basic mixed styles example"
  >
    <div v-html="edit_button"></div>

    <button
      @click="deleteExamen"
      class="btn btn-warning"
      data-bs-toggle="modal"
      data-bs-target="#deleteModal"
    >
      <i class="fa fa-trash text-white"></i>
    </button>
  </div>
  <Edit :examen="examen" />
</template>

<script >
import Edit from "./Edit.vue";

export default {
  name: "Options",
  components: { Edit },
  props: {
    examen: Object,
  },
  data() {
    return {
      edit_button: "",
    };
  },
  methods: {
    async deleteExamen(e) {
      e.preventDefault();
      if (confirm("Êtes vous sur de votre choix ?")) {
        const res = await fetch(
          "http://127.0.0.1:8000/api/examen/" + this.examen.id,
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
    const num_modal = this.examen.id;
    this.edit_button =
      "<button type='button' class='btn btn-danger' data-bs-toggle='modal' data-bs-target='#editModal" +
      num_modal +
      "'><i class='fa fa-edit'></i></button>";
  },
};
</script>
