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
                        <form>
                            <div class="form-group inputForm">
                                <label class="inputLabel" for="name">Name</label>
                                <input type="text" class="form-control inputField" id="name" required>
                            </div>
                            <div class="form-group">
                                <label class="inputLabel" for="email">Email ID</label>
                                <input type="email" class="form-control inputField" id="email" required>
                            </div>
                            <div class="form-group">
                                <label class="inputLabel" for="phone">Phone No.</label>
                                <input type="text" class="form-control inputField" id="phone" required>
                            </div>
                            <div class="form-group">
                                <label class="inputLabel" for="message">Message</label>
                                <textarea class="form-control inputField" id="message" rows="3" required></textarea>
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
export default {

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

.submit-btn {
    background-color: #dc3545;
    color: white;
}

.trip-card {
    margin-bottom: 20px;
}

.trip-card img {
    width: 100%;
    height: auto;
}

.trip-card .card-body {
    background-color: #941a21a3;;
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
</style>