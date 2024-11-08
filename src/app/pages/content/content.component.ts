import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = 'https://i.ytimg.com/vi/QUfaHAR-Nho/maxresdefault.jpg'
  contentTitle: string = 'gggg'
  contentDescription: string = 'hhhhhh'
  private id: string | null = '1'

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get("id")
    )
    this.setValuesComponent(this.id)
  }

  setValuesComponent(id: string | null) {
    const result = dataFake.filter(article => article.id === id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
