## Quick start

1. Clone this repo using `git clone https://github.com/koasol/Koa.May18.FrontEnd.git`
2. Navigate to folder.<br />
3. Run `npm install`
4. Run `yarn start`

Open browser and navigate to `http://localhost:2425`

Now you're ready to rumble!

## Structure
App (base) handles `Route` and spawns the correct page according to URL. It also contains all common functionality (i.e. footer, header, notfoundpage). Each subpage handles all components under its own page.

### App (base)
    |-index.js
    |-style.css
  #### Homepage (subpage)
      |-index.js
      |-style.css
  #### Product (subpage)
      |-index.js
      |-style.css
  #### Contact (subpage)
      |-index.js
      |-style.css

