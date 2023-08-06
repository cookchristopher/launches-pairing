export interface LaunchesQueryResponse {
  docs: Launch[];
}

export interface Launch {
  cores: Cores[];
  date_utc: string;
  failures: Failures[];
  id: string;
  links: Links;
  name: string;
  payloads: Payload[];
  success: boolean;
}

export interface Cores {
  core: Core;
}

export interface Core {
  id: string;
  serial: string;
}

export interface Failures {
  reason: string;
}

export interface Links {
  patch: Patch;
}

export interface Patch {
  small: string;
}

export interface Payload {
  id: string;
  type: string;
}