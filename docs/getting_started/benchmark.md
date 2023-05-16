---

head:
  - - meta
    - name: description
      content: Benchmark of get storage package
  - - meta
    - name: keywords
      content: flutter storage, persistent storage, key value storage, local data storage, shared preferences, benchmark get storage, flutter state management, flutter local storage , flutter , dart, getx

prev:
  text: 'About'
  link: 'getting_started/about.md'

next:
  text: 'Install'
  link: 'getting_started/install.md'
---



# Benchmark

GetStorage is not just fast, it is absurdly fast for being memory-based. All of his operations are instantaneous. A backup of each operation is placed in a Container on the disk. Each container has its own file.

## Read

![Read Benchmark](/benchmark/read.png)

## Write

![Write Benchmark](/benchmark/write.png)

## Delete

![Delete Benchmark](/benchmark/delete.png)
