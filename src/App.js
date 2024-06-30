export default (() => {
    return <div onClick={() => {
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
})