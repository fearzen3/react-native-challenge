
import axios from 'axios'
import anime from 'nani'

let nani = anime.init('fearzen3-fdzw1','hmlhy68y8OrdNe0Hq9');

export function initAnime(){
      return dispatch => {
        nani.get('browse/anime?status=currently%20airing').then(data => {
          dispatch({
          type : "INIT",
          payload: data
        })
  }).catch(error => {
    console.log(error);
  });
  }
}
