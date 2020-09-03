export default {
  id: 'ph',
  name: 'mapakalamidad',
  height_units: 'cm',
  supported_languages: [
    { key: 'en', name: 'English', code: 'EN' },
    { key: 'tl', name: 'Tagalog', code: 'TL' }
  ],
  map: {
    'instance_regions': {
      'QuezonCity': {
        'region': 'PH-QC',
        'bounds': { 'sw': [12.027, 118.015], 'ne': [17.303, 123.677] },
        'center': [14.8, 121.107]
      },
      'Pampanga': {
        'region': 'PH-PG',
        'bounds': { 'sw': [12.027, 118.015], 'ne': [17.303, 123.677] },
        'center': [14.8, 121.107]
      }
    },
    'default_region': {
      'region': 'manila',
      'bounds': {
        'sw': [14.027, 120.015], // [ymin , xmin]
        'ne': [15.303, 121.677] // [ymax, xmax]
      },
      'center': [14.8, 121.107]
    },
    'initial_load': ['QuezonCity', 'Pampanga'],
    'sub_regions': {
      'Pampanga': { 'province': 'Pampanga', 'center': [14.8, 121.107] },
      'QuezonCity': { 'province': 'QuezonCity', 'center': [14.8, 121.107] }
    },
    'region_center': [14.8, 121.107],
    'start_city_center': [14.8, 121.107],
    'starting_zoom': 8.75,
    'minimum_zoom': 8
  }
};
