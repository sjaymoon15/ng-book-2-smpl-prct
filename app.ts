// your code goes here
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
	selector: 'hello-world',
	template: `
	<ul>
		<li *ngFor='let name of names'>Hello {{name}}</li>
	</ul>
	`
})
class HelloWorld {
	names: string[];

	constructor(){
		this.names = ['Felipe', 'Ari', 'Carl', 'Nate'];
	}
}

@NgModule({
	declarations: [ HelloWorld ],
	imports: [ BrowserModule ],
	bootstrap: [ HelloWorld ],
})
class HelloWorldAppModule {}

platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);

