<template>
    <div class="location">
        <form @submit.prevent="submitForm">
            <b-container class="bv-example-row">
                <b-row class="activitySec">
                    <b-col>
                        <div class="loc">
                            <img src="@/assets/images/loca.png" />
                            <div class="srch-city">
                                <input placeholder="Search For Destinations..." class="citySearch" type="text"
                                    v-model="inputSearch" @input="onInput" />


                            </div>
                        </div>
                        <ul v-if="searchResults && searchResults.length > 2" class="city-list">
                                    <li @click="selectedCity(city.name, city.id)" class="listCity"
                                        v-for="city in searchResults" :key="city.id">
                                        {{ city.name }}</li>
                                </ul>
                    </b-col>
                    <b-col>
                        <div class="loc">
                            <img src="@/assets/images/cale.png" />
                            <Calendar placeholder="Date" v-model="selectedDate" />
                        </div>
                    </b-col>
                    <b-col>
                        <div @click="toggleCounter" class="loc">
                            <img src="@/assets/images/bag.png" />
                            <p>No. of person</p>
                        </div>

                    </b-col>
                    <b-col>
                        <div class="btnSrch">
                            <button type="submit" class="srchBtn">Search Now</button>
                        </div>
                    </b-col>

                </b-row>
                <div v-if="showCounter" class="personCounter">
                    <div class="Row">
                        <p>Adult</p>
                        <div class="counter">
                            <span @click="decreaseCounter" :class="{ disabled: adultcounter === 0 }"
                                :disabled="adultcounter === 0" class="sizeCntr">-</span>
                            <span>{{ adultcounter }}</span>
                            <span @click="increaseCounter" :class="{ disabled: adultcounter === 3 }"
                                :disabled="adultcounter === 3" class="sizeCntr">+</span>
                        </div>
                    </div>
                    <div class="Row">
                        <p>Children</p>
                        <div class="counter">
                            <span @click="decreaseChildCounter" :class="{ disabled: childcounter === 0 }"
                                :disabled="childcounter === 0" class="sizeCntr">-</span>
                            <span>{{ childcounter }}</span>
                            <span @click="increaseChildCounter" :class="{ disabled: childcounter === 3 }"
                                :disabled="childcounter === 3" class="sizeCntr">+</span>
                        </div>
                    </div>
                </div>
            </b-container>
        </form>
    </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import { mapActions, mapGetters } from 'vuex';
import { baseURL } from '@/config';
import axios from 'axios';
export default {
    components: {
        Dropdown,
        Calendar,
    },
    computed: {
        ...mapGetters(['getSearchCity']),
    },
    data() {
        return {
            inputSearch: '',
            selectedDate: '',
            adultcounter: 0,
            childcounter: 0,
            showCounter: false,
            cities: [
                { name: 'DharamShala' },
                { name: 'Shimla' },
                { name: 'Jaipur' },
                { name: 'Gawalior' },
                { name: 'Manali' },
            ]
        }
    },
    methods: {
        ...mapActions(['fetchSearchCity']),
        async onInput() {
            console.log('jaiShriRam', this.getSearchCity);
            if (this.inputSearch.length > 2) {
                await this.fetchSearchCity(this.inputSearch);
                //console.log('ajncjncjk', result);
                this.searchResults = this.getSearchCity;
            }
        },
        selectedCity(city, id) {
            this.inputSearch = city;
            this.cityId = id;
            this.searchResults = [];

        },
        increaseCounter() {
            if (this.adultcounter < 3) {
                this.adultcounter++;
            }
        },
        decreaseCounter() {
            if (this.adultcounter > 0) {
                this.adultcounter--;
            }
        },
        increaseChildCounter() {
            if (this.childcounter < 3) {
                this.childcounter++;
            }
        },
        decreaseChildCounter() {
            if (this.childcounter > 0) {
                this.childcounter--;
            }
        },
        toggleCounter() {
            this.showCounter = !this.showCounter;
        },
        async submitForm() {
            const formData = {
                location: this.inputSearch,
                adults: this.adultcounter,
                child: this.childcounter
            }
            const enquiryFormData = new FormData();
            for (const key in formData) {
                enquiryFormData.append(key, formData[key]);
            }
            try {
                await axios.post(`${baseURL}/apis/packages/activities_filter`, enquiryFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((response) => {
                    console.log('enquiryData', response);
                    alert('Success!!!');
                })
            } catch (error) {
                console.error('ERROR', error);
            }

            this.inputSearch = '';
            this.adultcounter = 0;
            this.childcounter = 0;
            this.selectedDate = '';
        }
    }
}
</script>

<style scoped>
b-row.activitySec {
    width: 793px;
    background: #fff;
    display: flex;
    margin: auto;
    border-radius: 10px;
    padding: 10px 26px;
}

input.citySearch {
    border: 1px solid #80808045;
    width: 700px;
    padding: 13px 0;
    background: transparent;
    border-radius: 5px;
    max-height: 41px;
    max-width: 160px;
}

input.citySearch:focus {
    border: 1px solid #80808045;
    ;
    outline: none;
    border-radius: 5px;
}

ul.city-list {
    margin-left: -32px;
}

li.listCity {
    list-style: none;
    font-size: 18px;
    line-height: 31px;
}

.loc {
    display: flex;
    width: 200px;
    justify-content: center;
}

.Row {
    display: flex;
    justify-content: space-evenly;
}

.counter {
    display: flex;
}

span.sizeCntr {
    background: gray;
    font-size: 20px;
    border-radius: 25px;
    width: 34px;
    height: 34px;
}

button.srchBtn {
    background: red;
    border: none;
    padding: 4px 9px;
    border-radius: 10px;
    color: #fff;
}

span.sizeCntr.disabled {
    background: lightgray;
}

.personCounter {
    background: #fff;
    width: 215px;
    margin: 0 0 0 790px;
    border-radius: 10px;
}
</style>