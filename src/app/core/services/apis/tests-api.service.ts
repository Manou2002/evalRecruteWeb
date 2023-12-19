import { Injectable } from '@angular/core';

//import {RegisterPayload} from "../../payloads/register-payload";
import { url_path } from "../../../constants/app.constant";
import { ApiRequestService } from '../utils/api-request.service';
import { Test } from '../../models/test';


@Injectable({
  providedIn: 'root'
})
export class TestApiService {

  constructor(private _apiRequestService: ApiRequestService) {
  }

  getAll() {
    return this._apiRequestService.getByPage(url_path.TEST_BASE);
  }

  getById(id: number) {
    return this._apiRequestService.get(url_path.TEST_BASE + '/id' + id);
  }

  save(data: Test) {
    return this._apiRequestService.post({endpoint: url_path.TEST_BASE, data: JSON.stringify(data)})
  }

  update(data: Test) {
    return this._apiRequestService.put({endpoint: url_path.TEST_BASE+'/id', data: JSON.stringify(data)})
  }

  delete(id: number) {
    return this._apiRequestService.delete(url_path.TEST_BASE + "/id" + id)
  }
}
