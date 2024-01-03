import { Injectable } from '@angular/core';
import { ApiRequestService } from '../utils/api-request.service';
import { url_path } from '../../../constants/app.constant';
import { TypesContrats } from '../../models/types-contrats';

@Injectable({
  providedIn: 'root'
})
export class TypeContratsApiService {

  constructor(private _apiRequestService: ApiRequestService) {
   }
   
   getAll() {
    return this._apiRequestService.getByPage(url_path.TYPES_CONTRAT_BASE);
  }

  getById(id: number) {
    return this._apiRequestService.get(url_path.TYPES_CONTRAT_BASE + '/' + id);
  }

  save(data: TypesContrats) {
    return this._apiRequestService.post({endpoint: url_path.TYPES_CONTRAT_BASE, data: JSON.stringify(data)})
  }

  update(data: TypesContrats) {
    return this._apiRequestService.put({endpoint: url_path.TYPES_CONTRAT_BASE+'/'+data.id, data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this._apiRequestService.delete(url_path.TYPES_CONTRAT_BASE + "/" + id)
  }
}
