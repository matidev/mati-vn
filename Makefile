MAKEFLAGS = --silent --ignore-errors --no-print-directory

all: proxy-update js-update build
setup: ruby jekyll

ruby:
	sudo apt-get install ruby-full build-essential zlib1g-dev

jekyll:
	gem install jekyll -v 3.9.2
	gem install bundler -v 2.1
	gem install kramdown-parser-gfm -v 1.1.0
	gem install jekyll-feed -v 0.15.1
	gem install jekyll-sitemap -v 1.4.0
	gem install jekyll-seo-tag -v 2.8.0
	gem install jemoji -v 0.12.0

update:
	bundle update

build:
	bundle exec jekyll serve

js-update:
	wget -O ./assets/js/ics.deps.min.js https://raw.githubusercontent.com/nwcell/ics.js/master/ics.deps.min.js
	wget -O ./assets/js/amlich-aa98.js https://www.informatik.uni-leipzig.de/~duc/amlich/amlich-aa98.js

proxy-update:
	sudo apt install python3-pip
	pip3 install numpy
	wget -O ./easylist_pac.py https://raw.githubusercontent.com/essandess/easylist-pac-privoxy/master/easylist_pac.py
	python3 ./easylist_pac.py -d $(shell pwd)
	mv ./proxy.pac ./proxy.js
	rm -f ./easylist_pac.py ./easylist.txt ./easyprivacy.txt ./fanboy*
	grep -v "Created with command" ./proxy.js > ./tmpfile && mv ./tmpfile ./proxy.js