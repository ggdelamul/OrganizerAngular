import { effect, Injectable, resource, signal } from '@angular/core';
import { IUser } from '../Interfaces/IUser';
import { httpResource } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {
    effect(() => {
      console.log(`${this.baseURL}/${this.userId()}`);
    });
  }

  baseURL = 'http://localhost:3000/user';

  usersResources = resource({
    loader: async (): Promise<IUser[]> => {
      return (await fetch(this.baseURL)).json();
    },
  });

  userId = signal<string | undefined>('');

  setUserId(id: string | undefined) {
    this.userId.set(id);
  }

  getOneUserResources = resource({
    loader: async (): Promise<IUser | undefined> => {
      const id = this.userId();

      if (!id) return undefined;

      return (await fetch(`${this.baseURL}/${id}`)).json();
    },
  });

  async addUser(newUser: IUser) {
    try {
      const response = await fetch(`${this.baseURL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error(`Erreur HTTP ! statut : ${response.status}`);
      }

      const data = await response.json();
      console.log('Utilisateur ajouté avec succès :', data);
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
    }
  }
}
