import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core'; // Adicionado importProvidersFrom
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { EstoqueModule } from './estoque/estoque-module'; // Importe seu módulo aqui

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    importProvidersFrom(EstoqueModule) // ESSENCIAL: Adicione esta linha aqui
  ]
};