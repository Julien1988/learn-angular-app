export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'machine à laver',
      status: 'Off',
    },
    {
      id: 2,
      name: 'ordinateur',
      status: 'Off',
    },
    {
      id: 3,
      name: 'ps5',
      status: 'On',
    },
  ];

  getAppareilById(id: number) {
    const appareil = this.appareils.find((appareilObject) => {
      return appareilObject.id === id;
    });
    return appareil;
  }

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
