<template>
  <!-- Modal -->
  <div class="modal pointEnq modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <input type="text" class="form-control" id="name" v-model="name">
                <span v-if="errors.name" class="text-danger">{{ errors.name }}</span>
              </div>
              <div class="form-group col-md-4">
                <label for="email">Email id</label>
                <input type="email" class="form-control" id="email" v-model="email">
                <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
              </div>
              <div class="form-group col-md-4">
                <label for="phone">Phone No.</label>
                <input type="text" class="form-control" id="phone" v-model="phone">
                <span v-if="errors.phone" class="text-danger">{{ errors.phone }}</span>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="starting">Departure Date</label>

                <Calendar v-model="starting" id="starting" dateFormat="dd/mm/yy" />
                <span v-if="errors.starting" class="text-danger">{{ errors.starting }}</span>
              </div>
              <div class="form-group col-md-4">
                <label for="destination">Return Date</label>
                <Calendar v-model="destination" id="destination" dateFormat="dd/mm/yy" />
                <span v-if="errors.destination" class="text-danger">{{ errors.destination }}</span>
              </div>
              <div class="form-group col-md-4">
                <label for="noOfPerson">No. Of Person</label>
                <input type="number" class="form-control" id="noOfPerson" v-model="noOfPerson">
                <span v-if="errors.noOfPerson" class="text-danger">{{ errors.noOfPerson }}</span>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="finalDestination">Destination</label>
                <input type="text" class="form-control" id="finalDest" v-model="finalDest" />
              </div>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" id="message" rows="3" v-model="message"></textarea>
              <span v-if="errors.message" class="text-danger">{{ errors.message }}</span>
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
      name: '',
      email: '',
      phone: '',
      starting: '',
      destination: '',
      noOfPerson: '',
      message: '',
      finalDest: '',
      errors: {}
    }
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.name) {
        this.errors.name = "Name is required.";
      }

      if (!this.email) {
        this.errors.email = "Email is required.";
      } else if (!this.validEmail(this.email)) {
        this.errors.email = "Valid email is required.";
      }

      if (!this.phone) {
        this.errors.phone = "Phone number is required.";
      } else if (!this.validPhone(this.phone)) {
        this.errors.phone = "Valid phone number is required.";
      }

      if (!this.starting) {
        this.errors.starting = "Starting point is required.";
      }

      if (!this.destination) {
        this.errors.destination = "Destination is required.";
      }

      if (!this.noOfPerson) {
        this.errors.noOfPerson = "Number of persons is required.";
      } else if (this.noOfPerson <= 0) {
        this.errors.noOfPerson = "Number of persons must be greater than 0.";
      }

      if (!this.message) {
        this.errors.message = "Message is required.";
      }

      if (Object.keys(this.errors).length === 0) {
      }
    },
    validEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
      return re.test(email);
    },
    validPhone(phone) {
      const re = /^\d{10}$/;
      return re.test(phone);
    },
    async submitForm() {
      if (!Object.keys(this.errors).length === 0) {
        return;
      }
      if(this.validateForm) {
        return;
      }
      const formData = {
        name: this.name,
        email: this.email,
        mobile: this.phone,
        destination: this.finalDest,
        total_no_travelers: this.noOfPerson,
        departuredate: this.starting,
        returndate: this.destination,
        adminEamil: '',
        message: this.message

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
          console.log('Enquiry-Data', response)
          alert('Success!!!')
        })
      } catch (error) {
        console.error('Error', error);
      }

      this.name = '';
      this.email = '';
      this.phone = '';
      this.finalDest = '';
      this.noOfPerson = '';
      this.starting = '';
      this.destination = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>

.text-danger {
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

</style>