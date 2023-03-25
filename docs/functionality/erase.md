---
prev:
  text: 'Remove'
  link: 'functionality/remove.md'

next:
  text: 'Erase'
  link: 'functionality/container.md'
---

# Erase

Remove data from Get Storage

## Syntax

The `erase` method in the `get_storage` package is used to remove all the data from the storage. Like the `write` and `remove` methods, it does not return anything and its output is `void`.

```dart
GetStorage().erase(); // Synchronously
```

```dart
await GetStorage().erase(); // Asynchronously
```

```dart
// Using the then method of the Future object
GetStorage().erase().then((_) {
  print('All data has been removed successfully');
});
```

As with the previous methods, the `then` method in the last example does not receive any value, as the `erase` method does not return anything. It is called when all data has been successfully removed from the storage.

**Note**: that the `erase` method is asynchronous method, so you should use the `await` keyword when calling it.

## Example

Here's an example of how to use the `write` method.

```dart
final box = GetStorage();
// Store a value with a key
box.erase();
```

The `erase` method in the "Get Storage" package is used to remove all key-value pairs stored in the storage.

In the example you provided, first an instance of `GetStorage` is created. Then, the `erase()` method is called on the instance of GetStorage which will remove all key-value pairs stored in the storage.

The erase method will remove all data stored from "GetStorage", so be careful when using this method as it will delete all data permanently and cannot be undone.

Alternatively, you can use the `erase` method in one line like this:

```dart
GetStorage().erase();
```

## Complete Example

Here is an example:

```dart
// ignore_for_file: avoid_print

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
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Get Storage Demo'),
        ),
        body: Center(
          child: ElevatedButton(
            onPressed: () async {
              // Create an instance of GetStorage
              final box = GetStorage();

              // Store a value with a key
              await box.write('name1', 'John Doe');
              // Store another value with a key
              await box.write('name2', 'Mr Bean');

              // Retrieve the value
              String name1 = await box.read('name1');
              String name2 = await box.read('name2');
              print('==============================');
              print(name1); // Output: John Doe
              print('----------------------------');
              print(name2); // Output: Mr Bean
              print('----------------------------');

              // Erase the value
              await box.erase();

              // Attempt to retrieve the value again
              final rn1 = await box.read('name1');
              print(rn1); // Output: null
              print('----------------------------');
              final rn2 = await box.read('name2');
              print(rn2); // Output: null
            },
            child: const Text('Click me'),
          ),
        ),
      ),
    );
  }
}
```
