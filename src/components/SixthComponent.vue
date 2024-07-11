<template>
    <div class="wrapper">
        <div class="container-fluid hero-section">
            
            <div class="content">
                
                <h2>Enjoy Best Deals</h2>
                <h1>Up to 40% Discount!</h1>
                <p>Version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin bibendum
                    auctor.</p>
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary">Discover More</a>
                
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
    width: 1200px;
    margin: auto;
}

.hero-section {
    position: relative;
    background: url('@/assets/images/bg-sixth.png') no-repeat center center;
    background-size: cover;
    height: 400px;
    display: flex;
    align-items: center;
    color: white;
    border-radius: 20px;
    margin-top: 70px;
    margin-bottom: 70px;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
}

.content[data-v-38ca816b] {
    position: relative;
    z-index: 1;
    width: 500px;
    margin-left: 100px;
    padding: 30px;
    border-radius: 20px;
    background-color: rgb(232 232 232 / 27%);
}
</style>