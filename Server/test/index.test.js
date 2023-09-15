const app = require('../src/app.js');
const users = require('../src/utils/users.js')
const session = require('supertest');
const agent = session(app);

xdescribe('Test de RUTAS', () => {
    it('Responde con status: 200', async() => {
        await agent.get('/rickandmorty/character/1').expect(200);
    })

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async() => {
        const response = await agent.get('/rickandmorty/character/1');
        expect(response.body).toHaveProperty('id')
        expect(response.body).toHaveProperty('name')
        expect(response.body).toHaveProperty('species')
        expect(response.body).toHaveProperty('gender')
        expect(response.body).toHaveProperty('status')
        expect(response.body).toHaveProperty('origin')
        expect(response.body).toHaveProperty('image')
    })

    it('Si hay un error responde con status: 404', async() => {
        await agent.get('/rickandmorty/character/1000').expect(404);
        await agent.get('/rickandmorty/character/5653465').expect(404);
        await agent.get('/rickandmorty/character/3443').expect(404);
    })
    
    it('Si hay un error responde con status: 500', async() => {
        await agent.get('/rickandmorty/character/y').expect(500);
        await agent.get('/rickandmorty/character/[]').expect(500);
        await agent.get('/rickandmorty/character/true').expect(500);
        await agent.get('/rickandmorty/character/=]').expect(500);
    })
})

describe('GET /rickandmorty/login', () => {
    it('al pasar los datos de acceso correctos debe devolver un objeto con una propiedad access igual a true y un estatus 200', async() => {
        const email = 'lautibunko@gmail.com'
        const password = 43244847
        const response = await agent.get(`/rickandmorty/login?email=${email}&password=${password}`).expect(200);
        expect(response.body).toHaveProperty('access', true)
    })

    it('al pasar los datos de acceso incorrectos debe devolver un objeto con una propiedad access igual a true y un estatus 401', async() => {
        const email = 'prueba@gmail.com'
        const password = 4324484
        const response = await agent.get(`/rickandmorty/login?email=${email}&password=${password}`).expect(401);
        expect(response.body).toHaveProperty('access', false)
    })
})