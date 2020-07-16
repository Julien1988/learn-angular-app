import { Subject } from 'rxjs/Subject';

export class AppareilService {
  appareilSubject = new Subject<any[]>();

  private appareils = [
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

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

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
    this.emitAppareilSubject();
  }
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'Off';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'On';
    this.emitAppareilSubject();
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'Off';
    this.emitAppareilSubject();
  }
}
