<template>
    <div class="pt-4 pb-2">
        <h5 class="card-title text-center pb-0 fs-4">Connectez-vous à votre compte</h5>
        <p class="text-center small">Entrez votre E-mail et votre mot de passe pour vous connecter</p>
    </div>

    <form class="row g-2 needs-validation" @submit="login">

        <div class="col-12">
          <label for="email" class="form-label">E-mail</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="email" v-model="email" class="form-control" id="email" placeholder="name@example.com"> <br>
           
          </div> 
          <span style="color:red">{{ error_email }}</span>
        </div>

        <div class="col-12">
          <label for="password" class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" id="password" placeholder="..." >
          <span style="color:red">{{ error_password }}</span>
        </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
            <label class="form-check-label" for="rememberMe">Se souvenir de moi</label>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary w-100" type="submit">Se Connecter</button>
        </div>
        <div class="col-12">
            <p class="small mb-0">
                <router-link to="/forgetpass">Mot de passe oublié ? </router-link>
            </p>
        </div>
    </form>
</template>

<script >

export default{
  name:"Login",
  data(){
      return {
          email:"",
          password:"",
          error_email:"",
          error_password:"",
      };
  },
  methods:{
      

      async login(e){
          e.preventDefault();

            const user = {
                email:this.email,
                password:this.password,
            };

          let res;
          res = await fetch(
              "http://127.0.0.1:8000/api/login",
              {
                  method:"POST",
                  headers:{
                      'Accept': 'Application/json',
                      'Content-Type': 'Application/json;charset=utf-8',
                  },
                  body: JSON.stringify(user)
              }
              );

          if(res.status === 422){
              const error_msg = await res?.json();

              if (typeof error_msg.errors.email === 'undefined' || error_msg.errors.email === null) {
                  this.error_email="";
              }else{
                  this.error_email = error_msg.errors.email[0];
              }
              if (typeof error_msg.errors.password === 'undefined' || error_msg.errors.password === null) {
                  this.error_password="";
              }else{
                  this.error_password = error_msg.errors.password[0];
              }
          }else{
            if(res.status === 401){
                const error_msg = await res?.json();
                // console.log(error_msg);
                if(error_msg.messa){
                    this.error_password = error_msg.messa;
                    this.error_email="";
                }else{
                    this.error_email = error_msg.message;
                    this.error_password="";
                }

            }else{
                const login_user = await res?.json();
                localStorage.setItem('current_token', login_user.token);
                localStorage.setItem('current_iduser', login_user.user.id);
                localStorage.setItem('current_nom', login_user.user.nom);
                localStorage.setItem('current_prenom', login_user.user.prenom);
                localStorage.setItem('current_profil', login_user.user.profil);
                localStorage.setItem('current_fonction', login_user.type_user.libelle);
                localStorage.setItem('current_role', login_user.type_user.role);
                localStorage.setItem('current_email', login_user.user.email);
                if(login_user.appartenir !=''){
                    localStorage.setItem('current_idser', login_user.appartenir.id_ser);
                    localStorage.setItem('current_idper', login_user.personnel.id);
                }else{
                    localStorage.setItem('current_idpat', login_user.patient.id);
                }

                

                this.nom= "";
                this.email= "";
                this.password= "";

                location.href = '/home';
            }
        }

      },

  },
};
</script>

<style>

</style>