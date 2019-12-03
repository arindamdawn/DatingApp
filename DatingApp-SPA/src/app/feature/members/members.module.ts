import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbCardModule, NbIconModule, NbLayoutModule } from "@nebular/theme";
import { MembersListComponent } from "./members-list/members-list.component";
import { MemberCardComponent } from "./member-card/member-card.component";
import { MembersRoutingModule } from "./members-routing.module";
import { MemberDetailsComponent } from "./member-details/member-details.component";
import { MemberDetailsResolver } from "src/app/core/resolvers/member-details.resolver";

@NgModule({
  imports: [CommonModule, MembersRoutingModule, NbCardModule, NbIconModule],
  declarations: [
    MembersListComponent,
    MemberCardComponent,
    MemberDetailsComponent
  ],
  providers: [MemberDetailsResolver]
})
export class MembersModule {}
