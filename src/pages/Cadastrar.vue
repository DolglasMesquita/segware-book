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
                    <div class="text-h6 q-pb-lg"> Área de cadastro </div>
                    <form @submit.prevent="cadastrar()">
                        <q-input filled v-model.trim="user.username" label="Usuário" 
                        :rules="[val => !!val || 'Insira uma nome de usuário', val => val.length > 2 
                        || 'Usuário precisa ter no mínimo 3 caracteres']" color="green"/>

                        <q-input class="q-pt-md" v-model.trim="user.password" filled label="Senha" 
                        :type="isPwd ? 'password' : 'text'" 
                        :rules="[val => !!val || 'Insira uma senha senha', val => val.length > 2 
                        || 'Senha precisa ter no mínimo 3 caracteres']" color="green">
                            <template v-slot:append>
                                <q-icon
                                :name="isPwd ? 'visibility_off' : 'visibility'"
                                class="cursor-pointer"
                                @click="isPwd = !isPwd"
                                />
                            </template>
                        </q-input> 
                        <q-btn type="submit" color="green" text-color="white" label="Cadastrar" class="q-mt-md"/> 
                        <q-btn color="grey" to="/login" text-color="white" class="q-mt-md q-ml-md"> 
                            <q-icon name="arrow_back_ios" /> 
                        </q-btn>
                    </form>
                </q-card>
            </div>
        </div>
    </q-page-container>

  </q-layout>
</template>

<script>

    import api from 'src/boot/axios.js'

    export default {
        data() {
            return {
                user: {
                    password: '',
                    username: ''
                },
                isPwd: true,
            }        
        },
        methods: {
            cadastrar() {
                if(this.user.username.length > 2 && this.user.password.length > 2) {
                    api.cadastrar(this.user).then(response => {
                            if(response.status == 200) {
                                alert("Cadastrado com sucesso!"); 
                                window.location.href = "/#/login"                           
                            }
                    }).catch((e) => {
                        if(e.response.data.errors[0].message == "username must be unique") {
                            alert("O usuário informado já esta cadastrado");
                        }

                        if(e.response.data.errors[0] == "username must be at least 3 characters") {
                            alert("O nome de usuário precisa ter pelo menos 3 caracteres");
                        }
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
