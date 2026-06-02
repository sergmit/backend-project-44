#!/usr/bin/env node

import { createGame, GameType } from '../src/cli.js'

const app = createGame(GameType.BrainCalc)
app.start()
