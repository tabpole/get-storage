---
prev:
  text: 'Benchmark'
  link: 'getting_started/benchmark.md'

next:
  text: 'Uninstall'
  link: 'getting_started/uninstall.md'
---

# Installation

## pubspec.yaml

To install "Get Storage" package in your Flutter or Dart project, you can follow these simple steps:

1. Open your project in an editor, such as Visual Studio Code or Android Studio.
2. Open your project's pubspec.yaml file.
3. Add the following line to the dependencies section of your pubspec.yaml file:

    ```dart
    dependencies:
      get_storage: ^2.1.1
    ```

    This will add "Get Storage" package as a dependency to your project.  

4. Save the changes to your pubspec.yaml file.
5. In the terminal of your editor, navigate to the root directory of your project and run the following command to install the package:

    ```dart
    flutter pub get
    ```

    This will download and install the "Get Storage" package and its dependencies.

6. You can now import the package in your Dart or Flutter code using the following statement:

    ```dart
    import 'package:get_storage/get_storage.dart';
    ```

That's it! You have now installed "Get Storage" package in your project and can start using it to store and retrieve data.

## Flutter command

You can also install "Get Storage" package using the Flutter command line tool. To install the package, follow these steps:

1. Open a terminal window and navigate to the root directory of your Flutter project.
2. Run the following command:

    ```dart
    flutter pub add get_storage
    ```

    This command will add the "Get Storage" package to your `pubspec.yaml` file and install it.

3. Alternatively, you can also run the following command:

    ```dart
    flutter packages get
    ```

    This command will download and install any dependencies listed in your `pubspec.yaml` file, including "Get Storage".

4. You can now import the package in your Dart or Flutter code using the following statement:

    ```dart
    import 'package:get_storage/get_storage.dart';
    ```

That's it! You have now installed "Get Storage" package in your project and can start using it to store and retrieve data.

## Initialization

After installing the package you must make sure to initialize `get_storage` to your main method. To initialize "Get Storage" into the main method of your Flutter app, you can follow these steps:

1. Import the GetStorage package into your main.dart file by adding the following import statement at the top of the file:

    ```dart
    import 'package:get_storage/get_storage.dart';
    ```

2. In the main method of your app, before calling runApp method, call the init method of the GetStorage class to initialize the storage system:

    ```dart
    void main() async {
      await GetStorage.init();
      runApp(MyApp());
    }
    ```

    The init method is an asynchronous method, so you need to use the async and await keywords to wait for the initialization to complete before running the app.

That's it! You have now initialized "Get Storage" into the main method of your Flutter app and can start using it to store and retrieve data.
