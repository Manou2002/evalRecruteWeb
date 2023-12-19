import { Injectable } from '@angular/core';

//import {RegisterPayload} from "../../payloads/register-payload";
import { url_path } from "../../../constants/app.constant";
import { ApiRequestService } from '../utils/api-request.service';
import { Poste } from '../../models/postes';


@Injectable({
  providedIn: 'root'
})
export class PosteApiService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this._apiRequestService.getByPage(url_path.POSTE_BASE);
  }

  getById(id: number) {
    return this._apiRequestService.get(url_path.POSTE_BASE + '/id' + id);
  }

  save(data: Poste) {
    return this._apiRequestService.post({endpoint: url_path.POSTE_BASE, data: JSON.stringify(data)})
  }

  update(data: Poste) {
    return this._apiRequestService.put({endpoint: url_path.POSTE_BASE+'/id', data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this._apiRequestService.delete(url_path.POSTE_BASE + "/id" + id)
  }
}
