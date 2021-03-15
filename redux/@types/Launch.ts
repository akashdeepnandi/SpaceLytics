export interface Launch {
  mission_name: string;
  launch_date_utc: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  launch_site: {
    site_name: string;
  };
  launch_success: boolean;
  details: string;
}

export interface LaunchState {
  isLoading: boolean;
  items: Launch[];
}
