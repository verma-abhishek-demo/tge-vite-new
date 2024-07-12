<template>
  <div class="section-one">
    <div class="block">
      <h1>Empowering Your Travel Dreams</h1>
    </div>
    <div class="block">
      <div class="scroll-container">
        <div class="scroll-content">
          <div class="scrolltext">EXPLORE</div>
          <div class="scrolltext">CONNECT</div>
          <div class="scrolltext">THRIVES</div>
          <div class="scrolltext">MEMORIES</div>
        </div>
      </div>
      <div class="underlineText">
        <p class="travelText">Curating Unparalleled Travel Experiences, One Journey at a Time</p>
      </div>
    </div>
    <div class="block">
      <div class="fourBtn">
        <div class="col">
          <button :class="{ 'active': isActive === 'tour' }" @click="toggleButton('tour')">Tour</button>
        </div>
        <div class="col">
          <button :class="{ 'active': isActive === 'activities' }" @click="toggleButton('activities')">Activities</button>
        </div>
        <div class="col">
          <button :class="{ 'active': isActive === 'flight' }" @click="toggleButton('flight')">Flight</button>
        </div>
        <div class="col">
          <button :class="{ 'active': isActive === 'railway' }" @click="toggleButton('railway')">Railway</button>
        </div>
      </div>
      <div class="searchBar">
        <div @click="toggleTourForm" :class="{'bar': true, 'hidden': showForm}">
          <p class="srchText">Search for</p>
          <img class="srchIcon" src="@/assets/images/search.png" />
        </div>

        <TourForm v-if="showForm" @close="toggleTourForm" class="hideShow" />
      </div>

      <ActivitySearch v-if="showActivity" />
    </div>
  </div>
</template>


<script>
import TourForm from './TourForm.vue';
import ActivitySearch from './ActivitySearch.vue';

export default {
  components: {
    TourForm,
    ActivitySearch,
  },
  data() {
    return {
      isActive: 'tour',
      showForm: false,
      showActivity: false,
    }
  },
  methods: {
    toggleButton(button) {
      this.isActive = button;
      if (button === 'activities') {
        this.showActivity = !this.showActivity;
      } else {
        this.showActivity = false;
      }

      if (button === 'tour') {
        this.showForm = !this.showForm;
      } else {
        this.showForm = false;
      }
    },
    toggleTourForm() {
      this.showForm = !this.showForm;
      this.showActivity = !this.showActivity;
    }
  }
}
</script>

<style scoped>
.section-one {
  background: url('@/assets/images/bgone.jpg') 100% / cover no-repeat;
}

.hideShow {
  position: absolute;
  left: 24%;
  z-index: 1;
}

.block {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}

h1 {
  font-size: 45px;
  color: #fff;
  font-family: 'Merriweather', sans-serif;
  font-weight: 700;
}

.scroll-container {
  width: 100%;
  height: 124px;
  overflow: hidden;
  background-color: transparent;
  position: relative;
}

.scroll-content {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 33%;
  animation: scroll 9s linear infinite;
}

.scrolltext {
  font-family: 'Merriweather', sans-serif;
  font-size: 93px;
  line-height: 116.9px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

@keyframes scroll {
  0% {
    top: 100%;
  }

  25% {
    top: 0%;
  }

  50% {
    top: -100%;
  }

  75% {
    top: -200%;
  }

  100% {
    top: -300%;
  }
}

.underlineText {
  text-align: center;
  display: grid;
  place-items: center;
}

p.travelText {
  color: #fff;
  font-size: 19px;
  font-family: 'Merriweather', sans-serif;
  padding: 7px 15px;
  border-bottom: 1px solid red;
}

.fourBtn {
  display: inline-flex;
  gap: 77px;
}

button:not(.active) {
  cursor: pointer;
  background: transparent;
  padding: 10px 15px;
  border-radius: 20px;
  color: #fff;
  font-size: 17px;
}

button.active {
  background: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  color: #000;
  font-size: 17px;
}

.bar {
  background: #fff;
  margin: auto;
  width: 793px;
  height: 40px;
  border-radius: 20px;
  position: relative;
}

img.srchIcon {
  position: absolute;
  top: -7px;
  right: 1px;
  width: 62px;
}

p.srchText {
  padding-top: 6px;
}

.hidden {
  display: none;
}

</style>
