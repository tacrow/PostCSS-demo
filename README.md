# postcss-demo

## PostCSSとは

[PostCSS](https://github.com/postcss/postcss)は、JSプラグインでCSSのスタイルを変換するためのツールです。変換は各プラグインによって行われます。 
PostCSS単体ではスタイルに変更を加えることはできません。

プラグインには以下のような種類があります。

**Future CSS syntax**　---次世代CSS構文の使用  
**Fallbacks**　---未対応ブラウザでの効果再現  
**Language extensions**　---for文やif文などの言語拡張  
**Optimizations**　---minifyなどの最適化  
**Shortcuts**　---便利なショートカット  
**Analytics**　---分析系  

PostCSSを利用する最大の利点は、Future CSS syntaxで新しいCSS構文を先取れることにあります。  
また、PostCSSはモジュラーとなるためless, stylus, ruby-sassなどと比べて、コンパイルが3-30倍ほど高速という特徴があります。

ここではGulpでPostCSSのプラグインを使用しています。

## Plugins

[postcss-partial-import](https://github.com/jonathantneal/postcss-partial-import)  
[autoprefixer](https://github.com/postcss/autoprefixer)  
[postcss-mixins](https://github.com/postcss/postcss-mixins)  
[postcss-nested](https://github.com/postcss/postcss-nested)  
[postcss-simple-vars](https://github.com/postcss/postcss-simple-vars)  
[postcss-custom-properties](https://github.com/postcss/postcss-custom-properties)  
[postcss-custom-selectors](https://github.com/postcss/postcss-custom-selectors)  
[postcss-custom-media](https://github.com/postcss/postcss-custom-media)  
[postcss-media-minmax](https://github.com/postcss/postcss-media-minmax)  
[postcss-color-function](https://github.com/postcss/postcss-color-function)  
[postcss-selector-matches](https://github.com/postcss/postcss-selector-matches)  
[postcss-selector-not](https://github.com/postcss/postcss-selector-not)  
[pleeease-filters](https://github.com/iamvdo/pleeease-filters)  
[stylelint](https://github.com/stylelint/stylelint)  
[postcss-reporter](https://github.com/postcss/postcss-reporter)  
[cssnano](https://github.com/ben-eb/cssnano)
