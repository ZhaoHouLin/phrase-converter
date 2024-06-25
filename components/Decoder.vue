<script setup>
import IconExchangeAlt from "./icons/IconExchangeAlt.vue"
const cryption = useCryption()
</script>

<template lang="pug">
.decoder(style="-webkit-app-region: drag" ref='decoder')
  .encryption-code 
    h3 加密代碼
    textarea(v-model="cryption.encryptionCode.value")
  button(@click="cryption.decrypt()") 解碼
  .icon
    IconExchangeAlt
  .decryption-code 
    h3 解密代碼 
    textarea(v-model="cryption.decryptionCode.value")
  button(@click="cryption.encrypt()") 加密
  
</template>

<style lang="stylus" scoped>
.decoder
  size(240px,360px)
  flex(space-around,flex-end,column)
  position absolute
  background-color color_primary
  // border 1px solid #000
  color white
  padding 2rem
  box-shadow 4px 4px 4px rgba(color_third,0.3)
  border-radius 2rem
  button
    background none
    // border 1px solid #fff
    // 漸層邊框
    border 2px solid
    border-image-source linear-gradient(180deg, color_secondary, color_third);
    border-image-slice 1

    font-weight bold
    font-size 18px
    padding 4px 16px
    cursor pointer
    user-select none
    margin-top 1rem
    background linear-gradient(45deg, color_secondary, color_third)
    background -webkit-linear-gradient(45deg, color_secondary, color_third)
    background-clip text
    -webkit-background-clip text
    color transparent

.decoder h1
  margin-bottom 2rem
  text-align center

.decoder
  .encryption-code,.decryption-code
    size(240px,100px)
    margin-bottom 2rem
    textarea
      size()
    h3
      margin-bottom 8px
      background linear-gradient(90deg, color_secondary, color_third)
      background -webkit-linear-gradient(90deg, color_secondary, color_third)
      background-clip text
      -webkit-background-clip text
      color transparent
  .icon
    size(32px)
    align-self center
    // margin 1rem
    margin-bottom 1rem
    transform rotate(90deg)
    svg
      fill url(#exchange-alt-gradient)
</style>
