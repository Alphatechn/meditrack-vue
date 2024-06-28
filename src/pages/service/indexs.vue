<template>
  <div class="pagetitle">
    <h1>Service</h1>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="breadcrumb-item active">Liste Service</li>
      </ol>
    </nav>
  </div>
  <!-- End Page Title -->
  <div class="content">
    <div class="container-fluid">
      <div class="card">
        <div class="card-body">
          <div class="row justify-content-center">
            <h1 id="ll" class="card-title text-center">
              <b> LISTE DES SERVICES </b>
            </h1>
          </div>

          <div class="row justify-content-end mr-1">
            <p>
              <button class="btn btn-success w-">
                <router-link class="text-white link" to="/ser/c_ser">
                  Ajouter un service<i class="fas fa-plus"></i
                ></router-link>
              </button>
            </p>
          </div>

          <table id="example1" class="table table-bordered table-striped">
            <thead>
              <tr>
                <th scope="col">N°</th>
                <th scope="col">service</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>laborantin</td>

                <td>
                  <small class="d-flex">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal7"
                      class="edit py-2"
                      title="Delete"
                      data-toggle="tooltip"
                      ><i class="fa fa-trash text-danger"></i></a
                    ><span class="mx-2 text-secondary py-2">|</span>
                    <a
                      href="#"
                      class="delete py-2"
                      title="Edit"
                      data-toggle="tooltip"
                      scope="col"
                      ><i class="fa fa-edit text-primary"></i
                    ></a>
                  </small>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>aide soignant</td>

                <td>
                  <small class="d-flex">
                    <a
                      href="#"
                      class="edit py-2"
                      title="Delete"
                      data-toggle="tooltip"
                      ><i class="fa fa-trash text-danger"></i></a
                    ><span class="mx-2 text-secondary py-2">|</span>
                    <a
                      href="#"
                      class="delete py-2"
                      title="Edit"
                      data-toggle="tooltip"
                      scope="col"
                      ><i class="fa fa-edit text-primary"></i
                    ></a>
                  </small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- modal -->
      <div
        class="modal fade"
        id="myModal7"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-sm"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input type="hidden" name="idper" class="idper" />
              <input type="hidden" name="idpers" class="idper" />
              <div class="offset-1">
                <small> <h6>Voulez vous vraiment suprimer?</h6></small>
              </div>
              <div class="row justify-content-center">
                <br />
                <h4 class="nomper"></h4>
              </div>

              <div class="row justify-content-center"></div>
            </div>
            <div class="offset-5 mb-2">
              <input class="btn btn-danger" type="submit" value="OUI" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.card {
  box-shadow: 10px 10px 10px rgb(218, 216, 216);
}
body {
  background-color: rgb(239, 240, 240);
}
.op {
  color: white;
  display: none;
}
#img {
  height: 620px;
  width: 255px;
  margin-left: -2%;
}
</style>
<script setup>
$(function () {
  $("#example1")
    .DataTable({
      responsive: true,
      lengthChange: false,
      autoWidth: false,
      buttons: ["copy", "csv", "excel", "pdf", "print", "colvis"],
    })
    .buttons()
    .container()
    .appendTo("#example1_wrapper .col-md-6:eq(0)");
});
</script>