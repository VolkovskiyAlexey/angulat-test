import { Routes } from '@angular/router';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import {RepositoryDetailsComponent} from "./components/repository-details/repository-details.component";

export const appRoutes: Routes = [
    {path: '', component: RepositoriesComponent},
    {path: 'repository/:id', component: RepositoryDetailsComponent}
];