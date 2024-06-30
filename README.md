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
    DemoElement.addEventListener('click', () => {
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
    })
  </script>

</body>

</html>
```

