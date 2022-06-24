import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatSortModule, MatPaginatorModule, MatTableModule, MatFormField, MatFormFieldModule, MatInputModule, MatDialog, MatDialogModule } from "@angular/material";

@NgModule({
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule
        , FormsModule
    ],

    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        FormsModule


    ]
})

export class MaterialModule {

}