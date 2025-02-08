import { sequelize } from '../config/connection';
import { Patient } from './Patient';
import { Study } from './Study';
import { Series } from './Series';
import { File } from './File';
import { Modality } from './Modality';

// Define associations
Patient.hasMany(Study, {
  foreignKey: 'idPatient',
  as: 'studies'
});

Study.belongsTo(Patient, {
  foreignKey: 'idPatient',
  as: 'patient'
});

Study.hasMany(Series, {
  foreignKey: 'idStudy',
  as: 'series'
});

Series.belongsTo(Study, {
  foreignKey: 'idStudy',
  as: 'study'
});

Series.hasMany(File, {
  foreignKey: 'idSeries',
  as: 'files'
});

File.belongsTo(Series, {
  foreignKey: 'idSeries',
  as: 'series'
});

Series.belongsTo(Modality, {
  foreignKey: 'idModality',
  as: 'modality'
});

Modality.hasMany(Series, {
  foreignKey: 'idModality',
  as: 'series'
});

export {
  sequelize,
  Patient,
  Study,
  Series,
  File,
  Modality
}; 