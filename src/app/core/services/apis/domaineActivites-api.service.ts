import { Injectable } from '@angular/core';

//import {RegisterPayload} from "../../payloads/register-payload";
import { url_path } from "../../../constants/app.constant";
import { ApiRequestService } from '../utils/api-request.service';
import { DomaineActivite } from '../../models/domaineActivites';


@Injectable({
  providedIn: 'root'
})
export class DomaineActiviteApiService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this._apiRequestService.getByPage(url_path.DOMAINE_ACTIVITE_BASE);
  }

  getById(id: number) {
    return this._apiRequestService.get(url_path.DOMAINE_ACTIVITE_BASE + '/' + id);
  }

  save(data: DomaineActivite) {
    return this._apiRequestService.post({endpoint: url_path.DOMAINE_ACTIVITE_BASE, data: JSON.stringify(data)})
  }

  update(data: DomaineActivite) {
    return this._apiRequestService.put({endpoint: url_path.DOMAINE_ACTIVITE_BASE+'/'+data.id, data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this._apiRequestService.delete(url_path.DOMAINE_ACTIVITE_BASE + "/" + id)
  }
}
