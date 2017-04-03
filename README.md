# AngularJS_Blog Webserver Guide.

A quickstart to emulating a webserver on your local machine. **This Project is for learning Purpose to create a Simple Blog with the use of 'AngularJs' Technology.** 

# Setup an Environment

## Install Ruby

#### Mac/Linux
##### Note:-If you want to run these commands in Windows then you can Install one of these softwares [git bash](https://git-for-windows.github.io/) | [Bash on Ubuntu on Windows](https://www.howtogeek.com/249966/how-to-install-and-use-the-linux-bash-shell-on-windows-10/))
1. Install [Homebrew](http://brew.sh/) | [Linuxbrew](http://linuxbrew.sh/):
    ```
    $ git clone https://github.com/Homebrew/linuxbrew.git ~/.linuxbrew
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```

2. Install (or upgrade) Ruby:
    ```
    brew install ruby
    ```

#### Windows: [Here](http://rubyinstaller.org/)


## Use Ruby Gems to install Bundler & Rack
1. Install Bundler

    ```
    sudo gem install bundler
    ```


2. Create a `Gemfile` inside your project and put:

    ```
    source 'https://rubygems.org'
    gem 'rack'
    ```

3. Run & Install

    ```
    bundle install
    ```


## Setup Rack for webserver emulation:

1. There is a file called `config.ru` on the same level as your `src` folder. Which is what contains your static files (`js`, `css`, and `images` directory) as well as your `index.html` file.

2. Run `rackup` in Terminal/Command Prompt.

3. Navigate to [http://127.0.0.1:9292/](http://127.0.0.1:9292/) or [http://localhost:9292/](http://localhost:9292/)
