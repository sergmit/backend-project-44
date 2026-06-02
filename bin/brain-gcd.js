#!/usr/bin/env node

import { createGame, GameType } from '../src/cli.js'

const game = createGame(GameType.BrainGcd)
game.start()
