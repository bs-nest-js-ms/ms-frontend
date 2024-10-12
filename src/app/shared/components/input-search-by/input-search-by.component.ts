import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-input-search-by',
  templateUrl: './input-search-by.component.html',
  styleUrl: './input-search-by.component.scss',
})
export class InputSearchByComponent implements OnInit, OnDestroy {
  @Input() public placeHolder!: string;
  @Input() public matLabel!: string;
  @Input() public type!: string;
  @Output() public onSendInputValue = new EventEmitter<string>();

  private debouncer: Subject<string> = new Subject<string>();
  private debourcerSuscription?: Subscription;

  ngOnInit(): void {
    if (
      this.placeHolder.trim().length === 0 ||
      this.matLabel.trim().length === 0 ||
      this.type.trim().length === 0
    )
      throw new Error('Mat Label, Type and Place holder are required');

    this.debourcerSuscription =  this.debouncer
      .pipe(debounceTime(500))
      .subscribe((inputSearchValue: string) => {
        this.onSendInputValue.emit(inputSearchValue);
      });
  }

  ngOnDestroy(): void {
    this.debourcerSuscription?.unsubscribe();
  }

  public onKeyPressAndCatchValue (searchBy: string) {
    // console.log({searchBy});
    // Disparamos el observador llamandolo y esto ejecuta el onInit enviendo el evento al padre
    this.debouncer.next(searchBy);
  }
}
