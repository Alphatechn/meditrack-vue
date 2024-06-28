<template>
  <div class="pagetitle">
    <h1>Service</h1>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="breadcrumb-item active">Creation Service</li>
      </ol>
    </nav>
  </div>

  <div class="content">
    <div class="container-fluid">
      <div class="card bg-white border-0">
        <div class="col-lg-12 col-md-12">
          <div class="card-header border-0 bg-white">
            <div class="row">
              <h4 id="mss">Ajouter un service</h4>
            </div>
          </div>
          <div class="card-body border-0">
            <form action="" method="post" enctype="multipart/form-data">
              <div class="row">
                <div class="col-12">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Service Medicament"
                    name="service"
                  />
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
</script>