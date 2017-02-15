import { Component, OnInit } from '@angular/core';
import {GithubService} from "../../services/github/github.service";

@Component({
  selector: 'app-repositories',
  templateUrl: 'repositories.component.html',
  styleUrls: ['repositories.component.css']
})
export class RepositoriesComponent implements OnInit {


  searchRes: Array<Object>;
  searchStr: string;

  constructor(private _githubService: GithubService) {

  }

  ngOnInit() {
  }

  search() {
    this._githubService.search(this.searchStr).subscribe(res => {
      this.searchRes = res;
    })
  }

}
