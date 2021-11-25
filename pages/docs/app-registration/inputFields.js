const inputFields = [
  {
    label: "Name (Required)",
    placeholder_text: "Name (Required)",
    name: "name",
    validationRules: {
      required: true,
      regex: /^[\w\s]{1,48}$/,
    },
  },
  {
    label: "Redirect URL (Required)",
    placeholder_text: "Redirect URL (Required)",
    name: "redirect_uri",
    validationRules: {
      required: true,
      regex: /^[a-z][a-z0-9.+-]*:\/\/[0-9a-zA-Z.-]+[%/w .-]*$/,
    },
  },
  {
    label: "Verification URL",
    placeholder_text: "Verification URL",
    name: "verification_uri",
    validationRules: {
      required: false,
      regex: /^[a-z][a-z0-9.+-]*:\/\/[0-9a-zA-Z.-]+[%/w .-]*$/,
    },
  },
  {
    label: "Homepage URL",
    placeholder_text: "Homepage URL",
    name: "homepage",
    validationRules: {
      required: false,
      regex: /^https?:\/\/[0-9a-zA-Z.-]+[%/w .-]*$/,
    },
  },
  {
    label: "Github URL",
    placeholder_text: "Github URL",
    name: "github",
    validationRules: {
      required: false,
      regex: /^https?:\/\/(www.)?github.com\/S+$/,
    },
  },
  {
    label: "Appstore URL",
    placeholder_text: "Appstore URL",
    name: "appstore",
    validationRules: {
      required: false,
      regex: /^https?:\/\/itunes.apple.com\/S+$/,
    },
  },
  {
    label: "Google Play URL",
    placeholder_text: "Google Play URL",
    name: "googleplay",
    validationRules: {
      required: false,
      regex: /^https?:\/\/play.google.com\/store\/apps\/details?id=[w .]+$/,
    },
  },
  {
    label: "Markup percentage",
    placeholder_text: "Markup percentage",
    name: "app_markup_percentage",
    validationRules: {
      required: false,
      regex: /^[0-5]/,
    },
  },
];

export default inputFields;
