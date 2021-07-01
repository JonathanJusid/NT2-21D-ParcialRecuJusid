<template>
  <section class="src-componentes-formulario">
    <div class="jumbotron">

        <h2>Formulario de gastos</h2>
        <hr>
        <br>

        <vue-form :state="formState" @submit.prevent="enviar()">

          <validate tag="div">
            <label for="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              class="form-control"
              autocomplete="off"
              v-model.trim="formData.nombre"
              required
              :minlength="nombreLengthMin"
              :maxlength="nombreLengthMax"
              no-espacios
            >

            <field-messages name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
              <div slot="no-espacios" class="alert alert-danger mt-1">
                No se permiten espacios intermedios en este campo
              </div>            
              <div slot="minlength" class="alert alert-danger mt-1">
                Este campo requiere como mínimo {{ nombreLengthMin }} caracteres
              </div>            
              <div v-if="formData.nombre.length == nombreLengthMax" class="alert alert-warning mt-1">
                Este campo debe tener como máximo {{ nombreLengthMax }} caracteres
              </div>            
            </field-messages>

          </validate>
          <br>

          <validate tag="div">
            <label for="descripcion">Descripción</label>
            <input 
              type="descripcion" 
              id="descripcion" 
              name="descripcion" 
              class="form-control"
              autocomplete="off"
              v-model.trim="formData.descripcion"
              required
            >
         
            <field-messages name="descripcion" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>                  
            </field-messages>

          </validate>
          <br>


          <validate tag="div">
            <label for="importe">Importe</label>
            <input 
              type="number" 
              id="importe" 
              name="importe" 
              class="form-control"
              autocomplete="off"
              v-model.number="formData.importe"
              required
              :min="importeMinimo"
            >
 
            <field-messages name="edad" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
              <div slot="min" class="alert alert-danger mt-1">El importe mínimo es de $ {{importeMinimo}}</div>       
            </field-messages>

          </validate>
          <br>

      
          <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Registrar gasto</button>
        </vue-form>

        <hr>
        <br>
        
        <label for="presupuesto">Ingresá el presupuesto</label>
        <input
            type="number" 
            id="presupuesto" 
            name="presupuesto"
            class="form-control"
            v-model="presupuesto"
            :style="{ color: getColorPresupuesto }"
        >
        <hr>
   
        <h2>Tabla de gastos</h2>
        <hr>
        <div v-if="gastos.length" class="table-responsive">
                  <table class="table">
                      <tr class="bg-info text-white">
                          <th>Nombre</th>
                          <th>Descripción</th>
                          <th>Importe</th>
                          <th>Fecha del gasto</th>
                      </tr>
                      <tr v-for="(gasto, index) in gastos" :key="index" class="bg-success text-white" >
                          <td>{{ gasto.nombre }}</td>
                          <td>{{ gasto.descripcion }}</td>
                          <td>${{ gasto.importe}}</td>
                          <td>{{ gasto.fecha}}</td>
                      </tr>
                      <tr>
                          <th>Total</th>
                          <td></td>
                          <td class="total" :style="{ color: getColorTotal }">$ {{total}}</td>
                      </tr>
                  </table>  
         </div>
                  <h4 v-else class="alert alert-danger">No se encontraron gastos</h4>
    </div>
  </section>

</template>

<script>
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      gastos : [],
      total : 0,
      nombreLengthMin : 3,
      nombreLengthMax : 15,
      importeMinimo : 0,
      presupuesto : 0
    }
  },
  computed: {
    getColorTotal(){
      let color;
      const maxVerde = 1000;
      const maxMagenta = 5000;

      switch (true) {
          case this.total < maxVerde: 
            color = '#008000';
            break;
          case this.total >= maxVerde && this.total <= maxMagenta:
            color = '#FF00FF';
            break;
          case this.total > maxMagenta:
            color = '#FF7F00';
            break;
            }
            return color;
    },
    getColorPresupuesto(){
      let color;

      if(this.total > this.presupuesto){
         color = 'red'
      }

      return color
    }

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        descripcion: '',
        importe: 0
      }
    },

    enviar() {
      const fecha = new Date();
      this.gastos.push({
              ...this.formData,
              fecha: `${fecha.toLocaleDateString('es-AR')} ${fecha.toLocaleTimeString('es-AR')}`
            });
      this.total += this.formData.importe
      this.formData = this.getInicialData()
      this.formState._reset()
    }
  }
}
</script>

<style>
.src-componentes-formulario {

}

.jumbotron {
    background-color: rgb(211,211,211);
    color: black;
}

.total{
  font-size: 20px;  
  background-color: 
}

td{
  font-size: 16px;
}

hr {
    background-color: #eee;
}

pre {
    color: white;
}
</style>