export interface ProgramDTO {
  title: string;
  description: string;
  start_time: number;
  end_time: number;
  human_start_time: string;
  human_end_time: string;
  duration_in_minutes: number;
  custom_info: {
    Graficos: {
      ImagemURL: string;
      LogoURL: string;
    },
    Resumo: {
      Sinopse: string;
    }
    URLPrograma: string;
  }
  program: {
    name: string;
  }
}