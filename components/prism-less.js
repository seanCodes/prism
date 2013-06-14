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
	
	'comment': /(\/\*(?:[^*]|\*+[^\/*])*\*+\/|\/\/[^\n]*)/mg,
	'string': /("(?:(?!")[^\\]|\\.)*"|'(?:(?!')[^\\]|\\.)*')/g,
	'keyword': /\b(when)\b/g,
	'color': /(#[a-fA-F0-9]{8}|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{3})(\b|$)/mg,
	'number': {
		pattern: /(^|[^\w-])-?\d*\.?\d+(px|%|em|rem|pc|pt|ex|in|cm|mm|vw|vh|deg|s|ms)?(?=[^\w-])/g,
		lookbehind: true
	},
	'class': /([\.:]([\w-]+|@\{[\w-]+\}))(?=[^\{\};]*\{)/mg,
	'variable': /(@@?-?[-a-z_0-9]+\s*)/g,
	'attribute': /(\*?-?[-a-z_0-9]+\s*)(?=:[^\{\};]*[\};])/mg,
	'selector': /(\[[a-z]+)/g,
	'id': /(#[\w-]+)(?=[^\{\}]*\{)/mg,
	'mixin': /([#\.][\w-]+)(?=[^;\{\}]*[;\}])/g,
	'element': /\b([a-z]+[0-9]?)\b(?=[^\{\}\);]*\{)/mg,
	'important': /(! *important)\b/g
};

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

