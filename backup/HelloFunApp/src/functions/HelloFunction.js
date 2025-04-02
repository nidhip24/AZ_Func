const { app } = require('@azure/functions');

async function helloHandler(request, context) {
    context.log(`Http function processed request for url "${request.url}"`);
    const name = request.query.get('name') || await request.text() || 'world';
    return { body: `Hello, ${name}!` };
};

app.http('HelloFunction', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: helloHandler
});

module.exports = { helloHandler };
