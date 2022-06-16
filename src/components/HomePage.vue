<template>
  <main>
    <div class="px-4 py-6 sm:px-0">
      <div
          class="text-center"
      >
        <h2>Please select {{currencies_limit}} currencies to use for conversions.</h2>


        <div style="width:50%; margin: auto">
          <v-select v-model="selected" multiple :options="currencies"
                    :selectable="() => selected.length < currencies_limit"></v-select>
          <div>Currencies Selected: {{ selected.length }}</div>
          <div> {{ message }}</div>

          <div  v-show="selected.length">
<!--            <span>-->
              {{user}}
<!--            </span>-->
            <div v-if="selected.length === currencies_limit" @click="save()"
                class="flex bg-gray-800  items-center justify-center m-2 px-8 py-3 text-base text-white font-medium leading-6 text-black transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:ring md:py-4 md:text-lg md:px-10">
              Save my Currencies
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>

import Auth from '../Auth';
import axios from "axios";
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';


export default {
  components: {
    vSelect
  },
  data() {
    return {
      currencies_limit:5,
      user: Auth.user,
      currencies: [],
      selected: [],
      message: ''
    }
  },
  created() {
    this.getAllCurrencies();
  },
  methods: {

    save(){

      const postArray = [];

      this.selected.forEach((key) => {
         postArray.push(key.value)
      });

      let data = {
        'currencies' : postArray
      }
      
        axios.post('/api/setting/store', data)
            .then(() => {
              this.message = 'Settings Saved!.... redirecting';
            })
            .catch((error) => {
              this.message = error.message;
            });
    },


    setCurrenciesSelect(data) {
      const currencyKeys = Object.keys(data.currencies);

      currencyKeys.forEach((key) => {
        let item = {
          'label': data.currencies[key],
          'value': key
        }
        this.currencies.push(item)
      });
    },
    // get a list of possible currencies to use
    getAllCurrencies() {
      axios.get('/api/currency/list')
          .then(({data}) => {
            this.setCurrenciesSelect(data);
          })
          .catch((error) => {
            this.message = "test" + error;
          });
    }
  }
}
</script>
