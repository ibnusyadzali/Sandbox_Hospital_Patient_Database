<script>
export default {
  methods: {
    async backhome() {
      this.$router.push('/')
    }
  }
}
</script>

<template>
<div class="container pt-5 mt-5">
    <div class="container pt-3">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="">Error 404</h1>
        </div>
      </div>
    </div>
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="">
            The page you're looking for cannot be found
          </h1>
          <h3>Please back to <span @click.prevent="backhome" class="homebtn" href="#">Home</span> page again ^^</h3>
        </div>
      </div>
    </div>
</template>