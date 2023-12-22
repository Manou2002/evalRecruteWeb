import { Injectable } from '@angular/core';

//import {RegisterPayload} from "../../payloads/register-payload";
import { url_path } from "../../../constants/app.constant";
import { ApiRequestService } from '../utils/api-request.service';
import { Recruteur } from '../../models/recruteurs';


@Injectable({
  providedIn: 'root'
})
export class RecruteurApiService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this._apiRequestService.getByPage(url_path.RECRUTEUR_BASE);
  }

  getById(id: number) {
    return this._apiRequestService.get(url_path.RECRUTEUR_BASE + '/id' + id);
  }

  save(data: Recruteur) {
    return this._apiRequestService.post({endpoint: url_path.RECRUTEUR_BASE, data: JSON.stringify(data)})
  }

  update(data: Recruteur) {
    return this._apiRequestService.put({endpoint: url_path.RECRUTEUR_BASE+'/id', data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this._apiRequestService.delete(url_path.RECRUTEUR_BASE + "/id" + id)
  }
}
