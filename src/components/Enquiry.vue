<template>
  <!-- Modal -->
  <div class="modal pointEnq modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="diaolog-box">
          <div class="enquiryHeadng">
            <h1>Send Your Enquiry</h1>
          </div>
          <form @submit.prevent="submitForm">
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" v-model="name.val">
                <transition name="fade">
                  <p class="redText" v-if="!name.isValid">Name is required.</p>
                </transition>
              </div>

              <div class="form-group col-md-4">
                <label for="email">Email id</label>
                <input type="email" class="form-control" id="email" v-model="email.val">
                <transition name="fade">
                  <p class="redText" v-if="!email.isValid">Email is required.</p>
                </transition>
              </div>


              <div class="form-group col-md-4">
                <label for="phone">Phone No.</label>
                <input type="text" class="form-control" id="phone" v-model="phone.val">
                <transition name="fade">
                  <p class="redText" v-if="!phone.isValid">Phone is required.</p>
                </transition>
              </div>

            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="starting">Departure Date</label>
                <Calendar v-model="starting.val" id="starting" dateFormat="dd/mm/yy" />
                <transition name="fade">
                  <p class="redText" v-if="!starting.isValid">Departure Date is required.</p>
                </transition>
              </div>


              <div class="form-group col-md-4">
                <label for="destination">Return Date</label>
                <Calendar v-model="destination.val" id="destination" dateFormat="dd/mm/yy" />
                <transition name="fade">
                  <p class="redText" v-if="!destination.isValid">Return date is required.</p>
                </transition>
              </div>


              <div class="form-group col-md-4">
                <label for="noOfPerson">No. Of Person</label>
                <input type="number" class="form-control" id="noOfPerson" v-model="noOfPerson.val">
                <transition name="fade">
                  <p class="redText" v-if="!noOfPerson.isValid">No of persons should not be empty.</p>
                </transition>
              </div>

            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="finalDestination">Destination</label>
                <input type="text" class="form-control" id="finalDest" v-model="finalDest.val" />
                <transition name="fade">
                  <p class="redText" v-if="!finalDest.isValid">Destination is required.</p>
                </transition>
              </div>

            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" id="message" rows="3" v-model="message.val"></textarea>
            </div>
            <button type="submit" class="btn btn-book">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from 'primevue/calendar';
import { baseURL } from '@/config';
import axios from 'axios';
export default {
  components: {
    Calendar,
  },
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
      starting: {
        val: '',
        isValid: true
      },
      destination: {
        val: '',
        isValid: true
      },
      noOfPerson: {
        val: '',
        isValid: true
      },
      message: {
        val: '',
        isValid: true
      },
      finalDest: {
        val: '',
        isValid: true
      },
      formIsValid: 'true'
    }
  },
  methods: {
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
      if (this.starting.val === '') {
        this.starting.isValid = false;
        this.formIsValid = false;
      }
      if (this.destination.val === '') {
        this.destination.isValid = false;
        this.formIsValid = false;
      }
      if (this.noOfPerson.val === '') {
        this.noOfPerson.isValid = false;
        this.formIsValid = false;
      }
      if (this.message.val === '') {
        this.message.isValid = false;
        this.formIsValid = false;
      }
      if (this.finalDest.val === '') {
        this.finalDest.isValid = false;
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
        destination: this.finalDest.val,
        total_no_travelers: this.noOfPerson.val,
        departuredate: this.starting.val,
        returndate: this.destination.val,
        adminEamil: this.email.val,
        message: this.message.val

      }
      const enquiryFormData = new FormData();
      for (const key in formData) {
        enquiryFormData.append(key, formData[key]);
      }
      try {
        await axios.post(`${baseURL}/apis/query/savequery`, enquiryFormData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((response) => {
          console.log('Enquiry-Data', response);
        })
        this.showAlertSuccess();
        this.name.isValid = true;
        this.email.isValid = true;
        this.phone.isValid = true;
        this.finalDest.isValid = true;
        this.noOfPerson.isValid = true;
        this.starting.isValid = true;
        this.destination.isValid = true;
        this.email.isValid = true;

      } catch (error) {
        console.error('Error', error);
      }

      this.name = '';
      this.email.val = '';
      this.phone.val = '';
      this.finalDest.val = '';
      this.noOfPerson.val = '';
      this.starting.val = '';
      this.destination.val = '';
      this.message.val = '';
    }
  }
}
</script>

<style scoped>
.text-danger {
  color: red;
}

.redText{
  color: red;
}

.enquiryHeadng {
  text-align: center;
}

.enquiry-form {
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-header {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #212529;
}

.btn-close {
  background-color: #f8d7da;
  border: none;
  border-radius: 50%;
  padding: 5px 10px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
}

.btn-close:hover {
  background-color: #f5c6cb;
}

.btn-book {
  background-color: #dc3545;
  color: #fff;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 5px;
  display: block;
  margin: 20px auto 0;
}

.btn-book:hover {
  background-color: #c82333;
}

.diaolog-box {
  padding: 55px;
}

.form-row {
  display: flex;
  gap: 10px;
  margin: 19px 0;
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
</style>