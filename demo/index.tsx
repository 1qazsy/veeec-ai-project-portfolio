import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Button, Text, Dimensions } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

const Index = () => {
  const webref = useRef<any>(null);
  const [show, setShow] = useState<any>(false);

  const onSuccess = (data: any) => {
    console.log('success:' + JSON.stringify(data));
    setShow(false)
  };

  const sources = 'http://localhost:8081/assets/demo.html?veeec-ai-config=' +
    encodeURIComponent(`{"VeeecAiverificationCodeKey":"xxxxxxxxxxxxxxxx","protocol":"https://", "type":"WebView"}`);

  const webViewOnLoad = (syntheticEvent: any) => {
    const { nativeEvent } = syntheticEvent;
    const curl = nativeEvent.url;
    const jmurl = decodeURIComponent(curl);
  };

  const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

  const handleMessage = (e: any) => {
    const { type, data } = JSON.parse(e.nativeEvent.data);
    switch (type) {
      case 'success':
        onSuccess(data);
        break;
      case 'close':
        setShow(false)
        break;
    }
  };

  return (
    <View style={styles.sectionContainer}>
      <Button
        title="Click me"
        color="#f194ff"
        onPress={() => {
          setShow(true)
        }}
      />

      {/* 自定义位置 */}
      <View style={{ width: '100%', height: 235, backgroundColor: '', marginTop: 10, opacity: show ? 1 : 0, }} pointerEvents={show ? 'auto' : 'none'}>
        <WebView
          style={{
            opacity: show ? 1 : 0, height: 300,  // 设置高度
          }}
          pointerEvents={show ? 'auto' : 'none'}
          ref={webref}
          allowFileAccess={true}
          source={{ uri: sources }}
          onLoad={webViewOnLoad} s
          originWhitelist={['*']}
          automaticallyAdjustContentInsets={false}
          onMessage={handleMessage}
          mixedContentMode="compatibility"
          allowingReadAccessToURL="*"
          useWebKit={true}
        />
      </View>

      {/* 默认位置 */}



    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 40,
  },
  captcha: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default Index;
