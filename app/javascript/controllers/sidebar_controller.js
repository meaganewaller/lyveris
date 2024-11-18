import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    "sidebar",
    "sidebarBackdrop",
    "toggleSidebarMobile",
    "toggleSidebarMobileHamburger",
    "toggleSidebarMobileClose",
    "toggleSidebarMobileSearch"
  ];

  connect() {
    this.toggleSidebarMobile = this.toggleSidebarMobile.bind(this);
    this.addEventListeners();
  }

  addEventListeners() {
    this.toggleSidebarMobileSearchTarget.addEventListener('click', this.toggleSidebarMobile);
    this.toggleSidebarMobileTarget.addEventListener('click', this.toggleSidebarMobile);
    this.sidebarBackdropTarget.addEventListener('click', this.toggleSidebarMobile);
  }

  toggleSidebarMobile() {
    this.sidebarTarget.classList.toggle('hidden');
    this.sidebarBackdropTarget.classList.toggle('hidden');
    this.toggleSidebarMobileHamburgerTarget.classList.toggle('hidden');
    this.toggleSidebarMobileCloseTarget.classList.toggle('hidden');
  }

  disconnect() {
    this.removeEventListeners();
  }

  removeEventListeners() {
    this.toggleSidebarMobileSearchTarget.removeEventListener('click', this.toggleSidebarMobile);
    this.toggleSidebarMobileTarget.removeEventListener('click', this.toggleSidebarMobile);
    this.sidebarBackdropTarget.removeEventListener('click', this.toggleSidebarMobile);
  }
}

