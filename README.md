# html5 Demo 
## Method of use
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

</head>

<body>
  <div id="demo">Click Me</div>
  <script src="https://www.zsy96115.top/verification-code/sdk/veeeci-ai.js"></script>
  <script>
    const DemoElement = document.querySelector('#demo')

    window.VecAICaptcha({
      onSuccess: (data) => {
      },
      onClose: (data) => {
      },
      dom: 'myOneTexxxst-web', // 自定义挂载元素： 传入ID即可，不需要携带"#" 
    });

    DemoElement.addEventListener('click', () => {
      window.VecAICaptcha['myOneTexxxst-web'].show();
    })
  </script>

</body>

</html>
```

