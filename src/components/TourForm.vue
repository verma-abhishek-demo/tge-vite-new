<template>
    <div class="tourform">
        <form class="t-form">
            <h1>Search For Destinations...</h1>
            <div class="fieldOne">
                <p>Product Type</p>
                <dv class="typebtn">
                    <SelectButton v-model="value" :options="options" optionLabel="name" multiple
                        aria-labelledby="multiple" />
                </dv>
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
                <div class="rangeFlex">
                    <div class="min-range">
                        <span class="max-text">MIN</span>
                        <span class="price-text">INR {{ minPriceValue }}</span>
                    </div>
                    <div class="min-range">
                        <span class="max-text">MAX</span>
                        <span class="price-text">INR {{ maxPriceValue }}</span>
                    </div>
                    <div class="min-range">
                        <span class="max-text">YOUR PRICE</span>
                        <span class="price-text">INR {{ selectedValue }}</span>
                    </div>
                </div>

            </div>
            <div class="fieldFour">
                <div class="flex items-center">
                    <Checkbox v-model="flight" inputId="ingredient1" name="flight" value="flight" />
                    <label for="ingredient1" class="ml-2"> I want flights to be included. </label>
                </div>
            </div>

            <div class="fieldFive">
                <button class="searchBtn">Search for Trip</button>
            </div>
        </form>
    </div>
</template>

<script>
import SelectButton from 'primevue/selectbutton';
import Checkbox from 'primevue/checkbox';
export default {
    components: {
        SelectButton,
        Checkbox,
    },
    data() {
        return {
            value: null,
            tripValue: null,
            selectedValue: 0,
            minPriceValue: 1000,
            maxPriceValue: 100000,
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
        toggleForm() {
            this.showForm = !this.showForm;
        }
    }
}
</script>

<style scoped>
.selectbtn {
    background: red;
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
    background: #fff;
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
</style>