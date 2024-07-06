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
  late final WebViewController controller;

  final encodedConfig = Uri.encodeComponent(jsonEncode({
    'key': 'value',
    'anotherKey': 'anotherValue',
  }));

  @override
  void initState() {
    super.initState();
    controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(const Color(0x00000000))
      ..addJavaScriptChannel(
        'postMessage',
        onMessageReceived: (JavaScriptMessage message) {
          var data = jsonDecode(message.message);
          if (data['type'] == 'success') {
            onSuccess(data['data']);
          } else if (data['type'] == 'close') {
            onClose(data['data']);
          }
        },
      )
      ..setNavigationDelegate(
          NavigationDelegate(
            onProgress: (int progress) {},
            onPageStarted: (String url)  {},
            onPageFinished: (String url) {
              // _setupConsoleMessageHandler();
            },
            onHttpError: (HttpResponseError error) {},
            onWebResourceError: (WebResourceError error) {},
          )
      )
      ..loadRequest(Uri.parse('file:///android_asset/flutter_assets/assets/index.html?data=$encodedConfig'));
  }

  void onSuccess(dynamic data) {
    controller.runJavaScript("alert('Success with data: $data');");
  }

  void onClose(dynamic data) {
    controller.runJavaScript("alert('Close with data: $data');");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: WebViewWidget(controller: controller),
    );
  }
}