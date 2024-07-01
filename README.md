# Vue Web Demo 

## View demo
```
nvm use 14.21.3
yarn/npm install
yarn/npm run start

```

## How to achieve

### 1. import
```
  <script src="https://www.zsy96115.top/verification-code/sdk/veeeci-ai.js"></script>
```
### 2. Method of use
```
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

      },
      onClose: (data) => {

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

```
