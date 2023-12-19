import { Injectable } from '@angular/core';

//import {RegisterPayload} from "../../payloads/register-payload";
import { url_path } from "../../../constants/app.constant";
import { ApiRequestService } from '../utils/api-request.service';
import { CurriculumVitae } from '../../models/curriculumVitae';


@Injectable({
  providedIn: 'root'
})
export class CurriculumVitaeApiService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this._apiRequestService.getByPage(url_path.CURRICULUM_VITAE_BASE);
  }

  getById(id: number) {
    return this._apiRequestService.get(url_path.CURRICULUM_VITAE_BASE + '/id' + id);
  }

  save(data: CurriculumVitae) {
    return this._apiRequestService.post({endpoint: url_path.CURRICULUM_VITAE_BASE, data: JSON.stringify(data)})
  }

  update(data: CurriculumVitae) {
    return this._apiRequestService.put({endpoint: url_path.CURRICULUM_VITAE_BASE+'/id', data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this._apiRequestService.delete(url_path.CURRICULUM_VITAE_BASE + "/id" + id)
  }
}
