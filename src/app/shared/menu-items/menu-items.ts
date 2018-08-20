import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  childstate?: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
// ECL Dashboard
  {
    state: '',
    name: 'Dashboard',
    type: 'saperator',
    icon: 'av_timer'
  }, {
    state: 'dashboards',
    childstate: 'dashboard-ecl',
    name: 'Overview',
    type: 'link',
    icon: 'av_timer'
  },

// ECL Model
  {
    state: '',
    name: 'Model Assignment',
    type: 'saperator',
    icon: 'assignment'
  }, {
    state: 'ecl-model',
    childstate: 'model-details',
    name: 'Details',
    type: 'link',
    icon: 'assignment'
  }
  , {
    state: 'ecl-model',
    childstate: 'model-positions',
    name: 'Positions',
    type: 'link',
    icon: 'border_all'
  }

];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
