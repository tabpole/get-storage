---
prev:
  text: 'Overview'
  link: 'content/overview.md'

next:
  text: 'Benchmark'
  link: 'content/benchmark.md'
---



# About Get Storage

"Get Storage" is a package for the Dart programming language, which provides an easy-to-use and lightweight solution for storing key-value pairs persistently on disk. It is designed to be efficient and fast, even for large amounts of data. The package is particularly useful for storing small to medium-sized data, such as user settings, cached data, and other configuration information in a Flutter or Dart application.

The package supports both synchronous and asynchronous APIs for accessing and manipulating stored data. It also provides encryption capabilities to store data securely in an encrypted form using the AES algorithm. The package uses the Flutter framework's Path Provider to determine the directory in which to store data.

Some of the key features of "Get Storage" include a simple and intuitive API for storing and retrieving data, support for storing different data types, such as strings, integers, booleans, lists, and maps, efficient performance, and cross-platform compatibility with Flutter and Dart applications.

Overall, "Get Storage" is a useful and versatile package that can help developers to efficiently manage and store data in their applications. It can be particularly useful for mobile app developers who need to store small to medium-sized data in a fast and efficient manner.

## What Get Storage is

Persistent key/value storage for Android, iOS, Web, Linux, Mac and Fuchsia and Windows, that combines fast memory access with persistent storage.

## What Get Storage is NOT

A database. Get is super compact to offer you a solution ultra-light, high-speed read/write storage to work synchronously. If you want to store data persistently on disk with immediate memory access, use it, if you want a database, with indexing and specific disk storage tools, there are incredible solutions that are already available, like Hive and Sqflite/Moor.

As soon as you declare "write" the file is immediately written in memory and can now be accessed immediately with `box.read()`. You can also wait for the callback that it was written to disk using `await box.write()`.

## When to use Get Storage

- simple Maps storage.
- cache of http requests
- storage of simple user information.
- simple and persistent state storage
- any situation you currently use sharedPreferences.

## When not to use Get Storage

- you need indexes.
- when you need to always check if the file was written to the storage disk before starting another operation (storage in memory is done instantly and can be read instantly with box.read(), and the backup to disk is done in the background. To make sure the backup is complete, you can use await, but if you need to call await all the time, it makes no sense you are using memory storage).

## More

You can use this lib even as a modest persistent state manager using Getx SimpleBuilder
