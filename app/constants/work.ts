import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '1',
    title: 'Name',
    subtitle: 'Sagar Bansu',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2',
    title: 'Age',
    subtitle: '24',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '3',
    title: 'Experience',
    subtitle: '5 Years',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '4',
    title: 'Expertise',
    subtitle: 'Professional Textile Designer',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: '5',
    title: 'Instagram',
    subtitle: '@sagar_d.b',
    position: 'right',
    url: 'https://www.instagram.com/sagar_d.b?igsh=MWZ3dHE4ZTgyZThvNA==',
  }
]