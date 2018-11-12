<template>
  <div>
    <mt-button icon="more" style="width: 100%" type="danger" @click="hint">戾气太重了</mt-button>
  </div>
</template>

<script>
  //import {Button} from 'mint-ui'
  import {Toast} from 'mint-ui'

  export default {
    //局部注册组件 只能在当前组件使用
    /*components: {
      Button
    }*/
    methods: {
      hint () {
        Toast({
          message: '妹有画面啊',
          position: 'bottom',
          duration: 5000
        })
      }
    }
  }

</script>

<style scoped>

</style>