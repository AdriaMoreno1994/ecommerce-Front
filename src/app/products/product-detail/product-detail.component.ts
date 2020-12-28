import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../shared/product.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {PurchaseConfirmationModalComponent} from './purchase-confirmation-modal/purchase-confirmation-modal.component';
import {HttpClient} from '@angular/common/http';
import {ProductsService} from '../../services/products.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

    @Input() product: Product;

    constructor(private dialog: MatDialog,
                private http: HttpClient,
                private productService: ProductsService) {
    }

    ngOnInit(): void {
    }

    onBuyProduct(): void {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.autoFocus = true;

        const dialogRef = this.dialog.open(PurchaseConfirmationModalComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(data => {
                console.log(data);
                // this.productService.purchaseProduct(data);

                this.productService.purchaseProduct(data).subscribe();
            }
        );
    }
}
