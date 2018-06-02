## Quick start

1. Clone this repo using `git clone https://github.com/koasol/Koa.May18.FrontEnd.git`
2. Navigate to folder.<br />
3. Run `npm install`


  ### Option 1 (quick and easy)
  1. Run `yarn start`

  
  ### Option 2 (slow and better) (DONT USE THIS YET)
  1. Run `npm install pm2 -g`<br />
  2a. For FrontEnd: Run `pm2 start server --watch`<br />
  2b. For BackEnd: Run `pm2 start app.js --watch`<br />
  3a. Run `pm2 list` to see all processes<br />
  3b. Run `pm2 monit` to see detailed processes<br />

Open browser and navigate to `http://localhost:2425`

Now you're ready to rumble!
