import { TestBed } from '@angular/core/testing';

import { ModalComponentService } from './modal-component.service';

describe('ModalComponentService', () => {
  let service: ModalComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
