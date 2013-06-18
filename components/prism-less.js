Prism.languages.less = {
/*
	'comment': /\/\*[\w\W]*?\*\//g,
	'atrule': /@[\w-]+?(\s+[^;{]+)?(?=\s*{|\s*;)/gi,
	'url': /url\((["']?).*?\1\)/gi,
	'property': /(\b|\B)[a-z-]+(?=\s*:)/ig,
	'string': /("|')(\\?.)*?\1/g,
	'important': /\B!important\b/gi,
	'ignore': /&(lt|gt|amp);/gi,
*/
	//'selector': /[^\{\}\s][^\{\}]*(?=\s*\{)/g
	
	// Comments have first priority
/*
	'comment': {
		pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,
		lookbehind: true
	},
	
	// Strings are second
	'string': /("|')(\\?.)*?\1/g,
	
	// Then at-rules which are easy to identify
	'atrule': /@(charset|font-face|import|keyframes|media|page)[\w\s]*(?=\(|\{)/gi,
	
	// Everything that's not an at-rule is a variable
	'variable': /@[\w-]+/g,
	
	// Then grab numbers
	'number': {
		pattern: /(^|[^\w-])-?\d*\.?\d+(px|%|em|rem|pc|pt|ex|in|cm|mm|vw|vh|deg|s|ms)?(?=[^\w-])/g,
		lookbehind: true
	},
	
	'property': /[\w-]+\s*(?=[:])/g,
	
	'selector': /[:\.#]*[\w-]+(?=\s*[,\{])/g,
*/
	
	//'mixin': /(\.|#)[\w-]+([\s>]*[\.#][\w-]+)*(?=\s*\(?[\w\s@,-]*\)?;)/g,
	
	// Finally pull out any operators
	//'operator': /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
	//'ignore': /(&gt;|&lt;)/g,
	//'punctuation': /[{}[\]()\.,:;]/g
	'string': /("(?:(?!")[^\\]|\\.)*"|'(?:(?!')[^\\]|\\.)*')/g,
	'atrule': /@(charset|font-face|import|keyframes|media|page)[\w\s]*(?=\(|\{)/gi,
	'comment': {
		pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,
		lookbehind: true
	},
	// "query" is everything that comes after `@media` or `@import`.
	// Comes before string token since, in the case of `@import`, it can have a string within it.
	// Prevents LESS keywords within media queries from being highlighted and highlights media types.
	'query': {
		pattern: /((^|[\t ]*)@(import|media)\s+).*?(?={|;)/ig,
		lookbehind: true,
		inside: {
			'string': /("|')(\\?.)*?\1/g,
			'number': /(^|[^\w-])-?\d*\.?\d+(px|%|em|rem|pc|pt|ex|in|cm|mm|vw|vh|dpi|dpcm)?(?=[^\w-]|$)/g, // note that `deg`, `s` and `ms` are replaced with `dpi` and `dpcm`
			'variable': /@@?[\w-_]+/g,
			'ignore': /\b(not|only|and|resolution)\s+/gi,
			'property': /[\w-]+/g,
			'punctuation': /[()\.,:<>]|&gt;|&lt;/g,
		}
	},
	'variable': /@@?[\w-_]+/g,
	'keyword': {
		pattern: /([^\w-])\b(when|not|and)\b(?![\w-])/g,
		lookbehind: true
	},
	'function': /\b(escape|e|%|unit|color|data-uri|ceil|floor|percentage|round|sqrt|abs|sin|asin|cos|acos|tan|atan|pi|pow|mod|convert|rgb|rgba|argb|hsl|hsla|hsv|hsva|hue|saturation|lightness|hsvhue|hsvsaturation|hsvvalue|red|green|blue|alpha|luma|saturate|desaturate|lighten|darken|fadein|fadeout|fade|spin|mix|greyscale|contrast|multiply|screen|overlay|softlight|hardlight|difference|exclusion|average|negation|iscolor|isnumber|isstring|iskeyword|isurl|ispixel|ispercentage|isem|isunit)(?=\s*\()/g,
	'color': /(#[a-fA-F0-9]{8}|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3})/g, //|[hr][bglsv]{2}a?
	'number': {
		pattern: /(^|[^\w-])-?\d*\.?\d+(px|%|em|rem|pc|pt|ex|in|cm|mm|vw|vh|deg|s|ms)?(?=[^\w-]|$)/g,
		lookbehind: true
	},
	'mixin': /((\.|#)[\w\-_]+([ \t]*(>|&gt;)?[ \t]*))+(?=\(|;|\})/g,
	'id': /(#[\w-]+)(?=[^\{\}]*\{)/mg,
	'class': /([\.:]([\w-]+|@\{[\w-]+\}))(?=[^\{\};]*\{)/mg,
	//'attribute': /(\*?-?[-a-z_0-9]+\s*)(?=:[^\{\};]*[\};])/mg,
	'property': /[\w-]+\s*(?=[:])/g,
	'selector': /(\[[a-z]+)/g,
	//'mixin': /([#\.][\w-]+)(?=[^;\{\}]*[;\}])/g,
	//'mixin': /(\.|#)[\w-]+([\s>]*[\.#][\w-]+)*(?=\s*\(?[\w\s@,-]*\)?;)/g,
	'element': /\b([a-z]+[0-9]?)\b(?=[^\{\}\);]*\{)/mg,
	'important': /(! *important)\b/g,
	'operator': /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,
	'punctuation': /[{}[\]()\.,:;]/g
};




/*
	//'selector': /[^\{\}\s][^\{\}]*(?=\s*\{)/g
	//'selector': /(\.|#)[\w-]+([\s>]*[\.#][\w-]+)*(?=\s*\(?[\w\s@,-]*\)?;)/g
	'comment': {
		pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,
		lookbehind: true
	},
	'atrule': /@(charset|font-face|import|keyframes|media|page)[\d\w\s]*(?=\(|\{})?/gi,
	'number': {
		pattern: /([^\w])\d?\.?\d+(px|em|%)?/g,
		lookbehind: true
	},
	'punctuation': /[\{\}\(\);:,.]/g
*/




/*
Prism.languages.less = Prism.languages.extend('css', {
	'comment': {
		pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
		lookbehind: true
	},
	// aturle is just the @***, not the entire rule (to highlight var & stuffs)
	// + add ability to highlight number & unit for media queries
	'atrule': /@[\w-]+?(\s+[^;{]+)?(?=\s*{|,|:|\s*;)/gi,
	// url, compassified
	'url': /([-a-z]+-)*url(?=\()/gi,
	// CSS selector regex is not appropriate for Sass
	// since there can be lot more things (var, @ directive, nesting..)
	// a selector must start at the end of a property or after a brace (end of other rules or nesting)
	// it can contain some caracters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
	// the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
	// can "pass" as a selector- e.g: proper#{$erty})
	// this one was ard to do, so please be careful if you edit this one :)
	'selector': /([^@;\{\}\(\)]?([^@;\{\}\(\)]|&amp;|\#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/gm
});

//Prism.languages.insertBefore('less', 'atrule', {
//	'keyword': /@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return)|(?=@for\s+\$[-_\w]+\s)+from/i
//});

Prism.languages.insertBefore('less', 'property', {
	// var and interpolated vars
	'variable': /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i
});

Prism.languages.insertBefore('less', 'ignore', {
	'placeholder': /%[-_\w]+/i,
	'statement': /\B!(default|optional)\b/gi,
	'boolean': /\b(true|false)\b/g,
	'null': /\b(null)\b/g,
	'operator': /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|\%)\s+/g
});

Prism.languages.insertBefore('less', 'atrule', {
	'keyword': /(\.|#)[\w-]+([\s\.>]*[\w-])*\s*(?=\()/g,
});
*/


