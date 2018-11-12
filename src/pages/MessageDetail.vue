<template>
  <ul>
    <li>id: {{$route.params.id}}</li>
    <li>title: {{messageDetail.title}}</li>
    <li>content: {{messageDetail.content}}</li>
  </ul>
</template>

<script>
  const allMessageDetails = [
    {id: 1, title: 'messages001', content: 'message content 001'},
    {id: 3, title: 'messages003', content: 'message content 003'},
    {id: 5, title: 'messages005', content: 'message content 005'}
  ]
  export default {
    data () {
      return {
        messageDetail: {}
      }
    },

    //当请求路由不变只有参数变化时 不会干掉当前组件对象再创建一个新的 而是复用==> mounted()不会反复执行
    mounted () {
      this.showUI(this.$route)
    },

    watch: {
      $route (value) {
        this.showUI(value)
      }
    },

    methods: {
      showUI (route) {
        const id = route.params.id * 1
        const messageDetail =  allMessageDetails.find(md => md.id === id)
        this.messageDetail = messageDetail
      }
    }

   /* //计算属性做法
    computed: {
     messageDetail () {
       const id = this.$route.params.id * 1
       return allMessageDetails.find(md => md.id === id)
     }
    }*/
  }
</script>

<style scoped>

</style>