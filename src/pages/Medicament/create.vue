<template>
  <div class="pagetitle">
    <h1>Medicament</h1>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="breadcrumb-item">Categorie</li>
        <li class="breadcrumb-item active">Creation</li>
      </ol>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="content">
    <div class="container-fluid">
      <div class="card bg-white border-0">
        <div class="col-lg-12 col-md-12">
          <div class="card-header border-0 bg-white">
            <div class="row">
              <h4 id="mss">Ajouter une categorie</h4>
            </div>
          </div>
          <div class="card-body border-0">
            <form @submit="create">
              <div class="row">
                <div class="col-12">
                  <input
                    class="form-control"
                    v-model="libelle"
                    type="text"
                    placeholder="Categorie Medicament"
                    name="categorie"
                  />
                  <span style="color: red">{{ error_libelle }}</span>
                </div>
              </div>
              <br />

              <div class="row w-100">
                <button type="submit" class="btn btn-success btt">
                  <small>AJOUTER</small>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <style>
</style>
 <script >
export default {
  name: "addcat",
  data() {
    return {
      libelle: "",
      error_libelle: "",
    };
  },
  methods: {
    async create(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("libelle", this.libelle);

      try {
        const res = await fetch("http://127.0.0.1:8000/api/categorie", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("current_token"),
            Accept: "application/json",
          },
          body: formData,
        });

        if (res.status === 422) {
          const error_msg = await res.json();
          console.log(error_msg);

          this.error_libelle = error_msg.errors?.libelle?.[0] || "";
        } else {
          this.libelle = "";
          this.error_libelle = "";

          alert("Categorie ajouter avec succès !");
        }
      } catch (error) {
        console.error("Erreur lors de la création de la categorie:", error);
        alert("Une erreur est survenue lors de la création de la categorie.");
      }
    },
  },
};
</script>