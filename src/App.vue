<!-- alurapic/src/App.vue -->
<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <input
      type="search"
      class="filtro"
      v-on:input="filtro = $event.target.value"
      placeholder="filtre pelo título da foto"
    />

    {{ filtro }}
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto in fotosComFiltro" v-bind:key="foto">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>


<script>
import Painel from "./components/shared/painel/painel.vue";
import ImagemResponsiva from "./components/shared/imagem-responsiva/imagemResponsiva"

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva
  },
  data() {
    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: ""
    };
  },
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },
  created() {
    //$http só funciona pois foi instânciado em main js VueResource
    this.$http
      .get("http://localhost:3000/v1/fotos")
      //Ao receber a resposta da api converta o resultado para json
      .then(res => res.json())
      //Após retornar o resultado em json insira o retorno dentro
      //de fotos criado em data()
      .then(
        fotos => (this.fotos = fotos),
        err => console.log(err)
      );
  }
};
</script>

<style>
.titulo {
  text-align: center;
}

.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}


/* estilo do painel */

.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

.painel * {
  box-shadow: 5px 5px 5px;
}

.filtro {
  display: block;
  width: 100%;
}
</style>