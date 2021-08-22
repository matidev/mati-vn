---
layout: post
published: false
title:  "How to install php7.2-memcached extension in Ubuntu 20.04"
date:   2020-05-09 02:05:00 +0700
categories: article
author: mati
excerpt_separator: <!--more-->
references:
---
I have to upgrade my machine to Ubuntu 20.04 (with PHP 7.4 as default), but my projects are working with PHP 7.2.
<!--more-->
So I have to downgrade PHP to version 7.2 and install the Memcached extension like the way below.

```shell
# Downgrade PHP 7.4 to 7.2
$ sudo apt install software-properties-common
$ sudo apt-add-repository ppa:ondrej/php
$ sudo apt update
$ sudo apt install -y php7.2 php7.2-cli php7.2-common
$ php -v
$ sudo a2dismod php7.4
$ sudo a2enmod php7.2
$ sudo update-alternatives --set php /usr/bin/php7.2
$ sudo systemctl restart apache2.service
$ php -v # Verify result.

# Install memcached
$ sudo pecl -d php_suffix=7.2 install memcached

# Update your php.ini file then restart apache2
$ sudo nano /etc/php/7.2/apache2/php.ini
$ sudo nano /etc/php/7.2/cli/php.ini
$ sudo systemctl restart apache2.service
```