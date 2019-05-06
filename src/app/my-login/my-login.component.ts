import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-login',
  template: `
  <form name="loginForm" method="POST">
    <fieldset>
      <legend></legend>
      <span></span>
      <div>
        <label for="user">Usuario</label>
        <input type="text" name="user"/>
      </div>
      <div>
        <label for="password">Contraseña</label>
        <input type="text" name="password"/>
      </div>
      <a></a>
    </fieldset>
    <input type="submit" value="Entrar"/>
    <a target='_blank' href="javascript:void(0)">¿Todavía no eres usuario? Regístrate</a>
  </form>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class MyLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
