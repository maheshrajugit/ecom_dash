import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'saavithri_admin';
  

  ngOnInit()
  {
    const env = environment.parseConfig;
    Parse.initialize(env.appId, env.javascriptKey, env.masterKey);
    (Parse as any).serverURL = env.serverURL;
  }
}
