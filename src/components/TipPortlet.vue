<template>
  <v-app id="app">
    <transition name="fade">
      <div v-if="tip && showPortlet" class="wrapper">
        <div
            class="card mx-auto tip-wrapper"
            outlined
        >
          <div class="card-actions">
            <v-btn class="btn" text x-small>
              <v-icon x-small>fas fa-question</v-icon>
            </v-btn>
          </div>
          <p class="tip-text">
            {{ tip.opening_crawl }}
          </p>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span
                  v-bind="attrs"
                  v-on="on"
                  class="all-text"
              >
                ...
              </span>
            </template>
            <span>{{ tip.opening_crawl }}</span>
          </v-tooltip>

          <p class="tip-poster">
            {{ tip.director }}
          </p>

          <p class="tip-date">
            {{ tip.release_date }}
          </p>

          <div class="card-actions">
            <v-btn class="btn" text x-small>
              <v-icon v-on:click="setFilm" x-small>fas fa-chevron-right</v-icon>
            </v-btn>
            <v-btn v-on:click="showForm = !showForm" class="btn" text x-small>
              <v-icon x-small>fas fa-plus</v-icon>
            </v-btn>
            <v-btn v-on:click="showPortlet = !showPortlet" class="btn" text x-small>
              <v-icon x-small>fas fa-times</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </transition>
    <AddNewTipForm v-if="showForm" />
  </v-app>
</template>

<script>
  import AddNewTipForm from "./AddNewTipForm";
  import getRandomFilm from "../utility/getRandomFilm";

  export default {
    name: "TipPortlet",
    components: {
      AddNewTipForm
    },
    data() {
      return {
        showForm: false,
        showPortlet: true,
        tip: null,
        base_url: "https://swapi.dev/api/",
      }
    },
    created() {
      this.setFilm();
    },
    methods: {
      async setFilm() {
        this.tip = await getRandomFilm(`${this.base_url}`);
      },
    },
  }

</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transform: scaleY(0);
    transform-origin: top;
    transition: opacity .5s, transform .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  p {
    margin: 0 !important;
  }

  .btn {
    min-width: unset;
  }

  .wrapper {
    width: 720px;
    margin: 50px auto;
  }

  .tip-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid #c3c3c3;
    border-radius: 4px;
    padding: 6px 0;
    margin-bottom: 8px;
    background-color: #ffffff;
  }

  .card-actions {
    display: flex;
  }

  .tip-text {
    flex-grow: 1;
    position: relative;
    white-space: nowrap;
    box-sizing: border-box;
    overflow: hidden;
  }

  .tip-text::after {
    position: absolute;
    content: '';
    display: block;
    width: 20%;
    height: 100%;
    background: linear-gradient(to right, transparent, white);
    right: 0;
    bottom: 0;
  }

  .all-text {
    padding: 0 6px;
  }

  .tip-poster, .tip-date {
    border-left: 1px solid #E0E0E0;
    padding: 0 6px;
    text-align: center;
    flex-shrink: 0;
  }

  .tip-date {
    border-right: 1px solid #E0E0E0;
  }
</style>
