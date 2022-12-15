import { reactive } from 'vue';

export const store = reactive({
  characterList: [],
  apiURL: 'https://rickandmortyapi.com/api/character/',
  pickOut: 'status', //value dell'opzione 'Seleziona/Resetta nel select'
  apiStatusParameter: 'status' //parametro specifico da richiamare dall'api al select dell'user
});