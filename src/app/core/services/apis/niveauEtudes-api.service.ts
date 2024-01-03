import { Injectable } from '@angular/core';
import { ApiRequestService } from '../utils/api-request.service';
import { NiveauEtudes } from '../../models/niveau-etudes';
import { url_path } from '../../../constants/app.constant';

@Injectable({
  providedIn: 'root'
})
export class NiveauEtudesApiService {

  constructor(private _apiRequestService: ApiRequestService) { 

  }

  
  getAll() {
    return this._apiRequestService.getByPage(url_path.NIVEAU_ETUDE_BASE);
  }

  getById(id: number) {
    return this._apiRequestService.get(url_path.NIVEAU_ETUDE_BASE + '/' + id);
  }

  save(data: NiveauEtudes) {
    return this._apiRequestService.post({endpoint: url_path.NIVEAU_ETUDE_BASE, data: JSON.stringify(data)})
  }

  update(data: NiveauEtudes) {
    return this._apiRequestService.put({endpoint: url_path.NIVEAU_ETUDE_BASE+'/'+data.id, data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this._apiRequestService.delete(url_path.NIVEAU_ETUDE_BASE + "/" + id)
  }
}
