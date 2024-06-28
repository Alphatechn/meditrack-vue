<template>
    <div class="pt-4 pb-2">
        <h5 class="card-title text-center pb-0 fs-4">Vous avez oublié votre mot de passe ?</h5>
        <p class="text-center small">Ici, vous pouvez facilement récupérer un nouveau mot de passe.</p>
    </div>

    <form class="row g-3 needs-validation" @submit="forgotpass">
        <div class="col-12">
            <label for="email" class="form-label">E-mail</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">@</span>
              <input type="email" v-model="email" class="form-control" id="email" placeholder="name@example.com"> <br>
             
            </div> 
            <span style="color:red">{{ error_email }}</span>
        </div>
        <div class="col-12">
          <button class="btn btn-primary w-100" type="submit">Demandez un nouveau mot de passe</button>
        </div>
        <div class="col-12">
            <p class="small mb-0">
                <router-link to="/">Connexion</router-link>
            </p>
        </div>
    </form>
</template>

<script >

    import { useRoute } from "vue-router";

    const route = useRoute();

    export default{
    
    name:"renew",
    data(){
        return {
            email:"",
            error_email:"",
        };
    },
    
    methods:{
        

        async forgotpass(e){
            e.preventDefault();

            const user = {
                email:this.email,
            };

            let res;
            res = await fetch(
                "http://127.0.0.1:8000/api/forgotpass",
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
                
            }
            else{
                if(res.status === 401){
                const error_msg = await res?.json();

                alert(error_msg.message);

                }else{
                    alert("Demande de reinitialisation envoyée. veuillez vous connecter à votre compte GMAIL");
                    location.href = '/';
                }
                
            }

        },

    },
    
    };

</script>

<style></style>
