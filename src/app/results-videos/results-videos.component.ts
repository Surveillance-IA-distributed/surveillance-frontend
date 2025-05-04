import { GetObjectsService } from './services/get-objects.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GetFeaturesService } from './services/get-features.service';
import { FeaturesResponse } from './interface/featuresRespose.interface';
import { ObjectsResponse } from './interface/objectsResponse.interface';
import { ScenariesResponse } from './interface/scenariesResponse.interface';
import { GetScenariesService } from './services/get-scenaries.service';

@Component({
  selector: 'app-results-videos',
  imports: [CommonModule],
  templateUrl: './results-videos.component.html',
  styleUrl: './results-videos.component.css'
})
export class ResultsVideosComponent {
  currentView: 'features' | 'objects' | 'escenarios' = 'features';
  dataFeatures: FeaturesResponse[] = [];
  dataObjects: ObjectsResponse[] = [];
  dataScenaries: ScenariesResponse[] = [];

  constructor(
    private readonly getFeaturesService: GetFeaturesService,
    private readonly getObjectsService: GetObjectsService,
    private readonly getEscenariosService: GetScenariesService
  ) {
    this.loadData('features')
  }

  changeView(view: 'features' | 'objects' | 'escenarios') {
    this.currentView = view;
    this.loadData(view);
  }

  loadData(view: string) {
    if(view === 'features') {
      this.getFeaturesService.getFeatures().subscribe((data) => {
        this.dataFeatures = data;
      });
    }
    if(view === 'objects') {
      this.getObjectsService.getObjects().subscribe((data) => {
        this.dataObjects = data;
      });
    }
    if(view === 'escenarios') {
      this.getEscenariosService.getScenaries().subscribe((data) => {
        this.dataScenaries = data;
      });
    }
  }
}
