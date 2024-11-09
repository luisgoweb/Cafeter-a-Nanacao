const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  it("Obtener un 200 y un array al llamar a GET /cafes", async () => {
    const response = await request(server).get("/cafes").send();
    const status = response.statusCode;
    expect(status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("Obtener un error 404 al intentar eliminar un café que no existe", async () => {
    const jwt = "token";
    const id = 999; // id que no existe
    const response = await request(server)
      .delete(`/cafes/${id}`)
      .set("Authorization", jwt)
      .send();
    expect(response.statusCode).toBe(404);
  });

  it("Agregar un nuevo café mediante POST /cafes", async () => {
    const id = Math.floor(Math.random() * 999);
    const cafe = { id, nombre: "Mockaccino blanco" };
    const response = await request(server).post("/cafes").send(cafe);
    expect(response.statusCode).toBe(201);
    expect(response.body).toContainEqual(cafe);
  });

  it("Obtener un error 400 al intentar actualizar un café con un id de parámetro incorrecto mediante PUT /cafes", async () => {
    const idParam = 1; // id existente
    const cafe = { id: 2, nombre: "Café irlandés" }; // id diferente al idParam
    const response = await request(server).put(`/cafes/${idParam}`).send(cafe);
    expect(response.statusCode).toBe(400);
  });
});
