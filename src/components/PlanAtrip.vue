<template>
    <div v-if="visible" class="plan-atrip-container" :class="{ 'visible': visible }">

        <form @submit.prevent="submitForm">
            <!-- Section - 1 -->
            <div v-if="!selectedCity" class="plan-atrip">
                <div class="container">
                    <p class="where-areyou-planningto-go">
                        <span class="where-areyou-planningto-go-sub-0">WHERE ARE</span>
                        <span class="where-areyou-planningto-go-sub-1">YOU PLANNING</span>
                        <span>TO GO?</span>
                    </p>
                    <div class="frame-34632" @click="closePlanAtrip">
                        <img class="mask-group" src="@/assets/images/cancel.png" />
                    </div>
                </div>
                <div class="frame-34635">
                    <div class="frame-34633">
                        <input v-model="form.from" placeholder="Pick your destination" class="destination-input" />
                    </div>
                </div>
                <div class="frame-125">
                    <div class="container-1">
                        <div class="frame-34636" v-for="city in cityNames" :key="city">
                            <span class="city-name" @click="selectCity(city.name)">{{ city.name }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!--Section - 2-->
            <div v-else-if="!selectedMonth" class="property-1-month">
                <div class="container-2">
                    <div class="frame-34654">
                        <span class="now-planning-your-holiday-to">
                            NOW PLANNING YOUR HOLIDAY TO
                        </span>
                    </div>
                    <div class="frame-34632" @click="closePlanAtrip">
                        <img class="mask-group-1" src="@/assets/images/cancel.png" />
                    </div>
                </div>
                <div class="frame-125">
                    <img class="mask-group" src="@/assets/images/flight.png" />
                    <div class="frame-34655">
                        <span class="manali">
                            {{ selectedCity }}
                        </span>
                    </div>
                </div>
                <div class="frame-1251">
                    <div class="rectangle-203">
                    </div>
                    <div class="rectangle-204">
                    </div>
                    <div class="rectangle-205">
                    </div>
                    <div class="rectangle-206">
                    </div>
                    <div class="rectangle-207">
                    </div>
                    <div class="rectangle-2071">
                    </div>
                </div>
                <div class="frame-34656">
                    <span class="which-month-are-you-travelling">
                        Which month are you travelling?
                    </span>
                </div>
                <div class="frame-12517">
                    <div class="frame-12515">
                        <div @click="selectMonth('May')" class="frame-1253">
                            <div class="frame-34657">
                                <span class="may">
                                    May
                                </span>
                            </div>
                            <div class="frame-1252">
                                <div class="sun">
                                </div>
                                <span class="c">
                                     15° - 24°C
                                </span>
                            </div>
                        </div>
                        <div @click="selectMonth('June')" class="frame-346571">
                            <div class="frame-346572">
                                <span class="june">
                                    June
                                </span>
                            </div>
                            <div class="frame-1254">
                                <div class="sun-1">
                                </div>
                                <span class="c-1">
                                     17° - 25°C
                                </span>
                            </div>
                        </div>
                        <div @click="selectMonth('July')" class="frame-34658">
                            <div class="frame-346573">
                                <span class="july">
                                    July
                                </span>
                            </div>
                            <div class="frame-1255">
                                <div class="flower-2">
                                </div>
                                <span class="c-2">
                                     16° - 21°C
                                </span>
                            </div>
                        </div>
                        <div @click="selectMonth('August')" class="frame-34659">
                            <div class="container-1">
                                <div class="frame-346574">
                                    <span class="august">
                                        August
                                    </span>
                                </div>
                                <div class="frame-1256">
                                    <div class="sun-2">
                                    </div>
                                    <span class="c-3">
                                         15° - 25°C
                                    </span>
                                </div>
                            </div>
                            <div class="bookmark-1">
                            </div>
                        </div>
                        <div @click="selectMonth('September')" class="frame-34660">
                            <div class="frame-346575">
                                <span class="september">
                                    September
                                </span>
                            </div>
                            <div class="frame-1257">
                                <div class="flower-3">
                                </div>
                                <span class="c-4">
                                     14° - 21°C
                                </span>
                            </div>
                        </div>
                        <div @click="selectMonth('October')" class="frame-34661">
                            <div class="frame-346576">
                                <span class="october">
                                    October
                                </span>
                            </div>
                            <div class="frame-1258">
                                <div class="sun-3">
                                </div>
                                <span class="c-5">
                                     11° - 14°C
                                </span>
                            </div>
                        </div>
                    </div>
                    <div @click="selectMonth('November')" class="frame-12516">
                        <div class="frame-34662">
                            <div class="frame-346577">
                                <span class="november">
                                    November
                                </span>
                            </div>
                            <div class="frame-1259">
                                <div class="snow-2">
                                </div>
                                <span class="c-6">
                                     7° - 16°C
                                </span>
                            </div>
                        </div>
                        <div @click="selectMonth('December')" class="frame-34663">
                            <div class="container">
                                <div class="frame-346578">
                                    <span class="december">
                                        December
                                    </span>
                                </div>
                                <div class="frame-12510">
                                    <div class="snow">
                                    </div>
                                    <span class="c-7">
                                         4° - 12°C
                                    </span>
                                </div>
                            </div>
                            <div class="bookmark">
                            </div>
                        </div>
                        <div @click="selectMonth('January')" class="frame-34664">
                            <div class="frame-346579">
                                <span class="january">
                                    January
                                </span>
                            </div>
                            <div class="frame-12511">
                                <div class="snow-1">
                                </div>
                                <span class="c-8">
                                     2° - 9°C
                                </span>
                            </div>
                        </div>
                        <div @click="selectMonth('February')" class="frame-34665">
                            <div class="frame-3465710">
                                <span class="february">
                                    February
                                </span>
                            </div>
                            <div class="frame-12512">
                                <div class="sun-4">
                                </div>
                                <span class="c-9">
                                     3° - 11°C
                                </span>
                            </div>
                        </div>
                        <div @click="selectMonth('March')" class="frame-34666">
                            <div class="frame-3465711">
                                <span class="march">
                                    March
                                </span>
                            </div>
                            <div class="frame-12513">
                                <div class="flower-1">
                                </div>
                                <span class="c-10">
                                     7° - 14°C
                                </span>
                            </div>
                        </div>
                        <div @click="selectMonth('April')" class="frame-34667">
                            <div class="frame-3465712">
                                <span class="april">
                                    April
                                </span>
                            </div>
                            <div class="frame-12514">
                                <div class="flower">
                                </div>
                                <span class="c-11">
                                     11° - 20°C
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Section - 3-->

            <div v-else-if="!form.departureDate" class="property-1-date">
                <div class="container">
                    <div class="frame-34654">
                        <span class="now-planning-your-holiday-to">
                            NOW PLANNING YOUR HOLIDAY TO
                        </span>
                    </div>
                    <div class="frame-34632" @click="closePlanAtrip">
                        <img class="mask-group-2" src="@/assets/images/cancel.png" />
                    </div>
                </div>
                <div class="frame-1251">
                    <div class="frame-34669">
                        <img class="mask-group-1" src="@/assets/images/flight.png" />
                        <div class="frame-346551">
                            <span class="manali">
                                {{ selectedCity }}
                            </span>
                        </div>
                    </div>
                    <div class="frame-34668">
                        <img class="mask-group" src="@/assets/images/calender.png" />
                        <div class="frame-34655">
                            <span class="aug-2024">
                                {{ selectedMonth }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="frame-125">
                    <div class="rectangle-203">
                    </div>
                    <div class="rectangle-204">
                    </div>
                    <div class="rectangle-205">
                    </div>
                    <div class="rectangle-206">
                    </div>
                    <div class="rectangle-207">
                    </div>
                    <div class="rectangle-2071">
                    </div>
                </div>
                <div class="frame-34656">
                    <span class="when-is-your-departure-date">
                        When is your departure date?
                    </span>
                </div>
                <Calendar v-model="form.departureDate" touchUI />
            </div>

            <!--Section - 4-->

            <div v-else-if="!selectedDestCity" class="property-1-plate-4">
                <div class="container-1">
                    <div class="frame-34654">
                        <span class="now-planning-your-holiday-to">
                            NOW PLANNING YOUR HOLIDAY TO
                        </span>
                    </div>
                    <div class="frame-34632" @click="closePlanAtrip">
                        <img class="mask-group-3" src="@/assets/images/cancel.png" />
                    </div>
                </div>
                <div class="frame-34670">
                    <div class="frame-346691">
                        <img class="mask-group-1" src="@/assets/images/flight.png" />
                        <div class="frame-34655">
                            <span class="manali">
                                {{ selectedCity }}
                            </span>
                        </div>
                    </div>
                    <div class="frame-34668">
                        <img class="mask-group-2" src="@/assets/images/calender.png" />
                        <div class="frame-346551">
                            <span class="aug-2024">
                                {{ selectedMonth }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="frame-125">
                    <div class="rectangle-203"></div>
                    <div class="rectangle-204"></div>
                    <div class="rectangle-205"></div>
                    <div class="rectangle-206"></div>
                    <div class="rectangle-207"></div>
                    <div class="rectangle-2071"></div>
                </div>

                <div class="frame-34633">
                    <input type="text" v-model="form.to" placeholder="Enter your destination"
                        class="destination-input" />
                </div>
                <div class="frame-125">
                    <div class="container">
                        <div v-for="dest in cityNames" :key="dest" class="city-name" @click="selectDestCity(dest.name)">
                            <span>{{ dest.name }}</span>
                        </div>
                    </div>
                </div>
            </div>


            <!--Section - 5-->

            <div v-else-if="!selectedPackage" class="property-1-plate-5">
                <div class="container">
                    <div class="frame-34654">
                        <span class="now-planning-your-holiday-to">
                            NOW PLANNING YOUR HOLIDAY TO
                        </span>
                    </div>
                    <div class="frame-34632" @click="closePlanAtrip">
                        <img class="mask-group-3" src="@/assets/images/cancel.png" />
                    </div>
                </div>
                <div class="frame-34673">
                    <div class="frame-34669">
                        <img class="mask-group" src="@/assets/images/flight.png" />
                        <div class="frame-34655">
                            <span class="manali">
                                {{ selectedCity }}
                            </span>
                        </div>
                    </div>
                    <div class="frame-34668">
                        <img class="mask-group-1" src="@/assets/images/calender.png" />
                        <div class="frame-346551">
                            <span class="aug-2024">
                                {{ selectedMonth }}
                            </span>
                        </div>
                    </div>
                    <div class="frame-34670">
                        <img class="mask-group-2" src="@/assets/images/flight.png" />
                        <div class="frame-346552">
                            <span class="pune">
                                {{ selectedDestCity }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="frame-125">
                    <div class="rectangle-203">
                    </div>
                    <div class="rectangle-204">
                    </div>
                    <div class="rectangle-205">
                    </div>
                    <div class="rectangle-206">
                    </div>
                    <div class="rectangle-207">
                    </div>
                    <div class="rectangle-2071">
                    </div>
                </div>
                <div class="frame-34656">
                    <span class="what-is-the-duration-of-your-holiday">
                        What is the duration of your holiday?
                    </span>
                </div>
                <div class="frame-34672">
                    <div @click="selectPackage(packages.onenights)" class="frame-1251">
                        <span class="onenights">
                            3 days - 4 nights
                        </span>
                    </div>
                    <div @click="selectPackage(packages.twonights)" class="frame-34657">
                        <div class="frame-346581">
                            <span class="twonights">
                                6 days - 7 nights
                            </span>
                        </div>
                        <div class="bookmark-1">
                        </div>
                    </div>
                    <div @click="selectPackage(packages.threenights)" class="frame-34658">
                        <span class="threenights">
                            9 days - 10 nights
                        </span>
                    </div>
                    <div @click="selectPackage(packages.fournights)" class="frame-34659">
                        <div class="frame-346582">
                            <span class="threenights">
                                5 days - 6 nights
                            </span>
                        </div>
                        <div class="bookmark">
                        </div>
                    </div>
                </div>
            </div>

            <!--Section - 6-->

            <div v-else-if="!selectedType" class="property-1-plate-7">
                <div class="container-1">
                    <div class="frame-34654">
                        <span class="now-planning-your-holiday-to">
                            NOW PLANNING YOUR HOLIDAY TO
                        </span>
                    </div>
                    <div class="frame-34632" @click="closePlanAtrip">
                        <img class="mask-group-8" src="@/assets/images/cancel.png" />
                    </div>
                </div>
                <div class="frame-34674">
                    <div class="frame-34669">
                        <img class="mask-group" src="@/assets/images/flight.png" />
                        <div class="frame-34655">
                            <span class="manali">
                                {{ selectedCity }}
                            </span>
                        </div>
                    </div>
                    <div class="frame-34668">
                        <img class="mask-group-1" src="@/assets/images/calender.png" />
                        <div class="frame-346551">
                            <span class="aug-2024">
                                {{ selectedMonth }}
                            </span>
                        </div>
                    </div>
                    <div class="frame-34670">
                        <img class="mask-group-2" src="@/assets/images/flight.png" />
                        <div class="frame-346552">
                            <span class="pune">
                                {{ selectedDestCity }}
                            </span>
                        </div>
                    </div>
                    <div class="frame-34671">
                        <img class="mask-group-3" src="@/assets/images/pckge.png" />
                        <div class="frame-346553">
                            <span class="nights">
                                {{ selectedPackage }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="frame-125">
                    <div class="rectangle-203">
                    </div>
                    <div class="rectangle-204">
                    </div>
                    <div class="rectangle-205">
                    </div>
                    <div class="rectangle-206">
                    </div>
                    <div class="rectangle-207">
                    </div>
                    <div class="rectangle-2071">
                    </div>
                </div>
                <div class="frame-34656">
                    <span class="who-is-travelling-with-you">
                        Who is travelling with you?
                    </span>
                </div>
                <div class="frame-34672">
                    <div @click="selectType(packageTypes.solo)" class="frame-1251">
                        <div class="frame-346741">
                            <img class="mask-group-4" src="@/assets/images/solo.png" />
                        </div>
                        <div class="frame-1252">
                            <span class="solo">
                                solo
                            </span>
                        </div>
                    </div>
                    <div @click="selectType(packageTypes.couple)" class="frame-34657">
                        <div class="container">
                            <div class="frame-34675">
                                <img class="mask-group-5" src="@/assets/images/couple.png" />
                            </div>
                            <div class="frame-34658">
                                <span class="couple">
                                    Couple
                                </span>
                            </div>
                        </div>
                        <div class="bookmark">
                        </div>
                    </div>
                    <div @click="changeCounterStatus()" class="frame-346581">
                        <div class="frame-34676">
                            <img class="mask-group-6" src="@/assets/images/family.png" />
                        </div>
                        <div class="frame-346582">
                            <span class="family">
                                Family
                            </span>
                        </div>
                    </div>
                    <div @click="changeCounterStatusSec()" class="frame-34659">
                        <div class="container-2">
                            <div class="frame-34677">
                                <img class="mask-group-7" src="@/assets/images/group.png" />
                            </div>
                            <div class="frame-346583">
                                <span class="group">
                                    Group
                                </span>
                            </div>
                        </div>
                        <div class="bookmark-1">
                        </div>
                    </div>
                </div>
                <div v-if="showCounterDiv === true" class="classic">
                    <div class="frame-34679">
                        <p class="how-many-of-you-are-travelling-number-of-rooms">
                            <span class="how-many-of-you-are-travelling-number-of-rooms-sub-22">How many of you are
                                travelling?</span>
                        </p>
                    </div>
                    <div class="frame-34687 flexedDivs">
                        <div class="enter">
                            <div class="frame-34678">
                                <p class="room-2-adults">
                                    1 room, 2 adults
                                </p>
                            </div>
                            <div class="room-counter">
                                <p>Room</p>
                                <div class="roomCount">
                                    <span class="counter-style" @click="decreaseRoomCount">-</span>
                                    <span>{{ form.roomsRequired }}</span>
                                    <span class="counter-style" @click="increaseRoomCount">+</span>
                                </div>
                            </div>
                            <div class="people-count">
                                <div class="person-count">
                                    <p>Adults(+12)</p>
                                    <div class="personCounter">
                                        <span class="counter-style" @click="decreaseAdultCount">-</span>
                                        <span>{{ form.adults }}</span>
                                        <span class="counter-style" @click="increaseAdultCount">+</span>
                                    </div>
                                </div>
                                <div class="person-count">
                                    <p>Children</p>
                                    <div class="personCounter">
                                        <span class="counter-style" @click="decreaseChildCount">-</span>
                                        <span>{{ form.children }}</span>
                                        <span class="counter-style" @click="increaseChildCount">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="frame-34688">
                            <div @click="selectType(packageTypes.family)" class="frame-34683">
                                <span class="continue">
                                    Continue
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="showCounterDivSec === true" class="classic">
                    <div class="frame-34679">
                        <p class="how-many-of-you-are-travelling-number-of-rooms">
                            <span class="how-many-of-you-are-travelling-number-of-rooms-sub-22">How many of you are
                                travelling?</span>
                        </p>
                    </div>
                    <div class="frame-34687 flexedDivs">
                        <div class="enter">
                            <div class="frame-34678">
                                <p class="room-2-adults">
                                    1 room, 2 adults
                                </p>
                            </div>
                            <div class="room-counter">
                                <p>Room</p>
                                <div class="roomCount">
                                    <span class="counter-style" @click="decreaseRoomCount">-</span>
                                    <span>{{ form.roomsRequired }}</span>
                                    <span class="counter-style" @click="increaseRoomCount">+</span>
                                </div>
                            </div>
                            <div class="people-count">
                                <div class="person-count">
                                    <p>Adults(+12)</p>
                                    <div class="personCounter">
                                        <span class="counter-style" @click="decreaseAdultCount">-</span>
                                        <span>{{ form.adults }}</span>
                                        <span class="counter-style" @click="increaseAdultCount">+</span>
                                    </div>
                                </div>
                                <div class="person-count">
                                    <p>Children</p>
                                    <div class="personCounter">
                                        <span class="counter-style" @click="decreaseChildCount">-</span>
                                        <span>{{ form.children }}</span>
                                        <span class="counter-style" @click="increaseChildCount">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="frame-34688">
                            <div @click="selectType(packageTypes.group)" class="frame-34683">
                                <span class="continue">
                                    Continue
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!--section-7-->

            <div v-else class="property-1-plate-9">
                <div class="container">
                    <div class="frame-34654">
                        <span class="now-planning-your-holiday-to">
                            NOW PLANNING YOUR HOLIDAY TO
                        </span>
                    </div>
                    <div class="frame-34632" @click="closePlanAtrip">
                        <img class="mask-group-8" src="@/assets/images/cancel.png" />
                    </div>
                </div>
                <div class="frame-34674">
                    <div class="frame-34669">
                        <img class="mask-group" src="@/assets/images/flight.png" />
                        <div class="frame-34655">
                            <span class="manali">
                                {{ selectedCity }}
                            </span>
                        </div>
                    </div>
                    <div class="frame-34668">
                        <img class="mask-group-1" src="@/assets/images/calender.png" />
                        <div class="frame-346551">
                            <span class="aug-2024">
                                {{ selectedMonth }}
                            </span>
                        </div>
                    </div>
                    <div class="frame-34670">
                        <img class="mask-group-2" src="@/assets/images/flight.png" />
                        <div class="frame-346552">
                            <span class="pune">
                                {{ selectedDestCity }}
                            </span>
                        </div>
                    </div>
                    <div class="frame-34671">
                        <img class="mask-group-3" src="@/assets/images/pckge.png" />
                        <div class="frame-346553">
                            <span class="nights">
                                {{ selectedPackage }}
                            </span>
                        </div>
                    </div>
                    <div class="frame-34672">
                        <img class="mask-group-4" src="@/assets/images/people.png" />
                        <div class="frame-346554">
                            <span class="pax">
                                {{ selectedType }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="frame-125">
                    <div class="rectangle-203">
                    </div>
                    <div class="rectangle-204">
                    </div>
                    <div class="rectangle-205">
                    </div>
                    <div class="rectangle-206">
                    </div>
                    <div class="rectangle-207">
                    </div>
                    <div class="rectangle-2071">
                    </div>
                </div>
                <div class="frame-34656">
                    <span class="enter-your-details-to-personalise-your-trip">
                        Enter your details to personalise your trip
                    </span>
                </div>
                <div class="frame-1252">
                    <div class="frame-1251">
                        <input @input="clearValidity('name', $event)" @blur="clearValidity('name', $event)" type="text" class="name formFields" placeholder="Enter your name" v-model="form.name" />
                        <transition name="fade">
                            <p class="redText" v-if="!nameIsValid">Name is required.</p>
                        </transition>
                        <input @input="clearValidity('phone', $event)" @blur="clearValidity('phone', $event)" type="number" class="phone-no formFields" placeholder="Enter your number"
                            v-model="form.mobile" />
                        <transition name="fade">
                            <p class="redText" v-if="!phoneIsValid">Phone Number is required.</p>
                        </transition>
                        <input @input="clearValidity('email', $event)" @blur="clearValidity('email', $event)" type="email" class="email-id formFields" placeholder="Enter your email"
                            v-model="form.email" />
                        <transition name="fade">
                            <p class="redText" v-if="!emailIsValid">Email is required.</p>
                        </transition>
                    </div>

                    <button class="submit" type="submit">
                        Submit
                    </button>

                </div>
            </div>
        </form>
    </div>
</template>

<script>
import Calendar from 'primevue/calendar';
import { mapActions, mapGetters } from 'vuex';
import { baseURL } from '@/config';
import axios from 'axios';
export default {
    components: {
        Calendar,
    },

    computed: {
        ...mapGetters(['getCityData', 'getError']),
        cityNames() {
            let cityName = this.getCityData;
            return cityName;
        },
        loadError() {
            return this.getError;
        }
    },
    data() {
        return {
            form: {
                from: '',
                month: '',
                departureDate: '',
                to: '',
                duration: '',
                type: '',
                name: '',
                mobile: '',
                email: '',
                roomsRequired: 0,
                adults: 0,
                children: 0
            },
            selectedCity: '',
            selectedMonth: '',
            selectedDate: '',
            selectedDestination: '',
            selectedDestCity: '',
            selectedPackage: '',
            selectedType: '',
            visible: true,
            inputName: '',
            inputNumber: '',
            inputEmail: '',
            errors: {
                name: '',
                phone: '',
                email: ''
            },
            packages: {
                onenights: '3 - 4 nights',
                twonights: '6 - 7 nights',
                threenights: '9 - 10 nights',
                fournights: '5 - 6 nights'
            },
            packageTypes: {
                solo: 'Solo',
                couple: 'Couple',
                family: 'Family',
                group: 'Group'
            },
            roomCounter: 0,
            adultCounter: 0,
            childCounter: 0,
            showCounterDiv: false,
            showCounterDivSec: false,
            nameIsValid: true,
            phoneIsValid: true,
            emailIsValid: true,
            formIsValid: true
        };
    },
    methods: {
        ...mapActions(['fetchCityData', 'registerTripData']),
        fetchData() {
            this.fetchCityData();
        },
        clearValidity(keyvalue, event) {
            let inputValue = event.target.value;
            if (keyvalue == 'name') {
                if (inputValue.length > 0) {
                    this.nameIsValid = true;
                } else {
                    this.nameIsValid = false;
                }
            } else if (keyvalue == 'phone') {
                if (inputValue.length > 0 || this.validPhone(inputValue)) {
                    this.phoneIsValid = true;
                } else {
                    this.phoneIsValid = false;
                }
            } else if (keyvalue == 'email') {
                if (inputValue > 0 || this.validEmail(inputValue)) {
                    this.emailIsValid = true;
                } else {
                    this.emailIsValid = false;
                }
            }
        },
        validateForm() {
            this.formIsValid = true;
            if (this.form.name === '') {
                this.nameIsValid = false;
                this.formIsValid = false;
            }
            if (this.form.mobile === '' || !this.validPhone(this.form.mobile)) {
                this.phoneIsValid = false;
                this.formIsValid = false;
            }
            if (this.form.email === '' || !this.validEmail(this.form.email)) {
                this.emailIsValid = false;
                this.formIsValid = false;
            }
        },
        validEmail(email) {
            const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return re.test(email);
        },
        validPhone(phone) {
            const re = /^\d{10}$/;
            return re.test(phone);
        },
        changeCounterStatus() {
            this.showCounterDiv = !this.showCounterDiv;
            console.log('abababababababab', this.showCounterDiv);
        },
        changeCounterStatusSec() {
            this.showCounterDivSec = !this.showCounterDivSec;
        },
        increaseRoomCount() {
            this.form.roomsRequired++;
        },
        decreaseRoomCount() {
            if (this.form.roomsRequired > 0) {
                this.form.roomsRequired--;
            }
        },
        increaseAdultCount() {
            this.form.adults++;
        },
        decreaseAdultCount() {
            if (this.form.adults > 0) {
                this.form.adults--;
            }
        },
        increaseChildCount() {
            this.form.children++;
        },
        decreaseChildCount() {
            if (this.form.children > 0) {
                this.form.children--;
            }
        },
        selectCity(city) {
            this.selectedCity = city;
            this.form.from = city;
        },
        closePlanAtrip() {
            this.visible = false;
        },
        selectMonth(month) {
            this.selectedMonth = month;
            this.form.month = month;
        },
        selectDestCity(dest) {
            this.selectedDestCity = dest;
            this.form.to = dest;
        },
        selectPackage(packge) {
            this.selectedPackage = packge;
            this.form.duration = packge;
            console.log(this.selectedPackage);
        },
        selectType(type) {
            this.selectedType = type;
            this.form.type = type;
            console.log(type)
        },
        showAlertSuccess() {
            this.$swal("Thank You For Bookin With Us",
                "Thank you for your reservation. We’re dedicated to giving you the best experience possible. If you have any questions, feel free to get in touch.", "success");
        },
        async submitForm() {
            console.log('Form Data:', this.form);
            this.validateForm();

            if(!this.formIsValid) {
                return;
            }

            const formData = new FormData();
            for (const key in this.form) {
                console.log('erwerwefffsfafafasf', key);
                formData.append(key, this.form[key]);
            }
            try {
                await axios.post(`${baseURL}/apis/packages/query`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then((response) => {
                        console.log(response);
                    })

                this.showAlertSuccess();
            } catch (error) {
                console.error('Error: ', error);
            }
            this.visible = false;
        }
    },
    async created() {
        await this.fetchData();
        console.log(this.getCityData);
        console.log('asdfgg', this.cityNames)
    }
};
</script>

<style scoped>
@import '@/assets/planAtrip.css';

.formFields {
    border-radius: 7px;
    border: 0.5px solid #E4E4E4;
    background: #FFFFFF;
    margin-bottom: 20px;
    padding: 14.5px 0 14.5px 29.5px;
    width: 389px;
    box-sizing: border-box;
}

.error-message {
    color: red;
    text-align: left;
}

.flexedDivs {
    display: flex;
    gap: 20px;
}

.enter {
    display: block !important;
}

.room-counter {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #8080804f;
}

.people-count {
    display: flex;
    margin-top: 20px;
    text-align: left;
    gap: 80px;
    margin-bottom: 15px;
}

.roomCount {
    width: 100px;
    display: flex;
    gap: 15px;
}

.personCounter {
    width: 100px;
    display: flex;
    gap: 15px;
}

span.counter-style {
    background: #8080805c;
    height: 25px;
    width: 25px;
    text-align: center;
    border-radius: 40px;
    cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transform: translateX(30px 0.3s ease-in-out);
  transform: translateY(0);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.redText{
  color: red;
}
</style>