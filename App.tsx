import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Button, Text, Dimensions } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

const App = () => {
  const webref = useRef<any>(null);
  const [show, setShow] = useState<any>(false);

  const onSuccess = (data: any) => {
    console.log('success:' + JSON.stringify(data));
    setShow(false)
  };

  const sources = 'https://www.zsy96115.top/verification-code/index.html?veeec-ai-config=' +
    encodeURIComponent(`{"captchaId":"xxxxxxxxxxxxxxxx","protocol":"https://", "type":"WebView"}`);

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
        webref.current.injectJavaScript(`window.VecccaiAiVerificationCode.hide()`)
        break;
    }
  };

  return (
    <View style={styles.sectionContainer}>
      {

        !show && <Button
          title="Click me"
          color="#f194ff"
          onPress={() => {
            setShow(true)
            webref.current.injectJavaScript(`window.VecccaiAiVerificationCode.show()`)
          }}
        />
      }


      <View style={{ width: '100%', height: '100%' }}>
        <WebView
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

export default App;
