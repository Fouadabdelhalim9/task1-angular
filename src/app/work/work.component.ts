import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  works = [
    { id: 1, title: 'WORK 01', category: 'Graphic Design', color: '#3498db' },
    { id: 2, title: 'WORK 02', category: 'Animation', color: '#e74c3c' },
    { id: 3, title: 'WORK 03', category: 'Software', color: '#2ecc71' },
    { id: 4, title: 'WORK 04', category: 'Apps', color: '#9b59b6' },
  ];

  hoveredWorkId: number | null = null;

  onMouseEnter(id: number) {
    this.hoveredWorkId = id;
  }

  onMouseLeave() {
    this.hoveredWorkId = null;
  }
}
