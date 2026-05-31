#!/usr/bin/env node
import readlineSync from "readline-sync";
import BrainEvenApp from "../src/BrainEvenApp.js";

const app = new BrainEvenApp()

app.start();
