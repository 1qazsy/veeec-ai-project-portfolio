<template>
	<view class="container">

		<!-- #ifdef H5 -->
		<div @click="myclick">H5 Click Me</div>
		<div id="captcha"></div>
		<!-- #endif -->

		<!-- #ifdef APP-PLUS  -->
		<button class="btn-submit" @click="btnSubmit">APP Click Me</button>
		<captcha ref="captcha" :config="config" @captchaSuccess="captchaSuccess" @captchaClose="captchaClose"></captcha>
		<!-- #endif -->

	</view>
</template>
<!-- APP-PLUS -->
<script>
import captcha from "../../components/veeecai-verification-code/index.vue";
export default {
	data() {
		return {
			config: {
				captchaId: "dd68c10db501ee386f3b0387842d29d0",
				type: "WebView"
			},
			AICaptchaRefTop:{}
		};
	},
	mounted() {
		// 此处为web场景下接入方式
		// #ifdef  H5
		var script = document.createElement('script');
		script.src = "https://www.zsy96115.top/js-sdk/captch/veeeci-ai.js";

		document.body.appendChild(script)
		script.onload = script.onreadystatechange =  () => {
			// 初始化实例
			this.AICaptchaRef = new Captca({
				onSuccess: (data) => {
					jsBridge.callNative({
						type: 'success',
						data: 'OK'
					});
				},
				onClose: (data) => {
					jsBridge.callNative({
						type: 'close',
						data: 'OK'
					});
				},
				position: 'center', // 书写 position 属性，注意不要和style冲突
				key: 'react-native-key',// 必传
				domId: 'captcha',
				style: {
					backgroundColor: 'rgba(153, 153, 153,.5)',
					borderRadius: '5px',
				}
			});
		};
		// #endif
	},
	components: {
		captcha,
	},
	methods: {
		myclick() {
			// console.log(this.AICaptchaRef,'this.AICaptchaRef')
			this.AICaptchaRef.vecaiCaptca.show();
		},
		captchaSuccess(result) { // app端的回调
			console.log(result)
		},
		captchaClose() { // app端的回调

			// uni.showToast({
			// 	title: 'captchaClose',
			// 	icon: "none",
			// 	duration: 2000,
			// });
		},
		btnSubmit: function () { // app端bind模式唤醒验证码的方法
			this.$refs.captcha.showCaptcha();
		},
	},
};
</script>

<style lang="scss">
.container {
	#captcha {
		margin-top: 20px;
	}


	.btn-submit {
		margin-top: 200rpx;
	}
}
</style>