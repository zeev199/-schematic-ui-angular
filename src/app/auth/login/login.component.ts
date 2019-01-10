import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  return: string = '';
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => this.return = params['return'] || '/pages');
    setTimeout(() => {
      // this.router.navigateByUrl(this.return);
    }, 100);
  }

}
