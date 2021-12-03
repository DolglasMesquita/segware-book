<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-green text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            
          </q-avatar>
          SegwareBook
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
        <div class="q-pa-lg">
            <div class="row justify-center q-pt-lg ">
                <q-card class="col-12 col-md-5 q-pa-lg">
                    <div class="text-h6 q-pb-lg"> Login </div>
                    <form @submit.prevent="entrar()">
                        <q-input filled v-model.trim="user.username" label="Usuário" 
                        :rules="[val => !!val || 'Insira usuário', val => val.length > 2 
                        || 'Usuário precisa ter no mínimo 3 caracteres']" color="green"/>

                        <q-input class="q-pt-md" v-model.trim="user.password" filled label="Senha" 
                        :type="isPwd ? 'password' : 'text'" 
                        :rules="[val => !!val || 'Insira senha', val => val.length > 2 || 
                        'Senha precisa ter no mínimo 3 caracteres']" color="green">
                            <template v-slot:append>
                                <q-icon
                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                                />
                            </template>
                        </q-input> 
                        <q-btn type="submit" color="green" text-color="white" label="Entrar" class="q-mt-md" /> 
                        <router-link to="" class="link float-right"> Esqueci minha senha </router-link>
                    </form>
                </q-card>
            </div>
        </div>
        <div class="row justify-center">
            <q-btn color="secondary" to="/cadastrar" text-color="white" label="Cadastre-se aqui"/>  
        </div>
    </q-page-container>

  </q-layout>
</template>

<script>

    import api from 'src/boot/axios.js'

    export default {
        data() {
            return {
                isPwd: true,
                user: {
                    password: '',
                    username: ''
                }
            }        
        },
        
        methods: {
            entrar() {
                if(this.user.username.length > 2 && this.user.password.length > 2) {
                    api.entrar(this.user).then(response => {
                            if(response.status == 200) {  
                                sessionStorage.setItem('name', this.user.username);
                                sessionStorage.setItem('token', response.data);
                                window.location.href = "/"               
                            }
                    }).catch((e) => {
                        alert("Usuário e/ou senha inválidos");
                    });
                }
            }
        }
    }
    
</script>

<style scoped>

.link {
    text-decoration: none;
}

</style>
