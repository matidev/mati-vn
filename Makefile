MAKEFLAGS = --silent --ignore-errors --no-print-directory

all: js-update build
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

update:
	bundle update

build:
	bundle exec jekyll serve

js-update:
	wget -O ./assets/js/ics.deps.min.js https://raw.githubusercontent.com/nwcell/ics.js/master/ics.deps.min.js
	wget -O ./assets/js/amlich-aa98.js https://www.informatik.uni-leipzig.de/~duc/amlich/amlich-aa98.js