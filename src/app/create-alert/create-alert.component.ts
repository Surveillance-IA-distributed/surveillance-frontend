import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateAlertService } from './service/create-alert.service';

@Component({
  selector: 'app-create-alert',
  imports: [FormsModule],
  templateUrl: './create-alert.component.html',
  styleUrl: './create-alert.component.css'
})
export class CreateAlertComponent {
  alertaTexto = '';

  constructor(
    private readonly createAlertService: CreateAlertService
  ){}

  crearAlerta(){
    if(this.alertaTexto.trim() === '') {
      alert('Por favor, ingrese un texto para la alerta.');
      return;
    }
    console.log("Alerta creada: " + this.alertaTexto);
    this.createAlertService.createAlert(this.alertaTexto).subscribe({
      next: (response) => {
        console.log('Alerta creada con éxito:', response);
        alert('Alerta creada con éxito');
        this.alertaTexto = ''; // Limpiar el campo de texto
      },
      error: (error) => {
        console.error('Error al crear la alerta:', error);
        alert('Error al crear la alerta');
      }
    })
  }
}
