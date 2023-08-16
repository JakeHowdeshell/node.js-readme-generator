// a function that returns a license badge based on which license is passed in and if there is no license, returns an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license === "The MIT License") {
    licenseBadge =
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Mozilla Public License 2.0") {
    licenseBadge =
      "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
  } else if (license === "Open Database License (ODbL)") {
    licenseBadge =
      "![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)";
  } else if (license === "The Perl License") {
    licenseBadge =
      "![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)";
  }
  return licenseBadge;
}

// a function that returns the license link and if there is no license, returns an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "The MIT License") {
    licenseLink = "[MIT License](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla Public License 2.0") {
    licenseLink =
      "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "Open Database License (ODbL)") {
    licenseLink =
      "[Open Database License (ODbL)](https://opendatacommons.org/licenses/odbl/)";
  } else if (license === "The Perl License") {
    licenseLink =
      "[The Perl License](https://opensource.org/licenses/Artistic-2.0)";
  }
  console.log(licenseLink);
  return licenseLink;
}

// exports the functions to the index.js file
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
};
