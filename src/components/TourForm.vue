<template>
    <div class="tourform">
        <form @submit.prevent="submitForm" class="t-form">
            <div class="fieldOne">
                <input placeholder="Search For Destinations..." class="citySearch" type="text" v-model="inputSearch" />
            </div>
            <div class="fieldTwo">
                <p>Trip Durations</p>
                <div class="durationBtn">
                    <SelectButton v-model="tripValue" :options="duration" optionLabel="name" />
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
import Checkbox from 'primevue/checkbox';
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        SelectButton,
        Checkbox,
    },
    computed: {
        ...mapGetters(['getSearchCity']),
    },
    data() {
        return {
            value: null,
            tripValue: null,
            selectedValue: 0,
            minPriceValue: 1000,
            maxPriceValue: 100000,
            inputSearch: '',
            flight: null,
            showForm: true,
            options: [
                { name: 'Tour', value: 1 },
                { name: 'Activities', value: 2 },
            ],
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
        toggleForm() {
            this.showForm = !this.showForm;
        }
    },
    async submitForm() {
        
    },
    async created() {
        console.log('jaiShriRam', this.getSearchCity);
        await this.fetchSearchCity();
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

.min-range[data-v-9e37fd7b] {
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
    -webkit-appearance: none; /* Remove default styling in WebKit browsers */
    width: 100%;
    height: 0px; /* Adjust the height of the track */
    background: #fff; /* Track color */
    border-radius: 5px; /* Round the track */
    outline: none; /* Remove default outline */
    opacity: 0.7; /* Optional: Adjust the transparency of the slider */
    transition: opacity .15s ease-in-out; /* Optional: Smooth transition */
}

input[type="range"]:hover {
    opacity: 1; /* Full opacity on hover */
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Remove default styling in WebKit browsers */
    width: 16px; /* Width of the thumb */
    height: 16px; /* Height of the thumb */
    background: #f00; /* Thumb color */
    cursor: pointer; /* Cursor on hover */
    border-radius: 50%; /* Round the thumb */
    border: 2px solid #fff; /* Optional: Add a border around the thumb */
}

input[type="range"]::-moz-range-thumb {
    width: 16px; /* Width of the thumb */
    height: 16px; /* Height of the thumb */
    background: #f00; /* Thumb color */
    cursor: pointer; /* Cursor on hover */
    border-radius: 50%; /* Round the thumb */
    border: 2px solid #fff; /* Optional: Add a border around the thumb */
}

input[type="range"]::-ms-thumb {
    width: 16px; /* Width of the thumb */
    height: 16px; /* Height of the thumb */
    background: #f00; /* Thumb color */
    cursor: pointer; /* Cursor on hover */
    border-radius: 50%; /* Round the thumb */
    border: 2px solid #fff; /* Optional: Add a border around the thumb */
}

/* Custom color for the progress bar */
input[type="range"]::-webkit-slider-runnable-track {
    background: #fff; /* Track color */
    height: 8px; /* Height of the track */
    border-radius: 5px; /* Round the track */
}

input[type="range"]::-moz-range-track {
    background: #ddd; /* Track color */
    height: 16px; /* Height of the track */
    border-radius: 5px; /* Round the track */
}

input[type="range"]::-ms-track {
    background: #ddd; /* Track color */
    height: 16px; /* Height of the track */
    border-radius: 5px; /* Round the track */
    border: none; /* Remove default border */
    color: transparent; /* Transparent color */
}

</style>