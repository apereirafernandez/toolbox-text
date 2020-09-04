const chai = require("chai");
const request = require("supertest");
const url = "http://localhost:4000";

describe("Toolbox text generator", function () {
  it("should show a list", async () => {
    const res = await request(url).get("/texts");

    chai.expect(res.statusCode).to.equal(200);
  });

  it("should create text", async () => {
    const textObject = {
      name: "textTest",
    };

    const res = await request(url)
      .post("/texts/create")
      .send(textObject)
      .set("Accept", "application/json");
    chai.expect(res.statusCode).to.equal(200);
    chai.expect(res.body.name).to.equal("textTest");
    await request(url).delete("/texts/delete/" + res.body.id);
  });
});
