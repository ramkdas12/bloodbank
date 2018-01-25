import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormConfigService {
  data;
  constructor(private http: HttpClient) { }

  getFormConfig(): any {
    return this.http.get('../assets/formConfig.json');
  }
}