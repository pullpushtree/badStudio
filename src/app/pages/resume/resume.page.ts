import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {

  github = 'https://github.com/pullpushtree/';
  linkedin = 'https://www.linkedin.com/in/serge-badio-jr-b335b6a7/';
  behance = 'https://www.behance.net/sergebadio';
  website = 'https://www.sergebadio.com';
  email = 'mailto:serge_dev@hotmail.com';

  constructor() { }

  ngOnInit() {
  }

}
