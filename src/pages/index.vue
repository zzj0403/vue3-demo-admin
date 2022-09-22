<template>
  <div>
    后台首页
    <el-button @click="set">设置</el-button>
    <el-button @click="get">读取</el-button>
    <el-button @click="remove">删除</el-button>
  </div>
</template>

<script setup>
import {useCookies} from '@vueuse/integrations/useCookies'

const cookie = useCookies()
console.log(cookie)

useCookies()

function set() {
  cookie.set('admin-cookie', '123456')
}

function get() {
  console.log(cookie.get('admin-cookie'))
}


function remove() {
  cookie.remove('admin-cookie')
}
</script>

<style scoped>

</style>