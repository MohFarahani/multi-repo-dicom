# Database Repository

This repository contains the database models and migrations for the DICOM application. It uses Sequelize as the ORM with TypeScript support.

## Models

The following models are included:

- Patient
- Study
- Series
- File
- Modality

## Setup

1. Install dependencies:
```bash
yarn install
```

2. Create a `.env` file with the following variables:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASS=your_password
DB_NAME=your_database
DB_PORT=3306
```

3. Build the project:
```bash
yarn build
```

## Database Operations

### Migrations

Run migrations:
```bash
yarn db:migrate
```

Undo last migration:
```bash
yarn db:migrate:undo
```

### Seeds

Run all seeders:
```bash
yarn db:seed
```

Undo all seeds:
```bash
yarn db:seed:undo
```

## Development

Start the development server:
```bash
yarn dev
```

## Build

Build the project:
```bash
yarn build
```

Clean build files:
```bash
yarn clean
```

## Usage

To use this package in your project:

1. Install the package:
```bash
yarn add @your-org/db-repo
```

2. Import and use the models:
```typescript
import { Patient, Study, Series, File, Modality } from '@your-org/db-repo';

// Example: Create a new patient
const patient = await Patient.create({
  patientName: 'John Doe',
  patientId: '12345',
  patientBirthDate: new Date('1990-01-01'),
  patientSex: 'M'
});
```

## License

MIT
