<template>

  <section class="src-componentes-respuestas">
    <div class="jumbotron">
      <h2>Respuestas</h2>
      <hr>

      <div class="table-responsive">
        <table class="table table-dark">
         <thead>
            <tr class="bg-dark text-white">
            <th>Número de pregunta</th>
            <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
          <tr class="bg-dark text-white" v-for="(pregunta,index) in preguntas" :key="index">
            <td>{{pregunta.numero}}</td>
            <td>{{pregunta.respuesta.toString()}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-componentes-respuestas',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas: [
          { numero: 1, respuesta: ['b',' d']},
          { numero: 2, respuesta: ['c']},
          { numero: 3, respuesta: ['b',' e']}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-http {

  }

  .jumbotron {
    background: rgb(211,211,211); 
    color: white;
  }

  h2{
    color: black;
  }
     


  hr {
    background-color: #fff;
  }  
</style>