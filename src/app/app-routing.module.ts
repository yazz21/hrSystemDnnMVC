import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompanyDetailComponent } from "./components/company-detail/company-detail.component";
import { CompanyComponent } from "./components/company/company.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { NewsEventsComponent } from "./components/news-events/news-events.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "company", component: CompanyComponent },
  { path: "newsandevents", component: NewsEventsComponent },
  { path: "contact", component: ContactComponent },
  {
    path: "company",
    loadChildren: () =>
      import("./components/add-company/add-company.module").then(
        (m) => m.AddCompanyModule
      ),
  },
  { path: "company/:id", component: CompanyDetailComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
