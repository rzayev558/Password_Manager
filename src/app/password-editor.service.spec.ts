import { TestBed } from '@angular/core/testing';

import { PasswordEditorService } from './password-editor.service';

describe('PasswordEditorService', () => {
  let service: PasswordEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
