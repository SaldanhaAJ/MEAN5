import { Component, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver } from '@angular/core';

import { User } from '../_shared/models/user.interface';
import { AuthDynamicComponent } from '../_shared/components/auth-dynamic/auth-dynamic.component';

@Component({
  selector: 'container-view',
  template: `
  <div>
    <div #dynamic2></div>
  </div>
`
})
export class ContainerViewComponent {

  @ViewChild('dynamic2', { read: ViewContainerRef }) entry: ViewContainerRef;
  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthDynamicComponent);
    const component = this.entry.createComponent(authFormFactory);
  }


}
