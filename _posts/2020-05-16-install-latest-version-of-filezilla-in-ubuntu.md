---
layout: post
title:  "Install latest version of FileZilla in Ubuntu"
date:   2020-05-16 02:05:00 +0700
categories: article
author: mati
excerpt_separator: <!--more-->
references: 
    - link: https://askubuntu.com/questions/1000269/how-can-i-upgrade-filezilla-to-the-current-version
      name: StackOverflow
---
FileZilla doesn't update their release in Ubuntu (Linux) repositories anymore.
<!--more-->

- To install the latest version, you need build and install from source.

- This tutorial is working for almost version of Ubuntu. I tested with Ubuntu 18.04.

- For the Ubuntu 20.04, we have problem with `libwxgtk3.0-dev`. There are no workaround and we will waiting for update because Ubuntu 20.04 has just release.

Go for it :wink:! 

1. Install the prerequisites for installing from source
```shell
$ sudo apt install build-essential wx-common libpugixml-dev libsqlite3-dev libwxgtk3.0-dev nettle-dev gnutls-bin libgnutls28-dev libunistring-dev
```

2. Download latest version of **FileZilla** and **libfilezilla** from source with `x.xx.x` is the latest version.
 - [FileZilla_x.xx.x_src.tar.bz2](https://filezilla-project.org/download.php?show_all=1)
 - [libfilezilla-x.xx.x.tar.bz2](https://lib.filezilla-project.org/download.php)

3. Extract files
```shell
$ tar -xvjf libfilezilla-x.xx.x.tar.bz2
$ tar -vxjf FileZilla_x.xx.x_src.tar.bz2
```

4. Build and install
```shell
# libfilezilla
$ cd libfilezilla-x.xx.x/
$ ./configure
$ make
$ sudo make install
```
```shell
# FileZilla
$ cd filezilla-x.xx.x/
$ ./configure
$ make
$ sudo make install
```

Now run FileZilla and it should be the newest version.
