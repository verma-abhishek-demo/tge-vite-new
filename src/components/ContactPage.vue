<template>
    <div class="sectionOne">
        <div class="contact-hdng">
            <p class="text"> Let's Plan Your Next Adventure <span class="red-text">Together!</span></p>
        </div>
        <div class="container-fluid">
            <div class="row">
                <!-- Left Side: Contact Form -->
                <div class="col-md-6 d-flex align-items-center">
                    <div class="contact-form w-100">
                        <form @submit.prevent="submitForm">
                            <div class="form-group inputForm">
                                <label class="inputLabel" for="name">Name</label>
                                <input @input="clearValidity('name', $event)" @blur="clearValidity('name', $event)"
                                    v-model="name.val" type="text" class="form-control inputField" id="name">
                                <transition name="fade">
                                    <p class="redText" v-if="!name.isValid">Name is required.</p>
                                </transition>
                            </div>
                            <div class="form-group inputForm">
                                <label class="inputLabel" for="email">Email ID</label>
                                <input @input="clearValidity('email', $event)" @blur="clearValidity('email', $event)"
                                    v-model="email.val" type="email" class="form-control inputField" id="email">
                                <transition name="fade">
                                    <p class="redText" v-if="!email.isValid">Email is required.</p>
                                </transition>
                            </div>
                            <div class="form-group inputForm">
                                <label class="inputLabel" for="phone">Phone No.</label>
                                <input @input="clearValidity('phone', $event)" @blur="clearValidity('phone', $event)"
                                    v-model="phone.val" type="text" class="form-control inputField" id="phone">
                                <transition name="fade">
                                    <p class="redText" v-if="!phone.isValid">Phone Number is required.</p>
                                </transition>
                            </div>
                            <div class="form-group inputForm">
                                <label class="inputLabel" for="message">Message</label>
                                <textarea @input="clearValidity('message', $event)"
                                    @blur="clearValidity('message', $event)" v-model="message.val"
                                    class="form-control inputField" id="message" rows="3"></textarea>
                                <transition name="fade">
                                    <p class="redText" v-if="!message.isValid">Message is required.</p>
                                </transition>
                            </div>
                            <button type="submit" class="btn submit-btn btn-block">Submit</button>
                        </form>
                        <div class="social-icons text-center">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <!-- Right Side: Trip Cards -->
                <div class="col-md-6 text-white imgContainer">
                    <div class="trip-card card">
                        <img src="@/assets/images/contact-Kerela.png" class="card-img-top" alt="Kerala Trip">
                        <div class="card-body">
                            <h5 class="card-title topPos">4 Trip</h5>
                        </div>
                    </div>
                    <div class="trip-card card">
                        <img src="@/assets/images/contact-ladakh.png" class="card-img-top" alt="Ladakh Trip">
                        <div class="card-body">
                            <h5 class="card-title topPos">4 Trip</h5>
                        </div>
                    </div>
                    <div class="trip-card card">
                        <img src="@/assets/images/contact-spiti.png" class="card-img-top" alt="spiti Trip">
                        <div class="card-body">
                            <h5 class="card-title topPos">4 Trip</h5>
                        </div>
                    </div>
                    <div class="trip-card card">
                        <img src="@/assets/images/contact-uttrakhand.png" class="card-img-top" alt="uttrakhand Trip">
                        <div class="card-body">
                            <h5 class="card-title topPos">4 Trip</h5>
                        </div>
                    </div>
                    <div class="trip-card card">
                        <img src="@/assets/images/contact-rajasthan.png" class="card-img-top" alt="Rajasthan Trip">
                        <div class="card-body topPos">
                            <h5 class="card-title">4 Trip</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { baseURL } from '@/config';
