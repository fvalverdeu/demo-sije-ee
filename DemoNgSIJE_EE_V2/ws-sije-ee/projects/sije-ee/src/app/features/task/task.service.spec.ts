import { TestBed } from '@angular/core/testing';

import { TaskPresenter } from './task.presenter';

describe('TaskPresenter', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskPresenter = TestBed.get(TaskPresenter);
    expect(service).toBeTruthy();
  });
});
