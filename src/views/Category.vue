<template>
  <div class="text-center vh-100">
    <Navbar></Navbar>
    <b-container class="flex">
      <div class="mt-4">
        <h3>Choose your skills</h3>
        <p class="text-muted t-14">
          We will show you relevant gigs associated with your skill set.
        </p>
        <div class="row my-1">
          <div class="col-4 my-3">
            <b-card>
              <g-image url="sofware.png" class="mb-2" />
              <p class="mb-0 t-12">Mobile Developer</p>
            </b-card>
          </div>
          <div class="col-4 my-3">
            <b-card class="active">
              <g-image url="sofware.png" class="mb-2" />
              <p class="mb-0 t-12">Mobile Developer</p>
            </b-card>
          </div>
          <div class="col-4 my-3">
            <b-card>
              <g-image url="sofware.png" class="mb-2" />
              <p class="mb-0 t-12">Mobile Developer</p>
            </b-card>
          </div>
          <div class="col-4 my-3">
            <b-card>
              <g-image url="sofware.png" class="mb-2" />
              <p class="mb-0 t-12">Mobile Developer</p>
            </b-card>
          </div>
          <div class="col-4 my-3">
            <b-card>
              <g-image url="sofware.png" class="mb-2" />
              <p class="mb-0 t-12">Mobile Developer</p>
            </b-card>
          </div>
          <div class="col-4 my-3">
            <b-card>
              <g-image url="sofware.png" class="mb-2" />
              <p class="mb-0 t-12">Mobile Developer</p>
            </b-card>
          </div>
          <div class="col-4 my-3">
            <b-card>
              <g-image url="sofware.png" class="mb-2" />
              <p class="mb-0 t-12">Mobile Developer</p>
            </b-card>
          </div>
          <div class="col-4 my-3">
            <b-card>
              <g-image url="sofware.png" class="mb-2" />
              <p class="mb-0 t-12">Mobile Developer</p>
            </b-card>
          </div>
        </div>
      </div>
      <b-button class="btn-lg btn-block mb-4" style="backgroundColor: #9969d3"
        >Next</b-button
      >
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'Category',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.flex {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card {
  border-radius: 17px;
  box-sizing: border-box;
  border: 1px solid #eaecfb;
}

.card.active {
  border: 1.5px solid #9969d3;
  color: #9969d3;
}

.card-body {
  padding: 15px;
}

.t-12 {
  font-size: 12px;
  line-height: 14px;
  color: #5a5f69;
}
.t-14 {
  font-size: 14px;
}
</style>
