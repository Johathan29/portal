const navegation = [
  {
    title: 'Inicio',
    path: '/',
    component: 'quienessomos',
    children: [],
    ubicacion: 1,
  },
  {
    title: 'Nosotros',
    path: 'nosotros',
    ubicacion: 1,
    children: [
      {
        titlechild: 'quienes somos',
        path: 'quienes-somos',
      },

      {
        titlechild: 'base legal',
        path: 'base-legal',
      },
    ],
  },
  {
    title: 'Política de privacidad',
    path: 'politica-de-privacidad',
    component: 'Politica-de-privacidad',
    children: [],
    ubicacion: 0,
  },
  {
    title: 'Política de privacidad',
    path: 'politica-de-privacidad',
    component: 'Politica-de-privacidad',
    children: [],
    ubicacion: 1,
  },
];
export default {
  name: 'navegation',
  value: navegation,
};
