async function executeCode() {
    const codeInput = document.getElementById("codeInput").value;

    // Process the input to merge multiline code within { } into a single line
    const processedCode = processCode(codeInput);

    const response = await fetch("https://indian-language-interpreter.onrender.com", {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: processedCode // Use the processed code here
    });

    if (response.ok) {
        const result = await response.text();
        document.getElementById("outputDisplay").textContent = result;
    } else {
        document.getElementById("outputDisplay").textContent = "Error: " + response.statusText;
    }
}

function updateLineNumbers() {
    const textarea = document.getElementById("codeInput");
    const lineNumbers = document.getElementById("lineNumbers");
    const lines = textarea.value.split("\n");
    lineNumbers.innerHTML = lines.map((_, index) => `<div>${index + 1}</div>`).join("");
}

function toggleThemeOptions() {
    const options = document.getElementById("themeOptions");
    options.style.display = options.style.display === "flex" ? "none" : "flex";
}

function processCode(input) {
    return input.replace(/(\{(?:[^{}]*|{[^{}]*})*\})/gs, match => match.replace(/\n/g, ' '));
}

function setTheme(theme) {
    const bob = document.getElementById("codeInput");
    if (theme === 'dark') {
        bob.style.backgroundColor = "var(--dark-bg)";
        bob.style.color = "var(--dark-text)";
        bob.style.textShadow = "none";
        document.getElementById("x1").style.textShadow = "none";
        document.getElementById("x1").style.color = "white";
        document.body.style.backgroundColor = "var(--textarea-bg)";
        document.getElementById("tabs").style.textShadow = "none";
        document.getElementById("cont").style.backgroundColor = "var(--container-bg)";
        document.getElementById("x2").style.textShadow = "none";
        document.getElementById("x2").style.color = "white";
        document.getElementById("outputDisplay").style.textShadow = "none";
        document.getElementById("outputDisplay").style.color = "var(--dark-text)";
        document.getElementById("about").style.backgroundColor= "var(--textarea-bg)";
        document.getElementById("about").style.color= "black";
        document.getElementById("x3").style.textShadow = "none";
        document.getElementById("x3").style.color = "var(--dark-text)";
        document.getElementById("x4").style.textShadow= "none";
        document.getElementById("x4").style.color= "var(--navy-text)";
        document.getElementById("x5").style.textShadow= "none";
        document.getElementById("x5").style.color= "var(--navy-text)";
        document.getElementById("x6").style.textShadow= "none";
        document.getElementById("x6").style.color= "var(--navy-text)";
        document.getElementById("x6").style.backgroundColor= "var(--textarea-bg)";
        document.getElementById("cont").style.boxShadow = "none";
        document.getElementById("x7").style.textShadow= "none";
        document.getElementById("x7").style.color= "var(--navy-text)";
        document.getElementById("factorial").style.textShadow= "none";
        document.getElementById("factorial").style.color= "white";
        
    }

    else if (theme === 'light') {
        bob.style.backgroundColor = "white";
        bob.style.color = "var(--textarea-bg)";
        bob.style.textShadow = "none";
        document.getElementById("x1").style.textShadow = "none";
        document.getElementById("x1").style.color = "white";
        document.body.style.backgroundColor = "black";
        document.getElementById("tabs").style.textShadow = "none";
        document.getElementById("cont").style.backgroundColor = "var(--container-bg)";
        document.getElementById("x2").style.textShadow = "none";
        document.getElementById("x2").style.color = "white";
        document.getElementById("outputDisplay").style.textShadow = "none";
        document.getElementById("outputDisplay").style.color = "black";
        document.getElementById("x3").style.textShadow = "none";
        document.getElementById("x3").style.color = "black";
        document.getElementById("about").style.backgroundColor= "white";
        document.getElementById("about").style.color= "black";
        document.getElementById("x4").style.textShadow= "none";
        document.getElementById("x4").style.color= "black";
        document.getElementById("x5").style.textShadow= "none";
        document.getElementById("x5").style.color= "black";
        document.getElementById("x6").style.textShadow= "none";
        document.getElementById("x6").style.color= "black";
        document.getElementById("x6").style.backgroundColor= "white";
        document.getElementById("factorial").style.textShadow= "none";
        document.getElementById("factorial").style.color= "white";
        document.getElementById("cont").style.boxShadow = "none";
        document.getElementById("x7").style.textShadow= "none";
        document.getElementById("x7").style.color= "var(--navy-text)";
        
    }

    else if (theme === 'navy') {
        bob.style.backgroundColor = "#2f3742";
        bob.style.color = "var(--navy-text)";
        bob.style.textShadow = "none";
        document.getElementById("x1").style.textShadow = "none";
        document.getElementById("x1").style.color = "white";
        document.body.style.backgroundColor = "rgb(22 27 34)";
        document.getElementById("tabs").style.textShadow = "none";
        document.getElementById("cont").style.backgroundColor = "rgb(32 36 41)";
        document.getElementById("x2").style.textShadow = "none";
        document.getElementById("x2").style.color = "white";
        document.getElementById("outputDisplay").style.textShadow = "none";
        document.getElementById("outputDisplay").style.color = "var(--navy-text)";
        document.getElementById("x3").style.textShadow = "none";
        document.getElementById("x3").style.color = "var(--navy-text)";
        document.getElementById("about").style.backgroundColor= "#2f3742";
        document.getElementById("about").style.color= "var(--navy-text)";
        document.getElementById("x4").style.textShadow= "none";
        document.getElementById("x4").style.color= "var(--navy-text)";
        document.getElementById("x5").style.textShadow= "none";
        document.getElementById("x5").style.color= "var(--navy-text)";
        document.getElementById("x6").style.textShadow= "none";
        document.getElementById("x6").style.color= "var(--navy-text)";
        document.getElementById("x6").style.backgroundColor= "#2f3742";
        document.getElementById("factorial").style.textShadow= "none";
        document.getElementById("factorial").style.color= "var(--navy-text)";
        document.getElementById("cont").style.boxShadow = "none";
        document.getElementById("x7").style.textShadow= "none";
        document.getElementById("x7").style.color= "var(--navy-text)";
    }

    else if (theme === 'neon') {
        bob.style.backgroundColor = "var(--dark-bg)";
        bob.style.textShadow = "0 0 3px #FFE205, 0 0 7px #FFE205, 0 0 20px #EDD205";
        bob.style.color = "wheat";
        document.getElementById("x1").style.textShadow = "0em 0em 1.0em red, 0em 0em 1.0em red, 0em 0em 0.2em yellow";
        document.getElementById("x1").style.color = "pink";
        document.body.style.backgroundColor = "black";
        document.getElementById("tabs").style.textShadow = "0em 0em 1.0em wheat, 0em 0em 1.0em wheat, 0em 0em 1.0em wheat, 0em 0em 0.2em yellow";
        document.getElementById("x2").style.textShadow = "0em 0em 1.0em cyan, 0em 0em 1.0em cyan, 0em 0em 0.2em yellow";
        document.getElementById("x2").style.color = "cyan";
        document.getElementById("cont").style.backgroundColor = "#131212";
        document.getElementById("outputDisplay").style.textShadow = "0 0 3px #FFE205, 0 0 7px #FFE205, 0 0 20px #EDD205";
        document.getElementById("outputDisplay").style.color = "wheat";
        document.getElementById("x3").style.textShadow = "0 0 3px rgb(33, 206, 154), 0 0 7px rgb(33, 206, 154), 0 0 14px rgb(33, 206, 154), 0 0 20px rgb(28, 207, 147)";
        document.getElementById("x3").style.color = "rgb(74, 215, 172)";
        document.getElementById("about").style.backgroundColor= "#131212";
        document.getElementById("x4").style.textShadow= "0 0 3px rgb(67, 164, 216), 0 0 7px rgb(67, 164, 216), 0 0 14px rgb(33, 206, 154), 0 0 20px rgb(28, 207, 147)";
        document.getElementById("x4").style.color= "rgb(170, 210, 232)";
        document.getElementById("x5").style.textShadow= "0 0 3px rgb(130, 86, 223), 0 0 7px rgb(130, 86, 223), 0 0 14px rgb(102, 59, 212), 0 0 20px rgb(102, 59, 212)";
        document.getElementById("x5").style.color= "rgb(197, 134, 236)";
        document.getElementById("factorial").style.textShadow = "0 0 3px rgb(33, 206, 154), 0 0 7px rgb(33, 206, 154), 0 0 14px rgb(33, 206, 154), 0 0 20px rgb(28, 207, 147)";
        document.getElementById("factorial").style.color = "rgb(74, 215, 172)";
        document.getElementById("x6").style.textShadow= "0 0 3px rgb(105, 67, 186), 0 0 7px rgb(111, 65, 210), 0 0 14px rgb(100, 53, 218), 0 0 20px rgb(102, 59, 212)";
        document.getElementById("x6").style.color= "rgb(197, 134, 236)";
        document.getElementById("x6").style.backgroundColor= "var(--textarea-bg)";
        document.getElementById("x7").style.textShadow= "0 0 3px rgb(219, 165, 50), 0 0 7px rgb(190, 187, 28), 0 0 14px rgb(218, 216, 88), 0 0 20px rgb(232, 159, 23)";
        document.getElementById("x7").style.color= "rgb(230, 218, 112)";

        document.getElementById("cont").style.boxShadow = "0 0 3px rgb(125, 225, 105), 0 0 7px rgb(102, 223, 88), 0 0 14px rgb(121, 198, 108), 0 0 20px rgb(52, 110, 67)";
        

    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll(".code-section");
    sections.forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";

    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    document.querySelector(`.tab[onclick="showSection('${sectionId}')"]`).classList.add("active");
}


document.getElementById("codeInput").addEventListener("keydown", function (e) {
    const textarea = this;

    // Handle Tab key for 4 spaces
    if (e.key === "Tab") {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        // Insert 4 spaces
        textarea.value = textarea.value.substring(0, start) + "    " + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 4; // Move cursor after 4 spaces
    }

    // Handle opening bracket '{', '(', '[' , " , ' -for auto-closing with '}', ')', ']', ", '
    if (e.key === "{" || e.key === "(" || e.key === "[" || e.key === "\"" || e.key === "\'") {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const opening = e.key;
        const closing = e.key === "{" ? "}" : e.key === "(" ? ")" : e.key === "\"" ? "\"" : e.key === "\'" ? "\'" : "]";

        // Insert opening and closing brackets
        textarea.value =
            textarea.value.substring(0, start) +
            opening +
            closing +
            textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1; // Place cursor between the brackets
    }

    // Auto-indent for new lines
    if (e.key === "Enter") {
        e.preventDefault();
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const beforeCursor = textarea.value.substring(0, start);
        const afterCursor = textarea.value.substring(end);
        const currentLine = beforeCursor.split("\n").pop();
        const leadingSpaces = currentLine.match(/^\s*/)[0]; // Get leading whitespace

        // Add a new line with the same indentation 
        textarea.value = beforeCursor + "\n" + leadingSpaces + afterCursor;
        const lastChar = currentLine.trim().slice(-1);
        const nextChar = afterCursor.charAt(0); // Get the next character after cursor
        if (lastChar === '{') {
            textarea.value =
                beforeCursor +
                "\n" +
                leadingSpaces +
                "    \n" + // Add indented line
                leadingSpaces +

                afterCursor;
            textarea.selectionStart = textarea.selectionEnd = start + leadingSpaces.length + 5; // Move cursor after new line
        }
        else if (nextChar === ")" || nextChar === "}" || nextChar === "]" || nextChar === "\"" || nextChar === "\'") {
            textarea.value = beforeCursor + afterCursor; 
            textarea.selectionStart = textarea.selectionEnd = start + 1 ;   
        }

        else if (lastChar === '(' || lastChar === '[') {
            textarea.value = beforeCursor + afterCursor;
            textarea.selectionStart = textarea.selectionEnd = start + leadingSpaces.length + 1;
        }
        
        else {
            textarea.selectionStart = textarea.selectionEnd = start + leadingSpaces.length + 1;
        }
        
    }

    // Handle Backspace for 4 spaces removal 
    textarea.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
    
            // Only act on single cursor position
            if (start === end) {
                const beforeCursor = textarea.value.substring(0, start);
                const currentLine = beforeCursor.split("\n").pop();
                const leadingSpaces = currentLine.match(/^\s*/)[0];
    
                // Check if the last 4 characters are spaces
                if (leadingSpaces.endsWith("    ") && beforeCursor.endsWith("    ")) {
                    e.preventDefault();
    
                    // Remove the last 4 spaces and update the textarea value
                    textarea.value =
                        beforeCursor.substring(0, beforeCursor.length - 4) +
                        textarea.value.substring(end);
    
                    // Update the cursor position
                    textarea.selectionStart = textarea.selectionEnd = start - 4;
                }
            }
        }
    });
    
});



