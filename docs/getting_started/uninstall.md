---
head:
  - - meta
    - name: description
      content: Uninstall get storage package
  - - meta
    - name: keywords
      content: flutter storage, persistent storage, key value storage, local data storage, shared preferences, flutter data caching, flutter state management, flutter local storage , flutter , getx, uninstall


prev:
  text: 'Install'
  link: 'getting_started/install.md'

next:
  text: 'Write'
  link: 'functionality/write.md'
---

# Uninstall

## pubspec.yaml

You can uninstall "Get Storage" package from your Flutter or Dart project by removing it from the `pubspec.yaml` file and then updating the project dependencies. Firstly, Open your project's `pubspec.yaml` file in an editor and remove the following line from the dependencies section.

```yaml
get_storage: ^2.1.1
```

Save the changes to your `pubspec.yaml` file by which the package should be autometically removed. However, you can try an extra step. Go to the terminal of your editor and navigate to the root directory of your project. Now, run the following command to update the project dependencies.

```shell
flutter pub get
```

This command will update your project dependencies and remove the "Get Storage" package from your project. If there are any other dependencies that are no longer needed after removing "Get Storage", you can run the following command to remove them as well.

```shell
flutter pub autoremove
```

That's it! You have now successfully uninstalled "Get Storage" package from your Flutter or Dart project.

## Flutter CLI

To uninstall "Get Storage" package from your Flutter or Dart project using the Flutter command line tool, you can follow described steps. Firstly, open a terminal window and navigate to the root directory of your Flutter project.
Now, run the following command.

```shell
flutter pub remove get_storage
```

This command will remove the "Get Storage" package from your pubspec.yaml file and uninstall it from your project. If there are any other dependencies that are no longer needed after removing "Get Storage", you can run the following command to remove them as well.

```shell
flutter pub autoremove
```

That's it! You have now successfully uninstalled "Get Storage" package from your Flutter or Dart project using the Flutter command line tool.
