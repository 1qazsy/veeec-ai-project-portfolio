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