// Create undo and redo stacks
let undoStack = [];
let redoStack = [];

// Track changes in the textarea
const textarea = document.getElementById("codeInput");

// Save the current state (value and cursor position) to the undo stack
function saveState() {
    undoStack.push({
        value: textarea.value,
        cursorStart: textarea.selectionStart,
        cursorEnd: textarea.selectionEnd,
    });
    redoStack = []; // Clear redo stack on new input
}

// Restore a state from a stack (undo/redo)
function restoreState(state) {
    textarea.value = state.value;
    textarea.selectionStart = state.cursorStart;
    textarea.selectionEnd = state.cursorEnd;
}

// Listen for changes to the textarea and save to the undo stack
textarea.addEventListener("input", saveState);

// Handle Ctrl+Z (Undo) and Ctrl+Y (Redo)
textarea.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "z") { // Undo functionality
        e.preventDefault();
        if (undoStack.length > 0) {
            const currentState = {
                value: textarea.value,
                cursorStart: textarea.selectionStart,
                cursorEnd: textarea.selectionEnd,
            };
            redoStack.push(currentState); // Save current state to redo stack
            const prevState = undoStack.pop(); // Get the previous state
            restoreState(prevState); // Restore the previous state
        }
    } else if (e.ctrlKey && e.key === "y") { // Redo functionality
        e.preventDefault();
        if (redoStack.length > 0) {
            const currentState = {
                value: textarea.value,
                cursorStart: textarea.selectionStart,
                cursorEnd: textarea.selectionEnd,
            };
            undoStack.push(currentState); // Save current state to undo stack
            const nextState = redoStack.pop(); // Get the next state
            restoreState(nextState); // Restore the next state
        }
    }
});
// Save the initial state when the page loads
saveState();

