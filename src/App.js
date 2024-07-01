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