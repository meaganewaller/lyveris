source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.3.5'

gem 'activeadmin', '4.0.0.beta13'
gem 'aws-sdk-s3', require: false
# gem 'chartkick'
gem 'delayed', github: 'ryanckulp/delayed' # delayed_job_active_record rails 7 fork: https://github.com/betterment/delayed
gem 'devise'
gem 'devise-i18n'
gem 'groupdate' # used by Chartkick
gem 'honeypot-captcha', github: 'founderhacker/honeypot-captcha' # prevent unauthenticated form spam
gem 'httparty'
gem "image_processing", ">= 1.2"
gem 'importmap-rails'
gem 'jbuilder'
gem 'metamagic' # easily insert metatags for SEO / opengraph
gem 'methodz' # query db-backed object methods by partial name or type
gem 'pg'
gem 'postmark-rails'
gem "packwerk", "~> 3.2"
gem 'pretender'
gem 'puma', '~> 6.4'
gem 'rack-cors', :require => 'rack/cors'
gem 'rails', '8.0.0'
gem 'redis'
gem 'rename', '1.1.3', git: 'https://github.com/ryanckulp/rename' # remove this gem after use
gem "flowbite", "~> 2.3"
# gem 'split', require: 'split/dashboard'
gem 'sprockets-rails'
gem 'stripe'
gem 'tailwindcss-rails'
gem 'turbo-rails'
gem 'stimulus-rails'
gem 'kaminari'
gem 'faraday'
gem "ostruct", "~> 0.6.1"
gem "inline_svg"
gem "validate_url", "~> 1.0"


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false

group :development, :test do
  gem 'debug', platforms: %i[mri mingw x64_mingw]
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rubocop', require: false # code styling
  gem 'rubocop-capybara', require: false
  gem 'rubocop-factory_bot', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec', require: false
end

group :development do
  gem 'letter_opener' # view mailers in browser
  gem 'web-console'
  gem 'spring'
  gem 'brakeman'
  gem 'bundler-audit'
  gem 'foreman'
end

group :test do
  gem 'capybara'
  gem 'rspec-rails'
  gem 'selenium-webdriver'
  gem 'shoulda-callback-matchers'
  gem 'shoulda-matchers'
  gem 'simplecov'
  gem 'simplecov-tailwindcss'
  gem 'webmock'
end


gem "acts_as_list", "~> 1.2"