// Handle Backspace to delete empty brackets
textarea.addEventListener("keydown", function (e) {
    if (e.key === "Backspace") {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        if (start === end) { // Only act if there's no text selection
            const beforeCursor = textarea.value.substring(0, start);
            const afterCursor = textarea.value.substring(start);
            
            const openClosePairs = {
                "(": ")",
                "{": "}",
                "[": "]",
                "\"": "\"",
                "\'": "\'"
            };

            const charBeforeCursor = beforeCursor.slice(-1);
            const charAfterCursor = afterCursor.charAt(0);

            // Check if the cursor is between matching open and close brackets
            if (openClosePairs[charBeforeCursor] === charAfterCursor) {
                e.preventDefault();
                // Remove both brackets
                textarea.value =
                    beforeCursor.slice(0, -1) +
                    afterCursor.slice(1);
                textarea.selectionStart = textarea.selectionEnd = start - 1; // Adjust cursor position
            }
        }
    }
});


// Define snippets
const snippets = {
    "!lp": "loop() {\n    // code\n}",
    "!fn": "dekh fn-name = fn(){\n    // body\n}",
};

document.getElementById("codeInput").addEventListener("keydown", function (e) {
    const textarea = this;
    const start = textarea.selectionStart;
    const beforeCursor = textarea.value.substring(0, start); // Text before cursor
    const afterCursor = textarea.value.substring(start); // Text after cursor

    // Check if the Enter key is pressed
    if (e.key === "Enter") {
        // Get the last word before cursor by splitting on spaces and trimming punctuation
        const lastWord = beforeCursor.trim().split(/\s+/).pop(); // Get the last word typed before the cursor

        // Debugging line to check last word
        console.log("Last Word: ", lastWord);

        // Check if the last word is a snippet trigger (e.g., !for, !log)
        if (lastWord.startsWith("!") && snippets[lastWord]) {
            e.preventDefault(); // Prevent the default Enter action (new line)

            // Replace the snippet trigger with the snippet text
            textarea.value = beforeCursor.substring(1, beforeCursor.length - lastWord.length) + snippets[lastWord] + afterCursor;

            // Move cursor after the inserted snippet
            const snippetLength = snippets[lastWord].length;
            textarea.selectionStart = textarea.selectionEnd = start + snippetLength;

            return; // Exit early to prevent default behavior
        }
    }
});



window.onload = updateLineNumbers;
