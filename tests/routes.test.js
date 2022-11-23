const request = require("supertest");
const app = require("../index.js");

describe("User API", () => {
  it("should show all users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toEqual(200);
  });
  it("should add user", async () => {
    const res = await request(app).post("/users").send({
      firstName: "Rhandall",
      lastName: "Timtiman",
      email: "test@gmail.com",
      address: "test address",
      phoneNumber: "092093029",
      postCode: "1980",
      userName: "TestUser",
      password: "password",
    });
    expect(res.statusCode).toEqual(200);
  });
  it("should update user", async () => {
    const res = await request(app).patch("/users/1").send({
      firstName: "Rhandall",
      lastName: "Timtiman",
    });
    expect(res.statusCode).toEqual(200);
  });
  it("should get user", async () => {
    const res = await request(app).get("/users/1");
    expect(res.statusCode).toEqual(200);
  });
  it("should delete user", async () => {
    const res = await request(app).delete("/users/1");
    expect(res.statusCode).toEqual(200);
  });
});
