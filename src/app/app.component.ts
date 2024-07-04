// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'my-angular-app';
  defautlTestRef: any;
  selfTestRef: any;
  // 初始化函数
  ngOnInit() {
    // 在这里添加你的初始化逻辑

    // 初始化一个事件captcha实例，可以通过 this.defautlTestRef.vecaiCaptca.show(); 展示
    this.defautlTestRef = new Captca({
      onSuccess: () => {},
      onClose: () => {},
      key: 'defautlTestRef', // 必传唯一
      position:'top',// 开启后请把 style.position 相关内容清除,否则容易造成冲突
      style: {
        backgroundColor: 'orange',
        top: '20px',
        borderRadius: '5px',
      },
    });

    // 初始化一个常态captcha实例，初始化后会一直展示，传入domId挂载到特殊元素内，做一些特殊逻辑
    this.selfTestRef = new Captca({
      onSuccess: () => {},
      onClose: () => {},
      isNohide: true, // 初始化后一直存在存在，适用于用户自定义弹窗时，或者嵌入某些应用，同时配合弹窗的id
      // position:'center',// 开启后请把 style.position 相关内容清除,否则容易造成冲突
      key: 'selftlTestRef', // 必传唯一
      domId: "dom-modal-test-domId",
      style: {
        backgroundColor: 'rgba(153, 153, 153,.5)',
        borderRadius: '5px',
        position:'absolute',
        left:'20px',
        bottom:'20px',
      },
    });

  }

  default_handleClick() {
    console.log( this.defautlTestRef, this.selfTestRef)
    this.defautlTestRef.vecaiCaptca.show();
  }

  self_handleClick() {
    // 你自己的逻辑
  }
}
