<template>
  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <router-link to="/home" class="nav-link" :class="{'collapsed' : $route.path!='/home'}">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </router-link>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item" v-if="current_role==='1011111001111101' || current_role==='1110101111101011'">
        <a :class="['nav-link',{'collapsed ' : !$route.path.startsWith('/pat/')}]" data-bs-target="#patient-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-people-fill"></i><span>Patient</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="patient-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <router-link to="/pat/c_pat" :class="{'active' : $route.path==='/pat/c_pat'}">
              <i class="bi bi-circle"></i><span>Créer</span>
            </router-link>
          </li>
          <li>
            <router-link to="/pat/all_pat" :class="{'active' : $route.path==='/pat/all_pat'}">
              <i class="bi bi-circle"></i><span>Lister</span>
            </router-link>
          </li>
        </ul>
      </li><!-- End Patient Nav -->

      <li class="nav-item" v-if="current_role==='1011111001111101' || current_role==='0100000110000011'">
        <a :class="['nav-link',{'collapsed ' : !$route.path.startsWith('/per/')}]" data-bs-target="#personnel-nav" data-bs-toggle="collapse" href="#">
          <i class="bx bxs-user"></i><span>Personnel</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="personnel-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <router-link to="/per/c_per" :class="{'active' : $route.path==='/per/c_per'}">
              <i class="bi bi-circle"></i><span>Créer</span>
            </router-link>
          </li>
          <li>
            <router-link to="/per/all_per" :class="{'active' : $route.path==='/per/all_per'}">
              <i class="bi bi-circle"></i><span>Lister</span>
            </router-link>
          </li>
        </ul>
      </li><!-- End Personnel Nav -->

      <li class="nav-item" v-if="current_role==='1011111001111101' || current_role==='0100000110000011'">
        <a :class="['nav-link',{'collapsed ' : !$route.path.startsWith('/med/')}]" data-bs-target="#medicament-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Medicament</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="medicament-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <router-link to="/med/c_cat" :class="{'active' : $route.path==='/med/c_cat'}">
              <i class="bi bi-circle"></i><span>Créer Categorie</span>
            </router-link>
          </li>
          <li>
            <router-link to="/med/c_med" :class="{'active' : $route.path==='/med/c_med'}">
              <i class="bi bi-circle"></i><span>Créer Medicament</span>
            </router-link>
          </li>
          <li>
            <router-link to="/med/all_cat" :class="{'active' : $route.path==='/med/all_cat'}">
              <i class="bi bi-circle"></i><span>Lister Categorie</span>
            </router-link>
          </li>
          <li>
            <router-link to="/med/all_med" :class="{'active' : $route.path==='/med/all_med'}">
              <i class="bi bi-circle"></i><span>Lister Medicament</span>
            </router-link>
          </li>
        </ul>
      </li><!-- End Medicament Nav -->

      <li class="nav-item" v-if="current_role==='1011111001111101' || current_role==='0100000110000011'">
        <a :class="['nav-link',{'collapsed ' : !$route.path.startsWith('/ser/')}]" data-bs-target="#service-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Gestion des services</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="service-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <router-link to="/ser/c_ser" :class="{'active' : $route.path==='/ser/c_ser'}">
              <i class="bi bi-circle"></i><span>Créer</span>
            </router-link>
          </li>
          <li>
            <router-link to="/ser/all_ser" :class="{'active' : $route.path==='/ser/all_ser'}">
              <i class="bi bi-circle"></i><span>Lister</span>
            </router-link>
          </li>
        </ul>
      </li><!-- Service Nav -->

      <li class="nav-item" v-if="current_role==='1011111001111101' || current_role==='0100000110000011'">
        <a :class="['nav-link',{'collapsed ' : !$route.path.startsWith('/exa/')}]" data-bs-target="#examen-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Gestion des Examens</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="examen-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <router-link to="/exa/c_exa" :class="{'active' : $route.path==='/exa/c_exa'}">
              <i class="bi bi-circle"></i><span>Créer</span>
            </router-link>
          </li>
          <li>
            <router-link to="/exa/all_exa" :class="{'active' : $route.path==='/exa/all_exa'}">
              <i class="bi bi-circle"></i><span>Lister</span>
            </router-link>
          </li>
        </ul>
      </li><!-- Examen Nav -->

      <li class="nav-item" v-if="current_role==='1011111001111101' || current_role==='0100000110000011'">
        <a :class="['nav-link',{'collapsed ' : !$route.path.startsWith('/con/')}]" data-bs-target="#consultation-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Consultation</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="consultation-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <router-link to="/con/c_con" :class="{'active' : $route.path==='/con/c_con'}">
              <i class="bi bi-circle"></i><span>Créer</span>
            </router-link>
          </li>
          <li>
            <router-link to="/con/all_con" :class="{'active' : $route.path==='/con/all_con'}">
              <i class="bi bi-circle"></i><span>Lister</span>
            </router-link>
          </li>
          <li>
            <router-link to="/con/res_labo" :class="{'active' : $route.path==='/con/res_labo'}">
              <i class="bi bi-circle"></i><span>Resultat Labo</span>
            </router-link>
          </li>
        </ul>
      </li><!-- Consultation Nav -->

      <li class="nav-item" v-if="current_role==='1011111001111101' || current_role==='0100000110000011' || current_role==='0011100000011100'">
        <a :class="['nav-link',{'collapsed ' : !$route.path.startsWith('/labo/')}]" data-bs-target="#laboratoire-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Laboratoire</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="laboratoire-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <router-link to="/labo/c_exam" :class="{'active' : $route.path==='/labo/c_exam'}">
              <i class="bi bi-circle"></i><span>Créer</span>
            </router-link>
          </li>
          <li>
            <router-link to="/labo/all_exam" :class="{'active' : $route.path==='/labo/all_exam'}">
              <i class="bi bi-circle"></i><span>Lister</span>
            </router-link>
          </li>
        </ul>
      </li><!-- Laboratoire Nav -->

      <!--caisse-->
      <li class="nav-item" v-if="current_role==='1011111001111101' || current_role==='0100000110000011'">
        <a :class="['nav-link',{'collapsed ' : !$route.path.startsWith('/caisse/')}]" data-bs-target="#caisse-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Caisse</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="caisse-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <router-link to="/caisse/c_caisse" :class="{'active' : $route.path==='/caisse/c_caisse'}">
              <i class="bi bi-circle"></i><span>Operation</span>
            </router-link>
          </li>
          
        </ul>
      </li><!-- Caisse Nav -->

      <li class="nav-heading">Pages</li>

      <li class="nav-item">
        <router-link to="/profile" class="nav-link" :class="{'collapsed' : $route.path!='/profile'}">
          <i class="bi bi-person"></i>
          <span>Profile</span>
        </router-link>
      </li><!-- End Profile Page Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" href="pages-faq.html">
          <i class="bi bi-question-circle"></i>
          <span>F.A.Q</span>
        </a>
      </li><!-- End F.A.Q Page Nav -->

      <li class="nav-item">
        <router-link to="/welcome" class="nav-link" :class="{'collapsed' : $route.path!='/welcome'}">
          <i class="bi bi-envelope"></i>
          <span>Welcome</span>
        </router-link>
      </li><!-- End Welcome Page Nav -->

    </ul>

  </aside><!-- End Sidebar-->
</template>

<script>
export default{
        data(){
            return{
                current_token:localStorage.getItem('current_token'),
                current_nom:localStorage.getItem('current_nom'),
                current_prenom:localStorage.getItem('current_prenom'),
                current_email:localStorage.getItem('current_email'),
                current_profil:localStorage.getItem('current_profil'),
                current_role:localStorage.getItem('current_role'), 
            }
        },
    }
</script>