import { ResultScanService } from './services/result-scan.service';
import { Component } from '@angular/core';
import { VideosListReponse } from '../share/interfaces/uploadedVideosResponse.interface';
import { ScannedVideosService } from '../share/services/scanned-videos.service';
import { CommonModule } from '@angular/common';
import { ScanResultResponse } from './interfaces/scanResultResponse.interface';
import { FormsModule } from '@angular/forms';
import { RequestBodySend } from './interfaces/requestBodySend.interface';
import { MakeQueryService } from './services/make-query.service';
import { MakeQueryResponse } from './interfaces/makeQueryResponse.interface';

@Component({
  selector: 'app-create-request',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-request.component.html',
  styleUrl: './create-request.component.css'
})
export class CreateRequestComponent {
  scannedVideoResponse: VideosListReponse = {
    videos: [],
  };

  videoSelected: string | null = null;
  scanResult: ScanResultResponse = {
    results: []
  };

  // Variables para la consulta
  environmentType: string | null = null;
  objectNames: string[] = [];
  colors: string[] = [];
  proximities: string[] = [];
  
  selectedQueryType = "1";
  selectedObject: string | null = null;
  selectedColor: string | null = null;
  selectedProximity: string | null = null;
  selectedEnvironmentType: string | null = null;

  requestBody: RequestBodySend = {
    type: "1",
    video_name: '',
    environment_type: null,
    object_name: null,
    color: null,
    proximity: null
  };

  // Respuesta --> MAke query
  responseMakeQuery: MakeQueryResponse[] = [];

  constructor(
    private readonly scannedVideosService: ScannedVideosService,
    private readonly resultScanService: ResultScanService,
    private readonly makeQuerySerivice: MakeQueryService
  ) {
    this.getScannedVideos();
  }

  getScannedVideos() {
    this.scannedVideosService.getScannedVideos().subscribe({
      next: (response) => {
        this.scannedVideoResponse = response;
        console.log('Scanned videos:', this.scannedVideoResponse);
      },
      error: (error) => {
        console.error('Error fetching scanned videos:', error);
      }
    });
  }

  getScanResults(videoId: string) {
    console.log('Scan results for video ID:', videoId);

    this.resultScanService.getScanResults(videoId).subscribe({
      next: (response) => {
        console.log('Scan results:', response);
        this.scanResult = response;

        // Variables para la consulta
        const results = this.scanResult.results;
        // 1. Environment
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const json = results.find((r: any) => r.type === 'json');
        this.environmentType = json?.scene?.environment_type ?? null;
        this.selectedEnvironmentType = this.environmentType;

        // 2. Objetos, colores y proximidad
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const txt = results.find((r: any) => r.type === 'txt');
        const content = txt?.content ?? [];

        const objectsSet = new Set<string>();
        const colorsSet = new Set<string>();
        const proximitySet = new Set<string>();

        for (const item of content) {
          if (item.object_name) objectsSet.add(item.object_name);
          if (item.color) colorsSet.add(item.color);
          if (item.proximity) proximitySet.add(item.proximity);
        }

        this.objectNames = [...objectsSet];
        this.colors = [...colorsSet];
        this.proximities = [...proximitySet];

        this.requestBody.type = this.selectedQueryType;
        this.requestBody.video_name = videoId;
        this.requestBody.environment_type = this.selectedEnvironmentType;

      },
      error: (error) => {
        console.error('Error fetching scan results:', error);
      }
    });
  }

  getEnvironmentType(results: unknown[]): string | null {
    const json = results.find((r): r is { type: string; scene: { environment_type: string } } => 
      typeof r === 'object' && r !== null && 'type' in r && r.type === 'json'
    );
    return json?.scene.environment_type ?? null;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getGroupedDetections(): Map<number, any[]> {
    const txt = this.scanResult.results.find((r) => r.type === 'txt');
    const content = txt?.content ?? [];
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const grouped = new Map<number, any[]>();
  
    for (const item of content) {
      if (item.second === null || item.second === undefined) continue;
  
      const second = Number(item.second);
      if (!grouped.has(second)) {
        grouped.set(second, []);
      }
      grouped.get(second)!.push(item);
    }
  
    return grouped;
  }
  
  onEnvironmentTypeChange() {
    console.log('Selected environment type:', this.selectedEnvironmentType);
    this.selectedEnvironmentType = this.environmentType;
  }

  onObjectChange() {
    console.log('Selected object:', this.selectedObject);
    // this.requestBody.object_name = this.selectedObject;
  }

  onColorChange() {
    console.log('Selected color:', this.selectedColor);
    // this.requestBody.color = this.selectedColor;
  }

  onProximityChange() {
    console.log('Selected proximity:', this.selectedProximity);
    // this.requestBody.proximity = this.selectedProximity;
  }

  onQueryTypeChange() {
    this.selectedEnvironmentType = null;
    this.selectedObject = null;
    this.selectedColor = null;
    this.selectedProximity = null;
  }

  createRequest() {
    this.requestBody.object_name = this.selectedObject;
    this.requestBody.color = this.selectedColor;
    this.requestBody.proximity = this.selectedProximity;
    this.requestBody.environment_type = this.selectedEnvironmentType;
    this.requestBody.video_name = this.videoSelected ?? '';
    this.requestBody.type = this.selectedQueryType;
  
    // Reglas... 
    // Tipo 1: Debe estar el tipo de entorno
    if (this.selectedQueryType === '1' && !this.selectedEnvironmentType) {
      alert('Error: El tipo de entorno es obligatorio para el tipo de consulta 1.');
      return;
    }
    // Tipo 2: Debe estar al menos el objeto
    if (this.selectedQueryType === '2' && !this.selectedObject) {
      alert('Error: Al menos un objeto es obligatorio para el tipo de consulta 2.');
      return;
    }
    // Tipo 3: Debe estar el objeto
    if (this.selectedQueryType === '3' && !this.selectedObject) {
      alert('Error: Al menos un objeto es obligatorio para el tipo de consulta 3.');
      return;
    }

    console.log('📦 Enviando consulta:', this.requestBody);
    this.makeQuerySerivice.makeQuery(this.requestBody).subscribe({
      next: (response) => {
        console.log('Consulta enviada:', response);
        alert('Consulta enviada correctamente.');
        this.responseMakeQuery = response;
      },
      error: (error) => {
        console.error('Error al enviar la consulta:', error);
        alert('Error al enviar la consulta.');
      }
    });
  }
  
}