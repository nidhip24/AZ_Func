const { helloHandler } = require('../functions/HelloFunction');

describe('HelloFunction', () => {
    it('should return "Hello, TestUser!" when name provided in query', async () => {
        const mockContext = {
            log: jest.fn(),
            done: jest.fn()
        };
        
        const mockRequest = {
            method: 'GET',
            query: new Map([['name', 'TestUser']]),
            url: 'http://localhost/api/HelloFunction',
            text: jest.fn().mockResolvedValue('')
        };

        const response = await helloHandler(mockRequest, mockContext);
        
        expect(response.body).toBe('Hello, TestUser!');
        expect(mockContext.log).toHaveBeenCalledWith(
            'Http function processed request for url "http://localhost/api/HelloFunction"'
        );
    });

    it('should return "Hello, world!" when no name provided', async () => {
        const mockContext = {
            log: jest.fn()
        };
        
        const mockRequest = {
            method: 'GET',
            query: new Map(),
            url: 'http://localhost/api/HelloFunction',
            text: jest.fn().mockResolvedValue('')
        };

        const response = await helloHandler(mockRequest, mockContext);
        expect(response.body).toBe('Hello, world!');
    });
});