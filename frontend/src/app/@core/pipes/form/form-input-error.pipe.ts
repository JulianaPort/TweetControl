import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inputError'
})
export class InputErrorPipe implements PipeTransform {

  transform(value: any): string {
    let rvalue: string = '';
    if (value !== null) {
      if (value['invalid'] == true) {
        rvalue = 'O campo é invalido!';
      }
      if (value['exists'] == true) {
        rvalue = 'Usuário já cadastrado!';
      }
      if (value['required'] == true) {
        rvalue = 'Campo obrigatório!';
      }
      if (value['email'] == true) {
        rvalue = 'Formato de email inválido!';
      }
    }
    return rvalue;
  }

}
