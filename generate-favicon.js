import sharp from 'sharp';

sharp('public/favicon.svg')
  .resize(32, 32)
  .toFormat('ico')
  .toFile('public/favicon.ico')
  .then(() => console.log('Favicon created successfully'))
  .catch(err => console.error('Error creating favicon:', err));
