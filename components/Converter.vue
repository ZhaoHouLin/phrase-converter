<script setup>
import gsap from "gsap"
import IconOpen from "./icons/IconOpen.vue"

const valInput = ref("")

const cryption = useCryption()

const isOpen = ref(false)

const test = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    gsap.to(".decoder", {
      x: 180,
    })
    gsap.to(".convert", {
      x: -180,
    })
    gsap.to(".open", {
      rotation: 180,
    })
  } else {
    gsap.to(".decoder", {
      x: 0,
    })
    gsap.to(".convert", {
      x: 0,
    })
    gsap.to(".open", {
      rotation: 0,
    })
  }
}

// const clear = () => {
//   valInput.value.forEach((item) => (item.value = ""))
// }
</script>

<template lang="pug">
.convert(style="-webkit-app-region: drag")
  h1 加密助記詞轉換器
  .list
    .item(v-for='(item,key) in cryption.convertResult' :key='item.title')
      h3 {{item.title}}
      //- input( :placeholder="item.code" @input="convert($event,key)" @blur="clear" ref="valInput" )
      input( @input="cryption.convert($event,key)" ref="valInput" :value="item.code")
  .open(@click='test')
    IconOpen
</template>

<style lang="stylus" scoped>

.convert
  z-index 1
  width 300px
  background-color color_primary
  color white
  padding 2rem
  box-shadow 4px 4px 4px rgba(color_secondary,0.3)
  border-radius 2rem
  // margin-right 1rem
  flex(,,column)
  position relative
  .open
    size(32px)
    position absolute
    right 4px
    background none
    color color_third
    font-weight bold
    font-size 18px

    cursor pointer
    user-select none

.convert h1
  margin-bottom 2rem
  text-align center
  background linear-gradient(45deg, color_secondary, color_third)
  background -webkit-linear-gradient(45deg, color_secondary, color_third)
  background-clip text
  -webkit-background-clip text
  color transparent
.convert .list .item
  display flex
  justify-content space-between
  align-items center
  margin-bottom 0.8rem
  border-bottom 1px solid
  border-image-source linear-gradient(-90deg, color_secondary, color_third);
  border-image-slice 1
  height 1.5rem
  h3
    // border 1px solid #000
    width 100px
  h4
    display flex
    justify-content center
</style>
