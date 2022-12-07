export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildOptions {
  isDev: boolean;
  mode: 'development' | 'production';
  paths: BuildPaths;
  port: number;
}