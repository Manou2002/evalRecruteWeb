import { Injectable } from '@angular/core';

//import {RegisterPayload} from "../../payloads/register-payload";
import { url_path } from "../../../constants/app.constant";
import { ApiRequestService } from '../utils/api-request.service';
import { Candidat } from '../../models/candidats';


@Injectable({
  providedIn: 'root'
})
export class CandidatApiService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this._apiRequestService.getByPage(url_path.CANDIDAT_BASE);
  }

  getById(id: number) {
    return this._apiRequestService.get(url_path.CANDIDAT_BASE + '/id' + id);
  }

  save(data: Candidat) {
    return this._apiRequestService.post({endpoint: url_path.CANDIDAT_BASE, data: JSON.stringify(data)})
  }

  update(data: Candidat) {
    return this._apiRequestService.put({endpoint: url_path.CANDIDAT_BASE+'/id', data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this._apiRequestService.delete(url_path.CANDIDAT_BASE + "/id" + id)
  }
}
