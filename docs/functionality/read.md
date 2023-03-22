---
prev:
  text: 'Write'
  link: 'functionality/write.md'

next:
  text: 'Remove'
  link: 'functionality/remove.md'
---

# Read

Read data from Get Storage

## Syntax

The `read` method of the `GetStorage` class in the "Get Storage" package is used to to retrieve the value associated with a specific key in the storage system.

```dart
// Synchronously
dynamic value = GetStorage().read(key);

// OR

// Asynchronously with the async/await keywords
dynamic value = await GetStorage().read(key);

// OR

// Using the then method of the Future object
GetStorage().read(key).then((dynamic value) {
    print("Retrieved data : $value");
});
```

**Note**: that the `read` method is asynchronous method, so you should use the `await` keyword when calling it.

## Example

Here's an example of how to use the `read` method:

```dart
final box = GetStorage();
// Retrieve data
String name = box.read('name');
```

In this example, we are creating a new instance of the `GetStorage` class and using its `read` method to retrieve value using a specific key in the storage system.

When you call the `read` method using a key, the storage system retrieves the value from disk under the specified key. The value can be of any data type, such as a string, integer, boolean, or even a complex object.

Alternatively, you can use the `read` method in one line like this:

```dart
GetStorage().read('name');
```

## Complete Example

Here is an example:

```dart
import 'package:flutter/material.dart';
import 'package:get_storage/get_storage.dart';

void main() async {
  await GetStorage.init();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // Store data
    GetStorage().write('name', 'John');
    // Retrieve data
    String name = GetStorage().read('name');

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
