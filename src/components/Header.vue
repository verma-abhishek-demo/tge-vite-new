<template>
  <div >
    <div class="header">
      <div class="partOne">
        <div class="wrapper">
          <div class="frame-44">
          <div class="container-1">
            <div class="frame-5">
              <div class="frame-431">
                <img class="mask-group-69" src="@/assets/images/msg.png" />
              </div>
              <div class="frame-331">
                <span class="tourwithtge-23-gmail-com-1">
                  tourwithtge23@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div class="frame-52">
            <div class="frame-401">
              <img class="mask-group-70" src="@/assets/images/red-phone.png" />
            </div>
            <div class="frame-361">
              <span class="container-31">
                +91 67535 57043
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div class="partTwo">
        <div class="frame-45">
          <div class="frame-3">
            <div class="whats-app-image-20240503-at-140721 imgSize">
              <router-link to="/"><img src="@/assets/images/whats_app_image_20240503_at_14072.png" /></router-link>
            </div>
          </div>
          <div class="frame-34561">
            <p
              class="new-launches-jodhpur-rishikesh-jaipur-mcleodganj-amritsar-new-launches-jodhpur-rishikesh-jaipur-mcleodganj-amritsar">
              <span class="new-launches-jodhpur-rishikesh-jaipur-mcleodganj-amritsar-sub-8">
                <span class="red">New Launches</span><span class="normalText">:Jodhpur,Rishikesh,JaipurMcleodganj&
                  Amritsar</span>
              </span>
            </p>
          </div>
          <div class="group-112">
            <div class="frame-345075">
              <div class="frame-100">
                <img class="mask-group-72" src="@/assets/images/geo.png" />
              </div>
              <div class="frame-344951" @click="togglePlanAtrip">
                <span class="plan-atrip">
                  Plan A Trip
                </span>
              </div>
            </div>
            <div data-bs-toggle="modal" data-bs-target="#exampleModal" class="frame-53">
              <div class="enqryImg">
                <span class="enqText">Enquiry</span>
                <span class="imgContain"><img class="downArrow" src="@/assets/images/down_arrow_unscreen_1.png" /></span>
              </div>
            </div>
          </div>
        </div>
        <div class="overlay" v-if="showPlanAtrip" @click="togglePlanAtrip"></div>
        <PlanAtrip v-if="showPlanAtrip" class="slide-in" />
        <Enquiry />
      </div>

      <div class="partThree">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <ul class="navbar-nav mr-auto tgeCity" v-if="getCityData">
              <li class="nav-item">
                <router-link to="/explore_packages">
                  <img class="exploreImg" src="@/assets/images/explore.png" />
                </router-link>
              </li>
              <li class="nav-item"  v-for="city in getCityData" :key="city.slug">
                <router-link class="city-text-name" @click="fetchCitySlugData(city.slug)" :to="{ name: 'DestinationInfo', params: { citySlug: city.slug } }" >
                  <img :src="city.icon" alt="Explore" width="60" height="60">
                  <p >{{ city.name }}</p>
                </router-link>
              </li>
              
            </ul>
            <ul class="navbar-nav btnGrp">
              <li class="nav-item bton">
                <router-link :class="{ 'active': isActive === 'tour' }" @click="toggleButton('tour')" to="/home_page">TOUR</router-link>
              </li>
              <li class="nav-item bton">
                <router-link to="/activities_page" :class="{ 'active': isActive === 'activities' }" @click="toggleButton('activities')">ACTIVITIES</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import PlanAtrip from './PlanAtrip.vue';
import Enquiry from './Enquiry.vue';
import { mapActions, mapGetters } from 'vuex';
import { baseURL } from '@/config';
import axios from 'axios';

export default {
  name: 'Header',
  components: {
    PlanAtrip,
    Enquiry,
  },
  computed: {
    ...mapGetters(['getCityData', 'getError']),
    cityNames() {
      console.log('qwertyuiop', this.getCityData);
      return this.getCityData;
    },
    loadError() {
      return this.getError;
    }
  },
  data() {
    return {
      showPlanAtrip: false,
      showEnquiry: false,
      isActive: 'tour',
    }
  },
  methods: {

    ...mapActions(['fetchCityData']),

    togglePlanAtrip() {
      this.showPlanAtrip = !this.showPlanAtrip;
    },
    toggleEnquiry() {
      this.showEnquiry = !this.showEnquiry;
    },
    toggleButton(button) {
      this.isActive = button;
    },
    async fetchCitySlugData(citySlug) {
      const slugData = {
        city_id: citySlug,
        page: '',
        limit: ''
      }

      const newSlugData = new FormData();
      for(const key in slugData) {
        newSlugData.append(key, slugData[key]);
      }
      try {
        await axios.post(`${baseURL}/apis/packages/package_with_city`, newSlugData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((response) => {
          console.log('Slug-Data', response)
          //alert('Succeded!!!')
        })
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    }
  },
  async created() {
    //console.log('9772217838123',this.cityNames);
    await this.fetchCityData();
  }
}
</script>

<style scoped>
.wrapper {
  width: 1200px;
  margin: auto;
}

.partOne {
  background: #000;
}

.header {
  position: relative;
  z-index: 500;
}

.partTwo {
  border-bottom: 1px solid #80808045;
}

.imgSize {
  max-width: 100px;
}

.imgSize img {
  width: 100%;
}

img.exploreImg {
    min-width: 59px !important;
    height: 101px;
}

.tgeCity li.nav-item {
    text-align: center;
    display: flex;
}

.tgeCity img {
    width: 45px;
}


.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.plan-atrip-container.slide-in {
  transform: translateX(0);
}

.diaolog-box.slide-down {
  transform: translateY(0);
}

a.city-text-name:hover p {
    color: red;
    border-bottom: 2px solid red;
}



span.normalText {
  text-transform: uppercase;
  font-weight: 600;
}

span.red {
  color: red;
  text-transform: uppercase;
  font-weight: 600;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  margin-right: 100px;
  margin-left: 50px;
  margin-top: -0.5rem;
}

.button-group {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 10px;
}

.btnGrp {
  height: 55px;
}

.bton {
    margin-top: 14px;
}

a {
  border: none;
  padding: 10px 12px;
  font-size: 18px;
  cursor: pointer;
  margin: 5px;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

a.active {
  background-color: red;
  color: white;
  text-decoration: none;
}

a:not(.active) {
  color: black;
  text-decoration: none;

}

ul.navbar-nav.btnGrp {
    border: 1px solid grey;
    border-radius: 10px;
}

.navbar > .container, .navbar > .container-fluid, .navbar > .container-sm, .navbar > .container-md, .navbar > .container-lg, .navbar > .container-xl, .navbar > .container-xxl {
    width: 1222px;
    margin: auto;
}

.enqryImg {
    display: flex;
    margin: 0 10px;
}

span.imgContain {
    border-radius: 33.1px;
    border: 0.8px dashed #010080;
    width: 29px;
    height: 29px;
    box-sizing: border-box;
    margin-top: 10px;
}

img.downArrow {
    width: 29px;
    height: 29px;
}

span.enqText {
    margin-top: 10px;
    margin-right: 9px;
}
</style>
