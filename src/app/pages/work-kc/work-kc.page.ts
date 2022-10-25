import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-kc',
  templateUrl: './work-kc.page.html',
  styleUrls: ['./work-kc.page.scss'],
})
export class WorkKcPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openGitHub(url: string){
    window.open(url, '_system', 'location=yes');
  }

  openBehnace(url: string){
    window.open(url, '_system', 'location=yes');
  }

}
