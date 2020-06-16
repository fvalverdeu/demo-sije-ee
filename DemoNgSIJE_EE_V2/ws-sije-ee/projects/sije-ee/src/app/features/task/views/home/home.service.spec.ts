import { TestBed } from '@angular/core/testing';

import { HomePresenter } from './home.presenter';

describe('HomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomePresenter = TestBed.get(HomePresenter);
    expect(service).toBeTruthy();
  });
});
