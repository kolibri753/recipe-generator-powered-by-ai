
# Recipe Generator using Artificial Intelligence
(in refactoring stage)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Methodology and Metrics](#methodology-and-metrics)
  - [Key Metrics](#key-metrics)
    - [Task Duration Boundaries](#task-duration-boundaries)
    - [Size-Oriented Metrics](#size-oriented-metrics)
    - [Function-Oriented Metrics](#function-oriented-metrics)
  - [Development Process Overview](#development-process-overview)
    - [Tasks and Functions](#tasks-and-functions)
    - [Time Boundaries for Task Execution](#time-boundaries-for-task-execution)
  - [Size-Oriented Metrics](#size-oriented-metrics)
  - [Function-Oriented Metrics](#function-oriented-metrics)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Hugging Face API Key](#hugging-face-api-key)
- [License](#license)

## Overview

This project is a recipe generator developed as part of the "Software Construction" project. The software targets the food sector, aiming to simplify daily cooking routines for users. The recipe generator utilizes artificial intelligence to provide personalized recipes based on user preferences, available ingredients, and dietary restrictions.

## Features

- Generate personalized recipes based on user preferences.
- Specify desired and undesired ingredients.
- Search for recipes based on available ingredients and dietary restrictions.
- Receive step-by-step instructions and recommendations for cooking.

## Methodology and Metrics

The project adopts the Agile methodology with a Kanban framework and incorporates elements of SCRUM techniques. The development process is managed in Notion, utilizing real-time collaboration for task lists and a Kanban board to streamline workflows.

### Key Metrics

#### Task Duration Boundaries
- Calculate the early and late start times for task resolution.
- Determine the early and late finish times for task resolution.
- Evaluate task reserves.

#### Size-Oriented Metrics
- Measure the software product and the development process using size-oriented metrics.

#### Function-Oriented Metrics
- Measure the software product and the development process using function-oriented metrics.

### Development Process Overview

The development process for the Recipe Generator follows a structured approach. The project started on September 22, 2023. The recommended expenditure distribution rule for the project is 40-20-40, with the following decisions:
- 31% of expenditures for analysis and design.
- 21% for coding.
- 48% for testing, debugging, and deployment.

#### Tasks and Functions
For the project implementation, the following tasks and software functions need to be addressed:

- **РІК (User Interface Development):** Develop the user interface according to the designer's layout.
- **ГОТШІ (Answer Generation from AI):** Generate and receive responses from the AI.
- **ПЗРП (Sharing and Saving Functionality):** Implement the function to share and save program results.
- **МВП (Mobile Version):** Develop a mobile version of the program.
- **КІК (User Instruction Set):** Implement a comprehensive set of user instructions.

### Time Boundaries for Task Execution

Calculate the early and late start times, early and late finish times, and task reserves for each function according to the project's Gantt chart. The table below presents the time boundaries for each function.

| Function | Early Start Time | Late Start Time | Early Finish Time | Late Finish Time | Task Reserves |
|----------|------------------|-----------------|-------------------|------------------|---------------|
| РІК      | 1                | 4               | 3                 | 6                | 1             |
| ГОТШІ    | 4                | 5               | 6                 | 8                | 1             |
| ПЗРП     | 7                | 9               | 9                 | 13               | 2             |
| МВП      | 10               | 14              | 12                | 17               | 1             |
| КІК      | 13               | 18              | 15                | 21               | 1             |

### Size-Oriented Metrics

Metrics are measured using size-oriented metrics. The following table represents the size-oriented metrics based on the firm's metric basis.

| Function | LOC     | PIT_ВАРТІСТЬ [$] | ПРОДУКТИВ [LOC/люд.-міс.] | 
|----------|---------|------------------|---------------------------|
| РІК      | 2000    | 20840            | 1.84                      |
| ГОТШІ    | 1500    | 8150             | 4.52                      |
| ПЗРП     | 500     | 15390            | 0.68                      |
| МВП      | 900     | 20690            | 0.84                      |
| КІК      | 900     | 8310             | 3.12                      |

### Function-Oriented Metrics

Function-oriented metrics are calculated using FP indicators. The FP is determined using expert ratings, resulting in metrics as follows:

- FP: 227 units
- Productivity: 413 FP/люд.-міс.
- Expenditure: 0.55 люд.-міс
- Expenditure: $2475

These metrics provide valuable insights into the development process and the efficiency of the Recipe Generator project.

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/kolibri753/recipe-generator.git

# Navigate to the project directory
cd recipe-generator

# Install dependencies
npm install
```
### Hugging Face API Key
To utilize the full potential of the recipe generator, you need to obtain a Hugging Face API key. Follow these steps to get your key:

Visit Hugging Face and sign up for an account.
Navigate to your account settings to find your API key.
Copy the API key and add it to your project's configuration file.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
