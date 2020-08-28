<template>
  <transition name="fade">
    <div v-if="!closeForm" class="new-tip">
      <div class="wrapper-second">
        <v-card
            class="mx-auto tip-wrapper-second"
            outlined
        >
          <div class="card-actions">
            <v-btn class="btn" text x-small>
              <v-icon x-small>fas fa-question</v-icon>
            </v-btn>
          </div>
          <v-textarea
            v-model="newTipText"
            auto-grow
            outlined
            rows="2"
            placeholder="Tip text"
          ></v-textarea>

          <div class="card-actions">
            <v-btn @click="handleForm" class="btn" text x-small>
              Save
            </v-btn>
            <v-btn v-on:click="closeForm = !closeForm" class="btn" text x-small>
              <v-icon x-small>fas fa-times</v-icon>
            </v-btn>
          </div>
        </v-card>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AddNewTipForm',
  data() {
    return {
      closeForm: false,
      newTipText: ''
    }
  },
  methods: {
    handleForm(e) {
      // fetch(url, {
      //   method: 'post', // here we could send post request
      //   body: data,
      // })
      //   .then(…);
      e.preventDefault();
      if (this.newTipText) {
        alert(`Your tip ${this.newTipText} has been sent`);
        this.closeForm = true;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .new-tip {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
  }

  .wrapper-second {
    width: 720px;
    margin: 0 auto;
  }

  .tip-wrapper-second {
    display: flex;
    align-items: flex-start;
    padding-top: 8px;
  }

  form {
    display: flex;
    align-items: flex-start;
  }
</style>
