
import { Injectable } from '@angular/core';

//import {RegisterPayload} from "../../payloads/register-payload";
import { url_path } from "../../../constants/app.constant";
import { ApiRequestService } from '../utils/api-request.service';
import { Offre } from '../../models/offres';


@Injectable({
  providedIn: 'root'
})
export class OffreApiService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this._apiRequestService.getByPage(url_path.OFFRE_BASE);
  }

  getById(id: number) {
    return this._apiRequestService.get(url_path.OFFRE_BASE + '/id' + id);
  }

  save(data: Offre) {
    return this._apiRequestService.post({endpoint: url_path.OFFRE_BASE, data: JSON.stringify(data)})
  }

  update(data: Offre) {
    return this._apiRequestService.put({endpoint: url_path.OFFRE_BASE+'/id', data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this._apiRequestService.delete(url_path.OFFRE_BASE + "/id" + id)
  }
}
