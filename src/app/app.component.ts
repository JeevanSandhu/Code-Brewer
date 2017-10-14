import { Component } from '@angular/core';

@Component({
  selector: 'container-1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  output:string;
  sample:string;
  input:string;
  list:string[];
  x:string;
  b:boolean;

  convert(asdf) {
    console.log(asdf);
    this.sample = asdf.split(" ")[1];
    console.log(this.sample);
    switch(this.sample)
    {
      case "bubblesort" : this.input = asdf.split('\n')[2];
                          this.input = this.input.split('[')[1];
                          this.input = this.input.split(']')[0];
                          this.list = this.input.split(', ');
                          this.list = this.list.sort();
                          this.output = this.list.toString();

                          this.input = asdf.split('\n')[9];
                          this.x = asdf.split('\n')[10];
                          this.x = this.x.split(' = ')[1];
                          this.input = this.input.split('[')[1];
                          this.input = this.input.split(']')[0];
                          this.list = this.input.split(' ');
                          this.b = this.list.includes(this.x);
                          if(this.b)
                            this.output = this.output + "\n" + "element found!"
                          else
                            this.output = this.output + "\n" + "element not found :("
                          break;
      case "linearsearch" : this.output = asdf;
                            break;
      default : this.output = "An unexpected error has occured..";
                break;
    }
  }
}
