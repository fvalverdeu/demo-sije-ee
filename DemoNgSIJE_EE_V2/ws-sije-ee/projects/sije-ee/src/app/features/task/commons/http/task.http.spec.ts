import { TestBed } from '@angular/core/testing';

import { TaskHttp } from './task.http';

describe('TaskHttp', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskHttp = TestBed.get(TaskHttp);
    expect(service).toBeTruthy();
  });
});
