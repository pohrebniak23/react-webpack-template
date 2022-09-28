export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildOptions {
  mode: 'development' | 'production';
  paths: BuildPaths;
  port: number;
}