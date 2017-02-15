import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../services/github/github.service";
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {Repository} from "../../classes/repository/repository";

@Component({
  selector: 'app-repository-details',
  templateUrl: 'repository-details.component.html',
  styleUrls: ['repository-details.component.css']
})
export class RepositoryDetailsComponent implements OnInit {


  repositoryItem: Repository;

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute,
    private location: Location
  ) {

  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.githubService.get(+params['id']))
      .subscribe(repository => {
        this.repositoryItem = repository
      });
  }

  search() {

  }

}
