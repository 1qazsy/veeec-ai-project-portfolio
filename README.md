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
     <div onClick={() => {
        if (window.VecccaiAiVerificationCode) {
            window.VecccaiAiVerificationCode.init({
                onSuccess: (data) => {

                    window.VecccaiAiVerificationCode.hide()
                },
                onClose: (data) => {

                    window.VecccaiAiVerificationCode.hide()
                },
                dom: false, // 自定义挂载元素： 传入ID即可，不需要携带"#" 
            });

            // 初始化后隐藏
        }

    }} className="cp">Web Click Me</div>
```
