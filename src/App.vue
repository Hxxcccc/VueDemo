<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addTodo="addTodo"/>
      <TodoMain :todos="todos"/>
      <TodoFooter>
        <input type="checkbox" v-model="isCheckAll" slot="check">
        <span slot="size">已完成{{completeSize}}</span> / 全部{{todos.length}}
        <button class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos" slot="delete">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>

<script>
  import Pubsub from 'pubsub-js'
  import Header from './components/Header'
  import Main from './components/Main'
  import Footer from './components/Footer'
  import storageUtils from './utils/storageUtils'

  export default {
    data() {
      return {
        todos: storageUtils.readTodos()
      }
    },

    computed: {
      //完成的数量
      completeSize () {
        return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0) , 0)
      },
      //是否选择 同步修改所有todo
      isCheckAll: {
        get () {
          return this.todos.length===this.completeSize && this.completeSize>0 //计算属性的函数不能调用
        },
        set (value) { //代表当前是否勾选boolean值
          this.selectAllTodos(value)
        }
      }
    },

    mounted () {
      //订阅消息(deleteTodo)
      Pubsub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })
    },

    methods: {
      //添加todo
      addTodo (todo) {
        this.todos.unshift(todo)
      },

      deleteTodo (index) {
        //删除指定下标todo
        this.todos.splice(index, 1)
      },

      //删除已完成的todo
      deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
      },

      //全选或全不选所有todo
      selectAllTodos (isCheck) {
        this.todos.forEach(todo => todo.complete = isCheck)
      }
    },

    watch: {
      todos: {
        deep: true, //深度监视
       /* handler: function (value) {  //todos最新的值
          //保存todosjson数据到localStorage
          //localStorage.setItem('todos_key', JSON.stringify(value))
          storageUtils.saveTodos(value)
        }*/
       handler: storageUtils.saveTodos
       /* handler: function (todos) {
          localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
        }*/
      }
    },

    components: {
      TodoHeader: Header,
      TodoMain: Main,
      TodoFooter: Footer
    }
  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>