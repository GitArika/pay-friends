import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('header') divHeader: ElementRef;
  public toggle: boolean;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {}

  openMenu(event: any) {
    if (event == 'false' && !this.toggle) return;
    this.toggle = !this.toggle;

    if (this.toggle) {
      this.renderer.addClass(this.divHeader.nativeElement, 'header-expanded');
    } else {
      this.renderer.removeClass(
        this.divHeader.nativeElement,
        'header-expanded',
      );
    }
  }

  dashboard() {
    this.router.navigate([environment.Routes.dashboard]);
  }

  logout() {
    this.router.navigate([environment.Routes.login]);
  }

  profile() {
    console.log(this.router.url);
    if (String(this.router.url).includes('profile') && this.openMenu) {
      console.log('close menu...');
      this.openMenu(false);
      return;
    }
    this.router.navigate([
      `${environment.Routes.profile}/${this.authService.id}`,
    ]);
  }
}
