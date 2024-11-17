<<<<<<< HEAD
// Configure your import map in config/importmap.rb
import "@hotwired/turbo-rails";
import "controllers";
import "channels";
import "flowbite";

import * as ActiveStorage from "@rails/activestorage";
ActiveStorage.start();
import "trix";
import "@rails/actiontext";

Trix.config.blockAttributes.heading2 = {
  tagName: "h2",
  terminal: true,
  breakOnReturn: true,
  group: false,
};

addEventListener("trix-initialize", (event) => {
  const { toolbarElement } = event.target;
  const h1Button = toolbarElement.querySelector(
    "[data-trix-attribute=heading1]",
  );
  h1Button.insertAdjacentHTML(
    "afterend",
    `
<button type="button" class="trix-button trix-button--icon trix-button--icon-heading-2 flex justify-center" data-trix-attribute="heading2" title="Heading 2" tabindex="-1" data-trix-active="">
</button>
`,
  );
});

Trix.config.blockAttributes.heading3 = {
  tagName: "h3",
  terminal: true,
  breakOnReturn: true,
  group: false,
};

addEventListener("trix-initialize", (event) => {
  const { toolbarElement } = event.target;
  const h2Button = toolbarElement.querySelector(
    "[data-trix-attribute=heading2]",
  );
  h2Button.insertAdjacentHTML(
    "afterend",
    `
<button type="button" class="trix-button trix-button--icon trix-button--icon-heading-3 flex justify-center" data-trix-attribute="heading3" title="Heading 3" tabindex="-2" data-trix-active="">
</button>
`,
  );
});
