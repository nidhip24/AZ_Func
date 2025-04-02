const httpFunction = require('../hello');
const context = require('../testing/defaultContext');

test('Http trigger should return known text', async () => {
    const request = {
        query: { name: 'Test' }
    };

    await httpFunction(context, request);

    expect(context.log.mock.calls.length).toBe(1);
    expect(context.res.body).toEqual('Hello, Test!');
});

test('Http trigger should return default text', async () => {
    const request = {
        query: {}
    };

    await httpFunction(context, request);

    expect(context.res.body).toEqual('Hello, world!');
});