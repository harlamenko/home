import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <p>👋, I'm Harlamenko Artem.</p>

        <p>I'm an experienced front-end developer interested in complex web apps with rich UI.</p>

        <p>Currently I'm working in <a href="https://evotor.ru/" target="_blank">evotor.ru</a> as senior front-end
            developer.</p>

        <p>In ❤️ with: <code>angular</code> <code>typescript</code><code>scss</code></p>

        <footer>
            <a target="_blank" href="/assets/cv.pdf">CV</a>
            <a target="_blank" href="https://t.me/Harlamenko">telegram</a>
            <a target="_blank" href="mailto:4.harlamenko@gmail.com">email</a>
            <a target="_blank" href="https://github.com/harlamenko">github</a>
        </footer>
    `,
    styleUrls: ['app.component.scss']
})
export class AppComponent {
}
