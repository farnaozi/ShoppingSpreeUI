import { Component, OnInit } from '@angular/core';
import { OurTeamDataService } from 'src/app/shared/services/our-team-data.service';

@Component({
  selector: 'app-meet-our-team',
  templateUrl: './meet-our-team.component.html',
  styleUrls: ['./meet-our-team.component.css']
})
export class MeetOurTeamComponent implements OnInit {
  constructor(private ourTeamDataService: OurTeamDataService) { }
  teamData:any;

  ngOnInit(): void {
    this.teamData = this.ourTeamDataService.getMembersData();
  }

}
