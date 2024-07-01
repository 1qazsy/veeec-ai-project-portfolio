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
    // @ts-nocheck
import React, { useEffect } from "react"

export default (() => {
    useEffect(() => {
        if (window.VecAICaptcha) {
            if (!window.VecAICaptcha['myOneTexxxst']) {
                window.VecAICaptcha({
                    onSuccess: (data) => {},
                    onClose: (data) => {},
                    dom: 'myOneTexxxst', // 自定义挂载元素： 传入ID即可，不需要携带"#" 
                });
            }
        }
    }, [])

    return <div onClick={() => {
        window.VecAICaptcha['myOneTexxxst'].show();
    }} className="cp">Web Click Me</div>
})
```
