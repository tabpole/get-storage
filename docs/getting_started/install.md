---
head:
  - - meta
    - name: description
      content: Open your project in an editor, such as Visual Studio Code or Android Studio. Next, Open your project's pubspec.yaml file and add the following line to the dependencies section of your pubspec.yaml file.


prev:
  text: 'Benchmark'
  link: 'getting_started/benchmark.md'

next:
  text: 'Uninstall'
  link: 'getting_started/uninstall.md'
---

# Installation

## pubspec.yaml

To install "Get Storage" package in your Flutter or Dart project, you can follow some steps. Firstly, Open your project in an editor, such as Visual Studio Code or Android Studio. Next, Open your project's pubspec.yaml file and add the following line to the dependencies section of your pubspec.yaml file.

```yaml
dependencies:
  get_storage: ^2.1.1
```

This will add "Get Storage" package as a dependency to your project. Now, save the changes to your pubspec.yaml file. Next, In the terminal of your editor, navigate to the root directory of your project and run the following command to install the package.

```shell
flutter pub get
```

This will download and install the "Get Storage" package and its dependencies. You can now import the package in your Dart or Flutter code using the following statement.

```dart
  import 'package:get_storage/get_storage.dart';
```

**Note**: You must initialize get_storage into the main method befor using it.

## Flutter CLI

Alternatively, You can also install "Get Storage" package using the Flutter command line tool. To install the package, follow described steps. Firstly open a terminal window and navigate to the root directory of your Flutter project. Now, Run the following command.

```shell
flutter pub add get_storage
```

This command will add the "Get Storage" package to your `pubspec.yaml` file and install it. You can also run the following command.

```shell
flutter packages get
```

This command will download and install any dependencies listed in your `pubspec.yaml` file, including "Get Storage". You can now import the package in your Dart or Flutter code using the following statement.

```dart
import 'package:get_storage/get_storage.dart';
```

**Note**: You must initialize get_storage into the main method befor using it.

## Initialization

After installing the package you must make sure to initialize `get_storage` to your main method. To initialize "Get Storage" into the main method of your Flutter app, you can follow described steps. Firstly, import the GetStorage package into your `main.dart` file by adding the following import statement at the top of the file.

```dart
import 'package:get_storage/get_storage.dart';
```

Now, in the main method of your app, before calling runApp method, call the init method of the GetStorage class to initialize the storage system.

```dart
void main() async {
  await GetStorage.init();
  runApp(MyApp());
}
```

The init method is an asynchronous method, so you need to use the async and await keywords to wait for the initialization to complete before running the app.

That's it! You have now initialized "Get Storage" into the main method of your Flutter app and can start using it to store and retrieve data.
