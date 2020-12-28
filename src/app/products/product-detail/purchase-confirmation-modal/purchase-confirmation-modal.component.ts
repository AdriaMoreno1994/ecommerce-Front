import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Product} from '../../../shared/product.model';
import {Purchase} from '../../../shared/purchase.model';

@Component({
    selector: 'app-purchase-confirmation-modal',
    templateUrl: './purchase-confirmation-modal.component.html',
    styleUrls: ['./purchase-confirmation-modal.component.scss']
})
export class PurchaseConfirmationModalComponent implements OnInit {

    @ViewChild('emailInput') emailInputRef: ElementRef;

    constructor(private dialogRef: MatDialogRef<PurchaseConfirmationModalComponent>) {
    }

    ngOnInit(): void {
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onConfirm(): void {
        const email = this.emailInputRef.nativeElement.value;
        const product = new Product(1, 'Nutella', 'asdf', 10);
        const purchase = new Purchase(product, email);

        this.dialogRef.close(purchase);
    }
}
