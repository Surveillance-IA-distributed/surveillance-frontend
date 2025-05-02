export interface ScanResultResponse {
    results: Result[];
}

export interface Result {
    type:     string;
    fileName: string;
    scene?:   Scene;
    content?: Content[];
}

export interface Content {
    object_name:  string;
    bounding_box: number[];
    color?:       string;
    proximity?:   string;
    second:       number | null;
}

export interface Scene {
    environment_type: string;
    description:      string;
    features:         Features;
}

export interface Features {
    weather:     string;
    time_of_day: string;
    terrain:     string;
    crowd_level: string;
    lighting:    string;
}
