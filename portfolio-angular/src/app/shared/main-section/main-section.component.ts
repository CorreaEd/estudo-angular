import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {

  constructor(private renderer: Renderer2){
    
  }

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../main-section/Eduardo Correa.pdf')
    link.setAttribute('download', 'Eduardo Correa.pdf')
  }

}
