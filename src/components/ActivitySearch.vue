<template>
    <div class="location">
        <form @submit.prevent="submitForm">
        <b-container class="bv-example-row">
            <b-row class="activitySec">
                <b-col>
                    <div class="loc">
                        <img src="@/assets/images/loca.png" />
                        <Dropdown @change="onCityChange" v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Location" />
                    </div>
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
import { baseURL } from '@/config';
import axios from 'axios';
export default {
    components: {
        Dropdown,
        Calendar,
    },
    data() {
        return {
            selectedCity: '',
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
        onCityChange(value) {
            this.selectedCity = value.value.name;
        },
        async submitForm() {
            const formData = {
                location: this.selectedCity,
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

            this.selectedCity = '';
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