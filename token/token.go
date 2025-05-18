package token

type TokenType string

const (
	ILLEGAL = "ILLEGAL"
	EOF     = "EOF"

	// Identifiers + literals
	IDENT  = "IDENT"  // add, foobar, x, y, ...
	INT    = "INT"    // 1343456
	STRING = "STRING" // "foobar"

	// Operators
	ASSIGN   = "="
	PLUS     = "+"
	MINUS    = "-"
	BANG     = "!"
	ASTERISK = "*"
	SLASH    = "/"

	LT = "<"
	GT = ">"

	EQ     = "=="
	NOT_EQ = "!="

	// Delimiters
	COMMA     = ","
	SEMICOLON = ";"
	COLON     = ":"

	LPAREN   = "("
	RPAREN   = ")"
	LBRACE   = "{"
	RBRACE   = "}"
	LBRACKET = "["
	RBRACKET = "]"

	// Keywords
	PRINT    = "PRINT"
	LOOP     = "LOOP"
	FUNCTION = "FUNCTION"
	LET      = "LET"
	TRUE     = "TRUE"
	FALSE    = "FALSE"
	IF       = "IF"
	ELSE     = "ELSE"
	RETURN   = "RETURN"
)

type Token struct {
	Type    TokenType
	Literal string
}

/*var keywords = map[string]TokenType{
	"fn":     FUNCTION,
	"let":    LET,
	"true":   TRUE,
	"false":  FALSE,
	"if":     IF,
	"else":   ELSE,
	"return": RETURN,
}*/

var keywords = map[string]TokenType{

	"true":  TRUE,  // सच (true)
	"false": FALSE, // झूठ (false)
	"loop":  LOOP,
	"likho": PRINT,

	// Hindi
	"fn"   : FUNCTION,
	"dekh" : LET,    // Hindi: समझो (let)
	"agar" : IF,     // अगर (if)
	"varna": ELSE,   // वरना (else)
	"vapis": RETURN, // वापिस (return)

	// Marathi
	"kar":     FUNCTION, // Marathi: कर (function)
	"samja":   LET,      // Marathi: सोडा (let)
	"jar":     IF,       // जर (if)
	"nahitar": ELSE,     // नाहीतर (else)
	"parat":   RETURN,   // परत (return)
}

func LookupIdent(ident string) TokenType {
	if tok, ok := keywords[ident]; ok {
		return tok
	}
	return IDENT
}
