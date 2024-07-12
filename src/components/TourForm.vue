<template>
    <div class="tourform">
        <form @submit.prevent="submitForm" class="t-form">
            <div class="fieldOne">
                <input placeholder="Search For Destinations..." class="citySearch" type="text" v-model="inputSearch"
                    @input="onInput" />
                
                <ul v-if="searchResults && searchResults.length > 2" class="city-list">
                    <li @click="selectedCity(city.name, city.id)" class="listCity" v-for="city in searchResults" :key="city.id">
                        {{ city.name }}</li>
                </ul>
            </div>
            <div class="fieldTwo">
                <p>Trip Durations</p>
                <div class="durationBtn">
                    <SelectButton @change="onTripValueChange" v-model="tripValue" :options="duration" optionLabel="name" />
                </div>
            </div>
            <div class="fieldthree">
                <p>Price Range</p>
                <div class="pricerange">
                    <p> ₹ {{ selectedValue }}</p>
                    <input type="range" id="customSlider" :min="minPriceValue" :max="maxPriceValue" step="1000"
                        v-model="selectedValue">
                </div>
            </div>
            <div class="fieldFive">
                <button type="submit" class="searchBtn">Search for Trip</button>
            </div>
        </form>
    </div>
</template>

<script>
import SelectButton from 'primevue/selectbutton';
import { mapActions, mapGetters } from 'vuex';
import { baseURL } from '@/config';
import axios from 'axios';
export default {
    components: {
        SelectButton,
    },
    computed: {
        ...mapGetters(['getSearchCity']),
    },
    data() {
        return {
            tripValue: null,
            selectedValue: 0,
            minPriceValue: 1000,
            maxPriceValue: 100000,
            inputSearch: '',
            cityId: '',
            searchResults: [],
            showForm: true,
            duration: [
                { name: 'Upto 1 day', value: 'one day' },
                { name: '2 to 3 dyas', value: 'two to three days' },
                { name: '5 to 7 days', value: 'five to seven days' },
                { name: '7+ days', value: 'more than 7 days' },
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
        toggleForm() {
            this.showForm = !this.showForm;
        },
        onTripValueChange(value) {
            this.tripValue = value.value.value;
        },
        async submitForm() {
            const formData = {
                category_id: '',
                city_id: this.cityId,
                duration: this.tripValue,
                minPrice: this.minPriceValue,
                maxPrice: this.selectedValue,
                productType: ''
            }
            const enquiryFormData = new FormData();
            for(const key in formData) {
                enquiryFormData.append(key, formData[key]);
            }
            try {
                await axios.post(`${baseURL}/apis/packages/search_filter_packages`, enquiryFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((response) => {
                    console.log('enquiryData', response);
                    alert('Success!!!');
                })
            } catch (error) {
                console.log('Error', error);
            }
        }
    },


    async created() {
        await this.fetchSearchCity();
        console.log('Input Search:', this.inputSearch);
        console.log('Trip Value:', this.tripValue);
        console.log('Selected Value:', this.selectedValue);
    }

}
</script>

<style scoped>
.selectbtn {
    background: red;
}

input.citySearch {
    border: none;
    width: 700px;
    padding: 13px 0;
    background: transparent;
}

input.citySearch:focus {
    border: none;
    outline: none;
}

input#customSlider {
    width: 700px;
}

.typebtn>>>.p-togglebutton.p-togglebutton-checked::before {
    background: rgb(84, 100, 98) !important;
    color: #000;
}

.durationBtn>>>.p-togglebutton.p-togglebutton-checked::before {
    background: rgb(84, 100, 98) !important;
    color: #000;
}


.tourform {
    width: 800px;
    background: rgb(246 246 246);
    border-radius: 20px 20px 0 0;
}

form.t-form {
    padding: 50px;
    text-align: left;
}

ul.city-list {
    margin-left: -32px;
}

li.listCity {
    list-style: none;
    font-size: 18px;
    line-height: 31px;
}

h1 {
    font-size: 25px;
    color: #99999996;
}

p {
    font-size: 15px;
    font-weight: 700;
}

.fieldOne {
    border-bottom: 1px solid #d5d1d1;
    padding-bottom: 10px;
}

.fieldTwo {
    border-bottom: 1px solid #d5d1d1;
    padding-bottom: 10px;
}

.fieldthree {
    border-bottom: 1px solid #d5d1d1;
    padding-bottom: 10px;
}

.rangeFlex {
    display: flex;
    margin-top: 10px;
}

.min-range {
    border: 1px solid grey;
    padding: 4px;
    margin-right: 15px;
    border-radius: 6px;
}

span.max-text {
    padding: 0 10px;
    border-right: 1px solid grey;
}

span.price-text {
    padding: 0 10px;
}

.fieldFour {
    padding-top: 16px;
}


button.searchBtn {
    background: red;
    border: none;
    padding: 10px 15px;
    border-radius: 13px;
    color: #fff;
    cursor: pointer;
}

.fieldFive {
    text-align: right;
}

input[type="range"] {
    -webkit-appearance: none;
    /* Remove default styling in WebKit browsers */
    width: 100%;
    height: 0px;
    /* Adjust the height of the track */
    background: #fff;
    /* Track color */
    border-radius: 5px;
    /* Round the track */
    outline: none;
    /* Remove default outline */
    opacity: 0.7;
    /* Optional: Adjust the transparency of the slider */
    transition: opacity .15s ease-in-out;
    /* Optional: Smooth transition */
}

input[type="range"]:hover {
    opacity: 1;
    /* Full opacity on hover */
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    /* Remove default styling in WebKit browsers */
    width: 16px;
    /* Width of the thumb */
    height: 16px;
    /* Height of the thumb */
    background: #f00;
    /* Thumb color */
    cursor: pointer;
    /* Cursor on hover */
    border-radius: 50%;
    /* Round the thumb */
    border: 2px solid #fff;
    /* Optional: Add a border around the thumb */
}

input[type="range"]::-moz-range-thumb {
    width: 16px;
    /* Width of the thumb */
    height: 16px;
    /* Height of the thumb */
    background: #f00;
    /* Thumb color */
    cursor: pointer;
    /* Cursor on hover */
    border-radius: 50%;
    /* Round the thumb */
    border: 2px solid #fff;
    /* Optional: Add a border around the thumb */
}

input[type="range"]::-ms-thumb {
    width: 16px;
    /* Width of the thumb */
    height: 16px;
    /* Height of the thumb */
    background: #f00;
    /* Thumb color */
    cursor: pointer;
    /* Cursor on hover */
    border-radius: 50%;
    /* Round the thumb */
    border: 2px solid #fff;
    /* Optional: Add a border around the thumb */
}

/* Custom color for the progress bar */
input[type="range"]::-webkit-slider-runnable-track {
    background: #fff;
    /* Track color */
    height: 8px;
    /* Height of the track */
    border-radius: 5px;
    /* Round the track */
}

input[type="range"]::-moz-range-track {
    background: #ddd;
    /* Track color */
    height: 16px;
    /* Height of the track */
    border-radius: 5px;
    /* Round the track */
}

input[type="range"]::-ms-track {
    background: #ddd;
    /* Track color */
    height: 16px;
    /* Height of the track */
    border-radius: 5px;
    /* Round the track */
    border: none;
    /* Remove default border */
    color: transparent;
    /* Transparent color */
}
</style>