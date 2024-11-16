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
pin "@activeadmin/activeadmin", to: "https://ga.jspm.io/npm:@activeadmin/activeadmin@4.0.0-beta5/dist/active_admin.js"
pin "@popperjs/core", to: "https://ga.jspm.io/npm:@popperjs/core@2.11.8/lib/index.js"
pin "@rails/ujs", to: "https://ga.jspm.io/npm:@rails/ujs@7.1.2/app/assets/javascripts/rails-ujs.esm.js"
pin "uikit", preload: true # @3.21.13
pin "uikit-icons", preload: true # @2.1.0
pin "ionicons", preload: true # @7.4.0
pin "trix" # @2.1.8
pin "@rails/ujs", to: "@rails--ujs.js" # @7.1.3
