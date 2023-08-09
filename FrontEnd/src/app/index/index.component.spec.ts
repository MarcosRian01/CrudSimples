import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProdutoComponent } from './index.component';

describe('IndexComponent', () => {
  let component: AdicionarProdutoComponent;
  let fixture: ComponentFixture<AdicionarProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarProdutoComponent]
    });
    fixture = TestBed.createComponent(AdicionarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
