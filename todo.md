- [ ] install and configure react router
- [x] install configure tailwind
> `pnpm add -D tailwindcss@latest postcss@latest autoprefixer@lates`
>
_postcss.config.js_
``` 
  import tailwindcss from '@tailwindcss/postcss';
  import autoprefixer from 'autoprefixer';
    
    export default {
    plugins: [
    tailwindcss,
    autoprefixer,
    ],
    };
```
> La version 4.x de tailwind ne requiere plus de fichier de configuration _tailwind.config.ts_. La configuration est directement faite dans le css
- [ ] install configure redux
- [ ] install configure rtk query
- [ ] install configure framer motion
- [ ] install configure Swiper js