import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Welcome from '../pages/Welcome.vue';
import Forget_Pass from '../components/Forget_Pass.vue';
import Login from '../components/Login.vue';
import MainLayout from '../components/Layouts/MainLayout.vue';
import ReLoLayout from '../components/Layouts/ReLoLayout.vue';

import Profile from '../pages/Profile.vue';
import Createser from '../pages/service/create.vue';
import Allser from '../pages/service/indexs.vue';
import Allmed from '../pages/Medicament/indexm.vue';
import Allcat from '../pages/Medicament/indexc.vue';
import Createmed from '../pages/Medicament/createmed.vue';
import Createcat from '../pages/Medicament/create.vue';
import CreatePat from '../pages/Patient/Create.vue';
import AllPat from '../pages/Patient/Index.vue';
import Parametre from '@/pages/Patient/Parametre.vue'
import CreatePer from '../pages/Personnel/Create.vue';
import AllPer from '../pages/Personnel/Index.vue';

import CreateExa from '../pages/Examen/Create.vue';
import AllExa from '../pages/Examen/index.vue';
import CreateCon from '../pages/Consultation/Create.vue';
import AllCon from '../pages/Consultation/index.vue';
import ResLabo from '../pages/Consultation/rlabo.vue';
import CreateExamL from '../pages/Laboratoire/Create.vue';
import ShowExamL from '../pages/Laboratoire/index.vue';
// route caisse //

import Createc from '../pages/caisse/createc.vue';

const routes = [
  {
    path:"/main/",
    component:MainLayout,
    children:[
      {
        path:"/home",
        name:"Home",
        component:Home,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            next();
          }else{
            next('/');
          }
        }
      },
      {
        path:"/profile",
        name:"Profile",
        component:Profile,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            next();
          }else{
            next('/');
          }
        }
      },   
      {
        path:"/welcome",
        name:"Welcome",
        component:Welcome,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            next();
          }else{
            next('/');
          }
        }
      },
      {
        path:"/pat/c_pat",
        name:"CreatePat",
        component:CreatePat,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='1110101111101011'){
              next();
            }else{
              next('/home');
            }
            
          }else{
            next('/');
          }
        }
      },
      {
        path:"/pat/all_pat",
        name:"allPat",
        component:AllPat,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='1110101111101011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      },
      {
        path:"/pat/param",
        name:"param",
        component:Parametre,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            next();
          }else{
            next('/');
          }
        }
      },
      {
        path:"/per/c_per",
        name:"CreatePer",
        component:CreatePer,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      },
      {
        path:"/per/all_per",
        name:"allPer",
        component:AllPer,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      },
      {
        path:"/med/c_cat",
        name:"Createcat",
        component:Createcat,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      },
      {
        path:"/med/all_cat",
        name:"all_cat",
        component:Allcat,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      },
      {
        path:"/med/all_med",
        name:"all_med",
        component:Allmed,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      },
      {
        path:"/med/c_med",
        name:"Createmed",
        component:Createmed,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      },
      {
        path:"/ser/c_ser",
        name:"Createser",
        component:Createser,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser == '1011111001111101' || isUser == '0100000110000011'){
              next();
            }else{
              next('/home');
            }
            
          }else{
            next('/');
          }
        }
      }, {
        path:"/ser/all_ser",
        name:"Allser",
        component:Allser,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      },
      {
        path:"/exa/c_exa",
        name:"CreateExa",
        component:CreateExa,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      }, 
      {
        path:"/exa/all_exa",
        name:"AllExa",
        component:AllExa,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      },
      {
        path:"/con/c_con",
        name:"CreateCon",
        component:CreateCon,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      }, 
      {
        path:"/con/all_con",
        name:"AllCon",
        component:AllCon,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      },
      {
        path:"/con/res_labo",
        name:"ResLabo",
        component:ResLabo,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      },
      // caisse//
      {
        path:"/caisse/c_caisse",
        name:"Createc",
        component:Createc,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      },

      // LABORATOIRE
      {
        path:"/labo/c_exam",
        name:"CreateExamL",
        component:CreateExamL,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011' || isUser=='0011100000011100'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      }, 
      {
        path:"/labo/all_exam",
        name:"ShowExamL",
        component:ShowExamL,
        beforeEnter: (to, from, next) => {
          const isToken =localStorage.getItem('current_token');
          const isUser =localStorage.getItem('current_role');

          if(isToken && isUser){
            if(isUser=='1011111001111101' || isUser=='0100000110000011' || isUser=='0011100000011100'){
              next();
            }else{
              next('/home');
            }
          }else{
            next('/');
          }
        }
      }, 
    ],
  },
  {
    path:"/",
    component:ReLoLayout,
    children:[
      {
        path:"/",
        name:"Login",
        component:Login,
      },
      {
        path:"/forgetpass",
        name:"Forget_Pass",
        component:Forget_Pass,
      },
    ],
  },
];

const router = createRouter({
  history:createWebHistory(),
  routes,
});

export default router;
