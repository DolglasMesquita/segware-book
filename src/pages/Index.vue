<template>
  <q-page>
    <div class="q-pa-md col-12">
      <div class="q-pa-md" >
        <q-input
          v-model="text"
          filled
          autogrow
          type="textarea"
          placeholder="O que você quer contar para o mundo?" 
          color="green"
        />
        <q-btn class="q-mt-md float-right" color="green" label="Publicar" @click="publicar()"/> <br/><br/>
      </div>
      
      <q-separator class="q-mt-md q-mb-md"/>

      <q-table
        grid
        card-class="card"
        title="Todas as publicações"
        :rows="feeds"
        :columns="columns"
        row-key="id"
        :filter="filter"
        hide-header
        :loading="loading"
        :rows-per-page-options="[10, 20, 30, 0]"  
        no-data-label="Não encontrei nada para você"
        no-results-label="Nenhum item corresponde a busca"
      >

      <template v-slot:item="props">
        <div class="q-pa-xs q-mb-md col-12">
          <q-card class="q-pa-xs bg-green-1">
            <strong class="q-pa-lg">{{ props.row.author.username }}</strong>
            <q-separator />
            <q-card-section class="text-left" style="white-space: pre-wrap;">
              {{ props.row.content }}
              <br>
            </q-card-section>
            <q-separator />
            <q-card-section>
            <span v-if="props.row.activeUserLovedIt == 0"> 
              <q-icon class="cursor-pointer" color="negative" name="favorite_border" @click="love(props.row.id)"/> {{props.row.loves}}
            </span>
            <span v-else> 
              <q-icon class="cursor-pointer"  color="negative" name="favorite" @click="deslove(props.row.id)"/> {{props.row.loves}}
            </span>
            <span class="q-pl-md" v-if="props.row.activeUserLikedIt == 0"> 
              <q-icon class="cursor-pointer" color="green" name="thumb_up_off_alt" @click="like(props.row.id)"/> {{props.row.likes}}
            </span>
            <span v-else class="q-pl-md"> 
              <q-icon class="cursor-pointer" color="green" name="thumb_up_alt" @click="deslike(props.row.id)" /> {{props.row.likes}}
            </span>
            <span class="float-right"> 
              {{Date(props.row.createdAt).split(" ")[2] + '/' + Date(props.row.createdAt).split(" ")[1] + "/" + Date(props.row.createdAt).split(" ")[3]  }}
            </span>
            </q-card-section>
          </q-card>
        </div>
      </template>


        <template v-slot:top-right>
          <q-input dense debounce="300" v-model="filter" placeholder="Pesquisar" color="green">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import api from 'src/boot/axios.js'

export default defineComponent({

  name: 'PageIndex',
  data() {
    return {
      feeds: [],
      columns: [
        {
          name: 'id', label: 'Id', align: 'left', field: 'id'},
        { name: 'content', align: 'left', label: 'Content', field: 'content' },
        { name: 'createdAt', align: 'left', label: 'Data', field: 'createdAt'},
        { name: 'likes', label: 'Likes', field: 'likes'},
        { name: 'loves', label: 'Loves', field: 'loves' },
        { name: 'author', label: 'Author', field: 'author'}
      ],
      filter: '',
      text: '',
      loading: true
    }
  },

  methods: {

    publicar(){
        let conteudo = {
        'content': this.text
      }

      api.publicar(conteudo).then(request => {
        if(request.status == 201) {  
          this.text = '';
          this.listarFeed();
        }
      })
    },

    deslogar() {
      sessionStorage.clear();
      window.location.href = '/#/login';
    },
    
    like(id) {

      let react = {
        'feedId': id,
        'like': true,
        'love': false
      }

      api.like(react).then(response =>  {
        this.listarFeed();
      });
    },

    deslike(id) {

      let react = {
        'feedId': id,
        'like': false
      }

      api.like(react).then(response =>  {
        this.listarFeed();
      });
    },

    love(id) {

      let react = {
        'feedId': id,
        'love': true,
        'like': false
      }

      api.love(react).then(response =>  {
        this.listarFeed();
      });
    },

    deslove(id) {

      let react = {
        'feedId': id,
        'love': false
      }

      api.love(react).then(response =>  {
        this.listarFeed();
      });
    },

    listarFeed() {
      api.feed().then(request => {
        this.feeds = request.data;
        this.loading = false;
      }).catch((e) => {
        sessionStorage.clear();
        window.location.href = "/#/login";
      });
    },    
  },

  mounted() {
    api.feed().then(request => {
        this.feeds = request.data;
        this.loading = false;
      }).catch((e) => {
        sessionStorage.clear();
        window.location.href = "/#/login";
      });
  }
  
})
</script>

<style scoped>


</style>
