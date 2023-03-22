---
prev:
  text: 'Install'
  link: 'getting_started/install.md'

next:
  text: 'Write'
  link: 'functionality/write.md'
---

# Uninstall

## pubspec.yaml

You can uninstall "Get Storage" package from your Flutter or Dart project by removing it from the pubspec.yaml file and then updating the project dependencies. Here's how:

1. Open your project's `pubspec.yaml` file in an editor.
2. Remove the following line from the dependencies section of your pubspec.yaml

    ```dart
    get_storage: ^2.1.1
    ```

3. Save the changes to your `pubspec.yaml` file.
4. In the terminal of your editor, navigate to the root directory of your project and run the following command to update the project dependencies:

    ```dart
    flutter pub get
    ```

    This command will update your project dependencies and remove the "Get Storage" package from your project.

5. If there are any other dependencies that are no longer needed after removing "Get Storage", you can run the following command to remove them as well:

    ```dart
    flutter pub autoremove
    ```

That's it! You have now successfully uninstalled "Get Storage" package from your Flutter or Dart project.

## Flutter command

To uninstall "Get Storage" package from your Flutter or Dart project using the Flutter command line tool, you can follow these steps:

1. Open a terminal window and navigate to the root directory of your Flutter project.
2. Run the following command:

    ```dart
    flutter pub remove get_storage
    ```

    This command will remove the "Get Storage" package from your pubspec.yaml file and uninstall it from your project.

3. If there are any other dependencies that are no longer needed after removing "Get Storage", you can run the following command to remove them as well:

    ```dart
    flutter pub autoremove
    ```

That's it! You have now successfully uninstalled "Get Storage" package from your Flutter or Dart project using the Flutter command line tool.
