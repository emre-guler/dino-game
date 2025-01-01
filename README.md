# Dino Game

A simple yet engaging dinosaur runner game inspired by Chrome's offline T-Rex game. Built with Cocos Creator.

## Description

This is a side-scrolling runner game where you control a dinosaur that must jump over incoming cacti. The game features progressive difficulty, with obstacles moving faster as your score increases.

## Features

- Simple one-button gameplay
- Progressive difficulty system
- Score tracking
- Collision detection
- Smooth jumping mechanics
- Endless runner gameplay

## Controls

- Press **SPACE** to make the dinosaur jump
- Avoid colliding with cacti
- Try to achieve the highest score possible

## Technical Details

The game is built using:
- Cocos Creator
- TypeScript
- Object-oriented programming principles

### Core Components

- `dino.ts`: Handles dinosaur movement and jump mechanics
- `cactus.ts`: Manages obstacle behavior and collision
- `game.ts`: Controls game flow, scoring, and spawning mechanics

## Setup and Development

1. Clone the repository
2. Open the project in Cocos Creator
3. Build and run the project

## Project Structure

```
dino-game/
├── assets/
│   ├── scripts/
│   │   ├── dino.ts
│   │   ├── cactus.ts
│   │   └── game.ts
│   └── Game.fire
├── settings/
└── project.json
```

## Game Mechanics

- The dinosaur has a base position and can jump to a specified height
- Cacti move from right to left at increasing speeds
- Score increases as you successfully avoid obstacles
- Game ends upon collision with a cactus