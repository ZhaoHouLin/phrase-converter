<script setup>
import gsap from "gsap"

import IconOpen from "../components/icons/IconOpen.vue"

const isOpen = ref(false)
</script>

<template lang="pug">
.content(ref='content')
  Converter
  //- .open(@click='handleOpen')
    IconOpen
  Decoder
  
</template>

<style lang="stylus">
.content
  size(,100vh)
  flex()
  background-color #555
</style>
