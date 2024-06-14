import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente16Component } from "./componente16/componente16.component";
import { Componente17Component } from "./componente17/componente17.component";
import { Componente11Component } from "./componente11/componente11.component";
import { Componente12Component } from "./componente12/componente12.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Componente16Component, Componente17Component, Componente11Component, Componente12Component]
})
export class AppComponent {
  title = 'curso_angular';
}
