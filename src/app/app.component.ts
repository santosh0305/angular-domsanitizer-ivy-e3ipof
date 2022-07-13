import {Component, Inject, SecurityContext, Sanitizer} from '@angular/core';
import {DomSanitizer, SafeValue} from '@angular/platform-browser';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    value = `<p style="color: red;">I should be red, and I am if Ivy is not enabled.</p>`;

    constructor(@Inject(Sanitizer) private readonly sanitizer: Sanitizer) {}

    sanitizeHTML(value: string | null): string {
        return this.sanitizer.sanitize(SecurityContext.HTML, value) || '';
    }
}
