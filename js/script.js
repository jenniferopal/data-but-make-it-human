html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: sans-serif;
  }
  
  body {
    margin: 0;
  }
  
  article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display: block;
  }
  
  audio, canvas, progress, video {
    vertical-align: baseline;
    display: inline-block;
  }
  
  audio:not([controls]) {
    height: 0;
    display: none;
  }
  
  [hidden], template {
    display: none;
  }
  
  a {
    background-color: rgba(0, 0, 0, 0);
  }
  
  a:active, a:hover {
    outline: 0;
  }
  
  abbr[title] {
    border-bottom: 1px dotted;
  }
  
  b, strong {
    font-weight: bold;
  }
  
  dfn {
    font-style: italic;
  }
  
  h1 {
    margin: .67em 0;
    font-size: 2em;
  }
  
  mark {
    color: #000;
    background: #ff0;
  }
  
  small {
    font-size: 80%;
  }
  
  sub, sup {
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
    position: relative;
  }
  
  sup {
    top: -.5em;
  }
  
  sub {
    bottom: -.25em;
  }
  
  img {
    border: 0;
  }
  
  svg:not(:root) {
    overflow: hidden;
  }
  
  figure {
    margin: 1em 40px;
  }
  
  hr {
    box-sizing: content-box;
    height: 0;
  }
  
  pre {
    overflow: auto;
  }
  
  code, kbd, pre, samp {
    font-family: monospace;
    font-size: 1em;
  }
  
  button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }
  
  button {
    overflow: visible;
  }
  
  button, select {
    text-transform: none;
  }
  
  button, html input[type="button"], input[type="reset"] {
    -webkit-appearance: button;
    cursor: pointer;
  }
  
  button[disabled], html input[disabled] {
    cursor: default;
  }
  
  button::-moz-focus-inner, input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  
  input {
    line-height: normal;
  }
  
  input[type="checkbox"], input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  
  input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  input[type="search"] {
    -webkit-appearance: none;
  }
  
  input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em;
  }
  
  legend {
    border: 0;
    padding: 0;
  }
  
  textarea {
    overflow: auto;
  }
  
  optgroup {
    font-weight: bold;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  td, th {
    padding: 0;
  }
  
  @font-face {
    font-family: webflow-icons;
    src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  
  [class^="w-icon-"], [class*=" w-icon-"] {
    speak: none;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-style: normal;
    font-weight: normal;
    line-height: 1;
    font-family: webflow-icons !important;
  }
  
  .w-icon-slider-right:before {
    content: "î˜€";
  }
  
  .w-icon-slider-left:before {
    content: "î˜";
  }
  
  .w-icon-nav-menu:before {
    content: "î˜‚";
  }
  
  .w-icon-arrow-down:before, .w-icon-dropdown-toggle:before {
    content: "î˜ƒ";
  }
  
  .w-icon-file-upload-remove:before {
    content: "î¤€";
  }
  
  .w-icon-file-upload-icon:before {
    content: "î¤ƒ";
  }
  
  * {
    box-sizing: border-box;
  }
  
  html {
    height: 100%;
  }
  
  body {
    min-height: 100%;
    color: #333;
    background-color: #fff;
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
  }
  
  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }
  
  html.w-mod-touch * {
    background-attachment: scroll !important;
  }
  
  .w-block {
    display: block;
  }
  
  .w-inline-block {
    max-width: 100%;
    display: inline-block;
  }
  
  .w-clearfix:before, .w-clearfix:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
  }
  
  .w-clearfix:after {
    clear: both;
  }
  
  .w-hidden {
    display: none;
  }
  
  .w-button {
    color: #fff;
    line-height: inherit;
    cursor: pointer;
    background-color: #3898ec;
    border: 0;
    border-radius: 0;
    padding: 9px 15px;
    text-decoration: none;
    display: inline-block;
  }
  
  input.w-button {
    -webkit-appearance: button;
  }
  
  html[data-w-dynpage] [data-w-cloak] {
    color: rgba(0, 0, 0, 0) !important;
  }
  
  .w-webflow-badge, .w-webflow-badge * {
    z-index: auto;
    visibility: visible;
    box-sizing: border-box;
    width: auto;
    height: auto;
    max-height: none;
    max-width: none;
    min-height: 0;
    min-width: 0;
    float: none;
    clear: none;
    box-shadow: none;
    opacity: 1;
    direction: ltr;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-style: inherit;
    font-variant: inherit;
    text-align: inherit;
    letter-spacing: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
    text-indent: 0;
    text-transform: inherit;
    text-shadow: none;
    font-smoothing: auto;
    vertical-align: baseline;
    cursor: inherit;
    white-space: inherit;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    background: none;
    border: 0 rgba(0, 0, 0, 0);
    border-radius: 0;
    margin: 0;
    padding: 0;
    list-style-type: disc;
    transition: none;
    display: block;
    position: static;
    top: auto;
    bottom: auto;
    left: auto;
    right: auto;
    overflow: visible;
    transform: none;
  }
  
  .w-webflow-badge {
    white-space: nowrap;
    cursor: pointer;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .1);
    visibility: visible !important;
    z-index: 2147483647 !important;
    color: #aaadb0 !important;
    opacity: 1 !important;
    width: auto !important;
    height: auto !important;
    background-color: #fff !important;
    border-radius: 3px !important;
    margin: 0 !important;
    padding: 6px 8px 6px 6px !important;
    font-size: 12px !important;
    line-height: 14px !important;
    text-decoration: none !important;
    display: inline-block !important;
    position: fixed !important;
    top: auto !important;
    bottom: 12px !important;
    left: auto !important;
    right: 12px !important;
    overflow: visible !important;
    transform: none !important;
  }
  
  .w-webflow-badge > img {
    visibility: visible !important;
    opacity: 1 !important;
    vertical-align: middle !important;
    display: inline-block !important;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  h1 {
    margin-top: 20px;
    font-size: 38px;
    line-height: 44px;
  }
  
  h2 {
    margin-top: 20px;
    font-size: 32px;
    line-height: 36px;
  }
  
  h3 {
    margin-top: 20px;
    font-size: 24px;
    line-height: 30px;
  }
  
  h4 {
    margin-top: 10px;
    font-size: 18px;
    line-height: 24px;
  }
  
  h5 {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
  }
  
  h6 {
    margin-top: 10px;
    font-size: 12px;
    line-height: 18px;
  }
  
  p {
    margin-top: 0;
    margin-bottom: 10px;
  }
  
  blockquote {
    border-left: 5px solid #e2e2e2;
    margin: 0 0 10px;
    padding: 10px 20px;
    font-size: 18px;
    line-height: 22px;
  }
  
  figure {
    margin: 0 0 10px;
  }
  
  figcaption {
    text-align: center;
    margin-top: 5px;
  }
  
  ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
    padding-left: 40px;
  }
  
  .w-list-unstyled {
    padding-left: 0;
    list-style: none;
  }
  
  .w-embed:before, .w-embed:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
  }
  
  .w-embed:after {
    clear: both;
  }
  
  .w-video {
    width: 100%;
    padding: 0;
    position: relative;
  }
  
  .w-video iframe, .w-video object, .w-video embed {
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }
  
  button, [type="button"], [type="reset"] {
    cursor: pointer;
    -webkit-appearance: button;
    border: 0;
  }
  
  .w-form {
    margin: 0 0 15px;
  }
  
  .w-form-done {
    text-align: center;
    background-color: #ddd;
    padding: 20px;
    display: none;
  }
  
  .w-form-fail {
    background-color: #ffdede;
    margin-top: 10px;
    padding: 10px;
    display: none;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
    display: block;
  }
  
  .w-input, .w-select {
    width: 100%;
    height: 38px;
    color: #333;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1.42857;
    display: block;
  }
  
  .w-input:-moz-placeholder, .w-select:-moz-placeholder {
    color: #999;
  }
  
  .w-input::-moz-placeholder, .w-select::-moz-placeholder {
    color: #999;
    opacity: 1;
  }
  
  .w-input::-webkit-input-placeholder, .w-select::-webkit-input-placeholder {
    color: #999;
  }
  
  .w-input:focus, .w-select:focus {
    border-color: #3898ec;
    outline: 0;
  }
  
  .w-input[disabled], .w-select[disabled], .w-input[readonly], .w-select[readonly], fieldset[disabled] .w-input, fieldset[disabled] .w-select {
    cursor: not-allowed;
  }
  
  .w-input[disabled]:not(.w-input-disabled), .w-select[disabled]:not(.w-input-disabled), .w-input[readonly], .w-select[readonly], fieldset[disabled]:not(.w-input-disabled) .w-input, fieldset[disabled]:not(.w-input-disabled) .w-select {
    background-color: #eee;
  }
  
  textarea.w-input, textarea.w-select {
    height: auto;
  }
  
  .w-select {
    background-color: #f3f3f3;
  }
  
  .w-select[multiple] {
    height: auto;
  }
  
  .w-form-label {
    cursor: pointer;
    margin-bottom: 0;
    font-weight: normal;
    display: inline-block;
  }
  
  .w-radio {
    margin-bottom: 5px;
    padding-left: 20px;
    display: block;
  }
  
  .w-radio:before, .w-radio:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
  }
  
  .w-radio:after {
    clear: both;
  }
  
  .w-radio-input {
    float: left;
    margin: 3px 0 0 -20px;
    line-height: normal;
  }
  
  .w-file-upload {
    margin-bottom: 10px;
    display: block;
  }
  
  .w-file-upload-input {
    width: .1px;
    height: .1px;
    opacity: 0;
    z-index: -100;
    position: absolute;
    overflow: hidden;
  }
  
  .w-file-upload-default, .w-file-upload-uploading, .w-file-upload-success {
    color: #333;
    display: inline-block;
  }
  
  .w-file-upload-error {
    margin-top: 10px;
    display: block;
  }
  
  .w-file-upload-default.w-hidden, .w-file-upload-uploading.w-hidden, .w-file-upload-error.w-hidden, .w-file-upload-success.w-hidden {
    display: none;
  }
  
  .w-file-upload-uploading-btn {
    cursor: pointer;
    background-color: #fafafa;
    border: 1px solid #ccc;
    margin: 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: normal;
    display: flex;
  }
  
  .w-file-upload-file {
    background-color: #fafafa;
    border: 1px solid #ccc;
    flex-grow: 1;
    justify-content: space-between;
    margin: 0;
    padding: 8px 9px 8px 11px;
    display: flex;
  }
  
  .w-file-upload-file-name {
    font-size: 14px;
    font-weight: normal;
    display: block;
  }
  
  .w-file-remove-link {
    width: auto;
    height: auto;
    cursor: pointer;
    margin-top: 3px;
    margin-left: 10px;
    padding: 3px;
    display: block;
  }
  
  .w-icon-file-upload-remove {
    margin: auto;
    font-size: 10px;
  }
  
  .w-file-upload-error-msg {
    color: #ea384c;
    padding: 2px 0;
    display: inline-block;
  }
  
  .w-file-upload-info {
    padding: 0 12px;
    line-height: 38px;
    display: inline-block;
  }
  
  .w-file-upload-label {
    cursor: pointer;
    background-color: #fafafa;
    border: 1px solid #ccc;
    margin: 0;
    padding: 8px 12px;
    font-size: 14px;
    font-weight: normal;
    display: inline-block;
  }
  
  .w-icon-file-upload-icon, .w-icon-file-upload-uploading {
    width: 20px;
    margin-right: 8px;
    display: inline-block;
  }
  
  .w-icon-file-upload-uploading {
    height: 20px;
  }
  
  .w-container {
    max-width: 940px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .w-container:before, .w-container:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
  }
  
  .w-container:after {
    clear: both;
  }
  
  .w-container .w-row {
    margin-left: -10px;
    margin-right: -10px;
  }
  
  .w-row:before, .w-row:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
  }
  
  .w-row:after {
    clear: both;
  }
  
  .w-row .w-row {
    margin-left: 0;
    margin-right: 0;
  }
  
  .w-col {
    float: left;
    width: 100%;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
  }
  
  .w-col .w-col {
    padding-left: 0;
    padding-right: 0;
  }
  
  .w-col-1 {
    width: 8.33333%;
  }
  
  .w-col-2 {
    width: 16.6667%;
  }
  
  .w-col-3 {
    width: 25%;
  }
  
  .w-col-4 {
    width: 33.3333%;
  }
  
  .w-col-5 {
    width: 41.6667%;
  }
  
  .w-col-6 {
    width: 50%;
  }
  
  .w-col-7 {
    width: 58.3333%;
  }
  
  .w-col-8 {
    width: 66.6667%;
  }
  
  .w-col-9 {
    width: 75%;
  }
  
  .w-col-10 {
    width: 83.3333%;
  }
  
  .w-col-11 {
    width: 91.6667%;
  }
  
  .w-col-12 {
    width: 100%;
  }
  
  .w-hidden-main {
    display: none !important;
  }
  
  @media screen and (max-width: 991px) {
    .w-container {
      max-width: 728px;
    }
  
    .w-hidden-main {
      display: inherit !important;
    }
  
    .w-hidden-medium {
      display: none !important;
    }
  
    .w-col-medium-1 {
      width: 8.33333%;
    }
  
    .w-col-medium-2 {
      width: 16.6667%;
    }
  
    .w-col-medium-3 {
      width: 25%;
    }
  
    .w-col-medium-4 {
      width: 33.3333%;
    }
  
    .w-col-medium-5 {
      width: 41.6667%;
    }
  
    .w-col-medium-6 {
      width: 50%;
    }
  
    .w-col-medium-7 {
      width: 58.3333%;
    }
  
    .w-col-medium-8 {
      width: 66.6667%;
    }
  
    .w-col-medium-9 {
      width: 75%;
    }
  
    .w-col-medium-10 {
      width: 83.3333%;
    }
  
    .w-col-medium-11 {
      width: 91.6667%;
    }
  
    .w-col-medium-12 {
      width: 100%;
    }
  
    .w-col-stack {
      width: 100%;
      left: auto;
      right: auto;
    }
  }
  
  @media screen and (max-width: 767px) {
    .w-hidden-main, .w-hidden-medium {
      display: inherit !important;
    }
  
    .w-hidden-small {
      display: none !important;
    }
  
    .w-row, .w-container .w-row {
      margin-left: 0;
      margin-right: 0;
    }
  
    .w-col {
      width: 100%;
      left: auto;
      right: auto;
    }
  
    .w-col-small-1 {
      width: 8.33333%;
    }
  
    .w-col-small-2 {
      width: 16.6667%;
    }
  
    .w-col-small-3 {
      width: 25%;
    }
  
    .w-col-small-4 {
      width: 33.3333%;
    }
  
    .w-col-small-5 {
      width: 41.6667%;
    }
  
    .w-col-small-6 {
      width: 50%;
    }
  
    .w-col-small-7 {
      width: 58.3333%;
    }
  
    .w-col-small-8 {
      width: 66.6667%;
    }
  
    .w-col-small-9 {
      width: 75%;
    }
  
    .w-col-small-10 {
      width: 83.3333%;
    }
  
    .w-col-small-11 {
      width: 91.6667%;
    }
  
    .w-col-small-12 {
      width: 100%;
    }
  }
  
  @media screen and (max-width: 479px) {
    .w-container {
      max-width: none;
    }
  
    .w-hidden-main, .w-hidden-medium, .w-hidden-small {
      display: inherit !important;
    }
  
    .w-hidden-tiny {
      display: none !important;
    }
  
    .w-col {
      width: 100%;
    }
  
    .w-col-tiny-1 {
      width: 8.33333%;
    }
  
    .w-col-tiny-2 {
      width: 16.6667%;
    }
  
    .w-col-tiny-3 {
      width: 25%;
    }
  
    .w-col-tiny-4 {
      width: 33.3333%;
    }
  
    .w-col-tiny-5 {
      width: 41.6667%;
    }
  
    .w-col-tiny-6 {
      width: 50%;
    }
  
    .w-col-tiny-7 {
      width: 58.3333%;
    }
  
    .w-col-tiny-8 {
      width: 66.6667%;
    }
  
    .w-col-tiny-9 {
      width: 75%;
    }
  
    .w-col-tiny-10 {
      width: 83.3333%;
    }
  
    .w-col-tiny-11 {
      width: 91.6667%;
    }
  
    .w-col-tiny-12 {
      width: 100%;
    }
  }
  
  .w-widget {
    position: relative;
  }
  
  .w-widget-map {
    width: 100%;
    height: 400px;
  }
  
  .w-widget-map label {
    width: auto;
    display: inline;
  }
  
  .w-widget-map img {
    max-width: inherit;
  }
  
  .w-widget-map .gm-style-iw {
    text-align: center;
  }
  
  .w-widget-map .gm-style-iw > button {
    display: none !important;
  }
  
  .w-widget-twitter {
    overflow: hidden;
  }
  
  .w-widget-twitter-count-shim {
    vertical-align: top;
    width: 28px;
    height: 20px;
    text-align: center;
    background: #fff;
    border: 1px solid #758696;
    border-radius: 3px;
    display: inline-block;
    position: relative;
  }
  
  .w-widget-twitter-count-shim * {
    pointer-events: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .w-widget-twitter-count-shim .w-widget-twitter-count-inner {
    text-align: center;
    color: #999;
    font-family: serif;
    font-size: 15px;
    line-height: 12px;
    position: relative;
  }
  
  .w-widget-twitter-count-shim .w-widget-twitter-count-clear {
    display: block;
    position: relative;
  }
  
  .w-widget-twitter-count-shim.w--large {
    width: 36px;
    height: 28px;
  }
  
  .w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
    font-size: 18px;
    line-height: 18px;
  }
  
  .w-widget-twitter-count-shim:not(.w--vertical) {
    margin-left: 5px;
    margin-right: 8px;
  }
  
  .w-widget-twitter-count-shim:not(.w--vertical).w--large {
    margin-left: 6px;
  }
  
  .w-widget-twitter-count-shim:not(.w--vertical):before, .w-widget-twitter-count-shim:not(.w--vertical):after {
    content: " ";
    height: 0;
    width: 0;
    pointer-events: none;
    border: solid rgba(0, 0, 0, 0);
    position: absolute;
    top: 50%;
    left: 0;
  }
  
  .w-widget-twitter-count-shim:not(.w--vertical):before {
    border-width: 4px;
    border-color: rgba(117, 134, 150, 0) #5d6c7b rgba(117, 134, 150, 0) rgba(117, 134, 150, 0);
    margin-top: -4px;
    margin-left: -9px;
  }
  
  .w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
    border-width: 5px;
    margin-top: -5px;
    margin-left: -10px;
  }
  
  .w-widget-twitter-count-shim:not(.w--vertical):after {
    border-width: 4px;
    border-color: rgba(255, 255, 255, 0) #fff rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    margin-top: -4px;
    margin-left: -8px;
  }
  
  .w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
    border-width: 5px;
    margin-top: -5px;
    margin-left: -9px;
  }
  
  .w-widget-twitter-count-shim.w--vertical {
    width: 61px;
    height: 33px;
    margin-bottom: 8px;
  }
  
  .w-widget-twitter-count-shim.w--vertical:before, .w-widget-twitter-count-shim.w--vertical:after {
    content: " ";
    height: 0;
    width: 0;
    pointer-events: none;
    border: solid rgba(0, 0, 0, 0);
    position: absolute;
    top: 100%;
    left: 50%;
  }
  
  .w-widget-twitter-count-shim.w--vertical:before {
    border-width: 5px;
    border-color: #5d6c7b rgba(117, 134, 150, 0) rgba(117, 134, 150, 0);
    margin-left: -5px;
  }
  
  .w-widget-twitter-count-shim.w--vertical:after {
    border-width: 4px;
    border-color: #fff rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
    margin-left: -4px;
  }
  
  .w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
    font-size: 18px;
    line-height: 22px;
  }
  
  .w-widget-twitter-count-shim.w--vertical.w--large {
    width: 76px;
  }
  
  .w-background-video {
    height: 500px;
    color: #fff;
    position: relative;
    overflow: hidden;
  }
  
  .w-background-video > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -100;
    background-position: 50%;
    background-size: cover;
    margin: auto;
    position: absolute;
    top: -100%;
    bottom: -100%;
    left: -100%;
    right: -100%;
  }
  
  .w-background-video > video::-webkit-media-controls-start-playback-button {
    -webkit-appearance: none;
    display: none !important;
  }
  
  .w-background-video--control {
    background-color: rgba(0, 0, 0, 0);
    padding: 0;
    position: absolute;
    bottom: 1em;
    right: 1em;
  }
  
  .w-background-video--control > [hidden] {
    display: none !important;
  }
  
  .w-slider {
    height: 300px;
    text-align: center;
    clear: both;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    tap-highlight-color: rgba(0, 0, 0, 0);
    background: #ddd;
    position: relative;
  }
  
  .w-slider-mask {
    z-index: 1;
    height: 100%;
    white-space: nowrap;
    display: block;
    position: relative;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  
  .w-slide {
    vertical-align: top;
    width: 100%;
    height: 100%;
    white-space: normal;
    text-align: left;
    display: inline-block;
    position: relative;
  }
  
  .w-slider-nav {
    z-index: 2;
    height: 40px;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    tap-highlight-color: rgba(0, 0, 0, 0);
    margin: auto;
    padding-top: 10px;
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .w-slider-nav.w-round > div {
    border-radius: 100%;
  }
  
  .w-slider-nav.w-num > div {
    width: auto;
    height: auto;
    font-size: inherit;
    line-height: inherit;
    padding: .2em .5em;
  }
  
  .w-slider-nav.w-shadow > div {
    box-shadow: 0 0 3px rgba(51, 51, 51, .4);
  }
  
  .w-slider-nav-invert {
    color: #fff;
  }
  
  .w-slider-nav-invert > div {
    background-color: rgba(34, 34, 34, .4);
  }
  
  .w-slider-nav-invert > div.w-active {
    background-color: #222;
  }
  
  .w-slider-dot {
    width: 1em;
    height: 1em;
    cursor: pointer;
    background-color: rgba(255, 255, 255, .4);
    margin: 0 3px .5em;
    transition: background-color .1s, color .1s;
    display: inline-block;
    position: relative;
  }
  
  .w-slider-dot.w-active {
    background-color: #fff;
  }
  
  .w-slider-dot:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff;
  }
  
  .w-slider-dot:focus.w-active {
    box-shadow: none;
  }
  
  .w-slider-arrow-left, .w-slider-arrow-right {
    width: 80px;
    cursor: pointer;
    color: #fff;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: auto;
    font-size: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  
  .w-slider-arrow-left [class^="w-icon-"], .w-slider-arrow-right [class^="w-icon-"], .w-slider-arrow-left [class*=" w-icon-"], .w-slider-arrow-right [class*=" w-icon-"] {
    position: absolute;
  }
  
  .w-slider-arrow-left:focus, .w-slider-arrow-right:focus {
    outline: 0;
  }
  
  .w-slider-arrow-left {
    z-index: 3;
    right: auto;
  }
  
  .w-slider-arrow-right {
    z-index: 4;
    left: auto;
  }
  
  .w-icon-slider-left, .w-icon-slider-right {
    width: 1em;
    height: 1em;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .w-slider-aria-label {
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    border: 0;
    margin: -1px;
    padding: 0;
    position: absolute;
    overflow: hidden;
  }
  
  .w-slider-force-show {
    display: block !important;
  }
  
  .w-dropdown {
    text-align: left;
    z-index: 900;
    margin-left: auto;
    margin-right: auto;
    display: inline-block;
    position: relative;
  }
  
  .w-dropdown-btn, .w-dropdown-toggle, .w-dropdown-link {
    vertical-align: top;
    color: #222;
    text-align: left;
    white-space: nowrap;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-decoration: none;
    position: relative;
  }
  
  .w-dropdown-toggle {
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    padding-right: 40px;
    display: inline-block;
  }
  
  .w-dropdown-toggle:focus {
    outline: 0;
  }
  
  .w-icon-dropdown-toggle {
    width: 1em;
    height: 1em;
    margin: auto 20px auto auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
  
  .w-dropdown-list {
    min-width: 100%;
    background: #ddd;
    display: none;
    position: absolute;
  }
  
  .w-dropdown-list.w--open {
    display: block;
  }
  
  .w-dropdown-link {
    color: #222;
    padding: 10px 20px;
    display: block;
  }
  
  .w-dropdown-link.w--current {
    color: #0082f3;
  }
  
  .w-dropdown-link:focus {
    outline: 0;
  }
  
  @media screen and (max-width: 767px) {
    .w-nav-brand {
      padding-left: 10px;
    }
  }
  
  .w-lightbox-backdrop {
    cursor: auto;
    letter-spacing: normal;
    text-indent: 0;
    text-shadow: none;
    text-transform: none;
    visibility: visible;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    color: #fff;
    text-align: center;
    z-index: 2000;
    opacity: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -webkit-tap-highlight-color: transparent;
    background: rgba(0, 0, 0, .9);
    outline: 0;
    font-family: Helvetica Neue, Helvetica, Ubuntu, Segoe UI, Verdana, sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.2;
    list-style: disc;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    -webkit-transform: translate(0);
  }
  
  .w-lightbox-backdrop, .w-lightbox-container {
    height: 100%;
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }
  
  .w-lightbox-content {
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
  
  .w-lightbox-view {
    width: 100vw;
    height: 100vh;
    opacity: 0;
    position: absolute;
  }
  
  .w-lightbox-view:before {
    content: "";
    height: 100vh;
  }
  
  .w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {
    height: 86vh;
  }
  
  .w-lightbox-frame, .w-lightbox-view:before {
    vertical-align: middle;
    display: inline-block;
  }
  
  .w-lightbox-figure {
    margin: 0;
    position: relative;
  }
  
  .w-lightbox-group .w-lightbox-figure {
    cursor: pointer;
  }
  
  .w-lightbox-img {
    width: auto;
    height: auto;
    max-width: none;
  }
  
  .w-lightbox-image {
    float: none;
    max-width: 100vw;
    max-height: 100vh;
    display: block;
  }
  
  .w-lightbox-group .w-lightbox-image {
    max-height: 86vh;
  }
  
  .w-lightbox-caption {
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    background: rgba(0, 0, 0, .4);
    padding: .5em 1em;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  
  .w-lightbox-embed {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .w-lightbox-control {
    width: 4em;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 24px;
    transition: all .3s;
    position: absolute;
    top: 0;
  }
  
  .w-lightbox-left {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==");
    display: none;
    bottom: 0;
    left: 0;
  }
  
  .w-lightbox-right {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+");
    display: none;
    bottom: 0;
    right: 0;
  }
  
  .w-lightbox-close {
    height: 2.6em;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
    background-size: 18px;
    right: 0;
  }
  
  .w-lightbox-strip {
    white-space: nowrap;
    padding: 0 1vh;
    line-height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: auto;
    overflow-y: hidden;
  }
  
  .w-lightbox-item {
    width: 10vh;
    box-sizing: content-box;
    cursor: pointer;
    padding: 2vh 1vh;
    display: inline-block;
    -webkit-transform: translate3d(0, 0, 0);
  }
  
  .w-lightbox-active {
    opacity: .3;
  }
  
  .w-lightbox-thumbnail {
    height: 10vh;
    background: #222;
    position: relative;
    overflow: hidden;
  }
  
  .w-lightbox-thumbnail-image {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .w-lightbox-thumbnail .w-lightbox-tall {
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
  }
  
  .w-lightbox-thumbnail .w-lightbox-wide {
    height: 100%;
    left: 50%;
    transform: translate(-50%);
  }
  
  .w-lightbox-spinner {
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 5px solid rgba(0, 0, 0, .4);
    border-radius: 50%;
    margin-top: -20px;
    margin-left: -20px;
    animation: .8s linear infinite spin;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  
  .w-lightbox-spinner:after {
    content: "";
    border: 3px solid rgba(0, 0, 0, 0);
    border-bottom-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
  }
  
  .w-lightbox-hide {
    display: none;
  }
  
  .w-lightbox-noscroll {
    overflow: hidden;
  }
  
  @media (min-width: 768px) {
    .w-lightbox-content {
      height: 96vh;
      margin-top: 2vh;
    }
  
    .w-lightbox-view, .w-lightbox-view:before {
      height: 96vh;
    }
  
    .w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {
      height: 84vh;
    }
  
    .w-lightbox-image {
      max-width: 96vw;
      max-height: 96vh;
    }
  
    .w-lightbox-group .w-lightbox-image {
      max-width: 82.3vw;
      max-height: 84vh;
    }
  
    .w-lightbox-left, .w-lightbox-right {
      opacity: .5;
      display: block;
    }
  
    .w-lightbox-close {
      opacity: .8;
    }
  
    .w-lightbox-control:hover {
      opacity: 1;
    }
  }
  
  .w-lightbox-inactive, .w-lightbox-inactive:hover {
    opacity: 0;
  }
  
  .w-richtext:before, .w-richtext:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
  }
  
  .w-richtext:after {
    clear: both;
  }
  
  .w-richtext[contenteditable="true"]:before, .w-richtext[contenteditable="true"]:after {
    white-space: initial;
  }
  
  .w-richtext ol, .w-richtext ul {
    overflow: hidden;
  }
  
  .w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after, .w-richtext .w-richtext-figure-selected[data-rt-type="video"] div:after, .w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div, .w-richtext .w-richtext-figure-selected[data-rt-type="image"] div {
    outline: 2px solid #2895f7;
  }
  
  .w-richtext figure.w-richtext-figure-type-video > div:after, .w-richtext figure[data-rt-type="video"] > div:after {
    content: "";
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .w-richtext figure {
    max-width: 60%;
    position: relative;
  }
  
  .w-richtext figure > div:before {
    cursor: default !important;
  }
  
  .w-richtext figure img {
    width: 100%;
  }
  
  .w-richtext figure figcaption.w-richtext-figcaption-placeholder {
    opacity: .6;
  }
  
  .w-richtext figure div {
    color: rgba(0, 0, 0, 0);
    font-size: 0;
  }
  
  .w-richtext figure.w-richtext-figure-type-image, .w-richtext figure[data-rt-type="image"] {
    display: table;
  }
  
  .w-richtext figure.w-richtext-figure-type-image > div, .w-richtext figure[data-rt-type="image"] > div {
    display: inline-block;
  }
  
  .w-richtext figure.w-richtext-figure-type-image > figcaption, .w-richtext figure[data-rt-type="image"] > figcaption {
    caption-side: bottom;
    display: table-caption;
  }
  
  .w-richtext figure.w-richtext-figure-type-video, .w-richtext figure[data-rt-type="video"] {
    width: 60%;
    height: 0;
  }
  
  .w-richtext figure.w-richtext-figure-type-video iframe, .w-richtext figure[data-rt-type="video"] iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .w-richtext figure.w-richtext-figure-type-video > div, .w-richtext figure[data-rt-type="video"] > div {
    width: 100%;
  }
  
  .w-richtext figure.w-richtext-align-center {
    clear: both;
    margin-left: auto;
    margin-right: auto;
  }
  
  .w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image > div, .w-richtext figure.w-richtext-align-center[data-rt-type="image"] > div {
    max-width: 100%;
  }
  
  .w-richtext figure.w-richtext-align-normal {
    clear: both;
  }
  
  .w-richtext figure.w-richtext-align-fullwidth {
    width: 100%;
    max-width: 100%;
    text-align: center;
    clear: both;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  
  .w-richtext figure.w-richtext-align-fullwidth > div {
    padding-bottom: inherit;
    display: inline-block;
  }
  
  .w-richtext figure.w-richtext-align-fullwidth > figcaption {
    display: block;
  }
  
  .w-richtext figure.w-richtext-align-floatleft {
    float: left;
    clear: none;
    margin-right: 15px;
  }
  
  .w-richtext figure.w-richtext-align-floatright {
    float: right;
    clear: none;
    margin-left: 15px;
  }
  
  .w-nav {
    z-index: 1000;
    background: #ddd;
    position: relative;
  }
  
  .w-nav:before, .w-nav:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
  }
  
  .w-nav:after {
    clear: both;
  }
  
  .w-nav-brand {
    float: left;
    color: #333;
    text-decoration: none;
    position: relative;
  }
  
  .w-nav-link {
    vertical-align: top;
    color: #222;
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    text-decoration: none;
    display: inline-block;
    position: relative;
  }
  
  .w-nav-link.w--current {
    color: #0082f3;
  }
  
  .w-nav-menu {
    float: right;
    position: relative;
  }
  
  [data-nav-menu-open] {
    text-align: center;
    min-width: 200px;
    background: #c8c8c8;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    overflow: visible;
    display: block !important;
  }
  
  .w--nav-link-open {
    display: block;
    position: relative;
  }
  
  .w-nav-overlay {
    width: 100%;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  
  .w-nav-overlay [data-nav-menu-open] {
    top: 0;
  }
  
  .w-nav[data-animation="over-left"] .w-nav-overlay {
    width: auto;
  }
  
  .w-nav[data-animation="over-left"] .w-nav-overlay, .w-nav[data-animation="over-left"] [data-nav-menu-open] {
    z-index: 1;
    top: 0;
    right: auto;
  }
  
  .w-nav[data-animation="over-right"] .w-nav-overlay {
    width: auto;
  }
  
  .w-nav[data-animation="over-right"] .w-nav-overlay, .w-nav[data-animation="over-right"] [data-nav-menu-open] {
    z-index: 1;
    top: 0;
    left: auto;
  }
  
  .w-nav-button {
    float: right;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 18px;
    font-size: 24px;
    display: none;
    position: relative;
  }
  
  .w-nav-button:focus {
    outline: 0;
  }
  
  .w-nav-button.w--open {
    color: #fff;
    background-color: #c8c8c8;
  }
  
  .w-nav[data-collapse="all"] .w-nav-menu {
    display: none;
  }
  
  .w-nav[data-collapse="all"] .w-nav-button, .w--nav-dropdown-open, .w--nav-dropdown-toggle-open {
    display: block;
  }
  
  .w--nav-dropdown-list-open {
    position: static;
  }
  
  @media screen and (max-width: 991px) {
    .w-nav[data-collapse="medium"] .w-nav-menu {
      display: none;
    }
  
    .w-nav[data-collapse="medium"] .w-nav-button {
      display: block;
    }
  }
  
  @media screen and (max-width: 767px) {
    .w-nav[data-collapse="small"] .w-nav-menu {
      display: none;
    }
  
    .w-nav[data-collapse="small"] .w-nav-button {
      display: block;
    }
  
    .w-nav-brand {
      padding-left: 10px;
    }
  }
  
  @media screen and (max-width: 479px) {
    .w-nav[data-collapse="tiny"] .w-nav-menu {
      display: none;
    }
  
    .w-nav[data-collapse="tiny"] .w-nav-button {
      display: block;
    }
  }
  
  .w-tabs {
    position: relative;
  }
  
  .w-tabs:before, .w-tabs:after {
    content: " ";
    grid-area: 1 / 1 / 2 / 2;
    display: table;
  }
  
  .w-tabs:after {
    clear: both;
  }
  
  .w-tab-menu {
    position: relative;
  }
  
  .w-tab-link {
    vertical-align: top;
    text-align: left;
    cursor: pointer;
    color: #222;
    background-color: #ddd;
    padding: 9px 30px;
    text-decoration: none;
    display: inline-block;
    position: relative;
  }
  
  .w-tab-link.w--current {
    background-color: #c8c8c8;
  }
  
  .w-tab-link:focus {
    outline: 0;
  }
  
  .w-tab-content {
    display: block;
    position: relative;
    overflow: hidden;
  }
  
  .w-tab-pane {
    display: none;
    position: relative;
  }
  
  .w--tab-active {
    display: block;
  }
  
  @media screen and (max-width: 479px) {
    .w-tab-link {
      display: block;
    }
  }
  
  .w-ix-emptyfix:after {
    content: "";
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  
  .w-dyn-empty {
    background-color: #ddd;
    padding: 10px;
  }
  
  .w-dyn-hide, .w-dyn-bind-empty, .w-condition-invisible {
    display: none !important;
  }
  
  .wf-layout-layout {
    display: grid;
  }
  
  :root {
    --white: white;
    --black: #1f1f1f;
    --chocolate: #ca5310;
    --cornflower-blue: #7796cb;
    --gainsboro: #e1e1e1;
    --black-2: rgba(31, 31, 31, .7);
  }
  
  body {
    background-color: var(--white);
    color: var(--black);
    font-family: Inter, sans-serif;
    font-size: 1.125vw;
    line-height: 1.6;
  }
  
  h1 {
    color: var(--black);
    margin-top: 1vw;
    margin-bottom: 1.5vw;
    font-family: Newsreader Display, sans-serif;
    font-size: 38px;
    font-style: italic;
    font-weight: 400;
    line-height: 1;
  }
  
  h2 {
    margin-top: 1vw;
    margin-bottom: 0;
    font-family: Newsreader Display, sans-serif;
    font-size: 32px;
    font-style: italic;
    font-weight: 400;
    line-height: 1;
  }
  
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
  }
  
  h4 {
    color: var(--black);
    margin-top: 1vw;
    margin-bottom: 1vw;
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
  }
  
  p {
    letter-spacing: -.01vw;
    margin-bottom: 20px;
  }
  
  a {
    color: var(--black);
    text-decoration: none;
  }
  
  ul, ol {
    margin-top: 0;
    margin-bottom: 20px;
    padding-left: 20px;
  }
  
  label {
    margin-bottom: 10px;
    font-weight: 400;
    display: block;
  }
  
  strong {
    font-weight: 600;
  }
  
  blockquote {
    text-align: left;
    border-left: 2px solid #000;
    margin-bottom: 20px;
    padding: 0 0 0 2.5vw;
    font-family: Newsreader Display, sans-serif;
    font-size: 1.75vw;
    font-style: italic;
    line-height: 1.4;
  }
  
  .section {
    background-color: #000;
    padding: 7vw 8.5vw;
    position: relative;
  }
  
  .section.no-padding {
    padding: 0;
  }
  
  .section._4vw-padding {
    padding: 4vw;
  }
  
  .section.no-lateral-padding {
    padding-left: 0;
    padding-right: 0;
  }
  
  .section._2-5vw-lateral-padding {
    padding-left: 2.5vw;
    padding-right: 2.5vw;
  }
  
  .section.black {
    background-color: #000;
  }
  
  .section.black.testimonials {
    padding-top: 12vw;
    padding-bottom: 12vw;
  }
  
  .section._100vh.old-lace {
    background-color: #f5ebdc;
  }
  
  .section._11vw-top-margin {
    padding-top: 18vw;
  }
  
  .section.no-top-padding {
    padding-top: 0;
  }
  
  .section.author {
    height: 100vh;
    background-color: var(--black);
    color: var(--white);
    justify-content: center;
    align-items: center;
    display: flex;
  }
  
  ._3-columns-grid {
    grid-column-gap: 4vw;
    grid-row-gap: 4vw;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    align-items: start;
    display: grid;
  }
  
  .blog-post {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid;
  }
  
  .blog-post._20vw-margin {
    margin-top: -20vw;
  }
  
  .blog-post.white {
    color: var(--white);
  }
  
  .blog-post.white._30-75vw-width {
    width: 30.75vw;
  }
  
  .blog-post.one-row {
    grid-template-rows: auto;
  }
  
  .blog-post._4vw-margin {
    margin-bottom: 4vw;
  }
  
  .overflow-hidden {
    position: relative;
    overflow: hidden;
  }
  
  .overflow-hidden._20vw-top-margin {
    margin-top: 20vw;
  }
  
  ._100-width {
    width: 100%;
  }
  
  ._100-width._110-height {
    height: 110%;
    object-fit: cover;
  }
  
  ._100-width._50vh {
    height: 50vh;
    object-fit: cover;
  }
  
  ._100-width._100-height.cover {
    object-fit: cover;
  }
  
  ._100-width._7-5vw-margin {
    z-index: 1;
    margin-top: -7.5vw;
    position: relative;
  }
  
  ._100-width._1z-index {
    z-index: 1;
    position: relative;
  }
  
  ._100-width.relative {
    z-index: 1;
  }
  
  ._100-width._20px-margin {
    margin-bottom: 20px;
  }
  
  ._100-width.negative-top-margin {
    margin-top: -5vw;
  }
  
  ._100-width._5vw-top-margin {
    margin-top: 5vw;
  }
  
  ._100-width.cover {
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }
  
  ._100-width._100-height {
    height: 100%;
    object-fit: cover;
  }
  
  ._100-width._12vw-margin {
    z-index: 1;
    margin-top: -12vw;
    position: relative;
  }
  
  .text-wrap.center {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  
  .text-wrap.center.max-width {
    max-width: 60vw;
    margin-left: auto;
    margin-right: auto;
  }
  
  .text-wrap.align-left {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  
  .text-wrap.absolute {
    z-index: 3;
    width: 35vw;
    position: absolute;
    top: 7vw;
    left: 8.5vw;
  }
  
  .text-wrap.absolute.first {
    top: 10vw;
  }
  
  .text-wrap._100-height.space-between {
    flex-direction: column;
    justify-content: space-between;
    display: flex;
  }
  
  .text-wrap.white-background {
    max-width: 30vw;
    background-color: var(--white);
    padding: 2vw;
    position: absolute;
    top: 2vw;
    left: 2vw;
  }
  
  .all-caps-text {
    color: var(--black);
    text-transform: uppercase;
    margin-bottom: 0;
    font-size: .875vw;
    line-height: 1.1;
  }
  
  .all-caps-text.white {
    color: var(--white);
  }
  
  .all-caps-text._5px-margin {
    margin-bottom: 5px;
  }
  
  ._2-5vw-title {
    text-align: left;
    letter-spacing: -.125vw;
    font-size: 2.5vw;
  }
  
  ._2-5vw-title.small-margins {
    margin-top: .625vw;
    margin-bottom: .625vw;
  }
  
  ._2-5vw-title.xs-margin.max-width {
    max-width: 70%;
  }
  
  ._1-125vw-paragraph {
    text-transform: uppercase;
    margin-bottom: 0;
    font-family: League Spartan, sans-serif;
  }
  
  ._1-125vw-paragraph.center {
    margin-left: auto;
    margin-right: auto;
  }
  
  ._1-125vw-paragraph.center._70-max-width {
    max-width: 70%;
  }
  
  ._1-125vw-paragraph._90-max-width {
    max-width: 90%;
  }
  
  ._1-125vw-paragraph.black-text {
    color: var(--black);
  }
  
  ._1-125vw-paragraph.white {
    color: var(--white);
  }
  
  ._1-125vw-paragraph._404-page {
    max-width: 75%;
    color: var(--white);
    text-align: center;
  }
  
  ._1-125vw-paragraph.licensing {
    max-width: 40%;
  }
  
  .center {
    text-align: center;
  }
  
  .featured-blog-post {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
  }
  
  ._6-5vw-title {
    letter-spacing: -.35vw;
    margin-bottom: 2.5vw;
    font-size: 6.5vw;
    position: relative;
  }
  
  ._6-5vw-title.m-margin._45vw-max-width {
    max-width: 45vw;
  }
  
  ._6-5vw-title.white {
    color: var(--white);
    margin-top: 0;
    margin-bottom: 0;
  }
  
  .align-left {
    align-items: center;
    display: flex;
  }
  
  .template-image {
    box-shadow: -20px 0 10px -5px rgba(31, 31, 31, .08);
  }
  
  .template-image._2 {
    box-shadow: none;
  }
  
  .home-button-arrow-head {
    width: 8px;
    height: 8px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    margin-left: -7px;
    transform: rotate(45deg);
  }
  
  .home-button-arrow-head.dark {
    border-top-color: var(--black);
    border-right-color: var(--black);
  }
  
  ._1-75vw-text {
    margin-bottom: 0;
    font-size: 1.75vw;
  }
  
  ._1-75vw-text.no-margin {
    margin-bottom: 0;
  }
  
  .page-type-wrap {
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    display: flex;
    position: relative;
    overflow: hidden;
  }
  
  .title-letter {
    color: var(--black);
    letter-spacing: -.4vw;
    font-family: Newsreader Display, sans-serif;
    font-size: 6vw;
    line-height: 1;
  }
  
  .title-letter._3.margin {
    margin-right: 2vw;
  }
  
  .cards-wrap {
    width: 100%;
    height: 38vw;
    position: relative;
  }
  
  .align-right {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5px;
    display: flex;
  }
  
  .template-link {
    width: 100%;
    height: 100%;
  }
  
  .home-button {
    background-color: var(--black);
    color: #fff;
    border-radius: 17px;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: center;
    align-items: center;
    padding: 5px 12px 5px 16px;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    display: flex;
  }
  
  .home-button.secondary {
    color: var(--black);
    background-color: rgba(0, 0, 0, 0);
  }
  
  .home-button.secondary:hover {
    color: #1d1d1f;
  }
  
  .home-button-arrow-wrap {
    width: 20px;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    display: flex;
  }
  
  .cards-container {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .template-card {
    width: 25%;
    height: 100%;
    position: absolute;
    top: 0;
  }
  
  .template-card._4 {
    z-index: 3;
    left: 24.99%;
  }
  
  .template-card._7 {
    z-index: 7;
    left: 50%;
  }
  
  .template-card._9 {
    z-index: 9;
    left: 66.66%;
  }
  
  .template-card._8 {
    z-index: 8;
    left: 58.33%;
  }
  
  .template-card._5 {
    z-index: 4;
    left: 33.32%;
  }
  
  .template-card._2 {
    z-index: 1;
    left: 8.33%;
  }
  
  .template-card._6 {
    z-index: 5;
    left: 41.65%;
  }
  
  .template-card._3 {
    z-index: 2;
    left: 16.66%;
  }
  
  .template-card._10 {
    z-index: 9;
    left: 75%;
  }
  
  ._6vw-title {
    text-align: left;
    letter-spacing: -.32vw;
    margin-top: 7px;
    margin-bottom: 30px;
    font-size: 6vw;
  }
  
  ._6vw-title.center {
    text-align: center;
  }
  
  .title-wrap {
    width: 75%;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
  
  .home-buttons-wrap {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-template-rows: auto;
    grid-template-columns: auto auto;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    align-items: center;
    justify-items: start;
    margin-top: 2.8vw;
    display: grid;
  }
  
  .home-button-arrow-line {
    width: 6px;
    height: 2px;
    background-color: #fff;
    border-top: 1px solid #fff;
  }
  
  .home-button-arrow-line.black {
    border-top-color: var(--black);
    background-color: #1f1f1f;
  }
  
  ._100vh {
    height: 100vh;
  }
  
  ._4-columns-grid {
    grid-column-gap: 4vw;
    grid-row-gap: 4vw;
    grid-template-rows: auto;
    grid-template-columns: 17.75vw 17.75vw 17.75vw 17.75vw;
    grid-auto-columns: 1fr;
    align-items: start;
    display: grid;
  }
  
  ._4-columns-grid._1-5vw-padding {
    border-top: 1px solid var(--black);
    padding-top: 1.5vw;
    padding-bottom: 1.5vw;
  }
  
  ._4-columns-grid._1-5vw-padding.last {
    border-bottom: 1px solid var(--black);
  }
  
  ._4-columns-grid.no-rows-spacing {
    grid-row-gap: 0vw;
  }
  
  ._4-columns-grid.stretch {
    align-items: stretch;
  }
  
  ._4-columns-grid._20vw {
    grid-template-columns: 20vw 20vw 20vw 20vw;
  }
  
  ._2-columns-grid {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
  }
  
  ._2-columns-grid._4vw-gap {
    grid-column-gap: 4vw;
    grid-row-gap: 4vw;
  }
  
  ._2-columns-grid._2vw-gap {
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
  }
  
  ._2-columns-grid._2vw-gap._4vw-rows-gap {
    grid-row-gap: 4vw;
  }
  
  .split-screen {
    height: 100vh;
    justify-content: center;
    display: flex;
  }
  
  .text-column {
    z-index: 2;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 7vw 8.5vw;
    display: flex;
    position: relative;
    overflow: hidden;
  }
  
  .background-image-hero {
    width: 100%;
    height: 100%;
    background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg"), linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4));
    background-position: 0 0, 0 0;
    background-size: cover, auto;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }
  
  .image-column {
    flex-direction: column;
    display: flex;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    overflow: hidden;
  }
  
  .slider {
    height: 100vh;
    background-color: rgba(0, 0, 0, 0);
    overflow: hidden;
  }
  
  .mask {
    overflow: visible;
  }
  
  .hide {
    display: none;
  }
  
  .slider-title {
    max-width: 40vw;
    color: var(--white);
    letter-spacing: -.32vw;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 6vw;
    line-height: 1.1;
  }
  
  .divider {
    width: 100%;
    height: .5px;
    background-color: var(--black);
    margin-top: 2vw;
    margin-bottom: 2vw;
  }
  
  .divider.white {
    background-color: var(--white);
  }
  
  .divider.no-top-margin {
    margin-top: 0;
  }
  
  ._100-height {
    height: 100%;
  }
  
  .black {
    background-color: var(--black);
    color: var(--white);
  }
  
  .black.padding {
    padding: 5vw 2.5vw;
  }
  
  .black.large-padding {
    background-image: url("https://uploads-ssl.webflow.com/65209054b1acf26632924b4f/65209054b1acf26632924c3d_Contact_Arrow.svg");
    background-position: 0 85%;
    background-repeat: no-repeat;
    background-size: 75%;
    padding: 7vw 8.5vw;
  }
  
  .email-capture-form {
    align-items: center;
    display: flex;
    position: relative;
  }
  
  .email-input {
    width: 100%;
    color: var(--white);
    background-color: rgba(0, 0, 0, 0);
    border: 1px #000;
    border-bottom: 2px solid rgba(255, 255, 255, .6);
    margin-bottom: 0;
    padding-left: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
  
  .email-input:hover, .email-input:active, .email-input:focus {
    border-bottom-color: var(--white);
  }
  
  .email-input::-ms-input-placeholder {
    color: rgba(255, 255, 255, .6);
  }
  
  .email-input::placeholder {
    color: rgba(255, 255, 255, .6);
  }
  
  .email-capture-button {
    letter-spacing: 3px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0);
    padding: 15px 0 20px 25px;
    font-size: 11px;
    line-height: 1;
    position: absolute;
    right: 0;
  }
  
  .error-message {
    color: var(--chocolate);
    background-color: rgba(0, 0, 0, 0);
    padding-left: 0;
  }
  
  .success-message {
    background-color: var(--cornflower-blue);
  }
  
  .absolute-pic {
    z-index: 2;
    height: 70vh;
    position: absolute;
  }
  
  .align-center {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  
  .absolute-text {
    z-index: 3;
    position: absolute;
  }
  
  ._12vw-title {
    letter-spacing: -.64vw;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 12vw;
    line-height: .9;
    position: relative;
  }
  
  .white-span {
    color: var(--white);
  }
  
  .align-bottom {
    flex-direction: column;
    justify-content: flex-end;
    display: flex;
  }
  
  .absolute-paragraph {
    width: 40%;
    align-self: flex-end;
    margin-bottom: 0;
    position: absolute;
    bottom: 15vh;
  }
  
  .absolute-paragraph._0-right {
    width: 40%;
    bottom: 15vh;
    right: 0;
  }
  
  .absolute-paragraph._0-left {
    top: 15vh;
    bottom: auto;
    left: 0;
  }
  
  .image-span {
    width: 12vw;
    height: 6.5vw;
    background-image: url("https://uploads-ssl.webflow.com/65209054b1acf26632924b4f/65209054b1acf26632924c40_harley-davidson-bs1eqd6zSiU-unsplash.png");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
  }
  
  .image-span-2 {
    width: 12vw;
    height: 6.5vw;
    background-image: url("https://uploads-ssl.webflow.com/65209054b1acf26632924b4f/65209054b1acf26632924c41_filippo-cesarini-UkGrCW2V23I-unsplash.jpg");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
  }
  
  .image-span-3 {
    width: 6vw;
    height: 8vw;
    background-image: url("https://uploads-ssl.webflow.com/65209054b1acf26632924b4f/65209054b1acf26632924c3e_ranurte-kSdi_gqbGGs-unsplash-(1).jpg");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
  }
  
  .short-bio {
    letter-spacing: -.32vw;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 6vw;
    line-height: 1.1;
  }
  
  .full-width-post {
    width: 100%;
    height: 80vh;
    color: var(--white);
    position: relative;
    overflow: hidden;
  }
  
  .overlay {
    z-index: 1;
    background-color: rgba(31, 31, 31, .3);
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }
  
  .full-width-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .sticky-section {
    width: 100%;
    height: 100vh;
    background-color: var(--black);
    color: var(--white);
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  
  ._3-5vw-paragraph {
    z-index: 1;
    letter-spacing: -.18vw;
    margin-bottom: 0;
    font-size: 3.5vw;
    line-height: 1.2;
    position: relative;
  }
  
  ._3-5vw-paragraph.justify {
    text-align: justify;
  }
  
  .serif-span {
    font-family: Newsreader Display, sans-serif;
    font-style: italic;
  }
  
  .image-tooltip {
    width: 12vw;
    height: 18vw;
    display: none;
    position: fixed;
    top: -9vw;
    left: 2vw;
    overflow: hidden;
  }
  
  ._5-columns-grid {
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    align-items: start;
    display: grid;
  }
  
  ._5-columns-grid._8-5vw-margin {
    z-index: 1;
    margin-left: -8.5vw;
    position: relative;
  }
  
  ._5-columns-grid._2vw-gap {
    grid-column-gap: 2vw;
    grid-row-gap: 4vw;
  }
  
  .xs-margin {
    margin-bottom: 1.5vw;
  }
  
  ._50-width {
    width: 50%;
  }
  
  ._50-width._1 {
    position: relative;
    bottom: -2.5vw;
    left: 0;
  }
  
  ._50-width._2 {
    z-index: 4;
    position: relative;
    bottom: -10vw;
    left: 10vw;
  }
  
  ._50-width._5vw-margin {
    margin-top: -5vw;
  }
  
  ._50-width._20vw-margin {
    margin-top: -20vw;
  }
  
  .author-info-grid {
    grid-column-gap: 16px;
    grid-row-gap: 3vw;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    align-content: start;
    display: grid;
  }
  
  .author-column-divider {
    width: 100%;
    height: 25px;
    background-color: var(--gainsboro);
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5vw;
    display: flex;
  }
  
  .author-pic {
    width: 100%;
    background-image: url("https://uploads-ssl.webflow.com/65209054b1acf26632924b4f/65209054b1acf26632924c3c_pexels-cottonbro-8102739.jpg");
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    padding-top: 100%;
  }
  
  .small-blog-post {
    border-bottom: 1px solid var(--black);
  }
  
  ._1-5vw-title {
    color: var(--white);
    letter-spacing: -.07vw;
    text-transform: lowercase;
    font-family: League Spartan, sans-serif;
    font-size: 1.5vw;
    font-style: italic;
    font-weight: 400;
  }
  
  .image-based-post {
    width: 100%;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    position: relative;
  }
  
  .number {
    letter-spacing: -1vw;
    font-size: 10vw;
    line-height: .9;
  }
  
  ._8-5vw-arrow {
    width: 8.5vw;
  }
  
  .custom-arrow {
    width: 5vw;
    height: 5vw;
    border: 1px solid rgba(255, 255, 255, .2);
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    position: fixed;
    top: -2.5vw;
    left: -2.5vw;
  }
  
  .xxl-h1 {
    z-index: 10;
    text-align: center;
    margin-top: 0;
    font-size: 16vw;
    font-style: normal;
    font-weight: 300;
    line-height: .8;
    position: relative;
  }
  
  .xxl-h1.m-margin.white, .xxl-h1.white {
    color: var(--white);
  }
  
  .absolute-background {
    width: 100%;
    height: 41vw;
    background-color: var(--black);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .absolute-background._50vw {
    height: 50vw;
  }
  
  .absolute-background._50 {
    height: 50%;
  }
  
  ._8-columns-grid {
    grid-template-rows: auto;
    grid-template-columns: 10.375vw 10.375vw 10.375vw 10.375vw 10.375vw 10.375vw 10.375vw 10.375vw;
    grid-auto-columns: 1fr;
    align-items: start;
    display: grid;
  }
  
  ._8-columns-grid._2-5vw-gap {
    grid-column-gap: 2.5vw;
    grid-row-gap: 2.5vw;
    grid-template-columns: 8.1875vw 8.1875vw 8.1875vw 8.1875vw 8.1875vw 8.1875vw 8.1875vw 8.1875vw;
  }
  
  ._8-columns-grid._2-5vw-gap.center {
    justify-items: center;
  }
  
  ._8-columns-grid._2-5vw-gap._1-5vw-padding {
    border-top: 1px solid var(--black);
    padding-top: 1.5vw;
    padding-bottom: 1.5vw;
  }
  
  ._8-columns-grid._2-5vw-gap._1-5vw-padding.last {
    border-bottom: 1px solid #000;
  }
  
  ._8-columns-grid._4vw-gap {
    grid-column-gap: 4vw;
    grid-row-gap: 4vw;
    grid-template-columns: 6.875vw 6.875vw 6.875vw 6.875vw 6.875vw 6.875vw 6.875vw 6.875vw;
  }
  
  ._8-columns-grid._9-6-columns {
    grid-column-gap: 2.5vw;
    grid-row-gap: 2.5vw;
    grid-template-columns: 9.6875vw 9.6875vw 9.6875vw 9.6875vw 9.6875vw 9.6875vw 9.6875vw 9.6875vw;
  }
  
  ._8-columns-grid._10-3-columns {
    grid-column-gap: 2.5vw;
    grid-row-gap: 2.5vw;
    grid-template-columns: 10.3125vw 10.3125vw 10.3125vw 10.3125vw 10.3125vw 10.3125vw 10.3125vw 10.3125vw;
  }
  
  .xxl-h2 {
    z-index: 10;
    text-align: center;
    letter-spacing: -.2vw;
    font-size: 7.25vw;
    font-style: italic;
    font-weight: 300;
    line-height: .9;
    position: relative;
  }
  
  .m-margin {
    margin-bottom: 4.5vw;
  }
  
  .relative {
    z-index: 2;
    position: relative;
  }
  
  .relative.opposite-ends {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
  }
  
  ._100-paragraph {
    margin-bottom: 0;
  }
  
  .relative-text-wrap {
    z-index: 10;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    display: flex;
    position: relative;
  }
  
  .white-divider {
    width: 100%;
    height: .5px;
    background-color: var(--white);
    margin-bottom: 2vw;
  }
  
  .small-posts-slider {
    width: 100%;
    height: auto;
    background-color: rgba(0, 0, 0, 0);
    border: 2px #000;
    display: flex;
    overflow: visible;
  }
  
  .small-posts-left-arrow {
    width: 18.875vw;
    height: 100%;
    color: #000;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    font-size: 10px;
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -18.875vw;
  }
  
  .small-posts-mask {
    width: 30.75vw;
    height: auto;
    overflow: visible;
  }
  
  .small-posts-right-arrow {
    width: 8.5vw;
    height: 100%;
    color: #000;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    font-size: 10px;
    display: flex;
    top: 0;
    bottom: 0;
    right: -8.5vw;
  }
  
  .small-post-slide {
    margin-right: 4vw;
  }
  
  .heading-test {
    letter-spacing: -.5vw;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 10vw;
  }
  
  .heading-test.white {
    color: var(--white);
  }
  
  .heading-test._0-75-line-height {
    line-height: .75;
  }
  
  .social-link {
    width: 20px;
    height: 20px;
    display: flex;
  }
  
  .tag {
    border: 1px solid var(--black);
    text-transform: uppercase;
    border-radius: 2.875vw;
    justify-content: center;
    align-items: center;
    padding: 1vw 2vw;
    font-size: .75vw;
    line-height: 1;
    transition: box-shadow .2s;
    display: flex;
  }
  
  .tag:hover {
    box-shadow: 0 0 0 1px #000;
  }
  
  .tags-grid {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
  }
  
  .rich-text h2 {
    margin-top: 0;
    margin-bottom: 7px;
    font-family: Inter, sans-serif;
    font-size: 1.25vw;
    font-style: normal;
    font-weight: 600;
    line-height: 1.2;
  }
  
  .rich-text h3, .rich-text h4 {
    margin-top: 30px;
    margin-bottom: 7px;
    font-size: 1.25vw;
  }
  
  .rich-text blockquote {
    text-align: center;
    padding-bottom: 2.5vw;
    padding-left: 0;
    font-size: 7.5vw;
    line-height: 1;
  }
  
  .rich-text h1 {
    margin-top: 0;
    margin-bottom: 7px;
    font-family: Inter, sans-serif;
    font-size: 1.25vw;
    font-style: normal;
    font-weight: 600;
    line-height: 1.2;
  }
  
  .rich-text a {
    color: var(--cornflower-blue);
    font-weight: 600;
  }
  
  ._16vw-h1 {
    z-index: 10;
    letter-spacing: -.8vw;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16vw;
    font-style: italic;
    font-weight: 300;
    line-height: .8;
    position: relative;
  }
  
  ._16vw-h1.right {
    text-align: right;
  }
  
  ._12-columns-grid {
    width: 100%;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
  }
  
  ._2-125vw-text {
    margin-bottom: 0;
    font-size: 2.125vw;
    line-height: 1.2;
  }
  
  .work-effect-container {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-top: 1vw;
    padding-bottom: 3vw;
    font-weight: 500;
    text-decoration: none;
    display: block;
    position: relative;
  }
  
  ._3-75vw-title {
    z-index: 10;
    letter-spacing: -.2vw;
    margin-top: 0;
    font-size: 3.75vw;
    line-height: 1.1;
    position: relative;
  }
  
  ._3-75vw-title.top-margin {
    margin-top: 1vw;
  }
  
  .hover-circle-wrapper {
    z-index: 1;
    max-height: 100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    padding: 3vw;
    display: flex;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }
  
  .hover-circle {
    width: 5vw;
    height: 5vw;
    min-height: 5vw;
    min-width: 5vw;
    border: 1px solid var(--white);
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  
  .instagram-wrap {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
  }
  
  .contact-2-columns-grid {
    grid-column-gap: 5vw;
    grid-row-gap: 5vw;
    grid-template-rows: auto;
    grid-template-columns: 4.25fr 5.75fr;
    grid-auto-columns: 1fr;
    align-items: start;
    display: grid;
  }
  
  .underline {
    width: 100%;
    height: 1px;
    background-color: var(--white);
  }
  
  .underline._3px {
    height: 3px;
  }
  
  .underline.black-bkg {
    background-color: var(--black);
  }
  
  .contact-content {
    grid-column-gap: 4vw;
    grid-row-gap: 2vw;
    flex-direction: column;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    align-items: flex-start;
    display: grid;
  }
  
  ._1-4vw-text {
    margin-bottom: 0;
    font-size: 1.4vw;
  }
  
  .link-block {
    color: var(--black);
    flex-direction: column;
    align-items: flex-start;
    font-weight: 400;
    display: flex;
    overflow: hidden;
  }
  
  .link-block.margins {
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 500;
  }
  
  .contact-links {
    flex-direction: column;
    align-items: flex-start;
    display: flex;
  }
  
  .contact-links.centered {
    align-items: center;
  }
  
  .pic-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  
  .contact-pic {
    background-image: url("https://uploads-ssl.webflow.com/65209054b1acf26632924b4f/65209054b1acf26632924c3f_faizfajer-16tg31bVGlM-unsplash-(3).jpg");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
  }
  
  ._1vw-text {
    color: var(--white);
    font-family: League Spartan, sans-serif;
    font-size: 1vw;
    display: inline;
  }
  
  ._1vw-text.centered {
    text-align: center;
    margin-bottom: 1.25vw;
    display: block;
  }
  
  .absolute-image {
    position: absolute;
  }
  
  .absolute-image.right-corner {
    width: 22.5%;
    top: auto;
    bottom: 12.5%;
    left: auto;
    right: 0%;
  }
  
  .absolute-image.left-corner {
    width: 22.5%;
    top: 12.5%;
    bottom: auto;
    left: 0%;
    right: auto;
  }
  
  .absolute-image.cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  ._4vw-title {
    letter-spacing: -.25vw;
    font-size: 4vw;
  }
  
  ._7-5vw-title {
    letter-spacing: -.5vw;
    margin-bottom: 6px;
    font-family: Inter, sans-serif;
    font-size: 7.5vw;
    font-style: normal;
    line-height: .9;
    position: relative;
  }
  
  ._7-5vw-title._0-5-letter-spacing {
    letter-spacing: -.5vw;
    margin-left: -.53vw;
  }
  
  ._7-5vw-title._0-5-letter-spacing.no-top-padding {
    margin-top: 0;
  }
  
  ._7-5vw-title.black-text {
    color: var(--black);
  }
  
  .horizontal-line {
    z-index: 1;
    width: 100%;
    height: 1px;
    background-color: var(--black);
    position: relative;
  }
  
  ._2-5vw-text {
    letter-spacing: -.1vw;
    text-transform: lowercase;
    font-family: League Spartan, sans-serif;
    font-size: 2.5vw;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
  }
  
  ._2-5vw-text.no-margin {
    margin-bottom: 0;
  }
  
  .horizontal-wrap {
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 3vw;
    padding-bottom: 3vw;
    display: flex;
  }
  
  .button {
    color: var(--black);
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, .2);
    padding: 10px 35px;
    transition: border-color .3s;
  }
  
  .button:hover {
    border-color: var(--black);
  }
  
  .button.white {
    color: var(--white);
    border-color: rgba(255, 255, 255, .4);
  }
  
  .button.white:hover {
    border-color: var(--white);
  }
  
  .no-background-image {
    width: 50%;
    background-image: url("https://uploads-ssl.webflow.com/65209054b1acf26632924b4f/65209054b1acf26632924c3b_aiony-haust-IXYxqP4zejo-unsplash.jpg");
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: auto 85%;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: auto;
    right: 0%;
  }
  
  .vertical-left {
    flex-direction: column;
    align-items: flex-start;
    display: flex;
  }
  
  .form-block {
    width: 100%;
    margin-bottom: 0;
  }
  
  ._5vw-title {
    margin-bottom: 1vw;
    font-size: 5vw;
    line-height: 1.05;
  }
  
  .footer-column {
    grid-column-gap: 1vw;
    grid-row-gap: 1vw;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    justify-items: start;
    display: grid;
  }
  
  .social-media-links {
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
  }
  
  .footer-link-block {
    color: var(--white);
    flex-direction: column;
    align-items: flex-start;
    font-weight: 400;
    display: flex;
    overflow: hidden;
  }
  
  .footer-link-block.w--current {
    text-transform: uppercase;
    font-family: League Spartan, sans-serif;
  }
  
  .s-margin {
    margin-bottom: 3vw;
  }
  
  .text-input {
    letter-spacing: -.01vw;
    background-color: #f1f1f1;
    border: 1px #000;
    font-size: 1.125vw;
  }
  
  .text-input.message {
    height: 20vh;
    margin-bottom: 3vw;
  }
  
  .contact-title {
    text-align: left;
    letter-spacing: -.125vw;
    margin-top: 0;
    margin-bottom: .75vw;
    font-size: 2.5vw;
  }
  
  .l-margin {
    margin-bottom: 6vw;
  }
  
  .bold-span {
    font-weight: 600;
  }
  
  .color-grid {
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
  }
  
  .style-guide-links-grid {
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  }
  
  .style-guide-list {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    justify-items: start;
    display: grid;
  }
  
  .style-guide-list._40px-margin {
    margin-bottom: 40px;
  }
  
  .style-guide-list._20px-margin {
    grid-row-gap: 20px;
  }
  
  .style-guide-card {
    border-radius: 8px;
    padding: 3vw;
  }
  
  .style-guide-card.light-gray {
    background-color: #fafafa;
  }
  
  .style-guide-grid {
    width: 100%;
    grid-column-gap: 25px;
    grid-template-rows: auto;
    grid-template-columns: minmax(200px, 200px) 1fr;
    grid-auto-columns: 1fr;
    align-items: start;
    display: grid;
  }
  
  .color-square {
    width: 100%;
    border-radius: 4px;
    padding-top: 100%;
  }
  
  .color-square.white {
    background-color: var(--white);
  }
  
  .color-square.red {
    background-color: var(--chocolate);
    box-shadow: inset 0 0 0 1px rgba(136, 136, 136, .15);
  }
  
  .color-square.full-black {
    background-color: #000;
  }
  
  .color-square.blue {
    background-color: var(--cornflower-blue);
  }
  
  .styleguide-container {
    width: 100%;
    max-width: 1200px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
  
  .style-guide-link {
    color: #1f1f1f;
    background-color: rgba(0, 0, 0, 0);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 16px 25px;
    font-weight: 500;
    transition: background-color .3s, box-shadow .3s;
  }
  
  .style-guide-link:hover {
    background-color: #fafafa;
  }
  
  .style-guide-link.w--current {
    color: #fff;
    background-color: #1f1f1f;
  }
  
  .style-guide-elements-grid {
    grid-row-gap: 10vw;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    display: grid;
  }
  
  ._7-5vw-margin {
    margin-top: -7.5vw;
  }
  
  .testimonial-slider {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    border: 2px #000;
  }
  
  .testimonial-slider-wrap {
    flex-direction: column;
    align-items: center;
    display: flex;
  }
  
  .testimonial-quote {
    text-align: center;
    letter-spacing: -.35vw;
    margin-top: 0;
    font-size: 6.5vw;
  }
  
  .vertically-centered {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: flex;
  }
  
  .vertically-centered._10vw-padding {
    padding-bottom: 10vw;
  }
  
  .absolute-pic-2 {
    z-index: 2;
    width: 30%;
    position: absolute;
    top: 5%;
    left: -15%;
  }
  
  .absolute-post-title-wrap {
    z-index: 2;
    width: 50%;
    color: var(--white);
    position: absolute;
    bottom: 4vw;
    left: 4vw;
  }
  
  ._3-25vw-span {
    letter-spacing: -.175vw;
    font-size: 3.25vw;
    display: inline-block;
    position: relative;
    top: -1.6125vw;
  }
  
  .white {
    color: var(--white);
  }
  
  ._10vw-margin {
    margin-top: -10vw;
  }
  
  ._404-wrap {
    width: 36vw;
    background-color: var(--black);
    flex-direction: column;
    align-items: center;
    padding: 5vw;
    display: flex;
  }
  
  ._404-button {
    color: var(--black);
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: nowrap;
    background-color: #fff;
    padding: 1.5vw 2.5vw;
    font-size: .875vw;
    font-weight: 500;
    line-height: 1;
    transition: background-color .2s ease-in;
  }
  
  ._404-button:hover {
    background-color: rgba(255, 255, 255, .9);
  }
  
  ._404-title {
    color: var(--white);
    text-align: center;
    letter-spacing: -.2vw;
    margin-top: 0;
    font-size: 4vw;
  }
  
  .licensing-wrap {
    border-top: 1px solid #1f1f1f;
    padding-top: 1.5vw;
    padding-bottom: 1.5vw;
  }
  
  .licensing-wrap.last {
    border-bottom: 1px solid #1f1f1f;
  }
  
  ._2-1vw-title {
    color: #1f1f1f;
    letter-spacing: -.1vw;
    font-size: 2.1vw;
    font-weight: 500;
    line-height: .86;
  }
  
  .link-span {
    color: var(--cornflower-blue);
    font-weight: 600;
  }
  
  .footer-text {
    text-align: center;
    text-transform: uppercase;
    font-family: League Spartan, sans-serif;
    font-size: 1vw;
    position: absolute;
    bottom: 1.5vw;
    left: 0;
    right: 0;
  }
  
  .menu {
    z-index: 99;
    width: 100%;
    height: 100vh;
    background-color: var(--black);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;
    position: fixed;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: 0%;
  }
  
  .search {
    margin-bottom: 0;
    display: flex;
  }
  
  .search.bottom-margin {
    margin-bottom: 7vw;
  }
  
  .search-input {
    min-height: 60px;
    color: var(--white);
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(255, 255, 255, .4);
    margin-bottom: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  
  .search-input:hover, .search-input:active, .search-input:focus {
    border-color: var(--white);
  }
  
  .search-input::-ms-input-placeholder {
    color: rgba(255, 255, 255, .6);
  }
  
  .search-input::placeholder {
    color: rgba(255, 255, 255, .6);
  }
  
  .search-input.black-borders {
    color: var(--black);
    border-color: rgba(0, 0, 0, .2);
  }
  
  .search-input.black-borders:hover, .search-input.black-borders:active, .search-input.black-borders:focus {
    border-color: var(--black);
  }
  
  .search-input.black-borders::-ms-input-placeholder {
    color: var(--black-2);
  }
  
  .search-input.black-borders::placeholder {
    color: var(--black-2);
  }
  
  .nav-link {
    color: var(--black);
    grid-template-rows: auto;
    grid-template-columns: auto auto;
    grid-auto-columns: 1fr;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    display: flex;
  }
  
  .nav-link.right-margin {
    margin-right: 1.5vw;
  }
  
  .nav-link.right-margin.white {
    color: var(--white);
  }
  
  .dot {
    width: 7px;
    height: 7px;
    background-color: var(--black);
    border-radius: 100%;
    margin-left: 4px;
    margin-right: 4px;
  }
  
  .dot.white {
    background-color: var(--white);
  }
  
  .hamburger-bar {
    width: 100%;
    height: 1px;
    background-color: var(--black);
  }
  
  .hamburger-bar.bottom {
    background-color: var(--white);
    position: absolute;
    bottom: 10px;
  }
  
  .hamburger-bar.bottom.white {
    background-color: var(--white);
  }
  
  .hamburger-bar.top {
    background-color: var(--white);
    position: absolute;
    top: 10px;
  }
  
  .hamburger-bar.top.white {
    background-color: var(--white);
  }
  
  .hamburger-wrap {
    z-index: 100;
    width: 30px;
    height: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  
  .align-horizontally {
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  
  .navbar {
    z-index: 1;
    background-color: #000;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8.5vw;
    display: flex;
  }
  
  .navbar.absolute {
    z-index: 100;
    position: absolute;
    top: 0%;
    bottom: auto;
    left: 0%;
    right: 0%;
  }
  
  .menu-wrap {
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding-left: 8.5vw;
    padding-right: 8.5vw;
    display: flex;
  }
  
  .post-info {
    text-transform: uppercase;
    align-items: center;
    margin-bottom: 10px;
    display: flex;
  }
  
  .small-dot {
    width: 6px;
    height: 6px;
    background-color: var(--black);
    border-radius: 100%;
    margin-right: 5px;
  }
  
  .small-dot.white-bkg {
    background-color: var(--white);
  }
  
  .blog-info-line {
    width: 40px;
    height: 1px;
    background-color: var(--white);
    color: var(--white);
    margin-left: 10px;
    margin-right: 10px;
  }
  
  .blog-info-line.white-bkg {
    background-color: var(--white);
  }
  
  .author-info {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
    grid-auto-columns: 1fr;
    align-items: center;
    justify-items: start;
    display: grid;
  }
  
  .author-pic-small {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
  
  .author-pic-large {
    width: 15vw;
    height: 15vw;
    background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
  }
  
  .author-links {
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    align-items: center;
    justify-items: center;
    display: grid;
  }
  
  .author-wrap {
    width: 30vw;
    flex-direction: column;
    align-items: center;
    display: flex;
  }
  
  .author-title {
    color: var(--white);
    text-align: center;
    letter-spacing: -.32vw;
    margin-top: 1.5vw;
    margin-bottom: 3vw;
    font-size: 6vw;
    line-height: .7;
  }
  
  .invert {
    filter: invert();
  }
  
  .utility-page-wrap {
    width: 100vw;
    height: 100vh;
    max-height: 100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  
  .utility-page-content {
    width: 260px;
    text-align: center;
    flex-direction: column;
    display: flex;
  }
  
  .utility-page-form {
    flex-direction: column;
    align-items: stretch;
    display: flex;
  }
  
  .password-title {
    margin-top: 0;
    margin-bottom: 1.5vw;
    font-size: 3vw;
  }
  
  .hamburger-wrap-white {
    z-index: 100;
    width: 30px;
    height: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }
  
  ._4vw-margin:first-child {
    margin-bottom: 4vw;
  }
  
  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 4vw;
  }
  
  ._0-625vw {
    margin-top: -.625vw;
  }
  
  .footer-grid {
    grid-column-gap: 2vw;
    grid-row-gap: 20px;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    align-items: start;
    display: grid;
  }
  
  .text-div {
    width: 80%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    display: flex;
  }
  
  .contact-h1 {
    color: var(--white);
    letter-spacing: -.4vw;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 6vw;
  }
  
  .offices-grid {
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    display: grid;
  }
  
  .info-text {
    z-index: 2147483647;
    width: 100%;
    color: var(--white);
    text-align: center;
    position: absolute;
    bottom: 2.5vh;
  }
  
  .faqs-grid {
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-columns: 1fr;
    align-items: start;
    display: grid;
  }
  
  .faq-card {
    border-radius: .5vw;
    flex-direction: column;
    align-items: center;
    padding: 3vw;
    box-shadow: 1px 1px 3.5vw rgba(29, 29, 31, .06);
  }
  
  ._1vw-margin {
    margin-bottom: 1vw;
  }
  
  ._1-column-grid {
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    align-items: start;
    display: grid;
  }
  
  .small-link-span {
    color: var(--chocolate);
    font-weight: 500;
  }
  
  .faq-line {
    width: 100%;
    height: 1px;
    background-color: rgba(29, 29, 31, .1);
    margin-bottom: 1.5vw;
  }
  
  .h3-title {
    margin-top: 0;
    margin-bottom: 1.5vw;
  }
  
  .h5-title {
    letter-spacing: -.01vw;
    font-size: 1.25vw;
    line-height: 1.5;
  }
  
  .medium-icon {
    height: 2.25vw;
  }
  
  .info-box {
    z-index: 100;
    background-color: var(--black);
    color: #fff;
    justify-content: center;
    align-items: center;
    padding: 1vw;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  
  .white-link {
    color: #fff;
    font-weight: 500;
  }
  
  .close-icon-wrap {
    width: 2vw;
    height: 2vw;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 100%;
    justify-content: center;
    align-items: center;
    padding: .375vw;
    display: flex;
    position: absolute;
    right: 5vw;
  }
  
  .flowyak-banner {
    z-index: 2147483647;
    max-width: 12rem;
    background-color: var(--black);
    color: #fff;
    text-align: center;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    display: flex;
    position: fixed;
    bottom: 10px;
    right: 10px;
  }
  
  .close-banner {
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    line-height: 1;
    display: flex;
    position: absolute;
    top: .5rem;
    right: .5rem;
  }
  
  .banner-text {
    margin-bottom: 1rem;
    font-size: .875rem;
    line-height: 1.25rem;
  }
  
  .flowyak-banner-button {
    background-color: var(--cornflower-blue);
    padding: .5rem 1rem;
    font-size: .875rem;
    font-weight: 600;
    line-height: 1.25rem;
    transition: background-color .3s;
    display: block;
  }
  
  .text-block, .text-block-2, .text-block-3 {
    color: var(--white);
  }
  
  .bold-text {
    text-transform: uppercase;
    font-family: League Spartan, sans-serif;
  }
  
  @media screen and (max-width: 991px) {
    p, li {
      font-size: 14px;
    }
  
    .section.no-padding._100vh.old-lace.align-center {
      height: 70vh;
    }
  
    .blog-post.white._30-75vw-width {
      width: 100%;
    }
  
    ._100-width._50vh {
      height: 300px;
    }
  
    .all-caps-text {
      font-size: 10px;
    }
  
    ._2-5vw-title {
      font-size: 21px;
    }
  
    ._1-125vw-paragraph {
      font-size: 12px;
    }
  
    ._1-125vw-paragraph._404-page {
      max-width: 90%;
    }
  
    ._1-125vw-paragraph.licensing.s-margin {
      max-width: 60%;
    }
  
    .align-left.center-on-mobile {
      justify-content: center;
    }
  
    ._1-75vw-text {
      font-size: 14px;
    }
  
    ._1-75vw-text.center {
      max-width: 75%;
    }
  
    ._6vw-title {
      max-width: 640px;
      font-size: 55px;
    }
  
    ._6vw-title.center {
      margin-bottom: 20px;
    }
  
    .title-wrap {
      width: 100%;
      max-width: 75vw;
    }
  
    ._2-columns-grid._100-width._100vh.hide-on-portrait {
      height: 65vh;
    }
  
    .split-screen {
      height: 80vh;
    }
  
    .text-column._80px-padding {
      padding-top: 80px;
    }
  
    .slider {
      height: 80vh;
    }
  
    .black.large-padding {
      background-position: 0 70%;
      margin-right: 8.5vw;
      padding-top: 80px;
    }
  
    .absolute-pic {
      height: 50vh;
    }
  
    .absolute-pic.static-on-phone {
      height: 40vh;
    }
  
    .absolute-paragraph {
      width: 50%;
    }
  
    .full-width-post {
      height: 60vh;
    }
  
    .full-width-thumbnail {
      height: 100%;
    }
  
    ._5-columns-grid._2vw-gap {
      align-items: center;
    }
  
    ._1-5vw-title {
      font-size: 15px;
      line-height: 1;
    }
  
    ._8-5vw-arrow {
      align-items: center;
      display: flex;
    }
  
    .custom-arrow {
      min-height: 40px;
      min-width: 40px;
      position: static;
    }
  
    .absolute-background._50vw {
      height: 57.5vw;
    }
  
    ._8-columns-grid._4vw-gap {
      grid-template-columns: 6.875vw 6.875vw 6.875vw 6.875vw 6.875vw 6.875vw 6.875vw 6.875vw;
    }
  
    .small-posts-left-arrow {
      width: 8.5vw;
      left: -8.5vw;
    }
  
    .small-posts-mask {
      width: 45vw;
    }
  
    .small-posts-right-arrow {
      right: -8.5vw;
    }
  
    .tag {
      white-space: nowrap;
      font-size: 8px;
    }
  
    .rich-text h2, .rich-text h3, .rich-text h4, .rich-text h1, ._2-125vw-text {
      font-size: 14px;
    }
  
    .hover-circle-wrapper {
      padding: 10px;
    }
  
    .hover-circle {
      min-height: 50px;
      min-width: 50px;
    }
  
    .contact-2-columns-grid {
      grid-template-columns: 5fr 5fr;
    }
  
    ._1-4vw-text {
      font-size: 13px;
    }
  
    ._1vw-text {
      font-size: 10px;
    }
  
    .button {
      font-size: 12px;
    }
  
    .no-background-image {
      width: 100%;
      background-size: auto 80%;
    }
  
    .contact-title {
      font-size: 32px;
    }
  
    .bold-span {
      display: none;
    }
  
    .style-guide-card {
      padding: 30px 20px;
    }
  
    .style-guide-grid {
      grid-row-gap: 120px;
      grid-template-columns: minmax(170px, 170px) 1fr;
    }
  
    .styleguide-container {
      width: 100%;
    }
  
    .style-guide-link {
      padding-left: 20px;
      padding-right: 20px;
    }
  
    .style-guide-elements-grid {
      grid-row-gap: 120px;
    }
  
    ._404-wrap {
      width: 45vw;
      padding: 45px;
    }
  
    ._404-button {
      padding: 18px 30px;
      font-size: 10px;
    }
  
    ._404-title {
      font-size: 36px;
    }
  
    .footer-text {
      font-size: 10px;
    }
  
    .nav-link {
      font-size: 13px;
    }
  
    .author-title {
      max-width: 640px;
    }
  
    .hide-on-mobile {
      display: none;
    }
  
    .offices-grid {
      grid-template-columns: 1fr 1fr;
    }
  
    .paragraph-2 {
      font-size: 14px;
    }
  
    ._1vw-margin {
      margin-bottom: 8px;
    }
  
    .h5-title {
      font-size: 14px;
    }
  
    .paragraph {
      font-size: 12px;
    }
  }
  
  @media screen and (max-width: 767px) {
    h1, h2 {
      margin-top: 7px;
      margin-bottom: 12px;
    }
  
    .section {
      padding-top: 45px;
      padding-bottom: 45px;
    }
  
    .section.no-padding._100vh.old-lace.align-center {
      height: 100vh;
    }
  
    .section.author {
      height: 120vh;
    }
  
    .text-wrap.center.max-width {
      max-width: 80vw;
    }
  
    .text-wrap.absolute {
      top: 45px;
    }
  
    .text-wrap.absolute.first {
      top: 60px;
    }
  
    ._1-125vw-paragraph.licensing.s-margin {
      max-width: 70%;
    }
  
    ._6-5vw-title {
      font-size: 42px;
    }
  
    ._6-5vw-title.m-margin._45vw-max-width {
      max-width: 50vw;
    }
  
    .align-left.center-on-mobile {
      margin-bottom: 10px;
    }
  
    .page-type-wrap {
      margin-bottom: 20px;
    }
  
    .home-button {
      font-size: 13px;
    }
  
    ._6vw-title {
      margin-bottom: 13px;
      font-size: 48px;
    }
  
    .title-wrap {
      max-width: 80vw;
    }
  
    ._4-columns-grid._1-5vw-padding {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  
    ._2-columns-grid._100-width._100vh.hide-on-portrait {
      height: 70vh;
    }
  
    .split-screen {
      height: 100vh;
    }
  
    .text-column {
      padding: 30px 8.5vw;
    }
  
    .slider {
      height: 100vh;
    }
  
    .slider-title {
      max-width: 50vw;
      font-size: 42px;
    }
  
    .divider {
      margin-top: 12px;
      margin-bottom: 12px;
    }
  
    .absolute-pic.static-on-phone {
      height: 70vh;
    }
  
    .absolute-paragraph._0-right {
      width: 100%;
      bottom: 0;
    }
  
    .absolute-paragraph._0-left {
      width: 100%;
      top: 0;
    }
  
    .full-width-thumbnail {
      height: 80vh;
    }
  
    ._5-columns-grid._8-5vw-margin {
      margin-left: -30px;
    }
  
    .xs-margin {
      margin-bottom: 10px;
    }
  
    ._50-width._5vw-margin {
      width: 75%;
      margin-top: -30px;
    }
  
    ._1-5vw-title {
      margin-top: 7px;
      margin-bottom: 7px;
    }
  
    .absolute-background._50vw {
      height: 100%;
      top: 0;
    }
  
    .m-margin {
      margin-bottom: 30px;
    }
  
    ._100-paragraph {
      font-size: 12px;
    }
  
    .small-posts-left-arrow {
      width: 100px;
      left: -40px;
    }
  
    .small-posts-right-arrow {
      width: 100px;
      right: -40px;
    }
  
    ._2-125vw-text {
      font-size: 14px;
    }
  
    ._3-75vw-title {
      font-size: 24px;
    }
  
    ._3-75vw-title.top-margin {
      margin-top: 7px;
    }
  
    .absolute-image.right-corner {
      bottom: 17.5%;
    }
  
    .absolute-image.left-corner {
      top: 17.5%;
    }
  
    ._2-5vw-text {
      font-size: 16px;
    }
  
    .no-background-image {
      background-size: auto 45%;
    }
  
    ._5vw-title {
      font-size: 32px;
    }
  
    .s-margin {
      margin-bottom: 20px;
    }
  
    .contact-title {
      font-size: 24px;
    }
  
    .l-margin {
      margin-bottom: 40px;
    }
  
    .style-guide-grid {
      grid-row-gap: 90px;
    }
  
    .style-guide-elements-grid {
      grid-row-gap: 60px;
    }
  
    .vertically-centered._10vw-padding {
      padding-bottom: 0;
    }
  
    ._3-25vw-span {
      font-size: 21px;
    }
  
    ._404-wrap {
      width: 60vw;
    }
  
    .licensing-wrap {
      padding-top: 10px;
      padding-bottom: 10px;
    }
  
    ._2-1vw-title {
      font-size: 14px;
    }
  
    .dot {
      width: 5px;
      height: 5px;
    }
  
    .navbar {
      padding-left: 35px;
      padding-right: 35px;
    }
  
    .author-wrap {
      width: 45vw;
    }
  
    .author-title {
      margin-bottom: 13px;
    }
  
    .hide-on-phone {
      display: none;
    }
  
    .text-div {
      width: 100%;
    }
  
    .div-block {
      background-color: #000;
      margin-left: 50%;
    }
  
    .faqs-grid {
      grid-column-gap: 10px;
      grid-row-gap: 10px;
    }
  
    ._1vw-margin {
      margin-bottom: 6px;
    }
  
    .faq-line, .h3-title {
      margin-bottom: 10px;
    }
  
    .medium-icon._1vw-margin {
      height: 12px;
    }
  }
  
  @media screen and (max-width: 479px) {
    .section.no-padding._100vh.old-lace.align-center {
      height: 70vh;
    }
  
    .section.author {
      height: 100vh;
    }
  
    ._3-columns-grid {
      grid-template-columns: 1fr;
    }
  
    .overflow-hidden._20vw-top-margin {
      margin-top: 10px;
    }
  
    ._100-width._110-height.cover {
      padding-right: 20px;
      position: static;
    }
  
    ._100-width._7-5vw-margin.xs-margin {
      margin-top: 0;
    }
  
    ._100-width._12vw-margin {
      margin-top: -70px;
      margin-bottom: 20px;
    }
  
    .text-wrap.center {
      padding-top: 15px;
      padding-left: 10px;
      padding-right: 10px;
    }
  
    .text-wrap.center.max-width {
      max-width: 100%;
    }
  
    .text-wrap.absolute {
      width: 83vw;
    }
  
    .text-wrap.absolute.first {
      top: 80px;
    }
  
    .text-wrap.white-background {
      max-width: 100%;
      padding: 10px;
      right: 2vw;
    }
  
    ._1-125vw-paragraph.licensing.s-margin {
      max-width: 100%;
    }
  
    .featured-blog-post {
      grid-template-columns: 1fr;
    }
  
    ._6-5vw-title.m-margin._45vw-max-width {
      max-width: 100%;
    }
  
    .title-letter {
      font-size: 24px;
    }
  
    ._6vw-title {
      font-size: 36px;
    }
  
    ._4-columns-grid {
      grid-template-columns: 1fr 1fr;
    }
  
    ._2-columns-grid {
      grid-template-columns: 1fr;
    }
  
    ._2-columns-grid._100-width._100-height {
      grid-template-columns: 1fr 1fr;
    }
  
    .split-screen {
      height: 70vh;
    }
  
    .text-column._80px-padding {
      padding-top: 10px;
    }
  
    .background-image-hero {
      background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg"), linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
      background-position: 50%, 0 0;
    }
  
    .slider {
      height: 70vh;
    }
  
    .slider-title {
      max-width: 100%;
      font-size: 36px;
    }
  
    .black.large-padding {
      background-color: var(--white);
      background-image: none;
      padding-top: 70px;
    }
  
    .absolute-pic {
      width: 90%;
    }
  
    .absolute-pic.static-on-phone {
      height: auto;
      position: static;
    }
  
    .absolute-text {
      width: 100%;
    }
  
    .absolute-text.testimonial {
      top: 35px;
    }
  
    ._12vw-title {
      text-align: center;
      font-size: 24vw;
    }
  
    ._12vw-title._13-on-portrait {
      font-size: 13vw;
    }
  
    .full-width-thumbnail {
      height: 60vh;
    }
  
    ._3-5vw-paragraph {
      font-size: 12px;
    }
  
    ._5-columns-grid {
      grid-template-columns: 1fr 1fr;
    }
  
    ._5-columns-grid._8-5vw-margin {
      margin-left: -20px;
    }
  
    ._5-columns-grid._2vw-gap {
      grid-template-columns: 1fr;
    }
  
    ._50-width._2 {
      left: 0;
    }
  
    ._50-width._5vw-margin {
      width: 100%;
      margin-top: -24px;
    }
  
    ._50-width._20vw-margin {
      margin-top: -140px;
    }
  
    .author-info-grid {
      padding: 10px;
    }
  
    .author-column-divider {
      margin-bottom: 10px;
    }
  
    ._1-5vw-title {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  
    .image-based-post {
      min-height: 340px;
      justify-content: space-around;
      display: flex;
    }
  
    ._8-5vw-arrow {
      display: none;
    }
  
    .absolute-background {
      height: 52.5vw;
    }
  
    ._8-columns-grid._2-5vw-gap, ._8-columns-grid._9-6-columns, ._8-columns-grid._10-3-columns {
      grid-row-gap: 8px;
    }
  
    .small-posts-slider {
      overflow: visible;
    }
  
    .small-posts-left-arrow {
      display: none;
    }
  
    .small-posts-mask {
      width: 100%;
      overflow: hidden;
    }
  
    .small-posts-right-arrow {
      display: none;
      left: 45px;
    }
  
    .small-post-slide {
      width: 100%;
    }
  
    .tag {
      padding: 5px 10px;
    }
  
    ._2-125vw-text {
      font-size: 12px;
    }
  
    ._3-75vw-title {
      font-size: 21px;
    }
  
    .hover-circle-wrapper {
      padding: 40px;
    }
  
    .contact-2-columns-grid {
      grid-template-columns: 1fr;
    }
  
    .contact-content {
      grid-row-gap: 15px;
    }
  
    .contact-pic {
      padding-top: 150%;
      position: static;
    }
  
    .absolute-image.right-corner, .absolute-image.left-corner {
      width: 33%;
    }
  
    ._2-5vw-text {
      margin-bottom: 10px;
      font-size: 14px;
    }
  
    .no-background-image {
      background-size: auto 35%;
    }
  
    ._5vw-title {
      font-size: 21px;
    }
  
    .footer-column {
      justify-items: center;
    }
  
    .contact-title {
      font-size: 21px;
    }
  
    .style-guide-links-grid {
      display: none;
    }
  
    .style-guide-grid {
      grid-template-columns: 1fr;
    }
  
    ._7-5vw-margin {
      margin-top: 0;
    }
  
    .testimonial-slider {
      overflow: visible;
    }
  
    ._10vw-margin {
      margin-top: 0;
    }
  
    ._404-wrap {
      width: 100%;
      padding: 40px;
    }
  
    ._404-title {
      font-size: 32px;
    }
  
    .align-horizontally {
      width: 100%;
    }
  
    .navbar {
      padding-left: 20px;
      padding-right: 20px;
    }
  
    .author-pic-large {
      width: 75px;
      height: 75px;
    }
  
    .author-wrap {
      width: 60vw;
    }
  
    .author-title {
      font-size: 30px;
    }
  
    .sticky {
      position: static;
    }
  
    .footer-grid {
      grid-template-columns: 1fr;
    }
  
    .hide-on-portrait {
      display: none;
    }
  
    .contact-h1 {
      color: var(--black);
      font-size: 27px;
    }
  
    .offices-grid {
      grid-template-columns: 1fr;
    }
  
    .div-block {
      margin-left: 0%;
    }
  
    .faqs-grid {
      grid-template-columns: 1fr;
    }
  
    .h3-title {
      font-size: 24px;
    }
  }
  
  #w-node-_11bc5229-2776-55c3-e2a8-2c892dde65d9-2dde65d7 {
    grid-area: span 1 / span 5 / span 1 / span 5;
  }
  
  #w-node-e0facef7-62b4-e65c-6db6-d1c32f1c5bf2-32924b9c, #w-node-e0facef7-62b4-e65c-6db6-d1c32f1c5bf4-32924b9c {
    grid-area: span 1 / span 8 / span 1 / span 8;
  }
  
  #w-node-e0facef7-62b4-e65c-6db6-d1c32f1c5bf9-32924b9c {
    grid-area: 3 / 2 / 4 / 8;
  }
  
  #w-node-_263f32cd-e68b-d426-fc7b-3d40aa5def7d-32924b9c, #w-node-d6656c13-824f-614d-8584-cdf56c81e146-32924b9c {
    grid-area: span 1 / span 8 / span 1 / span 8;
  }
  
  #w-node-_664d36f4-d8a3-c188-8aca-8de0826e76ad-32924b9d {
    grid-area: span 2 / span 3 / span 2 / span 3;
  }
  
  #w-node-_4fa68f2b-cb74-ee9a-67e4-711fadbe76be-32924b9d, #w-node-_17bf4a37-f8fc-fe6b-e673-92554eb8c152-32924b9d, #w-node-_10b4b7e4-6897-9c76-c3dc-a02754f8d951-32924b9d, #w-node-_5b819e2f-a7d6-df9f-82d7-fa37722b864a-32924b9d, #w-node-_48f92270-4220-c36e-b861-7d1d188874c2-32924b9d, #w-node-cdf0b346-43eb-ca98-3663-152b00ddcfa8-32924b9d, #w-node-_7da8c6f9-eb99-77cd-56e6-27dfcfb5a7f8-32924b9d, #w-node-_45bc1244-dcfb-75d7-13e8-e5fdec13eaa6-32924b9d, #w-node-_976df163-b650-f147-1ffa-05d24c9b71f3-32924b9d, #w-node-_456c5169-e999-a855-234a-0776b4f1b598-32924b9d, #w-node-d3b40548-83d4-5e8c-4695-ba32ff565af6-32924b9d, #w-node-dd6c5bdc-a3e1-29a0-50c0-940b406198c3-32924b9d, #w-node-_5d03925b-1a51-ea94-3ab9-9e35dcd84482-32924b9d {
    grid-area: span 2 / span 1 / span 2 / span 1;
  }
  
  #w-node-_7351d822-3ef5-e002-f517-ca9fddb56e4e-32924b9e {
    grid-area: span 1 / span 8 / span 1 / span 8;
  }
  
  #w-node-_9bccf5b2-a490-417f-55f6-a17e507161f9-32924b9e {
    grid-area: span 1 / span 2 / span 1 / span 2;
    align-self: end;
  }
  
  #w-node-_57e391ae-7974-612a-b4d5-7e44d2b1b53f-32924b9e {
    grid-area: 2 / 3 / 3 / 7;
  }
  
  #w-node-_4b6c2356-abe0-c2a3-a586-e5ebc3e9d8b5-32924b9e {
    grid-area: span 1 / span 2 / span 1 / span 2;
    align-self: end;
  }
  
  #w-node-_64f67b40-d476-104a-4283-f91e15160ad8-32924b9e {
    grid-area: span 1 / span 8 / span 1 / span 8;
  }
  
  #w-node-_4bb657bf-7c45-2a75-028d-f924cabeb5e3-32924b9e {
    grid-area: 2 / 3 / 3 / 7;
  }
  
  #w-node-_4fbfbdab-204b-69b8-f74a-3fc95918daa6-32924b9e {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_239cd445-53d6-9c4e-9fb9-2953cb6a5bd1-32924b9e {
    grid-area: 1 / 3 / 2 / 9;
  }
  
  #w-node-_3141b259-0d0a-e7fa-2ccc-d8eee281bdc3-32924b9e {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-bc9b8629-8521-4ebf-22e8-9364f1abb466-32924b9e {
    grid-area: span 1 / span 8 / span 1 / span 8;
  }
  
  #w-node-bc9b8629-8521-4ebf-22e8-9364f1abb468-32924b9e {
    grid-area: 2 / 3 / 3 / 7;
  }
  
  #w-node-_42ddecd8-b73d-dd3b-b811-de6bb75e0fdc-32924b9e {
    grid-area: span 1 / span 4 / span 1 / span 4;
  }
  
  #w-node-aebcee47-1c79-c24c-5560-cf440e1c3649-32924b9e {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_331b23ba-931b-6f82-913b-3330695ce0b4-32924b9e {
    grid-area: 1 / 8 / 2 / 9;
    align-self: center;
  }
  
  #w-node-_6b489770-212a-d31c-096f-54a05ec0421b-32924ba8 {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
  
  #w-node-_6b489770-212a-d31c-096f-54a05ec0421d-32924ba8 {
    grid-area: span 1 / span 2 / span 1 / span 2;
    align-self: center;
  }
  
  #w-node-db70a655-e4d6-a369-66fc-4ecbb2b6e0ce-32924ba9 {
    grid-area: span 1 / span 5 / span 1 / span 5;
  }
  
  #w-node-e91084c0-cd20-5113-86a6-b60c4044be27-32924ba9 {
    grid-area: 1 / 6 / 2 / 7;
    align-self: end;
  }
  
  #w-node-_54a3a190-3fbf-55e7-ad72-ce5a3b2de6c7-32924ba9 {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
  
  #w-node-f2247cc7-6184-b5a5-b535-d440bee46096-32924ba9 {
    grid-area: 1 / 6 / 2 / 9;
  }
  
  #w-node-_11fc0ef2-505d-561f-1f4a-109c96ba3308-32924ba9 {
    grid-area: 2 / 2 / 3 / 4;
  }
  
  #w-node-_32d96503-2097-d523-5309-5e889ae75529-32924ba9 {
    grid-area: 1 / 6 / 2 / 9;
  }
  
  #w-node-_32d96503-2097-d523-5309-5e889ae7552e-32924ba9 {
    grid-area: 1 / 1 / 2 / 4;
  }
  
  #w-node-_32d96503-2097-d523-5309-5e889ae7552f-32924ba9 {
    grid-area: 2 / 7 / 3 / 9;
  }
  
  #w-node-b79e9332-6aef-3b51-49d1-6f87171a4bc1-32924ba9 {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
  
  #w-node-b79e9332-6aef-3b51-49d1-6f87171a4bc6-32924ba9 {
    grid-area: 1 / 6 / 2 / 9;
  }
  
  #w-node-b79e9332-6aef-3b51-49d1-6f87171a4bc7-32924ba9 {
    grid-area: 2 / 2 / 3 / 4;
  }
  
  #w-node-c57adb36-51d2-729b-d659-b245b11ca5c0-32924ba9 {
    grid-area: 1 / 6 / 2 / 9;
  }
  
  #w-node-c57adb36-51d2-729b-d659-b245b11ca5c5-32924ba9 {
    grid-area: 1 / 1 / 2 / 4;
  }
  
  #w-node-c57adb36-51d2-729b-d659-b245b11ca5c6-32924ba9 {
    grid-area: 2 / 7 / 3 / 9;
  }
  
  #w-node-d13d8518-2516-6524-4935-d0aaca06e392-32924bac {
    grid-area: 1 / 3 / 2 / 7;
  }
  
  #w-node-_47823b47-1fe3-910b-76ee-e9dc52d219ab-32924bad, #w-node-_295a3aa2-b899-ad22-d825-3a25f92e3d41-32924bad, #w-node-_3af02c45-90e1-2e14-20ad-478695dc46f3-32924bad, #w-node-_3af02c45-90e1-2e14-20ad-478695dc46f5-32924bad {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_34934be1-d18f-3f1c-abea-cf2c41f1fcae-32924bae {
    grid-area: 1 / 2 / 2 / 5;
  }
  
  #w-node-_26fe8ac5-bedb-c180-11b1-3aa82ff94242-32924bae {
    grid-area: 2 / 1 / 3 / 5;
  }
  
  #w-node-_9fcc30cb-069d-f8e8-01d5-47568d3bb8e5-32924bae {
    grid-area: 1 / 2 / 2 / 5;
  }
  
  #w-node-_7b86563d-82f1-542a-64ff-88a460e29fdf-32924bae {
    grid-area: 2 / 1 / 3 / 4;
  }
  
  #w-node-_8d42f58f-fb06-4068-d665-cc193bc25c4a-32924bae {
    grid-area: 3 / 2 / 4 / 5;
  }
  
  #w-node-_991708f3-7cd1-96ed-ad63-d57bd0b72719-32924bae, #w-node-decf2ee6-74b6-2e20-b721-072bef46cff4-32924bae {
    grid-area: 1 / 2 / 2 / 5;
  }
  
  #w-node-d0acda08-067a-2879-b762-91a12c82435a-32924bb1, #w-node-_1d58cf1e-e3ff-49b6-ac68-2ee53ef9dbda-32924bb1, #w-node-_7609c45d-b3b4-5155-95eb-f954e8cbeb94-32924bb1, #w-node-f82dced9-d922-b604-e2f7-db0d653650e3-32924bb1, #w-node-_7b9cc776-dec3-0631-4f95-5d2bd496c9f4-32924bb1, #w-node-_7b9cc776-dec3-0631-4f95-5d2bd496ca03-32924bb1, #w-node-_29e04cf1-f7f0-1197-d339-1f2698ec2859-32924bb1, #w-node-_29e04cf1-f7f0-1197-d339-1f2698ec2868-32924bb1 {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_044f59e8-d403-821a-05ed-2449d78db1c7-32924bc9, #w-node-_98ddfbfc-6c8a-bea5-aeeb-f9c372b77e0b-32924bc9, #w-node-b4c87754-7b48-f595-1016-b951bbc61775-32924bc9 {
    grid-area: span 1 / span 8 / span 1 / span 8;
  }
  
  #w-node-_0c6d6f80-2340-2a00-0597-3f9c4392bacc-32924bc9 {
    grid-area: span 1 / span 2 / span 1 / span 2;
    align-self: center;
  }
  
  #w-node-_02d30036-3db9-222c-cb64-ef2e9b05c596-32924bc9, #w-node-_43057e7c-9f6b-4994-acf2-2195d37af49b-32924bc9 {
    grid-area: 1 / 4 / 2 / 9;
  }
  
  #w-node-_47fa68fe-1c04-6305-0f49-b271a0cd265e-32924bc9 {
    grid-area: 1 / 1 / 2 / 7;
  }
  
  #w-node-_47fa68fe-1c04-6305-0f49-b271a0cd265f-32924bc9 {
    grid-area: 2 / 9 / 3 / 13;
  }
  
  #w-node-_47fa68fe-1c04-6305-0f49-b271a0cd2660-32924bc9 {
    grid-area: 3 / 5 / 4 / 13;
  }
  
  #w-node-_47fa68fe-1c04-6305-0f49-b271a0cd2661-32924bc9 {
    grid-area: 4 / 1 / 5 / 3;
  }
  
  #w-node-_47fa68fe-1c04-6305-0f49-b271a0cd2662-32924bc9 {
    grid-area: 5 / 7 / 6 / 13;
  }
  
  #w-node-bd790510-9839-4a0b-4e11-0f2916da72f3-32924bcb {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
  
  #w-node-eac4d4b4-0205-5cef-677f-9ebdaf920d1a-32924bcb {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_56a59029-a8e7-ec7d-424b-6411d5f172f3-32924bcb {
    grid-area: span 1 / span 5 / span 1 / span 5;
  }
  
  #w-node-_169a35f7-caf6-3bc6-8935-65efccdf1263-32924bcc {
    grid-area: span 1 / span 4 / span 1 / span 4;
  }
  
  #w-node-_393e4682-c27c-dd01-75d8-7a017f84f7d9-32924bcc {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_9f08f87c-1952-4fce-5933-80d729c53fc4-32924bcc {
    grid-area: span 1 / span 4 / span 1 / span 4;
  }
  
  #w-node-_9f08f87c-1952-4fce-5933-80d729c53fc8-32924bcc {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_3065e0ec-5c6d-9cc8-2be4-2fdad6d3d384-32924bcc {
    grid-area: span 1 / span 4 / span 1 / span 4;
  }
  
  #w-node-_3065e0ec-5c6d-9cc8-2be4-2fdad6d3d388-32924bcc {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_7467bd7a-8069-a04d-0fdb-8ee3e4c3cf11-32924bcc {
    grid-area: span 1 / span 4 / span 1 / span 4;
  }
  
  #w-node-_7467bd7a-8069-a04d-0fdb-8ee3e4c3cf15-32924bcc {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_523b0acf-a5eb-f217-469b-23fb36e134a9-32924bcc {
    grid-area: span 1 / span 4 / span 1 / span 4;
  }
  
  #w-node-_523b0acf-a5eb-f217-469b-23fb36e134ad-32924bcc, #w-node-_76e759bb-da2f-fcaf-0217-b822901fac60-32924bcc {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_76e759bb-da2f-fcaf-0217-b822901fac61-32924bcc {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
  
  #w-node-_76e759bb-da2f-fcaf-0217-b822901fac63-32924bcc {
    grid-area: span 1 / span 2 / span 1 / span 2;
    align-self: center;
  }
  
  #w-node-_76e759bb-da2f-fcaf-0217-b822901fac65-32924bcc, #w-node-_1cb2b863-6f0e-c429-38f0-638b4fd85637-32924bcd, #w-node-_1cb2b863-6f0e-c429-38f0-638b4fd8563d-32924bcd, #w-node-_927fee76-f141-1d41-93cc-30aaa2a82001-32924bcd, #w-node-_949d009c-3979-5008-7ff4-6b02b9493889-32924bcd, #w-node-_2a50622c-c335-3721-5e59-d20b8eb35232-32924bcd, #w-node-_2a50622c-c335-3721-5e59-d20b8eb35236-32924bcd, #w-node-_2a50622c-c335-3721-5e59-d20b8eb35238-32924bcd, #w-node-_2a50622c-c335-3721-5e59-d20b8eb3523a-32924bcd, #w-node-_0e9c533c-eff5-84f3-1916-6265181b617b-32924bcd, #w-node-_0e9c533c-eff5-84f3-1916-6265181b617f-32924bcd {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_8fde6882-73b0-6860-5107-387cc6ae844e-32924bcf {
    grid-area: 1 / 1 / 2 / 4;
  }
  
  #w-node-_63949fa0-333a-a139-b41e-d1a6b6d3bba9-32924bcf {
    grid-area: 1 / 5 / 2 / 8;
  }
  
  #w-node-d33b15b3-9d61-101f-bf2e-7117f53ebf54-32924bcf {
    grid-area: 2 / 2 / 2 / 4;
  }
  
  #w-node-bfa508be-3b67-bc02-8de5-b84e7815311e-32924bcf {
    grid-area: 3 / 6 / 4 / 8;
  }
  
  #w-node-efe9e2dd-d05f-6058-475f-cb15f9122be2-32924bcf {
    grid-area: 4 / 2 / 5 / 5;
  }
  
  #w-node-b445b034-769e-93c8-bf73-43a86d5cd405-32924bcf {
    grid-area: 1 / 1 / 2 / 4;
  }
  
  #w-node-_9eeb83aa-b9aa-4b0b-bd83-a70cda8f42f2-32924bcf {
    grid-area: 2 / 2 / 3 / 9;
  }
  
  #w-node-_9c233d5c-4a09-2270-25d3-c4435c3c9302-32924bcf {
    grid-area: 1 / 1 / 2 / 4;
  }
  
  #w-node-_9c233d5c-4a09-2270-25d3-c4435c3c9304-32924bcf {
    grid-area: 1 / 5 / 2 / 8;
  }
  
  #w-node-_9c233d5c-4a09-2270-25d3-c4435c3c9310-32924bcf {
    grid-area: 2 / 2 / 2 / 4;
  }
  
  #w-node-_9c233d5c-4a09-2270-25d3-c4435c3c931c-32924bcf {
    grid-area: 3 / 6 / 4 / 8;
  }
  
  #w-node-_9c233d5c-4a09-2270-25d3-c4435c3c9328-32924bcf {
    grid-area: 4 / 2 / 5 / 5;
  }
  
  #w-node-_751bd195-890a-09fa-a118-b1b1bcc509cc-32924bcf {
    grid-area: 1 / 1 / 2 / 4;
  }
  
  #w-node-_751bd195-890a-09fa-a118-b1b1bcc509ce-32924bcf {
    grid-area: 2 / 2 / 3 / 9;
  }
  
  #w-node-e5ef9bb5-6a1d-b262-30f1-e343fede0cb0-32924bd0 {
    grid-area: 1 / 1 / 2 / 5;
  }
  
  #w-node-e5ef9bb5-6a1d-b262-30f1-e343fede0cb2-32924bd0 {
    grid-area: 2 / 2 / 3 / 8;
  }
  
  #w-node-e5ef9bb5-6a1d-b262-30f1-e343fede0cb4-32924bd0 {
    grid-area: 3 / 5 / 4 / 9;
  }
  
  #w-node-_0a5ef127-bf3f-b9e6-ec59-d5230c1e9be8-32924bd0 {
    grid-area: 4 / 1 / 5 / 3;
    align-self: end;
  }
  
  #w-node-de932a76-266a-6045-6ffb-4e9ea8a1c335-32924bd0 {
    grid-area: 4 / 5 / 5 / 9;
  }
  
  #w-node-_40d8cde7-9e5a-de83-c19f-eb870694a9ba-32924bd0 {
    grid-area: 1 / 3 / 2 / 5;
  }
  
  #w-node-_2ef2cd5b-206d-4e10-9a5d-834489a5f2b5-32924bd0 {
    grid-area: 1 / 3 / 2 / 5;
    align-self: end;
  }
  
  #w-node-abbd1066-4c4a-bf1e-fe9e-5dd7bf9ef986-32924bd0, #w-node-_812d6af9-d8f6-7624-5a5b-1a4a333c2657-32924bd0, #w-node-_812d6af9-d8f6-7624-5a5b-1a4a333c2660-32924bd0 {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_7ed18286-7f0b-be95-0476-cf6c7031927a-32924be6 {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
  
  #w-node-_3f1864e3-d5f3-5a02-d48a-c29205b8093e-32924be6 {
    grid-area: 1 / 5 / 2 / 9;
  }
  
  #w-node-dbf46b5c-2632-0fc9-34c6-4826b15e35a5-32924be6 {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-dbf46b5c-2632-0fc9-34c6-4826b15e35a6-32924be6 {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
  
  #w-node-dbf46b5c-2632-0fc9-34c6-4826b15e35a8-32924be6 {
    grid-area: span 1 / span 2 / span 1 / span 2;
    align-self: center;
  }
  
  #w-node-dbf46b5c-2632-0fc9-34c6-4826b15e35aa-32924be6 {
    grid-area: span 1 / span 2 / span 1 / span 2;
    justify-self: end;
  }
  
  #w-node-_1995e66e-178f-1c2d-6af0-301f309c904d-32924be6 {
    grid-area: 1 / 1 / 2 / 4;
  }
  
  #w-node-_4a03ec2b-f126-276a-483c-6c18ed53eb80-32924be6 {
    grid-area: 1 / 5 / 2 / 9;
  }
  
  #w-node-_15448e16-99a6-a1b3-7bc0-c278231b255e-32924be7, #w-node-b7820483-57f4-bf96-0267-099cbd9f0eab-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c765-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c76b-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c771-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c777-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c77d-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c783-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c78f-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c789-32924be7 {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4b9-32924be7 {
    grid-area: 1 / 3 / 2 / 7;
  }
  
  #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4bc-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4be-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4c0-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4c2-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4c5-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4c7-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4c9-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4cb-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4ce-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4d0-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4d2-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4d4-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4d7-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4d9-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4db-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4dd-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4e0-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4e2-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4e4-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4e6-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4e9-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4eb-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4ed-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4ef-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4f2-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4f4-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4f6-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4f8-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4fb-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4fd-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4ff-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a501-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a504-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a506-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a508-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a50a-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a50d-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a50f-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a511-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a513-32924be7 {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_052ad7e2-df2a-4f70-4f9e-be8e67d2ab3d-32924be9 {
    grid-area: 1 / 1 / 3 / 3;
  }
  
  #w-node-_745c28a9-ab5b-059a-1e87-4418d9c71058-32924be9 {
    grid-area: 4 / 2 / 6 / 4;
  }
  
  #w-node-fbc4a601-84ac-9208-f749-aa3d88b26755-32924be9 {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-fbc4a601-84ac-9208-f749-aa3d88b26756-32924be9 {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
  
  #w-node-fbc4a601-84ac-9208-f749-aa3d88b26758-32924be9 {
    grid-area: span 1 / span 2 / span 1 / span 2;
    align-self: center;
  }
  
  #w-node-_9671cd17-6efc-64ad-2971-685f8f5dc65b-32924bea, #w-node-_345d0173-a947-35c4-6fe8-dfb438d279e3-32924bea {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-_10fd8016-5897-64ec-29ba-3608f81287d4-32924bea {
    grid-area: 2 / 2 / 3 / 3;
  }
  
  #w-node-_4e858536-ac24-9d37-47b7-26613736e701-32924bea {
    grid-area: 2 / 1 / 3 / 2;
  }
  
  #w-node-_57cd6b84-a937-9e00-0062-8e1b22dbf34c-32924bea {
    grid-area: 1 / 2 / 2 / 3;
  }
  
  #w-node-_307a2039-6a54-cc83-4c6b-ee7ccf791b14-32924bea {
    grid-area: 2 / 2 / 3 / 3;
  }
  
  #w-node-e17330e3-1591-ce2b-bd59-2c72641e9e4f-32924bec {
    grid-area: span 1 / span 4 / span 1 / span 4;
  }
  
  #w-node-b13e118f-2f3c-3367-1cb2-d53b7f428eb4-32924bec {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
  
  #w-node-_1b7896dd-da84-914f-b9b4-6390ba228447-32924bec {
    grid-area: 2 / 4 / 3 / 5;
  }
  
  #w-node-_381d987f-987b-4727-bee2-ec1194d51464-32924bec {
    grid-area: 2 / 4 / 3 / 5;
    align-self: end;
  }
  
  #w-node-_9671cd17-6efc-64ad-2971-685f8f5dc65b-32924bed, #w-node-_345d0173-a947-35c4-6fe8-dfb438d279e3-32924bed {
    grid-area: span 1 / span 8 / span 1 / span 8;
  }
  
  #w-node-fcabf38f-9dab-c873-7034-d856a2592917-32924bed, #w-node-e830d92a-f0e7-b98d-636d-ab5592d5f90e-32924bed {
    grid-area: span 1 / span 4 / span 1 / span 4;
  }
  
  #w-node-b920c872-7094-c67a-a83b-1d27013af24d-32924bed {
    grid-area: 1 / 3 / 2 / 9;
  }
  
  #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfc7-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfcd-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfd3-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfd9-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfdf-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfe5-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfeb-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cff1-32924bed {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
  
  #w-node-b35e3d39-83f4-e971-a6d8-bfd6a77a99db-32924bed {
    grid-area: 1 / 3 / 2 / 9;
  }
  
  #w-node-_2f11f227-e83f-f360-8cce-9ae687222b3d-32924bee {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
  
  #w-node-_2f11f227-e83f-f360-8cce-9ae687222b3f-32924bee {
    grid-area: span 1 / span 2 / span 1 / span 2;
    align-self: center;
  }
  
  #w-node-_81cb2592-7a2a-85b0-21aa-eb3d537cd1a8-32924bef {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
  
  #w-node-_81cb2592-7a2a-85b0-21aa-eb3d537cd1aa-32924bef {
    grid-area: span 1 / span 2 / span 1 / span 2;
    align-self: center;
  }
  
  #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50113-32924bf0 {
    grid-area: 1 / 1 / 2 / 4;
  }
  
  #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50115-32924bf0 {
    grid-area: 1 / 5 / 2 / 9;
  }
  
  #w-node-cfa77251-b4d9-b73d-b840-2f11aaf5011c-32924bf0 {
    grid-area: span 1 / span 8 / span 1 / span 8;
  }
  
  #w-node-cfa77251-b4d9-b73d-b840-2f11aaf5011e-32924bf0, #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50122-32924bf0 {
    grid-area: span 1 / span 4 / span 1 / span 4;
  }
  
  #w-node-cfa77251-b4d9-b73d-b840-2f11aaf5012a-32924bf0 {
    grid-area: span 1 / span 8 / span 1 / span 8;
  }
  
  #w-node-cfa77251-b4d9-b73d-b840-2f11aaf5012d-32924bf0, #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50131-32924bf0 {
    grid-area: span 1 / span 4 / span 1 / span 4;
  }
  
  #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50139-32924bf0 {
    grid-area: span 1 / span 8 / span 1 / span 8;
  }
  
  #w-node-cfa77251-b4d9-b73d-b840-2f11aaf5013b-32924bf0, #w-node-cfa77251-b4d9-b73d-b840-2f11aaf5013f-32924bf0 {
    grid-area: span 1 / span 4 / span 1 / span 4;
  }
  
  #w-node-f1200acc-f30b-2b47-1874-545c1b79f56f-32924bf0 {
    grid-area: 8 / 5 / 9 / 9;
  }
  
  #w-node-cfa77251-b4d9-b73d-b840-2f11aaf5014d-32924bf0 {
    grid-area: 9 / 5 / 10 / 9;
  }
  
  #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50155-32924bf0 {
    grid-area: 10 / 5 / 11 / 9;
  }
  
  #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50163-32924bf0 {
    grid-area: 1 / 1 / 2 / 4;
  }
  
  #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50165-32924bf0 {
    grid-area: 2 / 2 / 3 / 9;
  }
  
  #w-node-_7b677a61-a48e-448c-bd63-11ef04328c6b-32924bf1 {
    grid-area: span 1 / span 3 / span 1 / span 3;
  }
  
  #w-node-_7b677a61-a48e-448c-bd63-11ef04328c6d-32924bf1 {
    grid-area: span 1 / span 2 / span 1 / span 2;
    align-self: center;
  }
  
  #w-node-c6c97d3e-2c40-9cd0-ca60-8e18ee6c016f-32924bf9 {
    grid-area: 1 / 3 / 2 / 7;
  }
  
  @media screen and (max-width: 991px) {
    #w-node-_4bb657bf-7c45-2a75-028d-f924cabeb5e3-32924b9e, #w-node-bc9b8629-8521-4ebf-22e8-9364f1abb468-32924b9e {
      grid-column: 2 / 8;
    }
  
    #w-node-aebcee47-1c79-c24c-5560-cf440e1c3649-32924b9e {
      grid-column: span 3 / span 3;
    }
  
    #w-node-_54a3a190-3fbf-55e7-ad72-ce5a3b2de6c7-32924ba9 {
      grid-column: span 4 / span 4;
    }
  
    #w-node-_11fc0ef2-505d-561f-1f4a-109c96ba3308-32924ba9 {
      grid-column-end: 5;
    }
  
    #w-node-_32d96503-2097-d523-5309-5e889ae75529-32924ba9 {
      grid-column-start: 5;
    }
  
    #w-node-_32d96503-2097-d523-5309-5e889ae7552f-32924ba9 {
      grid-column-start: 6;
    }
  
    #w-node-b79e9332-6aef-3b51-49d1-6f87171a4bc1-32924ba9 {
      grid-column: span 4 / span 4;
    }
  
    #w-node-b79e9332-6aef-3b51-49d1-6f87171a4bc7-32924ba9 {
      grid-column-end: 5;
    }
  
    #w-node-c57adb36-51d2-729b-d659-b245b11ca5c0-32924ba9 {
      grid-column-start: 5;
    }
  
    #w-node-c57adb36-51d2-729b-d659-b245b11ca5c6-32924ba9 {
      grid-column-start: 6;
    }
  
    #w-node-_56a59029-a8e7-ec7d-424b-6411d5f172f3-32924bcb {
      grid-column: span 3 / span 3;
    }
  
    #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50122-32924bf0, #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50131-32924bf0, #w-node-cfa77251-b4d9-b73d-b840-2f11aaf5013f-32924bf0 {
      grid-column: span 8 / span 8;
    }
  
    #w-node-f1200acc-f30b-2b47-1874-545c1b79f56f-32924bf0 {
      grid-area: 11 / 4 / 12 / 6;
    }
  
    #w-node-cfa77251-b4d9-b73d-b840-2f11aaf5014d-32924bf0 {
      grid-area: 13 / 3 / 14 / 7;
    }
  
    #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50155-32924bf0 {
      grid-area: 12 / 4 / 13 / 6;
    }
  
    #w-node-c6c97d3e-2c40-9cd0-ca60-8e18ee6c016f-32924bf9 {
      grid-column: 2 / 8;
    }
  }
  
  @media screen and (max-width: 767px) {
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23a4-32924b99 {
      grid-area: span 1 / span 2 / span 1 / span 2;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23a6-32924b99 {
      grid-area: span 1 / span 4 / span 1 / span 4;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23aa-32924b99 {
      grid-area: 1 / 4 / 2 / 5;
    }
  
    #w-node-_664d36f4-d8a3-c188-8aca-8de0826e76ad-32924b9d, #w-node-_4fa68f2b-cb74-ee9a-67e4-711fadbe76be-32924b9d {
      grid-column: span 4 / span 4;
    }
  
    #w-node-_17bf4a37-f8fc-fe6b-e673-92554eb8c152-32924b9d, #w-node-_10b4b7e4-6897-9c76-c3dc-a02754f8d951-32924b9d, #w-node-_5b819e2f-a7d6-df9f-82d7-fa37722b864a-32924b9d, #w-node-_48f92270-4220-c36e-b861-7d1d188874c2-32924b9d, #w-node-cdf0b346-43eb-ca98-3663-152b00ddcfa8-32924b9d, #w-node-_7da8c6f9-eb99-77cd-56e6-27dfcfb5a7f8-32924b9d, #w-node-_45bc1244-dcfb-75d7-13e8-e5fdec13eaa6-32924b9d, #w-node-_976df163-b650-f147-1ffa-05d24c9b71f3-32924b9d, #w-node-_456c5169-e999-a855-234a-0776b4f1b598-32924b9d, #w-node-d3b40548-83d4-5e8c-4695-ba32ff565af6-32924b9d, #w-node-dd6c5bdc-a3e1-29a0-50c0-940b406198c3-32924b9d, #w-node-_5d03925b-1a51-ea94-3ab9-9e35dcd84482-32924b9d {
      grid-column: span 2 / span 2;
    }
  
    #w-node-df71ec98-a508-71df-980f-4f26016f6bd0-32924bad {
      grid-area: 1 / 2 / 2 / 3;
    }
  
    #w-node-_56a59029-a8e7-ec7d-424b-6411d5f172f3-32924bcb {
      grid-column: span 5 / span 5;
    }
  
    #w-node-_76e759bb-da2f-fcaf-0217-b822901fac60-32924bcc {
      grid-column: span 4 / span 4;
    }
  
    #w-node-_76e759bb-da2f-fcaf-0217-b822901fac65-32924bcc {
      grid-area: 1 / 1 / 2 / 5;
    }
  
    #w-node-dbf46b5c-2632-0fc9-34c6-4826b15e35a5-32924be6 {
      grid-column: span 4 / span 4;
    }
  
    #w-node-dbf46b5c-2632-0fc9-34c6-4826b15e35aa-32924be6 {
      grid-area: 1 / 1 / 2 / 5;
      justify-self: start;
    }
  
    #w-node-fbc4a601-84ac-9208-f749-aa3d88b26755-32924be9 {
      grid-column: span 3 / span 3;
    }
  
    #w-node-fbc4a601-84ac-9208-f749-aa3d88b2675a-32924be9 {
      grid-area: 1 / 1 / 2 / 4;
    }
  
    #w-node-fcabf38f-9dab-c873-7034-d856a2592917-32924bed {
      grid-column: span 5 / span 5;
    }
  
    #w-node-e830d92a-f0e7-b98d-636d-ab5592d5f90e-32924bed {
      grid-area: 4 / 3 / 5 / 9;
    }
  
    #w-node-f1200acc-f30b-2b47-1874-545c1b79f56f-32924bf0 {
      grid-column: 3 / 7;
    }
  
    #w-node-c6c97d3e-2c40-9cd0-ca60-8e18ee6c016f-32924bf9 {
      grid-column: 1 / 9;
    }
  }
  
  @media screen and (max-width: 479px) {
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23a4-32924b99 {
      grid-column: span 1 / span 1;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23a6-32924b99 {
      grid-area: span 1 / span 2 / span 1 / span 2;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23aa-32924b99 {
      grid-area: 1 / 2 / 2 / 3;
    }
  
    #w-node-_664d36f4-d8a3-c188-8aca-8de0826e76ad-32924b9d, #w-node-_4fa68f2b-cb74-ee9a-67e4-711fadbe76be-32924b9d {
      grid-column: span 2 / span 2;
    }
  
    #w-node-_4bb657bf-7c45-2a75-028d-f924cabeb5e3-32924b9e {
      grid-column: 1 / 9;
    }
  
    #w-node-_4fbfbdab-204b-69b8-f74a-3fc95918daa6-32924b9e {
      grid-column: span 8 / span 8;
    }
  
    #w-node-_239cd445-53d6-9c4e-9fb9-2953cb6a5bd1-32924b9e {
      grid-row: 2 / 3;
      grid-column-start: 1;
    }
  
    #w-node-_3141b259-0d0a-e7fa-2ccc-d8eee281bdc3-32924b9e {
      grid-column: span 1 / span 1;
    }
  
    #w-node-bc9b8629-8521-4ebf-22e8-9364f1abb468-32924b9e {
      grid-column: 1 / 9;
    }
  
    #w-node-_42ddecd8-b73d-dd3b-b811-de6bb75e0fdc-32924b9e {
      grid-column: span 8 / span 8;
    }
  
    #w-node-aebcee47-1c79-c24c-5560-cf440e1c3649-32924b9e {
      grid-column: span 4 / span 4;
    }
  
    #w-node-_331b23ba-931b-6f82-913b-3330695ce0b4-32924b9e {
      grid-row: 2 / 3;
      grid-column-start: 5;
      align-self: start;
    }
  
    #w-node-_6b489770-212a-d31c-096f-54a05ec0421d-32924ba8 {
      grid-column: span 3 / span 3;
    }
  
    #w-node-_6b489770-212a-d31c-096f-54a05ec0421f-32924ba8 {
      grid-area: 1 / 1 / 2 / 2;
    }
  
    #w-node-db70a655-e4d6-a369-66fc-4ecbb2b6e0ce-32924ba9 {
      grid-column: span 8 / span 8;
    }
  
    #w-node-e91084c0-cd20-5113-86a6-b60c4044be27-32924ba9 {
      grid-row: 2 / 3;
    }
  
    #w-node-_54a3a190-3fbf-55e7-ad72-ce5a3b2de6c7-32924ba9 {
      grid-column: span 8 / span 8;
    }
  
    #w-node-f2247cc7-6184-b5a5-b535-d440bee46096-32924ba9 {
      grid-column-start: 1;
    }
  
    #w-node-_11fc0ef2-505d-561f-1f4a-109c96ba3308-32924ba9 {
      grid-area: 3 / 1 / 4 / 9;
    }
  
    #w-node-_32d96503-2097-d523-5309-5e889ae75529-32924ba9 {
      grid-row: 2 / 3;
      grid-column-start: 1;
    }
  
    #w-node-_32d96503-2097-d523-5309-5e889ae7552e-32924ba9 {
      grid-column-end: 9;
    }
  
    #w-node-_32d96503-2097-d523-5309-5e889ae7552f-32924ba9 {
      grid-row: 3 / 4;
      grid-column-start: 1;
    }
  
    #w-node-b79e9332-6aef-3b51-49d1-6f87171a4bc1-32924ba9 {
      grid-column: span 8 / span 8;
    }
  
    #w-node-b79e9332-6aef-3b51-49d1-6f87171a4bc6-32924ba9 {
      grid-column-start: 1;
    }
  
    #w-node-b79e9332-6aef-3b51-49d1-6f87171a4bc7-32924ba9 {
      grid-area: 3 / 1 / 4 / 9;
    }
  
    #w-node-c57adb36-51d2-729b-d659-b245b11ca5c0-32924ba9 {
      grid-row: 2 / 3;
      grid-column-start: 1;
    }
  
    #w-node-c57adb36-51d2-729b-d659-b245b11ca5c5-32924ba9 {
      grid-column-end: 9;
    }
  
    #w-node-c57adb36-51d2-729b-d659-b245b11ca5c6-32924ba9 {
      grid-row: 3 / 4;
      grid-column-start: 1;
    }
  
    #w-node-_34934be1-d18f-3f1c-abea-cf2c41f1fcae-32924bae {
      grid-column: 1 / 3;
    }
  
    #w-node-_26fe8ac5-bedb-c180-11b1-3aa82ff94242-32924bae {
      grid-column-end: 3;
    }
  
    #w-node-_9fcc30cb-069d-f8e8-01d5-47568d3bb8e5-32924bae, #w-node-_7b86563d-82f1-542a-64ff-88a460e29fdf-32924bae, #w-node-_8d42f58f-fb06-4068-d665-cc193bc25c4a-32924bae {
      grid-area: span 1 / span 2 / span 1 / span 2;
    }
  
    #w-node-_991708f3-7cd1-96ed-ad63-d57bd0b72719-32924bae {
      grid-column: 1 / 3;
    }
  
    #w-node-_47fa68fe-1c04-6305-0f49-b271a0cd2662-32924bc9 {
      grid-column-start: 5;
    }
  
    #w-node-bd790510-9839-4a0b-4e11-0f2916da72f3-32924bcb, #w-node-eac4d4b4-0205-5cef-677f-9ebdaf920d1a-32924bcb, #w-node-_56a59029-a8e7-ec7d-424b-6411d5f172f3-32924bcb {
      grid-column: span 1 / span 1;
    }
  
    #w-node-_76e759bb-da2f-fcaf-0217-b822901fac63-32924bcc {
      grid-column: span 3 / span 3;
    }
  
    #w-node-_63949fa0-333a-a139-b41e-d1a6b6d3bba9-32924bcf {
      grid-column-end: 9;
    }
  
    #w-node-d33b15b3-9d61-101f-bf2e-7117f53ebf54-32924bcf {
      grid-column-start: 1;
    }
  
    #w-node-bfa508be-3b67-bc02-8de5-b84e7815311e-32924bcf {
      grid-column-end: 9;
    }
  
    #w-node-efe9e2dd-d05f-6058-475f-cb15f9122be2-32924bcf {
      grid-column-start: 1;
    }
  
    #w-node-_9c233d5c-4a09-2270-25d3-c4435c3c9304-32924bcf {
      grid-column-end: 9;
    }
  
    #w-node-_9c233d5c-4a09-2270-25d3-c4435c3c9310-32924bcf {
      grid-column-start: 1;
    }
  
    #w-node-_9c233d5c-4a09-2270-25d3-c4435c3c931c-32924bcf {
      grid-column-end: 9;
    }
  
    #w-node-_9c233d5c-4a09-2270-25d3-c4435c3c9328-32924bcf {
      grid-column-start: 1;
    }
  
    #w-node-_40d8cde7-9e5a-de83-c19f-eb870694a9ba-32924bd0, #w-node-_2ef2cd5b-206d-4e10-9a5d-834489a5f2b5-32924bd0, #w-node-_5827f229-73e7-920b-58cd-5a31c71a5102-32924bd0, #w-node-ef514b43-8ced-06b8-4db9-563888fcc1d7-32924bd0, #w-node-abbd1066-4c4a-bf1e-fe9e-5dd7bf9ef986-32924bd0 {
      grid-area: span 1 / span 2 / span 1 / span 2;
    }
  
    #w-node-_7ed18286-7f0b-be95-0476-cf6c7031927a-32924be6 {
      grid-column: span 8 / span 8;
    }
  
    #w-node-_3f1864e3-d5f3-5a02-d48a-c29205b8093e-32924be6 {
      grid-column-start: 1;
    }
  
    #w-node-dbf46b5c-2632-0fc9-34c6-4826b15e35a5-32924be6 {
      grid-column: span 2 / span 2;
    }
  
    #w-node-dbf46b5c-2632-0fc9-34c6-4826b15e35a6-32924be6, #w-node-dbf46b5c-2632-0fc9-34c6-4826b15e35a8-32924be6 {
      grid-column: span 1 / span 1;
    }
  
    #w-node-dbf46b5c-2632-0fc9-34c6-4826b15e35aa-32924be6 {
      grid-area: 1 / 1 / 2 / 3;
    }
  
    #w-node-_1995e66e-178f-1c2d-6af0-301f309c904d-32924be6 {
      grid-column-end: 9;
    }
  
    #w-node-_4a03ec2b-f126-276a-483c-6c18ed53eb80-32924be6 {
      grid-row: 2 / 3;
      grid-column-start: 1;
    }
  
    #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c765-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c76b-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c771-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c777-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c77d-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c783-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c78f-32924be7, #w-node-_039ffc2e-c38f-d2d8-b14d-0fdf1286c789-32924be7 {
      grid-column: span 4 / span 4;
    }
  
    #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4b9-32924be7 {
      grid-column-start: 1;
    }
  
    #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4bc-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4be-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4c0-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4c2-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4c5-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4c7-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4c9-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4cb-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4ce-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4d0-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4d2-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4d4-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4d7-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4d9-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4db-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4dd-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4e0-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4e2-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4e4-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4e6-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4e9-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4eb-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4ed-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4ef-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4f2-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4f4-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4f6-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4f8-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4fb-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4fd-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a4ff-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a501-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a504-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a506-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a508-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a50a-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a50d-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a50f-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a511-32924be7, #w-node-db54b2c2-0fff-700a-8c6a-86edeca5a513-32924be7 {
      grid-column: span 4 / span 4;
    }
  
    #w-node-_052ad7e2-df2a-4f70-4f9e-be8e67d2ab3d-32924be9, #w-node-_9baa9f70-238c-bfb8-f81a-be7436fa1618-32924be9, #w-node-_04d17ca8-b358-66c1-d58d-4496952819cf-32924be9, #w-node-df9b3b44-b1ba-e836-cea2-59689f434bb9-32924be9, #w-node-ade739f9-f8f9-bf2d-e1a6-8222ab397c65-32924be9, #w-node-a57ba31f-325b-b4d2-e6f8-fbe514211db4-32924be9, #w-node-_72fd4776-01eb-3f63-e755-95173b9f96e2-32924be9 {
      grid-area: span 1 / span 3 / span 1 / span 3;
    }
  
    #w-node-_745c28a9-ab5b-059a-1e87-4418d9c71058-32924be9 {
      grid-area: span 2 / span 3 / span 2 / span 3;
    }
  
    #w-node-ffe2d1e5-78f0-7ffb-b23a-089e22753d89-32924be9, #w-node-c68f9d92-a6d9-2780-a2dd-538bab4af6e7-32924be9, #w-node-c491d52c-f854-18dc-e5e5-5b4ee9227e84-32924be9, #w-node-_4962097b-1b26-a9c9-d432-039f93095273-32924be9 {
      grid-area: span 1 / span 3 / span 1 / span 3;
    }
  
    #w-node-fbc4a601-84ac-9208-f749-aa3d88b26758-32924be9 {
      grid-column: span 3 / span 3;
    }
  
    #w-node-_9671cd17-6efc-64ad-2971-685f8f5dc65b-32924bea, #w-node-_345d0173-a947-35c4-6fe8-dfb438d279e3-32924bea {
      grid-column: span 1 / span 1;
    }
  
    #w-node-_10fd8016-5897-64ec-29ba-3608f81287d4-32924bea, #w-node-_307a2039-6a54-cc83-4c6b-ee7ccf791b14-32924bea {
      grid-column-start: 1;
    }
  
    #w-node-e17330e3-1591-ce2b-bd59-2c72641e9e4f-32924bec, #w-node-b13e118f-2f3c-3367-1cb2-d53b7f428eb4-32924bec {
      grid-column: span 2 / span 2;
    }
  
    #w-node-_1b7896dd-da84-914f-b9b4-6390ba228447-32924bec {
      grid-area: 4 / 1 / 5 / 3;
    }
  
    #w-node-_381d987f-987b-4727-bee2-ec1194d51464-32924bec {
      grid-column: 1 / 3;
    }
  
    #w-node-fcabf38f-9dab-c873-7034-d856a2592917-32924bed {
      grid-column: span 8 / span 8;
    }
  
    #w-node-e830d92a-f0e7-b98d-636d-ab5592d5f90e-32924bed, #w-node-b920c872-7094-c67a-a83b-1d27013af24d-32924bed {
      grid-column-start: 1;
    }
  
    #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfc7-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfcd-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfd3-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfd9-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfdf-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfe5-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cfeb-32924bed, #w-node-_9a4f1385-96a1-c776-275d-efc28c40cff1-32924bed {
      grid-column: span 4 / span 4;
    }
  
    #w-node-b35e3d39-83f4-e971-a6d8-bfd6a77a99db-32924bed {
      grid-column-start: 1;
    }
  
    #w-node-_2f11f227-e83f-f360-8cce-9ae687222b3f-32924bee {
      grid-column: span 3 / span 3;
    }
  
    #w-node-_2f11f227-e83f-f360-8cce-9ae687222b41-32924bee {
      grid-area: 1 / 1 / 2 / 2;
    }
  
    #w-node-_81cb2592-7a2a-85b0-21aa-eb3d537cd1aa-32924bef {
      grid-column: span 3 / span 3;
    }
  
    #w-node-_81cb2592-7a2a-85b0-21aa-eb3d537cd1ac-32924bef {
      grid-area: 1 / 1 / 2 / 2;
    }
  
    #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50115-32924bf0 {
      grid-row: 2 / 3;
      grid-column-start: 1;
    }
  
    #w-node-f1200acc-f30b-2b47-1874-545c1b79f56f-32924bf0 {
      grid-area: 12 / 2 / 13 / 8;
    }
  
    #w-node-cfa77251-b4d9-b73d-b840-2f11aaf5014d-32924bf0 {
      grid-column: 2 / 8;
    }
  
    #w-node-cfa77251-b4d9-b73d-b840-2f11aaf50155-32924bf0 {
      grid-row: 14 / 15;
    }
  
    #w-node-_7b677a61-a48e-448c-bd63-11ef04328c6d-32924bf1 {
      grid-column: span 3 / span 3;
    }
  
    #w-node-_7b677a61-a48e-448c-bd63-11ef04328c6f-32924bf1 {
      grid-area: 1 / 1 / 2 / 2;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23a4-32924bf8 {
      grid-column: span 1 / span 1;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23aa-32924bf8 {
      grid-area: 1 / 2 / 2 / 3;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23ae-32924bf8 {
      grid-column: span 1 / span 1;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23b4-32924bf8 {
      grid-area: 1 / 2 / 2 / 3;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23b8-32924bf8 {
      grid-column: span 1 / span 1;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23c6-32924bf8 {
      grid-area: 1 / 2 / 2 / 3;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23ca-32924bf8 {
      grid-column: span 1 / span 1;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23d2-32924bf8 {
      grid-area: 1 / 2 / 2 / 3;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23d6-32924bf8 {
      grid-column: span 1 / span 1;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23dc-32924bf8 {
      grid-area: 1 / 2 / 2 / 3;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23e0-32924bf8 {
      grid-column: span 1 / span 1;
    }
  
    #w-node-_4c8b7c1c-3384-8491-f07f-59cebc6c23e6-32924bf8 {
      grid-area: 1 / 2 / 2 / 3;
    }
  }
  
  @font-face {
    font-family: 'Newsreader Display';
    src: url('https://uploads-ssl.webflow.com/65209054b1acf26632924b4f/65209054b1acf26632924bd9_NewsreaderDisplay-Italic.woff2') format('woff2');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }
  @font-face {
    font-family: 'Newsreader Display';
    src: url('https://uploads-ssl.webflow.com/65209054b1acf26632924b4f/65209054b1acf26632924bc2_NewsreaderDisplay-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Newsreader Display';
    src: url('https://uploads-ssl.webflow.com/65209054b1acf26632924b4f/65209054b1acf26632924bbf_NewsreaderDisplay-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Newsreader Display';
    src: url('https://uploads-ssl.webflow.com/65209054b1acf26632924b4f/65209054b1acf26632924bc3_NewsreaderDisplay-LightItalic.woff2') format('woff2');
    font-weight: 300;
    font-style: italic;
    font-display: swap;
  }