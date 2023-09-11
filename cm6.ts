import {EditorView, basicSetup} from "codemirror"
import {php} from "@codemirror/lang-php"

new EditorView({
	doc: "<?php declare(strict_types = 1);\n" +
		"\n" +
		"namespace PHPStan;\n" +
		"\n" +
		"class Foo\n" +
		"{\n" +
		"  \n" +
		"}",
	extensions: [basicSetup, php()],
	parent: document.body
})
