import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://swapi.co/api/';

  constructor(private http: HttpClient) { }

  findType(type: string, elementsCount: number) {

  const totalPages = Math.floor(elementsCount / 10) + 1;
  const randomPage = Math.floor(Math.random() * (totalPages - 1) + 1);


  return this.http.get(this.apiUrl + type + '/?page=' + randomPage).
    pipe(map(data => {
    const randomPageData = data['results'];
    const maxPosition = (data['results'].length) - 1;
    const randomPosition = Math.floor(Math.random() * ((maxPosition + 1) - 0)) + 0;

    return data['results'][randomPosition];
  }));
  }
}
export class SidebarMenuService {
    visible: boolean ;
    constructor() {
      this.visible = false;
    }

    showSidebar() {
      this.visible = true;
    }
}
