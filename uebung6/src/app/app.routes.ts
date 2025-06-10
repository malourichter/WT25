import { Routes } from '@angular/router';
import { Table } from './table/table';
import { Form } from './form/form';
import { Home } from './home/home';

export const routes: Routes = [
        {path: 'read', component: Table},
       { path: 'create', component: Form},
       {path: 'home', component: Home},
    
];
