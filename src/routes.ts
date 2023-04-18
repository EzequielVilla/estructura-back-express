import express from "express";

/**
 * this is boilerplate code for a route
 * here you should add all the routes
 * of the API
 */

const Router = express.Router();

Router.get("/", (req, res) => {
    res.send("Hello World!");
});

export { Router };
