# Pin npm packages by running ./bin/importmap pin PACKAGE_NAME
# Run ./bin/importmap update to update the pinned packages to the latest
# Run ./bin/importmap help for more commands

pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from 'app/javascript/controllers', under: 'controllers'
pin "@rails/actioncable", to: "actioncable.esm.js"
pin_all_from "app/javascript/channels", under: "channels"
pin "flowbite", to: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.turbo.min.js"
pin "actiontext", to: "actiontext.js"
pin "trix", to: "trix.js"
pin "@rails/activestorage", to: "activestorage.esm.js"
pin "@rails/actiontext", to: "actiontext.esm.js"
pin "@popperjs/core", to: "@popperjs--core.js" # @2.11.8
pin "@rails/ujs", to: "@rails--ujs.js" # @7.1.3
