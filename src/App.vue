<template>
  <div>
    <h1>{{titulo}}</h1>
    <ul>
      <li v-for="foto of fotos" v-bind:key="foto">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      fotos: [
        {
          url:
            "https://s2.glbimg.com/XGiwiDG6MIsdX_1CwCXbwn385Y4=/0x0:800x450/1600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg",
          titulo: "cachorro"
        },
        {
          url:
            "https://s2.glbimg.com/XGiwiDG6MIsdX_1CwCXbwn385Y4=/0x0:800x450/1600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg",
          titulo: "cachorrao"
        }
      ]
    };
  },created() {

    //$http só funciona pois foi instânciado em main js VueResource
     this.$http.get('http://localhost:3000/v1/fotos')
     //Ao receber a resposta da api converta o resultado para json
      .then(res => res.json())
      //Após retornar o resultado em json insira o retorno dentro 
      //de fotos criado em data()
      .then(fotos => this.fotos = fotos, err => console.log(err));

  }
};
</script>

<style>
</style>
