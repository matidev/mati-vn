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
$ chown -R www-data:www-data /var/www/domain_com
$ find /var/www/domain_com -type f -exec chmod 644 {} \;
$ find /var/www/domain_com -type d -exec chmod 755 {} \;
$ chmod 755 /var/www/domain_com/file
```

## SSH
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

# Delete site
$ sudo certbot delete --cert-name example.com
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