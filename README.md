# React Web Demo 

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
  methods: {
    handleClick() {
      if (typeof window !== 'undefined' && window.VecccaiAiVerificationCode) {
        window.VecccaiAiVerificationCode.init({
          onSuccess: (data) => {
            window.VecccaiAiVerificationCode.hide()
          },
          onClose: (data) => {
            window.VecccaiAiVerificationCode.hide()
          },
          dom: false,
        });
      }
    }
  },
}
</script>

<style></style>

```
