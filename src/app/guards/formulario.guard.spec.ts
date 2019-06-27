import { TestBed, async, inject } from '@angular/core/testing';

import { FormularioGuard } from './formulario.guard';

describe('FormularioGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormularioGuard]
    });
  });

  it('should ...', inject([FormularioGuard], (guard: FormularioGuard) => {
    expect(guard).toBeTruthy();
  }));
});
