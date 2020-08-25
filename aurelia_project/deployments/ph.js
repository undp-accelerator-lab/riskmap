export default {
  id: 'ph',
  name: 'mapakalamidad',
  height_units: 'cm',
  supported_languages: [
    { key: 'en', name: 'English', code: 'EN' },
    { key: 'id', name: 'Bahasa', code: 'BI' }
  ],
  map: {
    'instance_regions': {
      'QuezonCity': {
        'region': 'PH-QC',
        'bounds': { 'sw': [14.027, 120.015], 'ne': [15.303, 121.677] },
        'center': [14.49, 120.57]
      },
      'Pampanga': {
        'region': 'PH-PG',
        'bounds': { 'sw': [14.027, 120.015], 'ne': [15.303, 121.677] },
        'center': [14.49, 120.57]
      }
    },
    'default_region': {
      'region': 'manila',
      'bounds': {
        'sw': [14.027, 120.015], // [ymin , xmin]
        'ne': [15.303, 121.677] // [ymax, xmax]
      },
      'center': [14.49, 120.57]
    },
    'initial_load': ['QuezonCity', 'Pampanga'],
    'sub_regions': {
      'Pampanga': { 'province': 'Pampanga', 'center': [14.49, 120.57] },
      'QuezonCity': { 'province': 'QuezonCity', 'center': [14.49, 120.57] }
    },
    'region_center': [14.49, 120.57],
    'start_city_center': [14.49, 120.57],
    'starting_zoom': 8.5,
    'minimum_zoom': 8
  }
};
