import type { Vessel } from '../domains/vessel/types';

export const vessels: Vessel[] = [
  {
    id: 'container-ship',
    name: 'Rijn Container',
    type: 'container',
    label: 'Containerschip',
    description: 'Vervoert zeecontainers tussen Rotterdam, Duitsland en het achterland.',
    image: {
      src: '/assets/vessels/container-ship.jpg',
      alt: 'Containerschip in de haven van Rotterdam',
      credit: 'Frans Berkelaar / Wikimedia Commons',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Container_ship_-_One_Aquila_-_Port_of_Rotterdam_(48813786172).jpg',
    },
    maxSpeedKmh: 15,
    capacityLabel: '208 TEU',
    capacityTonnes: 3200,
    costPerKmEuros: 42,
  },
  {
    id: 'tanker-ship',
    name: 'Caland Tanker',
    type: 'tanker',
    label: 'Tankschip',
    description: 'Vervoert vloeistoffen zoals olie, chemicalien en brandstoffen.',
    image: {
      src: '/assets/vessels/tanker-ship.jpg',
      alt: 'Binnenvaarttanker bij de petroleumhaven',
      credit: 'BoH / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Inland_tanker_Vlissingen2.JPG',
    },
    maxSpeedKmh: 13,
    capacityLabel: '2.450 m3',
    capacityTonnes: 2100,
    costPerKmEuros: 55,
  },
  {
    id: 'dry-cargo-ship',
    name: 'Maas Bulk',
    type: 'dry-cargo',
    label: 'Drogeladingschip',
    description: 'Vervoert bulkgoederen zoals zand, grind, kolen, veevoer en staal.',
    image: {
      src: '/assets/vessels/dry-cargo-ship.jpg',
      alt: 'Nederlands drogeladingschip op de Maas',
      credit: 'Marc Ryckaert / Wikimedia Commons',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Veronieke_ship_R05.jpg',
    },
    maxSpeedKmh: 12,
    capacityLabel: '1.850 ton',
    capacityTonnes: 1850,
    costPerKmEuros: 31,
  },
  {
    id: 'push-boat',
    name: 'Duwcombinatie Noord',
    type: 'push-boat',
    label: 'Duwboot',
    description: 'Duwt een of meerdere bakken voort, vaak met zware bulkgoederen.',
    image: {
      src: '/assets/vessels/push-boat.jpg',
      alt: 'Duwboot met bak op het Amsterdam-Rijnkanaal',
      credit: 'Wikimedia Commons',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Bryan_-_ENI_06105041_pushing_barge_Slinge_-_ENI_02334956,_Amsterdam-Rijn_kanaal,_pic3.JPG',
    },
    maxSpeedKmh: 10,
    capacityLabel: '4.800 ton',
    capacityTonnes: 4800,
    costPerKmEuros: 68,
  },
];
