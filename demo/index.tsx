import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Button, Text, Dimensions } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

const Index = () => {
  const webref = useRef<any>(null);
  const webrefDefault = useRef<any>(null);
  const [show, setShow] = useState<any>(false);
  const [defalutPsnshow, setDefalutPsnshow] = useState<any>(false);


  const onSuccess = (data: any) => {
    console.log('success:' + JSON.stringify(data));
    setShow(false)
    setDefalutPsnshow(false)

  };

  const sources = 'http://localhost:8081/assets/index.html?veeec-ai-config=' +
    encodeURIComponent(`{"VeeecAiverificationCodeKey":"xxxxxxxxxxxxxxxx","protocol":"https://", "type":"WebView"}`);

  const defaultsources = 'http://localhost:8081/assets/default.html?veeec-ai-config=' +
    encodeURIComponent(`{"VeeecAiverificationCodeKey":"xxxxxxxxxxxxxxxx","protocol":"https://", "type":"WebView"}`);

  const webViewOnLoad = (syntheticEvent: any) => {
    const { nativeEvent } = syntheticEvent;
    const curl = nativeEvent.url;
    const jmurl = decodeURIComponent(curl);
  };

  const handleMessage = (e: any) => {
    const { type, data } = JSON.parse(e.nativeEvent.data);
    switch (type) {
      case 'success':
        onSuccess(data);
        break;
      case 'close':
        setShow(false)
        setDefalutPsnshow(false)
        break;
    }
  };

  return (
    <View style={styles.sectionContainer}>
      {/* 自定义位置 */}
      {!show ? <Button
        title="Click me self position "
        color="#f194ff"
        onPress={() => {
          setShow(true)
        }}
      /> : ''}

      <View style={styles.captcha} pointerEvents={show ? 'auto' : 'none'}>
        <WebView
          style={{
            opacity: show ? 1 : 0,
            width: 300,
            height: 200,
          }}
          pointerEvents={show ? 'auto' : 'none'}
          ref={webref}
          allowFileAccess={true}
          source={{ uri: sources }}
          onLoad={webViewOnLoad}
          originWhitelist={['*']}
          automaticallyAdjustContentInsets={false}
          onMessage={handleMessage}
          mixedContentMode="compatibility"
          allowingReadAccessToURL="*"
          useWebKit={true}
        />
      </View>

      {/* 默认位置 */}
      {!defalutPsnshow ? <Button
        title="Click me default position "
        color="#f194ff"
        onPress={() => {
          setDefalutPsnshow(true)
        }}
      /> : ''}

      <View style={styles?.captchaDefault} pointerEvents={defalutPsnshow ? 'auto' : 'none'}>
        <WebView
          style={{
            opacity: defalutPsnshow ? 1 : 0,
            width: 300,
            height: 200,
          }}
          pointerEvents={defalutPsnshow ? 'auto' : 'none'}
          ref={webrefDefault}
          allowFileAccess={true}
          source={{ uri: defaultsources }}
          onLoad={webViewOnLoad}
          originWhitelist={['*']}
          automaticallyAdjustContentInsets={false}
          onMessage={handleMessage}
          mixedContentMode="compatibility"
          allowingReadAccessToURL="*"
          useWebKit={true}
        />
      </View>



    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    position: 'relative',
  },
  captcha: {
    position: 'absolute',
    width: 300,  
    height: 200, 
    top: windowHeight / 2 - 100,  // 垂直居中（屏幕高度的一半减去元素高度的一半）
    left: windowWidth / 2 - 150,  // 水平居中（屏幕宽度的一半减去元素宽度的一半）
  },
  captchaDefault: {
    position: 'absolute',
    width: 300,  
    height: 200, 
    marginTop:80,
    left: windowWidth / 2 - 150,  // 水平居中（屏幕宽度的一半减去元素宽度的一半）
  },
});

export default Index;
