MAKEFLAGS = --silent --ignore-errors --no-print-directory

all: start

start:
	bundle install
	gnome-terminal --tab -- bash -c "bundle exec jekyll serve; exec bash"
	google-chrome http://127.0.0.1:4000/
