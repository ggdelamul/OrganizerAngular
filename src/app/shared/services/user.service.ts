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

  //by id
  userId = signal<string | null>(null);
  setUserId(id: string | null) {
    this.userId.set(id);
    return this.userId;
  }

  // getOneUserResources = resource({
  //   loader: async (): Promise<IUser | null> => {
  //     const id = this.userId();

  //     if (!id) return null;

  //     return (await fetch(`${this.baseURL}/${id}`)).json();
  //   },
  // });

  getOneUserResources = httpResource<IUser | undefined>(() => {
    const UserId = this.userId();
    if (!UserId) return undefined;
    return `${this.baseURL}/${UserId}`;
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

  async deleteOneUser(user: string | null) {
    try {
      const response = await fetch(`${this.baseURL}/${user}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! statut : ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(`Error lors de la requête : ${error}`);
    }
  }
}
