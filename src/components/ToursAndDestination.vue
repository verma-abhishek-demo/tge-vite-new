<template>
    <div class="sectionOne">
        <div class="wrapper">
            <div class="section-one-text">
                <div class="part-1">
                    <span class="simple-text">EMBARK ON</span><br>
                    <span class="simple-text">YOUR</span>&nbsp;
                    <span class="red-text">SOLO ADVENTURE</span><br>
                    <span class="red-text">DISCOVER</span>&nbsp;
                    <span class="simple-text">THE WORLD ALONE</span>
                </div>
                <div class="part-2">
                    <p>Experience the freedom and excitement of solo travel. Discover new destinations, meet new people,
                        and find yourself along the way.</p>
                </div>
                <div class="part-3">
                    <button class="btn-red">EXPLORE</button>
                </div>
                <div class="part-4"><img class="two-img" src="@/assets/images/page-down.png" /></div>
            </div>

        </div>
    </div>
    <div class="sectionTwo">
        <p class="two-text">WHERE TO GO</p>
        <TotalPackages />
    </div>
    <div class="sectionThird">
        <ThirdContent />
    </div>
    <div class="sectionFour wrapper">
        <div class="left-four">
            <img src="@/assets/images/left-girl.png" />
        </div>
        <div class="right-four">
            <div class="top-right">
                <div class="red-line">
                    <span class="title">Our Travel Agency is all about </span><br>
                    <span class="title red-text">storytelling</span>
                    <span class="title"> And</span>&nbsp;
                    <span class="title red-text">experience</span>
                </div>
                <p class="right-four-text">Embarking on a solo trip offers unparalleled freedom and self-discovery. Travel at your own pace, explore new destinations, and meet interesting people along the way. </p>
            </div>
            <div class="bottom-right">
                <div class="top-img">
                    <img src="@/assets/images/blue-lake.png" />
                    <img src="@/assets/images/waterfall.png" />
                </div>
                <div class="down-img">
                    <img src="@/assets/images/brown-bag.png" />
                    <img src="@/assets/images/road-girl.png" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TotalPackages from './TotalPackages.vue';
import ThirdContent from './ThirdContent.vue';
export default {
    components: {
        TotalPackages,
        ThirdContent
    }
}
</script>

<style scoped>
.sectionOne {
    background-image: url('@/assets/images/T&D-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 60px 0;
}

.wrapper {
    width: 1200px;
    margin: auto;
}

.section-one-text {
    width: 65%;
    background: #fff;
    padding: 20px;
    border: 8px solid #00000045;
}

span.simple-text {
    font-size: 43px;
    font-weight: 800;
}

span.red-text {
    font-size: 43px;
    font-weight: 800;
    color: red;
}

.part-2 {
    font-size: 20px;
    font-weight: 400;
    margin: 22px 0;
}

button.btn-red {
    color: #fff;
    background: red;
    border: none;
    padding: 8px 72px;
    border-radius: 5px;
}

.part-4 {
    position: relative;
}

img.two-img {
    position: absolute;
    left: 544px;
    top: 48px;
}

.sectionTwo {
    margin-top: 60px;
}

p.two-text {
    width: 178px;
    margin: auto;
    font-size: 25px;
    font-weight: 800;
    border-bottom: 3px solid red;
}

.sectionFour {
    display: flex;
}

.left-four {
    width: 45%;
    height: 598px;
    object-fit: cover;
}

.left-four img {
    width: 100%;
    height: 100%;
}

.right-four {
    width: 55%;
    margin-left: 50px;
}

.red-line {
    border-left: 5px solid red;
    padding-left: 10px;
}

.title {
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase !important;
}

.red-text {
    color: red !important;
    font-size: 25px !important;
}

p.right-four-text {
    margin-top: 10px;
}

.top-right {
    padding: 16px;
    border: 1px solid #8080803d;
}

.bottom-right {
    margin-top: 10px;
}

.top-img {
    display: flex;
    margin-bottom: 10px;
}

.top-img img {
    width: 49%;
    margin-right: 10px;
}

.down-img {
    display: flex;
}

.down-img img {
    width: 49%;
    margin-right: 10px;
}
</style>