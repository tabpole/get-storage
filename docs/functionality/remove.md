---
prev:
  text: 'Read'
  link: 'functionality/read.md'

next:
  text: 'Erase'
  link: 'functionality/erase.md'
---

# Remove

Remove data from Get Storage

## Syntax

The `remove` method in the `get_storage` package is used to remove data from the storage. Like the `write` method, it does not return anything and its output is `void`.

```dart
GetStorage().remove(key); // Synchronously
```

```dart
await GetStorage().remove(key); // Asynchronously
```

```dart
// Using the then method of the Future object
GetStorage().remove(key).then((_) {
    print('Data has been removed successfully');
});
```

Similar to the `write` method, the `then` method in the last example does not receive any value, as the `remove` method does not return anything. It is called when the data has been successfully removed from the storage.

**Note**: that the `remove` method is asynchronous method, so you should use the `await` keyword when calling it.

## Example

Here's an example of how to use the `remove` method.

```dart
// Create an instance of GetStorage
final box = GetStorage();

// Store a value with a key
await box.write('name', 'John Doe');

// Retrieve the value
String name = await box.read('name');
print(name); // Output: John

// Remove the value
await box.remove('name');

// Attempt to retrieve the value again
final removedName = await box.read('name');
print(removedName); // Output: null
```

In this example, First create an instance of `GetStorage` class. Then store a value with the key `name` using the write method. Next, retrieve the value using the `read` method and print it to the console.

After that, use the `remove` method to remove the value associated with the `name` key from the storage. Now, attempt to retrieve the value again using the `read` method, and since the value has been removed, the output is `null`.

Alternatively, you can use the `remove` method in one line like this:

```dart
GetStorage().remove('name');
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
              await box.write('name', 'John Doe');

              // Retrieve the value
              String name = await box.read('name');
              print(name); // Output: John

              // Remove the value
              await box.remove('name');

              // Attempt to retrieve the value again
              final removedName = await box.read('name');
              print(removedName); // Output: null
            },
            child: const Text('Click me'),
          ),
        ),
      ),
    );
  }
}
```
