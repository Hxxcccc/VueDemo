<template>
  <ul>
    <li v-for="(m, index) in messages" :key="m.id">
    <router-link to="???">{{m.title}}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        messages: []
      }
    },

    mounted () {
      //模拟发ajax请求获取列表数据
      setTimeout(() => {
        const messages = [
          {id: 1, title: 'messages001'},
          {id: 3, title: 'messages003'},
          {id: 5, title: 'messages005'}
        ]
        //更新状态数据
        this.messages = messages
      }, 1000)
    }
  }


</script>

<style scoped>

</style>