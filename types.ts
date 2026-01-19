
export interface UserData {
  name: string;
  likes: string;
  habit: string;
}

export interface PredictionResult {
  cardName: string;
  cardIcon: string;
  reading: string;
  suggestedCareers: string[];
}

export enum AppState {
  INPUT = 'INPUT',
  LOADING = 'LOADING',
  RESULT = 'RESULT'
}
