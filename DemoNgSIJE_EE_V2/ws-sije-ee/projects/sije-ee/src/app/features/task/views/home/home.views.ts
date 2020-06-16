import { Component, OnInit } from '@angular/core';
import { HomePresenter } from './home.presenter';

@Component({
  selector: 'app-home',
  templateUrl: './home.views.html',
  styleUrls: ['./home.views.scss'],
  providers: [HomePresenter]
})
export class HomeView implements OnInit {

  constructor(public presenter: HomePresenter) { }

  ngOnInit() {
    this.presenter.getLastTask();
    this.presenter.getAllTask();
  }

}
