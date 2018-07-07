<template lang="pug">
    //- 已登入
    div(v-if='login')
        p 已登入
    //- 未登入
    div(v-else)
        p 請登入
</template>

<script>
export default {
  data: {
    msg: "Welcome to Your Vue.js App"
  },
  methods: {}
};
</script>
