import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

constructor() { }


infoMessage(title?: string, text?: string, icon?: string, confirmButtonText?: string){
  return  Swal.fire({
    title: '!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })
}

}
