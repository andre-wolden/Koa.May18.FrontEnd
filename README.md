## Quick start

1. Clone this repo using `git clone https://github.com/koasol/Koa.May18.FrontEnd.git`
2. Navigate to folder.<br />
3. Run `npm install`

<dl>
  <dt>Option 1 (quick and easy)</dt>
  <dd>1. Run `yarn start`</dd>
</dl>
<dl>
  <dt>Option 2 (slow and better)</dt>
  <dd>1. Run `npm install pm2 -g`</dd>
  <dd>2a. For FrontEnd: Run `pm2 start server --watch`</dd>
  <dd>2b. For BackEnd: Run `pm2 start app.js --watch`</dd>
  <dd>3a. Run `pm2 list` to see all processes</dd>
  <dd>3b. Run `pm2 monit` to see detailed processes</dd>
</dl>

4. Open browser and navigate to `http://localhost:2425`

Now you're ready to rumble!
