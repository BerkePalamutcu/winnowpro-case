import { Component, inject, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  /* 

  	In the previous code, in every component there was Auth check on each individual component.
	That was a repeating process and I took that logic into AuthGuard I made.
	So that components do not need to check authentication. Instead Authguard and login service
   handle that.	

	*/

  ngOnInit(): void {}
}
