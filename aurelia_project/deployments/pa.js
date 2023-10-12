export default {
  id: 'pa',
  name: 'mapeatudesastre',
  height_units: 'cm',
  supported_languages: [
    { key: 'es', name: 'Spanish', code: 'ES' }
  ],
  map: {
    'instance_regions': {
      'Panama': {
        'region': '08',
        'bounds': { 'sw': [-79.70, 8.18], 'ne': [-78.06, 9.50] },
        'center': [9.10, -79.51]
      }
    },
    'default_region': {
      'region': 'panama',
      'bounds': {
        'sw': [-79.70, 8.18], // [ymin , xmin]
        'ne': [-78.06, 9.50] // [ymax, xmax]
      },
      'center': [9.10, -79.51]
    },
    'initial_load': [],
    'sub_regions': {
      'Panama': { 'province': 'Panama', 'center': [9.09, -79.42] },
      'san miguelito': { 'province': 'Panama', 'center': [9.05, -79.49] }
    },
    'region_center': [9.10, -79.51],
    'start_city_center': [9.10, -79.51],
    'starting_zoom': 8.75,
    'minimum_zoom': 8
  }
};