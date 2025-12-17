const fastify = require('fastify')({ logger: true });

fastify.get('/healthgateway', async function () {
  return {
    service: process.env.SERVICE_NAME,
    commit: process.env.DEPLOY_COMMIT,
    status: 'ok',
    timestamp: new Date().toISOString()
  };
});

fastify.get('/healthGW1', async function () {
  return {
    service: "Checking services v1...",
    commit: process.env.DEPLOY_COMMIT,
    status: 'ok',
    timestamp: new Date().toISOString()
  };
});

const port = process.env.PORT || 8080;
fastify.listen({ port, host: '0.0.0.0' }, err => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
