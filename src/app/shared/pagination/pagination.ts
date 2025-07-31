// import { signal } from '@angular/core';
// import { IUser } from '../Interfaces/IUser';

// export function userPagination(
//   fullData: IUser[] | undefined,
//   page: number
// ): IUser[] {
//   const limit: number = 10;

//   let offset: number = (page - 1) * limit;

//   //   const paginatedData = signal([]);

//   const paginatedData: IUser[] | undefined = [];
//   for (let i = 0; i < limit; i++) {
//     if (fullData) {
//       paginatedData.push(fullData[offset + i]);
//     }
//   }

//   return paginatedData;
// }
