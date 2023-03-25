---
prev:
  text: 'Erase'
  link: 'functionality/erase.md'

next: false

---

# Container

Creates separate storage objects

## Explanation

`get_storage` also provides a feature called "container" that allows you to create separate storage objects for different parts of your application.

A container is essentially a namespace for your storage keys. When you create a container, you can store data using the same keys as you would with a regular storage object, but the keys will only be accessible within that container. This makes it easier to organize and manage your data, especially if you have a large or complex application.

One of the key benefits of using containers is that you can easily switch between them depending on the context of your application. For example, you might create a container for user preferences and another container for cached data. This makes it easy to clear or update data in one container without affecting the data in other containers.

Overall, the container feature in get_storage provides a simple and flexible way to manage your application's data storage.

## Syntax

To use seperate storage container you must initialize the seperate storage container into main mathod.

```dart
await GetStorage.init('cache'); // initialize to main method
```

Now, you can use your seperate storage container by referencing object `GetStorage('cache')` of that seperate storage container.

```dart
final cacheStorage = GetStorage('cache');
await cacheStorage.write('email', 'admin@user.com');
```

```dart
String? cachedEmail = GetStorage('cache').read('email');
```

**Note**: that the `read` and `write` methods are asynchronous method, so you should use the `await` keyword when calling it.

## Example

### Initialize

Here's an example of how can you use the `container` feature.Firstly, initialize the seperate storage container into main mathod.

```dart
// initialize into main mathod
await GetStorage.init();
await GetStorage.init('admin');
await GetStorage.init('user');
```

### Write

You can now apply `write` function seperately by referencing object of that seperate storage container.

```dart
final commonStorage = GetStorage();
final adminStorage = GetStorage('admin');
final userStorage = GetStorage('user');

await adminStorage.write('email', 'admin@user.com');
await adminStorage.write('password', '12345678');

await userStorage.write('email', 'user@user.com');
await userStorage.write('password', '87654321');

await commonStorage.write('title', 'General Title');
await commonStorage.write('email', 'contact@user.com');
```

### Read

You can also apply `read` function seperately by referencing object of that seperate storage container.

```dart
String? adminEmail = GetStorage('admin').read('email');
String? userEmail = GetStorage('user').read('email');
String? email = GetStorage().read('email');
```

### Others

You can also apply other functions seperately by referencing object of that seperate storage container.

```dart
await GetStorage('admin').erase();
```

## Complete Example

Here is an example:

```dart
// ignore_for_file: avoid_print

import 'package:flutter/material.dart';
import 'package:get_storage/get_storage.dart';

void main() async {
  // you must initialize first
  await GetStorage.init();
  await GetStorage.init('admin');
  await GetStorage.init('user');

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
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                onPressed: addData,
                child: const Text('Add Data'),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: printData,
                child: const Text('Print Data'),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: eraseData,
                child: const Text('Erase Data'),
              ),
            ],
          ),
        ),
      ),
    );
  }

  void addData() async {
    final commonStorage = GetStorage();
    final adminStorage = GetStorage('admin');
    final userStorage = GetStorage('user');

    await adminStorage.write('email', 'admin@user.com');
    await adminStorage.write('password', '12345678');

    await userStorage.write('email', 'user@user.com');
    await userStorage.write('password', '87654321');

    await commonStorage.write('title', 'General Title');
    await commonStorage.write('email', 'contact@user.com');

    print(" Data added Successfully");
  }

  void printData() {
    String? adminEmail = GetStorage('admin').read('email');
    String? userEmail = GetStorage('user').read('email');
    String? email = GetStorage().read('email');

    print('----------------------------');
    print("Admin email : $adminEmail");
    print("User email : $userEmail");
    print("Common email : $email");
    print('----------------------------');
  }

  void eraseData() async {
    await GetStorage('admin').erase();
    print('Admin data storage container has been erased.');

    GetStorage('user').erase().then((_) {
      print('User data storage container has been erased.');
    });

    GetStorage().erase().then((_) {
      print('Common data storage container has been erased.');
    });
  }
}
```
