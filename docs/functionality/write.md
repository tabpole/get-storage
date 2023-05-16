---
head:
  - - meta
    - name: description
      content: remove feature of get storage package
  - - meta
    - name: keywords
      content: flutter storage, persistent storage, key value storage, local data storage, shared preferences, flutter data caching, flutter state management, flutter local storage , flutter , remove , getx


prev:
  text: 'Uninstall'
  link: 'getting_started/uninstall.md'

next:
  text: 'Read'
  link: 'functionality/read.md'
---

# Write

Write data into Get Storage

## Syntax

The `write` method of the `GetStorage` class in the "Get Storage" package is used to write a value to a key in the storage system. The method takes two parameters:  `key` and `value` . It does not have a return value. Instead, it saves the data to the storage and returns `void` .

```dart
GetStorage().write(key, value); // Synchronously
```

```dart
await GetStorage().write(key, value); // Asynchronously
```

```dart
// Using the then method of the Future object
GetStorage().write(key, value).then((_) {
    print('Data has been saved successfully');
});
```

Note that the `then` method in the last example does not receive any value, as the write method does not return anything. It is called when the data has been successfully saved to the storage.

**Note**: that the `write` method is asynchronous method, so you should use the `await` keyword when calling it.

## Example

Here's an example of how to use the `write` method:

```dart
final box = GetStorage();
// Store a value with a key
box.write('name', 'John');
```

In this example, we are creating a new instance of the `GetStorage` class and using its `write` method to store a value of `'John'` with a key of `'name'`.

When you call the `write` method with a key and value, the storage system saves the value to disk under the specified key. The value can be of any data type, such as a string, integer, boolean, or even a complex object.

If the key already exists in the storage system, the `write` method will overwrite the existing value with the new one.

Alternatively, you can use the `write` method in one line like this:

```dart
GetStorage().write('name', 'John');
```

## Complete Example

Here is an example:

```dart
import 'package:flutter/material.dart';
import 'package:get_storage/get_storage.dart';

void main() async {
  await GetStorage.init();
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  final box = GetStorage();

  MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // Store data
    box.write('name', 'John');
    // Retrieve data
    String name = box.read('name');

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Get Storage Demo'),
        ),
        body: Center(
          child: Text('Hello, $name!'),
        ),
      ),
    );
  }
}
```
