import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'dart:convert'; // for jsonEncode

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter WebView Example'),
        ),
        body: WebViewExample(),
      ),
    );
  }
}

class WebViewExample extends StatefulWidget {
  @override
  _WebViewExampleState createState() => _WebViewExampleState();
}

class _WebViewExampleState extends State<WebViewExample> {
  late WebViewController _controller;
  bool _isWebViewVisible = false;

  // 回调方法
  void _flutterCallback(String message) {
    print("Message from JavaScript: $message");
  }

  // 发送参数和回调方法到 WebView
  void _sendMessageToWebView(String message) {
    _controller.runJavascript('window.flutterCallback("$message")');
  }

  @override
  Widget build(BuildContext context) {
    final defaultConfig = {
      'key': 'value',
      'anotherKey': 'anotherValue',
    };

    final encodedConfig = Uri.encodeComponent(jsonEncode(defaultConfig));

    return Column(
      children: [
        ElevatedButton(
          onPressed: () {
            setState(() {
              _isWebViewVisible = !_isWebViewVisible;
            });
          },
          child: Text(_isWebViewVisible ? 'Hide WebView' : 'Show WebView'),
        ),
        if (_isWebViewVisible)
          Expanded(
            child: WebView(
              initialUrl: 'assets/index.html?data=$encodedConfig',
              javascriptMode: JavascriptMode.unrestricted,
              onWebViewCreated: (WebViewController webViewController) {
                _controller = webViewController;
                // 传递回调方法和参数
                _controller.runJavascript('window.flutterCallback = function(message) { console.log("Message from Flutter: " + message); }');
                _controller.runJavascript('window.flutterParams = "This is a parameter from Flutter"');
              },
            ),
          ),
        if (_isWebViewVisible)
          Column(
            children: [
              ElevatedButton(
                onPressed: () {
                  _controller.runJavascript('showBox()');
                },
                child: Text('Show Box'),
              ),
              ElevatedButton(
                onPressed: () {
                  _sendMessageToWebView('This is a message from Flutter');
                },
                child: Text('Send Message to WebView'),
              ),
            ],
          ),
      ],
    );
  }
}