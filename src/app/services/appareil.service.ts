export class AppareilService {
  appareils = [
    {
      name: 'machine à laver',
      status: 'Off',
    },
    {
      name: 'ordinateur',
      status: 'Off',
    },
    {
      name: 'ps5',
      status: 'On',
    },
  ];

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'On';
    }
  }
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'Off';
    }
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'On';
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'Off';
  }
}
