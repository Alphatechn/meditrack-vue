<template>
  <div class="pagetitle">
    <h1>Patient</h1>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="breadcrumb-item active">Creation</li>
      </ol>
    </nav>
  </div>
  <!-- End Page Title -->

  <div class="content">
    <div class="container-fluid">
      <div class="card align-self-center border-0 p-2">
        <div class="card-header border-0 bg-white">
          <div class="row">
            <h4 id="mss">Enregistrer un patient</h4>
          </div>
        </div>
        <div class="card-body border-0">
          <form @submit="create">
            <div class="row">
              <div class="col-sm-6">
                <label for="nom">Nom</label>
                <input
                  class="form-control"
                  v-model="nom"
                  type="text"
                  placeholder="Nom"
                  id="nom"
                />
                <span style="color: yellow">{{ error_nom }}</span>
              </div>
              <div class="col-sm-6">
                <label for="prenom">Prenom</label>
                <input
                  class="form-control"
                  type="text"
                  v-model="prenom"
                  placeholder="Prenom"
                  id="prenom"
                />
                <span style="color: yellow">{{ error_prenom }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <label for="telephone">Telephone</label>
                <input
                  class="form-control"
                  type="tel"
                  v-model="telephone"
                  placeholder="Telephone"
                  id="telephone"
                />
                <span style="color: yellow">{{ error_telephone }}</span>
              </div>
              <div class="col-sm-4">
                <label for="adresse">Adresse</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Adresse"
                  v-model="adresse"
                  id="adresse"
                />
                <span style="color: yellow">{{ error_adresse }}</span>
              </div>
              <div class="col-sm-4">
                <label for="contact_urgent">Contact Urgent</label>
                <input
                  class="form-control"
                  type="tel"
                  v-model="contact_urgent"
                  placeholder="Contact Urgent"
                  id="contact_urgent"
                />
                <span style="color: yellow">{{ error_contact_urgent }}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <label class="form-label">Sexe :</label>
                <div class="d-flex">
                  <div class="form-check ml-2">
                    <input
                      value="F"
                      v-model="sexe"
                      id="sexe"
                      name="sexe"
                      type="radio"
                      class="form-check-input"
                    />
                    <label class="form-check-label" for="sexe">F</label>
                  </div>
                  <div class="form-check ml-2">
                    <input
                      value="M"
                      v-model="sexe"
                      id="sexe"
                      name="sexe"
                      type="radio"
                      class="form-check-input"
                    />
                    <label class="form-check-label" for="sexe">M</label>
                  </div>
                  <span style="color: yellow">{{ error_sexe }}</span>
                </div>
              </div>

              <div class="col-sm-4">
                <label for="date_naissance">Date De Naissance</label>
                <input
                  class="form-control"
                  type="date"
                  placeholder="Date de naissance"
                  v-model="date_naissance"
                  id="date_naissance"
                />
              </div>
              <div class="col-sm-4">
                <label for="lieu">Lieu de naissance</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="lieu de naissance"
                  v-model="lieu"
                  id="lieu"
                />
                <span style="color: yellow">{{ error_lieu }}</span>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col-sm-4">
                <label for="sit_mat">Situation Matrimoniale</label>
                <select
                  class="form-select form-control"
                  v-model="sit_mat"
                  id="sit_mat"
                >
                  <option value="Célibataire">Célibataire</option>
                  <option value="Marié">Marié</option>
                </select>
                <span style="color: yellow">{{ error_sit_mat }}</span>
              </div>
              <div class="col-sm-4">
                <label for="email">E-mail</label>
                <input
                  class="form-control"
                  type="email"
                  placeholder="Email"
                  v-model="email"
                  id="email"
                />
                <span style="color: yellow">{{ error_email }}</span>
              </div>
              <div class="col-sm-4">
                <label for="image">Image</label>
                <input
                  type="file"
                  class="form-control"
                  @change="onFileChange"
                  id="image"
                />
                <span style="color: yellow">{{ error_image }}</span>
              </div>
            </div>
            <br />

            <div class="row w-100">
              <button class="btn btn-success btt">AJOUTER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
 
 <script >
export default {
  name: "Creer",
  data() {
    return {
      nom: "",
      prenom: "",
      telephone: "",
      adresse: "",
      contact_urgent: "",
      date_naissance: "",
      sit_mat: "",
      email: "",
      sexe: "",
      lieu: "",
      image: null,
      error_nom: "",
      error_prenom: "",
      error_telephone: "",
      error_adresse: "",
      error_date_naissance: "",
      error_sit_mat: "",
      error_email: "",
      error_sexe: "",
      error_contact_urgent: "",
      error_lieu: "",
    };
  },
  methods: {
    onFileChange(event) {
      this.image = event.target.files[0];
    },
    async create(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("nom", this.nom);
      formData.append("prenom", this.prenom);
      formData.append("telephone", this.telephone);
      formData.append("adresse", this.adresse);
      formData.append("contact_urgent", this.contact_urgent);
      formData.append("date_naissance", this.date_naissance);
      formData.append("sit_mat", this.sit_mat);
      formData.append("email", this.email);
      formData.append("sexe", this.sexe);
      formData.append("lieu", this.lieu);

      try {
        const res = await fetch("http://127.0.0.1:8000/api/patient", {
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

          this.error_nom = error_msg.errors?.nom?.[0] || "";
          this.error_prenom = error_msg.errors?.prenom?.[0] || "";
          this.error_telephone = error_msg.errors?.telephone?.[0] || "";
          this.error_adresse = error_msg.errors?.adresse?.[0] || "";
          this.error_contact_urgent =
            error_msg.errors?.contact_urgent?.[0] || "";
          this.error_date_naissance =
            error_msg.errors?.date_naissance?.[0] || "";
          this.error_sit_mat = error_msg.errors?.sit_mat?.[0] || "";
          this.error_email = error_msg.errors?.email?.[0] || "";
          this.error_sexe = error_msg.errors?.sexe?.[0] || "";
          this.error_lieu = error_msg.errors?.lieu?.[0] || "";
        } else {
          this.nom = "";
          this.prenom = "";
          this.telephone = "";
          this.adresse = "";
          this.contact_urgent = "";
          this.date_naissance = "";
          this.sit_mat = "";
          this.email = "";
          this.sexe = "";
          this.lieu = "";

          this.error_nom = "";
          this.error_prenom = "";
          this.error_telephone = "";
          this.error_adresse = "";
          this.error_contact_urgent = "";
          this.error_date_naissance = "";
          this.error_sit_mat = "";
          this.error_email = "";
          this.error_sexe = "";
          this.error_lieu = "";

          alert("Patient créé avec succès !");
        }
      } catch (error) {
        console.error("Erreur lors de la création du patient:", error);
        alert("Une erreur est survenue lors de la création du patient.");
      }
    },
  },
  async created() {},
};
</script>