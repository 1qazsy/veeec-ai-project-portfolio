<template>
  <div id="app" @click="handleClick">
    Click Me
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.VecAICaptcha({
      onSuccess: (data) => {
        window.VecAICaptcha['myOneTestVue'].hide();
      },
      onClose: (data) => {
        window.VecAICaptcha['myOneTestVue'].hide();
      },
      dom: 'myOneTestVue', // 自定义挂载元素： 传入ID即可，不需要携带"#" 
    });
  },
  methods: {
    handleClick() {
      window.VecAICaptcha['myOneTestVue'].show();
    }
  }
}
</script>

<style></style>