import axios from 'axios';
export default {
    data() {
        return {
            name: {
                val: '',
                isValid: true
            },
            email: {
                val: '',
                isValid: true
            },
            phone: {
                val: '',
                isValid: true
            },
            message: {
                val: '',
                isValid: true
            },
            formIsValid: true
        }
    },
    methods: {
        clearValidity(keyvalue, event) {
            let inputValue = event.target.value;
            if (keyvalue == 'name') {
                if (inputValue.length > 0) {
                    this.name.isValid = true;
                } else {
                    this.name.isValid = false;
                }
            } else if (keyvalue == 'email') {
                if (inputValue.length > 0 || this.validEmail(inputValue)) {
                    this.email.isValid = true;
                } else {
                    this.email.isValid = false;
                }
            } else if (keyvalue == 'phone') {
                if (inputValue.length > 0 || this.validPhone(inputValue)) {
                    this.phone.isValid = true;
                } else {
                    this.phone.isValid = false;

                }
            } else if (keyvalue == 'message') {
                if (inputValue.length > 0) {
                    this.message.isValid = true;
                } else {
                    this.message.isValid = false;
                }
            }
        },
        validateForm() {
            this.formIsValid = true;
            if (this.name.val === '') {
                this.name.isValid = false;
                this.formIsValid = false;
            }
            if (this.email.val === '' || !this.validEmail(this.email.val)) {
                this.email.isValid = false;
                this.formIsValid = false;
            }
            if (this.phone.val === '' || !this.validPhone(this.phone.val)) {
                this.phone.isValid = false;
                this.formIsValid = false;
            }
            if (this.message.val === '') {
                this.message.isValid = false;
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
        showAlertSuccess() {
            this.$swal("Thank You For Bookin With Us",
                "Thank you for your reservation. We’re dedicated to giving you the best experience possible. If you have any questions, feel free to get in touch.", "success");
        },
        async submitForm() {
            this.validateForm();
            if (!this.formIsValid) {
                return;
            }
            const formData = {
                name: this.name.val,
                email: this.email.val,
                mobile: this.phone.val,
                message: this.message.val,
                destination: '',
                total_no_travelers: '',
                departuredate: '',
                returndate: '',
                adminEamil: ''
            }
            console.log('Form_data:', this.name.val, this.email.val, this.phone.val, this.message.val);

            const contactForm = new FormData();
            for (const key in formData) {
                contactForm.append(key, formData[key]);
            }

            try {
                await axios.post(`${baseURL}/apis/query/savequery`, contactForm, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((response) => {
                    console.log('Enquiry-Data', response);
                })
                this.showAlertSuccess();
                this.name.val = '';
                this.email.val = '';
                this.phone.val = '';
                this.message.val = '';
            } catch (error) {
                console.error('Error', error);
            }
        }
    }
}
</script>

<style scoped>
.sectionOne {
    background-image: url(/src/assets/images/contact-bg.png);
    padding: 50px 0;
    background-repeat: no-repeat;
    background-size: cover;
}

.contact-hdng {
    padding: 100px 0;
}

p.text {
    font-size: 63px;
    font-weight: 900;
    width: 981px;
    margin: auto;
    text-align: center;
}

span.red-text {
    color: red;
    font-weight: 900;
}

.contact-form {
    padding: 30px;
    border-radius: 10px;

}

.inputForm {
    margin-bottom: 36px;
}

.submit-btn {
    background-color: #dc3545;
    color: white;
    margin-top: 26px;
    padding: 10px 70px;
    font-size: 15px;
}

.submit-btn:hover {
    background: transparent !important;
    border: 1px solid #dc3545;
}

.trip-card {
    margin-bottom: 20px;
}

.trip-card img {
    width: 100%;
    height: auto;
}

.trip-card .card-body {
    background-color: #941a21a3;
    ;
    color: white;
    width: 90px;
    position: absolute;
    top: 10px;
    padding: 5px;
    left: 5px;
    border-radius: 10px;
}

.social-icons {
    margin-top: 20px;
}

.social-icons i {
    font-size: 24px;
    color: #dc3545;
    margin-right: 10px;
}

.imgContainer {
    display: flex;
    flex-direction: column;
    padding: 50px;
    background-color: #02013D;
    align-items: center;
    overflow-y: scroll;
    height: 700px;

}

.imgContainer::-webkit-scrollbar {
    width: 0px;
}

.trip-card[data-v-ddc399f4] {
    margin-bottom: 20px;
    max-height: 500px;
    width: 54%;
    border: none;
    background: transparent;
    position: relative;
}

label.inputLabel {
    font-size: 23px;
    font-weight: 500;
}

.inputField {
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-bottom: 2px solid #941a21a3;
    border-radius: 0;
    background: transparent;
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