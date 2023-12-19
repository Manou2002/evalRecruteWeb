import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { environnement } from '../../../environnement/environnement';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) {
  }

  get(endpoint: string) {
    console.log("endpoint: " +`${environnement.BASE_URL_API}${endpoint}`)
    return this.http.get(`${environnement.BASE_URL_API}${endpoint}`, {headers: this.httpHeader()});
  }

  getByPage(endpoint: string, page:number=0, size:number=10) {
    console.log("endpoint: " +`${environnement.BASE_URL_API}${endpoint}`)
    return this.http.get(`${environnement.BASE_URL_API}${endpoint}`, {headers: this.httpHeader(), params:this.httpParams({page:page, size:size})});
  }

  post(parameter: Required<{ endpoint: string, data: any }>) {
    console.log("endpoint: " + `${environnement.BASE_URL_API}${parameter.endpoint}` + ", data: " + parameter.data)
    return this.http.post(`${environnement.BASE_URL_API}${parameter.endpoint}`, parameter.data, {headers: this.httpHeader()});
  }

  put(parameter: Required<{ endpoint: string, data: any }>) {
    console.log("endpoint: " + `${environnement.BASE_URL_API}${parameter.endpoint}` + ", data: " + parameter.data)
    return this.http.put(`${environnement.BASE_URL_API}${parameter.endpoint}`, parameter.data, {headers: this.httpHeader()});
  }

  delete(endpoint: string) {
    console.log("endpoint: " +`${environnement.BASE_URL_API}${endpoint}`)
    return this.http.delete(`${environnement.BASE_URL_API}${endpoint}`, {headers: this.httpHeader()});
  }

  httpHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Accept': '*',
    });
  }

  httpParams(params:any){
    return new HttpParams({
      fromObject: params
    })
  }
}
