import { EnginesAlias } from './alias';
import { getEngineQueryUrl } from './localStorage';

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
                return getEngineQueryUrl(current_engine);
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
    
    search_input.addEventListener('input', onInput)
    
    function onInput() {
        let span_el: HTMLSpanElement = this.nextElementSibling;
        span_el.textContent = this.value;
        this.style.width = span_el.offsetWidth + 'px';
    };

    export const clear_input = () => {
        search_input.innerText = '';
    }
}
