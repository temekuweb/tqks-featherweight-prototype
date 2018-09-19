# tqks-featherweight-prototype
Quasar Feathers Structured Conversation

A Simple experiment in Structured Conversation.

### Background
Given that this platform relies on both Feathers.js and Quasar-Framework, it's useful to install both as follows<br/>
* npm install -g @feathersjs/cli
* npm install -g quasar-cli

### Building
Two terminals. 
* Root: npm install
* /api: npm install
### Running 
* Root: quasar dev
* /api: npm run dev

### Production Mode
```
npm install -g pm2;

quasar build;
pm2 start ecosystem.config.js;
```

### Docker
```
docker build -t handle/tqfw:tag   .
docker run -p 3000:80 handle/tqfw:tag
```

### Environmental Overrides
Pass the following env vars to override initial behavior
```
IS_PRIVATE_PORTAL=false,
REQUIRES_INVITE=false,
ADMIN_EMAIL="sue@sixpack.com"
```

### Other than Localhost
* /config/index.js proxyTable target must reflect the domain, not localhost
* /src/api.js socket must reflect the domain, not localhost

Made from [quasar-feathers-tutorial](https://github.com/claustres/quasar-feathers-tutorial)
