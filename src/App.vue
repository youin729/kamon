<template>
  <carousel :items-to-show="3">
    <slide v-for="kamon in kamonList" :key="kamon">
      <div class="carousel-child">
        <div><img :alt="kamon.name" :src="kamon.src"></div>
        <p>{{ kamon.name }}</p>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>

  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">名前</th>
        <th scope="col">画像</th>
        <th scope="col">意味</th>
      </tr>
    </thead>
    <tbody v-for="kamon in kamonList" :key="kamon">
      <tr>
        <th width="10%" scope="row">{{ kamon.id }}</th>
        <td width="25%">{{ kamon.name }}<br>{{ kamon.kana }}</td>
        <td width="15%"><img :alt="kamon.name" :src="kamon.src" class="w-100"></td>
        <td width="50%">{{ kamon.mean }}</td>
      </tr>
    </tbody>
  </table>
  <ul v-for="mean in meanList" :key="mean">
    <li>{{ mean.name }}</li>
  </ul>
  
</template>

<style>
  .carousel-child{
    width:30%;
  }
  .carousel-child img{
    max-width:100%;
  }
</style>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import config from './config/const'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data () {
    return {
      kamonList: [],
      meanList: []
    }
  },
  mounted () {
    axios
      .get(config.API_URL, {
        params: {
          mode: 'select',
          target: 'kamon'
        }
      })
      .then(response => {
        for(const kamon of response.data){
          kamon['src'] = require('@/assets/source/' + kamon.id + '.png')
          this.kamonList.push(kamon)
        }
      })
    axios
      .get(config.API_URL, {
        params: {
          mode: 'select',
          target: 'mean'
        }
      })
      .then(response => {
        for(const mean of response.data){
          this.meanList.push(mean)
        }
      })
  }
};
</script>

