try{
    const Mesa = require('./Mesa');
    const Menu = require('./Menu');
    const listaDeMesas = require('./listaDeMesas');
} catch(e) {}



test("Agregar mesa a la lista de mesas", ()=>{
    const listaDeMesas = new mesa()
    const mesas = new nuevaMesa(numero);

    listaDeMesas.agregar(nuevaMesa);

    expect(listaDeMesas.lista.length).toBe(1);
});

