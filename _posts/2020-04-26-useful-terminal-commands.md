---
layout: post
title:  "Useful Terminal Commands"
date:   2021-08-22 02:05:00 +0700
categories: article
author: mati
excerpt_separator: <!--more-->
references:
---
There are some useful Terminal commands that I used for my machines :sunglasses:.
<!--more-->

## Database
```shell
# Backup Database
$ mysqldump -u root -p mydb | gzip > mydb.sql.gz

# Restore Database
$ mysql -u root -p db < backup.sql

# Search and Replace the MySQL Collation
$ sed -i 's/utf8mb4_0900_ai_ci/utf8mb4_unicode_ci/g' db_file

# Create user with native password and grant all privileges
$ CREATE USER 'user_name'@'localhost' IDENTIFIED BY 'Password_here';
$ GRANT ALL PRIVILEGES ON *.* TO 'user_name'@'localhost' WITH GRANT OPTION;
$ FLUSH PRIVILEGES;
```

## Git
```shell
# Clear branches in local
$ git remote prune origin
$ git fetch -p
# or
$ git fetch --all && git fetch --prune

# Remove local branch not in remote
$ git fetch -p && git branch -vv | awk '/: gone]/{print $1}' | xargs git branch -d

# Clear cache in local
$ git rm -r --cached .

# Set authentication cache
$ git config --global credential.helper 'cache --timeout=360000'

# Force update git repository
$ git push -u --force origin master

# Create tag
$ git tag v1.0.0
$ git push orgin --tags

# Change commit author of a single commit
$ git commit --amend --reset-author

# Undo commit not push yet
$ git reset --hard HEAD~1
```

## Clear Bash History
```shell
$ cat /dev/null > ~/.bash_history && history -c && exit
```

## Get Process ID
```shell
$ ps -e | grep -e process_name -e adept | grep -v grep
```

## View LISTEN ports
```shell
$ sudo lsof -i -P -n | grep LISTEN
```

## Change MAC Address
```shell
# Install macchanger
$ sudo apt install net-tools macchanger

# View all MAC addresses of your device
$ ip link show

# Select an interface from list above
$ sudo macchanger -r <interface-name>
```

## Site Permission
```shell
# Create user
$ adduser --system --no-create-home --shell /bin/false --disabled-login user_name
$ usermod -aG www-data user_name

$ chown -R user_name /var/www/domain_com
$ chmod 755 /var/www/domain_com/file

# Change permission to upload directory
$ chmod -R 774 /var/www/domain_com/upload_dir

# Change file permissions rw-r--r--
$ find /var/www/domain_com -type f -exec chmod 644 {} \;

# Change directory permissions rwxr-xr-x
$ find /var/www/domain_com -type d -exec chmod 755 {} \;
```

## Create SSH Key for Server
```shell
$ ssh-keygen -t rsa -f ~/.ssh/domain_com -C username
# Copy the content of domain_com.pub to SSL provider
# Or copy to server by
$ ssh-copy-id -p 22 root@server_ip
```

## SSH Agent
```shell
# Add SSH private key to the ssh-agent
$ ssh-add ~/.ssh/<private_key_file>
```

## Certbot (Let's Encrypt)
```shell
# List all installed certificates
$ sudo certbot certificates

# Add cert
$ sudo certbot --nginx -d mati.vn -d www.mati.vn
$ sudo certbot --apache -d mati.vn -d www.mati.vn

# Certbot is automatically renewing the cert, but you can test by using this command
$ sudo certbot renew --dry-run
# or force renewal
$ sudo certbot renew --force-renewal

# Delete site
$ sudo certbot delete --cert-name example.com

# Apply SSH for wildcard
$ sudo certbot certonly --agree-tos --email mati@example.com --manual --preferred-challenges=dns \
--server https://acme-v02.api.letsencrypt.org/directory -d mati.vn -d *.mati.vn
```

## OpenVPN
```shell
# Server
$ curl -O https://raw.githubusercontent.com/angristan/openvpn-install/master/openvpn-install.sh
$ chmod +x openvpn-install.sh
$ ./openvpn-install.sh
# Create user and download user.ovpn file.

# Client
$ sudo apt install openvpn
$ sudo cp user.ovpn /etc/openvpn/user.conf

# Start OpenVPN
$ sudo systemctl start openvpn@user

# Stop OpenVPN
$ sudo systemctl stop openvpn@user

# Or using on Network Manager
$ sudo apt install network-manager-openvpn-gnome openvpn-systemd-resolved
# - Open Network Manager
# - Click on the VPN + symbol
# - From the Add VPN window, click on the "Import from file…" option
```

## Docker SSH
```shell
$ docker exec -i -t docker-name /bin/bash
```

## Ubuntu KeyServer
```shell
# Refresh all
$ sudo apt-key adv --refresh-keys --keyserver keyserver.ubuntu.com

# Update for single
$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv KEY_CODE
```

## htpasswd
```shell
$ htpasswd -c .htpasswd user_one

# Add more user to .htpasswd
$ htpasswd .htpasswd user_two
```