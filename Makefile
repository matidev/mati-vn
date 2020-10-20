all: build
setup: ruby jekyll

ruby:
	sudo apt-get install ruby-full build-essential zlib1g-dev

jekyll:
	gem install jekyll bundler

update:
	bundle update

build:
	bundle exec jekyll serve