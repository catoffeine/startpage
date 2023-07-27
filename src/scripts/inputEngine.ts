import { EnginesAlias } from './alias';

namespace InputEngine {
    let search_input: HTMLInputElement = document.querySelector('.search_input_text');
    let span_el: HTMLSpanElement = document.querySelector('.closing_engine');

    const getCurrentEngineUrl = (): string => {
        let current_engine: string = document.querySelector('.search_engine').innerHTML.toString();
        
        switch (current_engine) {
            case EnginesAlias.google: {
                return 'https://google.com?q=';
            }
            case EnginesAlias.duckduckgo: {
                return 'https://yandex.ru?q=';
            }
            default: {
                // return getEngineQueryUrl(current_engine);
            }
        }
    }
    
    search_input.addEventListener('focus', () => {
        span_el.classList.remove('closing_engine_active');
    })

    search_input.addEventListener('blur', () => {
        if (search_input.value.length == 0) {
            span_el.classList.add('closing_engine_active');
        }
    })

    document.addEventListener('keydown', () => {
        search_input.focus();
    })

    document.addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            let query_url: string = getCurrentEngineUrl();
            window.open(query_url + search_input.value, '_self');
        }
    })
    
    search_input.addEventListener('input', (event: InputEvent) => {
        let target = <HTMLInputElement>event.target;
        let span_el: HTMLSpanElement = <HTMLSpanElement>target.nextElementSibling;
        span_el.textContent = target.value;
        target.style.width = span_el.offsetWidth + 'px';
    });
}
