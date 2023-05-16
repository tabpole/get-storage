---
head:
  - - meta
    - name: description
      content: Event feature of get storage package
  - - meta
    - name: keywords
      content: flutter storage, persistent storage, key value storage, local data storage, shared preferences, flutter data caching, flutter state management, flutter local storage , flutter , event lintener , getx

prev:
  text: 'Container'
  link: 'functionality/container.md'

next: false

---

# Event Listener

Get notification when data gets updated

One of the key features of the `get_storage` package is the ability to register event listeners for changes to the stored data. This means that you can get notified when data is added, updated, or removed from the storage.

## Syntax

### Register

Register a storage event listener

```dart
Function? boxListener = GetStorage().listen(() {
    print('Storage updated');
});
```

Register a separate storage container event listener

```dart
Function? cacheListener = GetStorage('cache').listen(() {
    print('Cache storage updated');
});
```

Register storage key event listener

```dart
Function? keyListener = GetStorage().listenKey('counter', (value) {
    print('Counter updated: $value');
});
```

### Dispose

Dispose event listener

```dart
boxListener?.call();
cacheListener?.call();
keyListener?.call();
```

## Example

```dart
// ignore_for_file: avoid_print

import 'package:get_storage/get_storage.dart';

void main() async {
  await GetStorage.init(); // initialize GetStorage
  var box = GetStorage();

  // set up the event listener
  Function? event = box.listen(() {
    print('Storage Updated: ${box.read('message')}');
  });

  Function? keyEvent = box.listenKey('message', (value) {
    print('Message changed: $value');
  });

  // write some data to the storage
  box.write('message', 'Hello World');
  box.write('message', 'Goodbye World');
  box.write('message', 'Thanks Flutter');

  // dispose  event listeners
  event.call();
  keyEvent.call();
}
```

The code is using the `get_storage` package to store data in Flutter. It first initializes the package by calling `GetStorage.init()`, which prepares it for use.

Next, the code sets up an event listener using the `listen()` method on the box instance. This method takes a callback function as its argument, which will be called whenever the data in the storage is changed. In this case, the callback function simply prints a message to the console indicating that the storage data has changed.

Letter on , This code sets up an event listener to detect changes made to the `message` key in the storage. When the `message` key is updated, the listener executes a callback function that prints a message to the console with the new value of the key.

After setting up the event listener, the code writes some data to the storage using the `write()` method on the box instance. This line of code will store the value 'Hello World' under the key 'message' in the storage. When this happens, the event listener that was set up earlier is triggered, and the callback function will be called. Thus, The results will look like the follwing  printed message to the console. The following statements will do the same thing.

```terminal
Storage Updated: Hello World
Message changed: Hello World
Storage Updated: Goodbye World
Message changed: Goodbye World
Storage Updated: Thanks Flutter
Message changed: Thanks Flutter
```

Finally, the code disposes of the event listener by calling the call() method on the function returned by box.listen(). This removes the listener and prevents any memory leaks. It's important to dispose of event listeners when they are no longer needed, as they can consume memory and slow down the application if left active.

Overall, this code demonstrates how to use the get_storage package in Flutter to store and listen to changes in data.

## Complete Example

```dart
// ignore_for_file: avoid_print

import 'dart:math';

import 'package:flutter/material.dart';
import 'package:get_storage/get_storage.dart';

void main() async {
  await GetStorage.init();

  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int? count = GetStorage().read('count');
  Function? storageEvent;
  Function? keyEvent;

  @override
  void initState() {
    super.initState();

    // set up the event listener
    storageEvent = GetStorage().listen(() {
      print("Storage updated");
    });

    keyEvent = GetStorage().listenKey('count', (value) {
      setState(() {
        count = value;
      });
      print("Count value : $value");
    });
  }

  @override
  void dispose() {
    storageEvent?.call();
    keyEvent?.call();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('Get Storage Event Listener')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(count.toString()),
              const SizedBox(height: 20),
              ElevatedButton(
                child: const Text('Click'),
                onPressed: () {
                  GetStorage().write('count', Random().nextInt(100));
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```
