import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
}


// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class SharedService {
//   private userUpdatedSource = new Subject<any>();

//   userUpdated$ = this.userUpdatedSource.asObservable();

//   updateUser(user: any) {
//     this.userUpdatedSource.next(user);
//   }
// }
