import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { ScanVideoComponent } from './scan-video/scan-video.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { CreateAlertComponent } from './create-alert/create-alert.component';
import { ResultsVideosComponent } from './results-videos/results-videos.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'upload-video',
        component: UploadVideoComponent
    },
    {
        path: 'scan-video',
        component: ScanVideoComponent 
    },
    {
        path: 'create-request',
        component: CreateRequestComponent
    },
    {
        path: 'create-alert',
        component: CreateAlertComponent
    },
    {
        path: 'results-videos',
        component: ResultsVideosComponent
    }
];
