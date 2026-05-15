import { NgClass } from './ng-class/ng-class';
import { Routes } from '@angular/router';
import { NgFor } from './ng-for/ng-for';
import { NgIf } from './ng-if/ng-if';
import { NgModel } from './ng-model/ng-model';
import { NgStyle } from './ng-style/ng-style';
import { NgSwitch } from './ng-switch/ng-switch';
import { Pipes } from './pipes/pipes';
import { MicroondasComponent } from './microondas/microondas';
import { CpPai } from './modulo-teste/cp-pai/cp-pai';
import { CpPai2 } from './modulo-teste2/cp-pai2/cp-pai2';
import { CpAgrupador } from './md-service/cp-agrupador/cp-agrupador';
import { CpProdutos } from './lojas-produtos/cp-produtos/cp-produtos';
import { EstoqueMainComponent } from './estoque/estoque-main/estoque-main';

export const routes: Routes = [
    {path: "ng-class", component:NgClass},
    {path: "ng-style", component:NgStyle},
    {path: "ng-if", component:NgIf},
    {path: "ng-for", component:NgFor},
    {path: "ng-switch", component:NgSwitch},
    {path: "ng-model", component:NgModel},
    {path: "pipes", component:Pipes},
    {path: "microondas", component:MicroondasComponent},
    {path: "ex_cpPai", component:CpPai},
    {path: "ex_cpPai2", component:CpPai2},
    {path: "cp_agrupador", component:CpAgrupador},
    {path: "cp_produtos", component:CpProdutos},
    { path: 'estoque_main', component: EstoqueMainComponent },
    
];
